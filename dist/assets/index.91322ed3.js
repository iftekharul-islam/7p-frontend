import{r as N,a as L,ev as H,ey as M,ez as F,j as e,Y as p,$ as V,Z as t,S as E,f as d,W as $,a0 as _,a1 as u,H as C,eA as A,J as B,bw as K,eB as J,eC as Q,ew as Y,eu as Z,eD as O,L as U,et as q,eE as X,aC as D,aD as ee,T as re,V as le,ac as ae,N as T,o as I,ad as te,ae as z}from"./index.b5767533.js";import{a as R,s as j}from"./App.bf73fcbb.js";import{S as W}from"./react-select.esm.97e349dc.js";import{T as G}from"./trash-2.73e48549.js";import"./emotion-memoize.esm.06f0e458.js";const ne=()=>{const v=R(),[n,b]=N.exports.useState([{}]),[m,f]=N.exports.useState(!1),{specificationData:r}=L(a=>a.productspecifications),o=a=>{v(F(a))},g=(a,c)=>{let i=[...r==null?void 0:r.labor_expense_cost_variation];i[c]=a,o({labor_expense_cost_variation:i})},w=(a,c)=>{let i=[...r==null?void 0:r.delivery_cost_variation];i[c]=a,o({delivery_cost_variation:i})};N.exports.useEffect(()=>{v(H()),v(M())},[]),N.exports.useEffect(()=>{v(F({cost_variation:n}))},[n]),N.exports.useEffect(()=>{var a=n.reduce(function(S,x){var k;return parseFloat(S)+parseFloat((k=x==null?void 0:x.variation_1)!=null?k:0)},0).toFixed(2),c=n.reduce(function(S,x){var k;return parseFloat(S)+parseFloat((k=x==null?void 0:x.variation_2)!=null?k:0)},0).toFixed(2),i=n.reduce(function(S,x){var k;return parseFloat(S)+parseFloat((k=x==null?void 0:x.variation_3)!=null?k:0)},0).toFixed(2),y=n.reduce(function(S,x){var k;return parseFloat(S)+parseFloat((k=x==null?void 0:x.variation_4)!=null?k:0)},0).toFixed(2);o({cost_variation_1_total:a,cost_variation_2_total:c,cost_variation_3_total:i,cost_variation_4_total:y})},[n]),N.exports.useEffect(()=>{var a,c,i;o({sum_of_cost_variation_1:(parseFloat((a=r==null?void 0:r.cost_variation_1_total)!=null?a:0)+parseFloat((c=r==null?void 0:r.labor_expense_cost_variation[0])!=null?c:0)+parseFloat((i=r==null?void 0:r.delivery_cost_variation[0])!=null?i:0)).toFixed(2)})},[r==null?void 0:r.cost_variation_1_total,r==null?void 0:r.labor_expense_cost_variation[0],r==null?void 0:r.delivery_cost_variation[0]]),N.exports.useEffect(()=>{var a,c,i;o({sum_of_cost_variation_2:(parseFloat((a=r==null?void 0:r.cost_variation_2_total)!=null?a:0)+parseFloat((c=r==null?void 0:r.labor_expense_cost_variation[1])!=null?c:0)+parseFloat((i=r==null?void 0:r.delivery_cost_variation[1])!=null?i:0)).toFixed(2)})},[r==null?void 0:r.cost_variation_2_total,r==null?void 0:r.labor_expense_cost_variation[1],r==null?void 0:r.delivery_cost_variation[1]]),N.exports.useEffect(()=>{var a,c,i;o({sum_of_cost_variation_3:(parseFloat((a=r==null?void 0:r.cost_variation_3_total)!=null?a:0)+parseFloat((c=r==null?void 0:r.labor_expense_cost_variation[2])!=null?c:0)+parseFloat((i=r==null?void 0:r.delivery_cost_variation[2])!=null?i:0)).toFixed(2)})},[r==null?void 0:r.cost_variation_3_total,r==null?void 0:r.labor_expense_cost_variation[2],r==null?void 0:r.delivery_cost_variation[2]]),N.exports.useEffect(()=>{var a,c,i;o({sum_of_cost_variation_4:(parseFloat((a=r==null?void 0:r.cost_variation_4_total)!=null?a:0)+parseFloat((c=r==null?void 0:r.labor_expense_cost_variation[3])!=null?c:0)+parseFloat((i=r==null?void 0:r.delivery_cost_variation[3])!=null?i:0)).toFixed(2)})},[r==null?void 0:r.cost_variation_4_total,r==null?void 0:r.labor_expense_cost_variation[3],r==null?void 0:r.delivery_cost_variation[3]]);const P=(a,c,i)=>{const y=n==null?void 0:n.map((S,x)=>x==i?{...S,[a]:c}:S);b(y)},l=a=>{const c=n==null?void 0:n.filter((i,y)=>y!=a);b(c)},s=()=>{const a=[...n];a==null||a.push({}),b(a)},h=async()=>{var c;f(!0);const a=await v(J(r));(c=a==null?void 0:a.payload)!=null&&c.status&&(v(Q()),navigate("/specification-product")),f(!1)};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[d(p,{children:[e(t,{sm:"1",className:"mb-1",children:e(_,{className:"form-label",children:"Qty pcs"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"1",children:"1"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"10",children:"10"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"100",children:"100"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"1000",children:"1000"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"10000",children:"10000"})})]}),d(p,{children:[e(t,{sm:"1",className:"mb-1",children:e(_,{className:"form-label",children:"Cost, $"})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"cost_of_1",children:e(u,{type:"number",name:"cost_of_1",id:"cost_of_1",value:r==null?void 0:r.cost_of_1,onChange:a=>{var c;return o({cost_of_1:(c=a==null?void 0:a.target)==null?void 0:c.value})}})})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"cost_of_10",children:e(u,{type:"number",name:"cost_of_10",id:"cost_of_10",value:r==null?void 0:r.cost_of_10,onChange:a=>{var c;return o({cost_of_10:(c=a==null?void 0:a.target)==null?void 0:c.value})}})})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"cost_of_100",children:e(u,{type:"number",name:"cost_of_100",id:"cost_of_100",value:r==null?void 0:r.cost_of_100,onChange:a=>{var c;return o({cost_of_100:(c=a==null?void 0:a.target)==null?void 0:c.value})}})})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"cost_of_1000",children:e(u,{type:"number",name:"cost_of_1000",id:"cost_of_1000",value:r==null?void 0:r.cost_of_1000,onChange:a=>{var c;return o({cost_of_1000:(c=a==null?void 0:a.target)==null?void 0:c.value})}})})}),e(t,{sm:"2",className:"mb-1",children:e(_,{className:"form-label",for:"cost_of_10000",children:e(u,{type:"number",name:"cost_of_10000",id:"cost_of_10000",value:r==null?void 0:r.cost_of_10000,onChange:a=>{var c;return o({cost_of_10000:(c=a==null?void 0:a.target)==null?void 0:c.value})}})})})]}),d(p,{className:"rounded bg-secondary p-1 mb-1 text-capitilize",children:[e(t,{sm:"1 text-light fw-bolder"}),e(t,{sm:"3 text-light fw-bolder ",children:"Part Name"}),e(t,{sm:"1 text-light fw-bolder",children:"Variation 1"}),e(t,{sm:"1 text-light fw-bolder",children:"Variation 2"}),e(t,{sm:"1 text-light fw-bolder",children:"Variation 3"}),e(t,{sm:"1 text-light fw-bolder",children:"Variation 4"}),e(t,{sm:"2 text-light fw-bolder",children:"Supplier Name"}),e(t,{sm:"1 text-light fw-bolder",children:"Action"})]}),e("div",{children:n==null?void 0:n.map((a,c)=>d(p,{className:"border color-primary rounded py-1",children:[d(t,{sm:"1",className:"d-flex align-items-center justify-content-end",children:[" ","#",c+1]}),e(t,{sm:"3",children:e(u,{type:"text",name:"parts_name",id:"parts_name",placeholder:"Parts Name",value:a==null?void 0:a.parts_name,onChange:i=>{var y;return P("parts_name",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"1",children:e(u,{type:"number",name:"variation_1",id:"variation_1",placeholder:"Cost",value:a==null?void 0:a.variation_1,onChange:i=>{var y;return P("variation_1",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"1",children:e(u,{type:"number",name:"variation_2",id:"variation_2",placeholder:"Cost",value:a==null?void 0:a.variation_2,onChange:i=>{var y;return P("variation_2",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"1",children:e(u,{type:"number",name:"variation_3",id:"variation_3",placeholder:"Cost",value:a==null?void 0:a.variation_3,onChange:i=>{var y;return P("variation_3",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"1",children:e(u,{type:"number",name:"variation_4",id:"variation_4",placeholder:"Cost",value:a==null?void 0:a.variation_4,onChange:i=>{var y;return P("variation_4",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"2",children:e(u,{type:"text",name:"supplier_name",id:"supplier_name",placeholder:"Supplier Name",value:a==null?void 0:a.supplier_name,onChange:i=>{var y;return P("supplier_name",(y=i==null?void 0:i.target)==null?void 0:y.value,c)}})}),e(t,{sm:"1",children:e(C,{className:"me-1",color:"danger",type:"submit",onClick:i=>{i.preventDefault(),l(c)},children:"Remove"})})]},c))}),d(p,{className:"border color-primary rounded py-1",children:[e(t,{sm:"1"}),e(t,{sm:"3",className:"d-flex align-items-center",children:e(_,{children:"Total (SUM), $:"})}),e(t,{sm:"1",children:e(u,{type:"number",name:"cost_variation_1_total",id:"cost_variation_1_total",placeholder:"0",value:r==null?void 0:r.cost_variation_1_total,disabled:!0})}),e(t,{sm:"1",children:e(u,{type:"number",name:"cost_variation_2_total",id:"cost_variation_2_total",placeholder:"0",value:r==null?void 0:r.cost_variation_2_total,disabled:!0})}),e(t,{sm:"1",children:e(u,{type:"number",name:"cost_variation_3_total",id:"cost_variation_3_total",placeholder:"0",value:r==null?void 0:r.cost_variation_3_total,disabled:!0})}),e(t,{sm:"1",children:e(u,{type:"number",name:"cost_variation_4_total",id:"cost_variation_4_total",placeholder:"0",value:r==null?void 0:r.cost_variation_4_total,disabled:!0})}),e(t,{sm:"2",children:e(C,{className:"me-1",color:"success",type:"submit",onClick:a=>{a.preventDefault(),s()},children:"Add New Row"})})]}),d(p,{className:"border color-primary rounded py-1",children:[e(t,{sm:"1"}),e(t,{sm:"3",className:"d-flex align-items-center",children:e(_,{children:"Delivery to us, $"})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.delivery_cost_variation[0],onChange:a=>{var c;return w((c=a==null?void 0:a.target)==null?void 0:c.value,0)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.delivery_cost_variation[1],onChange:a=>{var c;return w((c=a==null?void 0:a.target)==null?void 0:c.value,1)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.delivery_cost_variation[2],onChange:a=>{var c;return w((c=a==null?void 0:a.target)==null?void 0:c.value,2)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.delivery_cost_variation[3],onChange:a=>{var c;return w((c=a==null?void 0:a.target)==null?void 0:c.value,3)}})})]}),d(p,{className:"border color-primary rounded py-1",children:[e(t,{sm:"1"}),e(t,{sm:"3",className:"d-flex align-items-center",children:e(_,{children:"Labor Expense to complete Production Process, $"})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.labor_expense_cost_variation[0],onChange:a=>{var c;return g((c=a==null?void 0:a.target)==null?void 0:c.value,0)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.labor_expense_cost_variation[1],onChange:a=>{var c;return g((c=a==null?void 0:a.target)==null?void 0:c.value,1)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.labor_expense_cost_variation[2],onChange:a=>{var c;return g((c=a==null?void 0:a.target)==null?void 0:c.value,2)}})}),e(t,{sm:"1",children:e(u,{type:"number",value:r==null?void 0:r.labor_expense_cost_variation[3],onChange:a=>{var c;return g((c=a==null?void 0:a.target)==null?void 0:c.value,3)}})})]}),d(p,{className:"mt-1",children:[e(t,{sm:"3"}),e(t,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 1"}),e(t,{sm:"3",children:e(u,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:r==null?void 0:r.sum_of_cost_variation_1,disabled:!0})}),e(t,{sm:"3"})]}),d(p,{className:"mt-1",children:[e(t,{sm:"3"}),e(t,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 2"}),e(t,{sm:"3",children:e(u,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:r==null?void 0:r.sum_of_cost_variation_2,disabled:!0})}),e(t,{sm:"3"})]}),d(p,{className:"mt-1",children:[e(t,{sm:"3"}),e(t,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 3"}),e(t,{sm:"3",children:e(u,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:r==null?void 0:r.sum_of_cost_variation_3,disabled:!0})}),e(t,{sm:"3"})]}),d(p,{className:"mt-1",children:[e(t,{sm:"3"}),e(t,{sm:"3",className:"d-flex align-items-center justify-content-end",children:"Total Cost Variation 4"}),e(t,{sm:"3",children:e(u,{type:"number",name:"variation_4",id:"variation_4",placeholder:"0",value:r==null?void 0:r.sum_of_cost_variation_4,disabled:!0})}),e(t,{sm:"3"})]}),e(p,{children:e(t,{sm:"12",children:d("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(C,{className:"add-new-user",color:"primary",onClick:a=>{a.preventDefault(),v(A())},children:"Previous"}),e(C,{className:"add-new-user",color:"success",onClick:a=>{a.preventDefault(),h()},disabled:m,children:m?d(B,{children:[e(K,{className:"me-25",size:"sm"}),"Submiting"]}):"Submit"})]})})})]})})})})})})},se=()=>{N.exports.useState(null);const v=R(),{specificationData:n,statusesOptions:b,webImageStatusOptions:m}=L(o=>o.productspecifications);N.exports.useEffect(()=>{v(Y()),v(Z())},[]);const f=o=>{v(F(o))},r=o=>{var g,w;v(F({[(g=o==null?void 0:o.target)==null?void 0:g.name]:(w=o==null?void 0:o.target)==null?void 0:w.files}))};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[d(p,{children:[d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"status",children:"Status"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:b,value:b==null?void 0:b.find(o=>(o==null?void 0:o.value)==(n==null?void 0:n.status)),onChange:o=>f({status:o==null?void 0:o.value})})]}),e(t,{sm:"8"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"web_image_status",children:"Web image status"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Web image status",options:m,value:m==null?void 0:m.find(o=>(o==null?void 0:o.value)==(n==null?void 0:n.web_image_status)),onChange:o=>f({web_image_status:o==null?void 0:o.value})})]}),e(t,{sm:"8"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"product_images",children:"Product Image"}),e(u,{type:"file",name:"product_images",onChange:r,multiple:!0})]}),e(t,{sm:"8",className:"mb-1"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"product_name",children:"Product Name"}),e(u,{type:"text",name:"product_name",id:"product_name",placeholder:"Product Name",value:n==null?void 0:n.product_name,onChange:o=>{var g;return f({product_name:(g=o==null?void 0:o.target)==null?void 0:g.value})}})]}),e(t,{sm:"8",className:"mb-1"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"name",children:"Product SKU"}),e(u,{type:"text",name:"sku",id:"sku",placeholder:"Product SKU",value:n==null?void 0:n.sku,onChange:o=>{var g;return f({sku:(g=o==null?void 0:o.target)==null?void 0:g.value})}})]}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"previous_sku",children:"."}),e(u,{type:"text",name:"previous_sku",id:"previous_sku",placeholder:"Enter previous SKU to copy or leave empty",value:n==null?void 0:n.previous_sku,onChange:o=>{var g;return f({previous_sku:(g=o==null?void 0:o.target)==null?void 0:g.value})}})]}),e(t,{sm:"2",className:"mb-1"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"name",children:"Product Description"}),e(u,{type:"textarea",rows:"3",name:"product_description",id:"product_description",placeholder:"Product Description",value:n==null?void 0:n.product_description,onChange:o=>{var g;return f({product_description:(g=o==null?void 0:o.target)==null?void 0:g.value})}})]}),e(t,{sm:"8",className:"mb-1"}),d(t,{sm:"4",className:"mb-1",children:[e(_,{className:"form-label",for:"name",children:"General Note"}),e(u,{type:"textarea",rows:"3",name:"general_note",id:"general_note",placeholder:"General Note",value:n==null?void 0:n.product_general_note,onChange:o=>{var g;return f({product_general_note:(g=o==null?void 0:o.target)==null?void 0:g.value})}})]}),e(t,{sm:"8",className:"mb-1"})]}),e(p,{children:e(t,{sm:"12",children:d("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(C,{className:"add-new-user",color:"primary",onClick:o=>{o.preventDefault(),v(A())},children:"Previous"}),e(C,{className:"add-new-user",color:"primary",onClick:o=>{o.preventDefault(),v(O())},children:"Next"})]})})})]})})})})})})},oe=()=>{const v=R(),[n,b]=N.exports.useState([{}]),{specificationData:m,productionCategoriesOptions:f}=L(l=>l.productspecifications),r=l=>{v(F(l))},o=l=>{var s,h;r({[(s=l==null?void 0:l.target)==null?void 0:s.name]:(h=l==null?void 0:l.target)==null?void 0:h.files})};N.exports.useEffect(()=>{v(H()),v(M())},[]),N.exports.useEffect(()=>{v(F({special_note_arr:n}))},[n]);const g=(l,s,h)=>{const a=n==null?void 0:n.map((c,i)=>i==h?{...c,[l]:s}:c);b(a)},w=l=>{const s=n==null?void 0:n.filter((h,a)=>a!=l);b(s)},P=()=>{const l=[...n];l==null||l.push({}),b(l)};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[d(p,{children:[d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"production_category_id",children:"Production category"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:f,value:f==null?void 0:f.find(l=>(l==null?void 0:l.value)==(m==null?void 0:m.production_category_id)),onChange:l=>r({production_category_id:l==null?void 0:l.value})})]}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"production_image_location",children:"Production image location"}),e(u,{type:"text",name:"production_image_location",id:"production_image_location",placeholder:"Enter  Product Weight",value:m==null?void 0:m.production_image_location,onChange:l=>{var s;return r({production_image_location:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"art_work_location",children:"Art work image location"}),e(u,{type:"text",name:"art_work_location",id:"art_work_location",placeholder:"Enter Length",value:m==null?void 0:m.art_work_location,onChange:l=>{var s;return r({art_work_location:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"product_details_file",children:"Product details file"}),e(u,{type:"file",name:"product_details_file",onChange:o})]})]}),d(p,{children:[e(t,{sm:"1"}),d(t,{sm:"4",children:[d(t,{sm:"12",className:"mb-1",children:[e("h4",{children:"Production Settings"}),e("hr",{})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"temperature",children:"Temperature"}),e(u,{type:"text",name:"temperature",id:"temperature",placeholder:"Enter Temperature",value:m==null?void 0:m.temperature,onChange:l=>{var s;return r({temperature:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"dwell_time",children:"Dwell time"}),e(u,{type:"text",name:"dwell_time",id:"dwell_time",placeholder:"Enter Dwell time",value:m==null?void 0:m.dwell_time,onChange:l=>{var s;return r({dwell_time:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"pressure",children:"Pressure"}),e(u,{type:"text",name:"pressure",id:"pressure",placeholder:"Enter Pressure",value:m==null?void 0:m.pressure,onChange:l=>{var s;return r({pressure:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"run_time",children:"Run Time"}),e(u,{type:"text",name:"run_time",id:"run_time",placeholder:"Enter Run Time",value:m==null?void 0:m.run_time,onChange:l=>{var s;return r({run_time:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]})]}),e(t,{sm:"2"}),d(t,{sm:"4",children:[d(t,{sm:"12",className:"mb-1",children:[e("h4",{children:"Personalization Details"}),e("hr",{})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"type",children:"Type"}),e(u,{type:"text",name:"type",id:"type",placeholder:"Enter Type",value:m==null?void 0:m.type,onChange:l=>{var s;return r({type:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"font",children:"Font"}),e(u,{type:"text",name:"font",id:"font",placeholder:"Enter Font",value:m==null?void 0:m.font,onChange:l=>{var s;return r({font:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"variation_name",children:"Variation name"}),e(u,{type:"text",name:"variation_name",id:"variation_name",placeholder:"Enter Variation name",value:m==null?void 0:m.variation_name,onChange:l=>{var s;return r({variation_name:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"details",children:"Details"}),e(u,{type:"text",name:"details",id:"details",placeholder:"Enter Details",value:m==null?void 0:m.details,onChange:l=>{var s;return r({details:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]})]})]}),e("hr",{}),d("div",{children:[n==null?void 0:n.map((l,s)=>d(p,{children:[e(t,{sm:"1"}),e(t,{sm:"10",className:"p-1 mb-1 border border-primary rounded",children:d(p,{children:[e(t,{sm:"4",children:e(u,{type:"text",name:"special_note",id:"special_note",placeholder:"Special Notes for Product Options",value:l==null?void 0:l.special_note,onChange:h=>{var a;return g("special_note",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})}),e(t,{sm:"4",children:e(u,{type:"text",name:"option_name",id:"option_name",placeholder:"Option Name",value:l==null?void 0:l.option_name,onChange:h=>{var a;return g("option_name",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})}),e(t,{sm:"3",children:e(u,{type:"text",name:"details",id:"details",placeholder:"Details",value:l==null?void 0:l.details,onChange:h=>{var a;return g("details",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})}),e(t,{sm:"1",className:"d-flex align-items-center",children:e(U,{className:"text-truncate text-capitalize align-middle",onClick:h=>{h.preventDefault(),w(s)},children:e(G,{size:24,className:"text-danger me-50"})})})]})}),e(t,{sm:"1"})]},s)),d(p,{children:[e(t,{sm:"10"}),e(t,{sm:"2",className:"mt-1",children:e("div",{className:"d-flex",children:e(C,{className:"me-1",color:"success",type:"submit",onClick:l=>{l.preventDefault(),P()},children:"Add Item"})})})]})]}),e(p,{children:e(t,{sm:"12",children:d("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(C,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),v(A())},children:"Previous"}),e(C,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),v(O())},children:"Next"})]})})})]})})})})})})},de=()=>{const v=R(),[n,b]=N.exports.useState([{}]),{specificationData:m,makeSampleDataOptions:f,vendorOptions:r}=L(l=>l.productspecifications),o=l=>{v(F(l))};N.exports.useEffect(()=>{v(H()),v(M())},[]),N.exports.useEffect(()=>{o({spec_table_data:n})},[n]);const g=(l,s,h)=>{const a=n==null?void 0:n.map((c,i)=>i==h?{...c,[l]:s}:c);b(a)},w=l=>{const s=n==null?void 0:n.filter((h,a)=>a!=l);b(s)},P=()=>{const l=[...n];l==null||l.push({}),b(l)};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[d(p,{children:[d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"make_sample",children:"Make sample?"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Status",options:f,value:f==null?void 0:f.find(l=>(l==null?void 0:l.value)==(m==null?void 0:m.make_sample)),onChange:l=>o({make_sample:l==null?void 0:l.value})})]}),e(t,{sm:"1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"product_weight",children:"Product Weight (lb)"}),e(u,{type:"number",name:"product_weight",id:"product_weight",placeholder:"Enter  Product Weight",value:m==null?void 0:m.product_weight,onChange:l=>{var s;return o({product_weight:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"product_length",children:"Length (in)"}),e(u,{type:"number",name:"product_length",id:"product_length",placeholder:"Enter  Length",value:m==null?void 0:m.product_length,onChange:l=>{var s;return o({product_length:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"product_width",children:"Width (in)"}),e(u,{type:"number",name:"product_width",id:"product_width",placeholder:"Enter  Width",value:m==null?void 0:m.product_width,onChange:l=>{var s;return o({product_width:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"product_height",children:"Height (in)"}),e(u,{type:"number",name:"product_height",id:"productproduct_height_description",placeholder:"Enter  Height",value:m==null?void 0:m.product_height,onChange:l=>{var s;return o({product_height:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"packaging_type_name",children:"Packaging Type Name"}),e(u,{type:"text",name:"packaging_type_name",id:"packaging_type_name",placeholder:"Enter  Packaging Type Name",value:m==null?void 0:m.packaging_type_name,onChange:l=>{var s;return o({packaging_type_name:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"packaging_size",children:"Packaging size LxWxH (in)"}),e(u,{type:"text",name:"packaging_size",id:"packaging_size",placeholder:"Enter  Packaging size LxWxH",value:m==null?void 0:m.packaging_size,onChange:l=>{var s;return o({packaging_size:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"packaging_weight",children:"Packaging Weight (lb)"}),e(u,{type:"number",name:"packaging_weight",id:"packaging_weight",placeholder:"Enter  ackaging Weight",value:m==null?void 0:m.packaging_weight,onChange:l=>{var s;return o({packaging_weight:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"}),d(t,{sm:"3",className:"mb-1",children:[e(_,{className:"form-label",for:"total_weight",children:"Total Weight"}),e(u,{type:"number",name:"total_weight",id:"total_weight",placeholder:"Enter  Total Weight",value:m==null?void 0:m.total_weight,onChange:l=>{var s;return o({total_weight:(s=l==null?void 0:l.target)==null?void 0:s.value})}})]}),e(t,{sm:"1",className:"mb-1"})]}),e("hr",{}),d("div",{children:[n==null?void 0:n.map((l,s)=>d(p,{className:"p-1 mb-1 border border-primary rounded",children:[e(t,{sm:"1",className:"d-flex align-items-center",children:s+1}),d(t,{sm:"2",children:[e(u,{type:"text",className:"mb-1",name:"part_name",id:"part_name",placeholder:"Part Name",value:l==null?void 0:l.part_name,onChange:h=>{var a;return g("part_name",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}}),e(u,{type:"text",name:"sku",id:"sku",placeholder:"Product SKU",value:l==null?void 0:l.value,onChange:h=>{var a;return g("sku",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})]}),d(t,{sm:"2",children:[e(W,{className:"react-select mb-1",classNamePrefix:"select",theme:j,placeholder:"Select a vendor",options:r,value:r==null?void 0:r.find(h=>(h==null?void 0:h.value)===(l==null?void 0:l.option_category)),onChange:h=>g("option_category",h==null?void 0:h.value,s)}),e(u,{type:"text",name:"url",id:"url",placeholder:"Product URL",value:l==null?void 0:l.url,onChange:h=>{var a;return g("url",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})]}),d(t,{sm:"2",children:[e(u,{type:"text",className:"mb-1",name:"material",id:"material",placeholder:"Material",value:l==null?void 0:l.material,onChange:h=>{var a;return g("material",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}}),e(u,{type:"text",name:"size",id:"size",placeholder:"Size",value:l==null?void 0:l.size,onChange:h=>{var a;return g("size",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})]}),d(t,{sm:"2",children:[e(u,{type:"text",className:"mb-1",name:"color",id:"color",placeholder:"Color",value:l==null?void 0:l.color,onChange:h=>{var a;return g("color",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}}),e(u,{type:"text",name:"type",id:"type",placeholder:"Type",value:l==null?void 0:l.type,onChange:h=>{var a;return g("type",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})]}),d(t,{sm:"2",children:[e(u,{type:"number",className:"mb-1",name:"price",id:"price",placeholder:"Price",value:l==null?void 0:l.price,onChange:h=>{var a;return g("price",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}}),e(u,{type:"text",className:"mb-1",name:"note",id:"note",placeholder:"Note",value:l==null?void 0:l.note,onChange:h=>{var a;return g("note",(a=h==null?void 0:h.target)==null?void 0:a.value,s)}})]}),e(t,{sm:"1",className:"d-flex align-items-center",children:e(U,{className:"text-truncate text-capitalize align-middle",onClick:h=>{h.preventDefault(),w(s)},children:e(G,{size:24,className:"text-danger me-50"})})})]},s)),e(p,{children:e(t,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex",children:e(C,{className:"me-1",color:"success",type:"submit",onClick:l=>{l.preventDefault(),P()},children:"Add Item"})})})})]}),e(p,{children:e(t,{sm:"12",children:d("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(C,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),v(A())},children:"Previous"}),e(C,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),v(O())},children:"Next"})]})})})]})})})})})})},ce=()=>{const v=R(),{specificationData:n,productionCategoriesOptions:b}=L(r=>r.productspecifications);N.exports.useEffect(()=>{v(q())},[]);const m=r=>{v(F(r))},f=r=>{r.preventDefault(),n!=null&&n.production_category_id?(v(X({production_category:n==null?void 0:n.production_category_id,"gift-wrap":n==null?void 0:n.gift_wrap})),v(O())):D(ee).fire({position:"top-end",icon:"error",title:"Please Select Product Category",showConfirmButton:!1,timer:1500})};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[d(p,{children:[d(t,{sm:"12",className:"mb-1",children:[e(_,{className:"form-label",for:"image",children:"Production category"}),e(W,{className:"react-select",classNamePrefix:"select",theme:j,placeholder:"Select Production category",options:b,value:b==null?void 0:b.find(r=>(r==null?void 0:r.value)==(n==null?void 0:n.production_category_id)),onChange:r=>m({production_category_id:r==null?void 0:r.value})})]}),e(t,{sm:"12",className:"d-flex justify-content-between my-1",children:d("div",{className:"form-check form-check-success",children:[e(u,{type:"checkbox",name:"gift_wrap",checked:n==null?void 0:n.show_header,onChange:r=>{var o;return m({gift_wrap:(o=r==null?void 0:r.target)==null?void 0:o.checked})}}),e(_,{className:"form-check-label",for:"success-checkbox",children:"Gift wrapped?"})]})})]}),e(p,{children:e(t,{sm:"12",children:e("div",{className:"d-flex justify-content-end table-header-actions mx-4 mt-2",children:e(C,{className:"add-new-user",color:"primary",onClick:f,children:"Next"})})})})]})})})})})})},me=()=>{const v=R(),n=b=>{v(F(b))};return e(N.exports.Fragment,{children:e(p,{children:e(V,{children:e(t,{sm:"12",children:e(E,{children:d($,{children:[e(p,{children:d(t,{sm:"4",children:[e(_,{className:"form-label",for:"product_note",children:"Product Note"}),e(u,{type:"textarea",name:"product_note",Rows:"5",id:"product_note",placeholder:"Product Note",onChange:b=>n({[b.target.name]:b.target.value})})]})}),e(p,{children:e(t,{sm:"12",children:d("div",{className:"d-flex justify-content-between table-header-actions mx-4 mt-2",children:[e(C,{className:"add-new-user",color:"primary",onClick:b=>{b.preventDefault(),v(A())},children:"Previous"}),e(C,{className:"add-new-user",color:"primary",onClick:b=>{b.preventDefault(),v(O())},children:"Next"})]})})})]})})})})})})},ge=()=>{const{active:v}=L(n=>n==null?void 0:n.productspecifications);return d(N.exports.Fragment,{children:[d(E,{className:"p",children:[e(re,{children:e(le,{tag:"h4",children:"New Product specifications"})}),d(ae,{pills:!0,className:"mx-2 orange",children:[e(T,{children:e(I,{active:v===1,children:"Production category"})}),e(T,{children:e(I,{active:v===2,children:"General info"})}),e(T,{children:e(I,{active:v===3,children:"Product specification"})}),e(T,{children:e(I,{active:v===4,children:"Product instruction"})}),e(T,{children:e(I,{active:v===5,children:"Special Note"})}),e(T,{children:e(I,{active:v===6,children:"Financial info"})})]})]}),e(E,{className:"p-1",children:d(te,{activeTab:v,children:[e(z,{tabId:1,children:e(ce,{})}),e(z,{tabId:2,children:e(se,{})}),e(z,{tabId:3,children:e(de,{})}),e(z,{tabId:4,children:e(oe,{})}),e(z,{tabId:5,children:e(me,{})}),e(z,{tabId:6,children:e(ne,{})})]})})]})};export{ge as default};
