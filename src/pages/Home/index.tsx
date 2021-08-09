import { useState } from 'react';
import { Button } from 'antd-mobile';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Home</div>
      <Button type="primary" onClick={() => setCount((c) => c + 1)}>
        ADD
      </Button>
      count:{count}
    </div>
  );
};

export default Home;
