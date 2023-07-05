import{a as C,r as y,ch as P,j as r,I as S,f,Y as F,Z as l,H as q,dR as w,G as A,dS as O,dT as M,Q as k}from"./index.9c541b2f.js";/* empty css                  */import{a as R}from"./App.797bd1cf.js";/* empty css                                  */import{C as T}from"./chevron-up.58ca9fe6.js";import{C as Y}from"./chevron-down.8da71f48.js";import{F as E}from"./index.307d7948.js";import{S as z}from"./react-select.esm.56852925.js";import"./emotion-memoize.esm.06f0e458.js";const B=n=>{var i,x,h,N,b,d;const t=C(s=>s.shipDateReports),[p,m]=y.exports.useState(null);y.exports.useEffect(()=>{P.highlightAll()},[]);const u=s=>{m(p===s?null:s)};return r(S,{children:((i=n==null?void 0:n.shipped_today)==null?void 0:i.length)>0?f(S,{children:[f(F,{style:{backgroundColor:"#fcf8e3"},children:[r(l,{sm:"3",className:"border d-flex justify-content-center"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:"Items Shipped"}),r(l,{sm:"1",className:"border d-flex justify-content-center",children:"Qty Shipped"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:"Average Days to Ship"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:"Max Days to Ship"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:"Percentage of Total"})]}),(x=n==null?void 0:n.sections)==null?void 0:x.map((s,a)=>{var v,_;const c=(v=n==null?void 0:n.shipped_today)==null?void 0:v.filter(e=>(e==null?void 0:e.section_num)==(s==null?void 0:s.value));return r(S,{children:(c==null?void 0:c.length)>0&&f(F,{children:[f(l,{sm:"3",className:"border",children:[s==p?r(T,{size:24,onClick:e=>{e.preventDefault(),u(s)}}):r(Y,{size:24,onClick:e=>{e.preventDefault(),u(s)}}),s==null?void 0:s.label]}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0)}),r(l,{sm:"1",className:"border d-flex justify-content-center",children:c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.item_quantity),0)}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat((c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.diff),0))/(c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))).toFixed(1)}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(Math.max(...c.map(e=>e.maxdays))).toFixed(1)}),f(l,{sm:"2",className:"border d-flex justify-content-center",children:[parseFloat((c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))/((_=n==null?void 0:n.shipped_today)==null?void 0:_.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))*100).toFixed(2),"%"]}),r(q,{isOpen:s===p,children:c==null?void 0:c.map((e,o)=>{var I,D;return f(F,{style:{backgroundColor:"#F5F5F5"},children:[r(l,{sm:"3",className:"border",children:(D=(I=t==null?void 0:t.storeOptions)==null?void 0:I.find(j=>(j==null?void 0:j.value)===(e==null?void 0:e.store_id)))!=null?D:"Store not Found"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:e==null?void 0:e.ship_count}),r(l,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.item_quantity}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(e==null?void 0:e.avgdays).toFixed(1)}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(e==null?void 0:e.maxdays).toFixed(1)}),f(l,{sm:"2",className:"border d-flex justify-content-center",children:[parseFloat((e==null?void 0:e.ship_count)/(c==null?void 0:c.reduce((j,g)=>j+parseInt(g==null?void 0:g.ship_count),0))*100).toFixed(2),"%"]})]})})})]},a)})}),f(F,{className:"mb-1",style:{backgroundColor:"#fcf8e3"},children:[r(l,{sm:"3",className:"border d-flex justify-content-center",children:"Total Shipped:"}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:(h=n==null?void 0:n.shipped_today)==null?void 0:h.reduce((s,a)=>s+parseInt(a==null?void 0:a.ship_count),0)}),r(l,{sm:"1",className:"border d-flex justify-content-center",children:(N=n==null?void 0:n.shipped_today)==null?void 0:N.reduce((s,a)=>s+parseInt(a==null?void 0:a.item_quantity),0)}),r(l,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(((b=n==null?void 0:n.shipped_today)==null?void 0:b.reduce((s,a)=>s+parseInt(a==null?void 0:a.diff),0))/((d=n==null?void 0:n.shipped_today)==null?void 0:d.reduce((s,a)=>s+parseInt(a==null?void 0:a.ship_count),0))).toFixed(1)}),r(l,{sm:"2",className:"border d-flex justify-content-center"}),r(l,{sm:"2",className:"border d-flex justify-content-center"})]})]}):r("span",{className:"d-flex justify-content-center",children:"No data Found"})})},H=()=>{var h,N,b;const n=R(),t=C(d=>d.shipDateReports),[p,m]=y.exports.useState(!1),u=t==null?void 0:t.searchParams;y.exports.useEffect(()=>{n(w())},[]);const i=async()=>{m(!0),await n(O()),m(!1)},x=d=>{n(M(d))};return f(F,{className:"mb-1",children:[r(l,{sm:"4",children:r(z,{placeholder:"Select Store",options:t==null?void 0:t.storeOptions,value:(h=t==null?void 0:t.storeOptions)==null?void 0:h.filter(d=>{var s;return(s=u==null?void 0:u.store_ids)==null?void 0:s.includes(d==null?void 0:d.value)}),onChange:d=>x({store_ids:d==null?void 0:d.map(s=>s==null?void 0:s.value)}),isMulti:!0})}),r(l,{sm:"3",children:r(E,{className:"form-control",id:"start_date",placeholder:"Enter Start Date",value:(N=u==null?void 0:u.start_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:d=>x({start_date:d[0]})})}),r(l,{sm:"3",children:r(E,{className:"form-control",id:"end_date",placeholder:"Enter End Date",value:(b=u==null?void 0:u.end_date)!=null?b:null,options:{dateFormat:"d-m-Y"},onChange:d=>x({end_date:d[0]})})}),r(l,{sm:"2",className:"d-flex justify-content-center",children:r(A,{color:"primary",onClick:i,disabled:p,children:p?"Searching":"Search"})})]})},W=()=>{const n=R(),t=C(p=>p.shipDateReports);return y.exports.useEffect(()=>{t!=null&&t.params&&n(O())},[t==null?void 0:t.params]),r("div",{className:"app-user-list",children:f(y.exports.Fragment,{children:[r(k,{className:"p-2",children:H()}),r(k,{className:"p-2",children:B(t==null?void 0:t.data)})]})})};export{W as default};
