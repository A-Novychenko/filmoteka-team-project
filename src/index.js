// import * as searchByKeyWord from './js/searchByKeyWord';
import { headerForm, errorSearch } from './js/refs';
import { onHeaderFormClick } from './js/searchByKeyWord';
headerForm.addEventListener('submit', onHeaderFormClick);

// // тестую роботу ApiService:
import ApiService from './js/apiService';

const service = new ApiService();
//популярні:
// service.fetchTrendFilms();
//жанри:
console.log(service.fetchGenres());

//по ключовому слову:
// service.query = 'cat';
// service.fetchFilmsByKeyWord();
