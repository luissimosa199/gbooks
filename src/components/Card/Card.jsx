import "./Card.style.css";

const Card = ({
  data: {
    id,
    volumeInfo: { title, subtitle, authors, publishedDate },
  },
  data,
}) => {
  
// funcion para recortar string
  
  
  return (
    <div className="card_container">
      <h3>{title}</h3>
      <div className="card_img_container">
        <img src={data.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
      </div>
      <p>{(subtitle)}</p>
      <p>{publishedDate}</p>
      <p className="card_author">{authors ? authors : "No registra autores"}</p>
      <div className="card_btns_container">
        <a>Ver más</a>
        <a
          href={data.volumeInfo.previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer
        </a>
      </div>
    </div>
  );
};

export default Card;
