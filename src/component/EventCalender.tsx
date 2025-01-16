"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "13:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet in con laoreet et justo so simple and simple in writing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "13:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet in con laoreet et justo so simple and simple in writing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "13:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet in con laoreet et justo so simple and simple in writing elit.",
  },
];

export default function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value)
  return (
    <div className="bg-white rounded-lg p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
