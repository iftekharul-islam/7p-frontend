import{r as d,a as _,dN as D,j as s,Y as o,$ as T,Z as l,f as t,Q as b,S as I,T as $,V as j,a0 as h,a1 as k,G as w,dO as B}from"./index.9c541b2f.js";import{a as F,s as g}from"./App.797bd1cf.js";import{S as v}from"./react-select.esm.56852925.js";import"./emotion-memoize.esm.06f0e458.js";const L=()=>{var x,y;const[a,C]=d.exports.useState(null),[m,u]=d.exports.useState(null),[i,O]=d.exports.useState(null),r=_(e=>e.bulkEmails),f=F();d.exports.useEffect(()=>{f(D())},[]);const p=e=>{var c,n;C({...a,[(c=e.target)==null?void 0:c.name]:(n=e.target)==null?void 0:n.value})},E=async()=>{var c,n,N,S;const e=await f(B(a));(c=e==null?void 0:e.payload)!=null&&c.status?(u((n=e==null?void 0:e.payload)==null?void 0:n.error),O((N=e==null?void 0:e.payload)==null?void 0:N.success)):u((S=e==null?void 0:e.payload)==null?void 0:S.error)};return s(d.exports.Fragment,{children:s(o,{children:s(T,{children:s(l,{sm:"12",children:t(b,{children:[s(I,{children:s($,{tag:"h4",children:"Send Bulk emails"})}),s(j,{children:t(o,{children:[t(l,{sm:"4",children:[t(o,{children:[t(l,{sm:"12",children:[s(h,{className:"form-label",for:"message_type",children:"Order IDs Type"}),s(v,{className:"react-select",classNamePrefix:"select",theme:g,placeholder:"Select Order IDs Type",options:r==null?void 0:r.typeOptions,value:(x=r==null?void 0:r.typeOptions)==null?void 0:x.find(e=>(e==null?void 0:e.value)===(a==null?void 0:a.id_type)),onChange:e=>p({target:{name:"id_type",value:e==null?void 0:e.value}})})]}),t(l,{sm:"12",children:[t(h,{className:"form-label",for:"message_title",children:[(a==null?void 0:a.id_type)!="5p"&&"Short"," Order IDs (Comma separated)"]}),s(k,{type:"textarea",name:"order_ids",Rows:"5",id:"order_ids",placeholder:`Enter ${(a==null?void 0:a.id_type)!="5p"?"Short Order IDs":"Order IDs"}`,value:a==null?void 0:a.order_ids,onChange:p})]}),t(l,{sm:"12",children:[s(h,{className:"form-label",for:"template",children:"Email Template"}),s(v,{className:"react-select",classNamePrefix:"select",theme:g,placeholder:"Select Email Template",options:r==null?void 0:r.templateOptions,value:(y=r==null?void 0:r.templateOptions)==null?void 0:y.find(e=>(e==null?void 0:e.value)===(a==null?void 0:a.template)),onChange:e=>p({target:{name:"template",value:e==null?void 0:e.value}})})]})]}),s(o,{children:s(l,{sm:"12",className:"mt-1",children:s("div",{className:"d-flex",children:s(w,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),E()},children:"Send"})})})})]}),s(l,{sm:"1"}),m&&t(l,{sm:"3",children:[t(l,{sm:"12",children:[s("h4",{className:"text-danger",children:"Errors"}),s("hr",{className:"text-danger"})]}),m==null?void 0:m.map((e,c)=>s(l,{sm:"12",children:s("p",{className:"text-danger",children:e})},c))]}),s(l,{sm:"1"}),i&&t(l,{sm:"3",children:[t(l,{sm:"12",children:[s("h4",{className:"text-success",children:"Success"}),s("hr",{className:"text-success"})]}),i==null?void 0:i.map((e,c)=>s(l,{sm:"12",children:s("p",{className:"text-success",children:e})},c))]})]})})]})})})})})};export{L as default};
