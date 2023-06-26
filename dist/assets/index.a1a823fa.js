import{f as i,j as l,L as Y,a as I,r as g,bX as M,bY as R,bZ as B,b_ as Q,b$ as Z,Q as j,Y as F,Z as d,a1 as H,G as E,c0 as G,c1 as U}from"./index.22eb8bd8.js";/* empty css                  */import{a as V}from"./App.68a66c55.js";/* empty css                                  */import{Q as X}from"./index.es.75e8b811.js";import{F as A}from"./index.2b46e6e7.js";import{R as q}from"./react-paginate.a64aa864.js";import{S as h}from"./react-select.esm.579d0190.js";import{h as z}from"./moment.4d75c86c.js";import{C as J}from"./chevron-down.fe3e7301.js";import"./emotion-memoize.esm.06f0e458.js";const K=[{name:"Order/PO",sortable:!1,minWidth:"200px",sortField:"warehouse",selector:e=>e.warehouse,cell:e=>i("div",{children:[l("div",{children:l(Y,{to:`/customer-order-edit/${e.id}`,children:e==null?void 0:e.short_order})}),l("div",{children:i(Y,{to:`/customer-order-edit/${e.id}`,children:["#",e==null?void 0:e.purchase_order]})})]})},{name:"Date",sortable:!1,minWidth:"280px",sortField:"store",selector:e=>e.store,cell:e=>{var a,s,r;return i("div",{children:[l("div",{children:e!=null&&e.store?((a=e==null?void 0:e.store)==null?void 0:a.company)>0?(s=e==null?void 0:e.store)==null?void 0:s.company[0]:(r=e==null?void 0:e.store)==null?void 0:r.store_name:"STORE NOT FOUND"}),l("div",{children:z(e==null?void 0:e.order_date).format("YYYY-MM-DD HH:MM:ss a")})]})}},{name:"Customer",sortable:!1,minWidth:"240px",sortField:"customer",selector:e=>e.customer,cell:e=>{var a,s,r;return i("div",{children:[l("div",{children:e!=null&&e.customer?(a=e==null?void 0:e.customer)==null?void 0:a.ship_full_name:"#"}),l("div",{children:e!=null&&e.customer?`${(s=e==null?void 0:e.customer)==null?void 0:s.ship_state},${(r=e==null?void 0:e.customer)==null?void 0:r.ship_country}`:"#"})]})}},{name:"Items",sortable:!1,minWidth:"60px",sortField:"item_count",selector:e=>e.item_count,cell:e=>{var a;return l("div",{children:(a=e==null?void 0:e.item_count)!=null?a:0})}},{name:"Subtotal",sortable:!1,minWidth:"120px",sortField:"items",selector:e=>e.items,cell:e=>i("div",{children:["$",parseFloat(e==null?void 0:e.items.reduce(function(a,s){return parseFloat(a)+parseFloat(s==null?void 0:s.item_total_price)},0)).toFixed(2)]})},{name:"Discount",sortable:!1,minWidth:"120px",sortField:"promotion_value",selector:e=>e.promotion_value,cell:e=>{var a,s;return i("div",{children:["$",parseFloat(parseFloat((a=e==null?void 0:e.promotion_value)!=null?a:0)+parseFloat((s=e==null?void 0:e.coupon_value)!=null?s:0)).toFixed(2)]})}},{name:"Shipping",sortable:!1,minWidth:"120px",sortField:"shipping_charge",selector:e=>e.shipping_charge,cell:e=>{var a;return i("div",{children:["$",parseFloat((a=e==null?void 0:e.shipping_charge)!=null?a:0).toFixed(2)]})}},{name:"Tax",sortable:!1,minWidth:"120px",sortField:"tax_charge",selector:e=>e.tax_charge,cell:e=>{var a;return i("div",{children:["$",parseFloat((a=e==null?void 0:e.tax_charge)!=null?a:0).toFixed(2)]})}},{name:"Total",sortable:!1,minWidth:"120px",sortField:"item_count",selector:e=>e.item_count,cell:e=>{var s,r,n,u,o,v;const a=parseFloat(e==null?void 0:e.items.reduce(function(_,p){return parseFloat(_)+parseFloat(p==null?void 0:p.item_total_price)},0))-(parseFloat((s=e==null?void 0:e.promotion_value)!=null?s:0)+parseFloat((r=e==null?void 0:e.coupon_value)!=null?r:0))+parseFloat((n=e==null?void 0:e.shipping_charge)!=null?n:0)+parseFloat((u=e==null?void 0:e.tax_charge)!=null?u:0)-parseFloat((o=e==null?void 0:e.total)!=null?o:0);return i("div",{className:a!=0&&"text-danger",children:["$",parseFloat((v=e==null?void 0:e.total)!=null?v:0).toFixed(2)]})}},{name:"Status",sortable:!1,minWidth:"180px",sortField:"order_status",selector:e=>e.order_status,cell:e=>{var s,r;const a=I(n=>n.orders);return i("div",{children:[l("div",{children:(r=(s=a==null?void 0:a.statusOptions)==null?void 0:s.find(n=>(n==null?void 0:n.value)==(e==null?void 0:e.order_status)))==null?void 0:r.label}),i("div",{children:[e==null?void 0:e.carrier," ",e==null?void 0:e.method]})]})}},{name:"Coupon",sortable:!1,minWidth:"180px",sortField:"item_count",selector:e=>e.item_count,cell:e=>i("div",{children:[e==null?void 0:e.promotion_id," ",e==null?void 0:e.coupon_id]})}],oe=()=>{var p,x,b,C,S,N,O,y;const e=V(),a=I(t=>t.orders),[s,r]=g.exports.useState(!1),n=a==null?void 0:a.searchParams;g.exports.useEffect(()=>{a!=null&&a.params&&e(M())},[a==null?void 0:a.params]),g.exports.useEffect(()=>{e(R()),e(B()),e(Q()),e(Z())},[]);const u=async()=>{r(!0),await e(M()),r(!1)},o=t=>{e(G(t))},v=()=>{var t,c,m,f,D,$,T,W,k,L,P;return l("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:i(F,{children:[l(d,{sm:"2",className:"d-flex align-items-center border-primary",children:i("div",{children:["Total Orders: ",parseInt((c=(t=a==null?void 0:a.totalData)==null?void 0:t.total)!=null?c:0)]})}),l(d,{sm:"2",className:"d-flex align-items-center border-primary",children:i("div",{children:["Total Amount: $",parseFloat((f=(m=a==null?void 0:a.totalData)==null?void 0:m.money)!=null?f:0).toFixed(2)]})}),l(d,{sm:"2",className:"d-flex align-items-center border-primary",children:i("div",{children:["Average Amount: $",parseFloat((D=a==null?void 0:a.totalData)!=null&&D.money?(($=a==null?void 0:a.totalData)==null?void 0:$.money)/((T=a==null?void 0:a.totalData)==null?void 0:T.total):0).toFixed(2)]})}),l(d,{sm:"2",className:"d-flex align-items-center border-primary",children:i("div",{children:["Tax Total: $",parseFloat((k=(W=a==null?void 0:a.totalData)==null?void 0:W.tax)!=null?k:0).toFixed(2)]})}),l(d,{sm:"2",className:"d-flex align-items-center border-primary",children:i("div",{children:["Shipping Total: $",parseFloat((P=(L=a==null?void 0:a.totalData)==null?void 0:L.shipping)!=null?P:0).toFixed(2)]})}),l(d,{sm:"2",className:"d-flex justify-content-center",children:l(E,{color:"primary",disabled:s,children:s?"Searching":"Create CSV Export#"})})]})})},_=()=>{var c,m;const t=Number(Math.ceil(a.total/10));return l(q,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:((c=a==null?void 0:a.params)==null?void 0:c.page)!==0?((m=a==null?void 0:a.params)==null?void 0:m.page)-1:0,onPageChange:f=>e(U({page:f.selected+1})),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})};return l("div",{className:"app-user-list",children:i(g.exports.Fragment,{children:[i(j,{className:"p-2",children:[i(F,{className:"mb-1",children:[l(d,{sm:"2",children:l(H,{placeholder:"Search for 1",value:n==null?void 0:n.search_for_first,onChange:t=>{var c;return o({search_for_first:(c=t==null?void 0:t.target)==null?void 0:c.value})}})}),l(d,{sm:"2",children:l(h,{placeholder:"Search in",options:a==null?void 0:a.operatorOptions,value:(p=a==null?void 0:a.operatorOptions)==null?void 0:p.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.operator_first)),onChange:t=>o({operator_first:t==null?void 0:t.value})})}),l(d,{sm:"2",children:l(h,{placeholder:"Search by",options:a==null?void 0:a.searchOptions,value:(x=a==null?void 0:a.searchOptions)==null?void 0:x.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.search_in_first)),onChange:t=>o({search_in_first:t==null?void 0:t.value})})}),l(d,{sm:"2",children:l(H,{placeholder:"Search for 2",value:n==null?void 0:n.search_for_second,onChange:t=>{var c;return o({search_for_second:(c=t==null?void 0:t.target)==null?void 0:c.value})}})}),l(d,{sm:"2",children:l(h,{placeholder:"Search in",options:a==null?void 0:a.operatorOptions,value:(b=a==null?void 0:a.operatorOptions)==null?void 0:b.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.operator_second)),onChange:t=>o({operator_second:t==null?void 0:t.value})})}),l(d,{sm:"2",children:l(h,{placeholder:"Search by",options:a==null?void 0:a.searchOptions,value:(C=a==null?void 0:a.searchOptions)==null?void 0:C.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.search_in_second)),onChange:t=>o({search_in_second:t==null?void 0:t.value})})})]}),i(F,{children:[l(d,{sm:"2",children:l(A,{className:"form-control",id:"date",placeholder:"Start Date",value:(S=n==null?void 0:n.start_date)!=null?S:null,options:{dateFormat:"d-m-Y"},onChange:t=>o({start_date:t[0]})})}),l(d,{sm:"2",children:l(A,{className:"form-control",id:"date",placeholder:"End Date",value:(N=n==null?void 0:n.end_date)!=null?N:null,options:{dateFormat:"d-m-Y"},onChange:t=>o({end_date:t[0]})})}),l(d,{sm:"3",children:l(h,{placeholder:"Filter By Status",isMulti:!0,options:a==null?void 0:a.statusOptions,value:(O=a==null?void 0:a.statusOptions)==null?void 0:O.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.status)),onChange:t=>o({status:t==null?void 0:t.map(c=>c==null?void 0:c.value)})})}),l(d,{sm:"3",children:l(h,{placeholder:"Filter By Store",isMulti:!0,options:a==null?void 0:a.storeOptions,value:(y=a==null?void 0:a.storeOptions)==null?void 0:y.find(t=>(t==null?void 0:t.value)==(n==null?void 0:n.store)),onChange:t=>o({store:t==null?void 0:t.map(c=>c==null?void 0:c.value)})})}),l(d,{sm:"2",className:"d-flex justify-content-center",children:l(E,{color:"primary",onClick:u,disabled:s,children:s?"Searching":"Search"})})]})]}),l(j,{className:"overflow-hidden",children:l("div",{className:"react-dataTable",children:l(X,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:K,sortIcon:l(J,{}),className:"react-dataTable",paginationComponent:_,data:a.data,subHeaderComponent:l(v,{})})})})]})})};export{oe as default};