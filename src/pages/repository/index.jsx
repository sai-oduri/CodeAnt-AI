import Sidebar from "./Sidebar";
import Repositories from "./Repositories";

const Repository = () => {
  return (
    <div className="h-screen w-full flex bg-red-200">
      <Sidebar />
      <Repositories />
    </div>
  )
}

export default Repository