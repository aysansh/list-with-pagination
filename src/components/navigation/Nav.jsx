import NavMenu from "./NavMenu"
import NavOptipns from "./NavOptipns"


function Nav() {
  return (
    <div className="flex justify-between items-center bg-blue-800 shadow-gray-400 shadow-lg text-white px-4">
        <NavMenu/>
        <NavOptipns/>
    </div>
  )
}

export default Nav