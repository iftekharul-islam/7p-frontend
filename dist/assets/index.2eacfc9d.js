import{aF as b,k as C,r as l,a as S,eJ as y,j as r,f as s,Q as B,S as L,V as Y,Y as h,Z as d,a1 as _,G as k,L as v,bn as w,eI as O}from"./index.9c541b2f.js";/* empty css                  */import{a as j}from"./App.797bd1cf.js";import{h as F}from"./moment.4d75c86c.js";const E=()=>{var m,p,u,f;const{id:g}=b(),t=j();C();const[o,i]=l.exports.useState(!1),{WAPData:e,searchParams:c}=S(a=>a.WAP);l.exports.useEffect(async()=>{i(!0),await t(y(g)),i(!1)},[]);const x=async()=>{var n;i(!0);const a=await t(getShowData());(n=a==null?void 0:a.payload)!=null&&n.status,i(!1)},N=a=>{t(O(a))};return r(l.exports.Fragment,{children:s(B,{children:[r(L,{children:r("h4",{className:"card-title",children:"WAP"})}),s(Y,{children:[s(h,{className:"mb-1",children:[r(d,{md:"7"}),r(d,{md:"2",children:r(_,{type:"text",name:"order_id",placeholder:"Scan Label",value:c==null?void 0:c.store_id,onChange:a=>{var n;return N({order_id:(n=a==null?void 0:a.target)==null?void 0:n.value})}})}),r(d,{md:"2",children:r(k,{color:"primary",onClick:x,disabled:o,children:o?"Please Wait...":"Open Bin"})})]}),(e==null?void 0:e.order)==null?r("div",{children:s(h,{children:[s(d,{md:"3",className:"p-1",children:["BIN ",s("b",{children:["#",(m=e==null?void 0:e.bin)==null?void 0:m.name]})]}),s(d,{md:"7",className:"p-1",children:["Order ",s("b",{children:["#",r(v,{to:`/customer-order-edit/${(p=e==null?void 0:e.order)==null?void 0:p.id}`,children:(u=e==null?void 0:e.order)==null?void 0:u.short_order})]})]}),r(d,{md:"2",className:"p-1",children:s("small",{children:["Order Date: ",F((f=e==null?void 0:e.order)==null?void 0:f.order_date).format("YYYY-MM-DD")]})})]})}):r(h,{children:r(d,{md:"12",children:r("h4",{className:"text-center",children:o?s("span",{children:[r(w,{size:"sm"}),"Data Loading"]}):"No Data Found"})})})]})]})})};export{E as default};