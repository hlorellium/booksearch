(this.webpackJsonpbooksearch=this.webpackJsonpbooksearch||[]).push([[0],{16:function(e,t,n){e.exports={grid:"Books_grid__1Z-VH",container:"Books_container__1K5i7"}},19:function(e,t,n){e.exports={item:"BookSnippet_item__1W_JC"}},25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(9),i=n.n(o),s=(n(25),n(26),n(7)),l=s.c,u=n(12),d=n(19),b=n.n(d);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function p(e,t){var n=e.title,a=e.titleId,o=h(e,["title","titleId"]);return c.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 32 32",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},o),n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M31.5,2.42828c0-0.51752-0.20148-1.00427-0.56763-1.36987c-0.73224-0.73224-2.00751-0.73224-2.73975,0L16,13.25104L3.80737,1.05841c-0.73224-0.73224-2.00751-0.73224-2.73975,0C0.70154,1.42401,0.5,1.91077,0.5,2.42828c0,0.51746,0.20154,1.00421,0.56763,1.36987l12.19263,12.19263L1.06763,28.18341C0.70154,28.54901,0.5,29.03577,0.5,29.55328c0,0.51746,0.20154,1.00421,0.56763,1.36987c0.73224,0.73224,2.00751,0.73224,2.73975,0L16,18.73053l12.19263,12.19263c0.36615,0.36609,0.85242,0.56763,1.36987,0.56763c0.51752,0,1.00378-0.20154,1.36987-0.56763C31.29852,30.5575,31.5,30.07074,31.5,29.55328c0-0.51752-0.20148-1.00427-0.56763-1.36987L18.73975,15.99078L30.93237,3.79816C31.29852,3.4325,31.5,2.94574,31.5,2.42828z"})))}var f=c.forwardRef(p),v=(n.p,n(4)),O=n.n(v),m=n(1);var x=function(e){var t,n,r,c=e.book,a=e.setModalIsOpened,o="http://covers.openlibrary.org/b/ID/".concat(c.cover_i,"-L.jpg?default=false");return Object(m.jsx)("div",{className:O.a.wrapper,onClick:function(){return a((function(e){return!e}))},children:Object(m.jsxs)("div",{className:O.a.modal,onClick:function(e){return e.stopPropagation()},children:[Object(m.jsx)(f,{className:O.a.crossIcon,onClick:function(){return a((function(e){return!e}))}}),Object(m.jsxs)("div",{className:O.a.container,children:[Object(m.jsx)("img",{src:o,alt:""}),Object(m.jsxs)("div",{className:O.a.content,children:[Object(m.jsx)("h2",{children:c.title}),Object(m.jsx)("h3",{children:null===(t=c.author_name)||void 0===t?void 0:t.join(", ")}),c.first_publish_year?Object(m.jsxs)("span",{children:["First published in ",c.first_publish_year]}):null,c.publisher?Object(m.jsxs)("p",{children:["Published by ",null===(n=c.publisher)||void 0===n?void 0:n.join(", ")]}):null,c.isbn?Object(m.jsxs)("p",{children:["ISBN: ",null===(r=c.isbn)||void 0===r?void 0:r.join(", ")]}):null]})]})]})})};var _=function(e){var t,n=e.book,r=Object(c.useState)(!1),a=Object(u.a)(r,2),o=a[0],i=a[1],s="https://covers.openlibrary.org/b/ID/".concat(n.cover_i,"-S.jpg?default=false");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:b.a.item,onClick:function(){return i(!0)},children:[Object(m.jsx)("img",{src:s,alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:n.title}),Object(m.jsxs)("span",{children:[null===(t=n.author_name)||void 0===t?void 0:t.join(", ")," "]})]})]}),o?Object(m.jsx)(x,{book:n,setModalIsOpened:i}):null]})},g=n(20),y=n(3),k=n.n(y),w=n(11),B=n(8);function I(e){return E.apply(this,arguments)}function E(){return(E=Object(w.a)(k.a.mark((function e(t){var n,r,c,a=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.length>1&&void 0!==a[1]?a[1]:1,n=t.split(" ").join("+"),r="https://openlibrary.org/search.json?q=".concat(n),e.next=5,fetch(r);case 5:return c=e.sent,e.next=8,c.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(B.b)("books/loadBooks",function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{docs:[]});case 2:return e.next=4,I(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(B.c)({name:"books",initialState:{docs:[],status:"idle"},reducers:{},extraReducers:function(e){e.addCase(S.pending,(function(e){e.status="loading"})).addCase(S.fulfilled,(function(e,t){e.status="idle",e.docs=Object(g.a)(t.payload.docs).sort((function(e,t){return t.edition_count-e.edition_count}))}))}}),C=function(e){return e.books.docs},M=N.reducer,L=n(16),P=n.n(L);var z,R=function(){var e=l(C);return Object(m.jsx)("div",{className:P.a.container,children:Object(m.jsx)("div",{className:P.a.grid,children:e.map((function(e,t){return Object(m.jsx)(_,{book:e},t)}))})})},W=n(5),A=n.n(W);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,r=e.titleId,a=F(e,["title","titleId"]);return c.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,z||(z=c.createElement("g",{"data-name":"Layer 2"},c.createElement("g",{"data-name":"search"},c.createElement("rect",{width:24,height:24,opacity:0}),c.createElement("path",{d:"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"})))))}var q=c.forwardRef(J);n.p;var T=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.b)();return Object(c.useEffect)((function(){var e=setTimeout((function(){a(S(n))}),1e3);return function(){return clearTimeout(e)}}),[n,a]),Object(m.jsxs)("div",{className:A.a.container,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h2",{className:A.a.title,children:"Enter book's title"})}),Object(m.jsxs)("div",{className:A.a.search,children:[Object(m.jsx)("input",{type:"search",name:"booksSearch",value:n,onChange:function(e){r(e.target.value)},autoFocus:!0,className:A.a.searchInput}),Object(m.jsx)("button",{type:"submit",onClick:function(){return a(S(n))},children:Object(m.jsx)(q,{className:A.a.searchIcon})})]})]})};var Z=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(T,{}),Object(m.jsx)(R,{})]})},G=Object(B.a)({reducer:{books:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(s.a,{store:G,children:Object(m.jsx)(Z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={wrapper:"BookModal_wrapper__Ezq1b",modal:"BookModal_modal__1oh_B",container:"BookModal_container__2xx4Z",crossIcon:"BookModal_crossIcon__3A1Cp",content:"BookModal_content__2DW7t"}},5:function(e,t,n){e.exports={container:"SearchBar_container__fRl76",title:"SearchBar_title__GvExL",search:"SearchBar_search__w0EbE",searchIcon:"SearchBar_searchIcon__3zXh3"}}},[[37,1,2]]]);
//# sourceMappingURL=main.b8b37ab3.chunk.js.map