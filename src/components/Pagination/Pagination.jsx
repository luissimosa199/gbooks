import { useDispatch, useSelector } from "react-redux";
import {
  fetchResults,
  setIndex,
  setCurrentPage,
} from "../store/slices/resultsSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector((state) =>
    Math.ceil(state.results.totalItems / 10)
  );
  const currentPage = useSelector((state) => state.results.currentPage);
  const { base, term, conector, index, end } = useSelector(
    (state) => state.results.url
  );

  const handlePrevPage = () => {
    if (index !== 0) {
      dispatch(setIndex("prev"));
      const url = base + term + conector + (index - 10) + end;
      dispatch(setCurrentPage("prev"));
      dispatch(fetchResults(url));
      return;
    }
    console.log("ERROR: MIN INDEX");
  };

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
        dispatch(setIndex("next"));
        const url = base + term + conector + (index + 10) + end;
        dispatch(setCurrentPage("next"));
        dispatch(fetchResults(url));
        return;
    }
    console.log("ERROR: MAX-INDEX");
  };

  return (
    <>
      <button onClick={handlePrevPage}> &lt; </button>
      <p>
        Página: {currentPage} / {totalPages}
      </p>
      <button onClick={handleNextPage}> &gt; </button>
    </>
  );
};

export default Pagination;
