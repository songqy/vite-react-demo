import ItemPanel from '../item-panel';
import { UIKitComponent } from '@nebulare/loader';

export interface PluginLoaderProps {
  header: string;
  appId: string;
  enviromentId: string;
  moduleKey: string;
}

const applicationId = 'test-a';

const PluginLoader = (props: PluginLoaderProps) => {
  const { header, appId, enviromentId, moduleKey } = props;
  return (
    <ItemPanel header={header}>
      <UIKitComponent
        api={`/api2/v1/apps/${applicationId}/${appId}/${enviromentId}/functions/${moduleKey}`}
        appKey={appId}
      />
    </ItemPanel>
  );
};

export default PluginLoader;
