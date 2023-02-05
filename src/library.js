// import './sass/index.scss';

// import './js/apiService';
// import './js/base-config';
// import './js/findGenres';
// import './js/getYear';
// import './js/libraryMarkup';
// import './js/libraryModal';
// import './js/loader';
// import './js/markupModal';
// import './js/markupSearch';
// import './js/modal-btns-library';
import './js/library-header-btns.js';
import './js/modal-movie';
// import './js/pagination';
// import './js/refs';
// import './js/renderingGalleryMarkup';
// import './js/searchByKeyWord';
// import './js/team-modal';
// import './js/trailer';
////////////////////////////////////////////////////////////////////////////////////////////
import './js/libraryMarkup';
// import './js/libraryModal';
import './js/markupModal';

import { openModalMovie } from './js/refs';
import { onClickModal } from './js/modal-btns-library';
openModalMovie.addEventListener('click', onClickModal);

/// ////////////footer-modal
import { openModalTeamBtn, buttonTop } from './js/refs';
import { toggleTeamModal } from './js/team-modal';

openModalTeamBtn.addEventListener('click', toggleTeamModal);
//////////////// footer-modal

import { modalGallery } from './js/refs';
import { onBtnTrailer } from './js/trailer';
import { cleanHtmlTrailer } from './js/trailer';
modalGallery.addEventListener('click', onBtnTrailer);

// import { modalGallery } from './js/refs';
// modalGallery.addEventListener('click', onBtnTrailer);

import { clicksMovie } from './js/refs';
// import { openModalMovie } from './js/refs';
// import { closeModalMovieBtn } from './js/refs';
// import {
//   oneToggle,
//   keyPressEscCloseMovieModal,
//   closeBtn,
// } from './js/modal-movie';
// clicksMovie.addEventListener('click', oneToggle);
// closeModalMovieBtn.addEventListener('click', closeBtn);
// // openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);
// import { libraryData } from './js/refs';
// libraryData.addEventListener('click', oneToggle);
// closeModalMovieBtn.addEventListener('click', closeBtn);
// openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);
