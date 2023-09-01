import{k as W,aG as q,r as p,a as z,j as r,f as n,S as E,T as H,bw as k,W as I,Y as m,Z as s,a1 as w,di as t,H as M,L as O,J as u,dk as P,dj as G}from"./index.b5767533.js";import{h as J}from"./moment.4d75c86c.js";import{a as Q}from"./App.bf73fcbb.js";const $=()=>{var _,g,N;const o=Q(),B=W(),{id:a}=q(),[l,c]=p.exports.useState(!0),{listData:d,searchParams:i}=z(e=>e==null?void 0:e.qualityControls),Y=async()=>{a&&(c(!0),await o(P(a)),c(!1))};p.exports.useEffect(()=>{Y()},[a]);const j=async()=>{const e=await o(G());e!=null&&e.payload&&B("/quality-control/order")};return r(p.exports.Fragment,{children:n(E,{children:[r(H,{children:r("h4",{className:"card-title",children:l?n("span",{children:["Please Wait ",r(k,{size:"sm"})]}):(_=d==null?void 0:d.station)==null?void 0:_.station_description})}),n(I,{children:[n(m,{className:"mb-1",children:[r(s,{md:"2",children:r(w,{type:"text",placeholder:"Enter Batch",value:i==null?void 0:i.batch_number,onChange:e=>o(t({batch_number:e.target.value}))})}),r(s,{md:"2",children:r(w,{type:"text",value:i==null?void 0:i.user_barcode,onChange:e=>o(t({user_barcode:e.target.value}))})}),r(s,{md:"2",children:r(M,{color:"primary",onClick:j,disabled:l,children:l?"Please Wait...":"Open Batch"})})]}),((g=d==null?void 0:d.batches)==null?void 0:g.length)>0?n("div",{children:[n(m,{children:[r(s,{md:"2",className:"p-1 border",children:"Batch"}),r(s,{md:"1",className:"p-1 border",children:"First order"}),r(s,{md:"1",className:"p-1 border",children:"Lines"}),r(s,{md:"3",className:"p-1 border",children:"Last Scan"}),r(s,{md:"2",className:"p-1 border"}),r(s,{md:"3",className:"p-1 border"})]}),(N=d==null?void 0:d.batches)==null?void 0:N.map((e,D)=>{var f,x,y,C,v,L,S;return r(O,{onClick:F=>{F.preventDefault(),o(t({batch_number:e==null?void 0:e.batch_number}))},children:n(m,{children:[n(s,{md:"2",className:"p-1 border",children:[e==null?void 0:e.batch_number,(e==null?void 0:e.store)&&n(u,{children:[r("br",{}),(f=e==null?void 0:e.store)==null?void 0:f.store_name]})]}),r(s,{md:"1",className:"p-1 border",children:J(e==null?void 0:e.min_order_date).format("YYYY-MM-DD")}),r(s,{md:"1",className:"p-1 border",children:(x=e==null?void 0:e.items_count)!=null?x:0}),n(s,{md:"3",className:"p-1 border",children:[(e==null?void 0:e.scanned_in)&&((y=e==null?void 0:e.scanned_in)==null?void 0:y.station_id)==(e==null?void 0:e.station_id)&&n(u,{children:[n("strong",{children:["QC in Progress by"," ",(v=(C=e==null?void 0:e.scanned_in)==null?void 0:C.in_user)==null?void 0:v.username]}),r("br",{})]}),e==null?void 0:e.change_date]}),e!=null&&e.first_item?n(u,{children:[r(s,{md:"2",className:"p-1 border",children:r("img",{src:(L=e==null?void 0:e.first_item)==null?void 0:L.item_thumb,width:"70",height:"70"})}),r(s,{md:"3",className:"p-1 border",children:(S=e==null?void 0:e.first_item)==null?void 0:S.item_description})]}):r(s,{md:"5",className:"p-1 border",children:"No Items"})]},D)})})]}):r(m,{children:r(s,{md:"12",children:r("h4",{className:"text-center",children:l?n("span",{children:[r(k,{size:"sm"}),"Data Loading"]}):"No batches in station."})})})]})]})})};export{$ as default};
