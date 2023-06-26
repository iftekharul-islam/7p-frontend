import{j as e,f as c,L as C,r,aC as E,aD as I,aE as Q,Y as N,Z as d,G as g,cF as T,a as A,a6 as M,cG as _,cH as B,cI as R,Q as k,a1 as W,k as $}from"./index.22eb8bd8.js";import{Q as G}from"./index.es.75e8b811.js";import{R as K}from"./react-paginate.a64aa864.js";import{S as y}from"./react-select.esm.579d0190.js";import{E as U}from"./edit.62b32af4.js";import{T as Y}from"./trash-2.c016568f.js";import{a as P}from"./App.68a66c55.js";/* empty css                                  */import{C as Z}from"./chevron-down.fe3e7301.js";import{P as J}from"./plus-circle.719297f8.js";import"./emotion-memoize.esm.06f0e458.js";const V=t=>{const s=P(),[u,h]=r.exports.useState(null),[o,m]=r.exports.useState(!1),i=p=>{p.preventDefault(),s(T(u.id)),m(!o)};return c("div",{className:"column-action",children:[e(C,{className:"text-truncate text-capitalize align-middle",to:`/sku-product-edit/${t.id}`,children:e(U,{size:18,className:"text-primary me-50"})}),e(C,{className:"text-truncate text-capitalize align-middle",onClick:p=>{p.preventDefault(),h(t),m(!0)},children:e(Y,{size:18,className:"text-danger me-50"})}),c(E,{isOpen:o,toggle:()=>m(!o),className:"modal-dialog-centered modal-lg",children:[e(I,{className:"bg-transparent",toggle:()=>m(!o)}),c(Q,{className:"px-2 pb-2",children:[e("div",{className:"text-center mb-4",children:e("h1",{children:"Are you sure to delete?"})}),e(N,{tag:"form",onSubmit:i,children:c(d,{className:"text-center mt-2",xs:12,children:[e(g,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),e(g,{outline:!0,onClick:()=>m(!o),children:"Cancel"})]})})]})]})]})},X=[{name:"SKU",sortable:!0,minWidth:"120px",sortField:"product_model",selector:t=>t==null?void 0:t.product_model,cell:t=>e("span",{className:"fw-bolder",children:t==null?void 0:t.product_model})},{name:"Product",sortable:!1,minWidth:"300px",sortField:"price",selector:t=>t.product_name,cell:t=>c("div",{className:"d-flex",children:[e("img",{src:t==null?void 0:t.product_thumb,width:"50",height:"50"}),e("div",{className:"px-1 d-flex align-items-center",children:c("div",{children:[e("div",{children:t.product_name}),e(C,{to:t==null?void 0:t.product_url,className:"text-truncate text-capitalize align-middle",target:"_blank",children:t.id_catalog})]})})]})},{name:"Actions",minWidth:"100px",cell:t=>V(t)}],ie=()=>{var S,b;const t=P(),s=A(a=>a.productskus),[u,h]=r.exports.useState(!1),[o,m]=M();o.get("q");const[i,p]=r.exports.useState(1),[x,D]=r.exports.useState("desc"),[f,F]=r.exports.useState("id"),[n,L]=r.exports.useState(null),v=(a,l)=>{L({...n,[a]:l})};r.exports.useEffect(()=>{t(_({page:i,sort:x,sortColumn:f,...n}))},[i,x,f]),r.exports.useEffect(()=>{t(B()),t(R())},[]);const O=async a=>{h(!0),a.preventDefault(),await t(_({page:i,sort:x,sortColumn:f,...n})),h(!1)},j=(a,l)=>{D(l),F(a.sortField)},z=()=>{const a=$();return e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:c(N,{children:[e(d,{xl:"10"}),e(d,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:c(g,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),a("/sku-product-add")},children:[e(J,{size:14})," Product"]})})})]})})},H=()=>{const a=Number(Math.ceil(s.total/10));return e(K,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:i!==0?i-1:0,onPageChange:l=>p(l.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return e("div",{className:"app-user-list",children:c(r.exports.Fragment,{children:[e(k,{className:"p-2",children:c(N,{children:[e(d,{sm:"4",children:e(W,{placeholder:"Search for",value:n==null?void 0:n.search_for,onChange:a=>{var l;return v("search_for",(l=a==null?void 0:a.target)==null?void 0:l.value)}})}),e(d,{sm:"3",children:e(y,{placeholder:"Search in",options:s==null?void 0:s.searchableFieldsOptions,value:(S=s==null?void 0:s.searchableFieldsOptions)==null?void 0:S.find(a=>(a==null?void 0:a.value)==(n==null?void 0:n.search_in)),onChange:a=>v("search_in",a==null?void 0:a.value)})}),e(d,{sm:"3",children:e(y,{placeholder:"Search in production category",options:s==null?void 0:s.productionCategoryOptions,value:(b=s==null?void 0:s.productionCategoryOptions)==null?void 0:b.find(a=>(a==null?void 0:a.value)==(n==null?void 0:n.product_production_category)),onChange:a=>v("product_production_category",a==null?void 0:a.value)})}),e(d,{sm:"2",className:"d-flex align-items-center flex-column",children:e(g,{color:"primary",onClick:O,disabled:u,children:u?"Searching":"Search"})})]})}),e(k,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e(G,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:X,onSort:j,customStyles:{cells:{style:{marginTop:15,marginBottom:15}}},sortIcon:e(Z,{}),className:"react-dataTable",paginationComponent:H,data:s.data,subHeaderComponent:e(z,{})})})})]})})};export{ie as default};
