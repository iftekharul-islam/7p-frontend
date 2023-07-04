import{r as S,f as d,aA as K,j as e,aB as w,aC as ee,aD as re,G as R,Q as W,S as Z,T as ne,V as T,aE as de,a as $,Y as h,Z as c,a1 as X,L as ce,aF as le,aG as te,aH as ae}from"./index.9c541b2f.js";import{h as oe}from"./moment.4d75c86c.js";import{a as D}from"./App.797bd1cf.js";const se=({isOpen:r,toggle:s,handleUpload:u,rejectData:t,setRejectData:a})=>{const[x,l]=S.exports.useState(1),[i,p]=S.exports.useState(""),[n,m]=S.exports.useState("");return d(K,{isOpen:r,toggle:s,className:"modal-lg",children:[e(w,{toggle:s,children:"Reject Information"}),d(ee,{children:[e("h5",{children:"Inventory"}),d("div",{className:"btn-group","data-toggle":"buttons",children:[d("label",{className:"btn btn-default btn-lg",style:{width:"280px"},children:[e("span",{className:"glyphicon glyphicon-trash"}),e("input",{type:"radio",name:"scrap"})," Defective Item Produced"]}),d("label",{className:"btn btn-default btn-lg",style:{width:"280px"},children:[e("input",{type:"radio",name:"scrap"})," Nothing Produced"]})]}),e("hr",{}),d("div",{className:"btn-group","data-toggle":"buttons",children:[e("h5",{children:"Graphic"}),d("label",{className:"btn btn-default btn-lg",style:{width:"180px"},children:[e("span",{className:"glyphicon glyphicon-print"}),e("input",{type:"radio",name:"graphic_status"})," Print Again"]}),d("label",{className:"btn btn-default btn-lg",style:{width:"180px"},children:[e("span",{className:"glyphicon glyphicon-pencil"}),e("input",{type:"radio",name:"graphic_status"})," Edit Graphic"]}),d("label",{className:"btn btn-default btn-lg",style:{width:"205px"},children:[e("span",{className:"glyphicon glyphicon-envelope"}),e("input",{type:"radio",name:"graphic_status"})," Contact Customer"]})]}),e("hr",{}),d("div",{className:"form-group",id:"qty_group",children:["Quantity to Reject:"," ",e("input",{type:"number",id:"reject_qty",value:x,min:"1",onChange:o=>l(o.target.value)})]}),e("div",{className:"form-group",children:e("select",{id:"reason-to-reject",className:"form-control",value:i,onChange:o=>p(o.target.value),children:e("option",{value:"",children:"Select a reason to reject"})})}),e("div",{className:"form-group",children:e("textarea",{id:"message-to-reject",rows:2,className:"form-control",placeholder:"More Information",value:n,onChange:o=>m(o.target.value)})})]}),d(re,{children:[e(R,{color:"default",onClick:s,className:"btn-lg modal-close",children:"Close"}),e(R,{color:"danger",onClick:()=>{u()},className:"btn-lg",children:"Reject"})]})]})},ie=({show:r,handleClose:s,handleUpload:u})=>{const t=a=>{a.preventDefault(),u(a.target.elements.upload_file.files[0]),s()};return e(K,{isOpen:r,toggle:s,className:"modal-lg",children:d(W,{children:[e(Z,{closeButton:!0,children:e(ne,{children:"Upload a Graphic"})}),d(T,{children:[e("p",{children:"Upload a graphic to the Archive directory."}),d("form",{name:"track",onSubmit:t,method:"post",encType:"multipart/form-data",children:[e("input",{type:"hidden",name:"item_id",id:"upload_item_id"}),e("input",{type:"hidden",name:"batch_number",id:"upload_batch_number"}),e("input",{type:"file",name:"upload_file",className:"form-control"})]})]}),d(de,{children:[e(R,{className:"success",onClick:t,children:"Upload"}),e(R,{className:"secondary mx-1",onClick:s,children:"Close"})]})]})})},pe=()=>{var s,u,t,a,x,l,i,p,n,m,N,o,f,_,g,b,y,v,j,k,C,M,U,I,L,P,E,G,O,A,F,Q,Y,q,H,z,V,J;const{showData:r}=$(B=>B.batchList);return d(T,{children:[d(h,{className:"p-1 pt-0",children:[d(c,{md:"1",children:[e("b",{children:"**Route:"})," "]}),e(c,{md:"9",children:((s=r==null?void 0:r.batch)==null?void 0:s.route)&&e("span",{children:d("span",{children:[(t=(u=r==null?void 0:r.batch)==null?void 0:u.route)==null?void 0:t.batch_code,"/",(x=(a=r==null?void 0:r.batch)==null?void 0:a.route)==null?void 0:x.batch_route_name," => ",r==null?void 0:r.stations]})})}),e(c,{md:"2",children:(i=(l=r==null?void 0:r.batch)==null?void 0:l.route)!=null&&i.template?d("span",{children:[(m=(n=(p=r==null?void 0:r.batch)==null?void 0:p.route)==null?void 0:n.template)==null?void 0:m.template_name," Template"]}):e("span",{children:"No Template"})})]}),d(h,{className:"p-1 pt-0",children:[e(c,{md:"1",children:e("b",{children:"Created:"})}),e(c,{md:"3",children:(N=r==null?void 0:r.batch)==null?void 0:N.creation_date}),e(c,{md:"1",children:e("b",{children:"Last Scan:"})}),e(c,{md:"3",children:(o=r==null?void 0:r.last_scan)!=null&&o.date?((f=r==null?void 0:r.last_scan)==null?void 0:f.date)+" by "+((_=r==null?void 0:r.last_scan)==null?void 0:_.username):(g=r==null?void 0:r.batch)==null?void 0:g.change_date}),e(c,{md:"1",children:e("b",{children:"Station:"})}),e(c,{md:"3",children:(b=r==null?void 0:r.batch)!=null&&b.station?((v=(y=r==null?void 0:r.batch)==null?void 0:y.station)==null?void 0:v.station_name)+" => "+((k=(j=r==null?void 0:r.batch)==null?void 0:j.station)==null?void 0:k.station_description):"Station Not Found"})]}),d(h,{className:"p-1 pt-0",children:[e(c,{md:"1",children:e("b",{children:"Export:"})}),e(c,{md:"3",children:(C=r==null?void 0:r.batch)!=null&&C.export_date?((M=r==null?void 0:r.batch)==null?void 0:M.export_count)==1?d("span",{children:["Exported ",(U=r==null?void 0:r.batch)==null?void 0:U.export_count," time"," ",(I=r==null?void 0:r.batch)==null?void 0:I.export_date]}):d("span",{children:["Exported ",(L=r==null?void 0:r.batch)==null?void 0:L.export_count," times Last export"," ",(P=r==null?void 0:r.batch)==null?void 0:P.export_date]}):"Not Exported"}),e(c,{md:"4",children:((E=r==null?void 0:r.batch)==null?void 0:E.csv_found)!=0&&"CSV File Found"})]}),d(h,{className:"p-1 pt-0",children:[e(c,{md:"1",children:e("b",{children:"Summary:"})}),(G=r==null?void 0:r.batch)!=null&&G.summary_date?e(c,{md:"6",children:d(h,{children:[d(c,{md:"6",children:["Printed ",(O=r==null?void 0:r.batch)==null?void 0:O.summary_date]}),d(c,{md:"6",children:[(A=r==null?void 0:r.batch)==null?void 0:A.summary_count," printed - last by"," ",(Q=(F=r==null?void 0:r.batch)==null?void 0:F.summary_user)==null?void 0:Q.username]})]})}):e(c,{md:"6",children:"Not Printed"})]}),d(h,{className:"p-1 pt-0",children:[e(c,{md:"1",children:e("b",{children:"Graphic:"})}),e(c,{md:"3",children:(Y=r==null?void 0:r.batch)==null?void 0:Y.graphic_found}),((q=r==null?void 0:r.batch)==null?void 0:q.to_printer)!="0"&&e(c,{md:"4",children:d(h,{children:[e(c,{md:"3",children:e("b",{children:"Printed:"})}),d(c,{md:"9",children:[(H=r==null?void 0:r.batch)==null?void 0:H.to_printer," -"," ",(z=r==null?void 0:r.batch)==null?void 0:z.to_printer_date]})]})})]}),((V=r==null?void 0:r.related)==null?void 0:V.length)>0&&d(h,{className:"p-1 pt-0",children:[e(c,{md:"1",children:e("b",{children:"Related:"})}),e(c,{md:"3",children:(J=r==null?void 0:r.related)==null?void 0:J.map(B=>d("span",{children:[B," "]}))})]})]})},he=({batchNote:r,setBatchNote:s,onClick:u})=>{var a,x;const{showData:t}=$(l=>l.batchList);return d(T,{children:[d(h,{children:[e(c,{md:"2",className:"p-1 border",children:e("b",{children:"Note"})}),e(c,{md:"1",className:"p-1 border",children:e("b",{children:"Date"})}),e(c,{md:"2",className:"p-1 border",children:e("b",{children:"User"})}),e(c,{md:"1",className:"p-1 border",children:e("b",{children:"Station"})}),e(c,{md:"2",className:"p-1 border",children:e("b",{children:"Station"})}),e(c,{md:"2",className:"p-1 border",children:e("b",{children:"Scan In"})}),e(c,{md:"2",className:"p-1 border",children:e("b",{children:"Scan Out"})})]}),d(h,{children:[e(c,{md:"6",children:(a=t==null?void 0:t.notes)==null?void 0:a.map(l=>{var i,p;return e("span",{children:d(h,{className:"p-1",children:[e(c,{md:"4",children:l==null?void 0:l.note}),e(c,{md:"2",children:oe(l==null?void 0:l.created_at).format("DD MM YYYY")}),e(c,{md:"4",children:(i=l==null?void 0:l.user)==null?void 0:i.username}),e(c,{md:"2",children:(p=l==null?void 0:l.station)==null?void 0:p.station_name})]})})})}),e(c,{md:"6",children:(x=t==null?void 0:t.scans)==null?void 0:x.map(l=>{var i,p;return e("span",{children:d(h,{className:"p-1",children:[e(c,{md:"4",children:(i=l==null?void 0:l.station)==null?void 0:i.station_name}),d(c,{md:"4",children:[(p=l==null?void 0:l.in_user)==null?void 0:p.username," ",l==null?void 0:l.in_date]}),e(c,{md:"4",children:(l==null?void 0:l.out_user)&&l.out_user.username+" "+l.out_date})]})})})})]}),d(h,{children:[e(c,{md:"4",children:e(X,{type:"textarea",name:"note",id:"note",placeholder:"Enter Note",value:r,onChange:l=>{s(l.target.value)}})}),e(c,{md:"2",children:e(R,{color:"primary",onClick:u,children:"Add Note"})})]})]})},ue=({handleClose:r,setRejectData:s,handleRejectClose:u})=>{var i,p;D();const{showData:t}=$(n=>n.batchList),a=()=>{r()},x=n=>{s(n),u()},l=(n,m=`
`,N=0)=>{let o="",f="";N===1&&(o='<strong style="font-size: 110%;">',f="</strong>");let _="";const g=JSON.parse(n);if(g)for(const b in g){const y=g[b];b!=="Confirmation_of_Order_Details"&&b!=="couponcode"&&(y.includes("$")&&N===1&&(y=`<span style="font-size: 120%;">${y}</span>`),_+=`${b.replaceAll("_"," ")} = ${o}${y}${f}${m}`),console.log(_)}return _};return d(T,{children:[d(h,{children:[e(c,{md:"1",className:"p-1 border"}),e(c,{md:"3",className:"p-1 border",children:e("b",{children:"Order"})}),e(c,{md:"2",className:"p-1 border"}),e(c,{md:"3",className:"p-1 border",children:e("b",{children:"Product"})}),e(c,{md:"3",className:"p-1 border",children:e("b",{children:"Options"})})]}),(p=(i=t==null?void 0:t.batch)==null?void 0:i.items)==null?void 0:p.map(n=>{var m,N,o,f,_,g,b,y,v;return d("span",{children:[d(h,{className:"p-1 border",children:[e(c,{md:"1",children:(n==null?void 0:n.item_status)==="production"||(n==null?void 0:n.item_status)==="wap"||(n==null?void 0:n.item_status)==="back order"?d(R,{color:"primary",onClick:()=>x({id:t==null?void 0:t.batch_number,item_id:n==null?void 0:n.id,origin:"BD"}),children:["Reject ",(n==null?void 0:n.item_status)=="wap"?" from Wap":""]}):e("span",{children:n.item_status.charAt(0).toUpperCase()+n.item_status.slice(1)})}),d(c,{md:"3",children:["Order:"," ",e(ce,{to:`/customer-order-edit/${(m=n==null?void 0:n.order)==null?void 0:m.id}`,children:(N=n==null?void 0:n.order)==null?void 0:N.short_order}),e("br",{}),"Date : ",(o=n==null?void 0:n.order)==null?void 0:o.order_date,e("br",{}),"Store: ",(_=(f=n==null?void 0:n.order)==null?void 0:f.store)==null?void 0:_.store_name,e("br",{}),"Re Download Graphic: ",n==null?void 0:n.id,e("br",{}),((b=(g=t==null?void 0:t.batch)==null?void 0:g.station)==null?void 0:b.type)=="Q"&&d(R,{color:"primary",onClick:a,children:["Upload ",n==null?void 0:n.id," Graphic"]})]}),e(c,{md:"2"}),d(c,{md:"3",children:[n==null?void 0:n.child_sku,e("br",{}),n==null?void 0:n.item_description,e("br",{}),"Item# ",n==null?void 0:n.id,e("br",{}),(n==null?void 0:n.item_quantity)===1?d("span",{children:["QTY: ",n==null?void 0:n.item_quantity]}):d("strong",{children:["QTY: ",n==null?void 0:n.item_quantity]}),e("br",{}),n.spec_sheet&&d("div",{children:[e("a",{href:`/products_specifications/${n.spec_sheet.id}`,target:"_blank",children:"Production Instruction"}),e("br",{})]}),n.supervisor_message&&d("div",{children:[n.supervisor_message,e("br",{})]}),n.tracking_number&&d("div",{style:{color:"red"},children:["TRK# ",n.tracking_number]})]}),e(c,{md:"3",children:e(X,{type:"textarea",Rows:"5",value:l(n==null?void 0:n.item_option),disabled:!0})})]}),((y=n==null?void 0:n.rejections)==null?void 0:y.length)&&((v=n==null?void 0:n.rejections)==null?void 0:v.map(j=>d(h,{className:"p-1 border",children:[e(c,{md:2}),d(c,{md:8,children:["Item ",n.id," Rejected ",j.created_at," by"," ",j.user.username,j.rejection_reason_info&&` - ${j.rejection_reason_info.rejection_message}`,"- ",j.rejection_message]})]})))]})})]})},ge=()=>{var v,j,k;const{id:r}=le(),[s,u]=S.exports.useState(null),t=D(),{showData:a}=$(C=>C.batchList),[x,l]=S.exports.useState(!1),i=async()=>{l(!0),r&&await t(te({id:r,batchNote:s})),u(""),l(!1)};S.exports.useEffect(()=>{i()},[]);const[p,n]=S.exports.useState(!1),m=()=>n(!p),N=()=>{n(!p)},[o,f]=S.exports.useState(!1),_=()=>f(!o),[g,b]=S.exports.useState(null),y=async()=>{const C=t(ae(g));(C==null?void 0:C.payload)==201&&(f(!o),i())};return d(S.exports.Fragment,{children:[d(W,{children:[e(Z,{children:d("h4",{className:"card-title",children:["Batch: ",a==null?void 0:a.batch_number," ",((v=a==null?void 0:a.batch)==null?void 0:v.store)&&"("+((k=(j=a==null?void 0:a.batch)==null?void 0:j.store)==null?void 0:k.store_name)+")"]})}),e(pe,{}),e(ue,{handleClose:m,setRejectData:b,handleRejectClose:_}),e(he,{batchNote:s,setBatchNote:u,onClick:i})]}),e(ie,{show:p,handleClose:m,handleUpload:N}),e(se,{isOpen:o,toggle:_,handleUpload:y,rejectData:g,setRejectData:b})]})};export{ge as default};