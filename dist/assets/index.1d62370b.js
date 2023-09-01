import{k as w,a as $,r as S,f as s,S as P,j as n,T as z,W as A,bw as H,Y as p,Z as i,H as D,cH as G,cI as L}from"./index.b5767533.js";import{a as T}from"./App.bf73fcbb.js";const I=()=>{var y,g,N,x,_,j;const c=T(),C=w(),{data:d}=$(e=>e.printBatchSummaries),[v,f]=S.exports.useState(!1),B=async()=>{f(!0),await c(G()),f(!1)};S.exports.useEffect(()=>{B()},[]);const a=async(e,r,t)=>{var m,u;e.preventDefault();let l={store:r==null?void 0:r.store_id,type:r==null?void 0:r.type};t=="production"?l={...l,printed:"0",section:r==null?void 0:r.section_id,production_station:r==null?void 0:r.production_station_id}:t=="graphics"&&(l={...l,printed:"2",graphic_dir:r==null?void 0:r.graphic_dir});const o=await c(L(l));((m=o==null?void 0:o.payload)==null?void 0:m.status)==200&&C("/print",{state:(u=o==null?void 0:o.payload)==null?void 0:u.data})};return s(P,{children:[n(z,{children:n("h4",{children:"Print Summaries"})}),n(A,{children:n(P,{children:v?s("span",{className:"d-flex justify-content-center align-items-center",children:[n("span",{className:"mx-1",children:n(H,{size:"sm"})}),"Data Loading..."]}):s("span",{children:[s("div",{className:"border p-1",children:[n("h4",{children:"Batches in Production"}),((y=d==null?void 0:d.production)==null?void 0:y.length)>0?s("span",{children:[s(p,{children:[n(i,{md:"2",children:n("b",{children:"Department"})}),n(i,{md:"2"}),n(i,{md:"3",children:n("b",{children:"Production Station"})}),n(i,{md:"2",className:"d-flex justify-content-center",children:n("b",{children:"Summaries to Print"})}),n(i,{md:"3"})]}),(g=d==null?void 0:d.production)==null?void 0:g.map((e,r)=>{var t,l,o,m,u;return s("span",{children:[n("hr",{}),s(p,{className:(e==null?void 0:e.to_printer_date)!=null&&"bg-info",children:[s(i,{sm:"2",children:[e!=null&&e.section?(t=e==null?void 0:e.section)==null?void 0:t.section_name:"No Section",e==null?void 0:e.type]}),n(i,{sm:"2",children:(l=e==null?void 0:e.store)==null?void 0:l.store_name}),n(i,{sm:"3",children:`${(o=e==null?void 0:e.production_station)==null?void 0:o.station_name}=>${(m=e==null?void 0:e.production_station)==null?void 0:m.station_description}`}),n(i,{sm:"2",className:"d-flex justify-content-center",children:e==null?void 0:e.count}),n(i,{sm:"3",className:"d-flex justify-content-start",children:s(D,{color:"primary",size:"sm",onClick:k=>a(k,e,"production"),children:["Print ",e==null?void 0:e.count," for"," ",(u=e==null?void 0:e.production_station)==null?void 0:u.station_name]})})]},r)]})})]}):n("span",{className:"d-flex justify-content-center align-items-center bg-info p-1",children:"All production summaries printed"})]}),n("br",{}),s("div",{className:"border p-1",children:[n("h4",{class:"page-header",children:"Batches in Graphics"}),((N=d==null?void 0:d.graphics)==null?void 0:N.length)>0?s("span",{children:[s(p,{children:[n(i,{md:"5",className:"d-flex justify-content-start",children:n("b",{children:"Graphic Directory"})}),n(i,{md:"2"}),n(i,{md:"3",className:"d-flex justify-content-center",children:n("b",{children:"Summaries to Print"})}),n(i,{md:"2"})]}),(x=d==null?void 0:d.graphics)==null?void 0:x.map((e,r)=>{var t;return s("span",{children:[n("hr",{}),s(p,{children:[s(i,{md:"5",className:"d-flex justify-content-start",children:[e==null?void 0:e.graphic_dir," ",e==null?void 0:e.type]}),n(i,{md:"2",children:(t=e==null?void 0:e.store)==null?void 0:t.store_name}),n(i,{md:"3",className:"d-flex justify-content-center",children:e==null?void 0:e.count}),n(i,{md:"2",className:"d-flex justify-content-start",children:s(D,{color:"primary",size:"sm",onClick:l=>a(l,e,"graphics"),children:["Print ",e==null?void 0:e.count," in ",e==null?void 0:e.graphic_dir]})})]})]},r)})]}):n("span",{className:"d-flex justify-content-center align-items-center bg-info p-1",children:"All graphics summaries printed"})]}),n("br",{}),s("div",{className:"border p-1",children:[n("h4",{class:"page-header",children:"Summaries printed today"}),((_=d==null?void 0:d.today)==null?void 0:_.length)>0?s("span",{children:[s(p,{children:[n(i,{md:"2",className:"d-flex justify-content-start",children:n("b",{children:"Department"})}),n(i,{md:"4",className:"d-flex justify-content-start",children:n("b",{children:"First Production Station"})}),n(i,{md:"2",className:"d-flex justify-content-center",children:n("b",{children:"Summaries Printed"})}),n(i,{md:"2",className:"d-flex justify-content-start",children:n("b",{children:"Printed By"})}),n(i,{md:"2",className:"d-flex justify-content-start",children:n("b",{children:"Print Time"})})]}),(j=d==null?void 0:d.today)==null?void 0:j.map((e,r)=>{var t,l,o,m;return s("span",{children:[n("hr",{}),s(p,{children:[n(i,{md:"2",className:"d-flex justify-content-start",children:(t=e==null?void 0:e.section)==null?void 0:t.section_name}),n(i,{md:"4",className:"d-flex justify-content-start",children:`${(l=e==null?void 0:e.production_station)==null?void 0:l.station_name}=>${(o=e==null?void 0:e.production_station)==null?void 0:o.station_description}`}),n(i,{md:"2",className:"d-flex justify-content-center",children:e==null?void 0:e.count}),n(i,{md:"2",className:"d-flex justify-content-start",children:(m=e==null?void 0:e.summary_user)==null?void 0:m.username}),n(i,{md:"2",className:"d-flex justify-content-start",children:e==null?void 0:e.summary_date})]})]},r)}),n("hr",{})]}):n("span",{className:"d-flex justify-content-center align-items-center bg-info p-1",children:"No batch summaries printed today"})]})]})})})]})};export{I as default};
