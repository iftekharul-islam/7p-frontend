import{aN as B,k as Z,r as y,a as L,dU as H,dX as K,j as e,Y as b,$ as R,Z as a,Q as I,f as o,V as A,a0 as g,a1 as c,G as P,dZ as G,I as X,bj as q,dY as z,e2 as J,d$ as D,dV as ee,dT as re,e0 as M,L as Q,dS as le,e3 as ae,S as te,T as se,ac as ne,N as U,n as $,ad as oe,ae as O}from"./index.db14b012.js";import{a as V,s as j}from"./App.c9615b80.js";import{S as W}from"./react-select.esm.1d40a800.js";import{T as Y}from"./trash-2.1f2026da.js";import"./emotion-memoize.esm.06f0e458.js";const de=()=>{const{id:N}=B(),_=V(),f=Z(),[h,u]=y.exports.useState([{}]),[w,m]=y.exports.useState(!1),{active:p,specificationData:l}=L(t=>t.productspecifications),k=t=>{_(z(t))},E=(t,n)=>{let i=[...l==null?void 0:l.labor_expense_cost_variation];i[n]=t,k({labor_expense_cost_variation:i})},r=(t,n)=>{let i=[...l==null?void 0:l.delivery_cost_variation];i[n]=t,k({delivery_cost_variation:i})};y.exports.useEffect(()=>{_(H()),_(K())},[]),y.exports.useEffect(()=>{l!=null&&l.content_cost_info&&u(Object.values(l==null?void 0:l.content_cost_info))},[l==null?void 0:l.content_cost_info]),y.exports.useEffect(()=>{var t=h.reduce(function(S,C){var F;return parseFloat(S)+parseFloat((F=C==null?void 0:C.variation_1)!=null?F:0)},0).toFixed(2),n=h.reduce(function(S,C){var F;return parseFloat(S)+parseFloat((F=C==null?void 0:C.variation_2)!=null?F:0)},0).toFixed(2),i=h.reduce(function(S,C){var F;return parseFloat(S)+parseFloat((F=C==null?void 0:C.variation_3)!=null?F:0)},0).toFixed(2),x=h.reduce(function(S,C){var F;return parseFloat(S)+parseFloat((F=C==null?void 0:C.variation_4)!=null?F:0)},0).toFixed(2);k({cost_variation_1_total:t,cost_variation_2_total:n,cost_variation_3_total:i,cost_variation_4_total:x})},[h]),y.exports.useEffect(()=>{var t,n,i;k({sum_of_cost_variation_1:(parseFloat((t=l==null?void 0:l.cost_variation_1_total)!=null?t:0)+parseFloat((n=l==null?void 0:l.labor_expense_cost_variation[0])!=null?n:0)+parseFloat((i=l==null?void 0:l.delivery_cost_variation[0])!=null?i:0)).toFixed(2)})},[l==null?void 0:l.cost_variation_1_total,l==null?void 0:l.labor_expense_cost_variation[0],l==null?void 0:l.delivery_cost_variation[0]]),y.exports.useEffect(()=>{var t,n,i;k({sum_of_cost_variation_2:(parseFloat((t=l==null?void 0:l.cost_variation_2_total)!=null?t:0)+parseFloat((n=l==null?void 0:l.labor_expense_cost_variation[1])!=null?n:0)+parseFloat((i=l==null?void 0:l.delivery_cost_variation[1])!=null?i:0)).toFixed(2)})},[l==null?void 0:l.cost_variation_2_total,l==null?void 0:l.labor_expense_cost_variation[1],l==null?void 0:l.delivery_cost_variation[1]]),y.exports.useEffect(()=>{var t,n,i;k({sum_of_cost_variation_3:(parseFloat((t=l==null?void 0:l.cost_variation_3_total)!=null?t:0)+parseFloat((n=l==null?void 0:l.labor_expense_cost_variation[2])!=null?n:0)+parseFloat((i=l==null?void 0:l.delivery_cost_variation[2])!=null?i:0)).toFixed(2)})},[l==null?void 0:l.cost_variation_3_total,l==null?void 0:l.labor_expense_cost_variation[2],l==null?void 0:l.delivery_cost_variation[2]]),y.exports.useEffect(()=>{var t,n,i;k({sum_of_cost_variation_4:(parseFloat((t=l==null?void 0:l.cost_variation_4_total)!=null?t:0)+parseFloat((n=l==null?void 0:l.labor_expense_cost_variation[3])!=null?n:0)+parseFloat((i=l==null?void 0:l.delivery_cost_variation[3])!=null?i:0)).toFixed(2)})},[l==null?void 0:l.cost_variation_4_total,l==null?void 0:l.labor_expense_cost_variation[3],l==null?void 0:l.delivery_cost_variation[3]]);const s=(t,n,i)=>{const x=h==null?void 0:h.map((S,C)=>C==i?{...S,[t]:n}:S);u(x)},d=t=>{const n=h==null?void 0:h.filter((i,x)=>x!=t);u(n)},v=()=>{const t=[...h];t==null||t.push({}),u(t)},T=async()=>{var n;m(!0);const t=await _(J({id:N,data:{...l,cost_variation:h}}));(n=t==null?void 0:t.payload)!=null&&n.status&&(_(D()),f("/specification-product")),m(!1)};return e(y.exports.Fragment,{children:e(b,{children:e(R,{children:e(a,{sm:"12",children:e(I,{children:o(A,{children:[o(b,{children:[e(a,{sm:"1",className:"mb-1",children:e(g,{className:"form-label",children:"Qty pcs"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"1",children:"1"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"10",children:"10"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"100",children:"100"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"1000",children:"1000"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"10000",children:"10000"})})]}),o(b,{children:[e(a,{sm:"1",className:"mb-1",children:e(g,{className:"form-label",children:"Cost, $"})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"cost_of_1",children:e(c,{type:"number",name:"cost_of_1",id:"cost_of_1",value:l==null?void 0:l.cost_of_1,onChange:t=>{var n;return k({cost_of_1:(n=t==null?void 0:t.target)==null?void 0:n.value})}})})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"cost_of_10",children:e(c,{type:"number",name:"cost_of_10",id:"cost_of_10",value:l==null?void 0:l.cost_of_10,onChange:t=>{var n;return k({cost_of_10:(n=t==null?void 0:t.target)==null?void 0:n.value})}})})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"cost_of_100",children:e(c,{type:"number",name:"cost_of_100",id:"cost_of_100",value:l==null?void 0:l.cost_of_100,onChange:t=>{var n;return k({cost_of_100:(n=t==null?void 0:t.target)==null?void 0:n.value})}})})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"cost_of_1000",children:e(c,{type:"number",name:"cost_of_1000",id:"cost_of_1000",value:l==null?void 0:l.cost_of_1000,onChange:t=>{var n;return k({cost_of_1000:(n=t==null?void 0:t.target)==null?void 0:n.value})}})})}),e(a,{sm:"2",className:"mb-1",children:e(g,{className:"form-label",for:"cost_of_10000",children:e(c,{type:"number",name:"cost_of_10000",id:"cost_of_10000",value:l==null?void 0:l.cost_of_10000,onChange:t=>{var n;return k({cost_of_10000:(n=t==null?void 0:t.target)==null?void 0:n.value})}})})})]}),o(b,{className:"rounded bg-secondary p-1 mb-1 text-capitilize",children:[e(a,{sm:"1 text-light fw-bolder"}),e(a,{sm:"3 text-light fw-bolder ",children:"Part Name"}),e(a,{sm:"1 text-light fw-bolder",children:"Variation 1"}),e(a,{sm:"1 text-light fw-bolder",children:"Variation 2"}),e(a,{sm:"1 text-light fw-bolder",children:"Variation 3"}),e(a,{sm:"1 text-light fw-bolder",children:"Variation 4"}),e(a,{sm:"2 text-light fw-bolder",children:"Supplier Name"}),e(a,{sm:"1 text-light fw-bolder",children:"Action"})]}),e("div",{children:h==null?void 0:h.map((t,n)=>o(b,{className:"border color-primary rounded py-1",children:[o(a,{sm:"1",className:"d-flex align-items-center justify-content-end",children:[" ","#",n+1]}),e(a,{sm:"3",children:e(c,{type:"text",name:"parts_name",id:"parts_name",placeholder:"Parts Name",value:t==null?void 0:t.parts_name,onChange:i=>{var x;return s("parts_name",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"1",children:e(c,{type:"number",name:"variation_1",id:"variation_1",placeholder:"Cost",value:t==null?void 0:t.variation_1,onChange:i=>{var x;return s("variation_1",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"1",children:e(c,{type:"number",name:"variation_2",id:"variation_2",placeholder:"Cost",value:t==null?void 0:t.variation_2,onChange:i=>{var x;return s("variation_2",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"1",children:e(c,{type:"number",name:"variation_3",id:"variation_3",placeholder:"Cost",value:t==null?void 0:t.variation_3,onChange:i=>{var x;return s("variation_3",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"1",children:e(c,{type:"number",name:"variation_4",id:"variation_4",placeholder:"Cost",value:t==null?void 0:t.variation_4,onChange:i=>{var x;return s("variation_4",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"2",children:e(c,{type:"text",name:"supplier_name",id:"supplier_name",placeholder:"Supplier Name",value:t==null?void 0:t.supplier_name,onChange:i=>{var x;return s("supplier_name",(x=i==null?void 0:i.target)==null?void 0:x.value,n)}})}),e(a,{sm:"1",children:e(P,{className:"me-1",color:"danger",type:"submit",onClick:i=>{i.preventDefault(),d(n)},children:"Remove"})})]},n))}),o(b,{className:"border color-primary rounded py-1",children:[e(a,{sm:"1"}),e(a,{sm:"3",className:"d-flex align-items-center",children:e(g,{children:"Total (SUM), $:"})}),e(a,{sm:"1",children:e(c,{type:"number",name:"cost_variation_1_total",id:"cost_variation_1_total",placeholder:"0",value:l==null?void 0:l.cost_variation_1_total,disabled:!0})}),e(a,{sm:"1",children:e(c,{type:"number",name:"cost_variation_2_total",id:"cost_variation_2_total",placeholder:"0",value:l==null?void 0:l.cost_variation_2_total,disabled:!0})}),e(a,{sm:"1",children:e(c,{type:"number",name:"cost_variation_3_total",id:"cost_variation_3_total",placeholder:"0",value:l==null?void 0:l.cost_variation_3_total,disabled:!0})}),e(a,{sm:"1",children:e(c,{type:"number",name:"cost_variation_4_total",id:"cost_variation_4_total",placeholder:"0",value:l==null?void 0:l.cost_variation_4_total,disabled:!0})}),e(a,{sm:"2",children:e(P,{className:"me-1",color:"success",type:"submit",onClick:t=>{t.preventDefault(),v()},children:"Add New Row"})})]}),o(b,{className:"border color-primary rounded py-1",children:[e(a,{sm:"1"}),e(a,{sm:"3",className:"d-flex align-items-center",children:e(g,{children:"Delivery to us, $"})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.delivery_cost_variation[0],onChange:t=>{var n;return r((n=t==null?void 0:t.target)==null?void 0:n.value,0)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.delivery_cost_variation[1],onChange:t=>{var n;return r((n=t==null?void 0:t.target)==null?void 0:n.value,1)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.delivery_cost_variation[2],onChange:t=>{var n;return r((n=t==null?void 0:t.target)==null?void 0:n.value,2)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.delivery_cost_variation[3],onChange:t=>{var n;return r((n=t==null?void 0:t.target)==null?void 0:n.value,3)}})})]}),o(b,{className:"border color-primary rounded py-1",children:[e(a,{sm:"1"}),e(a,{sm:"3",className:"d-flex align-items-center",children:e(g,{children:"Labor Expense to complete Production Process, $"})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.labor_expense_cost_variation[0],onChange:t=>{var n;return E((n=t==null?void 0:t.target)==null?void 0:n.value,0)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.labor_expense_cost_variation[1],onChange:t=>{var n;return E((n=t==null?void 0:t.target)==null?void 0:n.value,1)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.labor_expense_cost_variation[2],onChange:t=>{var n;return E((n=t==null?void 0:t.target)==null?void 0:n.value,2)}})}),e(a,{sm:"1",children:e(c,{type:"number",value:l==null?void 0:l.labor_expense_cost_variation[3],onChange:t=>{var n;return E((n=t==null?void 0:t.target)==null?void 0:n.value,3)}})})]}),o(b,{className:"mt-1",children:[e(a,{sm:"3"}),e(a,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 1"}),e(a,{sm:"3",children:e(c,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:l==null?void 0:l.sum_of_cost_variation_1,disabled:!0})}),e(a,{sm:"3"})]}),o(b,{className:"mt-1",children:[e(a,{sm:"3"}),e(a,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 2"}),e(a,{sm:"3",children:e(c,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:l==null?void 0:l.sum_of_cost_variation_2,disabled:!0})}),e(a,{sm:"3"})]}),o(b,{className:"mt-1",children:[e(a,{sm:"3"}),e(a,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 3"}),e(a,{sm:"3",children:e(c,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:l==null?void 0:l.sum_of_cost_variation_3,disabled:!0})}),e(a,{sm:"3"})]}),o(b,{className:"mt-1",children:[e(a,{sm:"3"}),e(a,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 4"}),e(a,{sm:"3",children:e(c,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:l==null?void 0:l.sum_of_cost_variation_4,disabled:!0})}),e(a,{sm:"3"})]}),e(b,{children:e(a,{sm:"12",children:o("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(P,{className:"add-new-user",color:"primary",onClick:t=>{t.preventDefault(),_(G())},children:"Previous"}),e(P,{className:"add-new-user",color:"success",onClick:t=>{t.preventDefault(),T()},disabled:w,children:w?o(X,{children:[e(q,{className:"me-25",size:"sm"}),"Updating"]}):"Update"})]})})})]})})})})})})},me=()=>{y.exports.useState(null);const N=V(),{specificationData:_,statusesOptions:f,webImageStatusOptions:h}=L(m=>m.productspecifications);y.exports.useEffect(()=>{N(ee()),N(re())},[]);const u=m=>{N(z(m))},w=(m,p)=>{var l;N(z({[m]:(l=p==null?void 0:p.target)==null?void 0:l.files}))};return e(y.exports.Fragment,{children:e(b,{children:e(R,{children:e(a,{sm:"12",children:e(I,{children:o(A,{children:[o(b,{children:[o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"status",children:"Status"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:f,value:f==null?void 0:f.find(m=>(m==null?void 0:m.value)==(_==null?void 0:_.status)),onChange:m=>u({status:m==null?void 0:m.value})})]}),e(a,{sm:"8"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"web_image_status",children:"Web image status"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Web image status",options:h,value:h==null?void 0:h.find(m=>(m==null?void 0:m.value)==(_==null?void 0:_.web_image_status)),onChange:m=>u({web_image_status:m==null?void 0:m.value})})]}),e(a,{sm:"8"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"product_images",children:"Product Image"}),e(c,{type:"file",name:"product_images",onChange:m=>w(product_images,m)})]}),e(a,{sm:"4",className:"mb-1"}),e(a,{sm:"2",className:"mb-1"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"product_name",children:"Product Name"}),e(c,{type:"text",name:"product_name",id:"product_name",placeholder:"Product Name",value:_==null?void 0:_.product_name,onChange:m=>{var p;return u({product_name:(p=m==null?void 0:m.target)==null?void 0:p.value})}})]}),e(a,{sm:"8",className:"mb-1"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"product_sku",children:"Product SKU"}),e(c,{type:"text",name:"product_sku",id:"product_sku",placeholder:"Product SKU",value:_==null?void 0:_.product_sku,onChange:m=>{var p;return u({product_sku:(p=m==null?void 0:m.target)==null?void 0:p.value})},disabled:!0})]}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"previous_sku",children:"."}),e(c,{type:"text",name:"previous_sku",id:"previous_sku",placeholder:"Enter previous SKU to copy or leave empty",value:_==null?void 0:_.previous_sku,onChange:m=>{var p;return u({previous_sku:(p=m==null?void 0:m.target)==null?void 0:p.value})}})]}),e(a,{sm:"2",className:"mb-1"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"name",children:"Product Description"}),e(c,{type:"textarea",rows:"3",name:"product_description",id:"product_description",placeholder:"Product Description",value:_==null?void 0:_.product_description,onChange:m=>{var p;return u({product_description:(p=m==null?void 0:m.target)==null?void 0:p.value})}})]}),e(a,{sm:"8",className:"mb-1"}),o(a,{sm:"4",className:"mb-1",children:[e(g,{className:"form-label",for:"name",children:"General Note"}),e(c,{type:"textarea",rows:"3",name:"general_note",id:"general_note",placeholder:"General Note",value:_==null?void 0:_.product_general_note,onChange:m=>{var p;return u({product_general_note:(p=m==null?void 0:m.target)==null?void 0:p.value})}})]}),e(a,{sm:"8",className:"mb-1"})]}),e(b,{children:e(a,{sm:"12",children:o("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(P,{className:"add-new-user",color:"primary",onClick:m=>{m.preventDefault(),N(G())},children:"Previous"}),e(P,{className:"add-new-user",color:"primary",onClick:m=>{m.preventDefault(),N(M())},children:"Next"})]})})})]})})})})})})},ce=()=>{const N=V(),[_,f]=y.exports.useState([{}]),{active:h,specificationData:u,productionCategoriesOptions:w}=L(r=>r.productspecifications),m=r=>{N(z(r))},p=r=>{var s,d;m({[(s=r==null?void 0:r.target)==null?void 0:s.name]:(d=r==null?void 0:r.target)==null?void 0:d.files[0]})};y.exports.useEffect(()=>{N(H()),N(K())},[]),y.exports.useEffect(()=>{u&&f(u==null?void 0:u.special_note)},[u]),y.exports.useEffect(()=>{N(z({special_note_arr:_}))},[h]);const l=(r,s,d)=>{const v=_==null?void 0:_.map((T,t)=>t==d?{...T,[r]:s}:T);f(v)},k=r=>{const s=_==null?void 0:_.filter((d,v)=>v!=r);f(s)},E=()=>{const r=[..._];r==null||r.push({}),f(r)};return e(y.exports.Fragment,{children:e(b,{children:e(R,{children:e(a,{sm:"12",children:e(I,{children:o(A,{children:[o(b,{children:[o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"production_category_id",children:"Production category"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:w,value:w==null?void 0:w.find(r=>(r==null?void 0:r.value)==(u==null?void 0:u.production_category_id)),onChange:r=>m({production_category_id:r==null?void 0:r.value})})]}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"production_image_location",children:"Production image location"}),e(c,{type:"text",name:"production_image_location",id:"production_image_location",placeholder:"Enter  Product Weight",value:u==null?void 0:u.production_image_location,onChange:r=>{var s;return m({production_image_location:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"art_work_location",children:"Art work image location"}),e(c,{type:"text",name:"art_work_location",id:"art_work_location",placeholder:"Enter  Length",value:u==null?void 0:u.art_work_location,onChange:r=>{var s;return m({art_work_location:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"product_details_file",children:"Product details file"}),e(c,{type:"file",name:"product_details_file",onChange:p})]})]}),o(b,{children:[e(a,{sm:"1"}),o(a,{sm:"4",children:[o(a,{sm:"12",className:"mb-1",children:[e("h4",{children:"Production Settings"}),e("hr",{})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"temperature",children:"Temperature"}),e(c,{type:"text",name:"temperature",id:"temperature",placeholder:"Enter Temperature",value:u==null?void 0:u.temperature,onChange:r=>{var s;return m({temperature:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"dwell_time",children:"Dwell time"}),e(c,{type:"text",name:"dwell_time",id:"dwell_time",placeholder:"Enter Dwell time",value:u==null?void 0:u.dwell_time,onChange:r=>{var s;return m({dwell_time:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"pressure",children:"Pressure"}),e(c,{type:"text",name:"pressure",id:"pressure",placeholder:"Enter Pressure",value:u==null?void 0:u.pressure,onChange:r=>{var s;return m({pressure:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"run_time",children:"Run Time"}),e(c,{type:"text",name:"run_time",id:"run_time",placeholder:"Enter Run Time",value:u==null?void 0:u.run_time,onChange:r=>{var s;return m({run_time:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]})]}),e(a,{sm:"2"}),o(a,{sm:"4",children:[o(a,{sm:"12",className:"mb-1",children:[e("h4",{children:"Personalization Details"}),e("hr",{})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"type",children:"Type"}),e(c,{type:"text",name:"type",id:"type",placeholder:"Enter Type",value:u==null?void 0:u.type,onChange:r=>{var s;return m({type:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"font",children:"Font"}),e(c,{type:"text",name:"font",id:"font",placeholder:"Enter Font",value:u==null?void 0:u.font,onChange:r=>{var s;return m({font:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"variation_name",children:"Variation name"}),e(c,{type:"text",name:"variation_name",id:"variation_name",placeholder:"Enter Variation name",value:u==null?void 0:u.variation_name,onChange:r=>{var s;return m({variation_name:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),o(a,{sm:"12",className:"mb-1",children:[e(g,{className:"form-label",for:"details",children:"Details"}),e(c,{type:"text",name:"details",id:"details",placeholder:"Enter Details",value:u==null?void 0:u.details,onChange:r=>{var s;return m({details:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]})]})]}),e("hr",{}),o("div",{children:[_==null?void 0:_.map((r,s)=>o(b,{children:[e(a,{sm:"1"}),e(a,{sm:"10",className:"p-1 mb-1 border border-primary rounded",children:o(b,{children:[e(a,{sm:"4",children:e(c,{type:"text",name:"special_note",id:"special_note",placeholder:"Special Notes for Product Options",value:r==null?void 0:r.special_note,onChange:d=>{var v;return l("special_note",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})}),e(a,{sm:"4",children:e(c,{type:"text",name:"option_name",id:"option_name",placeholder:"Option Name",value:r==null?void 0:r.option_name,onChange:d=>{var v;return l("option_name",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})}),e(a,{sm:"3",children:e(c,{type:"text",name:"details",id:"details",placeholder:"Details",value:r==null?void 0:r.details,onChange:d=>{var v;return l("details",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})}),e(a,{sm:"1",className:"d-flex align-items-center",children:e(Q,{className:"text-truncate text-capitalize align-middle",onClick:d=>{d.preventDefault(),k(s)},children:e(Y,{size:24,className:"text-danger me-50"})})})]})}),e(a,{sm:"1"})]},s)),o(b,{children:[e(a,{sm:"10"}),e(a,{sm:"2",className:"mt-1",children:e("div",{className:"d-flex",children:e(P,{className:"me-1",color:"success",type:"submit",onClick:r=>{r.preventDefault(),E()},children:"Add Item"})})})]})]}),e(b,{children:e(a,{sm:"12",children:o("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(P,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),N(G())},children:"Previous"}),e(P,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),N(M())},children:"Next"})]})})})]})})})})})})},he=()=>{const N=V(),[_,f]=y.exports.useState([{}]),{specificationData:h,makeSampleDataOptions:u,vendorOptions:w,active:m}=L(r=>r.productspecifications),p=r=>{N(z(r))};y.exports.useEffect(()=>{h&&f(h==null?void 0:h.spec_table_data)},[h]),y.exports.useEffect(()=>{N(H()),N(K()),N(le())},[]),y.exports.useEffect(()=>{p({spec_table_data:_})},[m]);const l=(r,s,d)=>{const v=_==null?void 0:_.map((T,t)=>t==d?{...T,[r]:s}:T);f(v)},k=r=>{const s=_==null?void 0:_.filter((d,v)=>v!=r);f(s)},E=()=>{const r=[..._];r==null||r.push({}),f(r)};return e(y.exports.Fragment,{children:e(b,{children:e(R,{children:e(a,{sm:"12",children:e(I,{children:o(A,{children:[o(b,{children:[o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"make_sample",children:"Make sample?"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:u,value:u==null?void 0:u.find(r=>(r==null?void 0:r.value)==(h==null?void 0:h.make_sample)),onChange:r=>p({make_sample:r==null?void 0:r.value})})]}),e(a,{sm:"1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"product_weight",children:"Product Weight (lb)"}),e(c,{type:"number",name:"product_weight",id:"product_weight",placeholder:"Enter Product Weight",value:h==null?void 0:h.product_weight,onChange:r=>{var s;return p({product_weight:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"product_length",children:"Length (in)"}),e(c,{type:"number",name:"product_length",id:"product_length",placeholder:"Enter  Length",value:h==null?void 0:h.product_length,onChange:r=>{var s;return p({product_length:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"product_width",children:"Width (in)"}),e(c,{type:"number",name:"product_width",id:"product_width",placeholder:"Enter  Width",value:h==null?void 0:h.product_width,onChange:r=>{var s;return p({product_width:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"product_height",children:"Height (in)"}),e(c,{type:"number",name:"product_height",id:"productproduct_height_description",placeholder:"Enter  Height",value:h==null?void 0:h.product_height,onChange:r=>{var s;return p({product_height:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"packaging_type_name",children:"Packaging Type Name"}),e(c,{type:"text",name:"packaging_type_name",id:"packaging_type_name",placeholder:"Enter  Packaging Type Name",value:h==null?void 0:h.packaging_type_name,onChange:r=>{var s;return p({packaging_type_name:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"packaging_size",children:"Packaging size LxWxH (in)"}),e(c,{type:"text",name:"packaging_size",id:"packaging_size",placeholder:"Enter  Packaging size LxWxH",value:h==null?void 0:h.packaging_size,onChange:r=>{var s;return p({packaging_size:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"packaging_weight",children:"Packaging Weight (lb)"}),e(c,{type:"number",name:"packaging_weight",id:"packaging_weight",placeholder:"Enter  ackaging Weight",value:h==null?void 0:h.packaging_weight,onChange:r=>{var s;return p({packaging_weight:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"}),o(a,{sm:"3",className:"mb-1",children:[e(g,{className:"form-label",for:"total_weight",children:"Total Weight"}),e(c,{type:"number",name:"total_weight",id:"total_weight",placeholder:"Enter  Total Weight",value:h==null?void 0:h.total_weight,onChange:r=>{var s;return p({total_weight:(s=r==null?void 0:r.target)==null?void 0:s.value})}})]}),e(a,{sm:"1",className:"mb-1"})]}),e("hr",{}),o("div",{children:[_==null?void 0:_.map((r,s)=>o(b,{className:"p-1 mb-1 border border-primary rounded",children:[e(a,{sm:"1",className:"d-flex align-items-center",children:s+1}),o(a,{sm:"2",children:[e(c,{type:"text",className:"mb-1",name:"part_name",id:"part_name",placeholder:"Part Name",value:r==null?void 0:r.part_name,onChange:d=>{var v;return l("part_name",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}}),e(c,{type:"text",name:"sku",id:"sku",placeholder:"Product SKU",value:r==null?void 0:r.sku,onChange:d=>{var v;return l("sku",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})]}),o(a,{sm:"2",children:[e(W,{className:"react-select mb-1",classNamePrefix:"select",theme:j,placeholder:"Select a vendor",options:w,value:w==null?void 0:w.find(d=>(d==null?void 0:d.value)===parseInt(r==null?void 0:r.option_category)),onChange:d=>l("option_category",d==null?void 0:d.value,s)}),e(c,{type:"text",name:"url",id:"url",placeholder:"Product URL",value:r==null?void 0:r.url,onChange:d=>{var v;return l("url",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})]}),o(a,{sm:"2",children:[e(c,{type:"text",className:"mb-1",name:"material",id:"material",placeholder:"Material",value:r==null?void 0:r.material,onChange:d=>{var v;return l("material",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}}),e(c,{type:"text",name:"size",id:"size",placeholder:"Size",value:r==null?void 0:r.size,onChange:d=>{var v;return l("size",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})]}),o(a,{sm:"2",children:[e(c,{type:"text",className:"mb-1",name:"color",id:"color",placeholder:"Color",value:r==null?void 0:r.color,onChange:d=>{var v;return l("color",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}}),e(c,{type:"text",name:"type",id:"type",placeholder:"Type",value:r==null?void 0:r.type,onChange:d=>{var v;return l("type",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})]}),o(a,{sm:"2",children:[e(c,{type:"number",className:"mb-1",name:"price",id:"price",placeholder:"Price",value:r==null?void 0:r.price,onChange:d=>{var v;return l("price",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}}),e(c,{type:"text",className:"mb-1",name:"note",id:"note",placeholder:"Note",value:r==null?void 0:r.note,onChange:d=>{var v;return l("note",(v=d==null?void 0:d.target)==null?void 0:v.value,s)}})]}),e(a,{sm:"1",className:"d-flex align-items-center",children:e(Q,{className:"text-truncate text-capitalize align-middle",onClick:d=>{d.preventDefault(),k(s)},children:e(Y,{size:24,className:"text-danger me-50"})})})]},s)),e(b,{children:e(a,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(P,{className:"me-1",color:"success",type:"submit",onClick:r=>{r.preventDefault(),E()},children:"Add Item"})})})})]}),e(b,{children:e(a,{sm:"12",children:o("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(P,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),N(G())},children:"Previous"}),e(P,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),N(M())},children:"Next"})]})})})]})})})})})})},pe=()=>{const{id:N}=B(),_=V(),{active:f}=L(h=>h==null?void 0:h.productspecifications);return y.exports.useEffect(()=>{N&&_(ae(N))},[N]),o(y.exports.Fragment,{children:[o(I,{className:"p",children:[e(te,{children:e(se,{tag:"h4",children:"New Product specifications"})}),o(ne,{pills:!0,className:"mx-2 orange",children:[e(U,{children:e($,{active:f===1,children:"General info"})}),e(U,{children:e($,{active:f===2,children:"Product specification"})}),e(U,{children:e($,{active:f===3,children:"Product instruction"})}),e(U,{children:e($,{active:f===4,children:"Financial info"})})]})]}),e(I,{className:"p-1",children:o(oe,{activeTab:f,children:[e(O,{tabId:1,children:e(me,{})}),e(O,{tabId:2,children:e(he,{})}),e(O,{tabId:3,children:e(ce,{})}),e(O,{tabId:4,children:e(de,{})})]})})]})};export{pe as default};
