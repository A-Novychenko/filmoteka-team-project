import { findGenres } from './genres';
import { getYear } from './getYear';
import { findGenres, isEmptyGanres, isMoreThenTwoGanres } from './genres';
import noPoster from '../images/no-poster.jpg'

const gallery = document.querySelector('.js-movies-list');
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export function renderMarkupSearch(movies) {
  const markup = movies
    .map(movie => {
      const { genre_ids } = movie;
      const imgUrl = movie.poster_path
        ? `${IMG_URL + movie.poster_path}`
        : noPoster;

      const parseGenres = JSON.parse(localStorage.getItem('genres'));
      const genersLocalStore = parseGenres.data.genres;
      let finalGenres = [];
      findGenres(genre_ids, genersLocalStore, finalGenres);
      isMoreThenTwoGanres(finalGenres);
      isEmptyGanres(finalGenres);

      return `<li class="movie__item" data-movie="${movie.id}">
        <img class="card_img" src="${imgUrl}" alt="${movie.original_title}">
                <h3 class="card_title">${movie.title}</h3>
                <div class="card_descr">
                  <p class="card_genres">${finalGenres.join(
                    ', '
                  )}&nbsp;|&nbsp;${getYear(movie.release_date)}</p>
                    <p class="card_rating">${movie.vote_average.toFixed(
                      1
                    )}</p></div>
                </li>`;
    })
    .join('');
  return markup;
}

export function cleanHtml() {
  gallery.innerHTML = '';
}
