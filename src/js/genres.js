function findGenres(genersArr, localArr, arr) {
  genersArr.forEach(el => {
    localArr.forEach(({ id, name }) => {
      if (el === id) {
        arr.push(name);
      }
    });
  });
}

export { findGenres, getGenres };
