import{aB as y,r as o,k as C,a as P,bM as v,j as a,X as u,Z as D,Y as d,f as l,Q as S,S as M,T as j,V as B,a0 as p,$ as k,G as $,bN as w}from"./index.e509d298.js";import{a as A}from"./App.fa99906d.js";const T=()=>{const{id:t}=y(),[c,i]=o.exports.useState([]),h=A(),x=C(),e=P(s=>s.manufactures);o.exports.useEffect(()=>{t&&h(v(t))},[t]),o.exports.useEffect(()=>{e!=null&&e.manufacturePermission&&i(e==null?void 0:e.manufacturePermission)},[e==null?void 0:e.manufacturePermission]);const b=s=>{const n=c==null?void 0:c.map(r=>{var f,m;return(r==null?void 0:r.id)==((f=s==null?void 0:s.target)==null?void 0:f.id)?{...r,[(m=s==null?void 0:s.target)==null?void 0:m.name]:s==null?void 0:s.target.checked}:r});i(n)},g=s=>{const n=c==null?void 0:c.map(r=>({...r,access:s==null?void 0:s.target.checked}));i(n)},N=async()=>{var n;const s=await h(w({id:t,data:c}));(n=s==null?void 0:s.payload)!=null&&n.status&&x("/manufacture")};return a(o.exports.Fragment,{children:a(u,{children:a(D,{children:a(d,{sm:"6",children:l(S,{children:[a(M,{children:a(j,{tag:"h4",children:"Manufacture Permissions"})}),l(B,{children:[l(u,{children:[c==null?void 0:c.map(s=>a(d,{sm:"12",children:l("div",{className:"form-check form-check-success",children:[a(p,{type:"checkbox",id:s==null?void 0:s.id,name:"access",checked:s==null?void 0:s.access,onChange:b}),a(k,{className:"form-check-label",for:"success-checkbox",children:s==null?void 0:s.name})]})})),a(d,{sm:"12",className:"mt-2",children:l("div",{className:"form-check form-check-success",children:[a(p,{type:"checkbox",name:"access",defaultChecked:!1,onChange:g}),a(k,{className:"form-check-label",for:"success-checkbox",children:"Select/Deselect All Permissions"})]})})]}),a(u,{children:a(d,{sm:"12",className:"mt-1",children:a("div",{className:"d-flex",children:a($,{className:"me-1",color:"primary",type:"submit",onClick:s=>{s.preventDefault(),N()},children:"Update Permission"})})})})]})]})})})})})};export{T as default};