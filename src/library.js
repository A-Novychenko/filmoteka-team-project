import './js/libraryMarkup';
import './js/libraryModal';
import './js/markupModal';

import { openModalMovie } from './js/refs';
import { onClickModal } from './js/modal-btns-library';
openModalMovie.addEventListener('click', onClickModal);

/// ////////////footer-modal
import { openModalTeamBtn, closeModalTeamBtn, modalTeam } from './js/refs';
import {
  // toggleTeamModal,
  toggleTeamModal,
  clickBackdropCloseTeamModal,
} from './js/team-modal';

openModalTeamBtn.addEventListener('click', toggleTeamModal);
closeModalTeamBtn.addEventListener('click', toggleTeamModal);
modalTeam.addEventListener('click', clickBackdropCloseTeamModal);
//////////////// footer-modal

import { modalGallery } from './js/refs';
import { onBtnTrailer } from './js/trailer';
import { cleanHtmlTrailer } from './js/trailer';
modalGallery.addEventListener('click', onBtnTrailer);

// import { modalGallery } from './js/refs';
// modalGallery.addEventListener('click', onBtnTrailer);

import { clicksMovie } from './js/refs';
// import { openModalMovie } from './js/refs';
import { closeModalMovieBtn } from './js/refs';
import {
  oneToggle,
  keyPressEscCloseMovieModal,
  closeBtn,
} from './js/modal-movie';
// clicksMovie.addEventListener('click', oneToggle);
// closeModalMovieBtn.addEventListener('click', closeBtn);
// // openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);
import { libraryData } from './js/refs';
libraryData.addEventListener('click', oneToggle);
// closeModalMovieBtn.addEventListener('click', closeBtn);
// openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);
