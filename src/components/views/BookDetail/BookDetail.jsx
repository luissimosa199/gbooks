import Header from "../../Header/Header";
import "./BookDetail.style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BookDetail = () => {
  const [selfData, setSelfData] = useState(null);
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [{ volumeInfo }] = useSelector((state) =>
    state.results.current.filter((e) => e.id === bookId)
  );

  const [data] = useSelector((state) =>
    state.results.current.filter((e) => e.id === bookId)
  );

  const handleBack = () => {
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    (async () => {
      try {
        const bookData = await axios.get(data.selfLink);
        setSelfData(bookData.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data.selfLink]);

  return (
    <>
      <Header />

      <main>
        <div className="book-detail-modal">
          <div className="book-detail-inner">
            <Button
              size="large"
              variant="outlined"
              className="book-detail-backbtn"
              onClick={() => {
                handleBack();
              }}
            >
              &lt;
            </Button>
            <Typography
              className="book-detail-title"
              gutterBottom
              variant="h4"
              component="h1"
            >
              {volumeInfo.title}
            </Typography>

            <Typography
              className="book-detail-subtitle"
              gutterBottom
              variant="h6"
              component="h2"
            >
              {volumeInfo.subtitle}
            </Typography>

            <div className="book-detail-img">
              {selfData && (
                <img
                  src={selfData.volumeInfo.imageLinks.small}
                  alt="book cover"
                />
              )}
            </div>

            <table className="book-detail-table">
              <tr>
                <th>Tipo de publicación</th>
                <td>{volumeInfo.printType === "BOOK" ? "Libro" : "Otro"}</td>
              </tr>
              <tr>
                <th>Autor/es</th>
                <td>
                  {volumeInfo.authors
                    ? volumeInfo.authors
                    : "No registra autores"}
                </td>
              </tr>
              <tr>
                <th>Fecha de publicación</th>
                <td>{volumeInfo.publishedDate}</td>
              </tr>
              <tr>
                <th>Número de páginas</th>
                <td>{volumeInfo.pageCount} pp.</td>
              </tr>
            </table>

            <div className="btn-container">
              <Button
                disabled={!selfData}
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
                href={volumeInfo.previewLink}
              >
                Leer
              </Button>

              <Button
                disabled={!selfData}
                size="large"
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
                href={selfData ? selfData.accessInfo.pdf.downloadLink : "#"}
              >
                {!selfData ? "Espera..." : "Descargar"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookDetail;
