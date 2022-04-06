import Router from './router';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
