import{k as ue,r as m,a as _e,w as fe,ea as J,eb as me,ec as ge,f as o,Q as P,X as b,j as a,Y as r,a0 as ee,G as ae,V as be,L as S,bn as he,ed as pe,ee as ve,ef as ye,eg as xe}from"./index.11c029ad.js";/* empty css                  */import{a as ke}from"./App.ab4c8e60.js";import{h as ne}from"./moment.4d75c86c.js";import{F as te}from"./index.769371c9.js";import{R as Se}from"./react-paginate.140bbefd.js";import{S as C}from"./react-select.esm.3ffa65a1.js";import{R as Ce}from"./RejectModal.25d75230.js";import"./emotion-memoize.esm.06f0e458.js";const Ae=()=>{var j,I,T,A,D,F,q,B,E;const _=ke(),L=ue(),[O,ce]=m.exports.useState(!1),[re,le]=m.exports.useState(null),R=()=>ce(!O),[w,$]=m.exports.useState(!1),s=_e(e=>e.shipmentLists),{data:g,searchParams:l,params:i}=s;fe(),m.exports.useEffect(()=>{N()},[]);const N=async()=>{$(!0),await _(J()),$(!1)},f=e=>{_(pe(e))},se=e=>{_(ve(e))},oe=async(e,c)=>{var h,p,v,y,x;const k=e==null?void 0:e.value;let u={};switch(k){case"reprint":u={unique_order_id:c==null?void 0:c.unique_order_id,search_for_first:c==null?void 0:c.shipping_id,search_in_first:"tracking_number"},await _(J(u));break;case"returned":if(u={tracking_number:c==null?void 0:c.tracking_number},confirm("Are you sure you want to mark this package returned by carrier?")){const d=await _(xe(u));((h=d==null?void 0:d.payload)==null?void 0:h.status)==201&&L("/customer-order-edit/"+((v=(p=d==null?void 0:d.payload)==null?void 0:p.data)==null?void 0:v.order_id))}break;case"void":if(u={ship_id:(y=c==null?void 0:c.id)!=null?y:null,order_number:c==null?void 0:c.order_number},confirm("Are you sure you want to void this shipment with the carrier?")){const d=await _(ye(u));((x=d==null?void 0:d.payload)==null?void 0:x.status)==201&&L("/customer-order-edit/"+(u==null?void 0:u.order_number))}}};m.exports.useEffect(()=>{_(me()),_(ge())},[]),m.exports.useEffect(()=>{N()},[i==null?void 0:i.page]);const de=e=>{if(e)return e.substr(0,3)==="927"||e[0]==="8"?`https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${e}`:e[0]==="L"||e[0]==="U"?`https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=${e}`:e.substr(0,3)==="937"?`http://webtrack.dhlglobalmail.com/?trackingnumber=${e}`:e.substr(0,2)==="94"||e.substr(0,3)==="927"?`https://tools.usps.com/go/TrackConfirmAction?tLabels=${e}`:e.substr(0,1)==="2"||e.substr(0,1)==="7"?`http://www.fedex.com/Tracking?tracknumbers=${e}`:e.substr(0,2)==="1Z"?`http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${e}`:e.substr(0,2)==="42"?`https://webtrack.dhlecs.com/?trackingnumber=${e}`:"#"};return o(m.exports.Fragment,{children:[o(P,{className:"p-2",children:[o(b,{className:"mb-1",children:[a(r,{sm:"3",children:a(ee,{placeholder:"Search for 1",value:l==null?void 0:l.search_for_first,onChange:e=>{var c;return f({search_for_first:(c=e==null?void 0:e.target)==null?void 0:c.value})}})}),a(r,{sm:"3",children:a(C,{className:"select-select",classNamePrefix:"select",placeholder:"Search in",options:s==null?void 0:s.searchInOptions,value:(j=s==null?void 0:s.searchInOptions)==null?void 0:j.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.search_in_first)),onChange:e=>f({search_in_first:e==null?void 0:e.value})})}),a(r,{sm:"3",children:a(ee,{placeholder:"Search for 2",value:l==null?void 0:l.search_for_second,onChange:e=>{var c;return f({search_for_second:(c=e==null?void 0:e.target)==null?void 0:c.value})}})}),a(r,{sm:"3",children:a(C,{className:"select-select",classNamePrefix:"select",placeholder:"Search in",options:s==null?void 0:s.searchInOptions,value:(I=s==null?void 0:s.searchInOptions)==null?void 0:I.find(e=>(e==null?void 0:e.value)==(l==null?void 0:l.search_in_second)),onChange:e=>f({search_in_second:e==null?void 0:e.value})})})]}),o(b,{children:[a(r,{sm:"3",children:a(te,{className:"form-control",id:"date",placeholder:"Start Date",value:(T=l==null?void 0:l.start_date)!=null?T:null,options:{dateFormat:"d-m-Y"},onChange:e=>f({start_date:e[0]})})}),a(r,{sm:"3",children:a(te,{className:"form-control",id:"date",placeholder:"End Date",value:(A=l==null?void 0:l.end_date)!=null?A:null,options:{dateFormat:"d-m-Y"},onChange:e=>f({end_date:e[0]})})}),a(r,{sm:"3",children:a(C,{className:"select-select",classNamePrefix:"select",placeholder:"Filter By Store",isMulti:!0,options:s==null?void 0:s.storeOptions,value:(D=s==null?void 0:s.storeOptions)==null?void 0:D.filter(e=>{var c;return(c=l==null?void 0:l.store_id)==null?void 0:c.includes(e==null?void 0:e.value)}),onChange:e=>f({store_id:e==null?void 0:e.map(c=>c==null?void 0:c.value)})})}),a(r,{sm:"3",className:"d-flex justify-content-center",children:a(ae,{color:"primary",onClick:N,disabled:w,children:w?"Searching":"Search"})})]})]}),a(P,{children:a(be,{children:((q=(F=g==null?void 0:g.ships)==null?void 0:F.data)==null?void 0:q.length)>0?o("div",{children:[o(b,{className:"p-1 border",children:[a(r,{md:"2"}),a(r,{md:"1",children:a("b",{children:" Order "})}),a(r,{md:"3",children:a("b",{children:" Shipment "})}),a(r,{md:"2",children:a("b",{children:" Ship Address"})}),a(r,{md:"1",children:a("b",{children:" Item"})}),a(r,{md:"2",children:a("b",{children:"Product Information"})}),a(r,{md:"1",children:a("b",{children:"Raw"})})]}),(E=(B=g==null?void 0:g.ships)==null?void 0:B.data)==null?void 0:E.map((e,c)=>{var k,u,h,p,v,y,x,d,U,Y,z,M,Q,V,W,G;if(((k=e==null?void 0:e.items)==null?void 0:k.length)>0){const n=(u=e==null?void 0:e.items[0])==null?void 0:u.order;return o(b,{children:[a(r,{md:"2",className:"p-1 border",children:a(C,{className:"select-select",classNamePrefix:"select",name:"rejection_reason",options:[{label:"Reprint Label",value:"reprint"},{label:"Package Returned",value:"returned"},{label:"Void Shipment",value:"void"}],onChange:t=>oe(t,e)})}),a(r,{md:"1",className:"p-1 border d-flex align-items-center",children:o("div",{children:[a(S,{to:`/customer-order-edit/${n==null?void 0:n.id}`,target:"_blank",className:"text-danger",children:n==null?void 0:n.short_order}),a("br",{}),e==null?void 0:e.unique_order_id,a("br",{}),ne(e==null?void 0:e.transaction_datetime).format("dd-mm-yy"),a("br",{}),ne(e==null?void 0:e.transaction_datetime).format("hh-mm")]})}),a(r,{md:"3",className:"p-1 border d-flex align-items-center",children:o("div",{children:[a(S,{to:de(e==null?void 0:e.shipping_id),target:"_blank",className:"text-danger",children:e==null?void 0:e.shipping_id}),a("br",{}),e==null?void 0:e.mail_class,(e==null?void 0:e.tracking_type)&&o("div",{children:["Tracking Type: ",e==null?void 0:e.tracking_type]}),(e==null?void 0:e.user)&&o("div",{children:["Shipped By: ",(h=e==null?void 0:e.user)==null?void 0:h.username]})]})}),a(r,{md:"2",className:"p-1 border d-flex align-items-center",children:o("div",{children:[(p=n==null?void 0:n.customer)==null?void 0:p.ship_full_name,a("br",{}),((v=n==null?void 0:n.customer)==null?void 0:v.ship_company_name)&&a("div",{children:(y=n==null?void 0:n.customer)==null?void 0:y.ship_company_name}),(x=n==null?void 0:n.customer)==null?void 0:x.ship_address_1,a("br",{}),((d=n==null?void 0:n.customer)==null?void 0:d.ship_address_2)&&a("div",{children:(U=n==null?void 0:n.customer)==null?void 0:U.ship_address_2}),(Y=n==null?void 0:n.customer)==null?void 0:Y.ship_city,","," ",(z=n==null?void 0:n.customer)==null?void 0:z.ship_state," ",(M=n==null?void 0:n.customer)==null?void 0:M.ship_zip,a("br",{}),((V=(Q=n==null?void 0:n.customer)==null?void 0:Q.ship_country)==null?void 0:V.substr(0,2))!="US"&&a("div",{children:(W=n==null?void 0:n.customer)==null?void 0:W.ship_country})]})}),a(r,{md:"4",children:(G=e==null?void 0:e.items)==null?void 0:G.map((t,ie)=>{var K,X,Z,H;return o(b,{className:"py-1 border",children:[o(r,{sm:"4",children:["Item: ",t==null?void 0:t.id,a("br",{}),"QTY: ",t==null?void 0:t.item_quantity,a("br",{}),((K=t==null?void 0:t.batch)==null?void 0:K.batch_number)&&o("div",{children:["Batch:"," ",a(S,{to:`/batch-list/${(X=t==null?void 0:t.batch)==null?void 0:X.batch_number}`,target:"_blank",className:"text-danger",children:(Z=t==null?void 0:t.batch)==null?void 0:Z.batch_number})]})]}),a(r,{sm:"3",children:a("img",{src:t==null?void 0:t.item_thumb,width:70,height:70})}),o(r,{sm:"5",children:[t==null?void 0:t.item_description,a("br",{}),"SKU:"," ",a(S,{to:`/sku-product?search_for=${t==null?void 0:t.item_code}&search_in=product_model`,target:"_blank",className:"text-danger",children:t==null?void 0:t.item_code}),a("br",{}),((H=t==null?void 0:t.batch)==null?void 0:H.batch_number)&&a(ae,{color:"danger",size:"sm",onClick:()=>{le({item_id:t==null?void 0:t.id,origin:"SL"}),R()},children:"Reject"})]})]},ie)})})]},c)}}),a(Se,{previousLabel:"",nextLabel:"",pageCount:(i==null?void 0:i.count)||1,activeClassName:"active",forcePage:(i==null?void 0:i.page)!==0?(i==null?void 0:i.page)-1:0,onPageChange:e=>se({page:e.selected+1}),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})]}):a(b,{children:a(r,{md:"12",children:a("h4",{className:"text-center",children:w?o("span",{children:[a(he,{size:"sm"}),"Data Loading"]}):"No Shipments Found!"})})})})}),a(Ce,{isOpen:O,toggle:R,data:re})]})};export{Ae as default};
