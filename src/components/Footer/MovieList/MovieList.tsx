import {FC} from "react";

import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard/MovieCard";

import * as React from "react";

const MovieList: FC = () => {
  return (
    <Grid container spacing={4}>
      <MovieCard
      />
    </Grid>
  );
}

export default MovieList;
