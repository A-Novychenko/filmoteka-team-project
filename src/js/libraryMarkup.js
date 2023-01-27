import { btnWatched, btnQueue, libraryData } from './refs';
import { renderMarkupSearch } from './markupSearch';

// const qqq = [
//   {
//     adult: false,
//     backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
//     id: 76600,
//     title: 'Avatar: The Way of Water',
//     original_language: 'en',
//     original_title: 'Avatar: The Way of Water',
//     overview:
//       'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
//     poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
//     media_type: 'movie',
//     genre_ids: [878, 12, 28],
//     popularity: 2623.833,
//     release_date: '2022-12-14',
//     video: false,
//     vote_average: 7.723,
//     vote_count: 4599,
//   },
//   {
//     adult: false,
//     backdrop_path: '/faXT8V80JRhnArTAeYXz0Eutpv9.jpg',
//     id: 315162,
//     title: 'Puss in Boots: The Last Wish',
//     original_language: 'en',
//     original_title: 'Puss in Boots: The Last Wish',
//     overview:
//       'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
//     poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
//     media_type: 'movie',
//     genre_ids: [16, 28, 12, 35, 10751, 14],
//     popularity: 6689.647,
//     release_date: '2022-12-07',
//     video: false,
//     vote_average: 8.6,
//     vote_count: 2556,
//   },
// ];


// localStorage.setItem('queue', JSON.stringify(qqq));
// localStorage.removeItem('queue');

//   pagination.innerHTML = '';

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick() {
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');
  libraryListRenrer('watched');
}

export function onBtnQueueClick() {
  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');
  libraryListRenrer('queue');
}

onBtnWatchedClick();

function libraryListRenrer(list) {
  let watchedList;

  try {
    if (list === 'watched') {
      watchedList = localStorage.getItem('currentFilms');
    } else {
      watchedList = localStorage.getItem('queue');
    }
  } catch (err) {
    console.log(err);
  }
  // console.log('watchedList888: ', watchedList);
  libraryData.innerHTML = '';

  try {
    if (watchedList) {
      let watchedListToRender;

      if (list === 'watched') {
        watchedListToRender = JSON.parse(watchedList).data.results;
      } else {
        watchedListToRender = JSON.parse(watchedList);
      }

      // const watchedListToRender = JSON.parse(watchedList).data.results;

      console.log('films To Render ', watchedListToRender.length);
      // let watchedListToRender_1 = (watchedListToRender.length > 9) ? watchedListToRender.slice(0, 9) : watchedListToRender;

      console.log('window.screen.width', window.screen.width);

      const screenWidth = window.screen.width;

      let array_size;

      if (screenWidth < 767) {
        array_size = 4;
        console.log('mobile');
      } else if (screenWidth > 767 && screenWidth < 1280) {
        array_size = 8;
        console.log('tablet');
      } else {
        array_size = 9;
        console.log('desc');
      }

      console.log('array_size: ', array_size);

      if (watchedListToRender.length > array_size) {
        // const array_size = 9;
        const sliced_array = [];
        for (let i = 0; i < watchedListToRender.length; i += array_size) {
          sliced_array.push(watchedListToRender.slice(i, i + array_size));
        }
        console.log('pages to paginate', sliced_array.length);

        // console.log(sliced_array.length);

        // let newMurkup = MYrenderMarkup(sliced_array[1]);
        // libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
        try {
          let newMurkup = renderMarkupSearch(sliced_array[1]);
          libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;

          // let i = 1;
          // timerId = setInterval(() => {
          //   if (i === sliced_array.length - 1) {
          //     clearInterval(timerId);
          //   }

          //   let newMurkup = renderMarkupSearch(sliced_array[i]);
          //   libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;

          //   i += 1;
          // }, 1500);
        } catch (err) {
          console.log(err);
        }
      } else {
        const newMurkup = renderMarkupSearch(watchedListToRender);
        // console.log('newMurkup: ', newMurkup);
        //  libraryContainer.insertAdjacentHTML('beforeend', newMurkup);
        libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
      }
    } else {
      libraryData.innerHTML = `<div class="no-data">
      <p>
        It's empty here now
      </p>
      <a class="no-data-btn" href="./index.html">Let's fix it</a>
    </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}

