import{aA as L,r as b,k as Q,a as R,cY as $,cW as G,j as e,Y as v,$ as V,Z as c,f as i,Q as I,S as Y,T as H,V as q,a0 as p,a1 as f,I as U,G as w,bk as W,cZ as J}from"./index.e1926c99.js";import{R as M,s as X}from"./slidedown.ccf5c3fd.js";/* empty css                  */import{a as ee,s as ne}from"./App.403c5a1e.js";import{F as re}from"./index.a60fba88.js";import{S as ae}from"./react-select.esm.2f608f0c.js";import{P as te}from"./slidedown.0c22fee2.js";import"./emotion-memoize.esm.06f0e458.js";const fe=()=>{const{id:D}=L(),[r,C]=b.exports.useState({grand_total:0}),[j,F]=b.exports.useState(!1),[se,P]=b.exports.useState(!1),[t,x]=b.exports.useState([{}]),[le,z]=b.exports.useState(null),k=ee(),A=Q(),u=R(n=>n.purchaseOrders),E=n=>{var l,a;C({...r,[(l=n.target)==null?void 0:l.name]:(a=n.target)==null?void 0:a.value})},O=(n,l)=>{var o;P(!0);const a=(o=u==null?void 0:u.skuOptions)==null?void 0:o.find(h=>(h==null?void 0:h.value)===(n==null?void 0:n.value)),d=t==null?void 0:t.map((h,g)=>{var y,N,s,m,_,T;return l===g?{product_id:(y=a==null?void 0:a.data)==null?void 0:y.id,vendor_sku:(N=a==null?void 0:a.data)==null?void 0:N.vendor_sku,vendor_sku_name:(s=a==null?void 0:a.data)==null?void 0:s.vendor_sku_name,stock_no:(m=a==null?void 0:a.data)==null?void 0:m.stock_no,unit_price:(_=a==null?void 0:a.data)==null?void 0:_.unit_price,lead_time_days:(T=a==null?void 0:a.data)==null?void 0:T.lead_time_days,sub_total:0,eta:new Date}:h});x(d)},S=(n,l,a)=>{if(n=="unit_price"){const d=t==null?void 0:t.map((o,h)=>{var g;if(a===h){const y=(l!=null?l:0)*((g=o==null?void 0:o.quantity)!=null?g:0);return{...o,[n]:l,sub_total:parseFloat(y).toFixed(2)}}else return o});x(d)}else if(n=="new_quantity"){const d=t==null?void 0:t.map((o,h)=>{var g;if(a===h){const y=((g=o==null?void 0:o.unit_price)!=null?g:0)*(l!=null?l:0);return{...o,[n]:l,new_balance_quantity:parseInt(o==null?void 0:o.balance_quantity)+parseInt(l)-parseInt(o==null?void 0:o.quantity),ub_total:parseFloat(y).toFixed(2)}}else return o});x(d)}else{const d=t==null?void 0:t.map((o,h)=>a===h?{...o,[n]:l}:o);x(d)}};b.exports.useEffect(()=>{k($(D))},[]),b.exports.useEffect(()=>{var l,a;C({...r,...u==null?void 0:u.order});const n=(a=(l=u==null?void 0:u.order)==null?void 0:l.products)==null?void 0:a.map(d=>({...d,unit_price:d==null?void 0:d.price,new_quantity:d==null?void 0:d.quantity}));x(n)},[u==null?void 0:u.order]),b.exports.useEffect(()=>{r!=null&&r.vendor_id&&k(G(r==null?void 0:r.vendor_id))},[r==null?void 0:r.vendor_id]),b.exports.useEffect(()=>{let n=0;t==null||t.forEach(l=>{var a;n=parseFloat(n)+parseFloat((a=l==null?void 0:l.sub_total)!=null?a:0)}),C({...r,grand_total:n.toFixed(2)})},[t]);const K=()=>{x([...t,{}])},Z=n=>{const l=t==null?void 0:t.filter((a,d)=>d!==n);(l==null?void 0:l.length)<1?(x([{}]),P(!1)):x(l)},B=async()=>{var l,a,d;F(!0);const n=await k(J({id:D,data:{...r,skus:t}}));(l=n==null?void 0:n.payload)!=null&&l.status?A("/purchase-order"):z((d=(a=n==null?void 0:n.payload)==null?void 0:a.data)==null?void 0:d.errors),F(!1)};return e(b.exports.Fragment,{children:e(v,{children:e(V,{children:e(c,{sm:"12",children:i(I,{children:[e(Y,{children:i(H,{tag:"h4",children:["Edit Purchase Product- ",r==null?void 0:r.po_number]})}),i(q,{children:[i(v,{children:[i(c,{sm:"4",children:[e(p,{className:"form-label",for:"vendor_id",children:"Vendor ID"}),e(f,{type:"text",name:"vendor_name",id:"vendor_name",placeholder:"Vendor's Name",value:r==null?void 0:r.vendor_id,disabled:!0})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"vendor_name",children:"Vendor"}),e(f,{type:"text",name:"vendor_name",id:"vendor_name",placeholder:"Vendor's Name",value:r==null?void 0:r.vendor_name,disabled:!0})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"email",children:"Email"}),e(f,{type:"text",name:"email",id:"email",placeholder:"Vendor's Email",value:r==null?void 0:r.email,disabled:!0})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"zip_code",children:"Zip Code"}),e(f,{type:"text",name:"zip_code",id:"zip_code",placeholder:"Vendor's Zip Code",value:r==null?void 0:r.zip_code,disabled:!0})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"phone_number",children:"Phone"}),e(f,{type:"text",name:"phone_number",id:"phone_number",placeholder:"Vendor's Phone Number",value:r==null?void 0:r.phone_number,disabled:!0})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"state",children:"Date"}),e(f,{type:"text",name:"state",id:"state",placeholder:"Vendor's State",value:r==null?void 0:r.po_date,disabled:!0})]}),i(c,{sm:"8",children:[e(p,{className:"form-label",for:"notes",children:"Notes"}),e(f,{type:"text",name:"notes",id:"notes",placeholder:"Notes",value:r==null?void 0:r.notes,onChange:E})]}),i(c,{sm:"4",children:[e(p,{className:"form-label",for:"tracking",children:"Tracking"}),e(f,{type:"text",name:"tracking",id:"tracking",placeholder:"Tracking",value:r==null?void 0:r.tracking,onChange:E})]})]}),(t==null?void 0:t.length)>0&&i(U,{children:[e("hr",{}),i(q,{children:[i(v,{className:"justify-content-between align-items-center",children:[e(c,{sm:"2",className:"d-flex justify-content-center",children:e(p,{children:"Vendor SKU"})}),e(c,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Stock"})}),e(c,{sm:"3",className:"d-flex justify-content-center",children:e(p,{children:"SKU"})}),e(c,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Quantity"})}),e(c,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Price"})}),e(c,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Subtotal"})}),e(c,{sm:"2",className:"d-flex justify-content-center",children:e(p,{children:"ETA"})}),e(c,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Action"})})]}),e(M,{count:t==null?void 0:t.length,children:n=>{var a,d,o,h,g,y,N;const l=n===0?"div":X.SlideDown;return e(l,{children:e(V,{children:i(v,{className:"justify-content-between align-items-center mb-1",children:[e(c,{sm:"2",children:e(f,{type:"text",name:"vendor_sku",id:"vendor_sku",placeholder:"SKU",value:(a=t[n])==null?void 0:a.vendor_sku,onChange:s=>{var m,_;return S((m=s==null?void 0:s.target)==null?void 0:m.name,(_=s==null?void 0:s.target)==null?void 0:_.value,n)}})}),e(c,{sm:"1",children:e(f,{type:"text",name:"stock_no",id:"stock_no",placeholder:"Stock",value:(d=t[n])==null?void 0:d.stock_no,disabled:!0})}),e(c,{sm:"3",children:e(ae,{className:"react-select",classNamePrefix:"select",theme:ne,placeholder:"Select SKU",options:u==null?void 0:u.skuOptions,value:(o=u==null?void 0:u.skuOptions)==null?void 0:o.find(s=>{var m;return(s==null?void 0:s.value)===((m=t[n])==null?void 0:m.product_id)}),onChange:s=>O(s,n),isClearable:!1})}),e(c,{sm:"1",children:e(f,{type:"text",name:"new_quantity",id:"new_quantity",placeholder:"Quantity",value:(h=t[n])==null?void 0:h.new_quantity,onChange:s=>{var m,_;return S((m=s==null?void 0:s.target)==null?void 0:m.name,(_=s==null?void 0:s.target)==null?void 0:_.value,n)}})}),e(c,{sm:"1",children:e(f,{type:"text",name:"unit_price",id:"unit_price",placeholder:"Price",value:(g=t[n])==null?void 0:g.unit_price,onChange:s=>{var m,_;return S((m=s==null?void 0:s.target)==null?void 0:m.name,(_=s==null?void 0:s.target)==null?void 0:_.value,n)}})}),e(c,{sm:"1",children:e(f,{type:"text",name:"sub_total",id:"sub_total",placeholder:"Subtotal",value:(y=t[n])==null?void 0:y.sub_total,disabled:!0})}),e(c,{sm:"2",children:e(re,{className:"form-control",id:"eta",name:"eta",placeholder:"ETA",value:(N=t[n])==null?void 0:N.eta,onChange:s=>S("eta",s,n)})}),e(c,{sm:"1",children:e(w,{className:"me-1",color:"danger",onClick:s=>{s.preventDefault(),Z(n)},children:e("span",{className:"align-middle ms-25",children:"Delete"})})})]})})},n)}})]}),e("hr",{}),i(v,{children:[e(c,{sm:"9",className:"mt-1",children:i("div",{className:"d-flex",children:[i(w,{className:"me-1",color:"success",onClick:n=>{n.preventDefault(),K()},children:[e(te,{size:14}),e("span",{className:"align-middle ms-25",children:"Add New"})]}),e(w,{className:"me-1",color:"primary",type:"submit",onClick:n=>{n.preventDefault(),B()},disabled:j,children:j?i(U,{children:[e(W,{className:"me-25",size:"sm"}),"Updating"]}):"Update"})]})}),i(c,{sm:"3",children:["Grand Total: ",r==null?void 0:r.grand_total]})]})]})]})]})})})})})};export{fe as default};
