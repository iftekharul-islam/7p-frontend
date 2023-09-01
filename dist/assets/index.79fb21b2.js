import{r as u,k as x,a as v,cU as P,j as r,X as m,Z as w,Y as t,f as l,Q as S,S as E,T as C,V as I,$ as a,a0 as s,G as U,cW as D}from"./index.3c92940a.js";import{a as T,s as W}from"./App.1e2e16c3.js";import{S as k}from"./react-select.esm.d0f99a9a.js";import"./emotion-memoize.esm.06f0e458.js";const O=()=>{var _;const[e,g]=u.exports.useState(null),[d,N]=u.exports.useState(null),h=T(),b=x(),i=v(c=>c.productskus);u.exports.useEffect(()=>{h(P())},[]);const o=c=>{var n,p;g({...e,[(n=c.target)==null?void 0:n.name]:(p=c.target)==null?void 0:p.value})},y=async()=>{var n,p,f;const c=await h(D(e));(n=c==null?void 0:c.payload)!=null&&n.status?b("/sku-product"):N((f=(p=c==null?void 0:c.payload)==null?void 0:p.data)==null?void 0:f.errors)};return r(u.exports.Fragment,{children:r(m,{children:r(w,{children:r(t,{sm:"6",children:l(S,{children:[r(E,{children:r(C,{tag:"h4",children:"New Product"})}),l(I,{children:[l(m,{children:[l(t,{sm:"12",className:"",children:[r(a,{className:"form-label",for:"product_production_category",children:"Production category"}),r(k,{className:"react-select",classNamePrefix:"select",theme:W,placeholder:"Select Production category",options:i==null?void 0:i.productionCategoryOptions,value:(_=i==null?void 0:i.productionCategoryOptions)==null?void 0:_.find(c=>(c==null?void 0:c.value)===(e==null?void 0:e.product_production_category)),onChange:c=>o({target:{name:"product_production_category",value:c==null?void 0:c.value}}),isClearable:!1}),r("small",{className:"text-danger",children:d==null?void 0:d.product_production_category})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_model",children:"Model(SKU)"}),r(s,{type:"text",name:"product_model",id:"product_model",placeholder:"Enter Model(SKU)",value:e==null?void 0:e.product_model,onChange:o}),r("small",{className:"text-danger",children:d==null?void 0:d.product_model})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_name",children:"Product name"}),r(s,{type:"text",name:"product_name",id:"product_name",placeholder:"Enter Product name",value:e==null?void 0:e.product_name,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_description",children:"Product description"}),r(s,{type:"textarea",rows:"4",name:"product_description",id:"product_description",placeholder:"Enter Product description",value:e==null?void 0:e.product_description,onChange:o})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"id_catalog",children:"ID"}),r(s,{type:"text",name:"id_catalog",id:"id_catalog",placeholder:"Enter ID",value:e==null?void 0:e.id_catalog,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_url",children:"Product URL"}),r(s,{type:"text",name:"product_url",id:"product_url",placeholder:"Enter Product URL",value:e==null?void 0:e.product_url,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_thumb",children:"Thumb / Insert image"}),r(s,{type:"text",name:"product_thumb",id:"product_thumb",placeholder:"Enter Thumb / Insert image",value:e==null?void 0:e.product_thumb,onChange:o})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"ship_weight",children:"Ship weight"}),r(s,{type:"text",name:"ship_weight",id:"ship_weight",placeholder:"Enter Ship weight",value:e==null?void 0:e.ship_weight,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"height",children:"Height"}),r(s,{type:"number",name:"height",id:"height",placeholder:"Enter Height",value:e==null?void 0:e.height,onChange:o})]}),l(t,{sm:"12",className:"mb-1",children:[r(a,{className:"form-label",for:"width",children:"Width"}),r(s,{type:"number",name:"width",id:"width",placeholder:"Enter Width",value:e==null?void 0:e.width,onChange:o})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_upc",children:"UPC"}),r(s,{type:"text",name:"product_upc",id:"product_upc",placeholder:"Enter UPC",value:e==null?void 0:e.product_upc,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_asin",children:"ASIN"}),r(s,{type:"text",name:"product_asin",id:"product_asin",placeholder:"Enter ASIN",value:e==null?void 0:e.product_asin,onChange:o})]}),r("hr",{className:"mt-1"}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_price",children:"Product Price"}),r(s,{type:"text",name:"product_price",id:"product_price",placeholder:"Enter Product Price",value:e==null?void 0:e.product_price,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_sale_price",children:"Product Sale Price"}),r(s,{type:"text",name:"product_sale_price",id:"product_sale_price",placeholder:"Enter Product Sale Price",value:e==null?void 0:e.product_sale_price,onChange:o})]}),l(t,{sm:"12",children:[r(a,{className:"form-label",for:"product_wholesale_price",children:"Wholesale price"}),r(s,{type:"text",name:"product_wholesale_price",id:"product_wholesale_price",placeholder:"Enter Wholesale Price",value:e==null?void 0:e.product_wholesale_price,onChange:o})]})]}),r(m,{children:r(t,{sm:"12",className:"mt-1",children:r("div",{className:"d-flex",children:r(U,{className:"me-1",color:"primary",type:"submit",onClick:c=>{c.preventDefault(),y()},children:"Submit"})})})})]})]})})})})})};export{O as default};
