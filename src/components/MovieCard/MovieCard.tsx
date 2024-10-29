import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FC} from "react";

import {MovieType} from "@/Types/movie.type";

import MovieDetailDialog from "@/components/MovieDetailDialog/MovieDetailDialg";
import {Movies} from "@/movies.data";
const  MovieCard: FC<MovieType> = (movieData) => {

  const _movieData = movieData.data;

  const handleClick = () => {
    console.log(_movieData.title);
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/1.jpg"
        title={_movieData.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {_movieData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      <MovieDetailDialog isOpen={false} />
    </>
  );
}
export default MovieCard;
