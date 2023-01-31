import axios from 'axios';

const movieModal = document.querySelector('.movie_modal_gallery');

movieModal.addEventListener('click', onBtnTrailer);
let idTrailer = '';

async function onBtnTrailer(evt) {
    try {
        const btnTrailer = evt.target.closest('.js-btn_trailer');
        idTrailer = btnTrailer.dataset.idmovie;

        const resp = await fetchTrailer();
        const dataMovie = resp.data.results;
        const officialTrailer = dataMovie.find(movie =>
            movie.name.toLowerCase().includes('official trailer') || movie.name.toLowerCase().includes('official trailer 2'));
        
        console.log(officialTrailer)
        
        if (officialTrailer) {
            console.log('є трейлер!!!')

            // посилання для трейлера
            // https://www.youtube.com/watch?v=<тут key трейлера>"
            
        } else {
            console.log('немає трейлера(((')
        }

    } catch (err) {
        console.log(err)
    }
}



async function fetchTrailer() {
    try {
        const URL = `https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&language=en-US`;
        const response = await axios.get(URL);

        return response;  
    } catch (error) {
        console.log(error.message)
    }
}