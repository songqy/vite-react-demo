import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '../router/routes';
import styles from './BasicLayout.module.less';

export interface BasicLayoutProps {
  children: React.ReactNode;
}

const menuItems = routes.map(({ path, name }) => ({
  label: name,
  key: path,
}));

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = (val: any) => {
    if (pathname !== val.key) {
      navigate(val.key);
    }
  };
  return (
    <div className={styles.layout}>
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[pathname]}
        items={menuItems}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BasicLayout;
