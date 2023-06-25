import{aN as P,r as u,k as v,a as w,cI as E,cF as S,j as r,Y as _,$ as C,Z as t,f as l,Q as k,S as I,T as U,V as M,a0 as o,a1 as s,G as D,cJ as T}from"./index.b5b6a8d2.js";import{a as j,s as W}from"./App.fda3d641.js";import{S as F}from"./react-select.esm.c34be573.js";import"./emotion-memoize.esm.06f0e458.js";const $=()=>{var g;const{id:m}=P(),[e,f]=u.exports.useState(null),[n,b]=u.exports.useState(null),h=j(),y=v(),d=w(c=>c.productskus);u.exports.useEffect(()=>{m&&h(E(m)),h(S())},[m]),u.exports.useEffect(()=>{d!=null&&d.product&&f(d==null?void 0:d.product)},[d==null?void 0:d.product]);const a=c=>{var i,p;f({...e,[(i=c.target)==null?void 0:i.name]:(p=c.target)==null?void 0:p.value})},x=async()=>{var i,p,N;const c=await h(T({id:m,data:e}));(i=c==null?void 0:c.payload)!=null&&i.status?y("/sku-product"):b((N=(p=c==null?void 0:c.payload)==null?void 0:p.data)==null?void 0:N.errors)};return r(u.exports.Fragment,{children:r(_,{children:r(C,{children:r(t,{sm:"6",children:l(k,{children:[r(I,{children:r(U,{tag:"h4",children:"Edit Product"})}),l(M,{children:[l(_,{children:[l(t,{sm:"12",className:"",children:[r(o,{className:"form-label",for:"product_production_category",children:"Production category"}),r(F,{className:"react-select",classNamePrefix:"select",theme:W,placeholder:"Select Production category",options:d==null?void 0:d.productionCategoryOptions,value:(g=d==null?void 0:d.productionCategoryOptions)==null?void 0:g.find(c=>(c==null?void 0:c.value)===(e==null?void 0:e.product_production_category)),onChange:c=>a({target:{name:"product_production_category",value:c==null?void 0:c.value}}),isClearable:!1}),r("small",{className:"text-danger",children:n==null?void 0:n.product_production_category})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_model",children:"Model(SKU)"}),r(s,{type:"text",name:"product_model",id:"product_model",placeholder:"Enter Model(SKU)",value:e==null?void 0:e.product_model,disabled:!0}),r("small",{className:"text-danger",children:n==null?void 0:n.product_model})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_name",children:"Product name"}),r(s,{type:"text",name:"product_name",id:"product_name",placeholder:"Enter Product name",value:e==null?void 0:e.product_name,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"manufacture_id",children:"Manufacture"}),r(s,{type:"text",name:"manufacture_id",id:"manufacture_id",placeholder:"Enter Manufacture",value:e==null?void 0:e.manufacture_id,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_description",children:"Product description"}),r(s,{type:"textarea",rows:"4",name:"product_description",id:"product_description",placeholder:"Enter Product description",value:e==null?void 0:e.product_description,onChange:a})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"id_catalog",children:"ID"}),r(s,{type:"text",name:"id_catalog",id:"id_catalog",placeholder:"Enter ID",value:e==null?void 0:e.id_catalog,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_url",children:"Product URL"}),r(s,{type:"text",name:"product_url",id:"product_url",placeholder:"Enter Product URL",value:e==null?void 0:e.product_url,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_thumb",children:"Thumb / Insert image"}),r(s,{type:"text",name:"product_thumb",id:"product_thumb",placeholder:"Enter Thumb / Insert image",value:e==null?void 0:e.product_thumb,onChange:a})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"ship_weight",children:"Ship weight"}),r(s,{type:"text",name:"ship_weight",id:"ship_weight",placeholder:"Enter Ship weight",value:e==null?void 0:e.ship_weight,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"height",children:"Height"}),r(s,{type:"text",name:"height",id:"height",placeholder:"Enter Height",value:e==null?void 0:e.height,onChange:a})]}),l(t,{sm:"12",className:"mb-1",children:[r(o,{className:"form-label",for:"width",children:"Width"}),r(s,{type:"text",name:"width",id:"width",placeholder:"Enter Width",value:e==null?void 0:e.width,onChange:a})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_upc",children:"UPC"}),r(s,{type:"text",name:"product_upc",id:"product_upc",placeholder:"Enter UPC",value:e==null?void 0:e.product_upc,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_asin",children:"ASIN"}),r(s,{type:"text",name:"product_asin",id:"product_asin",placeholder:"Enter ASIN",value:e==null?void 0:e.product_asin,onChange:a})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_price",children:"Product Price"}),r(s,{type:"text",name:"product_price",id:"product_price",placeholder:"Enter Product Price",value:e==null?void 0:e.product_price,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_sale_price",children:"Product Sale Price"}),r(s,{type:"text",name:"product_sale_price",id:"product_sale_price",placeholder:"Enter Product Sale Price",value:e==null?void 0:e.product_sale_price,onChange:a})]}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_wholesale_price",children:"Wholesale price"}),r(s,{type:"text",name:"product_wholesale_price",id:"product_wholesale_price",placeholder:"Enter Wholesale Price",value:e==null?void 0:e.product_wholesale_price,onChange:a})]}),r(t,{sm:"12",className:"d-flex justify-content-between my-1",children:l("div",{className:"form-check form-check-success",children:[r(s,{type:"checkbox",name:"msg_flag",checked:e==null?void 0:e.msg_flag,onChange:c=>{var i;return a({target:{name:"msg_flag",value:(i=c==null?void 0:c.target)==null?void 0:i.checked}})}}),r(o,{className:"form-check-label",for:"success-checkbox",children:"Show Popup"})]})}),l(t,{sm:"12",children:[r(o,{className:"form-label",for:"product_note",children:"Popup Message Note"}),r(s,{type:"textarea",rows:"2",name:"product_note",id:"product_note",placeholder:"Enter Popup Message Note",value:e==null?void 0:e.product_note,onChange:a})]})]}),r(_,{children:r(t,{sm:"12",className:"mt-1",children:r("div",{className:"d-flex",children:r(D,{className:"me-1",color:"primary",type:"submit",onClick:c=>{c.preventDefault(),x()},children:"Submit"})})})})]})]})})})})})};export{$ as default};
