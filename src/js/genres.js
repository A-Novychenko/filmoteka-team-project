import ApiService from './apiService';

const apiservis = new ApiService();

async function getTarendFilms() {
  try {
    const resp = await apiservis.fetchTrendFilms();
    //масив з довжиною більше, чим 3
    // const generResponse = resp.data.results[1].genre_ids;
    //масив з довжиною 3 і менше
    const generResponse = resp.data.results[2].genre_ids;

    const parseGenres = JSON.parse(localStorage.getItem('genres'));
    const genersLocalStore = parseGenres.data.genres;
    findGenres(generResponse, genersLocalStore);
  } catch (error) {
    console.log(error);
  }
}

//genersArr - масив id з даних від api
//localArr - масив з id і розштфровками (name) з локал сторедж
function findGenres(genersArr, localArr) {
  let finalGenres = [];
  genersArr.forEach(el => {
    localArr.forEach(({ id, name }) => {
      if (el === id) {
        finalGenres.push(name);
      }
    });
  });
  // перевірка на довжину масива для сітки карток
  //   if (finalGenres.length > 3) {
  //     finalGenres = finalGenres.slice(0, 3).concat(['Other']);
  //   }

  console.log(finalGenres.join(', '));
  return finalGenres;
}
getTarendFilms();

export { findGenres };
