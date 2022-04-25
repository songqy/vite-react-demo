import Plugin from '@c/plugin';

const Page2 = () => {
  return (
    <div>
      <h3>page2</h3>
      <div>请求后端返回react结构</div>
      <Plugin name="Plugin AAAAA" />
      <Plugin name="Plugin BBBBB" />
    </div>
  );
};

export default Page2;
