import { Fragment } from 'react';
import { Space, Button, Table, Avatar, Badge } from 'antd';
import Text from './Text';
import SearchInput from './SearchInput';

const Components = {
  Fragment,
  Space,
  Button,
  Text,
  Table,
  Avatar,
  Badge,
  SearchInput,
};

export type componentType = keyof typeof Components;
export default Components;
