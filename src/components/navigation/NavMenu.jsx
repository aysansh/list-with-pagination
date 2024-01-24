import { IoMenu } from "react-icons/io5";
import SideBar from "../sideBar/SideBar";

function NavMenu() {
  return (
   
      <div className="collapse w-2/12">
        <input type="checkbox" />
        <div className="flex items-center gap-3 collapse-title text-xl font-medium">
          <IoMenu />
      <span>لیست ثابت ها</span>
        </div>
        <SideBar/>
      </div>
      
  
  );
}

export default NavMenu;
