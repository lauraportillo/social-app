(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"cloe","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!","image":"./images/users/cloe.jpg","post":{"photo":"./images/posts/churchstreet.jpg","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!"}},{"id":2,"name":"rajesh","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!","image":"./images/users/rajesh.jpg","post":{"photo":"./images/posts/clissold.jpg","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!"}},{"id":3,"name":"julia","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!","image":"./images/users/julia.jpg","post":{"photo":"./images/posts/river.jpg","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt reiciendis numquam velit blanditiis id itaque aspernatur quos molestias cupiditate. Nisi a possimus dignissimos delectus, assumenda placeat officia sint et!"}}]')},23:function(e,t,i){},25:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(16),a=i.n(n),c=i(4),r=i(9),o=i(2),l=(i(23),i(0)),u=function(e){return Object(l.jsx)("footer",{children:Object(l.jsxs)("ul",{className:"footer",children:[Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__item--icon",href:"https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/",target:"_blank",rel:"noopener noreferrer",title:"linkedin",children:Object(l.jsx)("i",{className:"fa fa-linkedin icon",alt:"linkedin icon"})})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__item--icon",href:"https://github.com/lauraportillo",target:"_blank",rel:"noopener noreferrer",title:"github",children:Object(l.jsx)("i",{className:"fa fa-github-alt icon",alt:"github icon"})})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__item--icon",href:"https://twitter.com/LauraPo02860847",target:"_blank",rel:"noopener noreferrer",title:"twitter",children:Object(l.jsx)("i",{className:"fa fa-twitter icon",alt:"twitter icon"})})}),Object(l.jsx)("li",{className:"footer__item",children:Object(l.jsx)("a",{className:"footer__item--icon icon",href:"mailto:lauraportillo.ark@gmail.com",target:"_blank",rel:"noopener noreferrer",title:"email",children:Object(l.jsx)("i",{className:"fa fa-envelope icon",alt:"envelope icon"})})})]})})},m=(i(25),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),m=o[0],j=o[1];return Object(l.jsxs)("div",{className:"containerLogin",children:[Object(l.jsx)("header",{}),Object(l.jsxs)("main",{className:"containerMain",children:[Object(l.jsx)("h1",{className:"containerMain__title",children:"FriendChic"}),Object(l.jsxs)("form",{className:"containerForm",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("input",{className:"containerForm__item",placeholder:"user name",onChange:function(e){return n(e.target.value)},value:i}),Object(l.jsx)("input",{className:"containerForm__item",placeholder:"your password",onChange:function(e){return j(e.target.value)},value:m}),Object(l.jsx)("button",{className:"containerForm__btn",children:Object(l.jsx)(c.b,{className:"containerForm__btn",to:"/postlist",children:"Login"})})]})]}),Object(l.jsx)(u,{})]})}),j=(i(31),function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:"LOGOUT"})})}),d=(i(32),function(){return Object(l.jsxs)("header",{className:"containerHeader",children:[Object(l.jsx)(c.b,{to:"/postlist",children:Object(l.jsx)("h1",{className:"containerHeader__title",children:"FriendChic"})}),Object(l.jsx)("nav",{className:"containerHeader__nav",children:Object(l.jsx)(c.b,{className:"containerHeader__nav--item",to:"/",children:"Login"})})]})}),p=(i(33),function(e){return Object(l.jsxs)("article",{className:"containerPost",children:[Object(l.jsx)("img",{className:"containerPost__img",src:e.post.post.photo,alt:"post"}),Object(l.jsx)(c.b,{to:"./post/".concat(e.post.id),children:Object(l.jsxs)("h2",{className:"containerPost__title",children:["@",e.post.name]})}),Object(l.jsx)("p",{className:"containerPost__text",children:e.post.post.description})]})}),b=(i(34),function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{className:"inputSearch",type:"text",name:"name",id:"name",placeholder:"search",value:e.name,onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})})}),h=(i(35),function(e){var t=e.posts.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(p,{post:e})},e.id.toString())}));return Object(l.jsxs)("div",{className:"containerPostList",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(d,{}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"containerPostListHeader__form",children:Object(l.jsx)(b,{handleFilter:e.handleFilter,name:e.name})})]}),Object(l.jsx)("main",{className:"containerPostListMain",children:Object(l.jsx)("ul",{className:"containerPostListMain__list",children:t})}),Object(l.jsx)(u,{})]})}),O=(i(36),function(e){return Object(l.jsxs)("div",{className:"containerUser",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("main",{className:"containerUserMain",children:[Object(l.jsxs)("article",{className:"containerUserArt",children:[Object(l.jsx)("div",{className:"containerUserArt__circular",children:Object(l.jsx)("img",{className:"containerUserArt__circular--img",src:e.post.image,alt:"user-pic"})}),Object(l.jsxs)("h2",{className:"containerUserArt__title",children:["@",e.post.name]}),Object(l.jsx)("p",{className:"containerUserArt__text",children:e.post.description})]}),Object(l.jsx)("button",{className:"containerUserMain__btn",children:Object(l.jsx)(c.b,{className:"containerUserMain__btn",to:"/postlist",children:"<<<"})})]}),Object(l.jsx)(u,{})]})}),x=(i(37),function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:"NOT FOUND"})})}),f=(i(38),i(39),i(18));var g=function(){var e=Object(s.useState)(f),t=Object(r.a)(e,1)[0],i=Object(s.useState)(""),n=Object(r.a)(i,2),a=n[0],c=n[1],u=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(m,{})}),Object(l.jsx)(o.a,{path:"/logout",children:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/postlist",children:Object(l.jsx)(h,{handleFilter:function(e){"name"===e.key&&c(e.value)},name:a,posts:u})}),Object(l.jsx)(o.a,{path:"/post/:id",render:function(e){var i=parseInt(e.match.params.id),s=t.find((function(e){return e.id===i}));return s?Object(l.jsx)(O,{post:s}):Object(l.jsx)(x,{})}})]})})};a.a.render(Object(l.jsx)(c.a,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.967ee70c.chunk.js.map