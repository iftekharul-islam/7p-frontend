import{r as c,a as S,d6 as C,j as e,f as d,Q as y,S as N,V as _,X as s,Y as r,a0 as b,d7 as g,G as v,L as B,bn as j,d8 as D}from"./index.9d6077eb.js";import{a as L}from"./App.6b53c8d0.js";const w=()=>{var i,m;const n=L(),[h,o]=c.exports.useState(!1),{data:l,searchParams:t}=S(a=>a.qualityControls),f=async()=>{const a=await n(D());console.log("\u{1F680} ~ file: index.js:39 ~ handleSearch ~ res:",a)};return c.exports.useEffect(()=>{o(!0),n(C()),o(!1)},[]),e(c.exports.Fragment,{children:d(y,{children:[e(N,{children:e("h4",{className:"card-title",children:"Must Ship Report"})}),d(_,{children:[d(s,{className:"mb-1",children:[e(r,{md:"2",children:e(b,{type:"text",placeholder:"Enter Batch",value:t==null?void 0:t.batch_number,onChange:a=>n(g({batch_number:a.target.value}))})}),e(r,{md:"2",children:e(b,{type:"text",value:t==null?void 0:t.user_barcode,onChange:a=>n(g({user_barcode:a.target.value}))})}),e(r,{md:"2",children:e(v,{color:"primary",onClick:f,disabled:h,children:h?"Please Wait...":"Open Batch"})})]}),((i=l==null?void 0:l.totals)==null?void 0:i.length)>0?e("div",{children:(m=l==null?void 0:l.totals)==null?void 0:m.map((a,x)=>{var u,p;return d(s,{children:[e(r,{md:"2"}),e(r,{md:"8",children:e(B,{to:`/quality-control/list/${a==null?void 0:a.station_id}`,children:d(s,{children:[e(r,{md:"3",className:"p-1 border",children:a!=null&&a.section?(u=a==null?void 0:a.section)==null?void 0:u.section_name:"Section not found"}),e(r,{md:"3",className:"p-1 border",children:a!=null&&a.station?(p=a==null?void 0:a.station)==null?void 0:p.station_name:"Station not found"}),d(r,{md:"6",className:"p-1 border",children:[a==null?void 0:a.count," Batch(es)"]})]},x)})}),e(r,{md:"2"})]})})}):e(s,{children:e(r,{md:"12",children:e("h4",{className:"text-center",children:h?d("span",{children:[e(j,{size:"sm"}),"Data Loading"]}):"No batches in station."})})})]})]})})};export{w as default};
