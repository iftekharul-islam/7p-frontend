import{f as d,j as n,I as Y,k as q,a as I,r as h,as as P,at as E,au as H,av as M,aw as T,Q as W,V as Q,X as u,Y as c,a0 as j,G as U,ax as A,ay as $}from"./index.3c92940a.js";/* empty css                  *//* empty css                  */import{a as G}from"./App.1e2e16c3.js";/* empty css                                  */import{Q as K}from"./index.es.ff394365.js";import{F as p}from"./index.f901dd14.js";import{R as V}from"./react-paginate.fdcfc0ba.js";import{S as g}from"./react-select.esm.d0f99a9a.js";import{h as X}from"./moment.4d75c86c.js";import{C as z}from"./chevron-down.683cbc3a.js";import"./emotion-memoize.esm.06f0e458.js";const J=[{name:"Batch",sortable:!1,minWidth:"100px",sortField:"warehouse",selector:e=>e.warehouse,cell:e=>{var i;return d("div",{children:[n("div",{children:e==null?void 0:e.batch_number}),d("small",{children:[(e==null?void 0:e.status)!=="active"&&d(Y,{children:[n("br",{}),"(",(e==null?void 0:e.status.charAt(0).toUpperCase())+(e==null?void 0:e.status.slice(1)),")"]}),(e==null?void 0:e.store)&&d(Y,{children:[n("br",{}),(i=e==null?void 0:e.store)==null?void 0:i.store_name]})]})]})}},{name:"First Order",sortable:!1,minWidth:"100px",sortField:"min_order_date",selector:e=>e.min_order_date,cell:e=>n("div",{children:X(e.min_order_date).format("YYYY-MM-DD")})},{name:"Lines",sortable:!1,minWidth:"50px",sortField:"itemsCount",selector:e=>e.itemsCount,cell:e=>{var i;return d("div",{children:[" ",((i=e.items_counts)==null?void 0:i.length)>0&&e.items_counts[0].count]})}},{name:"Current Station",sortable:!1,minWidth:"200px",sortField:"qty_on_hand",selector:e=>e.qty_on_hand,cell:e=>{var i,t;return d("div",{children:[(i=e==null?void 0:e.station)==null?void 0:i.station_name," ",n("br",{})," ",(t=e==null?void 0:e.station)==null?void 0:t.station_description]})}},{name:"Last Scan",sortable:!1,minWidth:"150px",sortField:"change_date",selector:e=>e.change_date,cell:e=>n("div",{children:e==null?void 0:e.change_date})},{name:"Image",sortable:!1,minWidth:"75px",sortField:"qty_alloc",selector:e=>e.qty_alloc,cell:e=>{var i;return n("div",{children:n("img",{src:(i=e==null?void 0:e.first_item)==null?void 0:i.item_thumb,width:"70"})})}},{name:"Child SKU",sortable:!1,minWidth:"120px",sortField:"qty_av",selector:e=>e.qty_av,cell:e=>{var i,t;return n("div",{children:(t=(i=e==null?void 0:e.first_item)==null?void 0:i.child_sku)!=null?t:"No Items"})}}],re=()=>{var _,C,x,b,N,S,y,F,O;const e=G(),i=q(),t=I(a=>a.batchList),[f,v]=h.exports.useState(!1),l=t==null?void 0:t.searchParams;h.exports.useEffect(()=>{t!=null&&t.params&&e(P())},[t==null?void 0:t.params]),h.exports.useEffect(()=>{e(E()),e(H()),e(M()),e(T())},[]);const B=async()=>{v(!0),await e(P()),v(!1)},o=a=>{e(A(a))},R=()=>{var a,s,r,m,k,L;return q(),n("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:d(u,{children:[d(c,{xl:"10",children:["(",(s=(a=t==null?void 0:t.data)==null?void 0:a.total)!=null?s:0," Batches Found ) Total lines :",(m=(r=t==null?void 0:t.cost)==null?void 0:r.count)!=null?m:0," quantity :",(L=(k=t==null?void 0:t.cost)==null?void 0:k.quantity)!=null?L:0]}),n(c,{xl:"2",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:n("div",{className:"d-flex align-items-center table-header-actions"})})]})})},D=()=>{var s,r;const a=Number(Math.ceil(t.total/10));return n(V,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:((s=t==null?void 0:t.params)==null?void 0:s.page)!==0?((r=t==null?void 0:t.params)==null?void 0:r.page)-1:0,onPageChange:m=>e($({page:m.selected+1})),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return n("div",{className:"app-user-list",children:d(h.exports.Fragment,{children:[n(W,{className:"px-1",children:d(Q,{children:[d(u,{className:"mb-1",children:[n(c,{sm:"3",children:n(g,{options:t==null?void 0:t.routeOptions,placeholder:"Route",value:(_=t==null?void 0:t.routeOptions)==null?void 0:_.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.route)),onChange:a=>o({route:a==null?void 0:a.value})})}),n(c,{sm:"3",children:n(g,{options:t==null?void 0:t.stationOptions,placeholder:"Station",value:(C=t==null?void 0:t.stationOptions)==null?void 0:C.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.station)),onChange:a=>o({station:a==null?void 0:a.value})})}),n(c,{sm:"3",children:n(p,{className:"form-control",id:"date",placeholder:"Last Scan Start date",value:(x=l==null?void 0:l.start_date)!=null?x:null,options:{dateFormat:"d-m-Y"},onChange:a=>o({start_date:a[0]})})}),n(c,{sm:"3",children:n(p,{className:"form-control",id:"date",placeholder:"Last Scan End date",value:(b=l==null?void 0:l.end_date)!=null?b:null,options:{dateFormat:"d-m-Y"},onChange:a=>o({end_date:a[0]})})})]}),d(u,{className:"mb-1",children:[n(c,{sm:"2",children:n(j,{placeholder:"User",value:l==null?void 0:l.filter_username,onChange:a=>{var s;return o({filter_username:(s=a==null?void 0:a.target)==null?void 0:s.value})}})}),n(c,{sm:"2",children:n(j,{placeholder:"Batch#",value:l==null?void 0:l.batch,onChange:a=>{var s;return o({batch:(s=a==null?void 0:a.target)==null?void 0:s.value})}})}),n(c,{sm:"2",children:n(g,{options:t==null?void 0:t.statusOptions,placeholder:"Status",value:(N=t==null?void 0:t.statusOptions)==null?void 0:N.find(a=>(a==null?void 0:a.value)==(l==null?void 0:l.status)),onChange:a=>o({status:a==null?void 0:a.value})})}),n(c,{sm:"6",children:n(g,{className:"react-select",options:t==null?void 0:t.storeOptions,placeholder:"Store",isMulti:!0,value:(S=t==null?void 0:t.storeOptions)==null?void 0:S.filter(a=>{var s;return(s=l==null?void 0:l.store)==null?void 0:s.includes(a==null?void 0:a.value)}),onChange:a=>o({store:a==null?void 0:a.map(s=>s==null?void 0:s.value)})})})]}),d(u,{children:[n(c,{sm:"3",children:n(p,{className:"form-control",id:"date",placeholder:"Order Start date",value:(y=l==null?void 0:l.order_start_date)!=null?y:null,options:{dateFormat:"d-m-Y"},onChange:a=>o({order_start_date:a[0]})})}),n(c,{sm:"3",children:n(p,{className:"form-control",id:"date",placeholder:"Order End date",value:(F=l==null?void 0:l.order_end_date)!=null?F:null,options:{dateFormat:"d-m-Y"},onChange:a=>o({order_end_date:a[0]})})}),n(c,{sm:"6",className:"d-flex align-items-end flex-column",children:n(U,{color:"primary",onClick:B,disabled:f,children:f?"Searching":"Search"})})]})]})}),n(W,{className:"overflow-hidden",children:n("div",{className:"react-dataTable",children:n(K,{striped:!0,noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:J,customStyles:{cells:{style:{marginTop:25,marginBottom:25}}},sortIcon:n(z,{}),className:"react-dataTable",paginationComponent:D,data:(O=t==null?void 0:t.data)==null?void 0:O.data,subHeaderComponent:n(R,{}),onRowClicked:a=>i(`/batch-list/${a==null?void 0:a.batch_number}`)})})})]})})};export{re as default};
