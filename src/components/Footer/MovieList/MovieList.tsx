import {FC} from "react";

import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard/MovieCard";

import {Movies} from "@/movies.data";

import * as React from "react";

const MovieList: FC = () => {
  return (
    <Grid container spacing={4}>
      {
        Movies.map( (movie, index) => (
            <MovieCard
              key={index}
              data={movie}
            />
          )
        )
      }
    </Grid>
  );
}

export default MovieList;
