(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(7),s=a(4),c=a(2),o=(a(15),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(10),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":!0===t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=a(3);function f(e){return l.find((function(t){return t.id===e}))||null}var p=function(e){var t=e.setNewPosts,a=e.todos,n=Object(o.useState)(!1),i=Object(s.a)(n,2),d=i[0],u=i[1],j=Object(o.useState)(!1),b=Object(s.a)(j,2),h=b[0],p=b[1],v=Object(o.useState)({id:0,title:"",completed:!1,userId:0,user:f(0)}),x=Object(s.a)(v,2),y=x[0],I=x[1];return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),y.title||u(!0),0===y.userId&&p(!0),y.title&&0!==y.userId&&(t(y),I({id:0,title:"",completed:!1,userId:0,user:f(0)}))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{name:"title",type:"text",placeholder:"Enter a title","data-cy":"titleInput",value:y.title,onChange:function(e){var t=e.target,a=t.name,n=t.value;I((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(O.a)({},a,n.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]/g,"")))})),u(!1)}}),d&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{name:"userId","data-cy":"userSelect",value:y.userId,onChange:function(e){var t=e.target,n=t.name,i=t.value;I((function(e){var t,s;return Object(c.a)(Object(c.a)({},e),{},(t={id:(s=a,Math.max.apply(Math,Object(r.a)(s.map((function(e){return e.id}))))+1)},Object(O.a)(t,n,+i),Object(O.a)(t,"user",f(+i)),t))})),p(!1)},children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),h&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};var v=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t})),x=function(){var e=Object(o.useState)(v),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(p,{setNewPosts:function(e){n((function(t){return[].concat(Object(r.a)(t),[e])}))},todos:a}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"Static list of todos"}),Object(m.jsx)(h,{todos:a})]})]})};i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8dfdfc62.chunk.js.map