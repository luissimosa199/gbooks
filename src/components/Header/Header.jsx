import { useSelector } from "react-redux";
import Search from "../Search/Search";
import './Header.style.css';

const Header = () => {

    const { url: { term }, totalItems } = useSelector(state => state.results)

  return (
    <header>
      <h1>Gbooks</h1>
      <Search/>
      <h2>Resultados para: {term}</h2>
      <p>Total de resultados: {totalItems}</p>
    </header>
  );
};

export default Header;
