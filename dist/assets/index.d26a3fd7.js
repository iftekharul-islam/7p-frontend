import{k as C,r as o,a as N,d2 as S,j as e,f as t,Q as y,S as _,V as B,X as h,Y as r,a0 as g,d3 as c,G as k,L as D,bm as L}from"./index.87b69802.js";import{a as j}from"./App.4bf6c745.js";const A=()=>{const s=j(),b=C(),[i,m]=o.exports.useState(!1),{data:l,searchParams:d,storeOptions:w,statusOptions:E}=N(a=>a.qualityControls),f=async()=>{console.log("A")};o.exports.useEffect(()=>{m(!0),s(S()),m(!1)},[]);const v=async(a,n)=>{await s(c({station_id:n==null?void 0:n.station_id})),a.preventDefault(),b("/quality-control/list")};return e(o.exports.Fragment,{children:t(y,{children:[e(_,{children:e("h4",{className:"card-title",children:"Must Ship Report"})}),t(B,{children:[t(h,{className:"mb-1",children:[e(r,{md:"2",children:e(g,{type:"text",placeholder:"Enter Batch",value:d==null?void 0:d.batch_number,onChange:a=>s(c({batch_number:a.target.value}))})}),e(r,{md:"2",children:e(g,{type:"password",placeholder:"Enter Batch",value:d==null?void 0:d.user_barcode,onChange:a=>s(c({user_barcode:a.target.value}))})}),e(r,{md:"2",children:e(k,{color:"primary",onClick:f,disabled:i,children:i?"Please Wait...":"Open Batch"})})]}),(l==null?void 0:l.length)>0?e("div",{children:l==null?void 0:l.map((a,n)=>{var p,u;return t(h,{children:[e(r,{md:"2"}),e(r,{md:"8",children:e(D,{onClick:x=>v(x,a),children:t(h,{children:[e(r,{md:"3",className:"p-1 border",children:a!=null&&a.section?(p=a==null?void 0:a.section)==null?void 0:p.section_name:"Section not found"}),e(r,{md:"3",className:"p-1 border",children:a!=null&&a.station?(u=a==null?void 0:a.station)==null?void 0:u.station_name:"Station not found"}),t(r,{md:"6",className:"p-1 border",children:[a==null?void 0:a.count," Batch(es)"]})]},n)})}),e(r,{md:"2"})]})})}):e(h,{children:e(r,{md:"12",children:e("h4",{className:"text-center",children:i?t("span",{children:[e(L,{size:"sm"}),"Data Loading"]}):"No batches in station."})})})]})]})})};export{A as default};
