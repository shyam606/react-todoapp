(this.webpackJsonptodoapp2=this.webpackJsonptodoapp2||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(5),r=c.n(s),i=c(15),o=c(8),a=c(12),j=c.n(a),l=c(1),u=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"todo_style",children:[Object(l.jsx)(j.a,{className:"circle",onClick:function(){e.onSelect(e.id)}}),Object(l.jsx)("li",{children:e.text})]})})},b=c(14),d=c.n(b),O=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(o.a)(r,2),j=a[0],b=a[1],O=function(e){e.preventDefault(),b((function(e){return[].concat(Object(i.a)(e),[c])})),s("")};Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("Items"));e&&b(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("Items",JSON.stringify(j))}),[j]);var f=function(e){b((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main_div",children:Object(l.jsxs)("div",{className:"center_div",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"Todo List App"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Add a items",value:c,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("button",{onClick:O,onKeyPress:function(e){13===e.keyCode&&O()},children:Object(l.jsx)(d.a,{})})]}),Object(l.jsx)("ol",{children:j.map((function(e,t){return Object(l.jsx)(u,{id:t,text:e,onSelect:f},t)}))})]})})})};c(28);r.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.316cd0d9.chunk.js.map