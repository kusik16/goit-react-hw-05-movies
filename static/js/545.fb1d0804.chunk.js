"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[545],{545:function(t,e,r){r.r(e);var n=r(152),a=r(791),c=r(871),u=r(504),o=r(577),s=r(184);e.default=function(){var t=(0,a.useState)(""),e=(0,n.Z)(t,2),r=e[0],i=e[1],p=(0,a.useState)([]),f=(0,n.Z)(p,2),h=f[0],l=f[1],v=(0,o.Z)().searchFilmByName,d=(0,c.s0)(),m={query:r},w=(0,c.TH)().search;(0,a.useEffect)((function(){var t;w&&(t=w.split("=")[1],v(t).then((function(t){return l(t)})))}),[w]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{onChange:function(t){return i(t.target.value)},type:"text"}),(0,s.jsx)("button",{onClick:function(){return d({pathname:"/goit-react-hw-05-movies/movies",search:"?".concat((0,u.fW)(m))})},children:"search"}),(0,s.jsx)("ul",{children:h.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(t.id),children:t.title})},t.id)}))})]})}},577:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(152),o=r(791),s=function(){var t=function(){var t=(0,o.useState)("waiting"),e=(0,u.Z)(t,2),r=e[0],a=e[1],s=(0,o.useCallback)(function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,u,o,s,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,u=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},a("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:n,headers:u});case 7:if((o=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(o.status));case 10:return t.next=12,o.json();case 12:return s=t.sent,t.abrupt("return",s);case 16:throw t.prev=16,t.t0=t.catch(4),a("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:s,clearError:(0,o.useCallback)((function(){a("loading")}),[]),process:r,setProcess:a}}(),e=t.request,r=t.clearError,a=t.process,s=t.setProcess,i="https://api.themoviedb.org/3/",p="api_key=a01a0779b6da55b3cb3231f967e502fc",f=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"trending/movie/day?").concat(p));case 2:return r=t.sent,t.abrupt("return",r.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"search/movie?").concat(p,"&query=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"?").concat(p));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"/credits?").concat(p));case 2:return n=t.sent,t.abrupt("return",n.cast.map(w));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(i,"movie/").concat(r,"/reviews?").concat(p));case 2:return n=t.sent,t.abrupt("return",n.results.map(x));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,title:t.title}},w=function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}},x=function(t){return{id:t.id,author:t.author,content:t.content}};return{clearError:r,process:a,setProcess:s,getTrandingToday:f,searchFilmByName:h,getMovieDetails:l,getMovieCredits:v,getMovieReviews:d}}}}]);
//# sourceMappingURL=545.fb1d0804.chunk.js.map