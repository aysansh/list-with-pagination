import PageCount from "../pagination/PageCount";
import HeadTable from "./HeadTable";
import TableBody from "./TableBody";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limited, setLimited] = useState(10);
  useEffect(() => {
    fetch(`http://localhost:8000/works`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [currentPage, limited]);

  const totalPages = Math.ceil(data.length / limited);

  const startIndex = (currentPage - 1) * limited;

  const endIndex = startIndex + limited;

  const currentItems = data.slice(startIndex, endIndex);
  const handleNextPage = () => {
    setCurrentPage((curentPage) => curentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((curentPage) => curentPage - 1);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table border text-center">
          <HeadTable />
          {currentItems.map((item, index) => (
            <TableBody
              key={index}
              domains={item.domain}
              amounts={item.amounts}
              isActive={item.isActive}
              languageOne={item.languageOne}
              languageTwo={item.languageTwo}
              meaningOne={item.meaningOne}
              meaningTwo={item.meaningTwo}
            />
          ))}
        </table>
      </div>
      {/* <button
    className="flex justify-end"
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
        >
          next page
          
      <Pagination count={10} color="primary" />
         </button> */}
      <div className="flex justify-end p-10">
        <PageCount
          nextPg={handleNextPage}
          prevPg={handlePrevPage}
          curentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Table;
