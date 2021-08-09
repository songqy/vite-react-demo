import { Menu } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import routes from '../router/routes';

const BasicLayout: React.FC = (props) => {
  const { children } = props;
  const history = useHistory();
  const { pathname } = useLocation();
  const handleClick = (val: any) => {
    if (pathname !== val.key) {
      history.push(val.key);
    }
  };
  return (
    <div>
      <Menu mode="horizontal" onClick={handleClick} selectedKeys={[pathname]}>
        {routes.map(({ path, name }) => {
          return <Menu.Item key={path}>{name}</Menu.Item>;
        })}
      </Menu>
      {children}
    </div>
  );
};

export default BasicLayout;
