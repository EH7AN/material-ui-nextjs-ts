type MovieData = {
  "title": string;
  "director": string;
  "release_year": number,
  "genre": string,
  "rating": number
}

export type MovieType = {
  data: MovieData;
}