import{r as i,k as C,j as e,Y as o,$ as N,Z as c,f as n,Q as b,S as v,T as D,V as S,a0 as u,a1 as h,G as j,bD as w}from"./index.e1926c99.js";import{a as E}from"./App.403c5a1e.js";const B=()=>{const[t,p]=i.exports.useState(null),[l,f]=i.exports.useState(null),g=E(),x=C(),d=a=>{var r,s;p({...t,[(r=a.target)==null?void 0:r.name]:(s=a.target)==null?void 0:s.value})},y=async()=>{var r,s,m;const a=await g(w(t));(r=a==null?void 0:a.payload)!=null&&r.status?x("/manufacture"):f((m=(s=a==null?void 0:a.payload)==null?void 0:s.data)==null?void 0:m.errors)};return e(i.exports.Fragment,{children:e(o,{children:e(N,{children:e(c,{sm:"6",children:n(b,{children:[e(v,{children:e(D,{tag:"h4",children:"New Production Categories"})}),n(S,{children:[n(o,{children:[n(c,{sm:"12",children:[e(u,{className:"form-label",for:"name",children:"Name"}),e(h,{type:"text",name:"name",id:"name",placeholder:"Enter Category Code",value:t==null?void 0:t.name,onChange:d}),e("small",{className:"text-danger",children:l==null?void 0:l.production_category_code})]}),n(c,{sm:"12",children:[e(u,{className:"form-label",for:"description",children:"Description"}),e(h,{type:"textarea",name:"description",id:"description",placeholder:"Enter Description",value:t==null?void 0:t.manufacture,onChange:d})]})]}),e(o,{children:e(c,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(j,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),y()},children:"Submit"})})})})]})]})})})})})};export{B as default};
