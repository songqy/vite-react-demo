import { useEffect, useState } from 'react';
import { Button } from 'antd';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <div>
      <div>Home</div>
      <Button block type="primary" onClick={() => setCount((c) => c + 1)}>
        ADD
      </Button>
      count:{count}
    </div>
  );
};

export default Home;
