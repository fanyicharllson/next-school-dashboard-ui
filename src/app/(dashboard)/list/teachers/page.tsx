import React from "react";
import TableSearch from "@/component/TableSearch";
import Image from "next/image";
import Pagination from "@/component/Pagination";
import Table from "@/component/Table";

const columns = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
]

export default function TeacherPage() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 items-center flex justify-center rounded-full bg-lamaYellow">
              <Image
                src="/filter.png"
                alt="filter button"
                width={14}
                height={14}                
              />
            </button>
            <button className="w-8 h-8 items-center flex justify-center rounded-full bg-lamaYellow">
              <Image
                src="/sort.png"
                alt="filter button"
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 items-center flex justify-center rounded-full bg-lamaYellow">
              <Image
                src="/plus.png"
                alt="filter button"
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>
      {/*List  */}
      <Table columns={columns} />
      {/*Pagination  */}
      <Pagination />
    </div>
  );
}
