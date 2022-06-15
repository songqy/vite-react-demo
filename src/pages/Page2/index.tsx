import PluginLoader from '@/components/plugin-loader';

const plugins = [
  {
    header: 'app1',
    appId: 'app1',
    key: '1',
  },
  {
    header: 'app2',
    appId: 'app2',
    key: '2',
  },
  {
    header: 'app3',
    appId: 'app3',
    key: '3',
  },
];

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      {plugins.map(({ header, appId, key }) => (
        <PluginLoader header={header} appId={appId} key={key} />
      ))}
    </div>
  );
};

export default Page2;
