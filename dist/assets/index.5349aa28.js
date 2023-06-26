import{j as t,a as d,L as f,r as l,e6 as h,Q as g,k as N,f as m,Y as v,Z as c,G as b}from"./index.e1926c99.js";import{Q as C}from"./index.es.ec70f91b.js";import{E as y}from"./edit.8c37bad7.js";import{R as S}from"./react-paginate.49c518ae.js";import{a as _}from"./App.403c5a1e.js";/* empty css                                  */import{l as w}from"./index.4ee476bc.js";import{C as k}from"./chevron-down.430e3ce8.js";import{P as j}from"./plus-circle.2b398c67.js";import"./emotion-memoize.esm.06f0e458.js";const P=e=>t("div",{className:"column-action",children:t(f,{className:"text-truncate text-capitalize align-middle",to:`/station-edit/${e.id}`,children:t(y,{size:18,className:"text-primary me-50"})})}),F=[{name:"Station Name",sortable:!1,minWidth:"240px",sortField:"station_name",selector:e=>e.station_name,cell:e=>t("span",{className:"fw-bolder",children:e.station_name})},{name:"Station description",sortable:!1,minWidth:"300px",sortField:"station_description",selector:e=>e.station_description,cell:e=>t("span",{children:e.station_description})},{name:"Status on the My Orders portal",sortable:!1,minWidth:"360px",sortField:"station_status",selector:e=>e.station_status,cell:e=>t("span",{children:e.station_status})},{name:"Section",sortable:!1,minWidth:"120px",sortField:"same_user",selector:e=>e.section_info,cell:e=>{var a;return t("span",{children:(a=e.section_info)==null?void 0:a.section_name})}},{name:"Type",sortable:!1,minWidth:"120px",sortField:"type",selector:e=>e.type,cell:e=>{var s;const{typeOption:a}=d(n=>n.stations);return t("span",{children:(s=a==null?void 0:a.find(n=>(n==null?void 0:n.value)==e.type))==null?void 0:s.label})}},{name:"Actions",minWidth:"100px",cell:e=>P(e)}],I=()=>{const e=_(),a=d(i=>i.stations),[s,n]=l.exports.useState(1),[o,p]=l.exports.useState(null);l.exports.useEffect(()=>{e(h({page:s,q:o}))},[s,o]);const u=()=>{const i=N();return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:m(v,{children:[t(c,{xl:"6"}),t(c,{xl:"4",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions",children:t(w.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search by Station Name",value:o,onChange:r=>{r.preventDefault(),p(r.target.value)}})})}),t(c,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions",children:m(b,{className:"add-new-user",color:"primary",onClick:r=>{r.preventDefault(),i("/station-add")},children:[t(j,{size:14})," Station"]})})})]})})},x=()=>{const i=Number(Math.ceil(a.total/10));return t(S,{previousLabel:"",nextLabel:"",pageCount:i||1,activeClassName:"active",forcePage:s!==0?s-1:0,onPageChange:r=>n(r.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return t("div",{className:"app-user-list",children:t(l.exports.Fragment,{children:t(g,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(C,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:F,sortIcon:t(k,{}),className:"react-dataTable",paginationComponent:x,data:a.data,subHeaderComponent:t(u,{})})})})})})};export{I as default};
