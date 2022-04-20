import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import type { componentType } from '@c/plugin-components';
import PluginComponents from '@c/plugin-components';

interface EleData {
  type: componentType;
  props: Record<string, any>;
}

const Plugin = () => {
  const [eleData, setEleData] = useState<EleData>();
  const [loading, setLoading] = useState(true);
  const stateData = useRef();

  const fetchComponent = useCallback((componentData = {}) => {
    setLoading(true);
    console.log('fetchComponent', componentData);
    axios
      .post('/api', componentData)
      .then((data) => {
        console.log('data', data.data);
        setEleData(data.data.ele);
        stateData.current = data.data.state;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      }
      const newProps = { ...props };
      if (props.actions) {
        for (const action of props.actions) {
          const { event, name } = action;
          newProps[event] = () => {
            fetchComponent({
              state: stateData.current,
              action: {
                name,
                payload: [],
              },
            });
          };
        }
      }
      return React.createElement(PluginComponents[type], newProps, children);
    },
    [fetchComponent],
  );

  const ele = useMemo(() => {
    let eleDom: React.ReactNode = <div />;
    if (eleData) {
      try {
        eleDom = createEle(eleData.type, eleData.props);
      } catch (err) {
        if (err instanceof Error) {
          eleDom = err.message;
        }
      }
    }
    return <Spin spinning={loading}>{eleDom}</Spin>;
  }, [loading, eleData, createEle]);

  useEffect(() => {
    fetchComponent();
  }, [fetchComponent]);

  return <div>{ele}</div>;
};

export default Plugin;
