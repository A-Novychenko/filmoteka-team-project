!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var d=o("dh4R1"),i=o("4Nugj"),l=o("b3ndh");function a(){d.default.resetPage(),i.btnWatched.classList.add("btnIsActive"),i.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),(0,l.libraryListRender)()}i.btnWatched.addEventListener("click",a),i.btnQueue.addEventListener("click",(function(){d.default.resetPage(),i.btnWatched.classList.remove("btnIsActive"),i.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),(0,l.libraryListRender)()})),a(),o("9tAMN"),o("b3ndh"),o("jeWR1");i=o("4Nugj");var r=o("kpmfB"),s=(i=o("4Nugj"),o("ghnK3")),c=(i=o("4Nugj"),o("cDXQO"));c=o("cDXQO");(i=o("4Nugj")).openModalMovie.addEventListener("click",r.onClickModal),i.openModalTeamBtn.addEventListener("click",s.toggleTeamModal),i.modalGallery.addEventListener("click",c.onBtnTrailer),document.addEventListener("DOMContentLoaded",(function(){window.onscroll=function(){window.pageYOffset>500&&i.buttonTop.classList.remove("visually-hidden")},i.buttonTop.addEventListener("click",(function(){i.buttonTop.classList.add("visually-hidden"),window.scrollBy({top:-document.documentElement.scrollHeight,behavior:"smooth"})}))}))}();
//# sourceMappingURL=library.40882f15.js.map
