// import Plugin from '@c/plugin';
import { NebulaApp } from '@nebulare/proxima';

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      <NebulaApp key="1" header="app1" />
      <NebulaApp key="2" header="app2" />
      {/* <Plugin name="Plugin AAAAA" />
      <Plugin name="Plugin BBBBB" /> */}
    </div>
  );
};

export default Page2;
