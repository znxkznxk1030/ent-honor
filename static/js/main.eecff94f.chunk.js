(this["webpackJsonpent-vote-app"]=this["webpackJsonpent-vote-app"]||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),s=t(19),a=t.n(s),o=(t(25),t(9)),l=t(2),r=(t(26),t(14)),j=t(15),u=t(17),h=t(16),b=[{name:"Weekly",link:"/weekly-winner",icon:"fa-trophy"},{name:"Vote",link:"/vote",icon:"fa-vote-yea"},{name:"Actors",link:"/actors",icon:"fa-users"},{name:"Chat",link:"/chat",icon:"fa-comments"}],d=(t(27),t(1)),O=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=n.call(this,e)).state={menulist:b,isMenuToggleOn:!1},c}return Object(j.a)(t,[{key:"toggleMenu",value:function(e){e.stopPropagation(),this.setState((function(e){return{isMenuToggleOn:!e.isMenuToggleOn}}))}},{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsxs)("h1",{className:"logo",children:["great",Object(d.jsx)("span",{children:"awards"})]})}),Object(d.jsx)("nav",{className:"site-nav "+(this.state.isMenuToggleOn?"site-nav--open ":" "),children:Object(d.jsx)("ul",{children:this.state.menulist.map((function(e,n){return Object(d.jsx)("li",{children:Object(d.jsxs)(o.b,{to:e.link,children:[Object(d.jsx)("i",{className:" fa "+e.icon+" site-nav--icon "}),e.name]})},n)}))})}),Object(d.jsx)("div",{className:"menu-toggle",onClick:this.toggleMenu.bind(this),children:Object(d.jsx)("div",{className:"hamburger "+(this.state.isMenuToggleOn?"hamburger--open ":" ")})})]})})}}]),t}(i.a.Component),g=Object(c.lazy)((function(){return t.e(4).then(t.bind(null,40))})),m=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,42))})),p=Object(c.lazy)((function(){return t.e(3).then(t.bind(null,43))})),x=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",component:g}),Object(d.jsx)(l.a,{path:"/weekly-winner",component:p}),Object(d.jsx)(l.a,{path:"/actors",component:m})]})]})})},f=function(e){e&&e instanceof Function&&t.e(6).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.Suspense,{fallback:Object(d.jsxs)("div",{children:["loading...",Object(d.jsx)("h1",{children:"loading .................. "})]}),children:Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x,{})})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.eecff94f.chunk.js.map