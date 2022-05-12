import { NebulaApp, ConfigProvider } from '@nebulare/proxima';

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      <ConfigProvider faasApi="/api">
        <NebulaApp
          type="ItemPanel"
          appId="app111"
          faasApi="/api"
          rootProps={{ header: 'app1' }}
        />
        <NebulaApp type="ItemPanel" rootProps={{ header: 'app2' }} />
      </ConfigProvider>
    </div>
  );
};

export default Page2;
