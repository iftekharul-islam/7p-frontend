import{aE as M,r as v,k as X,a as Y,c$ as A,j as e,X as m,Z as V,Y as d,f as i,Q as J,S as W,T as ee,V as I,I as L,$ as u,a0 as p,G as ne,bm as re,d1 as de}from"./index.6f9bc425.js";import{R as ce,s as ie}from"./slidedown.bcab8d37.js";/* empty css                  */import{F as te}from"./index.621ac58b.js";import{a as le}from"./App.b6ede6fe.js";const me=()=>{var N,S,j,k,w,q,R,C,D,P,E,F;const{id:O}=M(),[r,z]=v.exports.useState(),[f,_]=v.exports.useState(!1),[c,x]=v.exports.useState([{}]),[se,Z]=v.exports.useState(null),b=le(),G=X(),o=Y(n=>n.purchaseOrders),g=(n,s,a)=>{const l=c==null?void 0:c.map((t,y)=>a===y?(n="new_received")?{...t,new_received:s,balance_quantity:(t==null?void 0:t.quantity)-(t==null?void 0:t.receive_quantity)-s}:{...t,[n]:s}:t);x(l)};v.exports.useEffect(()=>{b(A(O))},[]),v.exports.useEffect(()=>{var s,a;z(o==null?void 0:o.order);const n=(a=(s=o==null?void 0:o.order)==null?void 0:s.products)==null?void 0:a.map(l=>{var t;return{...l,receive_date:(t=l==null?void 0:l.receive_date)!=null?t:new Date,new_received:0}});x(n)},[o==null?void 0:o.order]);const H=async()=>{var s,a,l;_(!0);const n=await b(de(c));(s=n==null?void 0:n.payload)!=null&&s.status?G("/purchase-order"):Z((l=(a=n==null?void 0:n.payload)==null?void 0:a.data)==null?void 0:l.errors),_(!1)};return e(v.exports.Fragment,{children:e(m,{children:e(V,{children:e(d,{sm:"12",children:i(J,{children:[e(W,{children:i(ee,{tag:"h4",children:["Receive Purchase Product- ",r==null?void 0:r.po_number]})}),i(I,{children:[i(m,{children:[e(d,{sm:"5",children:i(m,{children:[i(d,{sm:"4",children:[e("div",{children:"Vendor Name"}),e("div",{children:"Vendor Email"}),e("div",{children:"Phone Number"}),e("div",{children:"Zip Code"})]}),i(d,{sm:"1",children:[e("div",{children:":"}),e("div",{children:":"}),e("div",{children:":"}),e("div",{children:":"})]}),i(d,{sm:"7",children:[e("div",{children:(S=(N=r==null?void 0:r.vendor)==null?void 0:N.vendor_name)!=null?S:"--"}),e("div",{children:(k=(j=r==null?void 0:r.vendor)==null?void 0:j.email)!=null?k:"--"}),e("div",{children:(q=(w=r==null?void 0:r.vendor)==null?void 0:w.phone_number)!=null?q:"--"}),e("div",{children:(C=(R=r==null?void 0:r.vendor)==null?void 0:R.zip_code)!=null?C:"--"})]})]})}),i(d,{sm:"2",children:[e("div",{children:"|"}),e("div",{children:"|"}),e("div",{children:"|"}),e("div",{children:"|"})]}),e(d,{sm:"5",children:i(m,{children:[i(d,{sm:"4",children:[e("div",{children:"Date"}),e("div",{children:"Payment Method"}),e("div",{children:"Tracking"}),e("div",{children:"Notes"})]}),i(d,{sm:"1",children:[e("div",{children:":"}),e("div",{children:":"}),e("div",{children:":"}),e("div",{children:":"})]}),i(d,{sm:"7",children:[e("div",{children:(D=r==null?void 0:r.po_date)!=null?D:"--"}),e("div",{children:(P=r==null?void 0:r.payment_method)!=null?P:"--"}),e("div",{children:(E=r==null?void 0:r.tracking)!=null?E:"--"}),e("div",{children:(F=r==null?void 0:r.notes)!=null?F:"--"})]})]})})]}),(c==null?void 0:c.length)>0&&i(L,{children:[e("hr",{}),i(I,{children:[i(m,{className:"justify-content-between align-items-center",children:[e(d,{sm:"2",className:"d-flex justify-content-center",children:e(u,{children:"Vendor SKU"})}),e(d,{sm:"1",className:"d-flex justify-content-center",children:e(u,{children:"Stock#"})}),e(d,{sm:"3",className:"d-flex justify-content-center",children:e(u,{children:"SKU"})}),e(d,{sm:"1",className:"d-flex justify-content-center",children:e(u,{children:"Quantity"})}),e(d,{sm:"2",className:"d-flex justify-content-center",children:e(u,{children:"Received Date"})}),e(d,{sm:"1",className:"d-flex justify-content-center",children:e(u,{children:"Quantity Received"})}),e(d,{sm:"1",className:"d-flex justify-content-center",children:e(u,{children:"Previously Received"})}),e(d,{sm:"1",className:"d-flex justify-content-center",children:e(u,{children:"Balance"})})]}),e(ce,{count:c==null?void 0:c.length,children:n=>{var a,l,t,y,Q,$,B,K;const s=n===0?"div":ie.SlideDown;return e(s,{children:e(V,{children:i(m,{className:`justify-content-between align-items-center mt-${n==0?"0":"1"}`,children:[e(d,{sm:"2",children:e(p,{type:"text",name:"vendor_sku",id:"vendor_sku",placeholder:"SKU",value:(a=c[n])==null?void 0:a.vendor_sku,disabled:!0})}),e(d,{sm:"1",children:e(p,{type:"text",name:"stock_no",id:"stock_no",placeholder:"Stock",value:(l=c[n])==null?void 0:l.stock_no,disabled:!0})}),e(d,{sm:"3",children:e(p,{type:"text",name:"vendor_sku_name",id:"vendor_sku_name",placeholder:"SKU",value:(t=c[n])==null?void 0:t.vendor_sku_name,disabled:!0})}),e(d,{sm:"1",children:e(p,{type:"text",name:"quantity",id:"quantity",placeholder:"Quantity",value:(y=c[n])==null?void 0:y.quantity,disabled:!0})}),e(d,{sm:"2",children:e(te,{className:"form-control",id:"receive_date",name:"receive_date",placeholder:"Receive Date",value:(Q=c[n])==null?void 0:Q.receive_date,onChange:h=>g("receive_date",h,n)})}),e(d,{sm:"1",children:e(p,{type:"number",name:"new_received",id:"new_received",placeholder:"Quantity Received",value:($=c[n])==null?void 0:$.new_received,onChange:h=>{var T,U;return g((T=h==null?void 0:h.target)==null?void 0:T.name,(U=h==null?void 0:h.target)==null?void 0:U.value,n)}})}),e(d,{sm:"1",children:e(p,{type:"text",name:"receive_quantity",id:"receive_quantity",placeholder:"Previously Received",value:(B=c[n])==null?void 0:B.receive_quantity,disabled:!0})}),e(d,{sm:"1",children:e(p,{type:"text",name:"balance_quantity",id:"balance_quantity",placeholder:"Balance",value:(K=c[n])==null?void 0:K.balance_quantity,disabled:!0})})]})})},n)}})]}),e("hr",{}),e(m,{children:e(d,{sm:"12",className:"mt-1 d-flex justify-content-end",children:e("div",{className:"d-flex",children:e(ne,{className:"me-1",color:"primary",type:"submit",onClick:n=>{n.preventDefault(),H()},disabled:f,children:f?i(L,{children:[e(re,{className:"me-25",size:"sm"}),"Loading"]}):"Receive Inventory"})})})})]})]})]})})})})})};export{me as default};
