import{j as e,a as y,r as l,S as N,f as n,W as g,Y as b,Z as r,a$ as v,ac as S,ad as _,ae as i,N as I,o as C,b0 as D}from"./index.b5767533.js";import{h as E}from"./moment.4d75c86c.js";import{a as G}from"./App.bf73fcbb.js";const T=()=>e("div",{children:"ReturnedShipments"}),A=()=>e("div",{children:"Incompatible"}),M=()=>e("div",{children:"PaymentHolds"}),Y=()=>{const{data:o}=y(d=>d.createGraphics);return console.log("\u{1F680} ~ file: Summary.js:6 ~ Summary ~ store:",o),e(l.exports.Fragment,{children:e(N,{children:n(g,{children:[n(b,{className:"border",children:[e(r,{sm:"4",className:"border d-flex justify-content-center",children:E().format("MMM DD, YYYY, hh:mm A")}),e(r,{sm:"2",className:"border d-flex justify-content-center",children:"Totals"}),e(r,{sm:"3",className:"border d-flex justify-content-center",children:"Order Date Aging"}),e(r,{sm:"3",className:"border d-flex justify-content-center",children:"Scan Date Aging"})]}),n(b,{children:[e(r,{sm:"1",className:"border d-flex justify-content-center",children:"Station"}),e(r,{sm:"3",className:"border d-flex justify-content-center",children:"Description"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"lines"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"Qty"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"0-3"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"4-7"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"7+"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"0-3"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"4-7"}),e(r,{sm:"1",className:"border d-flex justify-content-center",children:"7+"})]})]})})})},k=()=>e("div",{children:"CSRejects"}),R=()=>{var m,h,f,u;const o=G(),{data:d,active:s,total:t}=y(a=>a==null?void 0:a.createGraphics),j=a=>{s!==a&&o(D(a))};l.exports.useEffect(()=>{o(v({tab:s}))},[s]);const c=({text:a,total:p,tab:x})=>e(I,{children:n(C,{active:s===x,onClick:()=>{j(x)},children:[a,p!=null?`(${p})`:null]})});return e(l.exports.Fragment,{children:n(N,{className:"p-1",children:[n(S,{pills:!0,className:"mb-2 orange",children:[e(c,{text:"Summary",tab:"summary"}),e(c,{text:"To Export",total:(m=t==null?void 0:t.rejects)!=null?m:0,tab:"to_export"}),e(c,{text:"Exported Waiting for Graphics",total:(h=t==null?void 0:t.backorder)!=null?h:0,tab:"exported_waiting_for_graphics"}),e(c,{text:"Graphics Error",total:(f=t==null?void 0:t.reship)!=null?f:0,tab:"graphics_error"}),e(c,{text:"Manual",total:(u=t==null?void 0:t.incompatible)!=null?u:0,tab:"manual"})]}),n(_,{activeTab:s,children:[e(i,{tabId:"summary",children:e(Y,{data:d})}),e(i,{tabId:"to_export",children:e(k,{data:d})}),e(i,{tabId:"exported_waiting_for_graphics",children:e(T,{})}),e(i,{tabId:"graphics_error",children:e(A,{})}),e(i,{tabId:"manual",children:e(M,{})})]})]})})};export{R as default};
