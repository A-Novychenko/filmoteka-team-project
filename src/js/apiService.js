export default class ApiService {
  API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
  BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.page = 1;
    this.keyword = '';
  }

  async fetchTrendFilms() {
    const responce = await fetch(
      `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`
    );
    const result = await responce.json();
    localStorage.setItem('currentFilms', JSON.stringify(result));
    return result;
  }

  async fetchFilmsByKeyWord() {
    const URL = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.keyword}&page=${this.page}`;
    const responce = await fetch(URL);
    const result = await responce.json();
    localStorage.setItem('currentFilms', JSON.stringify(result));
    return result;
  }

  async fetchGenres() {
    const URL = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}&language=en-US`;
    const responce = await fetch(URL);
    const result = await responce.json();
    localStorage.setItem('genres', JSON.stringify(result));
    return result;
  }

  resetPage() {
    this.page = 1;
  }

  increamentPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  get query() {
    return this.keyword;
  }

  set query(newKeyword) {
    this.keyword = newKeyword;
  }
}
