import{aC as V,r as m,k as q,a as D,cR as T,cP as E,j as e,X as _,Z as O,Y as r,f as n,Q as j,S as U,T as $,V as w,$ as t,a0 as o,G as B,cS as F}from"./index.9ff80792.js";import{a as L,s as k}from"./App.4917e5b7.js";import{S}from"./react-select.esm.c76ff736.js";import"./emotion-memoize.esm.06f0e458.js";const G=()=>{var v,y,N,x;const{id:u}=V(),[a,f]=m.exports.useState(null),[p,g]=m.exports.useState(null),h=L(),C=q(),s=D(l=>l.products);m.exports.useEffect(()=>{h(T(u)),h(E())},[u]),m.exports.useEffect(()=>{s!=null&&s.product&&f(s==null?void 0:s.product)},[s==null?void 0:s.product]);const i=l=>{var c,d;f({...a,[(c=l.target)==null?void 0:c.name]:(d=l.target)==null?void 0:d.value})},P=async()=>{var c,d,b;const l=await h(F({id:u,data:a}));(c=l==null?void 0:l.payload)!=null&&c.status?C("/product"):g((b=(d=l==null?void 0:l.payload)==null?void 0:d.data)==null?void 0:b.errors)};return e(m.exports.Fragment,{children:e(_,{children:e(O,{children:e(r,{sm:"6",children:n(j,{children:[e(U,{children:e($,{tag:"h4",children:"Edit Product"})}),n(w,{children:[n(_,{children:[n(r,{sm:"12",className:"mb-1",children:[e(t,{className:"form-label",for:"nameVertical",children:"Stock"}),e(o,{type:"text",name:"name",id:"name",value:(v=a==null?void 0:a.inventory)==null?void 0:v.stock_no_unique,disabled:!0})]}),n(r,{sm:"12",children:[e(t,{className:"form-label",for:"description",children:"Name/Description"}),e(o,{type:"text",name:"description",id:"description",value:(y=a==null?void 0:a.inventory)==null?void 0:y.stock_name_discription,disabled:!0})]}),n(r,{sm:"6",children:[e(t,{className:"form-label",for:"unit",children:"Unit"}),e(S,{className:"react-select",classNamePrefix:"select",theme:k,placeholder:"Select Stock",options:s==null?void 0:s.unitOptions,value:(N=s==null?void 0:s.unitOptions)==null?void 0:N.find(l=>(l==null?void 0:l.value)===(a==null?void 0:a.unit)),onChange:l=>i({target:{name:"unit",value:l.value}}),isClearable:!1})]}),n(r,{sm:"6",children:[e(t,{className:"form-label",for:"unit_qty",children:"QTY"}),e(o,{type:"text",name:"unit_qty",id:"unit_qty",placeholder:"qty",value:a==null?void 0:a.unit_qty,onChange:i})]}),n(r,{sm:"12",children:[e(t,{className:"form-label",for:"unit_price",children:"Unit Price"}),e(o,{type:"text",name:"unit_price",id:"unit_price",placeholder:"unit_price",value:a==null?void 0:a.unit_price,onChange:i})]}),e("hr",{className:"mt-2"}),n(r,{sm:"12",className:"mb-1",children:[e(t,{className:"form-label",for:"nameVertical",children:"Vendor"}),e(S,{className:"react-select",classNamePrefix:"select",theme:k,placeholder:"Select Vendor",options:s==null?void 0:s.vendorOptions,value:(x=s==null?void 0:s.vendorOptions)==null?void 0:x.find(l=>{var c;return(l==null?void 0:l.value)===((c=a==null?void 0:a.vendor)==null?void 0:c.id)}),onChange:l=>{i({target:{value:l==null?void 0:l.value,name:"vendor_id"}})},isClearable:!1}),e("small",{className:"text-danger",children:p==null?void 0:p.vendor_id})]}),n(r,{sm:"12",children:[e(t,{className:"form-label",for:"vendor_sku",children:"Vendor Sku"}),e(o,{type:"text",name:"vendor_sku",id:"vendor_sku",placeholder:"vendor_sku",value:a==null?void 0:a.vendor_sku,onChange:i})]}),n(r,{sm:"12",children:[e(t,{className:"form-label",for:"vendor_sku_name",children:"Sku Name"}),e(o,{type:"text",name:"vendor_sku_name",id:"vendor_sku_name",placeholder:"sku_name",value:a==null?void 0:a.vendor_sku_name,onChange:i})]}),n(r,{sm:"12",children:[e(t,{className:"form-label",for:"lead_time_days",children:"Lead Time Days"}),e(o,{type:"text",name:"lead_time_days",id:"lead_time_days",placeholder:"lead_time_days",value:a==null?void 0:a.lead_time_days,onChange:i})]})]}),e(_,{children:e(r,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(B,{className:"me-1",color:"primary",type:"submit",onClick:l=>{l.preventDefault(),P()},children:"Submit"})})})})]})]})})})})})};export{G as default};
