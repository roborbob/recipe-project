(this["webpackJsonprecipe-project"]=this["webpackJsonprecipe-project"]||[]).push([[0],{37:function(n,e,t){n.exports=t.p+"static/media/Tangerine-Bold.9afc148d.ttf"},38:function(n,e,t){n.exports=t.p+"static/media/Tangerine-Regular.c848a4eb.ttf"},39:function(n,e,t){n.exports=t(68)},44:function(n,e,t){},67:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(33),l=t.n(r),c=t(12),o=(t(44),t(3)),s=t(4);function u(){var n=Object(o.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    text-align: right;\n    width: 100%;\n    z-index: 1000;\n    border: 2px solid black;\n    h1 {\n        display: inline-block;\n        font-family: Helvetica;\n        font-weight: 100;\n        letter-spacing: 1.2px;\n        color: black;\n        font-size: 30px;\n        margin: 0;\n        padding: 20px 5px 5px 0px;\n    }\n    div {\n        text-align: left;\n        padding-left: 5px;\n        display: inline-block;\n        background: black;\n        h1{\n            color: #ff4a6a;\n        }\n    }\n"]);return u=function(){return n},n}var p=s.b.div(u()),m=function(){return i.a.createElement(p,null,i.a.createElement("h1",null,"Whats For "),i.a.createElement("div",null,i.a.createElement("h1",null,"Dinner?")))},d=t(1),f=t(10),g=t.n(f),h=t(16),b=t(15);function x(){var n=Object(o.a)(["\ndisplay: block;\nmargin: auto;\nwidth: 80px !important;\nmargin-top: 15px;\n.lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px !important;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px !important;\n    height: 13px;\n    border-radius: 50%;\n    background: salmon;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return x=function(){return n},n}var v=s.b.div(x()),E=function(){return i.a.createElement(v,null,i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))},w=t(17),y=t.n(w),k=t(18);function j(){var n=Object(o.a)(["\n    position: sticky;\n    width: 100%;\n    top: 0;\n    z-index: -1;\n    ul{\n        list-style: none;\n        padding: 0;\n        li{\n            p{\n              font-size: 12px;\n              font-weight: bold;\n            }\n        }\n    }\n"]);return j=function(){return n},n}function O(){var n=Object(o.a)(["\n    background: white;\n    border-top: 1px solid silver;\n    ol{\n        padding-left: 20px;\n        font-size: 14px;\n    }\n    p {\n        font-size: 12px;\n    }\n"]);return O=function(){return n},n}function S(){var n=Object(o.a)(["\n    margin-top: 50px;\n    text-align: left;\n    width: 100%;\n    img{\n        width: 100%;\n        border-radius: 10px;\n    }\n    h2{\n        font-weight: 300;\n    }\n    .icon-container{\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: left;\n        border-radius: 5px;\n        li {\n            display: flex;\n            flex-direction: row;s\n            list-style: none;\n            align-items: center;\n            padding-right: 20px;\n            p{       \n                font-size: 12px;     \n                font-weight: bold;\n                line-height: 1;\n            }\n            svg{\n                width: 20px;\n                height: 20px;\n                padding-right: 4px;\n            }\n        }\n    }\n"]);return S=function(){return n},n}var I=s.b.article(S()),z=s.b.div(O()),N=s.b.div(j()),J=function(n){var e=JSON.parse(sessionStorage.getItem(n.match.params.id)),t=Object(a.useState)(e||void 0),r=Object(b.a)(t,2),l=r[0],c=r[1];return Object(a.useEffect)((function(){if(sessionStorage.getItem(n.match.params.id))console.log("Using sessionStorage");else{(function(){var e=Object(h.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.spoonacular.com/recipes/".concat(n.match.params.id,"/information"),e.next=3,y.a.get(t,{params:{apiKey:"276ff92f42f14a1690bac6bdc10438bb"}});case 3:a=e.sent,sessionStorage.setItem("".concat(n.match.params.id),JSON.stringify(a.data)),c(a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),[n.match.params.id]),console.log(l),i.a.createElement(I,null,l?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:l.image,alt:l.title}),i.a.createElement("h1",null,i.a.createElement("mark",null,l.title)),i.a.createElement("div",{className:"icon-container"},i.a.createElement("li",null,i.a.createElement(k.c,null),i.a.createElement("p",null,l.readyInMinutes," min")),i.a.createElement("li",null,i.a.createElement(k.a,null),i.a.createElement("p",null,l.servings)),i.a.createElement("li",null,i.a.createElement(k.b,null),i.a.createElement("p",null," ",l.aggregateLikes)))):i.a.createElement(E,null),i.a.createElement(N,null,i.a.createElement("h2",null,"Ingredients"),i.a.createElement("ul",null,l?l.extendedIngredients.map((function(n,e){return i.a.createElement("li",{key:e},i.a.createElement("p",{key:e},n.amount," ",n.unit," ",n.name))})):i.a.createElement(E,null))),i.a.createElement(z,null,i.a.createElement("h2",null,"Instructions"),i.a.createElement("ol",null,l?l.analyzedInstructions[0].steps.map((function(n,e){return i.a.createElement("li",{key:e},i.a.createElement("p",{key:e},n.step))})):i.a.createElement(E,null))))};function T(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100px;\n    text-align: left;\n    padding: 10px;\n    outline: 1px solid silver;\n    &:hover {\n        cursor: pointer;\n    }\n    a {\n        text-decoration: none;\n    }\n    h2{\n        font-family: Helvetica Neue;\n        font-size: 14px;\n        font-weight: 300;\n        color: black;\n        text-transform: capitalize;\n    }\n\n"]);return T=function(){return n},n}var B=s.b.div(T()),F=function(n){return i.a.createElement(B,{onClick:function(){n.id}},i.a.createElement(c.b,{to:"".concat(n.id)},i.a.createElement("h2",null,n.title)))};function M(){var n=Object(o.a)(["\n    top: 90px;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    border-radius: 5px;\n    margin-top: 10px;\n    background: #b2fff5;\n    overflow: hidden;\n    div:nth-child(1) {\n        width: 100%;\n    }\n"]);return M=function(){return n},n}var W=s.b.div(M()),H=function(){var n=JSON.parse(sessionStorage.getItem("recipes")),e=Object(a.useState)(n||{}),t=Object(b.a)(e,2),r=t[0],l=t[1],c=Object(a.useState)(!0),o=Object(b.a)(c,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){if(sessionStorage.getItem("recipes"))u(!1);else{var n=function(){var n=Object(h.a)(g.a.mark((function n(){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y()({method:"get",url:"https://api.spoonacular.com/mealplanner/generate?timeFrame=week",params:{apiKey:"276ff92f42f14a1690bac6bdc10438bb"}});case 2:e=n.sent,sessionStorage.setItem("recipes",JSON.stringify(e.data.week)),l(e.data.week);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();u(!0),n()}}),[r]),i.a.createElement(W,null,s?i.a.createElement(E,null):Object.entries(r).map((function(n,e){return i.a.createElement(F,{key:e,title:n[1].meals[1].title,id:n[1].meals[1].id,readyIn:n[1].meals[1].readyInMinutes})})))},K=t(37),A=t.n(K),C=t(38),D=t.n(C);function L(){var n=Object(o.a)(["\n    @font-face {\n        font-family: 'Tangerine';\n        src: local('Tangerine'), local('Tangerine'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);return L=function(){return n},n}var R=Object(s.a)(L(),A.a,D.a);t(67);var U=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(R,null),i.a.createElement(m,null),i.a.createElement(d.a,{exact:!0,path:"/",component:H}),i.a.createElement(d.a,{path:"/:id",component:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{basename:"/recipe-project"},i.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3e327cde.chunk.js.map