import{aN as N,r as i,k as b,a as v,cN as D,j as e,Y as u,$ as E,Z as d,f as t,Q as S,S as j,T as O,V as $,a0 as y,a1 as m,G as k,cO as w}from"./index.db14b012.js";import{a as B}from"./App.c9615b80.js";const T=()=>{const{id:n}=N(),[a,g]=i.exports.useState(null),[l,f]=i.exports.useState(null),_=B(),C=b(),o=v(r=>r.categories);i.exports.useEffect(()=>{n&&_(D(n))},[n]),i.exports.useEffect(()=>{o!=null&&o.category&&g(o==null?void 0:o.category)},[o==null?void 0:o.category]);const p=r=>{var c,s;g({...a,[(c=r.target)==null?void 0:c.name]:(s=r.target)==null?void 0:s.value})},x=async()=>{var c,s,h;const r=await _(w({id:n,data:a}));(c=r==null?void 0:r.payload)!=null&&c.status?C("/category"):f((h=(s=r==null?void 0:r.payload)==null?void 0:s.data)==null?void 0:h.errors)};return e(i.exports.Fragment,{children:e(u,{children:e(E,{children:e(d,{sm:"6",children:t(S,{children:[e(j,{children:e(O,{tag:"h4",children:"Edit Production Categories"})}),t($,{children:[t(u,{children:[t(d,{sm:"12",children:[e(y,{className:"form-label",for:"production_category_code",children:"Category Code"}),e(m,{type:"text",name:"production_category_code",id:"production_category_code",placeholder:"Enter Category Code",value:a==null?void 0:a.production_category_code,onChange:p}),e("small",{className:"text-danger",children:l==null?void 0:l.production_category_code})]}),t(d,{sm:"12",children:[e(y,{className:"form-label",for:"production_category_description",children:"Description"}),e(m,{type:"text",name:"production_category_description",id:"production_category_description",placeholder:"Enter Description",value:a==null?void 0:a.production_category_description,onChange:p})]}),t(d,{sm:"12",children:[e(y,{className:"form-label",for:"production_category_display_order",children:"Display Order"}),e(m,{type:"number",name:"production_category_display_order",id:"production_category_display_order",placeholder:"Enter Display Order",value:a==null?void 0:a.production_category_display_order,onChange:p})]})]}),e(u,{children:e(d,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(k,{className:"me-1",color:"primary",type:"submit",onClick:r=>{r.preventDefault(),x()},children:"Submit"})})})})]})]})})})})})};export{T as default};
