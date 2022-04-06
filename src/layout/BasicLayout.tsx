import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '../router/routes';
import styles from './BasicLayout.module.less';

const BasicLayout: React.FC = (props) => {
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
      <Menu mode="horizontal" onClick={handleClick} selectedKeys={[pathname]}>
        {routes.map(({ path, name }) => {
          return <Menu.Item key={path}>{name}</Menu.Item>;
        })}
      </Menu>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BasicLayout;
