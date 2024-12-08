'use client'
import {FC} from "react";
import { useParams } from 'next/navigation';
import {Movies} from "@/database/movies.data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type OwnProps = {

}
const MovieDetailsPage: FC<OwnProps> = () => {
  const params = useParams();
  const movieId = params.id;
  const selectedMovie =
    Movies.find( movie => movie.id == movieId);
  return(
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Paper elevation={3} sx={{ padding: 4}}>
        <Typography component="span">{selectedMovie?.title}</Typography>
        <Typography component="p">{selectedMovie?.director}</Typography>
      </Paper>
    </Box>
  )
}

export default MovieDetailsPage;
