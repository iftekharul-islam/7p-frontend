import{j as e,r as l,f as i,L as x,at as y,au as N,av as C,Y as h,Z as m,G as g,cK as v,a as b,cL as _,Q as D,k as S}from"./index.db14b012.js";import{Q as w}from"./index.es.64bd45b6.js";import{E as k}from"./edit.621b3005.js";import{T as P}from"./trash-2.1f2026da.js";import{a as f}from"./App.c9615b80.js";import{R as j}from"./react-paginate.8024126d.js";/* empty css                                  */import{l as L}from"./index.7ab7a9d2.js";import{C as z}from"./chevron-down.8322b70f.js";import{P as F}from"./plus-circle.9a569c41.js";import"./emotion-memoize.esm.06f0e458.js";const H=t=>{const r=f(),[o,p]=l.exports.useState(null),[a,s]=l.exports.useState(!1),u=c=>{c.preventDefault(),r(v(o.id)),s(!a)};return i("div",{className:"column-action",children:[e(x,{className:"text-truncate text-capitalize align-middle",to:`/category-edit/${t.id}`,children:e(k,{size:18,className:"text-primary me-50"})}),e(x,{className:"text-truncate text-capitalize align-middle",onClick:c=>{c.preventDefault(),p(t),s(!0)},children:e(P,{size:18,className:"text-danger me-50"})}),i(y,{isOpen:a,toggle:()=>s(!a),className:"modal-dialog-centered modal-lg",children:[e(N,{className:"bg-transparent",toggle:()=>s(!a)}),i(C,{className:"px-2 pb-2",children:[e("div",{className:"text-center mb-4",children:e("h1",{children:"Are you sure to delete?"})}),e(h,{tag:"form",onSubmit:u,children:i(m,{className:"text-center mt-2",xs:12,children:[e(g,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),e(g,{outline:!0,onClick:()=>s(!a),children:"Cancel"})]})})]})]})]})},T=[{name:"Category Code",sortable:!1,minWidth:"120px",sortField:"production_category_code",selector:t=>t.production_category_code,cell:t=>e("span",{children:t.production_category_code})},{name:"category description",sortable:!1,minWidth:"300px",sortField:"production_category_description",selector:t=>t.production_category_description,cell:t=>e("span",{children:t.production_category_description})},{name:"category display order",sortable:!1,minWidth:"60px",sortField:"production_category_display_order",selector:t=>t.production_category_display_order,cell:t=>{var r;return e("span",{children:(r=t.production_category_display_order)!=null?r:0})}},{name:"Actions",minWidth:"100px",cell:t=>H(t)}],K=()=>{const t=f(),r=b(d=>d.categories),[o,p]=l.exports.useState(1),[a,s]=l.exports.useState(null);l.exports.useEffect(()=>{t(_({page:o,q:a}))},[o,a]);const u=()=>{const d=S();return e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:i(h,{children:[e(m,{xl:"6"}),e(m,{xl:"4",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:e(L.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search by Code/Description",value:a,onChange:n=>{n.preventDefault(),s(n.target.value)}})})}),e(m,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:i(g,{className:"add-new-user",color:"primary",onClick:n=>{n.preventDefault(),d("/category-add")},children:[e(F,{size:14})," Product Category"]})})})]})})},c=()=>{const d=Number(Math.ceil(r.total/10));return e(j,{previousLabel:"",nextLabel:"",pageCount:d||1,activeClassName:"active",forcePage:o!==0?o-1:0,onPageChange:n=>p(n.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return e("div",{className:"app-user-list",children:e(l.exports.Fragment,{children:e(D,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e(w,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:T,sortIcon:e(z,{}),className:"react-dataTable",paginationComponent:c,data:r.data,subHeaderComponent:e(u,{})})})})})})};export{K as default};
