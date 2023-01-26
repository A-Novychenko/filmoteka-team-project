// import * as searchByKeyWord from './js/searchByKeyWord';
import { headerForm, errorSearch } from './js/refs';
import { onHeaderFormClick } from './js/searchByKeyWord';

headerForm.addEventListener('submit', onHeaderFormClick);

// // тестую роботу ApiService:
import ApiService from './js/apiService';

const service = new ApiService();
//популярні:

// const service = new ApiService();
// // //популярні:

// service.fetchTrendFilms();
//жанри:
console.log(service.fetchGenres());

//по ключовому слову:
// service.query = 'cat';
// service.fetchFilmsByKeyWord();

import { showMovies } from './js/gallery';

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
