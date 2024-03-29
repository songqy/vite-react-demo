import PluginLoader from '@/components/plugin-loader';

const plugins = [
  {
    header: '应用A',
    appId: 'app1',
    environmentId: 'env2',
    versionId: 'ver2',
    moduleKey: 'item-panel-key',
    key: '1',
  },
  {
    header: '应用B',
    appId: 'app2',
    environmentId: 'env1',
    versionId: 'ver3',
    moduleKey: 'item-panel-key',
    key: '2',
  },
  {
    header: '应用C',
    appId: 'app2',
    environmentId: 'env1',
    versionId: 'ver3',
    moduleKey: 'item-panel-key',
    key: '3',
  },
];

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      {plugins.map(
        ({ header, appId, environmentId, versionId, key, moduleKey }) => (
          <PluginLoader
            header={header}
            appId={appId}
            environmentId={environmentId}
            versionId={versionId}
            moduleKey={moduleKey}
            key={key}
          />
        ),
      )}
    </div>
  );
};

export default Page2;
