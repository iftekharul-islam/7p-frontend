import{k as N,r as m,a as x,bX as y,bY as C,j as a,f as l,S as _,T as B,W as D,Y as i,Z as s,a1 as j,H as g,bw as F,bZ as k,b_ as P}from"./index.b5767533.js";import{a as T}from"./App.bf73fcbb.js";import{S as W}from"./react-select.esm.97e349dc.js";import"./emotion-memoize.esm.06f0e458.js";const Y=()=>{const o=T(),S=N(),[c,r]=m.exports.useState(!1),{data:n,searchParams:d,storeOptions:h}=x(e=>e.moveToProductions);m.exports.useEffect(()=>{o(y()),p()},[]);const p=async()=>{r(!0),await o(C()),r(!1)},v=async()=>{var t;r(!0);const e=await o(k());(t=e==null?void 0:e.payload)!=null&&t.status&&S("/move-to-production/show"),r(!1)},u=e=>{o(P(e))};return a(m.exports.Fragment,{children:l(_,{children:[a(B,{children:a("h4",{className:"card-title",children:"Move to Production"})}),l(D,{children:[l(i,{className:"mb-1",children:[a(s,{md:"3",children:a(j,{placeholder:"Enter Batch",value:d==null?void 0:d.scan_batches,onChange:e=>{var t;return u({scan_batches:(t=e==null?void 0:e.target)==null?void 0:t.value})}})}),a(s,{md:"2",children:a(g,{color:"primary",onClick:v,disabled:c,children:c?"Please Wait...":"Show Batch"})}),a(s,{md:"1"}),a(s,{md:"3",children:a(W,{className:"react-select",classNamePrefix:"select",placeholder:"Filter by Store",isMulti:!0,options:h,value:h==null?void 0:h.filter(e=>{var t;return(t=d==null?void 0:d.store_id)==null?void 0:t.includes(e==null?void 0:e.value)}),onChange:e=>{u({store_id:e==null?void 0:e.map(t=>t==null?void 0:t.value)})},isDisabled:c})}),a(s,{md:"2",children:a(g,{color:"primary",onClick:p,disabled:c,children:c?"Please Wait...":"Filter by Store"})})]}),(n==null?void 0:n.length)>0?l("div",{children:[a(i,{children:a(s,{children:l("h4",{children:[n.reduce(function(e,t){return e+(t==null?void 0:t.total)},0)," ","Batches to move to production"]})})}),n==null?void 0:n.map((e,t)=>{var f,b;return l(i,{children:[a(s,{md:"3",className:"p-1 border",children:(f=e==null?void 0:e.section)==null?void 0:f.section_name}),a(s,{md:"7",className:"p-1 border",children:(b=e==null?void 0:e.production_station)==null?void 0:b.station_description}),a(s,{md:"2",className:"p-1 border d-flex justify-content-center",children:e==null?void 0:e.total})]},t)}),l(i,{children:[a(s,{md:"7"}),a(s,{md:"3",className:"p-1",children:a("b",{children:"Total"})}),a(s,{md:"2",className:"p-1 d-flex justify-content-center",children:a("b",{children:n.reduce(function(e,t){return e+(t==null?void 0:t.total)},0)})})]})]}):a(i,{children:a(s,{md:"12",children:a("h4",{className:"text-center",children:c?l("span",{children:[a(F,{size:"sm"}),"Data Loading"]}):"No Data Found"})})})]})]})})};export{Y as default};
