(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),r=c.n(i),s=(c(14),c(9)),o=c(6),l=c.n(o),u=c(8),j=c(4),d=(c(16),c(17),c(0)),h=function(e){console.log(e);var t=e.favouriteMovie;return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(c){return Object(d.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(d.jsx)("img",{src:c.Poster,alt:"movie"}),Object(d.jsx)("div",{onClick:function(){return e.handleFavourites(c)},className:"d-flex overlay align-items-center justify-content-center",children:Object(d.jsx)(t,{})})]},c.imdbID)}))})},v=function(e){return Object(d.jsx)("div",{className:"col text-center mt-4 mb-3",children:Object(d.jsx)("h1",{children:e.header})})},f=function(e){return Object(d.jsx)("div",{className:"offset-sm-3 col-sm-6 mb-3",children:Object(d.jsx)("input",{className:"form-control search-bar",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search a movie...."})})},b=function(){return Object(d.jsx)("div",{className:"heart-like",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"red",className:"bi bi-heart",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})})},m=function(){return Object(d.jsx)("div",{className:"heart-dislike",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})})},O=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(j.a)(i,2),o=r[0],O=r[1],x=Object(n.useState)([]),p=Object(j.a)(x,2),g=p[0],w=p[1],N=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"8644ae0e",c="https://www.omdbapi.com/?s=".concat(t,"&apikey=").concat("8644ae0e"),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:(i=e.sent).Search&&a(i.Search);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(o)}),[o]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("movie-app-favourites"));w(e)}),[]);var S=function(e){localStorage.setItem("movie-app-favourites",JSON.stringify(e))};return Object(d.jsxs)("div",{className:"container-fluid movie-list",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(v,{header:"Movies"})}),Object(d.jsx)(f,{searchValue:o,setSearchValue:O}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(h,{movies:c,favouriteMovie:b,handleFavourites:function(e){if(-1===g.indexOf(e)){var t=[].concat(Object(s.a)(g),[e]);w(t),S(t)}}})}),g&&g.length>0&&Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(v,{header:"Favourites"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(h,{movies:g,favouriteMovie:m,handleFavourites:function(e){var t=g.filter((function(t){return t.imdbID!==e.imdbID}));w(t),S(t)}})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.91714480.chunk.js.map