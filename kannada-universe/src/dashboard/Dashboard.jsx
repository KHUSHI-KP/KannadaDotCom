import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  // hide sidebar on creator studio page
  const hideSidebar = location.pathname === "/create";

  return (
    <div className="min-h-screen w-full bg-[#e0c29a]">

      <Navbar />

      <main className="w-full px-4 py-6">

        <div className={`w-full ${hideSidebar ? "" : "grid grid-cols-12 gap-6"}`}>

          {/* MAIN CONTENT */}
          <div className={hideSidebar ? "w-full" : "col-span-8"}>
            <Outlet />
          </div>

          {/* RIGHT SIDEBAR (ONLY for home) */}
          {!hideSidebar && (
            <div className="col-span-4 sticky top-6">
              <Sidebar />
            </div>
          )}

        </div>

      </main>

    </div>
  );
}