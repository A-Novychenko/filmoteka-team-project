import { createMarkup } from "./createMarkup";
const API_URL_POPULAR =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&page=1";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url);
    const respData = await resp.json();
    createMarkup(respData)
    const movie = respData.results
    localStorage.setItem('movie', JSON.stringify(movie))
    const localMovie = JSON.parse(localStorage.getItem('Movie'));
    return respData
}
