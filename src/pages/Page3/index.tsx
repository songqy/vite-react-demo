import { useMemo, useEffect, useState } from 'react';
import type { Item } from '@u/makeData';
import makeData from '@u/makeData';
import BaseTable from '@c/base-table';

const Page3 = () => {
  const [data, setData] = useState<Item[]>([]);
  const columns = useMemo(
    () => [
      {
        Header: 'Row Index',
        accessor: (row: any, i: number) => i,
      },
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            width: 50,
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            width: 60,
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    setData(makeData(100000));
  }, []);

  return (
    <div>
      <BaseTable data={data} columns={columns} />
    </div>
  );
};

export default Page3;
