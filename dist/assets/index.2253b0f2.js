import{k as p,r as o,a as h,d4 as g,j as t,Q as b,V as f,f as x,X as y,Y as s,a0 as d,d3 as c,G as m}from"./index.87b69802.js";import{a as C}from"./App.4bf6c745.js";const B=()=>{const n=C(),i=p(),[l,r]=o.exports.useState(!0),{searchParams:e}=h(a=>a==null?void 0:a.qualityControls);o.exports.useEffect(async()=>{e!=null&&e.station_id?(r(!0),await n(g()),r(!1)):i("/quality-control")},[e==null?void 0:e.station_id]);const u=async()=>{console.log("A")};return t(o.exports.Fragment,{children:t(b,{children:t(f,{children:x(y,{className:"mb-1",children:[t(s,{md:"2",children:t(d,{type:"text",placeholder:"Enter Batch",value:e==null?void 0:e.batch_number,onChange:a=>n(c({batch_number:a.target.value}))})}),t(s,{md:"2",children:t(d,{type:"password",placeholder:"Enter Batch",value:e==null?void 0:e.user_barcode,onChange:a=>n(c({user_barcode:a.target.value}))})}),t(s,{md:"2",children:t(m,{color:"primary",onClick:u,disabled:l,children:l?"Please Wait...":"Open Batch"})})]})})})})};export{B as default};
