import type { FC } from 'react';
import { Input } from 'antd';

export interface SearchInputProps {
  defaultValue?: string;
  disabled?: boolean;
  onSearch?: (val: string) => void;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = (props) => {
  return <Input.Search {...props} />;
};

export default SearchInput;
