import{a as C,r as y,cr as q,j as r,J as S,f,Y as i,Z as s,I as w,eh as A,H as M,ei as P,ej as Y,S as E}from"./index.b5767533.js";/* empty css                  */import{a as R}from"./App.bf73fcbb.js";/* empty css                                  */import{C as z}from"./chevron-up.212e3780.js";import{C as B}from"./chevron-down.75f983b0.js";import{F as O}from"./index.9962df18.js";import{S as H}from"./react-select.esm.97e349dc.js";import"./emotion-memoize.esm.06f0e458.js";const T=n=>{var F,x,h,N,b,a;const t=C(l=>l.shipDateReports),[p,m]=y.exports.useState(null);y.exports.useEffect(()=>{q.highlightAll()},[]);const u=l=>{m(p===l?null:l)};return r(S,{children:((F=n==null?void 0:n.shipped_today)==null?void 0:F.length)>0?f(S,{children:[f(i,{style:{backgroundColor:"#fcf8e3"},children:[r(s,{sm:"3",className:"border d-flex justify-content-center"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:"Items Shipped"}),r(s,{sm:"1",className:"border d-flex justify-content-center",children:"Qty Shipped"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:"Average Days to Ship"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:"Max Days to Ship"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:"Percentage of Total"})]}),(x=n==null?void 0:n.sections)==null?void 0:x.map((l,d)=>{var v,_;const c=(v=n==null?void 0:n.shipped_today)==null?void 0:v.filter(e=>(e==null?void 0:e.section_num)==(l==null?void 0:l.value));return r(S,{children:(c==null?void 0:c.length)>0&&f(i,{children:[f(s,{sm:"3",className:"border",children:[l==p?r(z,{size:24,onClick:e=>{e.preventDefault(),u(l)}}):r(B,{size:24,onClick:e=>{e.preventDefault(),u(l)}}),l==null?void 0:l.label]}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0)}),r(s,{sm:"1",className:"border d-flex justify-content-center",children:c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.item_quantity),0)}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat((c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.diff),0))/(c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))).toFixed(1)}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(Math.max(...c.map(e=>e.maxdays))).toFixed(1)}),f(s,{sm:"2",className:"border d-flex justify-content-center",children:[parseFloat((c==null?void 0:c.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))/((_=n==null?void 0:n.shipped_today)==null?void 0:_.reduce((e,o)=>e+parseInt(o==null?void 0:o.ship_count),0))*100).toFixed(2),"%"]}),r(w,{isOpen:l===p,children:c==null?void 0:c.map((e,o)=>{var I,D,k;return f(i,{style:{backgroundColor:"#F5F5F5"},children:[r(s,{sm:"3",className:"border",children:(k=(D=(I=t==null?void 0:t.storeOptions)==null?void 0:I.find(j=>(j==null?void 0:j.value)==(e==null?void 0:e.store_id)))==null?void 0:D.label)!=null?k:"Store not Found"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:e==null?void 0:e.ship_count}),r(s,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.item_quantity}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(e==null?void 0:e.avgdays).toFixed(1)}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(e==null?void 0:e.maxdays).toFixed(1)}),f(s,{sm:"2",className:"border d-flex justify-content-center",children:[parseFloat((e==null?void 0:e.ship_count)/(c==null?void 0:c.reduce((j,g)=>j+parseInt(g==null?void 0:g.ship_count),0))*100).toFixed(2),"%"]})]})})})]},d)})}),f(i,{className:"mb-1",style:{backgroundColor:"#fcf8e3"},children:[r(s,{sm:"3",className:"border d-flex justify-content-center",children:"Total Shipped:"}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:(h=n==null?void 0:n.shipped_today)==null?void 0:h.reduce((l,d)=>l+parseInt(d==null?void 0:d.ship_count),0)}),r(s,{sm:"1",className:"border d-flex justify-content-center",children:(N=n==null?void 0:n.shipped_today)==null?void 0:N.reduce((l,d)=>l+parseInt(d==null?void 0:d.item_quantity),0)}),r(s,{sm:"2",className:"border d-flex justify-content-center",children:parseFloat(((b=n==null?void 0:n.shipped_today)==null?void 0:b.reduce((l,d)=>l+parseInt(d==null?void 0:d.diff),0))/((a=n==null?void 0:n.shipped_today)==null?void 0:a.reduce((l,d)=>l+parseInt(d==null?void 0:d.ship_count),0))).toFixed(1)}),r(s,{sm:"2",className:"border d-flex justify-content-center"}),r(s,{sm:"2",className:"border d-flex justify-content-center"})]})]}):r("span",{className:"d-flex justify-content-center",children:"No data Found"})})},J=()=>{var h,N,b;const n=R(),t=C(a=>a.shipDateReports),[p,m]=y.exports.useState(!1),u=t==null?void 0:t.searchParams;y.exports.useEffect(()=>{n(A())},[]);const F=async()=>{m(!0),await n(P()),m(!1)},x=a=>{n(Y(a))};return f(i,{className:"mb-1",children:[r(s,{sm:"4",children:r(H,{placeholder:"Select Store",options:t==null?void 0:t.storeOptions,value:(h=t==null?void 0:t.storeOptions)==null?void 0:h.filter(a=>{var l;return(l=u==null?void 0:u.store_ids)==null?void 0:l.includes(a==null?void 0:a.value)}),onChange:a=>x({store_ids:a==null?void 0:a.map(l=>l==null?void 0:l.value)}),isMulti:!0})}),r(s,{sm:"3",children:r(O,{className:"form-control",id:"start_date",placeholder:"Enter Start Date",value:(N=u==null?void 0:u.start_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:a=>x({start_date:a[0]})})}),r(s,{sm:"3",children:r(O,{className:"form-control",id:"end_date",placeholder:"Enter End Date",value:(b=u==null?void 0:u.end_date)!=null?b:null,options:{dateFormat:"d-m-Y"},onChange:a=>x({end_date:a[0]})})}),r(s,{sm:"2",className:"d-flex justify-content-center",children:r(M,{color:"primary",onClick:F,disabled:p,children:p?"Searching":"Search"})})]})},X=()=>{const n=R(),t=C(p=>p.shipDateReports);return y.exports.useEffect(()=>{t!=null&&t.params&&n(P())},[t==null?void 0:t.params]),r("div",{className:"app-user-list",children:f(y.exports.Fragment,{children:[r(E,{className:"p-2",children:J()}),r(E,{className:"p-2",children:T(t==null?void 0:t.data)})]})})};export{X as default};
