(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){e.exports={title:"ReviewForm_title__GjQBN",form:"ReviewForm_form__1NrJb",label:"ReviewForm_label__1D_7W",input:"ReviewForm_input__2njy4",textarea:"ReviewForm_textarea__ENZa8",btn:"ReviewForm_btn__3vstl"}},57:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),i=(n(57),n(14)),o=n(25),l=n.n(o),u=n(113),j=n(105),b=n(114),m=n(108),d=n(32),h=n(107),f=n(3),p=Object(j.a)((function(){return{root:{display:"flex",justifyContent:"center"}}}));function x(){var e=p();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(h.a,{})})}var O=Object(j.a)((function(e){return{list:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"},item:{listStyle:"none"},box:{border:"1px dashed blue",marginLeft:"10px",marginBottom:"10px",width:"80vw"}}}));function v(e){var t=e.reviews,n=e.load,a=e.hasError,c=O();return Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Error fetch data"}),n?Object(f.jsx)(x,{}):Object(f.jsx)("ul",{className:c.list,children:t&&t.map((function(e){return Object(f.jsx)(b.a,{alignItems:"flex-start",className:c.box,children:Object(f.jsx)(m.a,{primary:"Name: ".concat(e.name),secondary:Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(d.a,{component:"span",variant:"body2",className:c.item,color:"textPrimary"}),e.descr]})},e.id)},Object(u.a)())}))})]})}var g=n(29),w=n.n(g),y=n(34),_=n(46),N=n(110),F=n(111);function S(e){return Object(f.jsx)(F.a,Object(_.a)({elevation:6,variant:"filled"},e))}var D=function(e){var t=e.message,n=Object(a.useState)(!0),r=Object(i.a)(n,2),c=r[0],s=r[1],o=function(e,t){"clickaway"!==t&&s(!1)};return Object(f.jsx)("div",{className:"",children:Object(f.jsx)(N.a,{open:c,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:o,children:Object(f.jsxs)(S,{onClose:o,severity:"success"===t?"success":"error",children:["This is a ",t," !"]})},(new Date).getTime())})},k=n(17),C=n.n(k);function E(e){var t=e.getData,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),j=u[0],b=u[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),h=d[0],p=d[1],x=Object(a.useState)(!1),O=Object(i.a)(x,2),v=O[0],g=O[1],_=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,l.a.post("https://radiant-tundra-36046.herokuapp.com/api",{name:c,descr:j}).then((function(e){var t=e.data;g(t.status),p(!0)})).catch((function(e){return g(e.message)}));case 3:t(),b("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==(n=n||window.event).keyCode||!n.ctrlKey){e.next=6;break}return e.next=4,l.a.post("http://localhost:5000/api/",{name:c,descr:j}).then((function(e){var t=e.data;console.log(t),g(t.status),p(!0)})).catch((function(e){return g(e.message)}));case 4:t(),b("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[h?Object(f.jsx)(D,{message:v}):"",Object(f.jsx)("h1",{className:C.a.title,children:"Leave your review here:"}),Object(f.jsxs)("form",{onSubmit:_,className:C.a.form,children:[Object(f.jsxs)("label",{className:C.a.label,children:["Name:",Object(f.jsx)("input",{className:C.a.input,type:"text",name:"name",value:c,onChange:function(e){s(e.target.value)},placeholder:"Enter name",minLength:"3",maxLength:"30",pattern:"^[a-zA-Z ]+$",required:!0})]}),Object(f.jsxs)("label",{className:C.a.label,children:["Description:",Object(f.jsx)("textarea",{rows:"5",cols:"33",className:C.a.textarea,type:"text",name:"descr",value:j,onChange:function(e){b(e.currentTarget.value)},placeholder:"Enter description",onKeyDown:N,minLength:"5",maxLength:"200",pattern:"^[a-zA-Z0-9,. ]*$",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:C.a.btn,children:"Add review"})]})]})}function L(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],u=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),m=b[0],d=b[1],h=function(){u(!0),l.a.get("https://radiant-tundra-36046.herokuapp.com/api").then((function(e){var t=e.data;console.log(t),r(t.reviews)})).catch((function(e){d(!0)})).finally((function(){return u(!1)}))};return Object(a.useEffect)((function(){h()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{getData:h}),Object(f.jsx)(v,{reviews:n,load:o,hasError:m})]})}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),R()}},[[82,1,2]]]);
//# sourceMappingURL=main.127e6517.chunk.js.map