(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{3070:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/hacker-news",function(){return t(793)}])},793:function(n,e,t){"use strict";t.r(e);var r=t(5893),i=t(7294),o=t(7379);function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,i=!1,o=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!e||t.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=u(["\n  color: steelblue;\n  text-decoration: none;\n"]);return a=function(){return n},n}function s(){var n=u(["\n  color: gray;\n  font-size: small;\n\n  & + &::before {\n    content: '|';\n    margin: 8px;\n  }\n"]);return s=function(){return n},n}function d(){var n=u(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 8px;\n"]);return d=function(){return n},n}function f(){var n=u(["\n  padding: 16px;\n  max-width: 640px;\n  margin: auto;\n  background: white;\n"]);return f=function(){return n},n}function l(){var n=u(["\n  height: 48px;\n  position: sticky;\n  top: 0;\n  background: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return l=function(){return n},n}function h(){var n=u(["\n  background: none;\n  border: none;\n"]);return h=function(){return n},n}var p=o.ZP.a.withConfig({componentId:"sc-be4da098-0"})(a()),x=o.ZP.span.withConfig({componentId:"sc-be4da098-1"})(s()),b=function(n){var e=n.item;return(0,r.jsxs)("li",{children:[(0,r.jsx)(p,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(x,{children:[e.points," points"]}),(0,r.jsxs)(x,{children:["by ",e.user," ",e.time_ago]}),(0,r.jsxs)(x,{children:[e.comments_count," comments"]})]})]})},g=o.ZP.ul.withConfig({componentId:"sc-be4da098-2"})(d()),m=function(n){var e=n.page,t=c(i.useState(null),2),o=t[0],u=t[1];return i.useEffect((function(){(function(n){return fetch("https://api.hnpwa.com/v0/news/".concat(n,".json")).then((function(n){return n.json()})).catch()})(e).then(u)}),[e]),o?(0,r.jsx)(g,{children:o.map((function(n){return(0,r.jsx)(b,{item:n},n.id)}))}):(0,r.jsx)(x,{children:"loading..."})},v=o.ZP.div.withConfig({componentId:"sc-be4da098-3"})(f()),j=o.ZP.header.withConfig({componentId:"sc-be4da098-4"})(l()),w=o.ZP.button.withConfig({componentId:"sc-be4da098-5"})(h());e.default=function(){var n=c(i.useState(1),2),e=n[0],t=n[1];return(0,r.jsxs)(v,{children:[(0,r.jsxs)(j,{children:[(0,r.jsx)("h2",{children:"Hacker News"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(w,{disabled:1===e,onClick:function(){return t(e-1)},children:"prev"}),(0,r.jsxs)(x,{children:[" ",e," / 10 "]}),(0,r.jsx)(w,{disabled:e>=10,onClick:function(){return t(e+1)},children:"next"})]})]}),(0,r.jsx)(m,{page:e})]})}}},function(n){n.O(0,[774,888,179],(function(){return e=3070,n(n.s=e);var e}));var e=n.O();_N_E=e}]);