import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function TableBody({
  domains,
  amounts,
  isActive,
  languageOne,
  languageTwo,
  meaningOne,
  meaningTwo,
}) {
  return (
    <tbody className="text-lg">
      {/* row 1 */}
      <tr className="bg-base-200 border-gray-300">
        {/* دامنه ها */}
        <th>{domains}</th>

        {/* مقادیر */}
        <td>{amounts}</td>

        {/* isActive */}
        <td>{isActive}</td>

        {/* زبان */}
        <td>
          <div className="flex flex-col gap-4">
            <span className="border-b pb-4">{languageOne}</span>
            <span>{languageTwo}</span>
          </div>
        </td>

        {/* معنی */}
        <td>
          <div className="flex flex-col gap-4">
            <span className="border-b pb-4">{meaningOne}</span>
            <span>{meaningTwo}</span>
          </div>
        </td>

        {/* عملیات */}
        <td>
          <div className="flex justify-center gap-10 text-xl">
            <button className="text-blue-800">
              <MdEdit />
            </button>
            <button className="text-red-800">
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TableBody;
