// COMPONENTS
import Search from "../../Search/Search";

// CSS
import "./Home.style.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_container_inner">
        <div className="img_container">
          <img
            src="https://live.staticflickr.com/65535/52270236970_729e16776a_n.jpg"
            alt="gbooks_logo"
          />
        </div>
        <Search />
        <p>
          Libros, documentos y fuentes primarias totalmente gratuitas y accesibles desde las
          bibliotecas digitales de Google.
        </p>
      </div>
    </div>
  );
};

export default Home;
