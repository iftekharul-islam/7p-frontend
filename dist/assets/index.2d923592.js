import{j as e,r as c,f as l,L as b,aE as v,aK as S,aL as _,Y as h,Z as u,H as x,dU as j,a as T,dV as A,S as E,$ as F,a0 as W,a1 as z,dW as H}from"./index.b5767533.js";/* empty css                                  */import{Q as $}from"./index.es.631532c0.js";import{E as k}from"./edit.ac9e3fc9.js";import{T as L}from"./trash-2.73e48549.js";import{a as y}from"./App.bf73fcbb.js";import{P as I}from"./plus-circle.f10847d8.js";import"./emotion-memoize.esm.06f0e458.js";const M=a=>{const f=y(),[i,m]=c.exports.useState(null),[t,r]=c.exports.useState(!1),o=d=>{d.preventDefault(),f(j(i.id)),r(!t)};return l("div",{className:"column-action",children:[e(b,{className:"text-truncate text-capitalize align-middle",to:`/template-edit/${a.id}`,children:e(k,{size:18,className:"text-danger me-50"})}),e(b,{className:"text-truncate text-capitalize align-middle",onClick:d=>{d.preventDefault(),m(a),r(!0)},children:e(L,{size:18,className:"text-danger me-50"})}),l(v,{isOpen:t,toggle:()=>r(!t),className:"modal-dialog-centered modal-lg",children:[e(S,{className:"bg-transparent",toggle:()=>r(!t)}),l(_,{className:"px-2 pb-2",children:[e("div",{className:"text-center mb-4",children:e("h1",{children:"Are you sure to delete?"})}),e(h,{tag:"form",onSubmit:o,children:l(u,{className:"text-center mt-2",xs:12,children:[e(x,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),e(x,{outline:!0,onClick:()=>r(!t),children:"Cancel"})]})})]})]})]})},R=[{name:"",sortable:!1,minWidth:"20px",sortField:"template_name",selector:a=>a.template_name,cell:a=>e("span",{className:"fw-bolder"})},{name:"Template Name",sortable:!1,minWidth:"320px",sortField:"template_name",selector:a=>a.template_name,cell:a=>e("span",{className:"fw-bolder",children:a.template_name})},{name:"",sortable:!1,minWidth:"320px",sortField:"rejection_message",selector:a=>a.rejection_message,cell:a=>e("span",{className:"fw-bolder"})},{name:"Status",minWidth:"60px",selector:a=>a.is_active,cell:a=>e("span",{children:a!=null&&a.is_active?"Active":"Deactive"})},{name:"Actions",minWidth:"40px",cell:a=>M(a)}],Z=()=>{const a=y(),f=T(n=>n.templates);c.exports.useEffect(()=>{a(A())},[]);const[i,m]=c.exports.useState(!1),[t,r]=c.exports.useState(null),[o,d]=c.exports.useState(null),w=n=>{var s,p;r({...t,[(s=n.target)==null?void 0:s.name]:(p=n.target)==null?void 0:p.value})},D=async n=>{var p,N,g;n.preventDefault();const s=await a(H(t));(p=s==null?void 0:s.payload)!=null&&p.status?m(!1):d((g=(N=s==null?void 0:s.payload)==null?void 0:N.data)==null?void 0:g.errors)},C=()=>e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:l(h,{children:[e(u,{xl:"10"}),e(u,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:l(x,{className:"add-new-user",color:"primary",onClick:n=>{n.preventDefault(),m(!0)},children:[e(I,{size:14})," Route Template"]})})})]})});return l("div",{className:"app-user-list",children:[e(c.exports.Fragment,{children:e(E,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e($,{striped:!0,subHeader:!0,responsive:!0,columns:R,className:"react-dataTable",data:f.data,subHeaderComponent:e(C,{})})})})}),l(v,{isOpen:i,toggle:()=>m(!i),className:"modal-dialog-centered modal-lg",children:[e(S,{className:"bg-transparent",toggle:()=>m(!i)}),e(_,{className:"px-2 pb-2",children:l(F,{onSubmit:D,children:[e(h,{children:l(u,{sm:"12",children:[e(W,{className:"form-label",for:"template_name",children:"Template Name"}),e(z,{type:"text",name:"template_name",id:"template_name",placeholder:"Enter Rejection message",autoFocus:!0,value:t==null?void 0:t.template_name,onChange:w}),e("small",{className:"text-danger",children:o==null?void 0:o.template_name})]})}),e(h,{children:e(u,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex justify-content-center",children:e(x,{className:"me-1",color:"primary",type:"submit",children:"Submit"})})})})]})})]})]})};export{Z as default};
