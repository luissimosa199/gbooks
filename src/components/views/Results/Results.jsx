// HOOKS
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import Card from "../../Card/Card";
import { fetchResults } from "../../store/slices/resultsSlice";
import "./Results.style.css";
import Header from "../../Header/Header";

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

  const { current, totalItems } = useSelector((state) => state.results);

  useEffect(() => {
    dispatch(fetchResults(urlBase + searchterm + urlEnd));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="results_container">
          {current.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </div>
        <div className="pagination_container">
            <button> &lt; </button>
            <p>Página: 1</p>
            <button> &gt; </button>
        </div>
      </main>
    </>
  );
};

export default Results;
