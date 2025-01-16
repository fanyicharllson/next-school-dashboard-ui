import Link from "next/link";
import Image from "next/image";
import Menu from "@/component/Menu";
import "@/app/globals.css";
import Navbar from "@/component/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-1/6 xl:w-[16%] p-4 overflow-scroll">
        <Link href="/" className="flex items-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-mono font-bold">SchooLama</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
