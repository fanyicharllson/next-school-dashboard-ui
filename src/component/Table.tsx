import React from "react";

type TableProps = {
  columns: { 
    header: string;
    accessor: string;
    className?: string
}[];
};

export default function Table({ columns }: TableProps) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th key={column.accessor} className={column.className}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{/* Your data rows go here */}</tbody>
    </table>
  );
}
