import{a as x,r as h,cd as v,j as s,I as f,f as t,Y as i,Z as c,ce as F,G as I,cf as _,cg as D,Q as b}from"./index.22eb8bd8.js";/* empty css                  */import{a as C}from"./App.68a66c55.js";/* empty css                                  */import{F as m}from"./index.2b46e6e7.js";import{S}from"./react-select.esm.579d0190.js";import"./emotion-memoize.esm.06f0e458.js";const E=a=>{var r,o;return x(e=>e.shipDateReports),h.exports.useState(null),h.exports.useEffect(()=>{v.highlightAll()},[]),s(f,{children:((r=a==null?void 0:a.shipped_today)==null?void 0:r.length)>0?t(f,{children:[t(i,{style:{backgroundColor:"#f7eaea"},children:[s(c,{sm:"6",className:"border d-flex justify-content-center",children:"Product"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Items"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipped"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Shipped"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Average Days to Ship"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Max Days to Ship"}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:"Rejects"})]}),(o=a==null?void 0:a.items)==null?void 0:o.map((e,l)=>{var p;return s(f,{children:t(i,{children:[s(c,{sm:"1",className:"border",children:s("img",{src:e==null?void 0:e.product_thumb,height:60})}),s(c,{sm:"2",className:"border",children:e==null?void 0:e.item_code}),s(c,{sm:"3",className:"border",children:e==null?void 0:e.product_name}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.item_qty}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.shipped}),t(c,{sm:"1",className:"border d-flex justify-content-center",children:[paseFloat(parseInt(e==null?void 0:e.shipped)/parseInt(e==null?void 0:e.item_qty)*100).toFixed(2),"%"]}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:parseInt(e==null?void 0:e.ship_day)/parseInt(e==null?void 0:e.shipped)}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:e==null?void 0:e.maxdays}),s(c,{sm:"1",className:"border d-flex justify-content-center",children:(p=e==null?void 0:e.rejects)==null?void 0:p.count})]},l)})})]}):s("span",{className:"d-flex justify-content-center",children:"No data Found"})})},R=()=>{var y,N,g,j;const a=C(),r=x(n=>n.orderItemsReports),[o,e]=h.exports.useState(!1),l=r==null?void 0:r.searchParams;console.log("\u{1F680} ~ file: CustomHeader.js:16 ~ CustomHeader ~ params:",l),h.exports.useEffect(()=>{a(F())},[]);const p=async()=>{e(!0),await a(_()),e(!1)},u=n=>{a(D(n))};return t(i,{className:"mb-1",children:[s(c,{sm:"3",children:s(S,{placeholder:"Select Store",options:r==null?void 0:r.storeOptions,value:(y=r==null?void 0:r.storeOptions)==null?void 0:y.filter(n=>{var d;return(d=l==null?void 0:l.store_ids)==null?void 0:d.includes(n==null?void 0:n.value)}),onChange:n=>u({store_ids:n==null?void 0:n.map(d=>d==null?void 0:d.value)}),isMulti:!0})}),s(c,{sm:"3",children:s(m,{className:"form-control",id:"start_date",placeholder:"Enter Start Date",value:(N=l==null?void 0:l.start_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:n=>u({start_date:n[0]})})}),s(c,{sm:"3",children:s(m,{className:"form-control",id:"end_date",placeholder:"Enter End Date",value:(g=l==null?void 0:l.end_date)!=null?g:null,options:{dateFormat:"d-m-Y"},onChange:n=>u({end_date:n[0]})})}),s(c,{sm:"1",children:s(S,{placeholder:"Results",options:r==null?void 0:r.resultOptions,value:(j=r==null?void 0:r.resultOptions)==null?void 0:j.find(n=>(n==null?void 0:n.value)==(l==null?void 0:l.limit)),onChange:n=>u({limit:n==null?void 0:n.value})})}),s(c,{sm:"2",className:"justify-content-center",children:s(I,{color:"primary",onClick:p,disabled:o,children:o?"Searching":"Search"})})]})},w=()=>{const a=C(),r=x(o=>o.orderItemsReports);return h.exports.useEffect(()=>{r!=null&&r.params&&a(_())},[r==null?void 0:r.params]),s("div",{className:"app-user-list",children:t(h.exports.Fragment,{children:[s(b,{className:"p-2",children:R()}),s(b,{className:"p-2",children:E(r==null?void 0:r.data)})]})})};export{w as default};
