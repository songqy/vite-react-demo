import ItemPanel from '../item-panel';
// import { UIKitComponent } from '@giteeteam/loader';

export interface PluginLoaderProps {
  header: string;
  appId: string;
  environmentId: string;
  versionId: string;
  moduleKey: string;
}

const PluginLoader = (props: PluginLoaderProps) => {
  // const { header, appId, environmentId, moduleKey, versionId } = props;
  const { header } = props;
  return (
    <ItemPanel header={header}>
      {/* <UIKitComponent
        api={`/api2/v1/apps/${appId}/${environmentId}/${versionId}/functions/${moduleKey}`}
        appKey={appId}
      /> */}
      {'111'}
    </ItemPanel>
  );
};

export default PluginLoader;
