import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

  return (
    <div className="min-h-screen flex flex-col bg-[#e0c29a]">

      <Navbar />

      <main className="flex-1 px-6 py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-start">

          {/* LEFT MAIN FEED */}
          <div className="col-span-8">
            <Outlet />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-4 sticky top-6">
            <Sidebar />
          </div>

        </div>

      </main>

    </div>
  );
}