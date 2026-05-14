import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  const showSidebar =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/";

  return (
    <div className="min-h-screen w-full bg-[#e0c29a]">
      {/* Top Navbar */}
      <Navbar />

      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-[#2b235a]">
            Business Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor engagement, activity, and portfolio performance.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#f4f4f4] rounded-xl p-4">
              <h3 className="text-lg font-semibold">Total Reach</h3>
              <p className="text-2xl font-bold mt-2">12.5K</p>
            </div>

            <div className="bg-[#f4f4f4] rounded-xl p-4">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <p className="text-2xl font-bold mt-2">3.2K</p>
            </div>

            <div className="bg-[#f4f4f4] rounded-xl p-4">
              <h3 className="text-lg font-semibold">Growth Rate</h3>
              <p className="text-2xl font-bold mt-2">18%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="w-full px-6 py-4">
        {showSidebar ? (
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="col-span-8">
              <Outlet />
            </div>

            {/* Sidebar */}
            <div className="col-span-4 sticky top-6">
              <Sidebar />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        )}
      </main>
    </div>
  );
}