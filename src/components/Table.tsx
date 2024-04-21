import { ReactNode } from 'react';
import Card from './Card';

type TableHead<T> = {
  label: string;
  key: keyof T;
  render?: (row: T) => ReactNode;
};

type UniqueProperty = {
  name: string;
  [key: string]: any;
};

type TableProps<T extends UniqueProperty> = {
  rows: T[];
  headers: TableHead<T>[];
};

const Table = <T extends UniqueProperty>({ rows, headers }: TableProps<T>) => {
  return (
    <Card>
      <table className="w-full min-w-max text-left">
        <thead>
          <tr>
            {headers.map((head) => (
              <th
                key={head.key.toString()}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <p className="font-normal leading-none opacity-70">
                  {head.label}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <tr key={row.name}>
                {headers.map((head) => {
                  return (
                    <td className={classes} key={head.label + '_' + row.name}>
                      <p className="font-normal">
                        {head.render ? head.render(row) : row[head.key]}
                      </p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
