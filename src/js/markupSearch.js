import { findGenres } from './findGenres';
import { getYear } from './getYear';

import { findGenres } from './findGenres';
import { movieContainer } from './refs';

import { findGenres, isEmptyGanres, isMoreThenTwoGanres } from './findGenres';
import noPoster from '../images/no-poster.jpg';

// const gallery = document.querySelector('.js-movies-list');
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export function renderMarkupSearch(movies) {
  // console.log('movies: ', movies);
  const markup = movies
    .map(movie => {
      const { genre_ids } = movie;
      const imgUrl = movie.poster_path
        ? `${IMG_URL + movie.poster_path}`
        : noPoster;

      let finalGenres = [];
      try {
        const parseGenres = JSON.parse(localStorage.getItem('genres'));
        // console.log('parseGenresеееееееееееееееееееее: ', parseGenres);
        const genersLocalStore = parseGenres.data.genres;
        // finalGenres = [];

        findGenres(genre_ids, genersLocalStore, finalGenres);
        isMoreThenTwoGanres(finalGenres);
        isEmptyGanres(finalGenres);
      } catch (error) {
        console.log(error.message);
      }

      return `<li class="movie__item" data-movie="${movie.id}">
        
      <div class="card-wrapper"><img class="card_img" loading="lazy" src="${imgUrl}" alt="${
        movie.original_title
      }"></div>
      
      
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
  movieContainer.innerHTML = '';
}
