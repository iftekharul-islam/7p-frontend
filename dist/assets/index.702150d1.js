import{j as e,r as o,f as l,L as v,aA as y,aB as S,aC as w,Y as x,Z as d,G as g,cg as z,ch as F,a as H,ci as I,Q as T,$ as M,a0 as R,a1 as W,cj as $}from"./index.b5b6a8d2.js";import{Q as B}from"./index.es.a6ec9863.js";import{a as D,A as E}from"./App.fda3d641.js";import{A as O}from"./arrow-down.3439d9b5.js";import{T as Q}from"./trash-2.f68b58f2.js";import{R as q}from"./react-paginate.d51eb14e.js";/* empty css                                  */import{l as G}from"./index.2b7d98c8.js";import{C as U}from"./chevron-down.46497eaa.js";import{P as Y}from"./plus-circle.2b9590af.js";import"./emotion-memoize.esm.06f0e458.js";const Z=a=>{const p=D(),[m,f]=o.exports.useState(null),[n,c]=o.exports.useState(!1),u=t=>{t.preventDefault(),p(z(m.id)),c(!n)},i=t=>{p(F({direction:t,id:a==null?void 0:a.id}))};return l("div",{className:"column-action",children:[e(v,{className:"text-truncate text-capitalize align-middle",onClick:t=>{t.preventDefault(),i("up")},children:e(E,{size:18,className:"text-primary me-50"})}),e(v,{className:"text-truncate text-capitalize align-middle",onClick:t=>{t.preventDefault(),i("down")},children:e(O,{size:18,className:"text-primary me-50"})}),e(v,{className:"text-truncate text-capitalize align-middle",onClick:t=>{t.preventDefault(),f(a),c(!0)},children:e(Q,{size:18,className:"text-danger me-50"})}),l(y,{isOpen:n,toggle:()=>c(!n),className:"modal-dialog-centered modal-lg",children:[e(S,{className:"bg-transparent",toggle:()=>c(!n)}),l(w,{className:"px-2 pb-2",children:[e("div",{className:"text-center mb-4",children:e("h1",{children:"Are you sure to delete?"})}),e(x,{tag:"form",onSubmit:u,children:l(d,{className:"text-center mt-2",xs:12,children:[e(g,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),e(g,{outline:!0,onClick:()=>c(!n),children:"Cancel"})]})})]})]})]})},J=[{name:"",sortable:!1,minWidth:"20px",sortField:"rejection_message",selector:a=>a.rejection_message,cell:a=>e("span",{className:"fw-bolder"})},{name:"Parameters",sortable:!1,minWidth:"320px",sortField:"parameter_value",selector:a=>a.parameter_value,cell:a=>e("span",{className:"fw-bolder",children:a.parameter_value})},{name:"",sortable:!1,minWidth:"320px",sortField:"rejection_message",selector:a=>a.rejection_message,cell:a=>e("span",{className:"fw-bolder"})},{name:"Actions",minWidth:"100px",cell:a=>Z(a)}],ce=()=>{const a=D(),p=H(s=>s.parameters),[m,f]=o.exports.useState(1),[n,c]=o.exports.useState(null);o.exports.useEffect(()=>{a(I({page:m,q:n}))},[m,n]);const[u,i]=o.exports.useState(!1),[t,P]=o.exports.useState(null),[N,j]=o.exports.useState(null),k=s=>{var r,h;P({...t,[(r=s.target)==null?void 0:r.name]:(h=s.target)==null?void 0:h.value})},_=async s=>{var h,b,C;s.preventDefault();const r=await a($(t));(h=r==null?void 0:r.payload)!=null&&h.status?i(!1):j((C=(b=r==null?void 0:r.payload)==null?void 0:b.data)==null?void 0:C.errors)},A=()=>e("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:l(x,{children:[e(d,{xl:"6"}),e(d,{xl:"4",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:e(G.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,placeholder:"Search by Parameters",value:n,onChange:s=>{s.preventDefault(),c(s.target.value)}})})}),e(d,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:e("div",{className:"d-flex align-items-center table-header-actions",children:l(g,{className:"add-new-user",color:"primary",onClick:s=>{s.preventDefault(),i(!0)},children:[e(Y,{size:14})," Parameter"]})})})]})}),L=()=>{const s=Number(Math.ceil(p.total/10));return e(q,{previousLabel:"",nextLabel:"",pageCount:s||1,activeClassName:"active",forcePage:m!==0?m-1:0,onPageChange:r=>f(r.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return l("div",{className:"app-user-list",children:[e(o.exports.Fragment,{children:e(T,{className:"overflow-hidden",children:e("div",{className:"react-dataTable",children:e(B,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:J,sortIcon:e(U,{}),className:"react-dataTable",paginationComponent:L,data:p.data,subHeaderComponent:e(A,{})})})})}),l(y,{isOpen:u,toggle:()=>i(!u),className:"modal-dialog-centered modal-lg",children:[e(S,{className:"bg-transparent",toggle:()=>i(!u)}),e(w,{className:"px-2 pb-2",children:l(M,{onSubmit:_,children:[e(x,{children:l(d,{sm:"12",children:[e(R,{className:"form-label",for:"parameter_value",children:"Parameter Name"}),e(W,{type:"text",name:"parameter_value",id:"parameter_value",placeholder:"Enter Parameter Name",autoFocus:!0,value:t==null?void 0:t.parameter_value,onChange:k}),e("small",{className:"text-danger",children:N==null?void 0:N.parameter_value})]})}),e(x,{children:e(d,{sm:"12",className:"mt-1",children:e("div",{className:"d-flex justify-content-center",children:e(g,{className:"me-1",color:"primary",type:"submit",children:"Submit"})})})})]})})]})]})};export{ce as default};
