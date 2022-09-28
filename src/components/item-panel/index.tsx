import type { FC } from 'react';
import { Collapse } from 'antd';

export interface ItemPanelProps {
  header?: string;
  children: React.ReactNode;
}

const ItemPanel: FC<ItemPanelProps> = (props) => {
  const { header, children } = props;
  return (
    <Collapse ghost>
      <Collapse.Panel header={header} key="1">
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};

export default ItemPanel;
