import{k as h,r as o,a as p,d8 as b,j as t,Q as g,V as m,f,X as x,Y as r,a0 as c,d7 as d,G as y}from"./index.a20de6aa.js";import{a as C}from"./App.ca33e514.js";const B=()=>{const n=C(),i=h(),[l,s]=o.exports.useState(!0),{searchParams:e}=p(a=>a==null?void 0:a.qualityControls);o.exports.useEffect(async()=>{e!=null&&e.batch_number?(s(!0),await n(b()),s(!1)):i("/quality-control")},[e==null?void 0:e.batch_number]);const u=async()=>{console.log("A")};return t(o.exports.Fragment,{children:t(g,{children:t(m,{children:f(x,{className:"mb-1",children:[t(r,{md:"2",children:t(c,{type:"text",placeholder:"Enter Batch",value:e==null?void 0:e.batch_number,onChange:a=>n(d({batch_number:a.target.value}))})}),t(r,{md:"2",children:t(c,{type:"password",placeholder:"Enter Batch",value:e==null?void 0:e.user_barcode,onChange:a=>n(d({user_barcode:a.target.value}))})}),t(r,{md:"2",children:t(y,{color:"primary",onClick:u,disabled:l,children:l?"Please Wait...":"Open Batch"})})]})})})})};export{B as default};