import{k as F,r as j,a as M,j as n,Q,f as d,V as R,Y as a,Z as c,a1 as P,G as l,I as T,bM as Y,bN as G}from"./index.db14b012.js";import{a as L}from"./App.c9615b80.js";const V=()=>{var m,u,_,p,v,b,y,g,S,f,x;const i=L(),I=F(),[s,h]=j.exports.useState(!1),{showData:r,searchParams:t}=M(e=>e.moveToProductions),N=async()=>{var o;h(!0);const e=await i(Y());(o=e==null?void 0:e.payload)!=null&&o.status||I("/move-to-production"),h(!1)},q=e=>{i(G(e))};return n(j.exports.Fragment,{children:n(Q,{children:d(R,{children:[d(a,{className:"mb-1",children:[n(c,{md:"3",children:n(P,{placeholder:"Search for Second",value:t==null?void 0:t.scan_batches,onChange:e=>{var o;return q({scan_batches:(o=e==null?void 0:e.target)==null?void 0:o.value})}})}),n(c,{md:"2",children:n(l,{color:"primary",onClick:N,disabled:s,children:s?"Please Wait...":"Show Batch"})}),n(c,{md:"7"})]}),(r==null?void 0:r.to_move)&&d("div",{children:[d(a,{children:[n(c,{md:"3",children:d("h4",{children:["Batch ",(m=r==null?void 0:r.to_move)==null?void 0:m.batch_number]})}),n(c,{md:"6",children:d("h3",{children:["Moved to ",(_=(u=r==null?void 0:r.to_move)==null?void 0:u.station)==null?void 0:_.station_description]})}),n(c,{md:"3",children:(p=r==null?void 0:r.to_move)!=null&&p.summary_date?n("div",{children:n(l,{color:"primary",onClick:()=>console.log("Under developed"),children:"Print Summary"})}):d("div",{children:["Summary Printed by"," ",(b=(v=r==null?void 0:r.to_move)==null?void 0:v.summary_user)==null?void 0:b.username," ",n("br",{}),(y=r==null?void 0:r.to_move)==null?void 0:y.summary_date]})})]}),n("hr",{})]}),((S=(g=r==null?void 0:r.to_move)==null?void 0:g.items)==null?void 0:S.length)>0&&n(a,{children:(x=(f=r==null?void 0:r.to_move)==null?void 0:f.items)==null?void 0:x.map((e,o)=>{var C,k,B;return d(T,{children:[n(c,{md:"1",children:d("span",{children:[n("img",{src:e==null?void 0:e.item_thumb,width:"90",height:"90"}),n("br",{}),"Order# ",(C=e==null?void 0:e.order)==null?void 0:C.short_order,n("br",{}),"Sku# ",(B=(k=r==null?void 0:r.to_move)==null?void 0:k.items[0])==null?void 0:B.child_sku]})}),d(c,{md:"2",children:[(e==null?void 0:e.item_quantity)!=1&&d("span",{children:[d("b",{children:["QTY: ",e==null?void 0:e.item_quantity]}),n("br",{})]}),n(l,{color:"primary",children:"Reject Item"})]}),n(c,{md:"3",children:n(P,{type:"textarea",row:"4"})})]})})})]})})})};export{V as default};