import{a as _,r as h,dL as i,dM as k,j as r,f as o,Q as S,S as P,V as v,Y as p,Z as s,G as F,I as T,bk as D,L as a}from"./index.22eb8bd8.js";import{a as L}from"./App.68a66c55.js";import{S as B}from"./react-select.esm.579d0190.js";import"./emotion-memoize.esm.06f0e458.js";const G=()=>{var b,m,N,j,g,C;const t=L(),{data:n,printerOptions:u,loading:f}=_(e=>e==null?void 0:e.sentToPrinter),[y,x]=h.exports.useState(null);h.exports.useEffect(()=>{t(i()),t(k())},[]);const d=(e,c,l)=>{e.preventDefault(),x(c==null?void 0:c.to_printer),t(i({printer:c==null?void 0:c.to_printer,date:l}))};return r(h.exports.Fragment,{children:o(S,{className:"p-1",children:[r(P,{children:r("h4",{children:"Sent to Printer"})}),o(v,{children:[o(p,{children:[r(s,{sm:"4",children:r(B,{className:"react-select",classNamePrefix:"react-select",options:u,value:u==null?void 0:u.find(e=>(e==null?void 0:e.value)===y),onChange:e=>{x(e==null?void 0:e.value)}})}),r(s,{sm:"2",children:r(F,{color:"primary",onClick:()=>{t(i({printer:y}))},disabled:f,children:f?o(T,{children:[r(D,{size:"sm"}),"Filtering..."]}):"Filter"})})]}),((b=n==null?void 0:n.summary)==null?void 0:b.length)>0&&o("span",{children:[o(p,{className:"mt-1",children:[r(s,{sm:"2",className:"border py-1",children:"Sent To:"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"0-3 days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"4-7 days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"7+ days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"Total"})]}),(m=n==null?void 0:n.summary)==null?void 0:m.map((e,c)=>o(p,{children:[r(s,{sm:"2",className:"border py-1",children:r(a,{onClick:l=>d(l,e,null),children:e==null?void 0:e.to_printer})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(a,{onClick:l=>d(l,e,1),children:e==null?void 0:e.group_1})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(a,{onClick:l=>d(l,e,2),children:e==null?void 0:e.group_2})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(a,{onClick:l=>d(l,e,3),children:e==null?void 0:e.group_3})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(a,{onClick:l=>d(l,e,null),children:e==null?void 0:e.batch_count})})]},c)),o(p,{children:[r(s,{sm:"2",className:"border py-1",children:"Total"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(N=n==null?void 0:n.summary)==null?void 0:N.reduce(function(e,c){return e+c.group_1},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(j=n==null?void 0:n.summary)==null?void 0:j.reduce(function(e,c){return e+c.group_2},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(g=n==null?void 0:n.summary)==null?void 0:g.reduce(function(e,c){return e+c.group_3},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(C=n==null?void 0:n.summary)==null?void 0:C.reduce(function(e,c){return e+c.batch_count},0)})]})]})]})]})})};export{G as default};
