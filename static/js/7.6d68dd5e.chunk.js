(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[7],{234:function(t,r,e){t.exports={formControl:"FormsControls_formControl__sVQLx",error:"FormsControls_error__1-gBo",formSummaryError:"FormsControls_formSummaryError__3lsER"}},235:function(t,r,e){"use strict";e.d(r,"b",(function(){return b})),e.d(r,"a",(function(){return j})),e.d(r,"c",(function(){return l}));var c=e(4),n=e(238),a=(e(2),e(234)),i=e.n(a),o=e(105),s=e(3),u=function(t){t.input;var r=t.meta,e=(t.child,Object(n.a)(t,["input","meta","child"])),c=r.touched&&r.error;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:" "),children:[Object(s.jsx)("div",{children:e.children}),c&&Object(s.jsx)("span",{children:r.error})]})},b=function(t){var r=t.input,e=(t.meta,t.child,Object(n.a)(t,["input","meta","child"]));return Object(s.jsx)(u,Object(c.a)(Object(c.a)({},t),{},{children:Object(s.jsx)("textarea",Object(c.a)(Object(c.a)({},r),e))}))},j=function(t){var r=t.input,e=(t.meta,t.child,Object(n.a)(t,["input","meta","child"]));return Object(s.jsx)(u,Object(c.a)(Object(c.a)({},t),{},{children:Object(s.jsx)("input",Object(c.a)(Object(c.a)({},r),e))}))},l=function(t,r,e,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a,Object(c.a)({placeholder:t,name:r,validate:e,component:n},a))," ",i]})}},236:function(t,r,e){"use strict";e.d(r,"b",(function(){return c})),e.d(r,"a",(function(){return n}));var c=function(t){if(!t)return"Field is required"},n=function(t){return function(r){if(r.length>t)return"Max length is ".concat(t," symbols")}}},309:function(t,r,e){"use strict";e.r(r);e(2);var c=e(106),n=e(235),a=e(236),i=e(25),o=e(23),s=e(229),u=e(234),b=e.n(u),j=e(3),l=Object(c.a)({form:"login"})((function(t){var r=t.handleSubmit,e=t.error,c=t.captchaUrl;return Object(j.jsxs)("form",{onSubmit:r,children:[Object(n.c)("Email","email",[a.b],n.a),Object(n.c)("Password","password",[a.b],n.a,{type:"password"}),Object(n.c)(null,"rememberMe",[],n.a,{type:"checkbox"},"remember me"),c&&Object(j.jsx)("img",{src:c}),c&&Object(n.c)("Symbols from image","captcha",[a.b],n.a,{}),e&&Object(j.jsx)("div",{className:b.a.formSummaryError,children:e}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})}));r.default=Object(i.b)((function(t){return{captchaUrl:t.auth.captchaUrl,isAuth:t.auth.isAuth}}),{login:o.c})((function(t){return t.isAuth?Object(j.jsx)(s.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(l,{onSubmit:function(r){t.login(r.email,r.password,r.rememberMe,r.captcha)},captchaUrl:t.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.6d68dd5e.chunk.js.map