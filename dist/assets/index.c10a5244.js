import{a as x,r as h,ck as v,j as s,I as f,f as d,X as i,Y as c,cl as F,G as I,cm as _,cn as D,Q as g}from"./index.7b5cc304.js";/* empty css                  */import{a as C}from"./App.1dc6cdc7.js";/* empty css                                  */import{F as m}from"./index.be867ef4.js";import{S}from"./react-select.esm.51e2a912.js";import"./emotion-memoize.esm.06f0e458.js";const E=a=>{var r,o;return x(e=>e.shipDateReports),h.exports.useState(null),h.exports.useEffect(()=>{v.highlightAll()},[]),s(f,{children:((r=a==null?void 0:a.shipped_today)==null?void 0:r.length)>0?d(f,{children:[d(i,{style:{backgroundColor:"#f7eaea"},children:[s(c,{sm:"6",className:"border d-flex justify-content-center",children:"Product"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Items"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipped"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipped"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Average Days to Ship"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Max Days to Ship"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Rejects"})]}),(o=a==null?void 0:a.items)==null?void 0:o.map((e,l)=>{var p;return s(f,{children:d(i,{children:[s(c,{sm:"1",className:"border",children:s("img",{src:e==null?void 0:e.product_thumb,height:60})}),s(c,{sm:"2",className:"border",children:e==null?void 0:e.item_code}),s(c,{sm:"3",className:"border",children:e==null?void 0:e.product_name}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.item_qty}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.shipped}),d(c,{sm:"1",className:"border d-flex justify-content-center",children:[paseFloat(parseInt(e==null?void 0:e.shipped)/parseInt(e==null?void 0:e.item_qty)*100).toFixed(2),"%"]}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:parseInt(e==null?void 0:e.ship_day)/parseInt(e==null?void 0:e.shipped)}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.maxdays}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:(p=e==null?void 0:e.rejects)==null?void 0:p.count})]},l)})})]}):s("span",{className:"d-flex justify-content-center",children:"No data Found"})})},R=()=>{var y,N,j,b;const a=C(),r=x(n=>n.orderItemsReports),[o,e]=h.exports.useState(!1),l=r==null?void 0:r.searchParams;console.log("\u{1F680} ~ file: CustomHeader.js:16 ~ CustomHeader ~ params:",l),h.exports.useEffect(()=>{a(F())},[]);const p=async()=>{e(!0),await a(_()),e(!1)},u=n=>{a(D(n))};return d(i,{className:"mb-1",children:[s(c,{sm:"3",children:s(S,{placeholder:"Select Store",options:r==null?void 0:r.storeOptions,value:(y=r==null?void 0:r.storeOptions)==null?void 0:y.filter(n=>{var t;return(t=l==null?void 0:l.store_ids)==null?void 0:t.includes(n==null?void 0:n.value)}),onChange:n=>u({store_ids:n==null?void 0:n.map(t=>t==null?void 0:t.value)}),isMulti:!0})}),s(c,{sm:"3",children:s(m,{className:"form-control",id:"start_date",placeholder:"Enter Start Date",value:(N=l==null?void 0:l.start_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:n=>u({start_date:n[0]})})}),s(c,{sm:"3",children:s(m,{className:"form-control",id:"end_date",placeholder:"Enter End Date",value:(j=l==null?void 0:l.end_date)!=null?j:null,options:{dateFormat:"d-m-Y"},onChange:n=>u({end_date:n[0]})})}),s(c,{sm:"1",children:s(S,{placeholder:"Results",options:r==null?void 0:r.resultOptions,value:(b=r==null?void 0:r.resultOptions)==null?void 0:b.find(n=>(n==null?void 0:n.value)==(l==null?void 0:l.limit)),onChange:n=>u({limit:n==null?void 0:n.value})})}),s(c,{sm:"2",className:"justify-content-center",children:s(I,{color:"primary",onClick:p,disabled:o,children:o?"Searching":"Search"})})]})},w=()=>{const a=C(),r=x(o=>o.orderItemsReports);return h.exports.useEffect(()=>{r!=null&&r.params&&a(_())},[r==null?void 0:r.params]),s("div",{className:"app-user-list",children:d(h.exports.Fragment,{children:[s(g,{className:"p-2",children:R()}),s(g,{className:"p-2",children:E(r==null?void 0:r.data)})]})})};export{w as default};