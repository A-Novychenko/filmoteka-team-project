!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var i=n("4Nugj"),s=n("bpxeT"),o=n("2TvXO"),l=(i=n("4Nugj"),n("dh4R1")),c=n("hnyF1"),d=(n("hnyF1"),function(){var e=document.querySelector(".loader");e&&e.classList.remove("hidden")}),u=function(){var e=document.querySelector(".loader");e&&e.classList.add("hidden")},p=(n("bpxeT"),n("2TvXO"),n("dh4R1"),n("hnyF1"),s=n("bpxeT"),o=n("2TvXO"),c=n("hnyF1"),i=n("4Nugj"),l=n("dh4R1"),n("3PzMA"));function f(){return m.apply(this,arguments)}function m(){return(m=e(s)(e(o).mark((function t(){var r,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(),e.next=4,l.default.fetchGenres();case 4:return e.next=6,l.default.fetchTrendFilms();case 6:r=e.sent,a=r.data.results,i.movieContainer.innerHTML=(0,c.renderMarkupSearch)(a),p.observer.observe(i.guard),u(),y(1,r.data.total_pages),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}f();i=n("4Nugj");var g,h=n("b3ndh"),v=document.querySelector(".pagination__list"),_=document.querySelector(".pagination");function y(e,t){return b.apply(this,arguments)}function b(){return(b=e(s)(e(o).mark((function t(r,a){var n,i,s,l,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",i=(g=r)-2,s=g-1,l=g+1,c=g+2,g>1&&(n+='<li class="pagination__item pagination__item_arrows">◄</li> ',n+='<li class="pagination__item">1</li>'),g>4&&(n+='<li class="pagination__item three-drops">...</li>'),g>3&&(n+='<li class="pagination__item">'.concat(i,"</li>")),g>2&&(n+='<li class="pagination__item">'.concat(s,"</li>")),n+='<li class="pagination__item current">'.concat(g,"</li>"),a-1>g&&(n+='<li class="pagination__item">'.concat(l,"</li>")),a-2>g&&(n+='<li class="pagination__item">'.concat(c,"</li>")),a-3>g&&(n+='<li class="pagination__item three-drops">...</li>'),a>g&&(n+='<li class="pagination__item">'.concat(a,"</li>"),n+='<li class="pagination__item pagination__item_arrows">►</li>'),v.innerHTML=n;case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=e(s)(e(o).mark((function t(r){var a,n,s,d,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("LI"===r.target.tagName){e.next=3;break}return e.abrupt("return");case 3:if("..."!==r.target.textContent){e.next=5;break}return e.abrupt("return");case 5:if(n=localStorage.getItem("searchSource"),"►"!==r.target.textContent){e.next=23;break}if(l.default.page=g,l.default.increamentPage(),"byTrend"!==n){e.next=15;break}return e.next=12,l.default.fetchTrendFilms();case 12:a=e.sent,e.next=18;break;case 15:return e.next=17,l.default.fetchFilmsByKeyWord();case 17:a=e.sent;case 18:return s=a.data.results,i.movieContainer.innerHTML=(0,c.renderMarkupSearch)(s),y(a.data.page,a.data.total_pages),window.scrollBy(0,270-window.pageYOffset),e.abrupt("return");case 23:if("◄"!==r.target.textContent){e.next=39;break}if(l.default.decrementPage(),"byTrend"!==n){e.next=31;break}return e.next=28,l.default.fetchTrendFilms();case 28:a=e.sent,e.next=34;break;case 31:return e.next=33,l.default.fetchFilmsByKeyWord();case 33:a=e.sent;case 34:return d=a.data.results,i.movieContainer.innerHTML=(0,c.renderMarkupSearch)(d),y(a.data.page,a.data.total_pages),window.scrollBy(0,270-window.pageYOffset),e.abrupt("return");case 39:if(l.default.page=Number(r.target.textContent),"byTrend"!==n){e.next=46;break}return e.next=43,l.default.fetchTrendFilms();case 43:a=e.sent,e.next=49;break;case 46:return e.next=48,l.default.fetchFilmsByKeyWord();case 48:a=e.sent;case 49:return u=a.data.results,i.movieContainer.innerHTML=(0,c.renderMarkupSearch)(u),y(a.data.page,a.data.total_pages),window.scrollBy(0,270-window.pageYOffset),e.abrupt("return");case 54:case"end":return e.stop()}}),t)})))).apply(this,arguments)}_.addEventListener("click",(function(e){return x.apply(this,arguments)})),_.removeEventListener("click",h.onLibrPaginationClick);i=n("4Nugj"),p=n("3PzMA");function T(){return(T=e(s)(e(o).mark((function t(r){var a,n,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.preventDefault(),l.default.query=r.currentTarget.keyword.value,a=r.currentTarget.keyword.value,localStorage.setItem("keyWord",a),(0,c.cleanHtml)(),i.paginationDiv.classList.add("visually-hidden"),l.default.page=1,l.default.query.trim()){e.next=16;break}return i.buttonTop.style.display="none",i.errorText.classList.remove("header__error_hidden"),document.body.classList.add("sad__smile"),i.paginationDiv.classList.add("visually-hidden"),setTimeout((function(){i.errorText.classList.add("header__error_hidden"),document.body.classList.remove("sad__smile"),i.paginationDiv.classList.remove("visually-hidden"),f()}),2500),i.headerForm.reset(),e.abrupt("return");case 16:return d(),e.next=19,l.default.fetchFilmsByKeyWord();case 19:n=e.sent,s=n.data.results,i.headerForm.reset(),u(),0===s.length?(i.buttonTop.style.display="none",i.errorText.classList.remove("header__error_hidden"),document.body.classList.add("sad__smile"),setTimeout((function(){i.errorText.classList.add("header__error_hidden"),document.body.classList.remove("sad__smile"),i.paginationDiv.classList.remove("visually-hidden"),f()}),2500),i.headerForm.reset()):(i.movieContainer.innerHTML=(0,c.renderMarkupSearch)(s),i.paginationDiv.classList.remove("visually-hidden"),p.observer.observe(i.guard),y(1,n.data.total_pages),u()),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),t,null,[[0,26]])})))).apply(this,arguments)}n("cDXQO"),n("9tAMN"),n("9tAMN"),n("9tAMN"),n("9tAMN"),n("jeWR1"),n("dh4R1");i=n("4Nugj");var k=n("ghnK3");n("kpmfB"),i.headerForm.addEventListener("submit",(function(e){return T.apply(this,arguments)})),i.openModalTeamBtn.addEventListener("click",k.toggleTeamModal)}();
//# sourceMappingURL=index.946ce587.js.map