import { HiDownload } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

function CreateReceive() {
  return (
    <div className="flex gap-6 items-center justify-end text-blue-800 mb-9 ml-6">
      <div className="flex gap-3 items-center cursor-pointer">
        <FaPlus />
        <span>ایجاد</span>
      </div>
      <div className="flex gap-3 items-center cursor-pointer">
        <HiDownload />
        <span>دریافت خروجی</span>
      </div>
    </div>
  );
}

export default CreateReceive;
