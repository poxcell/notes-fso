(this["webpackJsonppart2-course"]=this["webpackJsonppart2-course"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},l=n(4),f=n.n(l),b="https://notes-app-fso-test.herokuapp.com/api/notes",p=function(){return f.a.get(b).then((function(t){return t.data}))},d=function(t){return f.a.post(b,t).then((function(t){return t.data}))},m=function(t,e){return f.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))},h=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Tlaxcala 2021"})]})},O=function(t){var e=Object(i.useState)([]),n=Object(a.a)(e,2),c=n[0],r=n[1],l=Object(i.useState)(""),f=Object(a.a)(l,2),b=f[0],O=f[1],x=Object(i.useState)(!0),v=Object(a.a)(x,2),g=v[0],S=v[1],k=Object(i.useState)(null),y=Object(a.a)(k,2),w=y[0],N=y[1];Object(i.useEffect)((function(){p().then((function(t){r(t)}))}),[]),console.log("render",c.length,"notes");var C=g?c:c.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:w}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return S(!g)},children:["show ",g?"important":"all"]})}),Object(u.jsx)("ul",{children:C.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=c.find((function(e){return e.id===t})),n=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});m(t,n).then((function(e){r(c.map((function(n){return n.id!==t?n:e})))})).catch((function(n){N("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){N(null)}),5e3),r(c.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:new Date,important:Math.random()<.5};d(e).then((function(t){r(c.concat(t)),O("")}))},children:[Object(u.jsx)("input",{value:b,onChange:function(t){O(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(h,{})]})};n(39);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9d204ea6.chunk.js.map