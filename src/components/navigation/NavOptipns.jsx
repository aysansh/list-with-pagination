import { IoLanguage } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoInvertModeSharp } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";

function NavOptipns() {
  return (
    <div className="flex items-center gap-5 text-xl">
      <div className="flex gap-2 items-center">
      <IoLanguage />
      <span>
        فارسی
      </span>
      <FaAngleDown />
      </div>
      <IoInvertModeSharp />
      <IoMdRefresh />
    </div>
  )
}

export default NavOptipns