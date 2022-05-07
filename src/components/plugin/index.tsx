import type { FC } from 'react';
import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  memo,
} from 'react';
import axios from 'axios';
import { message, Spin, Alert } from 'antd';
import type { componentType } from './components';
import PluginComponents from './components';
import styles from './index.less';

interface EleData {
  type: componentType;
  props: Record<string, any>;
}

interface ErrData {
  message?: string;
  stack?: string;
}

const Plugin: FC<Record<string, any>> = (pluginProps) => {
  const [eleData, setEleData] = useState<EleData>();
  const [loading, setLoading] = useState(true);
  const [errData, setErrData] = useState<ErrData>({});
  const stateData = useRef();

  const fetchComponent = useCallback(
    (componentData = {}) => {
      setLoading(true);
      const requestData = {
        props: pluginProps,
        ...componentData,
      };
      console.log('fetchComponent', requestData);
      axios
        .post('/api', requestData)
        .then((res) => {
          const { data } = res;
          console.log('data', data);
          if (data.message) {
            message.error(data.message);
            setErrData(data);
          } else {
            setEleData(data.ele);
            setErrData({});
            stateData.current = data.state;
          }
        })
        .catch((err) => {
          if (err.response) {
            setErrData({
              message: err.response.statusText,
              stack: err.response.data,
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [pluginProps],
  );

  const createEle = useCallback(
    (type: componentType, props: Record<string, any>) => {
      if (!(type in PluginComponents)) {
        throw new Error(`${type} is not in Components`);
      }
      let children = props.children;
      if (children?.length) {
        children = children.map((v: EleData) => {
          if (v?.type) {
            return createEle(v.type, v.props);
          }
          return v;
        });
      } else {
        children = undefined;
      }
      const newProps = { ...props };
      if (props.actions) {
        for (const action of props.actions) {
          const { event, name } = action;
          const handleAction = (val: any) => {
            const payload = [];
            if (event === 'onSearch') {
              payload.push(val);
            }
            fetchComponent({
              state: stateData.current,
              action: {
                name,
                payload,
              },
            });
          };
          newProps[event] = handleAction;
        }
      }
      // @ts-ignore
      return React.createElement(PluginComponents[type], newProps, children);
    },
    [fetchComponent],
  );

  const ele = useMemo(() => {
    let eleDom: React.ReactNode = <div className={styles.blank} />;

    if (errData?.message) {
      const description = (
        <div>
          <div className={styles.stack}>{errData.stack}</div>
          <div className={styles.fresh} onClick={() => fetchComponent()}>
            refresh app
          </div>
        </div>
      );
      eleDom = (
        <Alert
          message={errData.message}
          description={description}
          type="warning"
          showIcon
        />
      );
    } else if (eleData) {
      try {
        eleDom = createEle(eleData.type, eleData.props);
      } catch (err) {
        if (err instanceof Error) {
          setErrData({ message: err.message });
        }
      }
    }
    return eleDom;
  }, [eleData, createEle, errData, fetchComponent]);

  useEffect(() => {
    fetchComponent();
  }, [fetchComponent]);

  return <Spin spinning={loading}>{ele}</Spin>;
};

export default memo(Plugin);
