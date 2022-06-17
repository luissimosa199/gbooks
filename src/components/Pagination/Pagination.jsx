import { useDispatch, useSelector } from "react-redux";
import {
  fetchResults,
  setIndex,
  setCurrentPage,
} from "../store/slices/resultsSlice";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      window.scrollTo(0, 0)
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
      window.scrollTo(0, 0)
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
      <Button variant="contained" size="large" color="primary" onClick={handlePrevPage}> &lt; </Button>
      <Typography variant="h6" component="p" sx={{lineHeight: "2.7rem"}}>
        Página: {currentPage} / {totalPages}
      </Typography>
      <Button variant="contained" size="large" color="primary" onClick={handleNextPage}> &gt; </Button>
    </>
  );
};

export default Pagination;
