(this["webpackJsonpent-vote-app"]=this["webpackJsonpent-vote-app"]||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(19),s=t.n(i),o=(t(26),t(9)),l=t(2),r=(t(27),t(14)),j=t(15),u=t(17),b=t(16),h=[{name:"Weekly",link:"/weekly-winner",icon:"fa-trophy"},{name:"Vote",link:"/vote",icon:"fa-vote-yea"},{name:"Actors",link:"/actors",icon:"fa-users"},{name:"Chat",link:"/chat",icon:"fa-comments"}],O=(t(28),t(1)),d=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=n.call(this,e)).state={menulist:h,isMenuToggleOn:!1},c}return Object(j.a)(t,[{key:"toggleMenu",value:function(e){e.stopPropagation(),this.setState((function(e){return{isMenuToggleOn:!e.isMenuToggleOn}}))}},{key:"render",value:function(){return Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsxs)("h1",{className:"logo",children:["great",Object(O.jsx)("span",{children:"awards"})]})}),Object(O.jsx)("nav",{className:"site-nav "+(this.state.isMenuToggleOn?"site-nav--open ":" "),children:Object(O.jsx)("ul",{children:this.state.menulist.map((function(e,n){return Object(O.jsx)("li",{children:Object(O.jsxs)(o.b,{to:e.link,children:[Object(O.jsx)("i",{className:" fa "+e.icon+" site-nav--icon "}),e.name]})},n)}))})}),Object(O.jsx)("div",{className:"menu-toggle",onClick:this.toggleMenu.bind(this),children:Object(O.jsx)("div",{className:"hamburger "+(this.state.isMenuToggleOn?"hamburger--open ":" ")})})]})})}}]),t}(a.a.Component),x=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,101))})),g=Object(c.lazy)((function(){return t.e(6).then(t.bind(null,105))})),m=Object(c.lazy)((function(){return t.e(4).then(t.bind(null,106))})),p=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,102))})),f=Object(c.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,104))})),v=function(){return Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(d,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/weekly-winner",component:m}),Object(O.jsx)(l.a,{exact:!0,path:"/actors",component:g}),Object(O.jsx)(l.a,{exact:!0,path:"/vote",component:p}),Object(O.jsx)(l.a,{exact:!0,path:"/chat",component:f}),Object(O.jsx)(l.a,{component:x})]})]})})},k=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,103)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(c.Suspense,{fallback:Object(O.jsxs)("div",{children:["loading...",Object(O.jsx)("h1",{children:"loading .................. "})]}),children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})})}),document.getElementById("root")),k()}},[[34,1,3]]]);
//# sourceMappingURL=main.46db6b40.chunk.js.map