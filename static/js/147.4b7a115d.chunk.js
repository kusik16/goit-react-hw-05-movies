"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{147:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(152),c=n(791),a=n(504),s=n(871),i=n(577),o="MovieInfo_container__bBC7s",u="MovieInfo_image__nJGF0",l="MovieInfo_info__EQV9k",p="MovieInfo_genresList__o5lXc",f="MovieInfo_genresItem__JzHIj",h="MovieInfo_additional__MzcIG",d=n(184),v=(0,c.lazy)((function(){return n.e(574).then(n.bind(n,574))})),m=(0,c.lazy)((function(){return n.e(3).then(n.bind(n,3))})),x=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],x=t[1],j=(0,i.Z)().getMovieDetails,w=(0,s.UO)().movieId,_=(0,s.s0)();return(0,c.useEffect)((function(){j(w).then((function(e){x(e)}))}),[]),(0,d.jsx)(d.Fragment,{children:n?(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{onClick:function(){return _(-1)},children:"go back"}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w200/".concat(n.poster_path),alt:"poster"}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("h1",{children:n.title}),(0,d.jsxs)("div",{children:["User score: ",Math.floor(n.popularity),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:n.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{className:p,children:n.genres.map((function(e){return(0,d.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("div",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsxs)(s.Z5,{children:[(0,d.jsx)(s.AW,{path:"cast",element:(0,d.jsx)(v,{})}),(0,d.jsx)(s.AW,{path:"reviews",element:(0,d.jsx)(m,{})})]})]}):null})}},577:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(861),c=n(757),a=n.n(c),s=n(152),i=n(791),o=function(){var e=function(){var e=(0,i.useState)("waiting"),t=(0,s.Z)(e,2),n=t[0],c=t[1],o=(0,i.useCallback)(function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,s,i,o,u=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c("loading"),e.prev=4,e.next=7,fetch(t,{method:n,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),c("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,i.useCallback)((function(){c("loading")}),[]),process:n,setProcess:c}}(),t=e.request,n=e.clearError,c=e.process,o=e.setProcess,u="https://api.themoviedb.org/3/",l="api_key=a01a0779b6da55b3cb3231f967e502fc",p=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"trending/movie/day?").concat(l));case 2:return n=e.sent,e.abrupt("return",n.results.map(m));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"search/movie?").concat(l,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.results.map(m));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"movie/").concat(n,"?").concat(l));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"movie/").concat(n,"/credits?").concat(l));case 2:return r=e.sent,e.abrupt("return",r.cast.map(x));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"movie/").concat(n,"/reviews?").concat(l));case 2:return r=e.sent,e.abrupt("return",r.results.map(j));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,title:e.title}},x=function(e){return{id:e.id,profile_path:e.profile_path,name:e.name,character:e.character}},j=function(e){return{id:e.id,author:e.author,content:e.content}};return{clearError:n,process:c,setProcess:o,getTrandingToday:p,searchFilmByName:f,getMovieDetails:h,getMovieCredits:d,getMovieReviews:v}}}}]);
//# sourceMappingURL=147.4b7a115d.chunk.js.map