!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i);var n,l,o,r=i("dh4R1"),c=i("4Nugj"),s=i("hnyF1"),d=(c=i("4Nugj"),document.querySelector(".pagination__list")),u=document.querySelector(".pagination");function g(){d.innerHTML="",r.default.resetPage(),c.btnWatched.classList.add("btnIsActive"),c.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),l="watched",m()}function m(e,t){var a,i=e||r.default.page;try{a="watched"===l?localStorage.getItem("watchedFilms"):localStorage.getItem("queuedFilms")}catch(e){console.log(e)}c.libraryData.innerHTML="";try{if(a&&"[]"!==a){var o;o=JSON.parse(a);var u,g=window.screen.width;if(u=g<767?4:g>767&&g<1280?8:9,o.length>u){for(var m=[],v=0;v<o.length;v+=u)m.push(o.slice(v,v+u));(function(e,t){n=t;var a="",i=e-2,l=e-1,o=e+1,r=e+2;e>1&&(a+='<li class="pagination__item pagination__item_arrows">◄</li> ',a+='<li class="pagination__item">1</li>');e>4&&(a+='<li class="pagination__item three-drops">...</li>');e>3&&(a+='<li class="pagination__item">'.concat(i,"</li>"));e>2&&(a+='<li class="pagination__item">'.concat(l,"</li>"));a+='<li class="pagination__item current">'.concat(e,"</li>"),n-1>e&&(a+='<li class="pagination__item">'.concat(o,"</li>"));n-2>e&&(a+='<li class="pagination__item">'.concat(r,"</li>"));n-3>e&&(a+='<li class="pagination__item three-drops">...</li>');n>e&&(a+='<li class="pagination__item">'.concat(n,"</li>"),a+='<li class="pagination__item pagination__item_arrows">►</li>');d.innerHTML=a,window.scrollBy(0,-1e4)})(i,m.length);try{var p=(0,s.renderMarkupSearch)(m[i-1]);c.libraryData.innerHTML='<ul class="library__list js-library-list">'.concat(p,"</ul>")}catch(e){console.log(e)}}else{var f=(0,s.renderMarkupSearch)(o);d.innerHTML="",r.default.page=1,i=1,c.libraryData.innerHTML='<ul class="library__list js-library-list">'.concat(f,"</ul>")}}else c.libraryData.innerHTML='<div class="no-data">\n      <p>\n        It\'s empty here now\n      </p>\n      <a class="no-data-btn" href="./index.html">Let\'s fix it</a>\n    </div>'}catch(e){console.log(e)}}c.btnWatched.addEventListener("click",g),c.btnQueue.addEventListener("click",(function(){d.innerHTML="",r.default.resetPage(),c.btnWatched.classList.remove("btnIsActive"),c.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),l="queue",m()})),g(),u.addEventListener("click",(function(e){if("LI"!==e.target.tagName)return;if("..."===e.target.textContent)return;if("►"===e.target.textContent)return m(o+=1),void(r.default.page=o);if("◄"===e.target.textContent)return m(o-=1),void(r.default.page=o);m(o=Number(e.target.textContent)),r.default.page=o}));var v=i("jeWR1");c=i("4Nugj"),c=i("4Nugj"),c=i("4Nugj");function p(e){"Escape"===e.code&&(window.removeEventListener("keydown",p),c.openModalMovie.classList.toggle("is-hidden"),m())}document.querySelector(".js-library-data").addEventListener("click",(function(e){if(!e.target.closest(".movie__item"))return;try{var t;c.openModalMovie.classList.toggle("is-hidden"),window.addEventListener("keydown",p),c.openModalMovie.classList.contains("is-hidden")&&window.removeEventListener("keydown",p);var a=localStorage.getItem("sourceForModal");if("watchedFilms"===a){var i=JSON.parse(localStorage.getItem("watchedFilms"));t=i}if("queuedFilms"===a){var n=JSON.parse(localStorage.getItem("queuedFilms"));t=n}var l=e.target.closest(".movie__item").dataset.movie;c.modalGallery.innerHTML="";var o=t.find((function(e){return e.id==l}));null==o||c.modalGallery.insertAdjacentHTML("beforeend",(0,v.renderMarkupModal)(o))}catch(e){console.log(e)}})),c.closeModalMovieBtn.addEventListener("click",(function(){setTimeout((function(){return c.openModalMovie.classList.add("is-hidden",m())}),150)})),c.openModalMovie.addEventListener("click",(function(e){e.target===e.currentTarget&&(c.openModalMovie.classList.toggle("is-hidden"),m())})),i("jeWR1");c=i("4Nugj");var f=i("kpmfB"),M=(c=i("4Nugj"),i("ghnK3")),_=(c=i("4Nugj"),i("cDXQO"));_=i("cDXQO");c.openModalMovie.addEventListener("click",f.onClickModal),c.openModalTeamBtn.addEventListener("click",M.toggleTeamModal),c.closeModalTeamBtn.addEventListener("click",M.toggleTeamModal),c.modalTeam.addEventListener("click",M.clickBackdropCloseTeamModal),c.modalGallery.addEventListener("click",_.onBtnTrailer)}();
//# sourceMappingURL=library.dfafd3a9.js.map