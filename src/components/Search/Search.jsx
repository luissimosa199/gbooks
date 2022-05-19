// HOOKS
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUrl, setIndex, setCurrentPage } from "../store/slices/resultsSlice";

// DEPENDENCIES
// import axios from "axios";

const Search = () => {
  // HOOKS
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // HANDLERS
  const handleInput = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage('clear'));
    dispatch(setIndex('clear'));
    dispatch(setUrl(searchTerm));
    navigate("/results/" + searchTerm, { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Buscar por palabra clave"
          onChange={handleInput}
          value={searchTerm}
        />
        {searchTerm && <button>Buscar</button>}
      </form>
    </>
  );
};

export default Search;
