import React from "react";
import Announcement from "@/component/Announcement";
import BigCalendar from "@/component/BigCalendar";

export default function TeacherPage() {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-medium">Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
}
