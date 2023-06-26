import{r as p,f as i,j as t,p as k,L as P,a5 as M,a6 as W,a as j,a7 as B,Y as h,Z as d,a8 as V,I as O,Q as R,a1 as S,G as Y,a9 as Q,aa as $,ab as X,ac as G,N as q,n as D,ad as Z,ae as F}from"./index.22eb8bd8.js";import{Q as z}from"./index.es.75e8b811.js";import{h as T}from"./moment.4d75c86c.js";import{a as v,C as I}from"./App.68a66c55.js";import{R as U}from"./react-paginate.a64aa864.js";/* empty css                                  */import{l as H}from"./index.917e0fde.js";import{C as E}from"./chevron-down.fe3e7301.js";import"./emotion-memoize.esm.06f0e458.js";function J(e,a){if(e==null)return{};var c=K(e,a),s,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(c[s]=e[s]))}return c}function K(e,a){if(e==null)return{};var c={},s=Object.keys(e),r,o;for(o=0;o<s.length;o++)r=s[o],!(a.indexOf(r)>=0)&&(c[r]=e[r]);return c}var L=p.exports.forwardRef(function(e,a){var c=e.color,s=c===void 0?"currentColor":c,r=e.size,o=r===void 0?24:r,_=J(e,["color","size"]);return i("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",..._,children:[t("circle",{cx:"12",cy:"12",r:"10"}),t("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),t("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})});L.propTypes={color:k.exports.string,size:k.exports.oneOfType([k.exports.string,k.exports.number])};L.displayName="XCircle";const A=L,w=[{name:"Date",sortable:!1,minWidth:"200px",sortField:"created_at",selector:e=>e==null?void 0:e.created_at,cell:e=>t("span",{children:T(e==null?void 0:e.created_at).format("YYYY-MM-DD hh:mm:ss")})},{name:"Stock Number",sortable:!1,minWidth:"120px",sortField:"stock_no_unique",selector:e=>e.stock_no_unique,cell:e=>{const a=v();return t(P,{to:`/adjustment?qStockNumber=${e.stock_no_unique}`,onClick:()=>a(M("2")),children:t("span",{children:e.stock_no_unique})})}},{name:"Description",sortable:!1,minWidth:"320px",sortField:"inventory",selector:e=>e.inventory,cell:e=>{var a,c;return i("span",{children:[(c=(a=e==null?void 0:e.inventory)==null?void 0:a.stock_name_discription)!=null?c:"Inventory not found",":"]})}},{name:"Quantity",sortable:!0,minWidth:"100px",sortField:"quantity",selector:e=>e.quantity,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.quantity})},{name:"Type",minWidth:"150px",sortField:"type",selector:e=>e.type,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.type})},{name:"Note",minWidth:"300px",sortField:"note",selector:e=>e.note,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.note})},{name:"User",minWidth:"100px",sortField:"user",selector:e=>e.user,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.user)==null?void 0:a.name})}}],ee=()=>{const e=v(),[a,c]=W(),s=a.get("q"),r=j(m=>m.adjustments),[o,_]=p.exports.useState(1),[n,l]=p.exports.useState(s!=null?s:null),[N,x]=p.exports.useState("desc"),[g,C]=p.exports.useState("id");return p.exports.useEffect(()=>{e(B({page:o,q:n,sort:N,sortColumn:g}))},[o,n,N,g]),i("div",{className:"react-dataTable",children:[t(()=>t("div",{className:"w-100",children:i(h,{children:[t(d,{xl:"2",className:"d-flex align-items-end align-content-center flex-wrap",children:t("div",{children:"Search by Stock Number"})}),t(d,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(H.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search Here",value:n,onChange:m=>{m.preventDefault(),l(m.target.value)}})})}),t(d,{xl:"7"})]})}),{}),t(z,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:w,onSort:(m,b)=>{x(b),C(m.sortField)},sortIcon:t(E,{}),className:"react-dataTable",paginationComponent:()=>{const m=Number(Math.ceil(r.view_total/10));return t(U,{previousLabel:"",nextLabel:"",pageCount:m||1,activeClassName:"active",forcePage:o!==0?o-1:0,onPageChange:b=>_(b.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:r.viewAdjustmentData})]})},te=[{name:"Date",sortable:!1,minWidth:"120px",sortField:"created_at",selector:e=>e==null?void 0:e.created_at,cell:e=>t("span",{children:T(e==null?void 0:e.created_at).format("YYYY-MM-DD hh:mm:ss")})},{name:"Stock Number",sortable:!1,minWidth:"120px",sortField:"stock_no_unique",selector:e=>e.stock_no_unique,cell:e=>t("span",{children:e.stock_no_unique})},{name:"Description",sortable:!1,minWidth:"320px",sortField:"stock_name_discription",selector:e=>e.stock_name_discription,cell:e=>{var a;return i("span",{children:[(a=e==null?void 0:e.stock_name_discription)!=null?a:"Inventory not found",":"]})}},{name:"Quantity",sortable:!0,minWidth:"100px",sortField:"quantity",selector:e=>e.quantity,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.quantity})},{name:"Type",minWidth:"150px",sortField:"type",selector:e=>e.type,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.type})},{name:"Note",minWidth:"300px",sortField:"note",selector:e=>e.note,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.note)!=null?a:"--"})}},{name:"User",minWidth:"100px",sortField:"user",selector:e=>e.user,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.user)==null?void 0:a.name})}}],ae=()=>{var y;const e=v(),[a,c]=W(),s=a.get("qStockNumber"),r=j(u=>u.adjustments),[o,_]=p.exports.useState(s!=null?s:null),n=(y=r==null?void 0:r.AdjustInventory)!=null?y:null,[l,N]=p.exports.useState({count_note:"Quantity on Hand adjusted",adjust_note:"Manual Inventory Adjustment"}),x=u=>{var f,m;N({...l,[(f=u==null?void 0:u.target)==null?void 0:f.name]:(m=u==null?void 0:u.target)==null?void 0:m.value})};p.exports.useEffect(()=>{e(V({q:o}))},[o]);const g=u=>{let f=null;u=="count"?f={count_stock_no:n==null?void 0:n.stock_no_unique,count_note:l==null?void 0:l.count_note,count_quantity:l==null?void 0:l.count_quantity}:f={count_stock_no:n==null?void 0:n.stock_no_unique,adjust_note:l==null?void 0:l.adjust_note,adjust_quantity:l==null?void 0:l.adjust_quantity},e(Q(f))};return i("div",{className:"react-dataTable",children:[t(()=>t("div",{className:"w-100",children:i(h,{children:[t(d,{xl:"2",className:"d-flex align-items-end align-content-center flex-wrap",children:t("div",{children:"Search by Stock Number"})}),t(d,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(H.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search Here",value:o,onChange:u=>{u.preventDefault(),_(u.target.value)}})})}),t(d,{xl:"7"})]})}),{}),t("hr",{}),n&&i(O,{children:[i(R,{className:"my-1",children:[i(h,{children:[t(d,{sm:"2",className:"d-flex align-items-center flex-column",children:t("img",{src:n==null?void 0:n.warehouse,height:"100",width:"100"})}),i(d,{sm:"10",children:[t(h,{children:i("h2",{children:[n==null?void 0:n.stock_no_unique,":"," ",n==null?void 0:n.stock_name_discription]})}),t("hr",{}),t(h,{children:i("small",{children:["Bin: ",n==null?void 0:n.wh_bin]})})]})]}),t("hr",{}),i(h,{children:[t(d,{sm:"2"}),t(d,{sm:"2",className:"d-flex align-items-center",children:i("table",{className:"table table-bordered",children:[i("tr",{children:[t("td",{children:"Purchases"}),t("td",{children:n==null?void 0:n.total_purchase})]}),i("tr",{children:[t("td",{children:"Sales"}),t("td",{children:n==null?void 0:n.total_sale})]}),i("tr",{children:[t("td",{children:"Quantity On Hand"}),t("td",{children:n==null?void 0:n.qty_on_hand})]}),i("tr",{children:[t("td",{children:"Allocated"}),t("td",{children:n==null?void 0:n.qty_alloc})]}),i("tr",{children:[t("td",{children:"Expected"}),t("td",{children:n==null?void 0:n.qty_exp})]}),i("tr",{children:[t("td",{children:"Available"}),t("td",{children:n==null?void 0:n.qty_av})]})]})}),t(d,{sm:"2"}),i(d,{sm:"6",children:[i(h,{className:"pb-2",children:[t("p",{children:"Update Quantity on Hand:"}),i(h,{className:"d-flex",children:[t(d,{sm:"2",children:t(S,{type:"number",name:"count_quantity",value:l==null?void 0:l.count_quantity,onChange:x})}),t(d,{sm:"2",className:"d-flex align-items-center",children:"Note:"}),t(d,{sm:"6",children:t(S,{type:"text",name:"count_note",value:l==null?void 0:l.count_note,onChange:x})}),t(d,{sm:"2",children:t(Y,{onClick:()=>g("count"),children:"Update"})})]})]}),i(h,{children:[t("p",{children:"Add or subtract units:"}),i(h,{className:"d-flex",children:[t(d,{sm:"2",children:t(S,{type:"number",name:"adjust_quantity",value:l==null?void 0:l.adjust_quantity,onChange:x})}),t(d,{sm:"2",className:"d-flex align-items-center",children:"Note:"}),t(d,{sm:"6",children:t(S,{type:"text",name:"adjust_note",value:l==null?void 0:l.adjust_note,onChange:x})}),t(d,{sm:"2",children:t(Y,{onClick:()=>g("adjust"),children:"Update"})})]})]})]})]})]}),t("hr",{}),t(z,{subHeader:!0,responsive:!0,columns:te,className:"react-dataTable",data:n==null?void 0:n.adjustments})]})]})},ne=e=>{const a=v(),c=s=>{const r={rejection_id:e==null?void 0:e.id,action:s};a(Q(r))};return i(O,{children:[i(P,{className:"text-truncate text-capitalize align-middle",to:"/",onClick:s=>{s.preventDefault(),c("scrap")},id:`adjust-${e.id}`,children:[t(I,{size:18,className:"text-primary me-50"}),t($,{placement:"top",target:`adjust-${e.id}`,children:"Adjust Inventory"})]}),i(P,{className:"text-truncate text-capitalize align-middle",to:"/",onClick:s=>{s.preventDefault(),c("ignore")},id:`ignore-${e.id}`,children:[t(A,{size:18,className:"text-primary me-50"}),t($,{placement:"top",target:`ignore-${e.id}`,children:"Ignore"})]})]})},se=[{name:"Date",sortable:!1,minWidth:"180px",sortField:"created_at",selector:e=>e==null?void 0:e.created_at,cell:e=>t("span",{children:T(e==null?void 0:e.created_at).format("YYYY-MM-DD hh:mm:ss")})},{name:"Stock Number",sortable:!1,minWidth:"150px",sortField:"stock_no_unique",selector:e=>{var a;return(a=e==null?void 0:e.item)==null?void 0:a.inventoryunit},cell:e=>{var a,c;return t("span",{children:(c=(a=e==null?void 0:e.item)==null?void 0:a.inventoryunit)==null?void 0:c.map(s=>t("div",{children:s==null?void 0:s.stock_no_unique}))})}},{name:"Item ID",sortable:!1,minWidth:"100px",sortField:"item_id",selector:e=>e.item_id,cell:e=>{var a;return t("span",{children:(a=e==null?void 0:e.item_id)!=null?a:"--"})}},{name:"Status",sortable:!1,minWidth:"100px",sortField:"graphic_status",selector:e=>e.graphic_status,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.graphic_status})},{name:"Reason",minWidth:"150px",sortField:"rejection_message",selector:e=>e.rejection_message,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.rejection_reason_info)==null?void 0:a.rejection_message})}},{name:"Message",minWidth:"300px",sortField:"rejection_message",selector:e=>e.rejection_message,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.rejection_message)!=null?a:"--"})}},{name:"User",minWidth:"100px",sortField:"user",selector:e=>e.user,cell:e=>{var a;return t("span",{className:"text-capitalize",children:(a=e==null?void 0:e.user)==null?void 0:a.name})}},{name:"Quantity",minWidth:"100px",sortField:"reject_qty",selector:e=>e.reject_qty,cell:e=>t("span",{className:"text-capitalize",children:e==null?void 0:e.reject_qty})},{name:"Action",minWidth:"100px",sortField:"user",selector:e=>e,cell:e=>ne(e)}],ie=()=>{const e=v(),[a,c]=W(),s=a.get("q"),r=j(m=>m.adjustments),[o,_]=p.exports.useState(1),[n,l]=p.exports.useState(s!=null?s:null),[N,x]=p.exports.useState("desc"),[g,C]=p.exports.useState("id");p.exports.useEffect(()=>{e(X({page:o,q:n,sort:N,sortColumn:g}))},[o,n,N,g]);const y=(m,b)=>{x(b),C(m.sortField)},u=()=>t("div",{className:"w-100",children:i(h,{children:[t(d,{xl:"2",className:"d-flex align-items-end align-content-center flex-wrap",children:t("div",{children:"Search by Stock Number"})}),t(d,{xl:"3",className:"d-flex align-items-sm-start justify-content-xl-start justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:t("div",{className:"d-flex align-items-center table-header-actions w-100",children:t(H.DebounceInput,{className:"form-control",color:"primary",debounceTimeout:300,autoFocus:!0,placeholder:"Search Here",value:n,onChange:m=>{m.preventDefault(),l(m.target.value)}})})}),t(d,{xl:"7"})]})});return t("div",{className:"react-dataTable",children:t(z,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:se,onSort:y,sortIcon:t(E,{}),className:"react-dataTable",paginationComponent:()=>{const m=Number(Math.ceil(r.view_total/10));return t(U,{previousLabel:"",nextLabel:"",pageCount:m||1,activeClassName:"active",forcePage:o!==0?o-1:0,onPageChange:b=>_(b.selected+1),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:r.ProductionRejectsData,subHeaderComponent:t(u,{})})})},xe=()=>{const e=v(),{active:a}=j(s=>s==null?void 0:s.adjustments),c=s=>{a!==s&&e(M(s))};return t(p.exports.Fragment,{children:i(R,{className:"p-1",children:[i(G,{pills:!0,className:"mb-2 orange",children:[t(q,{children:t(D,{active:a==="1",onClick:()=>{c("1")},children:"View Adjustment"})}),t(q,{children:t(D,{active:a==="2",onClick:()=>{c("2")},children:"Adjust Inventory"})}),t(q,{children:t(D,{active:a==="3",onClick:()=>{c("3")},children:"Production Rejects"})})]}),i(Z,{activeTab:a,children:[t(F,{tabId:"1",children:t(ee,{})}),t(F,{tabId:"2",children:t(ae,{})}),t(F,{tabId:"3",children:t(ie,{})})]})]})})};export{xe as default};
