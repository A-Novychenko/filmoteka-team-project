import { findGenres } from './genres';
import { getYear } from './getYear';
import { findGenres, isEmptyGanres } from './genres';
import noPoster from '../images/no-poster.jpg';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export function renderMarkupModal(movies) {
  const { genre_ids } = movies;
  const imgUrl = movies.poster_path
    ? `${IMG_URL + movies.poster_path}`
    : noPoster;

  const parseGenres = JSON.parse(localStorage.getItem('genres'));
  const genersLocalStore = parseGenres.data.genres;
  let finalGenres = [];
  findGenres(genre_ids, genersLocalStore, finalGenres);
  isEmptyGanres(finalGenres);

  return ` <img class = "modal_img" src="${imgUrl}"   alt="">
            <div class="movie_modal_info">
                    <h2 class="movie_modal_title">${movies.original_title}</h2>
                    <table class="modal_table">
                        <tr>
                            <td class="table-header">Vote / Votes</td>
                            <td><span class="table-votes">${movies.vote_average.toFixed(
                              1
                            )}</span> / ${movies.vote_count}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Popularity</td>
                            <td>${movies.popularity.toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Original Title</td>
                            <td>${movies.original_title.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Genre</td>
                            <td>${finalGenres.join(', ')}</td>
                        </tr>
                    </table>
                    <div class="about-container">
                        <h3 class="about-header">ABOUT</h3>
                        <p class="about-text">${movies.overview}</p>
                    </div>

                <div class="modal_btn_list">
                    <button class="btn_modal">ADD TO WATCHED</button>
                    <button class="btn_modal">ADD TO QUEUE</button>
                    
                </div>
                    <button class="btn_modal js-btn_trailer" data-idmovie=${movies.id}>TRY TO SEARCH MOVIE TRAILER</button>
            </div>`;

}
