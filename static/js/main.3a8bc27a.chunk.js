(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){e.exports={title:"ReviewForm_title__GjQBN",form:"ReviewForm_form__1NrJb",label:"ReviewForm_label__1D_7W",input:"ReviewForm_input__2njy4",textarea:"ReviewForm_textarea__ENZa8",btn:"ReviewForm_btn__3vstl"}},60:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),i=(n(60),n(14)),o=n(26),u=n.n(o),l=n(116),j=n(108),b=n(117),m=n(111),d=n(34),h=n(110),f=n(3),O=Object(j.a)((function(){return{root:{display:"flex",justifyContent:"center"}}}));function p(){var e=O();return Object(f.jsx)("div",{className:e.root,children:Object(f.jsx)(h.a,{})})}var x=Object(j.a)((function(e){return{list:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"},item:{listStyle:"none"},box:{border:"1px dashed blue",marginLeft:"10px",marginBottom:"10px",width:"80vw"}}}));function v(e){var t=e.reviews,n=e.load,a=e.hasError,c=x();return Object(f.jsxs)(f.Fragment,{children:[a&&Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Error fetch data"}),n?Object(f.jsx)(p,{}):Object(f.jsx)("ul",{className:c.list,children:t&&t.map((function(e){return Object(f.jsx)(b.a,{alignItems:"flex-start",className:c.box,children:Object(f.jsx)(m.a,{primary:"Name: ".concat(e.name),secondary:Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(d.a,{component:"span",variant:"body2",className:c.item,color:"textPrimary"}),e.descr]})},e.id)},Object(l.a)())}))})]})}var w=n(30),g=n.n(w),y=n(37),_=n(36),N=n(49),F=n(113),S=n(114);function R(e){return Object(f.jsx)(S.a,Object(N.a)({elevation:6,variant:"filled"},e))}var k=function(e){var t=e.message,n=Object(a.useState)(!0),r=Object(i.a)(n,2),c=r[0],s=r[1],o=function(e,t){"clickaway"!==t&&s(!1)};return Object(f.jsx)("div",{className:"",children:Object(f.jsx)(F.a,{open:c,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:o,children:Object(f.jsxs)(R,{onClose:o,severity:"success"===t?"success":"error",children:["This is a ",t," !"]})},(new Date).getTime())})},C=n(17),D=n.n(C),E="https://radiant-tundra-36046.herokuapp.com/api";function L(e){var t=e.reviews,n=e.setReviews,r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),b=j[0],m=j[1],d=Object(a.useState)(!1),h=Object(i.a)(d,2),O=h[0],p=h[1],x=Object(a.useState)(!1),v=Object(i.a)(x,2),w=v[0],N=v[1],F=function(){var e=Object(_.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,u.a.post(E,{name:s,descr:b}).then((function(e){var a=e.data;n([a.currentReview].concat(Object(y.a)(t))),N(a.status),p(!0)})).catch((function(e){return N(e.message)}));case 3:m("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(_.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==(a=a||window.event).keyCode||!a.ctrlKey){e.next=5;break}return e.next=4,u.a.post(E,{name:s,descr:b}).then((function(e){var a=e.data;n([a.currentReview].concat(Object(y.a)(t))),N(a.status),p(!0)})).catch((function(e){return N(e.message)}));case 4:m("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[O?Object(f.jsx)(k,{message:w}):"",Object(f.jsx)("h1",{className:D.a.title,children:"Leave your review here:"}),Object(f.jsxs)("form",{onSubmit:F,className:D.a.form,children:[Object(f.jsxs)("label",{className:D.a.label,children:["Name:",Object(f.jsx)("input",{className:D.a.input,type:"text",name:"name",value:s,onChange:function(e){o(e.target.value)},placeholder:"Enter name",minLength:"3",maxLength:"30",pattern:"^[a-zA-Z ]+$",required:!0,onKeyDown:S})]}),Object(f.jsxs)("label",{className:D.a.label,children:["Description:",Object(f.jsx)("input",{className:D.a.textarea,type:"text",name:"descr",value:b,onChange:function(e){m(e.currentTarget.value)},placeholder:"Enter description",onKeyDown:S,minLength:"3",maxLength:"200",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:D.a.btn,children:"Add review"})]})]})}function T(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),m=b[0],d=b[1];return Object(a.useEffect)((function(){l(!0),u.a.get("https://radiant-tundra-36046.herokuapp.com/api").then((function(e){var t=e.data;r(t.reviews)})).catch((function(e){d(!0)})).finally((function(){return l(!1)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L,{reviews:n,setReviews:r}),Object(f.jsx)(v,{reviews:n,load:o,hasError:m})]})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.3a8bc27a.chunk.js.map