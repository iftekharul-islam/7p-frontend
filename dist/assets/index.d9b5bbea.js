import{j as a,r as m,f as c,L as v,aA as j,aB as z,aC as I,Y as f,Z as n,G as x,dO as L,dP as T,dQ as R,a as A,dR as H,dS as B,dT as E,dU as Q,dV as $,dW as O,Q as D,a1 as w,k as U}from"./index.b5b6a8d2.js";/* empty css                                  */import{a as F,s as p}from"./App.fda3d641.js";import{Q as G}from"./index.es.a6ec9863.js";import{R as K}from"./react-paginate.d51eb14e.js";import{S as h}from"./react-select.esm.c34be573.js";import{E as V}from"./edit.36ef0a8b.js";import{T as Y}from"./trash-2.f68b58f2.js";import{P as Z}from"./printer.cc975559.js";import{C as q}from"./chevron-down.46497eaa.js";import{P as J}from"./plus-circle.2b9590af.js";import"./emotion-memoize.esm.06f0e458.js";const X=s=>{const t=F(),[d,_]=m.exports.useState(null),[l,o]=m.exports.useState(!1),i=u=>{u.preventDefault(),t(L(d.id)),o(!l)};return c("div",{className:"column-action",children:[a(v,{className:"text-truncate text-capitalize align-middle",to:`/specification-product-edit/${s.id}`,children:a(V,{size:18,className:"text-primary me-50"})}),a(v,{className:"text-truncate text-capitalize align-middle",onClick:u=>{u.preventDefault(),_(s),o(!0)},children:a(Y,{size:18,className:"text-danger me-50"})}),a(v,{className:"text-truncate text-capitalize align-middle",onClick:u=>{u.preventDefault(),T(R).fire({position:"top-end",icon:"error",title:"This feature is not available yet",showConfirmButton:!1,timer:1500})},children:a(Z,{size:18,className:"text-danger me-50"})}),c(j,{isOpen:l,toggle:()=>o(!l),className:"modal-dialog-centered modal-lg",children:[a(z,{className:"bg-transparent",toggle:()=>o(!l)}),c(I,{className:"px-2 pb-2",children:[a("div",{className:"text-center mb-4",children:a("h1",{children:"Are you sure to delete?"})}),a(f,{tag:"form",onSubmit:i,children:c(n,{className:"text-center mt-2",xs:12,children:[a(x,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),a(x,{outline:!0,onClick:()=>o(!l),children:"Cancel"})]})})]})]})]})},ee=[{name:"Product Spec name",sortable:!1,minWidth:"540px",sortField:"product_description",selector:s=>s.product_description,cell:s=>a("span",{className:"fw-bolder",children:s.product_description})},{name:"Production category",sortable:!1,minWidth:"180px",sortField:"production_category",selector:s=>s==null?void 0:s.production_category,cell:s=>a("span",{children:s.production_category})},{name:"SKU",sortable:!1,minWidth:"120px",sortField:"product_sku",selector:s=>s.product_sku,cell:s=>a("span",{children:s==null?void 0:s.product_sku})},{name:"Web image status",sortable:!1,minWidth:"120px",sortField:"web_image_status",selector:s=>s.web_image_status,cell:s=>a("span",{children:s==null?void 0:s.web_image_status})},{name:"Actions",minWidth:"120px",cell:s=>X(s)}],pe=()=>{var C,b,S,k,y,P;const s=F(),t=A(e=>e.productspecifications),[d,_]=m.exports.useState(1),[l,o]=m.exports.useState(null),i=e=>{o({...l,...e})};m.exports.useEffect(()=>{s(H()),s(B()),s(E()),s(Q()),s($())},[]),m.exports.useEffect(()=>{s(O({page:d,...l}))},[d]);const u=()=>{s(O({page:d,...l}))},N=()=>{o({search_for_1:"",search_in_1:null,search_for_2:"",search_in_2:null,production_category:null,status:null,web_image_status:null,make_sample:null})},M=()=>{const e=U();return a("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:c(f,{children:[a(n,{xl:"10"}),a(n,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:a("div",{className:"d-flex align-items-center table-header-actions",children:c(x,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),e("/specification-product-add")},children:[a(J,{size:14})," Product Specification"]})})})]})})},W=()=>{const e=Number(Math.ceil(t.total/10));return a(K,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:d!==0?d-1:0,onPageChange:r=>_(r.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return a("div",{className:"app-user-list",children:c(m.exports.Fragment,{children:[c(D,{className:"p-2",children:[c(f,{className:"mb-1",children:[a(n,{sm:"3",children:a(w,{placeholder:"Search for 1",name:"search_for_1",value:l==null?void 0:l.search_for_1,onChange:e=>{var r,g;return i({[(r=e==null?void 0:e.target)==null?void 0:r.name]:(g=e==null?void 0:e.target)==null?void 0:g.value})}})}),a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in 1",options:t==null?void 0:t.searchableFieldsOptions,value:(C=t==null?void 0:t.searchableFieldsOptions)==null?void 0:C.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.search_in_1)),onChange:e=>i({search_in_1:e==null?void 0:e.value})})}),a(n,{sm:"3",children:a(w,{placeholder:"Search for 2",name:"search_for_2",value:l==null?void 0:l.search_for_fourth,onChange:e=>{var r,g;return i({[(r=e==null?void 0:e.target)==null?void 0:r.name]:(g=e==null?void 0:e.target)==null?void 0:g.value})}})}),a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in 2",options:t==null?void 0:t.searchableFieldsOptions,value:(b=t==null?void 0:t.searchableFieldsOptions)==null?void 0:b.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.search_in_2)),onChange:e=>i({search_in_2:e==null?void 0:e.value})})})]}),c(f,{className:"mb-1",children:[a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in production category",options:t==null?void 0:t.productionCategoriesOptions,value:(S=t==null?void 0:t.productionCategoriesOptions)==null?void 0:S.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.production_category)),onChange:e=>i({production_category:e==null?void 0:e.value})})}),a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in status",options:t==null?void 0:t.statusesOptions,value:(k=t==null?void 0:t.statusesOptions)==null?void 0:k.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.status)),onChange:e=>i({status:e==null?void 0:e.value})})}),a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in web image status",options:t==null?void 0:t.webImageStatusOptions,value:(y=t==null?void 0:t.webImageStatusOptions)==null?void 0:y.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.web_image_status)),onChange:e=>i({web_image_status:e==null?void 0:e.value})})}),a(n,{sm:"3",children:a(h,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Search in Make sample",options:t==null?void 0:t.makeSampleDataOptions,value:(P=t==null?void 0:t.makeSampleDataOptions)==null?void 0:P.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.make_sample)),onChange:e=>i({make_sample:e==null?void 0:e.value})})})]}),c(f,{children:[a(n,{sm:"9"}),a(n,{sm:"3",children:c("div",{className:"d-flex justify-content-between table-header-actions mx-4",children:[a(x,{className:"add-new-user",color:"primary",onClick:e=>{e.preventDefault(),N()},children:"Reset"}),a(x,{className:"add-new-user",color:"primary",onClick:e=>{e.preventDefault(),u()},children:"Search"})]})})]})]}),a(D,{className:"overflow-hidden",children:a("div",{className:"react-dataTable",children:a(G,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:ee,sortIcon:a(q,{}),className:"react-dataTable",paginationComponent:W,data:t.data,subHeaderComponent:a(M,{})})})})]})})};export{pe as default};
