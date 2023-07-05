import{r as m,aE as v,k as x,a as S,bq as w,bl as C,j as s,X as _,Z as q,Y as c,f as l,Q as D,S as U,T as E,V as I,$ as i,a0 as n,G as Q,bs as B}from"./index.6f9bc425.js";import{a as O,s as P}from"./App.b6ede6fe.js";import{S as j}from"./react-select.esm.0bde0cc4.js";import"./emotion-memoize.esm.06f0e458.js";const K=()=>{var b;const[e,f]=m.exports.useState(null),{id:d}=v(),[p,y]=m.exports.useState(null),u=O(),N=x(),o=S(r=>r.inventories);m.exports.useEffect(()=>{d&&u(w(d))},[d]),m.exports.useEffect(()=>{o!=null&&o.stock&&f({...o==null?void 0:o.stock})},[o==null?void 0:o.stock]),m.exports.useEffect(()=>{u(C())},[]);const a=r=>{var t,h;f({...e,[(t=r.target)==null?void 0:t.name]:(h=r.target)==null?void 0:h.value})},g=async()=>{var t,h,k;const r=await u(B({id:d,data:e}));(t=r==null?void 0:r.payload)!=null&&t.status?N("/inventory"):y((k=(h=r==null?void 0:r.payload)==null?void 0:h.data)==null?void 0:k.errors)};return s(m.exports.Fragment,{children:s(_,{children:s(q,{children:s(c,{sm:"6",children:l(D,{children:[s(U,{children:s(E,{tag:"h4",children:"New Stock"})}),l(I,{children:[l(_,{children:[l(c,{sm:"12",children:[s(i,{className:"form-label",for:"stock_no_unique",children:"Stock Number"}),s(n,{type:"number",name:"stock_no_unique",id:"stock_no_unique",placeholder:"Stock Number",value:e==null?void 0:e.stock_no_unique,disabled:!0})]}),s("small",{className:"text-danger",children:p==null?void 0:p.stock_no_unique}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"stock_name_discription",children:"Discription"}),s(n,{type:"text",name:"stock_name_discription",id:"stock_name_discription",placeholder:"Discription",value:e==null?void 0:e.stock_name_discription,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"section_id",children:"Section"}),s(j,{className:"react-select",classNamePrefix:"select",theme:P,placeholder:"Select Section",options:o==null?void 0:o.sectionOptions,value:(b=o==null?void 0:o.sectionOptions)==null?void 0:b.find(r=>(r==null?void 0:r.value)===(e==null?void 0:e.section_id)),onChange:r=>{a({target:{value:r==null?void 0:r.value,name:"section_id"}})},isClearable:!1})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"sku_weight",children:"Weight"}),s(n,{type:"number",name:"sku_weight",id:"sku_weight",placeholder:"Weight",value:e==null?void 0:e.sku_weight,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"re_order_qty",children:"Order Quantity"}),s(n,{type:"number",name:"re_order_qty",id:"re_order_qty",placeholder:"Order Quantity",value:e==null?void 0:e.re_order_qty,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"min_reorder",children:"Minimum Stock Quantity"}),s(n,{type:"number",name:"min_reorder",id:"min_reorder",placeholder:"Minimum Stock Quantity",value:e==null?void 0:e.min_reorder,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"last_cost",children:"Last Cost"}),s(n,{type:"number",name:"last_cost",id:"last_cost",placeholder:"Last Cost",value:e==null?void 0:e.last_cost,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"upc",children:"UPC"}),s(n,{type:"text",name:"upc",id:"upc",placeholder:"UPC",value:e==null?void 0:e.upc,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"wh_bin",children:"BIN"}),s(n,{type:"text",name:"wh_bin",id:"wh_bin",placeholder:"BIN",value:e==null?void 0:e.wh_bin,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"warehouse",children:"Image Url"}),s(n,{type:"text",name:"warehouse",id:"warehouse",placeholder:"Image Url",value:e==null?void 0:e.warehouse,onChange:a})]}),l(c,{sm:"12",className:"d-flex",children:[s(n,{type:"checkbox",name:"dropship",className:"m-1",checked:e==null?void 0:e.dropship,onChange:r=>{var t;return a({target:{name:"dropship",value:(t=r==null?void 0:r.target)==null?void 0:t.checked}})}}),s(i,{for:"warehouse",className:"form-label d-flex align-content-center flex-wrap",children:"Dropship"})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"dropship_sku",children:"Dropship SKU"}),s(n,{type:"text",name:"dropship_sku",id:"dropship_sku",placeholder:"Dropship SKU",value:e==null?void 0:e.dropship_sku,onChange:a})]}),l(c,{sm:"12",children:[s(i,{className:"form-label",for:"dropship_cost",children:"Dropship Cost"}),s(n,{type:"text",name:"dropship_cost",id:"dropship_cost",placeholder:"Dropship Cost",value:e==null?void 0:e.dropship_cost,onChange:a})]})]}),s(_,{children:s(c,{sm:"12",className:"mt-1",children:s("div",{className:"d-flex",children:s(Q,{className:"me-1",color:"primary",type:"submit",onClick:r=>{r.preventDefault(),g()},children:"Submit"})})})})]})]})})})})})};export{K as default};
