import{r as n,a as _,k as b,a_ as N,j as e,Y as i,$ as w,Z as s,f as l,Q as D,S as M,T as j,V as $,a0 as p,a1 as y,G as k,a$ as B}from"./index.9c541b2f.js";import{D as f,r as F,d as H}from"./react-draft-wysiwyg.2a397556.js";import{a as K}from"./App.797bd1cf.js";const G=()=>{var g;const[t,x]=n.exports.useState(null),[c,E]=n.exports.useState(null),o=_(a=>a.emailTemplate),h=K(),S=b(),[v,C]=n.exports.useState(f.EditorState.createEmpty());n.exports.useEffect(()=>{h(N())},[]);const d=a=>{var r,m;x({...t,[(r=a.target)==null?void 0:r.name]:(m=a.target)==null?void 0:m.value})},T=async()=>{var r,m,u;const a=await h(B(t));(r=a==null?void 0:a.payload)!=null&&r.status?S("/email-template"):E((u=(m=a==null?void 0:a.payload)==null?void 0:m.data)==null?void 0:u.errors)};return e(n.exports.Fragment,{children:e(i,{children:e(w,{children:e(s,{sm:"12",children:l(D,{children:[e(M,{children:e(j,{tag:"h4",children:"New Email Template"})}),e($,{children:l(i,{children:[l(s,{sm:"5",children:[l(i,{children:[l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message_type",children:"Message type"}),e(y,{type:"text",name:"message_type",id:"message_type",placeholder:"Enter Message Type",value:t==null?void 0:t.message_type,onChange:d}),e("small",{className:"text-danger",children:c==null?void 0:c.message_type})]}),l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message_title",children:"Message subject"}),e(y,{type:"text",name:"message_title",id:"message_title",placeholder:"Enter Message Subject",value:t==null?void 0:t.message_title,onChange:d})]}),l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message",children:"Message template"}),e(F.exports.Editor,{editorState:v,onEditorStateChange:a=>{C(a),d({target:{name:"message",value:H(f.convertToRaw(a==null?void 0:a.getCurrentContent()))}})},placeholder:"Enter Message template"})]})]}),e(i,{children:e(s,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(k,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),T()},children:"Submit"})})})})]}),e(s,{sm:"7",children:l(i,{children:[e(s,{sm:"12",children:e("h4",{children:"email template keywords"})}),(g=o==null?void 0:o.emailTemplateKeywords)==null?void 0:g.map((a,r)=>e(s,{sm:"6",children:e("p",{children:a},r)}))]})})]})})]})})})})})};export{G as default};