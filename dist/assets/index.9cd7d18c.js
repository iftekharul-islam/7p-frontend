import{j as e,r,f as i,L as x,az as N,aA as v,aB as C,X as h,Y as d,G as g,aX as b,a as y,aY as S,Q as w,k as D}from"./index.87b69802.js";import{a as f}from"./App.4bf6c745.js";/* empty css                                  */import{Q as k}from"./index.es.df9b7679.js";import{l as j}from"./index.05db0d73.js";import{R as T}from"./react-paginate.6e4ae6e0.js";import{E as P}from"./edit.510979d4.js";import{T as L}from"./trash-2.091e20f6.js";import{C as z}from"./chevron-down.58b5e644.js";import{P as M}from"./plus-circle.5729cc45.js";import"./emotion-memoize.esm.06f0e458.js";const _=a=>{const m=f(),[l,p]=r.exports.useState(null),[t,s]=r.exports.useState(!1),u=o=>{o.preventDefault(),m(b(l.id)),s(!t)};return i("div",{className:"column-action",children:[e(x,{className:"text-truncate text-capitalize align-middle",to:`/email-template-edit/${a.id}`,children:e(P,{size:18,className:"text-primary me-50"})}),e(x,{className:"text-truncate text-capitalize align-middle",onClick:o=>{o.preventDefault(),p(a),s(!0)},children:e(L,{size:18,className:"text-danger me-50"})}),i(N,{isOpen:t,toggle:()=>s(!t),className:"modal-dialog-centered modal-lg",children:[e(v,{className:"bg-transparent",toggle:()=>s(!t)}),i(C,{className:"px-2 pb-2",children:[e("div",{className:"text-center mb-4",children:e("h1",{children:"Are you sure to delete?"})}),e(h,{tag:"form",onSubmit:u,children:i(d,{className:"text-center mt-2",xs:12,children:[e(g,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),e(g,{outline:!0,onClick:()=>s(!t),children:"Cancel"})]})})]})]})]})},A=[{name:"Message type",sortable:!1,minWidth:"240px",sortField:"message_type",selector:a=>a.message_type,cell:a=>e("span",{children:a.message_type})},{name:"Message subject",sortable:!1,minWidth:"360px",sortField:"message_title",selector:a=>a.message_title,cell:a=>e("span",{children:a.message_title})},{name:"Actions",minWidth:"100px",cell:a=>_(a)}],q=()=>{const a=f(),m=y(c=>c.emailTemplate),[l,p]=r.exports.useState(1),[t,s]=r.exports.useState(null);r.exports.useEffect(()=>{a(S({page:l,q:t}))},[l,t]);const u=()=>{const c=D();return e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:i(h,{children:[e(d,{xl:"6"}),e(d,{xl:"4",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:e(j.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search by Type/Subject",value:t,onChange:n=>{n.preventDefault(),s(n.target.value)}})})}),e(d,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:i(g,{className:"add-new-user",color:"primary",onClick:n=>{n.preventDefault(),c("/email-template-add")},children:[e(M,{size:14})," Email Template"]})})})]})})},o=()=>{const c=Number(Math.ceil(m.total/10));return e(T,{previousLabel:"",nextLabel:"",pageCount:c||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:n=>p(n.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return e("div",{className:"app-user-list",children:e(r.exports.Fragment,{children:e(w,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e(k,{striped:!0,noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:A,sortIcon:e(z,{}),className:"react-dataTable",paginationComponent:o,data:m.data,subHeaderComponent:e(u,{})})})})})})};export{q as default};
