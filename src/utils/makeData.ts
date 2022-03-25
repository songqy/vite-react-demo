export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: 'relationship' | 'complicated' | 'single';
}

export interface Item extends Person {
  subRows?: Item[];
}

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const charStr = 'abcdefghijklmnopqrstuvwxyz';

const getRandomStr = (len: number) => {
  return range(len).reduce(
    (str) => str + charStr[Math.floor(Math.random() * charStr.length)],
    '',
  );
};

const newPerson = (): Person => {
  const statusChance = Math.random();
  return {
    firstName: getRandomStr(3),
    lastName: getRandomStr(4),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  };
};

export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Item[] => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
