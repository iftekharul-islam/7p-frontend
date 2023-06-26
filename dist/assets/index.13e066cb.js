import{f as a,j as t,r,L as g,aC as P,aD as D,aE as j,Y as v,Z as m,G as u,cy as L,a6 as z,a as F,cz as H,Q as T,k as I}from"./index.22eb8bd8.js";import{Q as W}from"./index.es.75e8b811.js";import{E as A}from"./edit.62b32af4.js";import{T as E}from"./trash-2.c016568f.js";import{a as N}from"./App.68a66c55.js";import{R as M}from"./react-paginate.a64aa864.js";/* empty css                                  */import{l as Q}from"./index.917e0fde.js";import{C as R}from"./chevron-down.fe3e7301.js";import{P as $}from"./plus-circle.719297f8.js";import"./emotion-memoize.esm.06f0e458.js";const q=e=>{const n=N(),[h,d]=r.exports.useState(null),[l,s]=r.exports.useState(!1),p=c=>{c.preventDefault(),n(L(h.id)),s(!l)};return a("div",{className:"column-action",children:[t(g,{className:"text-truncate text-capitalize align-middle",to:`/product-edit/${e.id}`,children:t(A,{size:18,className:"text-primary me-50"})}),t(g,{className:"text-truncate text-capitalize align-middle",onClick:c=>{c.preventDefault(),d(e),s(!0)},children:t(E,{size:18,className:"text-danger me-50"})}),a(P,{isOpen:l,toggle:()=>s(!l),className:"modal-dialog-centered modal-lg",children:[t(D,{className:"bg-transparent",toggle:()=>s(!l)}),a(j,{className:"px-2 pb-2",children:[t("div",{className:"text-center mb-4",children:t("h1",{children:"Are you sure to delete?"})}),t(v,{tag:"form",onSubmit:p,children:a(m,{className:"text-center mt-2",xs:12,children:[t(u,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),t(u,{outline:!0,onClick:()=>s(!l),children:"Cancel"})]})})]})]})]})},B=[{name:"Stock",sortable:!0,minWidth:"120px",sortField:"stock_no",selector:e=>e==null?void 0:e.stock_no,cell:e=>{var n;return a("div",{children:[t("div",{children:t("span",{className:"fw-bolder",children:e==null?void 0:e.stock_no})}),t("div",{children:t("span",{children:(n=e==null?void 0:e.inventory)==null?void 0:n.stock_name_discription})})]})}},{name:"Price",sortable:!1,minWidth:"120px",sortField:"price",selector:e=>e.unit_price,cell:e=>a("div",{children:[t("div",{children:a("span",{className:"fw-bolder",children:["$",e.unit_price]})}),t("div",{children:a("span",{className:"fw-bolder",children:[e.unit_qty,"-",e.unit]})})]})},{name:"Vendor",sortable:!1,minWidth:"320px",sortField:"vendor",selector:e=>e.vendor,cell:e=>{var n;return a("div",{children:[a("div",{children:[a("span",{className:"fw-bolder",children:[(n=e==null?void 0:e.vendor)==null?void 0:n.vendor_name,":"]}),a("span",{children:[" ",e==null?void 0:e.vendor_sku]})]}),t("div",{children:t("span",{children:e==null?void 0:e.vendor_sku_name})})]})}},{name:"Lead Time",sortable:!0,minWidth:"100px",sortField:"lead_time_days",selector:e=>e.lead_time_days,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.lead_time_days})},{name:"Actions",minWidth:"100px",cell:e=>q(e)}],te=()=>{const e=N(),[n,h]=z(),d=n.get("q"),l=F(o=>o.products),[s,p]=r.exports.useState(1),[c,b]=r.exports.useState(d!=null?d:null),[x,C]=r.exports.useState("desc"),[f,S]=r.exports.useState("id");r.exports.useEffect(()=>{e(H({page:s,q:c,sort:x,sortColumn:f}))},[s,c,x,f]);const k=(o,i)=>{C(i),S(o.sortField)},y=()=>{const o=I();return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:a(v,{children:[t(m,{xl:"5"}),t(m,{xl:"2",className:"d-flex align-items-end align-content-center flex-wrap",children:t("div",{children:"Search by Vendor/Stock Info"})}),t(m,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions",children:t(Q.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search Here",value:c,onChange:i=>{i.preventDefault(),b(i.target.value)}})})}),t(m,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions",children:a(u,{className:"add-new-user",color:"primary",onClick:i=>{i.preventDefault(),o("/product-add")},children:[t($,{size:14})," Product"]})})})]})})},_=()=>{const o=Number(Math.ceil(l.total/10));return t(M,{previousLabel:"",nextLabel:"",pageCount:o||1,activeClassName:"active",forcePage:s!==0?s-1:0,onPageChange:i=>p(i.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return t("div",{className:"app-user-list",children:t(r.exports.Fragment,{children:t(T,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(W,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:B,onSort:k,sortIcon:t(R,{}),className:"react-dataTable",paginationComponent:_,data:l.data,subHeaderComponent:t(y,{})})})})})})};export{te as default};
