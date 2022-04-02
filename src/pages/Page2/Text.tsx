import type { FC } from 'react';

const Text: FC = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Text;
