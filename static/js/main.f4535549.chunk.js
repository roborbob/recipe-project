(this["webpackJsonprecipe-project"]=this["webpackJsonprecipe-project"]||[]).push([[0],{36:function(n,e,t){n.exports=t(65)},41:function(n,e,t){},64:function(n,e,t){},65:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(30),l=t.n(r),o=t(11),s=(t(41),t(7)),c=t(8);function p(){var n=Object(s.a)(["\n    position: fixed;\n    display: block;\n    background: black;\n    text-align: center;\n    width: 340px;\n    z-index: 1000;\n    border-radius: 8px;\n    h1 {\n        font-family: 'Times New Roman';\n        font-weight: 100;\n        letter-spacing: 1.2px;\n        color: white;\n        font-size: 30px;\n        padding: 10px 0px 5px 0px;\n    }\n"]);return p=function(){return n},n}var u=c.a.div(p()),d=function(){return i.a.createElement(u,null,i.a.createElement("h1",null,"Whats For Dinner?"))},m=t(1);function f(){var n=Object(s.a)(["\n    margin-top: 90px;\n"]);return f=function(){return n},n}var h=c.a.div(f()),v=function(n){return i.a.createElement(h,null,i.a.createElement("h1",null,n.match.params.id))},x=t(15),g=t.n(x),b=t(34),w=t(18);function E(){var n=Object(s.a)(["\n    width: 50%;\n    height: 100px;\n    background: salmon;\n    text-align: left;\n    padding: 10px;\n    outline: 1px solid silver;\n    h2{\n        font-size: 10px;\n        font-weight: 300;\n    }\n\n"]);return E=function(){return n},n}var k=c.a.div(E()),j=function(n){return i.a.createElement(k,{onClick:function(){return e=n.id,void console.log(e);var e}},i.a.createElement(o.b,{to:"".concat(n.id)},i.a.createElement("h2",null,n.title)))},y=t(35),O=t.n(y);function S(){var n=Object(s.a)(["\ndisplay: block;\nmargin: auto;\nwidth: 80px;\nmargin-top: 15px;\n.lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: salmon;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]);return S=function(){return n},n}var I=c.a.div(S()),z=function(){return i.a.createElement(I,null,i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))};function N(){var n=Object(s.a)(["\n    width: 100%;\n    height: 150px;\n    background: salmon;\n    text-align: left;\n    padding: 10px;\n    font-size: 20px;\n    h2{\n        font-weight: 300;\n    }\n"]);return N=function(){return n},n}function J(){var n=Object(s.a)(["\n    top: 90px;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    border-radius: 5px;\n    margin-top: 10px;\n    overflow: hidden;\n"]);return J=function(){return n},n}var W=c.a.div(J()),B=c.a.div(N()),F=function(){var n=JSON.parse(sessionStorage.getItem("recipes")),e=Object(a.useState)(n||{}),t=Object(w.a)(e,2),r=t[0],l=t[1],o=Object(a.useState)(!0),s=Object(w.a)(o,2),c=s[0],p=s[1];return Object(a.useEffect)((function(){if(sessionStorage.getItem("recipes"))p(!1);else{var n=function(){var n=Object(b.a)(g.a.mark((function n(){var e;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O()({method:"get",url:"https://api.spoonacular.com/mealplanner/generate?timeFrame=week",params:{apiKey:"276ff92f42f14a1690bac6bdc10438bb"}});case 2:e=n.sent,sessionStorage.setItem("recipes",JSON.stringify(e.data.week)),l(e.data.week);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();p(!0),n()}}),[r]),i.a.createElement(W,null,i.a.createElement(B,null,i.a.createElement("h2",null,"Something Good")),c?i.a.createElement(z,null):Object.entries(r).slice(1).map((function(n,e){return i.a.createElement(j,{key:e,title:n[1].meals[1].title,id:n[1].meals[1].id,readyIn:n[1].meals[1].readyInMinutes})})))};t(64);var M=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),i.a.createElement(m.a,{exact:!0,path:"/recipe-project",component:F}),i.a.createElement(m.a,{exact:!0,path:"/recipe-project/:id",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,null,i.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f4535549.chunk.js.map