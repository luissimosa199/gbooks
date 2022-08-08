import "./BookDetail.style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const BookDetail = () => {
  const [selfData, setSelfData] = useState(null);
  const { bookId } = useParams();

  const [{ volumeInfo }] = useSelector((state) =>
    state.results.current.filter((e) => e.id === bookId)
  );

  const [data] = useSelector((state) =>
    state.results.current.filter((e) => e.id === bookId)
  );

  useEffect(() => {
    const requestSelfData = async () => {
      try {
        const bookData = await axios.get(data.selfLink);
        setSelfData(bookData.data);
      } catch (err) {
        console.log(err);
      }
    };

    requestSelfData();
  }, []);

  return (
    <div className="book-detail-modal">
      <h1>{volumeInfo.title}</h1>
      <p>{volumeInfo.subtitle}</p>
      <p>{volumeInfo.publishedDate}</p>
      {selfData && (
        <img src={selfData.volumeInfo.imageLinks.small} alt="book cover" />
      )}
      <p>{volumeInfo.authors}</p>
      <p>Total de paginas: {volumeInfo.pageCount}</p>
      <p>Tipo de publicacion: {volumeInfo.printType}</p>
      <p>
        <a href={volumeInfo.previewLink}>Leer</a>
      </p>

      <button disabled={!selfData}>
        <a
          href={selfData ? selfData.accessInfo.pdf.downloadLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {!selfData ? "Espera..." : "Descargar PDF"}
        </a>
      </button>
    </div>
  );
};

export default BookDetail;
