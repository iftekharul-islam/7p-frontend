import{r,k as N,j as a,X as c,Y as d,Z as g,f as o,Q as y,S as C,T as v,V as b,$ as S,a0 as j,G as w,dH as D}from"./index.3c92940a.js";import{a as R}from"./App.1e2e16c3.js";const B=()=>{const[s,m]=r.exports.useState(null),[n,h]=r.exports.useState(null),u=N(),p=R(),x=e=>{var t,l;m({...s,[(t=e.target)==null?void 0:t.name]:(l=e.target)==null?void 0:l.value})},f=async()=>{var t,l,i;const e=await p(D(s));(t=e==null?void 0:e.payload)!=null&&t.status?u("/role"):h((i=(l=e==null?void 0:e.payload)==null?void 0:l.data)==null?void 0:i.errors)};return a(r.exports.Fragment,{children:a(c,{children:a(d,{md:"6",sm:"12",children:a(g,{children:o(y,{children:[a(C,{children:a(v,{tag:"h4",children:"New Role"})}),o(b,{children:[a(c,{children:o(d,{sm:"12",children:[a(S,{className:"form-label",for:"name",children:"Name"}),a(j,{type:"text",name:"name",id:"name",placeholder:"Name",value:s==null?void 0:s.name,onChange:x}),a("small",{className:"text-danger",children:n==null?void 0:n.name})]})}),a(c,{children:a(d,{sm:"12",className:"mt-1",children:a("div",{className:"d-flex",children:a(w,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),f()},children:"Submit"})})})})]})]})})})})})};export{B as default};
