"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{52:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(885),a=r(791),c=r(871),u=r(577),o="Cast_item__-YEO9",s="Cast_image__Ly2vd",i=r(184),p=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],p=e[1],f=(0,u.Z)().getMovieCredits,l=(0,c.UO)().movieId;return(0,a.useEffect)((function(){f(l).then((function(t){p(t)}))}),[]),(0,i.jsx)("ul",{children:r&&r.map((function(t){return(0,i.jsxs)("li",{className:o,children:[(0,i.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:"cast_image"}),(0,i.jsx)("div",{children:t.name}),(0,i.jsxs)("div",{children:["Character: ",t.character]})]},t.id)}))})}},577:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(885),o=r(791),s=function(){var t=function(){var t=(0,o.useState)("waiting"),e=(0,u.Z)(t,2),r=e[0],a=e[1],s=(0,o.useCallback)(function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,u,o,s,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,u=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},a("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:n,headers:u});case 7:if((o=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(o.status));case 10:return t.next=12,o.json();case 12:return s=t.sent,t.abrupt("return",s);case 16:throw t.prev=16,t.t0=t.catch(4),a("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:s,clearError:(0,o.useCallback)((function(){a("loading")}),[]),process:r,setProcess:a}}(),e=t.request,r=t.clearError,a=t.process,s=t.setProcess,i="https://api.themoviedb.org/3/",p="api_key=a01a0779b6da55b3cb3231f967e502fc",f=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"trending/movie/day?").concat(p));case 2:return r=t.sent,t.abrupt("return",r.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"search/movie?").concat(p,"&query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"?").concat(p));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"/credits?").concat(p));case 2:return n=t.sent,t.abrupt("return",n.cast.map(w));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"/reviews?").concat(p));case 2:return n=t.sent,t.abrupt("return",n.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,title:t.title}},w=function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}},g=function(t){return{id:t.id,author:t.author,content:t.content}};return{clearError:r,process:a,setProcess:s,getTrandingToday:f,searchFilmByName:l,getMovieDetails:h,getMovieCredits:v,getMovieReviews:d}}}}]);
//# sourceMappingURL=52.44edf93b.chunk.js.map