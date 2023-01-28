// import * as searchByKeyWord from './js/searchByKeyWord';
import { headerForm, errorSearch } from './js/refs';
import { onHeaderFormClick } from './js/searchByKeyWord';

headerForm.addEventListener('submit', onHeaderFormClick);

// // тестую роботу ApiService:
import ApiService from './js/apiService';
import onChangeTheme from './js/theme-switch';

// theme-switch.js

// const service = new ApiService();
// //популярні:

// // const service = new ApiService();
// // // //популярні:

// // service.fetchTrendFilms();
// //жанри:
// console.log(service.fetchGenres());

// //по ключовому слову:
// // service.query = 'cat';
// service.fetchFilmsByKeyWord();

import { getMovies } from './js/renderingGalleryMarkup';

/// ////////////footer-modal
import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './js/refs';
import {
  toggleTeamModal,
  toggleTeamModal,
  clickBackdropCloseTeamModal,
} from './js/team-modal';

openModalTeamBtn.addEventListener('click', toggleTeamModal);
closeModalTeamBtn.addEventListener('click', toggleTeamModal);
modalTeam.addEventListener('click', clickBackdropCloseTeamModal);
//////////////// footer-modal

// сетить жанри в локальне сховище
import { getGenres } from './js/genres';
getGenres();

// import './js/apiService';
// import './js/libraryMarkup';
// import './js/pagination';
import './js/refs';
// import './js/searchByKeyWord';
