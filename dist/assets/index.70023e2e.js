import{aG as z,k as G,r as _,a as H,eR as J,j as a,f as d,Q as V,S as X,V as K,X as o,Y as n,a0 as Z,G as M,L as j,bn as D,eQ as P}from"./index.9d6077eb.js";/* empty css                  */import{a as W}from"./App.6b53c8d0.js";import{h as A}from"./moment.4d75c86c.js";const rr=()=>{var g,f,N,w,k,I;const{id:F}=z(),p=W();G();const[b,h]=_.exports.useState(!1),{WAPData:s,searchParams:u}=H(r=>r.WAP);_.exports.useEffect(async()=>{h(!0),await p(J(F)),h(!1)},[]);const Q=async()=>{var l;h(!0);const r=await p(getShowData());(l=r==null?void 0:r.payload)!=null&&l.status,h(!1)},U=r=>{p(P(r))};return a(_.exports.Fragment,{children:d(V,{children:[a(X,{children:a("h4",{className:"card-title",children:"WAP"})}),d(K,{children:[d(o,{className:"mb-1",children:[a(n,{md:"7"}),a(n,{md:"2",children:a(Z,{type:"text",name:"order_id",placeholder:"Scan Label",value:u==null?void 0:u.store_id,onChange:r=>{var l;return U({order_id:(l=r==null?void 0:r.target)==null?void 0:l.value})}})}),a(n,{md:"2",children:a(M,{color:"primary",onClick:Q,disabled:b,children:b?"Please Wait...":"Open Bin"})})]}),s!=null&&s.order?d("div",{children:[d(o,{children:[d(n,{md:"3",className:"p-1",children:["BIN ",d("b",{children:["#",(g=s==null?void 0:s.bin)==null?void 0:g.name]})]}),d(n,{md:"7",className:"p-1",children:["Order"," ",d("b",{children:["#",a(j,{to:`/customer-order-edit/${(f=s==null?void 0:s.order)==null?void 0:f.id}`,children:(N=s==null?void 0:s.order)==null?void 0:N.short_order})]})]}),a(n,{md:"2",className:"p-1",children:d("small",{children:["Order Date:"," ",A((w=s==null?void 0:s.order)==null?void 0:w.order_date).format("YYYY-MM-DD")]})})]}),(I=(k=s==null?void 0:s.order)==null?void 0:k.items)==null?void 0:I.map((r,l)=>{var x,B,C,S,y,O,E,T,$,L,R,Y;return d(o,{className:"border rounded mt-1",children:[a(n,{md:"8",className:"p-1",children:a("a",{href:r==null?void 0:r.item_url,children:r==null?void 0:r.item_description})}),a(n,{md:"2",className:"p-1",children:(r==null?void 0:r.item_status)=="wap"&&a(j,{to:`/wap/reprint?bin_id=${(x=s==null?void 0:s.bin)==null?void 0:x.id}&item_id=${r==null?void 0:r.id}`,className:"btn btn-default btn-sm",children:"Reprint WAP Label"})}),a(n,{md:"2",className:"p-1",children:(r==null?void 0:r.item_status)=="wap"&&(r==null?void 0:r.batch)?a(M,{color:"danger",size:"sm",onClick:()=>{var c;return rejectItem(r==null?void 0:r.id,(c=s==null?void 0:s.bin)==null?void 0:c.id,"WP")},children:"Reject from WAP"}):(r==null?void 0:r.item_status)=="rejected"?d("strong",{children:["REJECTED ",(B=r==null?void 0:r.rejections)==null?void 0:B.lenght," TIMES"]}):a("strong",{children:r==null?void 0:r.item_status})}),a(n,{md:"12",className:"p-1",children:(r==null?void 0:r.item_status)=="wap"&&(r==null?void 0:r.wap_item)?d("small",{children:["Added to Bin ",(C=r==null?void 0:r.wap_item)==null?void 0:C.created_at]}):(r==null?void 0:r.item_status)=="wap"?a("strong",{children:"WAP ITEM NOT FOUND"}):a("hr",{})}),a(n,{md:"3",className:"p-1",children:a("a",{href:r==null?void 0:r.item_url,target:"_blank",children:a("img",{src:r==null?void 0:r.item_thumb,height:"200"})})}),d(n,{md:"6",className:"p-1",children:[r==null?void 0:r.child_sku,a("br",{}),"Item: ",r==null?void 0:r.id,a("br",{}),(r==null?void 0:r.item_quantity)>1&&d("strong",{children:["QTY: ",r==null?void 0:r.item_quantity]}),a("ul",{children:s==null?void 0:s.item_options[r==null?void 0:r.id]})]}),a(n,{md:"3",className:"p-1",children:(r==null?void 0:r.item_status)=="wap"&&((S=s==null?void 0:s.thumbs[r==null?void 0:r.id])==null?void 0:S.length)>0?a("img",{src:s==null?void 0:s.thumbs[r==null?void 0:r.id][0],width:s==null?void 0:s.thumbs[r==null?void 0:r.id][1],height:s==null?void 0:s.thumbs[r==null?void 0:r.id][2]}):(r==null?void 0:r.item_status)=="production"&&(r==null?void 0:r.batch_number)!="0"?d("span",{children:[d("a",{href:`/batch-list/${r==null?void 0:r.batch_number}`,target:"_blank",children:["Batch ",r==null?void 0:r.batch_number]}),(r==null?void 0:r.batch)&&((y=r==null?void 0:r.batch)==null?void 0:y.station)&&d("span",{children:[(E=(O=r==null?void 0:r.batch)==null?void 0:O.station)==null?void 0:E.station_description,a("br",{})]}),(r==null?void 0:r.batch)&&a("span",{children:(T=r==null?void 0:r.batch)==null?void 0:T.change_date})]}):(r==null?void 0:r.item_status)=="production"&&(r==null?void 0:r.batch_number)=="0"?"Unbatched":(r==null?void 0:r.item_status)=="rejected"?d("span",{children:[d("a",{href:`/batch-list/${r==null?void 0:r.batch_number}`,target:"_blank",children:["Batch ",r==null?void 0:r.batch_number]}),(($=r==null?void 0:r.rejections)==null?void 0:$.length)>0&&((L=r==null?void 0:r.rejections)==null?void 0:L.map((c,q)=>{var v;return d("span",{children:[a("br",{}),d("small",{children:["Rejected ",c==null?void 0:c.created_at,a("br",{}),(v=c==null?void 0:c.rejection_reason_info)==null?void 0:v.rejection_message]})]},q)}))]}):(r==null?void 0:r.item_status)=="back order"?d("a",{href:`/batch-list/${r==null?void 0:r.batch_number}`,target:"_blank",children:["Batch ",r==null?void 0:r.batch_number]}):(r==null?void 0:r.item_status)=="shipped"?r!=null&&r.shipInfo?d("div",{children:[(R=r==null?void 0:r.shipInfo)==null?void 0:R.mail_class,a("br",{}),(Y=r==null?void 0:r.shipInfo)==null?void 0:Y.shipping_id]}):"SHIPMENT NOT FOUND":""})]},l)})]}):a(o,{children:a(n,{md:"12",children:a("h4",{className:"text-center",children:b?d("span",{children:[a(D,{size:"sm"}),"Data Loading"]}):"No Data Found"})})})]})]})})};export{rr as default};
