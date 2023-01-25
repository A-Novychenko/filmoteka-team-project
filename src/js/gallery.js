import { movieContainer } from "./refs"
const API_URL_POPULAR =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&page=1";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url);
    const respData = await resp.json();
    showMovies(respData)
    const movie = respData.results
    localStorage.setItem('movie', JSON.stringify(movie))
    const localMovie = JSON.parse(localStorage.getItem('Movie'));
    // console.log(localMovie)
    return respData
}

function getYear(date) {
  if (!date) {
    return 'no data';
  }
  const dateRelease = new Date(date);
  return dateRelease.getFullYear();
}

export function showMovies(data) {
    const movie = data.results
        .map(({
        title,
        poster_path,
        id,
        genre_names,
        release_date,
        }) => {
        let posterPath = ``
          if (poster_path) { posterPath = `https://image.tmdb.org/t/p/w500${poster_path}` }
            else { posterPath = 'https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png' }
      return `
      <li class="movie__item">
        <a href="#show-moovie=${id}" 
         class="movie__link" data-movie="${id}">
        <div class="movie__img-wrap">
        <img class="movie__image"src='${posterPath}'
              alt='${title}'
              />
        </div>
        </a>
        <div class="movie__info-wrap">
        <h2 class="movie__title">${ title }</h2>
        <p class="movie__description">${genre_names} | <span>${getYear(release_date)}</span></p>
        </div>
        </li>`;
    }).join('');
    movieContainer.innerHTML = movie;

    // addClickListenerToMovie();
}

<<<<<<< HEAD
// function addClickListenerToMovie() {
//   document.querySelectorAll('.movie__item').forEach(element => {
//     element.addEventListener('click', event => {
//       try {
//         console.log(element)
//       } catch (error) {
//           console.log(error)
//       }
//       event.preventDefault();
//     });
//   });
// }
=======
function addClickListenerToMovie() {
  document.querySelectorAll('.movie__item').forEach(element => {
    element.addEventListener('click', event => {
      try {
        console.log(element)
      } catch (error) {
          console.log(error)
      }
      event.preventDefault();
    });
  });
}
>>>>>>> 1db97c04414cf1db4be14d15432e006b6f649687
