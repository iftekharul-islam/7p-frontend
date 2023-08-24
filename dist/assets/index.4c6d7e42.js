import{j as a,f as s,a0 as C,L as y,k as S,a5 as P,a as f,r as d,dG as k,X as F,Y as r,G as W,Q as j,ab as H,N as h,n as u,ac as L,ad as x,dH as D}from"./index.e509d298.js";import{Q as R}from"./index.es.44e12308.js";import{R as T}from"./react-paginate.1d4a69bb.js";import{a as g}from"./App.fa99906d.js";/* empty css                                  */import{l as B}from"./index.a21adc9f.js";import{E as I}from"./edit.ceac4a29.js";import{P as E}from"./plus-circle.96e977eb.js";import"./emotion-memoize.esm.06f0e458.js";const A=e=>a("div",{className:"column-action",children:a(y,{className:"text-truncate text-capitalize align-middle",to:`/route-edit/${e.id}`,children:a(I,{size:18,className:"text-danger me-50"})})}),$=[{name:"Batch Code",sortable:!1,minWidth:"150px",sortField:"template_name",selector:e=>e==null?void 0:e.batch_code,cell:e=>a("span",{className:"fw-bolder",children:e==null?void 0:e.batch_code})},{name:"Route Name",sortable:!1,minWidth:"240px",sortField:"batch_route_name",selector:e=>e.batch_route_name,cell:e=>s("div",{children:[a("div",{className:"fw-bolder",children:e==null?void 0:e.batch_route_name}),s("div",{children:[a("div",{className:"fw-bolder",children:"Summary Header 1:"})," ",e==null?void 0:e.summary_msg_1]}),s("div",{children:[a("div",{className:"fw-bolder",children:"Summary Header 2:"})," ",e==null?void 0:e.summary_msg_2]})]})},{name:"Max Unit",sortable:!1,minWidth:"80px",sortField:"batch_max_units",selector:e=>e==null?void 0:e.batch_max_units,cell:e=>a("span",{className:"fw-bolder",children:e==null?void 0:e.batch_max_units})},{name:"Stations",minWidth:"150px",selector:e=>e.stations_list,cell:e=>{var t;return a("span",{children:(t=e==null?void 0:e.stations_list)==null?void 0:t.map(n=>a("div",{children:n==null?void 0:n.station_name}))})}},{name:"template",sortable:!1,minWidth:"140px",sortField:"export_template",selector:e=>e==null?void 0:e.template,cell:e=>{var t,n;return a("span",{className:"fw-bolder",children:(n=(t=e==null?void 0:e.template)==null?void 0:t.template_name)!=null?n:"--"})}},{name:"Nesting",sortable:!1,minWidth:"80px",sortField:"nesting",selector:e=>e==null?void 0:e.nesting,cell:e=>a("span",{className:"fw-bolder",children:e!=null&&e.nesting?"Yes":"No"})},{name:"Route Name",sortable:!1,minWidth:"240px",sortField:"csv_extension",selector:e=>e.csv_extension,cell:e=>s("div",{children:[s("div",{children:[a("div",{className:"fw-bolder",children:"CSV Directory:"})," ",e==null?void 0:e.csv_extension]}),s("div",{children:[a("div",{className:"fw-bolder",children:"File Extension:"})," ",e==null?void 0:e.export_dir]}),s("div",{children:[a("div",{className:"fw-bolder",children:"Graphic Directory:"})," ",e==null?void 0:e.graphic_dir]})]})},{name:"Route Name",sortable:!1,minWidth:"180px",sortField:"batch_route_name",selector:e=>e.batch_route_name,cell:e=>a("div",{children:a(C,{type:"textarea",columns:3,value:e==null?void 0:e.batch_options,disabled:!0})})},{name:"Actions",minWidth:"40px",cell:e=>A(e)}],z=()=>{const e=g(),t=S(),[n,i]=P(),m=n.get("q"),p=f(l=>l.routes),[c,b]=d.exports.useState(1),[o,v]=d.exports.useState(m!=null?m:null);d.exports.useEffect(()=>{e(k({page:c,q:o}))},[c,o]);const N=()=>a("div",{className:"w-100",children:s(F,{children:[a(r,{xl:"2",className:"d-flex align-items-end align-content-center flex-wrap",children:a("div",{children:"Search by Batch Code"})}),a(r,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:a("div",{className:"d-flex align-items-center table-header-actions w-100",children:a(B.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search Here",value:o,onChange:l=>{l.preventDefault(),v(l.target.value)}})})}),a(r,{xl:"5"}),a(r,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:a("div",{className:"d-flex align-items-center table-header-actions",children:s(W,{className:"add-new-user",color:"primary",onClick:l=>{l.preventDefault(),t("/route-add")},children:[a(E,{size:14})," Route"]})})})]})});return a("div",{className:"react-dataTable",children:a(R,{striped:!0,noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:$,className:"react-dataTable",customStyles:{cells:{style:{marginTop:35,marginBottom:35}}},paginationComponent:()=>{const l=Number(Math.ceil(p.total/10));return a(T,{previousLabel:"",nextLabel:"",pageCount:l||1,activeClassName:"active",forcePage:c!==0?c-1:0,onPageChange:_=>b(_.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:p.data,subHeaderComponent:a(N,{})})})},O=()=>{const e=g(),{active:t}=f(i=>i==null?void 0:i.routes),n=i=>{t!==i&&e(D(i))};return a(d.exports.Fragment,{children:s(j,{className:"p-1",children:[s(H,{pills:!0,className:"mb-2 orange",children:[a(h,{children:a(u,{active:t==="1",onClick:()=>{n("1")},children:"Batches"})}),a(h,{children:a(u,{active:t==="2",onClick:()=>{n("2")},children:"Export/Import"})})]}),s(L,{activeTab:t,children:[a(x,{tabId:"1",children:a(z,{})}),a(x,{tabId:"2",children:"Under Maintenance"})]})]})})};export{O as default};
