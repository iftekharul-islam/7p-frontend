import{r as n,a as T,k as N,b6 as _,j as e,Y as i,$ as w,Z as s,f as l,S as D,T as M,V as j,W as k,a0 as p,a1 as y,H,b7 as $}from"./index.b5767533.js";import{D as f,r as B,d as F}from"./react-draft-wysiwyg.4ab987b1.js";import{a as K}from"./App.bf73fcbb.js";const A=()=>{var g;const[t,x]=n.exports.useState(null),[c,b]=n.exports.useState(null),o=T(a=>a.emailTemplate),h=K(),E=N(),[S,v]=n.exports.useState(f.EditorState.createEmpty());n.exports.useEffect(()=>{h(_())},[]);const d=a=>{var r,m;x({...t,[(r=a.target)==null?void 0:r.name]:(m=a.target)==null?void 0:m.value})},C=async()=>{var r,m,u;const a=await h($(t));(r=a==null?void 0:a.payload)!=null&&r.status?E("/email-template"):b((u=(m=a==null?void 0:a.payload)==null?void 0:m.data)==null?void 0:u.errors)};return e(n.exports.Fragment,{children:e(i,{children:e(w,{children:e(s,{sm:"12",children:l(D,{children:[e(M,{children:e(j,{tag:"h4",children:"New Email Template"})}),e(k,{children:l(i,{children:[l(s,{sm:"5",children:[l(i,{children:[l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message_type",children:"Message type"}),e(y,{type:"text",name:"message_type",id:"message_type",placeholder:"Enter Message Type",value:t==null?void 0:t.message_type,onChange:d}),e("small",{className:"text-danger",children:c==null?void 0:c.message_type})]}),l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message_title",children:"Message subject"}),e(y,{type:"text",name:"message_title",id:"message_title",placeholder:"Enter Message Subject",value:t==null?void 0:t.message_title,onChange:d})]}),l(s,{sm:"12",children:[e(p,{className:"form-label",for:"message",children:"Message template"}),e(B.exports.Editor,{editorState:S,onEditorStateChange:a=>{v(a),d({target:{name:"message",value:F(f.convertToRaw(a==null?void 0:a.getCurrentContent()))}})},placeholder:"Enter Message template"})]})]}),e(i,{children:e(s,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(H,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),C()},children:"Submit"})})})})]}),e(s,{sm:"7",children:l(i,{children:[e(s,{sm:"12",children:e("h4",{children:"email template keywords"})}),(g=o==null?void 0:o.emailTemplateKeywords)==null?void 0:g.map((a,r)=>e(s,{sm:"6",children:e("p",{children:a},r)}))]})})]})})]})})})})})};export{A as default};