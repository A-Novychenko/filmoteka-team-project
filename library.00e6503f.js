var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var s=n("iyB0E"),i=n("krGWQ"),a=n("7LV6V"),o=n("8vRiP");function d(){s.default.resetPage(),i.btnWatched.classList.add("btnIsActive"),i.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),(0,a.libraryListRender)(),o.observer.observe(i.guard)}i.btnWatched.addEventListener("click",d),i.btnQueue.addEventListener("click",(function(){s.default.resetPage(),i.btnWatched.classList.remove("btnIsActive"),i.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),(0,a.libraryListRender)(),o.observer.observe(i.guard)})),d(),n("j3p24"),n("7LV6V"),n("jwFHl"),n("krGWQ"),n("7YAZl"),n("baGT8"),n("37v9V");
//# sourceMappingURL=library.00e6503f.js.map
