import ItemPanel from '../item-panel';
import { UIKitComponent } from '@nebulare/loader';

export interface PluginLoaderProps {
  header: string;
  appId: string;
  enviromentId: string;
  versionId: string;
  moduleKey: string;
}

const PluginLoader = (props: PluginLoaderProps) => {
  const { header, appId, enviromentId, moduleKey, versionId } = props;
  return (
    <ItemPanel header={header}>
      <UIKitComponent
        api={`/api2/v1/apps/${appId}/${enviromentId}/${versionId}/functions/${moduleKey}`}
        appKey={appId}
      />
    </ItemPanel>
  );
};

export default PluginLoader;
