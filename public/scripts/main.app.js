!function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"scripts/"+({}[e]||e)+".app.js"}(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([24,2]),n()}({19:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(t){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(e.env.PUBLIC_URL,"/service-worker.js");r?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):a(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):a(n,t)})}}function a(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}}).call(this,n(29))},24:function(e,t,n){n(42),e.exports=n(41)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),i=n.n(a),c=n(19),s=n(5),l=n.n(s),u=n(11),f=n.n(u),p=n(20),d=n.n(p);function v(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d()(e,t,n[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}var m={episodes:[],favorites:[]},h=o.a.createContext(m),g=function(e,t){var n=t.type,r=t.payload;switch(n){case"FETCH_DATA":return v({},e,{episodes:r});case"ADD_FAVORITE":return v({},e,{favorites:[].concat(f()(e.favorites),[r])});case"REMOVE_FAVORITE":return v({},e,{favorites:f()(e.favorites.filter(function(e){return e.id!==r.id}))});default:return e}},y=n(9),b=n(6),E=n(12),w=n.n(E),O=n(21),j=n.n(O),k=function(){var e=j()(w.a.mark(function e(t){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes",e.next=4,fetch("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log(r),e.abrupt("return",t({type:"FETCH_DATA",payload:r._embedded.episodes}));case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}(),x=function(e,t,n){return t(e.favorites.includes(n)?{type:"REMOVE_FAVORITE",payload:n}:{type:"ADD_FAVORITE",payload:n})},A={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",width:"100vw"},spinner:{fontSize:"64px"}},P=function(){return o.a.createElement("div",{style:A.container},o.a.createElement("i",{className:"fa fa-refresh fa-spin",style:A.spinner}))},S=function(e){e.episodes;var t=e.favorites;return o.a.createElement("header",{className:"header"},o.a.createElement("h2",{style:{flex:"1 0 auto"}},"Rick & Morty"),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(y.b,{className:"nav-link",exact:!0,activeStyle:{fontWeight:"bold"},to:"/"},"Episodes"),o.a.createElement(y.b,{className:"nav-link",activeStyle:{fontWeight:"bold"},to:"/favorites"},"Favourite(s): ",t.length)))},_=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,43))}),C=function(){var e=Object(r.useContext)(h),t=l()(e,2),n=t[0],a={store:{state:n,dispatch:t[1]},episodes:n.episodes,favorites:n.favorites,toggleFavoriteAction:x};return o.a.createElement(r.Fragment,null,o.a.createElement(S,a),o.a.createElement("section",{className:"episode-layout"},o.a.createElement(r.Suspense,{fallback:o.a.createElement(P,null)},o.a.createElement(_,a))))},T=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,43))}),F=function(){var e=Object(r.useContext)(h),t=l()(e,2),n=t[0],a=t[1],i=n.favorites,c={store:{state:n,dispatch:a},episodes:i,favorites:i,toggleFavoriteAction:x};return o.a.createElement(r.Fragment,null,o.a.createElement(S,c),o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null,"loading...")},o.a.createElement("div",{className:"episode-layout"},o.a.createElement(T,c))))},R=function(){return o.a.createElement(y.a,null,o.a.createElement(r.Fragment,null,o.a.createElement(b.a,{exact:!0,path:"/",component:C}),o.a.createElement(b.a,{path:"/home",component:C}),o.a.createElement(b.a,{path:"/favorites",component:F})))},W=function(){var e=Object(r.useContext)(h),t=l()(e,2),n=t[0],a=t[1],i=n.episodes;n.favorites;return o.a.useEffect(function(){0===i.length&&k(a)}),o.a.createElement(r.Fragment,null,o.a.createElement(R,null))},D=document.querySelector("#root");i.a.render(o.a.createElement(function(e){var t=o.a.useReducer(g,m),n=l()(t,2),r=n[0],a=n[1];return o.a.createElement(h.Provider,{value:[r,a]}," ",e.children)},null,o.a.createElement(W,null)),D),c.a()}});