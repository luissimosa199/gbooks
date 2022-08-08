import { useNavigate } from "react-router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = ({
  data: {
    id,
    volumeInfo: { title, subtitle, authors, publishedDate },
  },
  data,
}) => {

  // funcion para recortar string
  const limitString = (str, n) => {
    if (str.length > n) {
      return str.slice(0, n - 3).concat("...");
    }

    return str;
  };

  // useNavigate
  const navigate = useNavigate();

  // go to book
  const handleSeeMore = () => {
    navigate(`/${id}/`, { replace: true });
  }
  

  return (
    <Card
      sx={{
        width: 350,
        minHeight: "65vh",
        marginY: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
      <CardMedia
        sx={{ objectFit: "contain", marginTop: 1 }}
        component='img'
        alt='book cover'
        height='199'
        width='128'
        image={data.volumeInfo.imageLinks.thumbnail}
      />

      <CardContent>
        <Typography gutterBottom variant='h6' component='h3'>
          {limitString(title, 100)}
        </Typography>

        <Typography variant='body1' color='text.secondary'>
          {subtitle && limitString(subtitle, 170)}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          {publishedDate} - {authors ? authors : "No registra autores"}
        </Typography>
      </CardContent>

      <CardActions sx={{width: "100%", display: "flex", justifyContent: "space-around"}}>
        <Button size='large' variant='outlined' sx={{width: "49%"}} onClick={() => {handleSeeMore()}}>
          Ver más
        </Button>
        <Button
          size='large'
          variant='outlined'
          href={data.volumeInfo.previewLink}
          target='_blank'
          rel='noopener noreferrer'
          sx={{width: "49%"}}
          >
          Leer
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
