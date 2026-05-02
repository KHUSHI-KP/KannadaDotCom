import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {

  const location = useLocation();

  // show sidebar only on dashboard home page
  const showSidebar =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/";

  return (

    <div className="min-h-screen w-full bg-[#e0c29a]">

      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="w-full px-6 py-8">

        {showSidebar ? (

          /* Dashboard Home Layout (with sidebar) */
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

            {/* main content */}
            <div className="col-span-8">

              <Outlet />

            </div>

            {/* right sidebar */}
            <div className="col-span-4 sticky top-6">

              <Sidebar />

            </div>

          </div>

        ) : (

          /* Other pages (Inbox, Explore, etc) full width */
          <div className="w-full max-w-7xl mx-auto">

            <Outlet />

          </div>

        )}

      </main>

    </div>

  );

}