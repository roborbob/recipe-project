(this["webpackJsonprecipe-project"]=this["webpackJsonprecipe-project"]||[]).push([[0],{37:function(e,n,t){e.exports=t.p+"static/media/Tangerine-Bold.9afc148d.ttf"},38:function(e,n,t){e.exports=t.p+"static/media/Tangerine-Regular.c848a4eb.ttf"},39:function(e,n,t){e.exports=t(68)},44:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(33),i=t.n(l),o=t(9),c=(t(44),t(3)),s=t(4);function u(){var e=Object(c.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    text-align: right;\n    width: 100%;\n    z-index: 1000;\n    border: 2px solid black;\n    h1 {\n        display: inline-block;\n        font-family: Helvetica;\n        font-weight: 100;\n        letter-spacing: 1.2px;\n        color: black;\n        font-size: 30px;\n        margin: 0;\n        padding: 20px 5px 5px 0px;\n    }\n    div {\n        text-align: left;\n        padding-left: 5px;\n        display: inline-block;\n        background: black;\n        h1{\n            color: #ff4a6a;\n        }\n    }\n"]);return u=function(){return e},e}var p=s.b.div(u()),m=function(){return r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(p,null,r.a.createElement("h1",null,"Whats For "),r.a.createElement("div",null,r.a.createElement("h1",null,"Dinner?"))))},d=t(1),f=t(13),g=t.n(f),x=t(17),b=t(11);function h(){var e=Object(c.a)(["\ndisplay: block;\nmargin: auto;\nwidth: 80px !important;\nmargin-top: 15px;\n.lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px !important;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px !important;\n    height: 13px;\n    border-radius: 50%;\n    background: salmon;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return h=function(){return e},e}var E=s.b.div(h()),v=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},y=t(18),w=t.n(y);function k(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    border-radius: 5px;\n    li {\n        display: flex;\n        flex-direction: row;s\n        list-style: none;\n        align-items: center;\n        padding-right: 20px;\n        p{       \n            font-size: 12px;     \n            font-weight: bold;\n            line-height: 1;\n        }\n        svg{\n            width: 20px;\n            height: 20px;\n            padding-right: 4px;\n        }\n    }\n"]);return k=function(){return e},e}var j=s.b.div(k()),O=function(e){return r.a.createElement(j,null,e.children)},S=t(12);function I(){var e=Object(c.a)(["\n    width: 100%;\n    top: 0;\n    ul{\n        list-style: none;\n        padding-left: 20px;\n        li{\n            p{\n              color: black;\n              font-size: 12px;\n              font-weight: bold;\n            }\n        }\n    }\n"]);return I=function(){return e},e}function z(){var e=Object(c.a)(["\n    border-top: 1px solid silver;\n    ol{\n        padding-left: 20px;\n        font-size: 14px;\n    }\n    p {\n        font-size: 12px;\n    }\n"]);return z=function(){return e},e}function N(){var e=Object(c.a)(["\n    margin-top: 50px;\n    text-align: left;\n    width: 100%;\n    p{\n        font-size: 10px;\n        font-weight: bold;\n        margin-bottom: 15px;\n    }\n    a{\n        text-decoration: none;\n        font-size: 10px;\n    }\n    img{\n        width: 100%;\n        border-radius: 10px;\n    }\n    h2{\n        font-weight: 300;\n    }\n"]);return N=function(){return e},e}var q=s.b.article(N()),J=s.b.div(z()),C=s.b.div(I()),F=function(e){var n=JSON.parse(sessionStorage.getItem(e.match.params.id)),t=Object(a.useState)(n||void 0),l=Object(b.a)(t,2),i=l[0],c=l[1];return Object(a.useEffect)((function(){if(sessionStorage.getItem(e.match.params.id))console.log("Using sessionStorage");else{(function(){var n=Object(x.a)(g.a.mark((function n(){var t,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.spoonacular.com/recipes/".concat(e.match.params.id,"/information"),n.next=3,w.a.get(t,{params:{apiKey:"276ff92f42f14a1690bac6bdc10438bb"}});case 3:a=n.sent,sessionStorage.setItem("".concat(e.match.params.id),JSON.stringify(a.data)),c(a.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}}),[e.match.params.id]),r.a.createElement(q,null,r.a.createElement("p",null,r.a.createElement(o.b,{to:"/"},"Home/ "),i.title),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:i.image,alt:i.title}),r.a.createElement("h1",null,r.a.createElement("mark",null,i.title)),r.a.createElement(O,null,r.a.createElement("li",null,r.a.createElement(S.c,null),r.a.createElement("p",null,i.readyInMinutes," min")),r.a.createElement("li",null,r.a.createElement(S.a,null),r.a.createElement("p",null,i.servings)),r.a.createElement("li",null,r.a.createElement(S.b,null),r.a.createElement("p",null," ",i.aggregateLikes)))):r.a.createElement(v,null),r.a.createElement(C,null,r.a.createElement("h2",null,"Ingredients"),r.a.createElement("ul",null,i?i.extendedIngredients.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("p",{key:n},e.amount," ",e.unit," ",e.name))})):r.a.createElement(v,null))),r.a.createElement(J,null,r.a.createElement("h2",null,"Instructions"),r.a.createElement("ol",null,i?i.analyzedInstructions[0].steps.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("p",{key:n},e.step))})):r.a.createElement(v,null))))};function T(){var e=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100px;\n    text-align: left;\n    padding: 10px;\n    margin-top: 10px;\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px grey;\n    &:hover {\n        cursor: pointer;\n    }\n    a {\n        text-decoration: none;\n    }\n    h2{\n        font-family: Times New Roman;\n        font-style: italic;\n        font-size: 14px;\n        font-weight: 300;\n        color: black;\n        text-transform: capitalize;\n    }\n\n"]);return T=function(){return e},e}var B=s.b.div(T()),D=function(e){return r.a.createElement(o.b,{to:"".concat(e.id),style:{width:"100%",textDecoration:"none",color:"black"}},r.a.createElement(B,{onClick:function(){e.id}},r.a.createElement("h2",null,e.title),r.a.createElement(O,null,r.a.createElement("li",null,r.a.createElement(S.c,null),r.a.createElement("p",null,e.readyIn," min")),r.a.createElement("li",null,r.a.createElement(S.a,null),r.a.createElement("p",null,e.servings)),r.a.createElement("li",null,r.a.createElement("p",null,"CAL ",e.calories)))))},K=[{name:"Everything",query:"",color:"hsl(50, 100%, 85%)"},{name:"Vegetarian",query:"vegetarian",color:"hsl(100, 100%, 85%)"},{name:"Gluten Free",query:"glutenfree",color:"hsl(150, 100%, 85%)"},{name:"Paleo",query:"paleo",color:"hsl(200, 100%, 85%)"},{name:"Whole30",query:"whole30",color:"hsl(250, 100%, 85%)"},{name:"Ketogenic",query:"Ketogenic",color:"hsl(300, 100%, 85%)"}];function M(){var e=Object(c.a)(["\n    position: relative;\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    border-top: 1px solid silver;\n    button {\n        border: none;\n        box-shadow: 2px 2px 3px grey;\n        border-radius: 5px;\n        padding: 10px;\n        margin-right: 10px;\n        margin-top: 10px;\n        background: hsl(350, 100%, 85%);\n    }\n"]);return M=function(){return e},e}function W(){var e=Object(c.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin-top: 40px;\n    text-align: left;\n    justify-content: space-between;\n    button {\n        border: none;\n        box-shadow: 2px 2px 3px grey;\n        border-radius: 5px;\n        padding: 10px;\n        margin-right: 10px;\n        margin-top: 10px;\n    }\n"]);return W=function(){return e},e}function L(){var e=Object(c.a)(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin: 30px 0px 40px 0px;\n    border-top: 1px solid silver;\n"]);return L=function(){return e},e}var R=s.b.div(L()),A=s.b.div(W()),H=s.b.div(M()),P=function(){var e=Object(a.useState)(""),n=Object(b.a)(e,2),t=n[0],l=n[1],i=JSON.parse(sessionStorage.getItem("recipes".concat(t))),o=Object(a.useState)(i||{}),c=Object(b.a)(o,2),s=c[0],u=c[1],p=Object(a.useState)(!0),m=Object(b.a)(p,2),d=m[0],f=m[1],h=Object(a.useState)(1),E=Object(b.a)(h,2),y=E[0],k=E[1];return Object(a.useEffect)((function(){if(sessionStorage.getItem("recipes".concat(t)))u(JSON.parse(sessionStorage.getItem("recipes".concat(t)))),f(!1);else{var e=function(){var e=Object(x.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://api.spoonacular.com/mealplanner/generate?timeFrame=week&diet=".concat(t),params:{apiKey:"276ff92f42f14a1690bac6bdc10438bb"}});case 2:n=e.sent,sessionStorage.setItem("recipes".concat(t),JSON.stringify(n.data.week)),u(n.data.week),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f(!0),e()}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement("h2",null,"Select Nutrition Plan"),r.a.createElement("div",null,K.map((function(e,n){return r.a.createElement("button",{style:{background:"".concat(e.color)},key:n,onClick:function(){return l(e.query)}},e.name)})))),r.a.createElement(H,null,r.a.createElement("h2",null,"Select Meal"),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return k(0)}},"Breakfast"),r.a.createElement("button",{onClick:function(){return k(1)}},"Lunch"),r.a.createElement("button",{onClick:function(){return k(2)}},"Dinner"))),r.a.createElement(R,null,r.a.createElement("h2",null,"Recipes"),d?r.a.createElement(v,null):Object.entries(s).map((function(e,n){return r.a.createElement(D,{key:n,title:e[1].meals[y].title,id:e[1].meals[y].id,readyIn:e[1].meals[y].readyInMinutes,servings:e[1].meals[y].servings,calories:(e[1].nutrients.calories/e[1].meals[y].servings).toFixed(2)})}))))},G=t(37),U=t.n(G),V=t(38),$=t.n(V);function Q(){var e=Object(c.a)(["\n    @font-face {\n        font-family: 'Tangerine';\n        src: local('Tangerine'), local('Tangerine'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);return Q=function(){return e},e}var X=Object(s.a)(Q(),U.a,$.a);t(67);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null),r.a.createElement(m,null),r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{path:"/:id",component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{basename:"/recipe-project"},r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.69ade61f.chunk.js.map