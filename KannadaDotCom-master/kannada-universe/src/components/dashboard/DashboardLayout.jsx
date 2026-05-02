import ActionBar from "./ActionBar";
import Feed from "./Feed";

export default function DashboardLayout(){

  return(

    <div className="bg-[#faebd8] rounded-2xl shadow-xl overflow-hidden p-6">

      <ActionBar />

      <div className="mt-6">
        <Feed />
      </div>

    </div>

  )

}