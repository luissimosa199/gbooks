import { useSelector } from "react-redux";
import Search from "../Search/Search";
import "./Header.style.css";

const Header = () => {
  const {
    url: { term },
    totalItems,
  } = useSelector((state) => state.results);

  return (
    <header>
      <img
        className="header-img"
        src="https://live.staticflickr.com/65535/52269772180_26e7747d18_w.jpg"
        alt="gbooks_logo"
      />
      <Search />
      <p>
        Resultados para: <i>{term}</i>
      </p>
      <p>Total de resultados: {totalItems}</p>
    </header>
  );
};

export default Header;
