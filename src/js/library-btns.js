import { btnWatched, btnQueue, libraryData } from './refs';
// import { createMarkup } from './createMarkup';
// console.log('createMarkup: ', createMarkup);
// import { getYear } from './createMarkup';
// console.log('getYear: ', getYear);

import { renderMarkupSearch } from './markupSearch';
// console.log('renderMarkupSearch: ', renderMarkupSearch);

// import renderMarkupSearch from './markupSearch';

// const libraryBtn = document.querySelector('.js-my-library-btn');
// libraryBtn.addEventListener('click', getLibrary);

// const btnWatched = document.querySelector('.js-btn-watched');
// const btnQueue = document.querySelector('.js-btn-queue');

// const www = [1,2,3,4,5,6]
// const www = [
//   {
//     adult: false,
//     backdrop_path: '/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg',
//     id: 536554,
//     title: 'M3GAN',
//     original_language: 'en',
//     original_title: 'M3GAN',
//     overview:
//       "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
//     poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
//     media_type: 'movie',
//     genre_ids: [878, 27, 35],
//     popularity: 6474.848,
//     release_date: '2022-12-28',
//     video: false,
//     vote_average: 7.306,
//     vote_count: 572,
//   },
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

const qqq = [
  {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    media_type: 'movie',
    genre_ids: [878, 12, 28],
    popularity: 2623.833,
    release_date: '2022-12-14',
    video: false,
    vote_average: 7.723,
    vote_count: 4599,
  },
  {
    adult: false,
    backdrop_path: '/faXT8V80JRhnArTAeYXz0Eutpv9.jpg',
    id: 315162,
    title: 'Puss in Boots: The Last Wish',
    original_language: 'en',
    original_title: 'Puss in Boots: The Last Wish',
    overview:
      'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
    poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    media_type: 'movie',
    genre_ids: [16, 28, 12, 35, 10751, 14],
    popularity: 6689.647,
    release_date: '2022-12-07',
    video: false,
    vote_average: 8.6,
    vote_count: 2556,
  },
];

// localStorage.setItem('watched', JSON.stringify(www));
localStorage.setItem('queue', JSON.stringify(qqq));
// localStorage.removeItem('queue');

//   clearMainContainer();
//   pagination.innerHTML = '';

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

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


          let newMurkup = renderMarkupSearch(sliced_array[0]);
          libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;

          let i = 1;
          timerId = setInterval(() => {
            if (i === sliced_array.length - 1) {
              clearInterval(timerId);
            }

            let newMurkup = renderMarkupSearch(sliced_array[i]);
            libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;

            i += 1;
          }, 1500);

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



function onBtnWatchedClick() {
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');

  // libraryData.innerHTML = '';

  const whatToRender = 'watched';
  // console.log('whatToRender: ', whatToRender);
libraryListRenrer(whatToRender);

  // try {
  //   // const watchedList = localStorage.getItem('watched');
  //   const watchedList = localStorage.getItem('currentFilms');
  //   // console.log('watchedList: ', watchedList);

  //   // console.log('watchedList: ', watchedList);
  //   // console.log(watchedList.length);
  //   if (watchedList) {
  //     const watchedListToRender = JSON.parse(watchedList).data.results;

  //     // const watchedListToRen_____ = JSON.parse(watchedList).data.results;
  //     // console.log(
  //     //   'watchedListToRen_____: ',
  //     //   watchedListToRen_____
  //     // );

  //     // const watchedListToRender = [
  //     //   ...watchedListToRen_____,
  //     //   ...watchedListToRen_____,
  //     //   ...watchedListToRen_____,
  //     // ];

  //     console.log('films To Render ', watchedListToRender.length);
  //     // let watchedListToRender_1 = (watchedListToRender.length > 9) ? watchedListToRender.slice(0, 9) : watchedListToRender;

  //     console.log('window.screen.width', window.screen.width);

  //     const screenWidth = window.screen.width;

  //     let array_size;

  //     if (screenWidth < 767) {
  //       array_size = 4;
  //       console.log('mobile');
  //     } else if (screenWidth > 767 && screenWidth < 1280) {
  //       array_size = 8;
  //       console.log('tablet');
  //     } else {
  //       array_size = 9;
  //       console.log('desc');
  //     }

  //     console.log('array_size: ', array_size);

  //     if (watchedListToRender.length > array_size) {
  //       // const array_size = 9;
  //       const sliced_array = [];
  //       for (let i = 0; i < watchedListToRender.length; i += array_size) {
  //         sliced_array.push(watchedListToRender.slice(i, i + array_size));
  //       }
  //       console.log('pages to paginate', sliced_array.length);

  //       // console.log(sliced_array.length);

  //       // let newMurkup = MYrenderMarkup(sliced_array[1]);
  //       // libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //       try {
  //         // for (let i = 0; i < sliced_array.length; i += 1) {

  //         let newMurkup = renderMarkupSearch(sliced_array[0]);
  //         libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;


  //         let i = 1;
  //         timerId = setInterval(() => {
  //           if (i === sliced_array.length - 1) {
  //             clearInterval(timerId);
  //           }
  //           // setTimeout(() => {
  //           let newMurkup = renderMarkupSearch(sliced_array[i]);
  //           libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //           // }, 2000);
  //           // console.log(i);
  //           i += 1;
  //         }, 1500);
  //         // }

  //         // for (let i = 0; i < sliced_array.length; i += 1) {
  //         //   setTimeout(() => {
  //         //     let newMurkup = MYrenderMarkup(sliced_array[i]);
  //         //     libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //         //   }, 2000);
  //         // }
  //       } catch (err) {
  //         console.log(err);
  //       }

  //       // setTimeout(() => {

  //       // }, 2000);

  //       // timerId = setInterval(() => {
  //       //   console.log(`I love async JS!  ${Math.random()}`);
  //       // }, 1000);

  //       // sliced_array.forEach(array => {
  //       // timerId = setInterval(() => {
  //       // setTimeout(() => {
  //       //   console.log('array: ', array);
  //       //   let newMurkup = MYrenderMarkup(array);
  //       //   libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //       // }, 1000);
  //       // }, 1000);
  //       // });
  //     } else {
  //       const newMurkup = renderMarkupSearch(watchedListToRender);
  //       // console.log('newMurkup: ', newMurkup);
  //       //  libraryContainer.insertAdjacentHTML('beforeend', newMurkup);
  //       libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //     }
  //   } else {
  //     libraryData.innerHTML = `<div class="no-data">
  //     <p>
  //       It's empty here now
  //     </p>
  //     <a class="no-data-btn" href="./index.html">Let's fix it</a>
  //   </div>`;
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
}

export function onBtnQueueClick() {
  //   console.log('onBtnQueueClick: ');

  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');

  // libraryData.innerHTML = '';

    const whatToRender = 'queue';
    // console.log('whatToRender: ', whatToRender);
    libraryListRenrer(whatToRender);

  // try {
  //   const queueList = localStorage.getItem('queuequeue');
  //   if (queueList) {
  //     const queueListToRender = JSON.parse(queueList);
  //     // console.log('queueListToRender: ', queueListToRender);
  //     // console.log('queueListToRender: ', queueListToRender.length);
  //     const newMurkup = renderMarkupSearch(queueListToRender);
  //     // console.log('newMurkup: ', newMurkup);
  //     //  libraryContainer.insertAdjacentHTML('beforeend', newMurkup);
  //     libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
  //   } else {
  //     libraryData.innerHTML = `<div class="no-data">
  //     <p>
  //       It's empty here now (queueList)
  //     </p>
  //     <a class="no-data-btn" href="./index.html">Let's fix it</a>
  //   </div>`;
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
}

// const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

// function MYrenderMarkup(movies) {
//   // console.log(movies);
//   const markup = movies
//     .map(movie => {
//       // console.log(movie.genre_ids);
//       return `<li class="movie__item">
//          <img src="${
//            'https://image.tmdb.org/t/p/w500/' + movie.poster_path
//          }" alt="${movie.original_title}">
//                 <h3 class="card_title">${movie.title}</h3>
//                     <p class="card_genres">${movie.genre_ids}</p>
//                     <p class="card_release_date">${movie.release_date}</p>
//                     <p class="card_release_date">${movie.vote_average.toFixed(
//                       1
//                     )}</p>
//                 </li>`;
//     })
//     .join('');

//   // console.log('beforeend', markup);
//   return markup;
// }

// .card-film_scale {
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover {
//     transform: scale(1.03);
//   }
// }
