(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))}),i=(n(10),n(2)),b=n(0),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(c,"?200X200"),alt:"robots"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(j,{name:t[n].name,id:t[n].id,email:t[n].email},n)}))})},h=function(e){e.searchField;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t})})};var l=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),a=o[0],j=o[1],l=Object(c.useState)(0),d=Object(i.a)(l,2),f=d[0],O=d[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)})),console.log("test1",f)}),[f]);var g=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"Robofriends"}),Object(b.jsx)("button",{onClick:function(e){return O(e+1)},children:"Click Me "}),Object(b.jsx)(h,{searchChange:function(e){j(e.target.value)}}),Object(b.jsx)(u,{robots:g})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),a()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d22d7826.chunk.js.map