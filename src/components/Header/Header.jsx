import { useSelector } from "react-redux";
import Search from "../Search/Search";
import './Header.style.css';

import Typography from "@mui/material/Typography";

const Header = () => {

    const { url: { term }, totalItems } = useSelector(state => state.results)

  return (
    <header>
      <Typography variant="h2" component="h1" >Gbooks</Typography>
      <Search/>
      <Typography sx={{ fontSize: "1.2em", }} variant="body1" gutterBottom={false}>Resultados para: {term}</Typography>
      <p>Total de resultados: {totalItems}</p>
    </header>
  );
};

export default Header;
