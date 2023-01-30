function findGenres(genersArr, localArr, arr) {
  genersArr.forEach(el => {
    localArr.forEach(({ id, name }) => {
      if (el === id) {
        arr.push(name);
      }
    });
  });
}

function isEmptyGanres(arr) {
  if (arr.length === 0) {
    arr.push(['No data']);
  }
}

function isMoreThenTwoGanres(arr) {
  if (arr.length > 3) {
    arr.splice(2, arr.length - 2, 'Other');
  }
}

export { findGenres, isEmptyGanres, isMoreThenTwoGanres };
