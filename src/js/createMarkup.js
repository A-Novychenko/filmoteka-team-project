import { movieContainer } from "./refs"

export function getYear(date) {
  if (!date) {
    return 'no data';
  }
  const dateRelease = new Date(date);
  return dateRelease.getFullYear();
}


export function createMarkup(data) {
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
        <h2 class="movie__title">${title}</h2>
        <p class="movie__description">${genre_names} | <span>${getYear(release_date)}</span></p>
        </div>
        </li>`;
        }).join('');
    movieContainer.innerHTML = movie;
}