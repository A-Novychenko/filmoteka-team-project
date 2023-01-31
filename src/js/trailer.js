import axios from 'axios';
import { modalGallery } from './refs';

// const modalGallery = document.querySelector('.movie_modal_gallery');

modalGallery.addEventListener('click', onBtnTrailer);
let idTrailer = '';

async function onBtnTrailer(evt) {
  try {
    const btnTrailer = evt.target.closest('.js-btn_trailer');
    console.log(btnTrailer);
    idTrailer = btnTrailer.dataset.idmovie;

    const resp = await fetchTrailer();
    const dataMovie = resp.data.results;
    const officialTrailer = dataMovie.find(
      movie =>
        movie.name.toLowerCase().includes('official trailer') ||
        movie.name.toLowerCase().includes('official trailer 2')
    );

    // console.log(officialTrailer)

    if (officialTrailer) {
      // console.log('є трейлер!!!')
      modalGallery.innerHTML = `<iframe 
            class="movie_trailer"
            width='700'
            height='500'
            src="https://www.youtube.com/embed/${officialTrailer.key}" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;
            autoplay; clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen>
            </iframe>`;
    } else {
      // console.log('немає трейлера(((');
      btnTrailer.innerHTML = `<p class="error__trailer">Sorry, search result not successful</p>`;
    }
  } catch (err) {
    console.log(err);
  }
}

async function fetchTrailer() {
  try {
    const URL = `https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&language=en-US`;
    const response = await axios.get(URL);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}
