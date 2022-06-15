import ItemPanel from '../item-panel';
import { UIKitComponent } from '@nebulare/loader';

export interface PluginLoaderProps {
  header: string;
  appId: string;
}

const applicationId = 't1';

const PluginLoader = (props: PluginLoaderProps) => {
  const { header, appId } = props;
  return (
    <ItemPanel header={header}>
      <UIKitComponent
        api={`/api2/v1/apps/${applicationId}/${appId}/enviromentId/functions/key`}
        appKey={appId}
      />
    </ItemPanel>
  );
};

export default PluginLoader;
