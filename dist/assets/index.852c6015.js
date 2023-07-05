import{r as u,k as U,a as q,cE as P,cF as T,j as l,Y as p,$ as V,Z as n,f as s,Q as w,S as O,T as A,V as D,a0 as c,G as g,a1 as t,cG as Q}from"./index.9c541b2f.js";import{a as Y,s as _}from"./App.797bd1cf.js";import{S as f}from"./react-select.esm.56852925.js";import{U as K}from"./user-plus.232fe4e4.js";import"./emotion-memoize.esm.06f0e458.js";const G=()=>{var k,y,b;const[e,v]=u.exports.useState(null),[o,S]=u.exports.useState(null),h=Y(),N=U(),r=q(a=>a.products);u.exports.useEffect(()=>{h(P()),h(T())},[]);const i=a=>{var d,m;v({...e,[(d=a.target)==null?void 0:d.name]:(m=a.target)==null?void 0:m.value})},C=a=>{v({...e,...a==null?void 0:a.data,stock_no:a==null?void 0:a.stock_no})},j=async()=>{var d,m,x;const a=await h(Q(e));(d=a==null?void 0:a.payload)!=null&&d.status?N("/product"):S((x=(m=a==null?void 0:a.payload)==null?void 0:m.data)==null?void 0:x.errors)};return l(u.exports.Fragment,{children:l(p,{children:l(V,{children:l(n,{sm:"6",children:s(w,{children:[l(O,{children:l(A,{tag:"h4",children:"New Product"})}),s(D,{children:[s(p,{children:[s(n,{sm:"9",className:"mb-1",children:[l(c,{className:"form-label",for:"nameVertical",children:"Stock"}),l(f,{className:"react-select",classNamePrefix:"select",theme:_,placeholder:"Select Stock",options:r==null?void 0:r.stockOptions,value:(k=r==null?void 0:r.stockOptions)==null?void 0:k.find(a=>(a==null?void 0:a.value)===(e==null?void 0:e.stock_id)),onChange:C,isClearable:!1}),l("small",{className:"text-danger",children:o==null?void 0:o.stock_id})]}),s(n,{sm:"3",className:"mb-1",children:[l(c,{className:"form-label",for:"nameVertical"}),l("div",{children:s(g,{color:"primary",onClick:a=>{a.preventDefault(),N("/inventory-add")},children:[l(K,{size:14})," Stock"]})})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"stock_name_discription",children:"Name"}),l(t,{type:"text",name:"stock_name_discription",id:"stock_name_discription",placeholder:"Name",value:e==null?void 0:e.stock_name_discription,disabled:!0})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"sku_weight",children:"SKU Weight"}),l(t,{type:"text",name:"sku_weight",id:"sku_weight",placeholder:"SKU Weight",value:e==null?void 0:e.sku_weight,onChange:i,disabled:!0})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"re_order_qty",children:"Re-order QTY"}),l(t,{type:"text",name:"re_order_qty",id:"re_order_qty",placeholder:"Re-order QTY",value:e==null?void 0:e.re_order_qty,disabled:!0})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"min_reorder",children:"Min order"}),l(t,{type:"text",name:"min_reorder",id:"min_reorder",placeholder:"Min order",value:e==null?void 0:e.min_reorder,disabled:!0})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"adjusment",children:"Adjustment"}),l(t,{type:"text",name:"adjusment",id:"adjusment",placeholder:"Adjustment",value:e==null?void 0:e.adjusment,disabled:!0})]}),s(n,{sm:"6",children:[l(c,{className:"form-label",for:"unit",children:"Unit"}),l(f,{className:"react-select",classNamePrefix:"select",theme:_,placeholder:"Select Stock",options:r==null?void 0:r.unitOptions,value:(y=r==null?void 0:r.unitOptions)==null?void 0:y.find(a=>(a==null?void 0:a.value)===(e==null?void 0:e.unit)),onChange:a=>i({target:{name:"unit",value:a.value}}),isClearable:!1})]}),s(n,{sm:"6",children:[l(c,{className:"form-label",for:"unit_qty",children:"QTY"}),l(t,{type:"text",name:"unit_qty",id:"unit_qty",placeholder:"QTY",value:e==null?void 0:e.unit_qty,onChange:i})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"unit_price",children:"Unit Price"}),l(t,{type:"text",name:"unit_price",id:"unit_price",placeholder:"Unit Price",value:e==null?void 0:e.unit_price,onChange:i})]}),l("hr",{className:"mt-2"}),s(n,{sm:"12",className:"mb-1",children:[l(c,{className:"form-label",for:"nameVertical",children:"Vendor"}),l(f,{className:"react-select",classNamePrefix:"select",theme:_,placeholder:"Select Vendor",options:r==null?void 0:r.vendorOptions,value:(b=r==null?void 0:r.vendorOptions)==null?void 0:b.find(a=>(a==null?void 0:a.value)===(e==null?void 0:e.vendor_id)),onChange:a=>{i({target:{value:a==null?void 0:a.value,name:"vendor_id"}})},isClearable:!1}),l("small",{className:"text-danger",children:o==null?void 0:o.vendor_id})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"vendor_sku",children:"Vendor Sku"}),l(t,{type:"text",name:"vendor_sku",id:"vendor_sku",placeholder:"vendor_sku",value:e==null?void 0:e.vendor_sku,onChange:i})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"vendor_sku_name",children:"SKU Name"}),l(t,{type:"text",name:"vendor_sku_name",id:"vendor_sku_name",placeholder:"SKU Name",value:e==null?void 0:e.vendor_sku_name,onChange:i})]}),s(n,{sm:"12",children:[l(c,{className:"form-label",for:"lead_time_days",children:"Lead Time Days"}),l(t,{type:"text",name:"lead_time_days",id:"lead_time_days",placeholder:"lead_time_days",value:e==null?void 0:e.lead_time_days,onChange:i})]})]}),l(p,{children:l(n,{sm:"12",className:"mt-1",children:l("div",{className:"d-flex",children:l(g,{className:"me-1",color:"primary",type:"submit",onClick:a=>{a.preventDefault(),j()},children:"Submit"})})})})]})]})})})})})};export{G as default};
