import ItemPanel from '../item-panel';
import { UIKitComponent } from '@nebulare/proxima';

export interface PluginLoaderProps {
  header: string;
  appKey: string;
}

const PluginLoader = (props: PluginLoaderProps) => {
  const { header, appKey } = props;
  return (
    <ItemPanel header={header}>
      <UIKitComponent
        api={`/api2/execute/${appKey}/installId/key`}
        appKey={appKey}
      />
    </ItemPanel>
  );
};

export default PluginLoader;
