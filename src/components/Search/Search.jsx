// HOOKS
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUrl, setIndex, setCurrentPage } from "../store/slices/resultsSlice";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  // HOOKS
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // validation

  const [validation, setValidation] = useState(false)

  // HANDLERS
  const handleInput = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!searchTerm || /^\s+$/g.test(searchTerm)) {
      setValidation(true)
      alert('No hay término de búsqueda')
      return
    }

    dispatch(setCurrentPage('clear'));
    dispatch(setIndex('clear'));
    dispatch(setUrl(searchTerm));
    navigate("/results/" + searchTerm, { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          error={validation}
          variant="outlined"
          name="search"
          id="search"
          type="text"
          placeholder="Buscar por palabra clave"
          onChange={handleInput}
          value={searchTerm}
        />
        {searchTerm && <Button variant="contained" > <SearchIcon /> </Button>}
      </form>
    </>
  );
};

export default Search;
