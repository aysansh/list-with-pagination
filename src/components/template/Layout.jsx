import Nav from "../navigation/Nav";

import CreateReceive from "../CreateReceive";
import SideBar from "../sideBar/SideBar";

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex flex-col">
        <div className="flex gap-4">
          <div className="w-2/12"><SideBar/></div>
          <div className="w-full pt-7">
            <CreateReceive />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
