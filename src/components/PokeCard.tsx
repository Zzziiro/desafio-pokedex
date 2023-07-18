import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PokeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="foto do bicho"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nome do bicho
          </Typography>
          <Typography variant="body2" color="text.secondary">
            n° - TIPO / TIPO
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokeCard;
