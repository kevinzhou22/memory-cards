(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{15:function(A,e,t){},16:function(A,e,t){},17:function(A,e,t){"use strict";t.r(e);var c=t(0),r=t(1),n=t.n(r),s=t(8),g=t.n(s),i=(t(15),t(16),t(2)),a={};var o={on:function(A,e){a[A]=a[A]||[],a[A].push(e)},off:function(A,e){if(a[A])for(var t=0;t<a[A].length;t+=1)if(a[A][t]===e){a[A].splice(t,1);break}},emit:function(A,e){a[A]&&a[A].forEach((function(A){A(e)}))}},b=0,u=0,B=function(){b+=1,o.emit("newScore",b),b>u&&(u=b,o.emit("newHighScore",u))},f=function(){b=0,o.emit("newScore",b)},w=function(){return b},C=function(){return u};var d=function(){var A=function(){var A=Object(r.useState)(w()),e=Object(i.a)(A,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){o.on("newScore",(function(A){c(A)}))})),t}(),e=function(){var A=Object(r.useState)(C()),e=Object(i.a)(A,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){o.on("newHighScore",(function(A){c(A)}))})),t}();return Object(c.jsxs)("div",{className:"scoreboard-display",children:[Object(c.jsx)("span",{className:"score",children:"Score: ".concat(A)}),Object(c.jsx)("span",{className:"high-score",children:"High Score: ".concat(e)})]})},h=t(6),I=t(7);function E(A){var e=A.url,t=A.title,r=(A.id,A.onClick),n={backgroundColor:A.backgroundColor};return Object(c.jsxs)("div",{className:"card",onClick:function(){r()},style:n,children:[Object(c.jsx)("div",{className:"card-image-container",children:Object(c.jsx)("img",{src:e,alt:""})}),Object(c.jsx)("div",{className:"title",children:t})]})}var Q=t(9),O=[],D=function A(e,t){Object(Q.a)(this,A),this.id=e,this.selected=t},l=function(A){for(var e=[],t=0;t<A;t+=1)e.push(new D(t,!1));O.splice.apply(O,[0,O.length].concat(e))},x=function(A){for(var e=0;e<O.length;e+=1)if(O[e].id===A)return O[e].selected;return null},m=function(){return O.map((function(A){return A.id}))},j=function(A){for(var e=0;e<O.length;e+=1)if(O[e].id===A)return O[e].selected=!0,!0;return!1},v=function(){for(var A=0;A<O.length;A+=1)O[A].selected=!1},Y=t.p+"static/media/apple.cdd2c184.png",H=t.p+"static/media/cherries.305460ee.png",G=t.p+"static/media/donut.bc872efa.png",F=t.p+"static/media/grapes.ab2f8276.png",N=t.p+"static/media/hamburger.9eb2dafe.png",M=t.p+"static/media/ice-cream.b1a86e19.png",p=t.p+"static/media/pancakes.e48a10c3.png",L=t.p+"static/media/pizza.9011176e.png",k=t.p+"static/media/strawberry.c6af7566.png";function y(A){var e=A.length,t=Object(r.useState)(!1),c=Object(i.a)(t,2),n=c[0],s=c[1];n||(l(e),s(!0));var g=Object(r.useState)(function(){for(var e=m(),t=[],c=0;c<e.length;c+=1)t.push(Object(I.a)(Object(I.a)({},A[c]),{},{id:e[c]}));return t}()),a=Object(i.a)(g,2),o=a[0],b=a[1],u=function(A){x(A)?(v(),f()):(j(A),B()),b(function(A){for(var e=Object(h.a)(A),t=A.length-1;t>0;t-=1){var c=Math.floor(Math.random()*(t+1)),r=[e[c],e[t]];e[t]=r[0],e[c]=r[1]}return e}(o))};return u=u.bind(this),{cardInformationListWithIds:Object(h.a)(o),onSelection:u}}function K(){var A=y(function(){var A=Object(r.useState)(["Apple","Cherries","Donut","Grapes","Hamburger","Ice Cream","Orange Juice","Pancakes","Pizza","Strawberry"]),e=Object(i.a)(A,1)[0],t=Object(r.useState)([Y,H,G,F,N,M,"data:image/png;base64,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",p,L,k]),c=Object(i.a)(t,1)[0],n=Object(r.useState)(["rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)","rgb(150,150,150)"]),s=Object(i.a)(n,1)[0],g=Object(r.useState)(function(){for(var A=[],t=0;t<e.length;t+=1)A.push({title:e[t],imageUrl:c[t],backgroundColor:s[t]});return A}());return Object(i.a)(g,1)[0]}()),e=A.cardInformationListWithIds,t=A.onSelection,n=e.map((function(A){return Object(c.jsx)(E,{url:A.imageUrl,title:A.title,backgroundColor:A.backgroundColor,onClick:function(){return e=A.id,void t(e);var e}},A.id)}));return Object(c.jsx)("div",{className:"card-board",children:n})}var P=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("h1",{children:"Memory Cards"}),Object(c.jsx)(d,{}),Object(c.jsx)(K,{}),Object(c.jsx)("div",{})]})};g.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bbc6a58b.chunk.js.map