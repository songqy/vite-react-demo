import { useEffect, useState } from 'react';
import { Button } from 'antd-mobile';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count', count);
  }, [count]);

  return (
    <div>
      <div>Home</div>
      <Button block color="primary" onClick={() => setCount((c) => c + 1)}>
        ADD
      </Button>
      count:{count}
    </div>
  );
};

export default Home;
