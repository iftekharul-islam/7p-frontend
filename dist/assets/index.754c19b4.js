import{k as G,r as u,a as K,f as n,S as V,j as s,T as X,W as t,Y as g,Z as c,a1 as j,H as A,L as M,bw as i,fp as m,fo as aa,fq as sa}from"./index.b5767533.js";/* empty css                  */import{a as na}from"./App.bf73fcbb.js";import{h as ra}from"./moment.4d75c86c.js";import{R as ca}from"./RejectModal.a91146b6.js";import{S as da}from"./ShippingPanel.443e32e2.js";import"./react-select.esm.97e349dc.js";import"./emotion-memoize.esm.06f0e458.js";import"./plus-circle.f10847d8.js";const Na=()=>{var B;const k=na(),Y=G(),[x,C]=u.exports.useState(!1),{WAPData:_,searchParams:b}=K(a=>a.WAP),{bin:p,order:r,item_options:$,thumbs:f}=_,[N,S]=u.exports.useState([]),[I,H]=u.exports.useState(!1),[q,F]=u.exports.useState(null),w=()=>H(!I),U=(a,d)=>{a.target.checked?S([...N,d]):S(N.filter(h=>h!==d))};u.exports.useEffect(()=>{var d,h;const a=(h=(d=r==null?void 0:r.items)==null?void 0:d.filter(l=>(l==null?void 0:l.item_status)=="wap"&&(l==null?void 0:l.batch)))==null?void 0:h.map(l=>l==null?void 0:l.id);S(a)},[r]),u.exports.useEffect(()=>{_!=null&&_.order||Y("/wap")},[_]);const e=async(a,d,h)=>{a.preventDefault(),C(!0),await k(m({[h]:d})),C(!1)},z=a=>{k(aa(a))},J=(a,d,h)=>{var l;w(),F({item_id:a,bin_id:d,origin:h,s:(l=document.getElementById("s"))==null?void 0:l.checked})},Q=(a,d,h)=>{a.preventDefault(),k(sa({item_id:d,bin_id:h}))};return n(u.exports.Fragment,{children:[n(V,{children:[s(X,{children:s("h4",{className:"card-title",children:"WAP"})}),n(t,{children:[n(g,{className:"mb-1",children:[s(c,{md:"7"}),s(c,{md:"2",children:s(j,{type:"text",name:"order_id",placeholder:"Scan Label",value:b==null?void 0:b.order_id,onChange:a=>{var d;return z({order_id:(d=a==null?void 0:a.target)==null?void 0:d.value})}})}),s(c,{md:"2",children:s(A,{color:"primary",onClick:a=>e(a,b==null?void 0:b.order_id,"order_id"),disabled:x,children:x?"Please Wait...":"Open Bin"})})]}),s(g,{children:n(g,{children:[s(c,{sm:"2"}),s(c,{sm:"8",children:s(da,{data:_,selected:N,origin:"WAP"})}),s(c,{sm:"2"})]})}),r?n("div",{children:[n(g,{children:[n(c,{md:"3",className:"p-1",children:["BIN ",n("b",{children:["#",p==null?void 0:p.name]})]}),n(c,{md:"7",className:"p-1",children:["Order"," ",n("b",{children:["#",s(M,{to:`/customer-order-edit/${r==null?void 0:r.id}`,children:r==null?void 0:r.short_order})]})]}),s(c,{md:"2",className:"p-1",children:n("small",{children:["Order Date: ",ra(r==null?void 0:r.order_date).format("YYYY-MM-DD")]})})]}),r!=null&&r.items?(B=r==null?void 0:r.items)==null?void 0:B.map((a,d)=>{var h,l,D,y,W,E,O,v,T,L,P;return n(g,{className:"border rounded mt-1",children:[s(c,{md:"8",className:"p-1",children:s("a",{href:a==null?void 0:a.item_url,target:"_blank",children:a==null?void 0:a.item_description})}),s(c,{md:"2",className:"p-1",children:(a==null?void 0:a.item_status)=="wap"&&s(M,{onClick:o=>Q(o,a==null?void 0:a.id,p==null?void 0:p.id),className:"btn btn-primary btn-sm",children:"Reprint WAP Label"})}),s(c,{md:"2",className:"p-1",children:(a==null?void 0:a.item_status)=="wap"&&(a==null?void 0:a.batch)?n("span",{className:"d-flex",children:[s(A,{color:"danger",size:"sm",onClick:()=>J(a==null?void 0:a.id,p==null?void 0:p.id,"WP"),children:"Reject from WAP"}),s(j,{type:"checkbox",name:"s",checked:N.includes(a==null?void 0:a.id),defaultChecked:!0,onChange:o=>U(o,a==null?void 0:a.id)})]}):(a==null?void 0:a.item_status)=="rejected"?n("strong",{children:["REJECTED ",(h=a==null?void 0:a.rejections)==null?void 0:h.lenght," TIMES"]}):s("strong",{children:a==null?void 0:a.item_status})}),s(c,{md:"12",className:"p-1",children:(a==null?void 0:a.item_status)=="wap"&&(a==null?void 0:a.wap_item)?n("small",{children:["Added to Bin ",(l=a==null?void 0:a.wap_item)==null?void 0:l.created_at]}):(a==null?void 0:a.item_status)=="wap"?s("strong",{children:"WAP ITEM NOT FOUND"}):s("hr",{})}),s(c,{md:"3",className:"p-1",children:s("a",{href:a==null?void 0:a.item_url,target:"_blank",children:s("img",{src:a==null?void 0:a.item_thumb,height:"200"})})}),n(c,{md:"6",className:"p-1",children:[a==null?void 0:a.child_sku,s("br",{}),"Item: ",a==null?void 0:a.id,s("br",{}),(a==null?void 0:a.item_quantity)>1&&n("strong",{children:["QTY: ",a==null?void 0:a.item_quantity]}),s("ul",{children:s("div",{dangerouslySetInnerHTML:{__html:$[a==null?void 0:a.id]}})})]}),s(c,{md:"3",className:"p-1",children:(a==null?void 0:a.item_status)=="wap"&&((D=f[a==null?void 0:a.id])==null?void 0:D.length)>0?s("img",{src:f[a==null?void 0:a.id][0],width:f[a==null?void 0:a.id][1],height:f[a==null?void 0:a.id][2]}):(a==null?void 0:a.item_status)=="production"&&(a==null?void 0:a.batch_number)!="0"?n("span",{children:[n("a",{className:"link-info",href:`/batch-list/${a==null?void 0:a.batch_number}`,target:"_blank",children:["Batch ",a==null?void 0:a.batch_number]}),(a==null?void 0:a.batch)&&((y=a==null?void 0:a.batch)==null?void 0:y.station)&&n("span",{children:[(E=(W=a==null?void 0:a.batch)==null?void 0:W.station)==null?void 0:E.station_description,s("br",{})]}),(a==null?void 0:a.batch)&&s("span",{children:(O=a==null?void 0:a.batch)==null?void 0:O.change_date})]}):(a==null?void 0:a.item_status)=="production"&&(a==null?void 0:a.batch_number)=="0"?"Unbatched":(a==null?void 0:a.item_status)=="rejected"?n("span",{children:[n("a",{href:`/batch-list/${a==null?void 0:a.batch_number}`,target:"_blank",children:["Batch ",a==null?void 0:a.batch_number]}),((v=a==null?void 0:a.rejections)==null?void 0:v.length)>0&&((T=a==null?void 0:a.rejections)==null?void 0:T.map((o,Z)=>{var R;return n("span",{children:[s("br",{}),n("small",{children:["Rejected ",o==null?void 0:o.created_at,s("br",{}),(R=o==null?void 0:o.rejection_reason_info)==null?void 0:R.rejection_message]})]},Z)}))]}):(a==null?void 0:a.item_status)=="back order"?n("a",{href:`/batch-list/${a==null?void 0:a.batch_number}`,target:"_blank",children:["Batch ",a==null?void 0:a.batch_number]}):(a==null?void 0:a.item_status)=="shipped"?a!=null&&a.shipInfo?n("div",{children:[(L=a==null?void 0:a.shipInfo)==null?void 0:L.mail_class,s("br",{}),(P=a==null?void 0:a.shipInfo)==null?void 0:P.shipping_id]}):"SHIPMENT NOT FOUND":""})]},d)}):"No Items in Bin."]}):s(g,{children:s(c,{md:"12",children:s("h4",{className:"text-center",children:x?n("span",{children:[s(i,{size:"sm"}),"Data Loading"]}):"Bin Empty"})})})]})]}),s(ca,{isOpen:I,toggle:w,data:q})]})};export{Na as default};
