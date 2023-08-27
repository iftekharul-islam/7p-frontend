import{k as lr,r as g,a as sr,w as cr,f as l,j as n,Q as or,V as ar,X as i,Y as s,a0 as V,dd as W,G as f,I as hr,dg as ur,dh as ir,de as tr,di as pr,dj as _r}from"./index.2802cfd2.js";import{R as gr}from"./RejectModal.31cb68d4.js";import{S as fr}from"./ShippingPanel.81ce5027.js";import{a as br}from"./App.68a9a764.js";import"./react-select.esm.04aba8d6.js";import"./emotion-memoize.esm.06f0e458.js";import"./plus-circle.ccb9b7bc.js";const Nr=()=>{var O,Q,B,$,q,L,T,A,M,R,E,Y,z,F;const t=br(),C=lr(),[w,b]=g.exports.useState(!0),{orderData:u,batchData:d,searchParams:h}=sr(r=>r==null?void 0:r.qualityControls),{id:S,batch:y,batch_number:k,order:o,items:c,item_options:G,dest:X,thumbs:I,label:yr,user:p}=u!=null?u:{},[J,K]=g.exports.useState(null),[N,U]=g.exports.useState(!1),j=()=>U(!N),{state:v}=cr(),_=async()=>{var r;if(b(!0),h){const e=await t(ur(v!=null?v:null));((r=e==null?void 0:e.payload)==null?void 0:r.status)==206&&Z()}else C("/quality-control");b(!1)},Z=async()=>{var r;if(b(!0),h){const e=await t(ir());((r=e==null?void 0:e.payload)==null?void 0:r.status)==206&&_()}else C("/quality-control");b(!1)};g.exports.useEffect(()=>{_()},[]);const m=async()=>{const r=await t(tr());r!=null&&r.payload&&_()},D=async(r,e)=>{r.preventDefault(),K({item_id:e,id:S,origin:"QC"}),j()},rr=async()=>{const r={batch_number:y==null?void 0:y.batch_number,id:S,order_id:o==null?void 0:o.id,origin:"QC",count:c==null?void 0:c.length},e=await t(pr(r));e!=null&&e.payload&&_()};let x=0,nr="start";const dr=async(r,e)=>{r.preventDefault();const a=await _r({order_5p:e,id:d==null?void 0:d.id,batch_number:d==null?void 0:d.batch_number});a!=null&&a.payload&&_()};return l(g.exports.Fragment,{children:[n(or,{children:l(ar,{children:[l(i,{className:"mb-1",children:[n(s,{md:"2",children:n(V,{type:"text",placeholder:"Enter Batch",value:h==null?void 0:h.batch_number,onChange:r=>{var e;return t(W({batch_number:(e=r==null?void 0:r.target)==null?void 0:e.value}))}})}),n(s,{md:"2",children:n(V,{type:"text",placeholder:"Enter Batch",value:h==null?void 0:h.user_barcode,onChange:r=>{var e;return t(W({user_barcode:(e=r==null?void 0:r.target)==null?void 0:e.value}))}})}),n(s,{md:"2",children:n(f,{color:"primary",onClick:m,disabled:w,children:w?"Please Wait...":"Open Batch"})})]}),d?l(i,{className:"mt-2",children:[n(s,{md:"12",children:l("h3",{children:["Batch"," ",n("a",{href:`/batch-list/${d==null?void 0:d.batch_number}`,children:(O=d==null?void 0:d.batch)==null?void 0:O.batch_number})," ","-",((Q=d==null?void 0:d.batch)==null?void 0:Q.status)!="active"&&n("span",{style:{color:"red"},children:(B=d==null?void 0:d.batch)==null?void 0:B.status})]})}),l(s,{md:"6",children:[l("strong",{children:["QC in Progress by"," ",(L=(q=($=d==null?void 0:d.batch)==null?void 0:$.scanned_in)==null?void 0:q.in_user)==null?void 0:L.username]})," ","- ",(A=(T=d==null?void 0:d.batch)==null?void 0:T.scanned_in)==null?void 0:A.in_date]}),n(s,{md:"6",children:((M=d==null?void 0:d.batch)==null?void 0:M.prev_station)&&l("span",{children:[(E=(R=d==null?void 0:d.batch)==null?void 0:R.prev_station)==null?void 0:E.station_description," -"," ",(Y=d==null?void 0:d.batch)==null?void 0:Y.change_date]})}),n("hr",{}),(F=(z=d==null?void 0:d.batch)==null?void 0:z.items)==null?void 0:F.map(r=>{var H,P;let e="",a="";return(o!==(r==null?void 0:r.order_5p)||nr==="start")&&x<(r==null?void 0:r.count)?(r.count>1?(e=`rowspan=${r.count} style="vertical-align: middle"`,a=`QC ${r.count} Items`):(e="",a="QC Item"),x=0):x++,l(i,{className:"batch-row",children:[n(s,{...e&&{xs:"auto"},children:(r==null?void 0:r.order)&&l("div",{children:["Order"," ",n("a",{href:`ustomer-order-edit/${(H=r==null?void 0:r.order)==null?void 0:H.id}`,target:"_blank",rel:"noopener noreferrer",children:(P=r==null?void 0:r.order)==null?void 0:P.short_order})]})}),n(s,{children:(r==null?void 0:r.item_status)==="production"?l("div",{children:[n("br",{}),l("form",{action:url,method:"post",id:`order-form-${r.order_5p}`,children:[n("input",{type:"hidden",name:"batch_number",value:d.batch_number}),n(f,{onClick:er=>dr(er,r==null?void 0:r.order_5p),children:a})]})]}):r.item_status==="wap"?n("div",{children:l("strong",{children:["WAP Bin ",r.wap_item.bin.name]})}):r.item_status==="shipped"?n("div",{children:"Shipped"}):l("div",{children:[n("br",{}),r.item_status]})}),n(s,{children:(d==null?void 0:d.thumb)&&n("img",{src:d==null?void 0:d.thumb[0],height:"100"})}),n(s,{children:n("a",{href:r==null?void 0:r.item_url,target:"_blank",rel:"noopener noreferrer",children:n("img",{src:r==null?void 0:r.item_thumb,height:"100"})})}),n(s,{children:l("div",{children:[r==null?void 0:r.child_sku,n("br",{}),r==null?void 0:r.item_description,n("br",{}),(r==null?void 0:r.item_quantity)>1&&l("strong",{style:{fontSize:"125%"},children:["QTY: ",r==null?void 0:r.item_quantity]})]})}),n(s,{children:n("div",{dangerouslySetInnerHTML:{__html:d==null?void 0:d.options[r==null?void 0:r.id]}})})]},r.order_5p)})]}):l(hr,{children:[l(i,{className:"d-flex justify-content-between mb-2",children:[n(s,{md:"6",children:l("h2",{children:["Order:"," ",n("b",{children:n("a",{href:`/customer-order-edit/${o==null?void 0:o.id}`,target:"_blank",children:o==null?void 0:o.short_order})})]})}),n(s,{md:"6",className:"d-flex justify-content-end",children:l("h2",{children:["Batch:"," ",n("b",{children:n("a",{href:`/batch-list/${k}`,target:"_blank",children:k})})]})})]}),c==null?void 0:c.map((r,e)=>l(i,{className:"border rounded mb-2 p-2",children:[n(s,{md:"8",children:n("h4",{children:n("b",{children:n("a",{href:r==null?void 0:r.item_url,target:"_blank",children:r==null?void 0:r.item_description})})})}),n(s,{md:"2",className:"d-flex justify-content-center mb-1",children:n(f,{color:"primary",className:"mr-1",onClick:a=>D(a,r==null?void 0:r.id),children:"Reject Item"})}),n(s,{md:"2",className:"d-flex justify-content-center mb-1",children:n(f,{color:"primary",className:"mr-1",children:"Set first-class"})}),n("hr",{}),n(s,{md:"3",children:n("a",{href:r==null?void 0:r.item_url,target:"_blank",children:n("img",{src:r==null?void 0:r.item_thumb,height:"250",width:"250"})})}),l(s,{md:"6",children:[r==null?void 0:r.child_sku,n("br",{}),"Item: ",r==null?void 0:r.id,n("br",{}),(r==null?void 0:r.item_quantity)>1&&l("strong",{style:"font-size: 125%;",children:["QTY: ",r==null?void 0:r.item_quantity]}),n("br",{}),n("div",{className:"mx-2",children:n("div",{dangerouslySetInnerHTML:{__html:G[r==null?void 0:r.id]}})})]}),n(s,{md:"3",children:I[r==null?void 0:r.id]&&n("img",{src:I[r==null?void 0:r.id][0],width:"250",height:"250"})})]})),X=="ship"?l(i,{children:[n(s,{sm:"1"}),n(s,{sm:"8",children:n(fr,{data:u,origin:"QC",items:u==null?void 0:u.items})})]}):l(i,{children:[n(s,{md:"8"}),n(s,{md:"4",children:n(f,{color:"primary",className:"mr-1",onClick:rr,children:(c==null?void 0:c.length)>1?(c==null?void 0:c.length)+" Lines Approved by "+(p==null?void 0:p.username):"Item Approved by "+(p==null?void 0:p.username)})})]})]})]})}),n(gr,{isOpen:N,toggle:j,data:J})]})};export{Nr as default};