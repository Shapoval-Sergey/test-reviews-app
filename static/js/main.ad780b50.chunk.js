(this["webpackJsonptest-reviews-app"]=this["webpackJsonptest-reviews-app"]||[]).push([[0],{44:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),i=(a(44),a(11)),o=a(20),l=a.n(o),u=a(87),b=a(89),j=a(2),m=Object(u.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function p(){var e=m();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(b.a,{})})}var x=a(92),f=a(91),d=a(90),O=a(23),h=Object(u.a)((function(e){return{list:{display:"flex",flexWrap:"wrap",flexDirection:"column"},item:{listStyle:"none"},box:{border:"1px dashed blue",marginLeft:"10px",marginBottom:"10px",minWidth:"300px"}}}));function v(e){var t=e.reviews,a=h();return Object(j.jsx)("ul",{className:a.list,children:t.map((function(e){return Object(j.jsx)(f.a,{alignItems:"flex-start",className:a.box,children:Object(j.jsx)(d.a,{primary:"Name: ".concat(e.name),secondary:Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(O.a,{component:"span",variant:"body2",className:a.item,color:"textPrimary"}),e.descr]})},e.id)},Object(x.a)())}))})}var _=a(25),g=a.n(_),w=a(35),N=a(9),y=a.n(N);function F(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],b=Object(n.useState)(""),m=Object(i.a)(b,2),p=m[0],x=m[1],f=Object(n.useState)(""),d=Object(i.a)(f,2),O=d[0],h=d[1],v=Object(n.useCallback)(function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a){e.next=4;break}return x(!0),e.abrupt("return");case 4:if(""!==o){e.next=7;break}return h(!0),e.abrupt("return");case 7:l.a.post("http://localhost:5000/api/",{name:a,descr:o}).then((function(e){return e})).catch((function(e){return console.log(e.message)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,o]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:y.a.title,children:"Leave your review here:"}),Object(j.jsxs)("form",{onSubmit:v,className:y.a.form,children:[Object(j.jsxs)("label",{className:y.a.label,children:["Name:",Object(j.jsx)("input",{className:p?y.a.error:y.a.input,type:"text",name:"name",value:a,onChange:function(e){r(e.target.value)},placeholder:"Enter name"})]}),Object(j.jsxs)("label",{className:y.a.label,children:["Description:",Object(j.jsx)("textarea",{rows:"5",cols:"33",className:O?y.a.error:y.a.textarea,type:"text",name:"descr",value:o,onChange:function(e){u(e.currentTarget.value)},placeholder:"Enter description"})]}),Object(j.jsx)("button",{type:"submit",className:y.a.btn,children:"Add review"})]})]})}function S(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){l.a.get("http://localhost:5000/api/").then((function(e){var t=e.data;r(t)})).catch((function(e){return console.log(e)}))}),[r]),Object(j.jsxs)(n.Suspense,{fallback:Object(j.jsx)(p,{}),children:[Object(j.jsx)(F,{}),Object(j.jsx)(v,{reviews:a})]})}var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),k()},9:function(e,t,a){e.exports={title:"ReviewForm_title__GjQBN",form:"ReviewForm_form__1NrJb",label:"ReviewForm_label__1D_7W",input:"ReviewForm_input__2njy4",textarea:"ReviewForm_textarea__ENZa8",error:"ReviewForm_error__IF1jo",btn:"ReviewForm_btn__3vstl"}}},[[69,1,2]]]);
//# sourceMappingURL=main.ad780b50.chunk.js.map