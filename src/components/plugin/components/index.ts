import { Fragment } from 'react';
import { Space, Button, Table, Avatar, Badge, Input } from 'antd';
import Text from './Text';

const Components = {
  Fragment,
  Space,
  Button,
  Text,
  Table,
  Avatar,
  Badge,
  Input,
};

export type componentType = keyof typeof Components;
export default Components;
