type MovieData = {
  id: number | string;
  "title": string;
  "director": string;
  "release_year": number,
  "genre": string,
  "image": string,
  "rating": number
}

export type MovieType = {
  data: MovieData;
}
