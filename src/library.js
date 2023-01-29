import './js/libraryMarkup';
import './js/libraryModal';
import './js/markupModal';


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
