import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  // show right sidebar only on dashboard home page
  const showSidebar =
    location.pathname === "/dashboard" || location.pathname === "/dashboard/";

  return (
    <div className="min-h-screen w-full bg-[#e0c29a]">
      <Navbar />

      <main className="w-full px-4 py-6">
        <div className={`w-full ${showSidebar ? "grid grid-cols-12 gap-6" : ""}`}>
          <div className={showSidebar ? "col-span-8" : "w-full"}>
            <Outlet />
          </div>

          {showSidebar && (
            <div className="col-span-4 sticky top-6">
              <Sidebar />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}