"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[771],{6771:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(2791),r=t(9434),o=t(9164),i=t(3634),s=t(1775),l=t(1686),c=t.n(l),d=t(3044),x=t(3227),u=t(4708),m=t(7665),h=t(4554),p=t(5777),f=t(3329),b=t(890),j=t(7107),g=t(4507),Z=t(184),v=(0,j.Z)(),y=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.Af),t=(0,r.v9)(s.Hq);return(0,Z.jsx)(g.Z,{theme:v,children:(0,Z.jsxs)(o.Z,{component:"main",maxWidth:"xs",sx:{padding:2,border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",maxHeight:"500px",overflow:"auto"},children:[(0,Z.jsx)(u.ZP,{}),(0,Z.jsxs)(h.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(p.Z,{})}),(0,Z.jsx)(b.Z,{component:"h1",variant:"h5",children:"Add contact"}),(0,Z.jsxs)(h.Z,{component:"form",onSubmit:function(t){t.preventDefault();var a=t.target,r=t.target.elements.name.value,o=t.target.elements.number.value,s={name:r,number:o},l=n.find((function(e){return e.name.toLowerCase()===r.toLowerCase()})),d=n.find((function(e){return e.number===o}));""===r&&""===o?c().Notify.failure("Enter contact information"):""===r?c().Notify.failure("Enter a valid contact name as in the example"):""===o?c().Notify.failure("Enter a valid phone number as in the example"):l&&d?c().Notify.failure("".concat(r," is already in your contacts.")):(c().Notify.success("".concat(r," ADDED to your contact list.")),e((0,i.uK)(s)),a.reset())},noValidate:!0,sx:{mt:1},children:[(0,Z.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Enter name",name:"name",type:"text",placeholder:"Will Smith",autoFocus:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,Z.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Enter number",name:"number",type:"number",placeholder:"+48 089 123 942"}),(0,Z.jsx)(x.Z,{endIcon:(0,Z.jsx)(f.Z,{}),loading:t,loadingPosition:"end",variant:"contained",type:"submit",fullWidth:!0,sx:{mt:3,mb:2},children:(0,Z.jsx)("span",{children:"add"})})]})]})]})})},A=t(4808),w=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.AD);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.Z,{component:"h1",variant:"h5",sx:{marginTop:3,textAlign:"center"},children:"Your contacts"}),(0,Z.jsx)(h.Z,{component:"form",noValidate:!0,sx:{mt:1},children:(0,Z.jsx)(m.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Enter name",name:"filter",type:"text",placeholder:"Jason Statham",autoComplete:"name",value:n.value,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){var t=n.target.value;e((0,A.T)(t))}})})]})},C={container:"NoContactsYet_container__WCNZH"},N=t(3562),W=function(){return(0,Z.jsxs)("div",{className:C.container,children:[(0,Z.jsx)(N.Z,{sx:{color:"#1876D1"}}),(0,Z.jsx)("p",{className:C.paragraph,children:"You have no contacts... yet !"})]})},_=t(3400),z=t(7247),D=t(9836),E=t(3382),k=t(3994),F=t(9281),I=t(6890),S=t(5855),q=t(5527),H=t(2062),T=t.n(H),B=function(e){var n=e.contacts,t=(0,r.I0)();function a(e){var n=e.currentTarget;T()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this contact!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){n.setAttribute("disabled","true");var a=n.getAttribute("data-id");t((0,i.GK)(a)),T()("Contact has been deleted!",{icon:"success"})}}))}return(0,Z.jsx)(F.Z,{component:q.Z,style:{width:"100%",maxWidth:"450px",margin:"0 auto"},children:0!==n.length?(0,Z.jsxs)(D.Z,{sx:{minWidth:400},"aria-label":"simple table",children:[(0,Z.jsx)(I.Z,{children:(0,Z.jsxs)(S.Z,{children:[(0,Z.jsx)(k.Z,{sx:{fontWeight:"bold"},children:"Name"}),(0,Z.jsx)(k.Z,{sx:{fontWeight:"bold"},children:"Number"}),(0,Z.jsx)(k.Z,{sx:{fontWeight:"bold"},children:"Delete"})]})}),(0,Z.jsx)(E.Z,{children:n.map((function(e){var n=e.number,t=e.name,r=e.id;return(0,Z.jsxs)(S.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},className:"contacts-row",children:[(0,Z.jsx)(k.Z,{component:"th",scope:"row",children:t}),(0,Z.jsx)(k.Z,{align:"left",children:n}),(0,Z.jsx)(k.Z,{align:"center",children:(0,Z.jsx)(_.Z,{"data-id":r,"aria-label":"delete",onClick:a,children:(0,Z.jsx)(z.Z,{})})})]},r)}))})]}):(0,Z.jsx)(W,{})})},J=function(){var e=(0,r.v9)(s.hF);return(0,Z.jsxs)(o.Z,{component:"main",maxWidth:"xs",sx:{padding:2,border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",maxHeight:"500px",overflow:"auto"},children:[(0,Z.jsx)(w,{}),(0,Z.jsx)(B,{contacts:e})]})};function L(){var e=(0,r.I0)(),n=(0,r.v9)(s.xU),t=(0,r.v9)(s.zh);return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,Z.jsxs)(o.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"center",gap:1,paddingBottom:"50px"},children:[(0,Z.jsx)(y,{}),(0,Z.jsx)(J,{isLoading:n,error:t})]})}}}]);
//# sourceMappingURL=771.ba04d994.chunk.js.map