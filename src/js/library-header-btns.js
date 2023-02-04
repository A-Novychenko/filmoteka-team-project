import apiservice from './apiService';
import { btnWatched, btnQueue } from './refs';
import { libraryListRender } from './libraryMarkup';

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

onBtnWatchedClick();

export function onBtnWatchedClick() {
  // paginationList.innerHTML = '';
  apiservice.resetPage();
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');
  localStorage.setItem('sourceForModal', 'watchedFilms');
  libraryListRender();
}

function onBtnQueueClick() {
  // paginationList.innerHTML = '';
  apiservice.resetPage();
  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');
  localStorage.setItem('sourceForModal', 'queuedFilms');
  libraryListRender();
}
