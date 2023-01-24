const header = document.querySelector('.js-header');
const homeBtn = document.querySelector('.js-home-btn');
const MyLibraryBtn = document.querySelector('.js-my-library-btn');
const headerForm = document.querySelector('.js-header-form');
const headerBtns = document.querySelector('.js-header-btns');

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
}
