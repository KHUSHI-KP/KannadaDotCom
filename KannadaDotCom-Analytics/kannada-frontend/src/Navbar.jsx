import { FaBell, FaUserCircle } from "react-icons/fa";
import logo from "/logo.png";
import LanguageToggle from "./LanguageToggle";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider";

export default function Navbar() {
  const langCtx = useContext(LanguageContext);
  const _t = langCtx && langCtx.t ? langCtx.t : (k) => k;
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-gradient-to-b from-yellow-100 to-yellow-50 shadow-sm rounded-md">
      <div className="flex items-center gap-4">
        <div className="logo">
          <img src={logo} alt="logo" className="h-11" />
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-3">
            <input
              className="w-full py-2 px-4 rounded-full border border-gray-200 shadow-sm focus:outline-none"
              placeholder={_t("searchPlaceholder")}
            />
            <button className="px-4 py-2 rounded-full bg-gradient-to-b from-brandPurple to-[#5a3fd6] text-white font-semibold">
              {(_t("searchPlaceholder") || "Search").split(",")[0]}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <LanguageToggle />
        <div className="flex items-center gap-3 text-xl text-gray-700">
          <FaBell />
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
}
