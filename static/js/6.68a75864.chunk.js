(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[6],{234:function(e,t,n){e.exports={formControl:"FormsControls_formControl__sVQLx",error:"FormsControls_error__1-gBo",formSummaryError:"FormsControls_formSummaryError__3lsER"}},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return l}));var r=n(4),a=n(238),s=(n(2),n(234)),i=n.n(s),c=n(105),o=n(3),u=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:" "),children:[Object(o.jsx)("div",{children:n.children}),r&&Object(o.jsx)("span",{children:t.error})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))," ",i]})}},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},241:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__8NFHs",dialogsItems:"Dialogs_dialogsItems__35SOZ",active:"Dialogs_active__H44rW",messages:"Dialogs_messages__1-8Gz",message:"Dialogs_message__1152w"}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(4),a=n(31),s=n(32),i=n(34),c=n(33),o=n(2),u=n.n(o),d=n(229),j=n(25),l=n(3),b=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(r.a)({},this.props)):Object(l.jsx)(d.a,{to:"login"})}}]),o}(u.a.Component);return Object(j.b)(b)(t)}},312:function(e,t,n){"use strict";n.r(t);n(2);var r=n(69),a=n(241),s=n.n(a),i=n(231),c=n(3),o=function(e){var t="/dialogs/"+e.id;return Object(c.jsx)("div",{className:s.a.dialog+" "+s.a.active,children:Object(c.jsx)(i.a,{to:t,children:e.name})})},u=function(e){return Object(c.jsx)("div",{className:s.a.dialog,children:e.message})},d=n(229),j=n(105),l=n(106),b=n(236),m=n(235),O=Object(b.a)(50),f=Object(l.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(j.a,{component:m.b,validate:[b.b,O],name:"newMessageBody",placeholder:"Enter your message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send"})})]})})),g=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(c.jsx)(o,{name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(c.jsx)(u,{message:e.message},e.id)}));t.newMessageBody;return e.isAuth?Object(c.jsxs)("div",{className:s.a.dialogs,children:[Object(c.jsx)("div",{className:s.a.dialogsItems,children:n}),Object(c.jsxs)("div",{className:s.a.messages,children:[Object(c.jsx)("div",{children:r}),Object(c.jsx)(f,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]}):Object(c.jsx)(d.a,{to:"login"})},h=n(25),x=n(246),v=n(16);t.default=Object(v.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(r.b)(t))}}})),x.a)(g)}}]);
//# sourceMappingURL=6.68a75864.chunk.js.map