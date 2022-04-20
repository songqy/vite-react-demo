import type { FC } from 'react';

export interface TextProps {
  style?: React.CSSProperties;
}

const Text: FC<TextProps> = (props) => {
  const { children, style } = props;
  return <div style={style}>{children}</div>;
};

export default Text;
