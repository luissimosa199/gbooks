// HOOKS
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import Card from "../../Card/Card";
import { fetchResults } from "../../store/slices/resultsSlice";
import "./Results.style.css";
import Header from "../../Header/Header";
import Pagination from "../../Pagination/Pagination";
import Skeleton from "../../Skeleton/Skeleton";

const Results = () => {
  const { searchterm } = useParams();
  const dispatch = useDispatch();

  const urlBase = useSelector((state) => state.results.url.base);
  const urlEnd = useSelector(
    (state) =>
      state.results.url.conector +
      state.results.url.index +
      state.results.url.end
  );

  const { current } = useSelector((state) => state.results);
  const isLoading = useSelector((state) => state.results.isLoading)

  useEffect(() => {
    dispatch(fetchResults(urlBase + searchterm + urlEnd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <main>

        <div className="results_container">
          {isLoading ? <Skeleton/> : current.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </div>

        <div className="pagination_container">
          <Pagination />
        </div>
        
      </main>
    </>
  );
};

export default Results;
