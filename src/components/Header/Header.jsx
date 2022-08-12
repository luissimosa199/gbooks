import Search from "../Search/Search";
import Logo from "../utils/Logo";

import { useSelector } from "react-redux";
import "./Header.style.css";

const Header = () => {
  const {
    url: { term },
    totalItems,
  } = useSelector((state) => state.results);

  return (
    <header>
      <Logo className="header-img" />
      <Search />
      <p>
        Resultados para: <i>{term}</i>
      </p>
      <p>Total de resultados: {totalItems}</p>
    </header>
  );
};

export default Header;
