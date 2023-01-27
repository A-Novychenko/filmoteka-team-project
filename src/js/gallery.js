import { createMarkup } from "./createMarkup";
import ApiService from './apiService';

const apiService = new ApiService();

getMovies();

async function getMovies() {
  const response = await apiService.fetchTrendFilms();
  const results = response.data.results;
  createMarkup(results);
}

// getMovies(respData)

// async function getMovies(data) {
//   const response = await data.json();
//   createMarkup(response);

// }


// const API_URL_POPULAR =
//     "https://api.themoviedb.org/3/trending/movie/week?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&page=1";

// getMovies(API_URL_POPULAR);

// async function getMovies(url) {
//   const resp = await fetch(url);
//     const respData = await resp.json();
//     createMarkup(respData)
//     const movie = respData.results
//     localStorage.setItem('movie', JSON.stringify(movie))
//     const localMovie = JSON.parse(localStorage.getItem('Movie'));
//     return respData
// }


const clicks = document.querySelector('.wrapper');
// console.log('clicks: ', clicks);
clicks.addEventListener('click', onBClick);

function onBClick(evt) {
  // alert(evt);
  const li = evt.target.closest('.movie__item');
  // console.log('li: ', li);
  console.log(li.dataset.movie);
}