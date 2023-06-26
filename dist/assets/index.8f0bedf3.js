import{r as i,a as v,bT as F,bU as L,bV as M,j as c,f as n,Q as R,S as k,V as y,Y as d,Z as l,bW as j,G as w,L as E,bk as A}from"./index.22eb8bd8.js";import{a as B}from"./App.68a66c55.js";import{h as P}from"./moment.4d75c86c.js";import{S as V}from"./react-select.esm.579d0190.js";import"./emotion-memoize.esm.06f0e458.js";const Q=()=>{const t=B(),[e,o]=i.exports.useState(!1),{data:h,searchParams:b,storeOptions:p,statusOptions:u}=v(a=>a.mustShipReport);i.exports.useEffect(()=>{t(F()),t(L()),N()},[]);const N=async()=>{o(!0),await t(M()),o(!1)};return c(i.exports.Fragment,{children:n(R,{children:[c(k,{children:c("h4",{className:"card-title",children:"Must Ship Report"})}),n(y,{children:[n(d,{className:"mb-1",children:[c(l,{md:"7"}),c(l,{md:"3",children:c(V,{className:"react-select",classNamePrefix:"select",placeholder:"Select Store",options:p,value:p==null?void 0:p.find(a=>a.value===(b==null?void 0:b.store_id)),onChange:a=>{t(j({store_id:a==null?void 0:a.value}))},isDisabled:e})}),c(l,{md:"2",children:c(w,{color:"primary",onClick:N,disabled:e,children:e?"Please Wait...":"Filter by Store"})})]}),(h==null?void 0:h.length)>0?c("div",{children:h==null?void 0:h.map((a,U)=>{var S,_,r,f;return n("div",{children:[n(d,{className:"bg-info",children:[n(l,{md:"1",className:"p-1 border",children:["Ship ",P(a==null?void 0:a.ship_date).format("MMM-DD")]}),c(l,{md:"2",className:"p-1 border",children:c(E,{to:`/customer-order-edit/${a==null?void 0:a.id}`,className:"text-danger",children:a==null?void 0:a.short_order})}),c(l,{md:"5",className:"p-1 border",children:a!=null&&a.store?(S=a==null?void 0:a.store)==null?void 0:S.store_name:`STORE ${a==null?void 0:a.store_id} NOT FOUND`}),c(l,{md:"2",className:"p-1 border",children:a!=null&&a.customer?(_=a==null?void 0:a.customer)==null?void 0:_.ship_full_name:"CUSTOMER NOT FOUND"}),c(l,{md:"2",className:"p-1 border",children:(r=u==null?void 0:u.find(s=>(s==null?void 0:s.value)==(a==null?void 0:a.order_status)).label)!=null?r:"STATUS NOT FOUND"})]},U),(f=a==null?void 0:a.items)==null?void 0:f.map((s,m)=>{var g,x,D,O,T,C;return n(d,{children:[c(l,{md:"1",className:"p-1 border"}),c(l,{md:"2",className:"p-1 border",children:c("img",{src:s==null?void 0:s.item_thumb,alt:"image",width:"50"})}),c(l,{md:"5",className:"p-1 border",children:s==null?void 0:s.item_description}),c(l,{md:"2",className:"p-1 border",children:(s==null?void 0:s.batch_number)!="0"?s==null?void 0:s.batch_number:"Unbatched"}),n(l,{md:"2",className:"p-1 border",children:[(s==null?void 0:s.batch)&&((g=s==null?void 0:s.batch)==null?void 0:g.station)&&(s==null?void 0:s.item_status)=="production"?((D=(x=s==null?void 0:s.batch)==null?void 0:x.station)==null?void 0:D.station_name)+" => "+((T=(O=s==null?void 0:s.batch)==null?void 0:O.station)==null?void 0:T.station_description):s==null?void 0:s.item_status,c("br",{}),"Last Scan: ",(C=s==null?void 0:s.batch)==null?void 0:C.change_date]})]},m)})]})})}):c(d,{children:c(l,{md:"12",children:c("h4",{className:"text-center",children:e?n("span",{children:[c(A,{size:"sm"}),"Data Loading"]}):"No Data Found"})})})]})]})})};export{Q as default};
