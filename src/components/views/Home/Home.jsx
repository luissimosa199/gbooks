// COMPONENTS
import Search from "../../Search/Search";

// CSS
import "./Home.style.css";

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_container_inner'>
        <div className='img_container'>{/* <img src="" alt="" /> */}</div>
        <h1>GBooks</h1>
        <Search />
        <p>
          Libros y documentos totalmente gratuitos y accesibles desde las
          bibliotecas digitales de Google
        </p>
      </div>
    </div>
  );
};

export default Home;
