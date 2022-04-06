import axios from 'axios';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Space, Button, Table } from 'antd';
import Text from './Text';

const Compoents: Record<string, unknown> = {
  Fragment: React.Fragment,
  Space,
  Button,
  Text,
  Table,
};

interface EleData {
  type: string;
  props: Record<string, any>;
}

const Page2 = () => {
  const [eleData, setEleData] = useState<EleData>();
  const [stateData, setStateData] = useState();

  const fetchComponent = useCallback((componentData = {}) => {
    console.log('fetchComponent', componentData);
    axios
      .post('/api', componentData)
      .then((data) => {
        console.log('data', data.data);
        setEleData(data.data.ele);
        setStateData(data.data.state);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const createEle = useCallback(
    (type: string, props: Record<string, any>) => {
      let children = props.children;
      if (children?.length) {
        children = children.map((v: any) => {
          if (v?.type) {
            return createEle(v.type, v.props);
          }
          return v;
        });
      }
      const newProps = { ...props };
      if (props.onClick) {
        const actionName = props.onClick;
        newProps.onClick = () => {
          fetchComponent({
            state: stateData,
            action: actionName,
          });
        };
      }
      return React.createElement(
        Compoents[type] as React.FC,
        newProps,
        children,
      );
    },
    [fetchComponent, stateData],
  );

  const ele = useMemo(() => {
    if (eleData) {
      return createEle(eleData.type, eleData.props);
    }
    return null;
  }, [eleData, createEle]);

  useEffect(() => {
    fetchComponent();
  }, [fetchComponent]);

  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      <div>{ele}</div>
    </div>
  );
};

export default Page2;
