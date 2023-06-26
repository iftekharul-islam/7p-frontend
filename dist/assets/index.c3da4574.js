import{r as o,a6 as v,k as x,a as w,aP as C,aQ as q,j as s,Y as _,$ as P,Z as c,f as l,Q,S as D,T as I,V as B,a0 as t,a1 as i,G as E,aR as O}from"./index.f08f0f6f.js";import{a as U,s as j}from"./App.aff6400b.js";import{S as L}from"./react-select.esm.74a347c8.js";import"./emotion-memoize.esm.06f0e458.js";const R=()=>{var b;const[e,f]=o.exports.useState(null),[y,T]=v(),d=y.get("id"),[h,N]=o.exports.useState(null),p=U(),g=x(),a=w(r=>r.inventories);o.exports.useEffect(()=>{d&&p(C(d))},[d]),o.exports.useEffect(()=>{a!=null&&a.stock&&f({...a==null?void 0:a.stock,stock_no_unique:null})},[a==null?void 0:a.stock]),o.exports.useEffect(()=>{p(q())},[]);const n=r=>{var m,u;f({...e,[(m=r.target)==null?void 0:m.name]:(u=r.target)==null?void 0:u.value})},S=async()=>{var m,u,k;const r=await p(O(e));(m=r==null?void 0:r.payload)!=null&&m.status?g("/inventory"):N((k=(u=r==null?void 0:r.payload)==null?void 0:u.data)==null?void 0:k.errors)};return s(o.exports.Fragment,{children:s(_,{children:s(P,{children:s(c,{sm:"6",children:l(Q,{children:[s(D,{children:s(I,{tag:"h4",children:"New Stock"})}),l(B,{children:[l(_,{children:[l(c,{sm:"12",children:[s(t,{className:"form-label",for:"stock_no_unique",children:"Stock Number"}),s(i,{type:"number",name:"stock_no_unique",id:"stock_no_unique",placeholder:"Stock Number",value:e==null?void 0:e.stock_no_unique,onChange:n})]}),s("small",{className:"text-danger",children:h==null?void 0:h.stock_no_unique}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"stock_name_discription",children:"Discription"}),s(i,{type:"text",name:"stock_name_discription",id:"stock_name_discription",placeholder:"Discription",value:e==null?void 0:e.stock_name_discription,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"section_id",children:"Section"}),s(L,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Section",options:a==null?void 0:a.sectionOptions,value:(b=a==null?void 0:a.sectionOptions)==null?void 0:b.find(r=>(r==null?void 0:r.value)===(e==null?void 0:e.section_id)),onChange:r=>{n({target:{value:r==null?void 0:r.value,name:"section_id"}})},isClearable:!1})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"sku_weight",children:"Weight"}),s(i,{type:"number",name:"sku_weight",id:"sku_weight",placeholder:"Weight",value:e==null?void 0:e.sku_weight,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"re_order_qty",children:"Order Quantity"}),s(i,{type:"number",name:"re_order_qty",id:"re_order_qty",placeholder:"Order Quantity",value:e==null?void 0:e.re_order_qty,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"min_reorder",children:"Minimum Stock Quantity"}),s(i,{type:"number",name:"min_reorder",id:"min_reorder",placeholder:"Minimum Stock Quantity",value:e==null?void 0:e.min_reorder,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"last_cost",children:"Last Cost"}),s(i,{type:"number",name:"last_cost",id:"last_cost",placeholder:"Last Cost",value:e==null?void 0:e.last_cost,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"upc",children:"UPC"}),s(i,{type:"text",name:"upc",id:"upc",placeholder:"UPC",value:e==null?void 0:e.upc,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"wh_bin",children:"BIN"}),s(i,{type:"text",name:"wh_bin",id:"wh_bin",placeholder:"BIN",value:e==null?void 0:e.wh_bin,onChange:n})]}),l(c,{sm:"12",children:[s(t,{className:"form-label",for:"warehouse",children:"Image Url"}),s(i,{type:"text",name:"warehouse",id:"warehouse",placeholder:"Image Url",value:e==null?void 0:e.warehouse,onChange:n})]})]}),s(_,{children:s(c,{sm:"12",className:"mt-1",children:s("div",{className:"d-flex",children:s(E,{className:"me-1",color:"primary",type:"submit",onClick:r=>{r.preventDefault(),S()},children:"Submit"})})})})]})]})})})})})};export{R as default};
