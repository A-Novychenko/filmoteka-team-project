const gallery = document.querySelector('.js-movies-list');
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export function renderMarkupSearch(movies) {
  const markup = movies
    .map(movie => {

      const imgUrl = movie.poster_path
        ? `${IMG_URL + movie.poster_path}`
        : 'https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png';

      return `<li class="movie__item" data-movie="${movie.id}">
        <img src="${imgUrl}" alt="${movie.original_title}">
                <h3 class="card_title">${movie.title}</h3>
                    <p class="card_genres">${Object.values(movie.genre_ids)}</p>
                    <p class="card_release_date">${movie.release_date}</p>
                </li>`;
    })
    .join('');
  return markup;
}

export function cleanHtml() {
  gallery.innerHTML = '';
}
