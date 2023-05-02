import{j as i,r as a,Q as z,aB as T,a as q,b_ as E,Y as p,$ as C,Z as n,f as s,S as Q,T as j,V as B}from"./index.545d534b.js";import{Q as R}from"./index.es.38db67f2.js";import{a as V}from"./App.979e7298.js";/* empty css                                  */import"./emotion-memoize.esm.06f0e458.js";const G=[{name:"SKU",sortable:!1,minWidth:"120px",sortField:"vendor_sku",selector:e=>e.vendor_sku,cell:e=>i("span",{children:e.vendor_sku})},{name:"Stock#",sortable:!1,minWidth:"120px",sortField:"stock_no",selector:e=>e.stock_no,cell:e=>i("span",{children:e.stock_no})},{name:"Product",sortable:!1,minWidth:"300px",sortField:"vendor_sku_name",selector:e=>e.vendor_sku_name,cell:e=>i("span",{className:e.vendor_sku_name=="Grand Total"?"fw-bolder":"",children:e.vendor_sku_name})},{name:"Quantity",sortable:!1,minWidth:"120px",sortField:"quantity",selector:e=>e.quantity,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.quantity})},{name:"Price",sortable:!1,minWidth:"80px",sortField:"price",selector:e=>e.price,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.price})},{name:"Subtotal",sortable:!1,minWidth:"120px",sortField:"sub_total",selector:e=>e.sub_total,cell:e=>{var l;return i("span",{className:"text-capitalize",children:(l=parseFloat(e==null?void 0:e.sub_total))==null?void 0:l.toFixed(2)})}},{name:"Eta",sortable:!1,minWidth:"120px",sortField:"eta",selector:e=>e.eta,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.eta})},{name:"	Date Received",sortable:!1,minWidth:"150px",sortField:"receive_date",selector:e=>e.receive_date,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.receive_date})},{name:"Received",sortable:!1,minWidth:"100px",sortField:"sub_total",selector:e=>e.receive_quantity,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.receive_quantity})},{name:"Balance",sortable:!1,minWidth:"100px",sortField:"sub_total",selector:e=>e.balance_quantity,cell:e=>i("span",{className:"text-capitalize",children:e==null?void 0:e.balance_quantity})}],H=({data:e,total:l})=>{const r=[];return e==null||e.forEach(d=>{r==null||r.push(d)}),r==null||r.push({vendor_sku_name:"Grand Total",sub_total:l}),i("div",{className:"app-user-list",children:i(a.exports.Fragment,{children:i(z,{className:"overflow-hidden",children:i("div",{className:"react-dataTable",children:i(R,{subHeader:!0,responsive:!0,columns:G,className:"react-dataTable",data:r})})})})})},M=()=>{var u,v,_,x,b,f,F,k,N,y,g,W;const{id:e}=T(),[l,r]=a.exports.useState({grand_total:0}),[d,P]=a.exports.useState([{}]),S=V(),c=q(t=>t.purchaseOrders);return a.exports.useEffect(()=>{S(E(e))},[]),a.exports.useEffect(()=>{var o,h;r({...l,...c==null?void 0:c.order});const t=(h=(o=c==null?void 0:c.order)==null?void 0:o.products)==null?void 0:h.map(m=>({...m,unit_price:m==null?void 0:m.price}));P(t)},[c==null?void 0:c.order]),a.exports.useEffect(()=>{let t=0;d==null||d.forEach(o=>{var h;t=parseFloat(t)+parseFloat((h=o==null?void 0:o.sub_total)!=null?h:0)}),r({...l,grand_total:t.toFixed(2)})},[d]),i(a.exports.Fragment,{children:i(p,{children:i(C,{children:i(n,{sm:"12",children:s(z,{children:[i(Q,{children:s(j,{tag:"h4",children:["Purchase Product - ",l==null?void 0:l.po_number]})}),s(B,{children:[s(p,{children:[i(n,{sm:"5",children:s(p,{children:[s(n,{sm:"4",children:[i("div",{children:"Vendor Name"}),i("div",{children:"Vendor Email"}),i("div",{children:"Phone Number"}),i("div",{children:"Zip Code"})]}),s(n,{sm:"1",children:[i("div",{children:":"}),i("div",{children:":"}),i("div",{children:":"}),i("div",{children:":"})]}),s(n,{sm:"7",children:[i("div",{children:(v=(u=l==null?void 0:l.vendor)==null?void 0:u.vendor_name)!=null?v:"--"}),i("div",{children:(x=(_=l==null?void 0:l.vendor)==null?void 0:_.email)!=null?x:"--"}),i("div",{children:(f=(b=l==null?void 0:l.vendor)==null?void 0:b.phone_number)!=null?f:"--"}),i("div",{children:(k=(F=l==null?void 0:l.vendor)==null?void 0:F.zip_code)!=null?k:"--"})]})]})}),s(n,{sm:"2",children:[i("div",{children:"|"}),i("div",{children:"|"}),i("div",{children:"|"}),i("div",{children:"|"})]}),i(n,{sm:"5",children:s(p,{children:[s(n,{sm:"4",children:[i("div",{children:"Date"}),i("div",{children:"Payment Method"}),i("div",{children:"Tracking"}),i("div",{children:"Notes"})]}),s(n,{sm:"1",children:[i("div",{children:":"}),i("div",{children:":"}),i("div",{children:":"}),i("div",{children:":"})]}),s(n,{sm:"7",children:[i("div",{children:(N=l==null?void 0:l.po_date)!=null?N:"--"}),i("div",{children:(y=l==null?void 0:l.payment_method)!=null?y:"--"}),i("div",{children:(g=l==null?void 0:l.tracking)!=null?g:"--"}),i("div",{children:(W=l==null?void 0:l.notes)!=null?W:"--"})]})]})})]}),i(p,{children:i(H,{data:d,total:l==null?void 0:l.grand_total})})]})]})})})})})};export{M as default};
