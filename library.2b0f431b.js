var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("iyB0E");var i=r("krGWQ"),l=r("7LV6V");function a(){i.btnWatched.classList.add("btnIsActive"),i.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),(0,l.libraryListRender)()}i.btnWatched.addEventListener("click",a),i.btnQueue.addEventListener("click",(function(){i.btnWatched.classList.remove("btnIsActive"),i.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),(0,l.libraryListRender)()})),a(),r("j3p24"),r("7LV6V"),r("jwFHl");i=r("krGWQ");var o=r("7YAZl"),d=(i=r("krGWQ"),r("baGT8")),s=(i=r("krGWQ"),r("37v9V"));s=r("37v9V");(i=r("krGWQ")).openModalMovie.addEventListener("click",o.onClickModal),i.openModalTeamBtn.addEventListener("click",d.toggleTeamModal),i.modalGallery.addEventListener("click",s.onBtnTrailer);
//# sourceMappingURL=library.2b0f431b.js.map
