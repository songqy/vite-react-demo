import PluginLoader from '@/components/plugin-loader';

const plugins = [
  {
    header: 'app1',
    appKey: 'key1',
  },
  {
    header: 'app2',
    appKey: 'key2',
  },
];

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      {plugins.map(({ header, appKey }) => (
        <PluginLoader header={header} appKey={appKey} key={appKey} />
      ))}
    </div>
  );
};

export default Page2;
