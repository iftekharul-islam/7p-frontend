import{j as i,S as h,f as m,H as D,b1 as H,a as Y,r as W,b2 as j,ac as C,ad as R,ae as c,N as T,o as q,b3 as B}from"./index.b5767533.js";/* empty css                                  */import{h as p}from"./moment.4d75c86c.js";import{Q as r}from"./index.es.631532c0.js";import{a as S}from"./App.bf73fcbb.js";import"./emotion-memoize.esm.06f0e458.js";const O=({data:a})=>i(h,{className:"overflow-hidden",children:i("div",{className:"react-dataTable",children:i(r,{striped:!0,responsive:!0,columns:[{name:"Order",minWidth:"20px",selector:n=>n==null?void 0:n.qty,cell:n=>i("div",{children:n==null?void 0:n.qty})},{name:"Date",minWidth:"300px",selector:n=>n==null?void 0:n.stock_name_discription,cell:n=>i("div",{children:n==null?void 0:n.stock_name_discription})},{name:"Customer",minWidth:"120px",selector:n=>n==null?void 0:n.min_date,cell:n=>i("div",{children:p(n==null?void 0:n.min_date).format("DD-MM-YYYY")})},{name:"Item",minWidth:"120px",selector:n=>n==null?void 0:n.stock_no_unique,cell:n=>i("div",{children:n==null?void 0:n.stock_no_unique})}],className:"react-dataTable",data:a})})}),A=()=>i("div",{children:"BadAddress"}),M=({data:a})=>i(h,{className:"overflow-hidden",children:i("div",{className:"react-dataTable",children:i(r,{striped:!0,responsive:!0,columns:[{name:"Quantity",minWidth:"20px",selector:n=>n==null?void 0:n.qty,cell:n=>i("div",{children:n==null?void 0:n.qty})},{name:"Description",minWidth:"300px",selector:n=>n==null?void 0:n.stock_name_discription,cell:n=>i("div",{children:n==null?void 0:n.stock_name_discription})},{name:"First Order Date",minWidth:"120px",selector:n=>n==null?void 0:n.min_date,cell:n=>i("div",{children:p(n==null?void 0:n.min_date).format("DD-MM-YYYY")})},{name:"Inventory Item",minWidth:"120px",selector:n=>n==null?void 0:n.stock_no_unique,cell:n=>i("div",{children:n==null?void 0:n.stock_no_unique})}],className:"react-dataTable",data:a})})}),P=()=>i("div",{children:"CSRejects"}),L=()=>i("div",{children:"Incompatible"}),Q=({data:a})=>{const t=S();return i(h,{className:"overflow-hidden",children:i("div",{className:"react-dataTable",children:i(r,{striped:!0,responsive:!0,columns:[{name:"Order",minWidth:"120px",selector:e=>e==null?void 0:e.short_order,cell:e=>m("div",{children:[i("div",{children:e==null?void 0:e.short_order}),i("div",{children:(e==null?void 0:e.total)==0?"Zero Payment":(e==null?void 0:e.total)<0?"Low Payment":null})]})},{name:"Order Date",minWidth:"80px",selector:e=>e==null?void 0:e.order_date,cell:e=>i("div",{children:p(e==null?void 0:e.order_date).format("DD-MM-YYYY")})},{name:"Store",minWidth:"120px",selector:e=>e==null?void 0:e.store,cell:e=>{var d,s;return i("div",{children:((d=e==null?void 0:e.store)==null?void 0:d.store_id)!=52053152?(s=e==null?void 0:e.store)==null?void 0:s.store_name:null})}},{name:"Hold Reason",minWidth:"150px",selector:e=>e==null?void 0:e.hold_reason,cell:e=>{var d;return i("div",{children:(e==null?void 0:e.hold_reason)&&((d=e==null?void 0:e.hold_reason)==null?void 0:d.note_text.replace("OH: Reason - ",""))})}},{name:"Customer Name",minWidth:"120px",selector:e=>e==null?void 0:e.customer,cell:e=>{var d,s;return m("div",{children:[(d=e==null?void 0:e.customer)==null?void 0:d.ship_first_name," ",(s=e==null?void 0:e.customer)==null?void 0:s.ship_last_name]})}},{name:"Items",minWidth:"300px",selector:e=>e==null?void 0:e.items,cell:e=>{var d;(d=e==null?void 0:e.items)==null||d.map(s=>m("div",{children:[s==null?void 0:s.child_sku," - ",e==null?void 0:e.item_description]}))}},{name:"Action",minWidth:"240px",selector:e=>e==null?void 0:e.id,cell:e=>i("div",{children:i(D,{className:"btn btn-info",onClick:()=>{t(H({tab:"other",order_5p:e==null?void 0:e.id}))},children:"Release Other Hold"})})}],className:"react-dataTable",data:a})})})},U=()=>i("div",{children:"PaymentHolds"}),$=()=>i("div",{children:"ReturnedShipments"}),F=()=>i("div",{children:"ShippingHolds"}),E=()=>i("div",{children:"UpdateLog"}),X=()=>{var u,v,_,b,x,k,I,N,f;const a=S(),{data:t,active:n,total:e}=Y(l=>l==null?void 0:l.customerServices),d=l=>{n!==l&&a(B(l))};W.exports.useEffect(()=>{a(j({tab:n}))},[n]);const s=(l,y,g)=>i(T,{children:m(q,{active:n===g,onClick:()=>{d(g)},children:[l,y!=null?`(${y})`:null]})});return i(W.exports.Fragment,{children:m(h,{className:"p-1",children:[m(C,{pills:!0,className:"mb-2 orange",children:[s("Bad Addresses",(u=e==null?void 0:e.address)!=null?u:0,"address"),s("CS Rejects",(v=e==null?void 0:e.rejects)!=null?v:0,"rejects"),s("Backorders",(_=e==null?void 0:e.backorder)!=null?_:0,"backorder"),s("Returned Shipments",(b=e==null?void 0:e.reship)!=null?b:0,"reship"),s("Incompatible",(x=e==null?void 0:e.incompatible)!=null?x:0,"incompatible"),s("Payment Holds",(k=e==null?void 0:e.payment)!=null?k:0,"payment"),s("Shipping Holds",(I=e==null?void 0:e.shipping)!=null?I:0,"shipping"),s("Other Holds",(N=e==null?void 0:e.other)!=null?N:0,"other"),s("Update Log",null,"updates")]}),m(R,{activeTab:n,children:[i(c,{tabId:"address",children:i(A,{data:t})}),i(c,{tabId:"backorder",children:((f=t==null?void 0:t.backorders)==null?void 0:f.length)>0?i(O,{data:t==null?void 0:t.backorders}):i(M,{data:t==null?void 0:t.bo_summary})}),i(c,{tabId:"rejects",children:i(P,{data:t})}),i(c,{tabId:"reship",children:i($,{})}),i(c,{tabId:"incompatible",children:i(L,{})}),i(c,{tabId:"payment",children:i(U,{})}),i(c,{tabId:"shipping",children:i(F,{})}),i(c,{tabId:"other",children:i(Q,{data:t})}),i(c,{tabId:"updates",children:i(E,{})})]})]})})};export{X as default};
