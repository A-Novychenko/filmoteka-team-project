import { btnWatched, btnQueue, libraryData } from './refs';

// const libraryBtn = document.querySelector('.js-my-library-btn');
// libraryBtn.addEventListener('click', getLibrary);

// const btnWatched = document.querySelector('.js-btn-watched');
// const btnQueue = document.querySelector('.js-btn-queue');

// const www = [1,2,3,4,5,6]
//   const www = [
//           {
//               "adult": false,
//               "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
//               "id": 536554,
//               "title": "M3GAN",
//               "original_language": "en",
//               "original_title": "M3GAN",
//               "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
//               "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
//               "media_type": "movie",
//               "genre_ids": [
//                   878,
//                   27,
//                   35
//               ],
//               "popularity": 6474.848,
//               "release_date": "2022-12-28",
//               "video": false,
//               "vote_average": 7.306,
//               "vote_count": 572
//           },
//           {
//               "adult": false,
//               "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
//               "id": 76600,
//               "title": "Avatar: The Way of Water",
//               "original_language": "en",
//               "original_title": "Avatar: The Way of Water",
//               "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//               "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//               "media_type": "movie",
//               "genre_ids": [
//                   878,
//                   12,
//                   28
//               ],
//               "popularity": 2623.833,
//               "release_date": "2022-12-14",
//               "video": false,
//               "vote_average": 7.723,
//               "vote_count": 4599
//           },
//           {
//               "adult": false,
//               "backdrop_path": "/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",
//               "id": 315162,
//               "title": "Puss in Boots: The Last Wish",
//               "original_language": "en",
//               "original_title": "Puss in Boots: The Last Wish",
//               "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
//               "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
//               "media_type": "movie",
//               "genre_ids": [
//                   16,
//                   28,
//                   12,
//                   35,
//                   10751,
//                   14
//               ],
//               "popularity": 6689.647,
//               "release_date": "2022-12-07",
//               "video": false,
//               "vote_average": 8.6,
//               "vote_count": 2556
//   }];

//   localStorage.setItem('watched', JSON.stringify(www));

//   clearMainContainer();
//   pagination.innerHTML = '';

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

onBtnWatchedClick();

function onBtnWatchedClick() {
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');

  try {
    const watchedList = localStorage.getItem('watched');
    if (watchedList) {
      const watchedListToRender = JSON.parse(watchedList);
      console.log('watchedListToRender: ', watchedListToRender);
      console.log('watchedListToRender: ', watchedListToRender.length);
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

export function onBtnQueueClick() {
  console.log('onBtnQueueClick: ');
  //   clearLibContainer();

  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');

  try {
    const queueList = localStorage.getItem('queue');
    if (queueList) {
      const queueListToRender = JSON.parse(queueList);
      console.log('queueListToRender: ', queueListToRender);
      console.log('queueListToRender: ', queueListToRender.length);
    } else {
      libraryData.innerHTML = `<div class="no-data">
      <p>
        It's empty here now (queueList)
      </p>
      <a class="no-data-btn" href="./index.html">Let's fix it</a>
    </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}
