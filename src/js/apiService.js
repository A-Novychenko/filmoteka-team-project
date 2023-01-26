import axios from 'axios';

export default class ApiService {
  API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
  BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.page = 1;
    this.keyword = '';
  }

  async fetchTrendFilms() {
    try {
      const URL = `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`;
      const response = await axios.get(URL);
      // const result = await response.json();
      localStorage.setItem('currentFilms', JSON.stringify(response));

      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchFilmsByKeyWord() {
    try {
      const URL = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.keyword}&page=${this.page}`;
      const response = await axios.get(URL);

      // const result = await response.json();
      localStorage.setItem('currentFilms', JSON.stringify(response));

      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchGenres() {
    try {
      const URL = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}&language=en-US`;
      const response = await axios.get(URL);
      // const result = await response.json();
      localStorage.setItem('genres', JSON.stringify(response));
      return response;
    } catch (error) {
      console.log(error.message);
    }
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
