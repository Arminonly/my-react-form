(this["webpackJsonpreact-log-reg"]=this["webpackJsonpreact-log-reg"]||[]).push([[0],{124:function(e,a){},142:function(e,a,l){},143:function(e,a,l){},144:function(e,a,l){},145:function(e,a,l){},237:function(e,a,l){"use strict";l.r(a);var s=l(0),t=l.n(s),r=l(25),c=l.n(r),n=l(51),i=(l(141),l(142),l(143),l(144),l(145),l(23)),j=l(7);function o(){return Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{children:"This is Homepage"}),Object(j.jsx)("h1",{children:"This is Homepage"}),Object(j.jsx)("h1",{children:"This is Homepage"}),Object(j.jsx)("h1",{children:"This is Homepage"}),Object(j.jsx)("h3",{children:"\u042d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d \u043d\u0430  GitHub Pages"})]})})}var d=l(41),b=l(84),h=l(52),u=l(117),m=l.n(u);function O(){var e=Object(s.useState)({login:"",password:""}),a=Object(b.a)(e,2),l=a[0],t=a[1];function r(e){var a=Object(d.a)({},l);a[e.target.id]=e.target.value,t(a)}return Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)(h.b,{onSubmit:function(e){e.preventDefault(),localStorage.setItem("data",JSON.stringify(l)),m.a.post("https://jsonplaceholder.typicode.com/users",{login:l.login,password:l.password}).then((function(e){console.log(e.data)}))},children:[Object(j.jsx)(h.c,{children:Object(j.jsx)(h.d,{type:"text",id:"login",placeholder:"login",onChange:function(e){return r(e)},value:l.login})}),Object(j.jsx)("br",{}),Object(j.jsx)(h.c,{children:Object(j.jsx)(h.d,{type:"password",id:"password",placeholder:"password",onChange:function(e){return r(e)},value:l.password})}),Object(j.jsx)("br",{}),Object(j.jsx)(h.a,{color:"info",children:"Submit"})]})})})}l(166);var p=l(250),x=l(249),g=l(128),v=l(251),f=l(247),y=l(248),w=l(130),P=l(252),I=p.a.Option,N=[{value:"\u0420\u043e\u0441\u0441\u0438\u044f",label:"\u0420\u043e\u0441\u0441\u0438\u044f",children:[{value:"\u041c\u043e\u0441\u043a\u0432\u0430",label:"\u041c\u043e\u0441\u043a\u0432\u0430",children:[{value:"\u041a\u0440\u0435\u043c\u043b\u044c",label:"\u041a\u0440\u0435\u043c\u043b\u044c"},{value:"\u0410\u0440\u0431\u0430\u0442",label:"\u0410\u0440\u0431\u0430\u0442"}]},{value:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0433\u0431\u0443\u0440\u0433",label:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0433\u0431\u0443\u0440\u0433",children:[{value:"\u0424\u043e\u043d\u0442\u0430\u043d\u043a\u0430",label:"\u0424\u043e\u043d\u0442\u0430\u043d\u043a\u0430"},{value:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0441\u043a\u0438\u0439 \u043e\u0441\u0442\u0440\u043e\u0432",label:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0441\u043a\u0438\u0439 \u043e\u0441\u0442\u0440\u043e\u0432"}]}]},{value:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",label:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",children:[{value:"\u041c\u0438\u043d\u0441\u043a",label:"\u041c\u0438\u043d\u0441\u043a",children:[{value:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",label:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",children:[{value:"\u041b\u0435\u0440\u043c\u043e\u043d\u0442\u043e\u0432\u0430",label:"\u041b\u0435\u0440\u043c\u043e\u043d\u0442\u043e\u0432\u0430"},{value:"\u0420\u0430\u0444\u0438\u0435\u0432\u0430",label:"\u0420\u0430\u0444\u0438\u0435\u0432\u0430"},{value:"\u0420\u043e\u0437\u044b \u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433",label:"\u0420\u043e\u0437\u044b \u041b\u044e\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433"}]},{value:"\u0424\u0440\u0443\u043d\u0437\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",label:"\u0424\u0440\u0443\u043d\u0437\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",children:[{value:"\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430",label:"\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430"},{value:"\u0421\u043a\u0440\u0438\u0433\u0430\u043d\u043e\u0432\u0430",label:"\u0421\u043a\u0440\u0438\u0433\u0430\u043d\u043e\u0432\u0430"}]},{value:"\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",label:"\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",children:[{value:"\u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 \u0420\u043e\u043a\u043e\u0441\u0441\u043e\u0432\u0441\u043a\u043e\u0433\u043e",label:"\u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 \u0420\u043e\u043a\u043e\u0441\u0441\u043e\u0432\u0441\u043a\u043e\u0433\u043e"},{value:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442\u0441\u043a\u0430\u044f",label:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442\u0441\u043a\u0430\u044f"}]}]}]}],F={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},k={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function C(){var e=x.a.useForm(),a=Object(b.a)(e,1)[0],l=Object(j.jsx)(x.a.Item,{name:"prefix",noStyle:!0,children:Object(j.jsxs)(p.a,{style:{width:70},children:[Object(j.jsx)(I,{value:"375",children:"+375"}),Object(j.jsx)(I,{value:"7",children:"+7"})]})});return Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"registry",children:Object(j.jsxs)(x.a,Object(d.a)(Object(d.a)({},F),{},{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{residence:["\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c","\u041c\u0438\u043d\u0441\u043a"],prefix:"375"},scrollToFirstError:!0,children:[Object(j.jsx)(x.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(j.jsx)(g.a,{placeholder:"api@example.com"})}),Object(j.jsx)(x.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(j.jsx)(g.a.Password,{placeholder:"Please input your password!"})}),Object(j.jsx)(x.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,l){return l&&a("password")!==l?Promise.reject(new Error("\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!")):Promise.resolve()}}}],children:Object(j.jsx)(g.a.Password,{placeholder:"Please confirm your password!"})}),Object(j.jsx)(x.a.Item,{name:"nickname",label:"Nickname",tooltip:"\u041a\u0430\u043a \u043a \u0412\u0430\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(j.jsx)(g.a,{placeholder:"Please input your nickname!"})}),Object(j.jsx)(x.a.Item,{name:"residence",label:"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}],children:Object(j.jsx)(v.a,{options:N})}),Object(j.jsx)(x.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(j.jsx)(g.a,{addonBefore:l,style:{width:"100%"}})}),Object(j.jsx)(x.a.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please select gender!"}],children:Object(j.jsxs)(p.a,{placeholder:"select your gender",children:[Object(j.jsx)(I,{value:"male",children:"Male"}),Object(j.jsx)(I,{value:"female",children:"Female"})]})}),Object(j.jsx)(x.a.Item,{label:"Captcha",extra:"We must make sure that your are a human.",children:Object(j.jsxs)(f.a,{gutter:8,children:[Object(j.jsx)(y.a,{span:12,children:Object(j.jsx)(x.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:Object(j.jsx)(g.a,{})})}),Object(j.jsx)(y.a,{span:12,children:Object(j.jsx)(w.a,{children:"Get captcha"})})]})}),Object(j.jsx)(x.a.Item,Object(d.a)(Object(d.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},k),{},{children:Object(j.jsxs)(P.a,{children:["I have read the ",Object(j.jsx)("a",{href:"https://www.google.com/",children:"agreement"})]})})),Object(j.jsx)(x.a.Item,Object(d.a)(Object(d.a)({},k),{},{children:Object(j.jsx)(w.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))})})}var S=l(124),T=l.n(S);function q(){return Object(j.jsx)(n.a,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("ul",{className:"routeItem",children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/login",children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/registry",children:"Registry"})})]}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(o,{})}),Object(j.jsx)(i.a,{path:"/login",children:Object(j.jsx)(O,{})}),Object(j.jsx)(i.a,{path:"/registry",children:Object(j.jsx)(C,{})}),Object(j.jsx)(i.a,{children:Object(j.jsx)(T.a,{})})]})]})})}var E=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(q,{})})},H=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,253)).then((function(a){var l=a.getCLS,s=a.getFID,t=a.getFCP,r=a.getLCP,c=a.getTTFB;l(e),s(e),t(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(n.a,{children:Object(j.jsx)(E,{})})}),document.getElementById("root")),H()}},[[237,1,2]]]);
//# sourceMappingURL=main.6018e387.chunk.js.map