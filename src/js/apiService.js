import axios from 'axios';

class ApiService {
  constructor() {
    this.keyword = '';
    this.page = 1;
    this.API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
    this.BASE_URL = 'https://api.themoviedb.org/3';
  }

  async fetchTrendFilms() {
    try {
      localStorage.setItem('sourceForModal', 'currentFilms');
      const URL = `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}&page=${this.page}`;
      const response = await axios.get(URL);

      localStorage.setItem('searchSource', 'byTrend');
      localStorage.setItem('currentFilms', JSON.stringify(response));
      //  console.log('fetchTrendFilms');
      //////////////////пушу для тестування
      // localStorage.setItem(
      //   'queuedFilms', // queuedFilms  watchedFilms
      //   JSON.stringify(response.data.results)
      // );

      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async fetchFilmsByKeyWord() {
    try {
      localStorage.setItem('sourceForModal', 'currentFilms');
      const keyword = localStorage.getItem('keyWord');

      const URL = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${keyword}&page=${this.page}`;
      const response = await axios.get(URL);

      localStorage.setItem('searchSource', 'byKeyWord');
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
const apiservice = new ApiService();
export default apiservice;
