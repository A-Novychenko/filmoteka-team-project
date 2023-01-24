import {
  header,
  homeBtn,
  MyLibraryBtn,
  headerForm,
  headerBtns,
  errorSearch,
} from './refs';

export function changePage() {
  homeBtn.addEventListener('click', onHomeBtn);
  MyLibraryBtn.addEventListener('click', onMyLibraryBtn);
}

function onHomeBtn() {
  changeHeader();
  homeBtn.removeEventListener('click', onHomeBtn);

  MyLibraryBtn.addEventListener('click', onMyLibraryBtn);
}

function onMyLibraryBtn() {
  changeHeader();
  MyLibraryBtn.removeEventListener('click', onMyLibraryBtn);
  homeBtn.addEventListener('click', onHomeBtn);
}

function changeHeader() {
  headerForm.classList.toggle('header_hidden');
  headerBtns.classList.toggle('header_hidden');
  homeBtn.classList.toggle('header_current');
  MyLibraryBtn.classList.toggle('header_current');
  header.classList.toggle('header_library');
  errorSearch.classList.toggle('visually-hidden');
}
