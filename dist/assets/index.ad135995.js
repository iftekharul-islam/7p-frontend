import{aN as E,r,k as O,a as D,e7 as T,e5 as j,j as a,Y as u,$ as P,Z as i,f as n,Q as $,S as k,T as w,V as B,a0 as m,a1 as f,G as F,e8 as G}from"./index.db14b012.js";import{a as H,s as x}from"./App.c9615b80.js";import{S as g}from"./react-select.esm.1d40a800.js";import"./emotion-memoize.esm.06f0e458.js";const R=()=>{var y,N;const{id:d}=E(),[s,S]=r.exports.useState(null),[p,_]=r.exports.useState(null),h=H(),C=O(),t=D(e=>e.stations);r.exports.useEffect(()=>{d&&(h(T(d)),h(j()))},[d]),r.exports.useEffect(()=>{t!=null&&t.station&&S(t==null?void 0:t.station)},[t==null?void 0:t.station]);const l=e=>{var o,c;S({...s,[(o=e.target)==null?void 0:o.name]:(c=e.target)==null?void 0:c.value})},b=async()=>{var o,c,v;const e=await h(G({id:d,data:s}));(o=e==null?void 0:e.payload)!=null&&o.status?C("/station"):_((v=(c=e==null?void 0:e.payload)==null?void 0:c.data)==null?void 0:v.errors)};return a(r.exports.Fragment,{children:a(u,{children:a(P,{children:a(i,{sm:"6",children:n($,{children:[a(k,{children:a(w,{tag:"h4",children:"Edit Section"})}),n(B,{children:[n(u,{children:[n(i,{sm:"12",children:[a(m,{className:"form-label",for:"station_name",children:"Station Name"}),a(f,{type:"text",name:"station_name",id:"station_name",placeholder:"Enter Station Name",value:s==null?void 0:s.station_name,onChange:l}),a("small",{className:"text-danger",children:p==null?void 0:p.station_name})]}),n(i,{sm:"12",children:[a(m,{className:"form-label",for:"station_description",children:"Description"}),a(f,{type:"text",name:"station_description",id:"station_description",placeholder:"Enter Station Description",value:s==null?void 0:s.station_description,onChange:l})]}),n(i,{sm:"12",children:[a(m,{className:"form-label",for:"station_status",children:"Status on the My Orders portal"}),a(f,{type:"text",name:"station_status",id:"station_status",placeholder:"Enter Station Status",value:s==null?void 0:s.station_status,onChange:l})]}),n(i,{sm:"12",children:[a(m,{className:"form-label",for:"section",children:"Section"}),a(g,{className:"react-select",classNamePrefix:"select",theme:x,placeholder:"Select Section",options:t==null?void 0:t.sectionOption,value:(y=t==null?void 0:t.sectionOption)==null?void 0:y.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.section)),onChange:e=>l({target:{name:"section",value:e==null?void 0:e.value}})})]}),n(i,{sm:"12",children:[a(m,{className:"form-label",for:"type",children:"Type"}),a(g,{className:"react-select",classNamePrefix:"select",theme:x,placeholder:"Select Type",options:t==null?void 0:t.typeOption,value:(N=t==null?void 0:t.typeOption)==null?void 0:N.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.type)),onChange:e=>l({target:{name:"type",value:e==null?void 0:e.value}})})]})]}),a(u,{children:a(i,{sm:"12",className:"mt-1",children:a("div",{className:"d-flex",children:a(F,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),b()},children:"Submit"})})})})]})]})})})})})};export{R as default};