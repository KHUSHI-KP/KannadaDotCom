export default function Portfolio() {
  return (
    <div className="dashboard-content p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-[#2b235a]">
          Business Portfolio
        </h2>

        <p className="text-gray-600 mt-2">
          Manage and showcase your business profile digitally.
        </p>

        {/* Profile Completion */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">
              Profile Completion
            </span>

            <span className="font-bold text-purple-700">
              80%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-purple-600 h-3 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-[#f5f5f5] rounded-xl p-4">
            <h3 className="text-sm text-gray-500">
              Products Listed
            </h3>

            <p className="text-2xl font-bold mt-2">24</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl p-4">
            <h3 className="text-sm text-gray-500">
              Customer Reach
            </h3>

            <p className="text-2xl font-bold mt-2">8.4K</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl p-4">
            <h3 className="text-sm text-gray-500">
              Active Campaigns
            </h3>

            <p className="text-2xl font-bold mt-2">12</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
            Edit Portfolio
          </button>

          <button className="border border-purple-700 text-purple-700 px-5 py-2 rounded-lg hover:bg-purple-50 transition">
            Preview Profile
          </button>
        </div>
      </div>
    </div>
  );
}
