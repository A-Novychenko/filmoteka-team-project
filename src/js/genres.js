import ApiService from './apiService';

const apiservis = new ApiService();
async function getGenres() {
  try {
    await apiservis.fetchGenres();
  } catch (err) {
    console.log(err);
  }
}

function findGenres(genersArr, localArr, arr) {
  genersArr.forEach(el => {
    localArr.forEach(({ id, name }) => {
      if (el === id) {
        arr.push(name);
      }
    });
  });
}
getGenres();

export { findGenres, getGenres };
