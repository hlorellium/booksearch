(this.webpackJsonpbooksearch=this.webpackJsonpbooksearch||[]).push([[0],{16:function(e,t,n){e.exports={grid:"Books_grid__1Z-VH",container:"Books_container__1K5i7"}},19:function(e,t,n){e.exports={item:"BookSnippet_item__1W_JC"}},25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),s=(n(25),n(26),n(6)),i=s.c,l=n(12),u=n(19),d=n.n(u),b=n(8),j=n.n(b),h=n(1);var p=function(e){var t=e.book,n=e.setModalIsOpened,r="http://covers.openlibrary.org/b/ID/".concat(t.cover_i,"-L.jpg?default=false");return Object(h.jsx)("div",{className:j.a.wrapper,onClick:function(){return n((function(e){return!e}))},children:Object(h.jsxs)("div",{className:j.a.modal,children:[Object(h.jsx)("div",{className:j.a.header,children:Object(h.jsx)("h2",{children:t.title})}),Object(h.jsx)("div",{className:j.a.content,children:Object(h.jsx)("img",{src:r,alt:""})})]})})};var f=function(e){var t=e.book,n=Object(r.useState)(!1),a=Object(l.a)(n,2),c=a[0],o=a[1],s="http://covers.openlibrary.org/b/ID/".concat(t.cover_i,"-S.jpg?default=false");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:d.a.item,onClick:function(){return o(!0)},children:[Object(h.jsx)("img",{src:s,alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:t.title}),Object(h.jsxs)("span",{children:[t.author_name," "]})]})]}),c?Object(h.jsx)(p,{book:t,setModalIsOpened:o}):null]})},O=n(20),v=n(3),m=n.n(v),x=n(11),_=n(7);function g(e){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(m.a.mark((function e(t){var n,r,a,c=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>1&&void 0!==c[1]?c[1]:1,n=t.split(" ").join("+"),r="http://openlibrary.org/search.json?q=".concat(n),e.next=5,fetch(r);case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=Object(_.b)("books/loadBooks",function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{docs:[]});case 2:return e.next=4,g(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(_.c)({name:"books",initialState:{docs:[],status:"idle"},reducers:{},extraReducers:function(e){e.addCase(w.pending,(function(e){e.status="loading"})).addCase(w.fulfilled,(function(e,t){e.status="idle",e.docs=Object(O.a)(t.payload.docs).sort((function(e,t){return t.edition_count-e.edition_count}))}))}}),B=function(e){return e.books.docs},E=y.reducer,N=n(16),S=n.n(N);var I,M=function(){var e=i(B);return Object(h.jsx)("div",{className:S.a.container,children:Object(h.jsx)("div",{className:S.a.grid,children:e.map((function(e,t){return Object(h.jsx)(f,{book:e},t)}))})})},C=n(4),z=n.n(C);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e,t){var n=e.title,a=e.titleId,c=D(e,["title","titleId"]);return r.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,I||(I=r.createElement("g",{"data-name":"Layer 2"},r.createElement("g",{"data-name":"search"},r.createElement("rect",{width:24,height:24,opacity:0}),r.createElement("path",{d:"M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"})))))}var L=r.forwardRef(J);n.p;var P=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.b)();return Object(r.useEffect)((function(){var e=setTimeout((function(){c(w(n))}),1e3);return function(){return clearTimeout(e)}}),[n,c]),Object(h.jsxs)("div",{className:z.a.container,children:[Object(h.jsx)("div",{children:Object(h.jsx)("h2",{className:z.a.title,children:"Enter book's title"})}),Object(h.jsxs)("div",{className:z.a.search,children:[Object(h.jsx)("input",{type:"search",name:"booksSearch",value:n,onChange:function(e){a(e.target.value)},autoFocus:!0,className:z.a.searchInput}),Object(h.jsx)("button",{type:"submit",onClick:function(){return c(w(n))},children:Object(h.jsx)(L,{className:z.a.searchIcon})})]})]})};var R=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(P,{}),Object(h.jsx)(M,{})]})},q=Object(_.a)({reducer:{books:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(s.a,{store:q,children:Object(h.jsx)(R,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={container:"SearchBar_container__fRl76",title:"SearchBar_title__GvExL",search:"SearchBar_search__w0EbE",searchIcon:"SearchBar_searchIcon__3zXh3"}},8:function(e,t,n){e.exports={wrapper:"BookModal_wrapper__Ezq1b",modal:"BookModal_modal__1oh_B",header:"BookModal_header__3rYQ7",content:"BookModal_content__2DW7t"}}},[[37,1,2]]]);
//# sourceMappingURL=main.971a74e1.chunk.js.map