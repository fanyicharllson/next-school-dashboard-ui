import Announcement from "@/component/Announcement";
import AttendanceChart from "@/component/AttendanceChart";
import CountChart from "@/component/CountChart";
import EventCalender from "@/component/EventCalender";
import FinanceChart from "@/component/FinanceChart";
import UserCard from "@/component/UserCard";
import React from "react";

export default function AdminPage() {
  return (
    <div className="flex p-4 gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex flex-col gap-4">
          {/* Middle Page */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
            </div>
            {/* Attendance chart */}
            <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
            </div>
          </div>

          {/* Bottom chart */}
          <div className="w-full h-[500px]">
            <FinanceChart />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
}
