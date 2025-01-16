import React from "react";
import { menuItems } from "@/lib/menu";
import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

export default function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menuItem) => (
        <div className="flex flex-col gap-2" key={menuItem.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menuItem.title}
          </span>
          {menuItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-lamaSkyLight md:px-2"
                >
                  <Image src={item.icon} alt="Icon" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
