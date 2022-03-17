import axios from "axios";
const route = "/movies";

  export async function createMovie(movie) {
    const url = BASE_URL+`${route}/`;
    const response = await axios.put(url,{
        "name": movie.name,
      "poster": movie.poster,
      "category": movie.category,
      "language": movie.language,
      "year": movie.year,
      "author": movie.author,
      "projectionDate": movie.projectionDate,
      "projectionNumber": movie.projectionNumber,
      "realisationCountry": movie.realisationCountry,
      "etablissementId": movie.etablissementId,
    });
    if (response.status === 200) {
        return response;
    }
  }

  export async function getMovies () {
    const url = BASE_URL+`${route}/`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getMovieById (id) {
    const url = BASE_URL+`${route}/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

  export async function getMovieByName (name) {
    const url = BASE_URL+`${route}/getMovieByName/${name}`;
    const response = await axios.get(url);
    if (response.status === 200) {
        return response;
    }
  }

 
  export async function updateMovie(movie) {
    const url = BASE_URL+`${route}/${movie.id}`;
    const response = await axios.put(url,{
      "name": movie.name,
      "poster": movie.poster,
      "category": movie.category,
      "language": movie.language,
      "year": movie.year,
      "author": movie.author,
      "projectionDate": movie.projectionDate,
      "projectionNumber": movie.projectionNumber,
      "realisationCountry": movie.realisationCountry,
      "etablissementId": movie.etablissementId,
    });
    if (response.status === 200) {
        return response;
    }
  }

