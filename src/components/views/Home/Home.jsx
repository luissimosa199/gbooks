// COMPONENTS
import Search from "../../Search/Search";
import Logo from "../../utils/Logo";

// CSS
import "./Home.style.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_container_inner">
        <div className="img_container">
          <Logo />
        </div>
        <Search />
        <p>
          Libros, documentos y fuentes primarias totalmente gratuitas y
          accesibles desde las bibliotecas digitales de Google.
        </p>
      </div>
    </div>
  );
};

export default Home;
