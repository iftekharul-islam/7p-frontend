import{a as I,r as u,ck as Y,j as n,I as F,f as p,X as b,Y as c,H as B,dM as H,G as M,bo as G,dN as z,dO as L,Q as R}from"./index.02630f83.js";/* empty css                  */import{a as P}from"./App.caee2ce1.js";/* empty css                                  */import{C as Q}from"./chevron-up.f594beec.js";import{C as U}from"./chevron-down.cdb5b880.js";import{F as w}from"./index.db029dfb.js";import{S as X}from"./react-select.esm.401a77d8.js";import"./emotion-memoize.esm.06f0e458.js";const J=o=>{var j,h,x,y,N,l;const d=I(e=>e.salesSummaryReports),[i,m]=u.exports.useState(null);u.exports.useEffect(()=>{Y.highlightAll()},[]);const f=e=>{m(i===e?null:e)};return n(F,{children:((j=o==null?void 0:o.sales)==null?void 0:j.length)>0?p(F,{children:[p(b,{children:[n(c,{sm:"2",className:"border d-flex justify-content-center",children:"Store"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Total"}),n(c,{sm:"1",className:"border d-flex justify-content-center"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Orders"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Avg Order"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipping"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Total - Shipping"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Items"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipped"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"% Shipped"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:"Avg Days to Ship"})]}),(h=o==null?void 0:o.sales)==null?void 0:h.map((e,t)=>{var a,g,S,C,v,D,E,O,$,q;return n(F,{children:p(b,{children:[p(c,{sm:"2",className:"border",children:[e==i?n(Q,{size:24,onClick:r=>{r.preventDefault(),f(e)}}):n(U,{size:24,onClick:r=>{r.preventDefault(),f(e)}}),(S=(g=(a=d==null?void 0:d.storeOptions)==null?void 0:a.find(r=>(r==null?void 0:r.value)==(e==null?void 0:e.store_id)))==null?void 0:g.label)!=null?S:"Store not found"]}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat(e==null?void 0:e.order_total).toFixed(2)]}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:[(o==null?void 0:o.total_amount)>0?parseFloat(parseInt(e==null?void 0:e.order_total)/parseInt(o==null?void 0:o.total_amount)*100).toFixed(2):"-","%"]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:parseInt(e==null?void 0:e.order_count)}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",(o==null?void 0:o.order_count)>0?parseFloat(parseInt(e==null?void 0:e.order_total)/parseInt(e==null?void 0:e.order_count)).toFixed(2):"-"]}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat(e==null?void 0:e.shipping_total).toFixed(2)]}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat(parseFloat(e==null?void 0:e.order_total)-parseFloat(e==null?void 0:e.shipping_total)).toFixed(2)]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:(C=e==null?void 0:e.item)==null?void 0:C.reduce((r,s)=>r+parseInt(s==null?void 0:s.item_qty),0)}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:(v=e==null?void 0:e.item)==null?void 0:v.reduce((r,s)=>r+parseInt(s==null?void 0:s.shipped),0)}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:[parseFloat(parseInt((D=e==null?void 0:e.item)==null?void 0:D.reduce((r,s)=>r+parseInt(s==null?void 0:s.shipped),0))/parseInt((E=e==null?void 0:e.item)==null?void 0:E.reduce((r,s)=>r+parseInt(s==null?void 0:s.item_qty),0))*100).toFixed(2),"%"]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:parseFloat(parseInt((O=e==null?void 0:e.item)==null?void 0:O.reduce((r,s)=>r+parseInt(s==null?void 0:s.ship_days),0))/parseInt(($=e==null?void 0:e.item)==null?void 0:$.reduce((r,s)=>r+parseInt(s==null?void 0:s.shipped),0))).toFixed(2)}),n(B,{isOpen:e===i,children:(q=e==null?void 0:e.item)==null?void 0:q.map((r,s)=>{var k,A;return p(b,{style:{backgroundColor:"#F5F5F5"},children:[n(c,{sm:"6",className:"border d-flex justify-content-center",children:r==null?void 0:r.header}),p(c,{sm:"2",className:"border d-flex justify-content-center",children:["(",parseFloat(parseInt(r==null?void 0:r.item_qty)/parseInt((k=e==null?void 0:e.item)==null?void 0:k.reduce((T,_)=>T+parseInt(_==null?void 0:_.item_qty),0))*100).toFixed(2),"%)"]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:r==null?void 0:r.item_qty}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:r==null?void 0:r.shipped}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:[parseFloat(parseInt(r==null?void 0:r.shipped)/parseInt(r==null?void 0:r.item_qty)*100).toFixed(2),"%"]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:(A=parseFloat(parseInt(r==null?void 0:r.ship_days)/parseInt(r==null?void 0:r.shipped)).toFixed(2))!=null?A:"-"})]})})})]},t)})}),p(b,{className:"mb-1",children:[n(c,{sm:"2",className:"border d-flex justify-content-center",children:"Total:"}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat((x=o==null?void 0:o.sales)==null?void 0:x.reduce((e,t)=>e+parseFloat(t==null?void 0:t.order_total),0)).toFixed(2)]}),n(c,{sm:"1",className:"border d-flex justify-content-center"}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:(y=o==null?void 0:o.sales)==null?void 0:y.reduce((e,t)=>e+parseInt(t==null?void 0:t.order_count),0)}),n(c,{sm:"1",className:"border d-flex justify-content-center"}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat((N=o==null?void 0:o.sales)==null?void 0:N.reduce((e,t)=>e+parseFloat(t==null?void 0:t.shipping_total),0)).toFixed(2)]}),p(c,{sm:"1",className:"border d-flex justify-content-center",children:["$",parseFloat((l=o==null?void 0:o.sales)==null?void 0:l.reduce((e,t)=>e+parseFloat(t==null?void 0:t.order_total)-parseFloat(t==null?void 0:t.shipping_total),0)).toFixed(2)]}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:o.sales.reduce((e,t)=>(t.item.forEach(a=>{a.shipped&&(e+=parseInt(a.item_qty))}),e),0)}),n(c,{sm:"1",className:"border d-flex justify-content-center",children:o.sales.reduce((e,t)=>(t.item.forEach(a=>{a.shipped&&(e+=parseInt(a.shipped))}),e),0)}),n(c,{sm:"2",className:"border d-flex justify-content-center"})]})]}):n("span",{className:"d-flex justify-content-center",children:"No data Found"})})},K=()=>{var x,y,N;const o=P(),d=I(l=>l.salesSummaryReports),[i,m]=u.exports.useState(!1),f=d==null?void 0:d.searchParams;u.exports.useEffect(()=>{o(H())},[]);const j=async()=>{m(!0),await o(z()),m(!1)},h=l=>{o(L(l))};return p(b,{className:"mb-1",children:[n(c,{sm:"4",children:n(X,{placeholder:"Select Store",options:d==null?void 0:d.storeOptions,value:(x=d==null?void 0:d.storeOptions)==null?void 0:x.filter(l=>{var e;return(e=f==null?void 0:f.store_ids)==null?void 0:e.includes(l==null?void 0:l.value)}),onChange:l=>h({store_ids:l==null?void 0:l.map(e=>e==null?void 0:e.value)}),isMulti:!0})}),n(c,{sm:"3",children:n(w,{className:"form-control",id:"start_date",placeholder:"Enter Start Date",value:(y=f==null?void 0:f.start_date)!=null?y:null,options:{dateFormat:"d-m-Y"},onChange:l=>h({start_date:l[0]})})}),n(c,{sm:"3",children:n(w,{className:"form-control",id:"end_date",placeholder:"Enter End Date",value:(N=f==null?void 0:f.end_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:l=>h({end_date:l[0]})})}),n(c,{sm:"2",className:"d-flex justify-content-center",children:n(M,{color:"primary",onClick:j,disabled:i,children:i?p(F,{children:[n(G,{className:"me-25",size:"sm"})," Searching"]}):"Search"})})]})},se=()=>{const o=P(),d=I(i=>i.salesSummaryReports);return u.exports.useEffect(()=>{d!=null&&d.params&&o(z())},[d==null?void 0:d.params]),n("div",{className:"app-user-list",children:p(u.exports.Fragment,{children:[n(R,{className:"p-2",children:K()}),n(R,{className:"p-2",children:J(d==null?void 0:d.data)})]})})};export{se as default};
