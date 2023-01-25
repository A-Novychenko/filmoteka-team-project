const IMG_URL = 'https://image.tmdb.org/t/p/w500/'
const gallery = document.querySelector('.js-gallery-card')
export  function renderMarkupSearch(movies) {
    console.log(movies);
    const markup = movies.map(movie => {
        console.log(movie.genre_ids);
       return  `<div class="card_container">
         <li class="card_link">
         <img src="${IMG_URL + movie.poster_path}" alt="${movie.original_title
}">
                <h3 class="card_title">${movie.title}</h3>
                    <p class="card_genres">${movie.genre_ids
            }</p>
                    <p class="card_release_date">${movie.release_date
            }</p>
                </li>
            </div>`;
    }).join(''); 

    gallery.insertAdjacentHTML('beforeend', markup)
}