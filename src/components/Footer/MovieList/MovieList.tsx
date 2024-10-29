import {FC} from "react";

import Box from "@mui/material/Box";

import MovieCard from "@/components/MovieCard/MovieCard";

import {Movies} from "@/movies.data";

import * as React from "react";

const MovieList: FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 4,
      cursor: "pointer"
    }}>
      {
        Movies.map( (movie, index) => (
            <MovieCard
              key={index}
              data={movie}
            />
          )
        )
      }
    </Box>
  );
}

export default MovieList;
