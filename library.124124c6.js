!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var l,o,r,c=i("dh4R1"),s=i("4Nugj"),d=i("hnyF1"),u=(s=i("4Nugj"),document.querySelector(".pagination__list")),g=document.querySelector(".pagination");function p(){u.innerHTML="",c.default.resetPage(),s.btnWatched.classList.add("btnIsActive"),s.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),o="watched",m()}function m(e,t){var a,n=e||c.default.page;try{a="watched"===o?localStorage.getItem("watchedFilms"):localStorage.getItem("queuedFilms")}catch(e){console.log(e)}s.libraryData.innerHTML="";try{if(a&&"[]"!==a){var i;i=JSON.parse(a);var r,g=window.screen.width;if(r=g<767?4:g>767&&g<1280?8:9,i.length>r){for(var p=[],m=0;m<i.length;m+=r)p.push(i.slice(m,m+r));(function(e,t){l=t;var a="",n=e-2,i=e-1,o=e+1,r=e+2;e>1&&(a+='<li class="pagination__item pagination__item_arrows">◄</li> ',a+='<li class="pagination__item">1</li>');e>4&&(a+='<li class="pagination__item three-drops">...</li>');e>3&&(a+='<li class="pagination__item">'.concat(n,"</li>"));e>2&&(a+='<li class="pagination__item">'.concat(i,"</li>"));a+='<li class="pagination__item current">'.concat(e,"</li>"),l-1>e&&(a+='<li class="pagination__item">'.concat(o,"</li>"));l-2>e&&(a+='<li class="pagination__item">'.concat(r,"</li>"));l-3>e&&(a+='<li class="pagination__item three-drops">...</li>');l>e&&(a+='<li class="pagination__item">'.concat(l,"</li>"),a+='<li class="pagination__item pagination__item_arrows">►</li>');u.innerHTML=a,window.scrollBy(0,-1e4)})(n,p.length);try{var v=(0,d.renderMarkupSearch)(p[n-1]);s.libraryData.innerHTML='<ul class="library__list js-library-list">'.concat(v,"</ul>")}catch(e){console.log(e)}}else{var f=(0,d.renderMarkupSearch)(i);u.innerHTML="",c.default.page=1,n=1,s.libraryData.innerHTML='<ul class="library__list js-library-list">'.concat(f,"</ul>")}}else s.libraryData.innerHTML='<div class="no-data">\n      <p>\n        It\'s empty here now\n      </p>\n      <a class="no-data-btn" href="./index.html">Let\'s fix it</a>\n    </div>'}catch(e){console.log(e)}}s.btnWatched.addEventListener("click",p),s.btnQueue.addEventListener("click",(function(){u.innerHTML="",c.default.resetPage(),s.btnWatched.classList.remove("btnIsActive"),s.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),o="queue",m()})),p(),g.addEventListener("click",(function(e){if("LI"!==e.target.tagName)return;if("..."===e.target.textContent)return;if("►"===e.target.textContent)return m(r+=1),void(c.default.page=r);if("◄"===e.target.textContent)return m(r-=1),void(c.default.page=r);m(r=Number(e.target.textContent)),c.default.page=r}));var v,f=i("bpxeT"),_=i("2TvXO"),M=i("jeWR1");s=i("4Nugj"),s=i("4Nugj"),s=i("4Nugj");function h(e){"Escape"===e.code&&(window.removeEventListener("keydown",h),s.openModalMovie.classList.toggle("is-hidden"),m())}function L(){return(L=e(f)(e(_).mark((function t(a){return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a.target.classList.contains("btn_modal__back")&&setTimeout((function(){return s.modalGallery.innerHTML=(0,M.renderMarkupModal)(v)}),150)}catch(e){console.log(e)}case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.querySelector(".js-library-data").addEventListener("click",(function(e){if(!e.target.closest(".movie__item"))return;try{var t;s.openModalMovie.classList.toggle("is-hidden"),window.addEventListener("keydown",h),s.openModalMovie.classList.contains("is-hidden")&&window.removeEventListener("keydown",h);var a=localStorage.getItem("sourceForModal");if("watchedFilms"===a){var n=JSON.parse(localStorage.getItem("watchedFilms"));t=n}if("queuedFilms"===a){var i=JSON.parse(localStorage.getItem("queuedFilms"));t=i}var l=e.target.closest(".movie__item").dataset.movie;s.modalGallery.innerHTML="",null==(v=t.find((function(e){return e.id==l})))||s.modalGallery.insertAdjacentHTML("beforeend",(0,M.renderMarkupModal)(v))}catch(e){console.log(e)}})),s.closeModalMovieBtn.addEventListener("click",(function(){setTimeout((function(){return s.openModalMovie.classList.add("is-hidden",m())}),150)})),s.openModalMovie.addEventListener("click",(function(e){e.target===e.currentTarget&&(s.openModalMovie.classList.toggle("is-hidden"),m())})),s.modalGallery.addEventListener("click",(function(e){return L.apply(this,arguments)})),i("jeWR1");s=i("4Nugj");var y=i("kpmfB"),w=(s=i("4Nugj"),i("ghnK3")),b=(s=i("4Nugj"),i("cDXQO"));b=i("cDXQO");(s=i("4Nugj")).openModalMovie.addEventListener("click",y.onClickModal),s.openModalTeamBtn.addEventListener("click",w.toggleTeamModal),s.closeModalTeamBtn.addEventListener("click",w.toggleTeamModal),s.modalTeam.addEventListener("click",w.clickBackdropCloseTeamModal),s.modalGallery.addEventListener("click",b.onBtnTrailer)}();
//# sourceMappingURL=library.124124c6.js.map
