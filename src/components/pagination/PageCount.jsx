import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function PageCount({ curentPage,nextPg,prevPg }) {
  return (
    <>
      <button onClick={prevPg}>
        <IoIosArrowForward />
      </button>
      {curentPage}
      <button onClick={nextPg}>
        <IoIosArrowBack />
      </button>
    </>
  );
}

export default PageCount;
