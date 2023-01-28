import { findGenres } from './genres';
import { getYear } from './getYear';
import { findGenres } from './genres';


const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    
export function renderMarkupModal(movies) {
       const { genre_ids } = movies;
      const imgUrl = movies.poster_path
        ? `${IMG_URL + movies.poster_path}`
        : 'https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png';

      const parseGenres = JSON.parse(localStorage.getItem('genres'));
      const genersLocalStore = parseGenres.data.genres;
      let finalGenres = [];
      findGenres(genre_ids, genersLocalStore, finalGenres);
      if (finalGenres.length > 3) {
        finalGenres = finalGenres.slice(0, 2).concat(['Other']);
      }
    
      return   ` <img class = "modal_img" src="${imgUrl}"   alt="">
            <ul class="movie_modal_info">
                <li>
                    <h2 class="movie_modal_title">${movies.original_title
}</h2>
                    <table>
                        <tr>
                            <td>Vote / Votes</td>
                            <td>${movies.vote_average
}/${movies.vote_count
}</td>

                        </tr>
                        <tr>
                            <td>Popularity</td>
                            <td>${movies.popularity
}</td>
                        </tr>
                        <tr>
                            <td>Original Title</td>
                            <td>${movies.original_title}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td>${finalGenres}</td>
                        </tr>
                    </table>
                </li>
                <li>
                    <div>
                        <h3>About</h3>
                        <p>${movies.overview
}</p>
                    </div>
                </li>
                <li class="modal_btn_list">
                    <button class="btn_modal">add to Watched</button>
                    <button class="btn_modal">add to queue</button>
                    <button class="btn_modal">movie trailer</button>
                </li>
            </ul>`
    
}

