import{r as i,a as F,b_ as U,b$ as L,c0 as M,j as c,f as n,Q as R,S as y,V as j,X as d,Y as l,c1 as k,G as w,L as E,br as $}from"./index.3c92940a.js";import{a as A}from"./App.1e2e16c3.js";import{h as B}from"./moment.4d75c86c.js";import{S as P}from"./react-select.esm.d0f99a9a.js";import"./emotion-memoize.esm.06f0e458.js";const W=()=>{const t=A(),[e,o]=i.exports.useState(!1),{data:h,searchParams:b,storeOptions:p,statusOptions:u}=F(a=>a.mustShipReport);i.exports.useEffect(()=>{t(U()),t(L()),N()},[]);const N=async()=>{o(!0),await t(M()),o(!1)};return c(i.exports.Fragment,{children:n(R,{children:[c(y,{children:c("h4",{className:"card-title",children:"Must Ship Report"})}),n(j,{children:[n(d,{className:"mb-1",children:[c(l,{md:"7"}),c(l,{md:"3",children:c(P,{className:"react-select",classNamePrefix:"select",placeholder:"Select Store",options:p,value:p==null?void 0:p.find(a=>a.value===(b==null?void 0:b.store_id)),onChange:a=>{t(k({store_id:a==null?void 0:a.value}))},isDisabled:e})}),c(l,{md:"2",children:c(w,{color:"primary",onClick:N,disabled:e,children:e?"Please Wait...":"Filter by Store"})})]}),(h==null?void 0:h.length)>0?c("div",{children:h==null?void 0:h.map((a,m)=>{var S,_,r,f;return n("div",{children:[n(d,{className:"bg-info",children:[n(l,{md:"1",className:"p-1 border",children:["Ship ",B(a==null?void 0:a.ship_date).format("MMM-DD")]}),c(l,{md:"2",className:"p-1 border",children:c(E,{to:`/customer-order-edit/${a==null?void 0:a.id}`,className:"text-danger",children:a==null?void 0:a.short_order})}),c(l,{md:"5",className:"p-1 border",children:a!=null&&a.store?(S=a==null?void 0:a.store)==null?void 0:S.store_name:`STORE ${a==null?void 0:a.store_id} NOT FOUND`}),c(l,{md:"2",className:"p-1 border",children:a!=null&&a.customer?(_=a==null?void 0:a.customer)==null?void 0:_.ship_full_name:"CUSTOMER NOT FOUND"}),c(l,{md:"2",className:"p-1 border",children:(r=u==null?void 0:u.find(s=>(s==null?void 0:s.value)==(a==null?void 0:a.order_status)).label)!=null?r:"STATUS NOT FOUND"})]},m),(f=a==null?void 0:a.items)==null?void 0:f.map((s,v)=>{var g,x,D,O,C,T;return n(d,{children:[c(l,{md:"1",className:"p-1 border"}),c(l,{md:"2",className:"p-1 border",children:c("img",{src:s==null?void 0:s.item_thumb,alt:"image",width:"50"})}),c(l,{md:"5",className:"p-1 border",children:s==null?void 0:s.item_description}),c(l,{md:"2",className:"p-1 border",children:(s==null?void 0:s.batch_number)!="0"?s==null?void 0:s.batch_number:"Unbatched"}),n(l,{md:"2",className:"p-1 border",children:[(s==null?void 0:s.batch)&&((g=s==null?void 0:s.batch)==null?void 0:g.station)&&(s==null?void 0:s.item_status)=="production"?((D=(x=s==null?void 0:s.batch)==null?void 0:x.station)==null?void 0:D.station_name)+" => "+((C=(O=s==null?void 0:s.batch)==null?void 0:O.station)==null?void 0:C.station_description):s==null?void 0:s.item_status,c("br",{}),"Last Scan: ",(T=s==null?void 0:s.batch)==null?void 0:T.change_date]})]},v)})]})})}):c(d,{children:c(l,{md:"12",children:c("h4",{className:"text-center",children:e?n("span",{children:[c($,{size:"sm"}),"Data Loading"]}):"No Data Found"})})})]})]})})};export{W as default};
