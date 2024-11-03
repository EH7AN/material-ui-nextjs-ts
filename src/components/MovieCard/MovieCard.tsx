import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import {FC} from "react";

import {MovieType} from "@/Types/movie.type";

import MovieDetailDialog from "@/components/MovieDetailDialog/MovieDetailDialg";
const  MovieCard: FC<MovieType> = (movieData) => {

  const _movieData = movieData.data;

  const handleClick = () => {
    console.log(_movieData.title);
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={`/movies/${_movieData.id}`}>
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/1.jpg"
        title={_movieData.title}
      />
      <CardContent sx={{margin: 0}}>
        <Typography sx={{margin: 0, padding: 0}} gutterBottom variant="h5" component="span">
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
      </Link>
      <MovieDetailDialog isOpen={false} />
    </Grid>
  );
}
export default MovieCard;
