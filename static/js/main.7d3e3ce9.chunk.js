(this["webpackJsonpmonsters-app"]=this["webpackJsonpmonsters-app"]||[]).push([[0],{14:function(e,n,t){e.exports=t(24)},19:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=(t(19),t(4)),s=t.n(i),l=t(9),u=t(6),d=t(1),p=t(2);function m(){var e=Object(d.a)(["\n\t-webkit-appearance: none;\n  border: none;\n  outline: none;\n  padding: 10px;\n  width: 150px;\n  line-height: 30px;\n  margin-bottom: 30px;\n"]);return m=function(){return e},e}var f=p.a.input(m()),h=function(e){var n=e.placeholder,t=e.value,r=e.handleChange;return a.a.createElement(f,{type:"search",placeholder:n,value:t,onChange:function(e){return r(e.target.value)}})};function v(){var e=Object(d.a)(["\n\tdisplay: flex;\n  flex-direction: column;\n  background-color: #95dada;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 25px;\n  cursor: pointer;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform 0.25s ease-out;\n  \n  &:hover {\n\t  transform: scale(1.05);\n\t}\n"]);return v=function(){return e},e}var g=p.a.div(v()),b=function(e){var n=e.name,t=e.id,r=e.email;return a.a.createElement(g,null,a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set2"),alt:""}),a.a.createElement("h2",null,n),a.a.createElement("p",null,r))};function x(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n\twidth: 85vw;\n\tmax-width: 1600px;\n  margin: 0 auto;\n"]);return x=function(){return e},e}var w=p.a.div(x()),E=function(e){var n=e.monsters;return a.a.createElement(w,null,n.map((function(e){return a.a.createElement(b,Object.assign({key:e.id},e))})))},j=(t(23),function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),d=i[0],p=i[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,o(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return console.log(m),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(h,{placeholder:"Search monsters",value:d,handleChange:function(e){p(e)}}),a.a.createElement(E,{monsters:m}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7d3e3ce9.chunk.js.map