import{k as Z,a as A,r as R,aA as w,f as t,Y as g,j as r,Z as c,aB as D,aC as ee,aD as re,aE as ne,S as K,T as ce,V as te,W as j,a1 as L,aF as de,H as k,L as le,aG as ae,aH as se,aI as oe}from"./index.b5767533.js";import{a as U}from"./App.bf73fcbb.js";import{S as ie}from"./react-select.esm.97e349dc.js";import{R as pe}from"./RejectModal.a91146b6.js";import{h as he}from"./moment.4d75c86c.js";import"./emotion-memoize.esm.06f0e458.js";const ue=({getBatchData:e})=>{var N,n,p;const y=U(),v=Z(),{showData:a}=A(d=>d.batchList),[o,x]=R.exports.useState([]);R.exports.useEffect(()=>{var h,f,b;const{batch:d,batch_number:s}=a;x([{value:1,type:"link",isActive:!1,label:(d==null?void 0:d.summary_count)==0?"Print batch Summary":"Reprint Summary"},{value:1,type:"link",isActive:!1,label:"Print Dymo Label"},{value:1,type:"export",params:{batch_number:s,force:0,format:"CSV"},isActive:!0,label:"Export"},{value:1,type:"export",params:{batch_number:s,force:1,format:"CSV"},isActive:!0,label:"Force Export"},{value:1,type:"export",params:{batch_number:s,force:2,format:"CSV"},isActive:!0,label:"Send to Manual"},{value:1,type:"export",params:{batch_number:s,force:1,format:"XLS"},isActive:!0,label:"Export as XLS"},(d==null?void 0:d.graphic_found)&&{value:1,type:"function",functionName:u,isActive:!0,label:"Get Graphic from Archive"},(d==null?void 0:d.status)=="active"&&(d==null?void 0:d.status)=="back order"&&((f=(h=d==null?void 0:d.items)==null?void 0:h.filter(_=>_.item_status==="production"))==null?void 0:f.length)==((b=d==null?void 0:d.items)==null?void 0:b.length)&&{value:1,type:"function",isActive:!1,label:"Reject Batch"},((d==null?void 0:d.status)=="active"||(d==null?void 0:d.status)=="back order")&&{value:1,type:"link",isActive:!1,label:"Release Items"}])},[a]);const l=d=>{const{isActive:s,type:h,params:f,functionName:b}=d;s?h=="export"?i(f):h=="function"&&b():ee(re).fire({position:"top-end",icon:"error",title:"This action is under development ",showConfirmButton:!1,timer:1500})},i=async d=>{await y(D(d))},u=async()=>{var h,f,b,_,m,S;const d={name:(h=a==null?void 0:a.batch)==null?void 0:h.batch_number,directory:(b=(f=a==null?void 0:a.batch)==null?void 0:f.route)==null?void 0:b.graphic_dir,goto:((_=a==null?void 0:a.batch)==null?void 0:_.section_id)==6?"print_sublimation":""},s=await y(w(d));((m=s==null?void 0:s.payload)==null?void 0:m.status)==206?v(`/print-sublimation?select_batch=${(S=s==null?void 0:s.payload)==null?void 0:S.select_batch}`):e()};return t(g,{className:"p-1 d-flex justify-content-between",children:[r(c,{sm:"5",children:t("h4",{className:"card-title",children:["Batch: ",a==null?void 0:a.batch_number," ",((N=a==null?void 0:a.batch)==null?void 0:N.store)&&"("+((p=(n=a==null?void 0:a.batch)==null?void 0:n.store)==null?void 0:p.store_name)+")"]})}),r(c,{sm:"3",children:r(ie,{className:"react-select",classNamePrefix:"select",name:"batchNote",placeholder:"Action",options:o==null?void 0:o.filter(d=>d),value:{value:"action",label:"Action"},onChange:d=>l(d)})})]})},be=({show:e,handleClose:y,handleUpload:v,uploadData:a,FileUpload:o})=>r(ne,{isOpen:e,toggle:y,className:"modal-lg",children:t(K,{children:[r(ce,{closeButton:!0,children:r(te,{children:"Upload a Graphic"})}),t(j,{children:[r("p",{children:"Upload a graphic to the Archive directory."}),r(L,{type:"file",className:"form-control",onChange:i=>{i.preventDefault();const u=new FileReader,N=i.target.files[0];u.onloadend=()=>{v({...a,upload_file:N})},u.readAsDataURL(N)}})]}),t(de,{children:[r(k,{className:"success",onClick:async i=>{i.preventDefault(),a!=null&&a.upload_file?(await o(a),y()):alert("Please select a file to upload")},children:"Upload"}),r(k,{className:"secondary mx-1",onClick:y,children:"Close"})]})]})}),_e=()=>{var y,v,a,o,x,l,i,u,N,n,p,d,s,h,f,b,_,m,S,C,$,E,F,G,P,I,T,M,O,Y,V,H,q,z,Q,W,X,J;const{showData:e}=A(B=>B.batchList);return t(j,{children:[t(g,{className:"p-1 pt-0",children:[t(c,{md:"1",children:[r("b",{children:"**Route:"})," "]}),r(c,{md:"9",children:((y=e==null?void 0:e.batch)==null?void 0:y.route)&&r("span",{children:t("span",{children:[(a=(v=e==null?void 0:e.batch)==null?void 0:v.route)==null?void 0:a.batch_code," / ",(x=(o=e==null?void 0:e.batch)==null?void 0:o.route)==null?void 0:x.batch_route_name," => ",e==null?void 0:e.stations]})})}),r(c,{md:"2",children:(i=(l=e==null?void 0:e.batch)==null?void 0:l.route)!=null&&i.template?t("span",{children:[(n=(N=(u=e==null?void 0:e.batch)==null?void 0:u.route)==null?void 0:N.template)==null?void 0:n.template_name," Template"]}):r("span",{children:"No Template"})})]}),t(g,{className:"p-1 pt-0",children:[r(c,{md:"1",children:r("b",{children:"Created:"})}),r(c,{md:"3",children:(p=e==null?void 0:e.batch)==null?void 0:p.creation_date}),r(c,{md:"1",children:r("b",{children:"Last Scan:"})}),r(c,{md:"3",children:(d=e==null?void 0:e.last_scan)!=null&&d.date?((s=e==null?void 0:e.last_scan)==null?void 0:s.date)+" by "+((h=e==null?void 0:e.last_scan)==null?void 0:h.username):(f=e==null?void 0:e.batch)==null?void 0:f.change_date}),r(c,{md:"1",children:r("b",{children:"Station:"})}),r(c,{md:"3",children:(b=e==null?void 0:e.batch)!=null&&b.station?((m=(_=e==null?void 0:e.batch)==null?void 0:_.station)==null?void 0:m.station_name)+" => "+((C=(S=e==null?void 0:e.batch)==null?void 0:S.station)==null?void 0:C.station_description):"Station Not Found"})]}),t(g,{className:"p-1 pt-0",children:[r(c,{md:"1",children:r("b",{children:"Export:"})}),r(c,{md:"3",children:($=e==null?void 0:e.batch)!=null&&$.export_date?((E=e==null?void 0:e.batch)==null?void 0:E.export_count)==1?t("span",{children:["Exported ",(F=e==null?void 0:e.batch)==null?void 0:F.export_count," time"," ",(G=e==null?void 0:e.batch)==null?void 0:G.export_date]}):t("span",{children:["Exported ",(P=e==null?void 0:e.batch)==null?void 0:P.export_count," times Last export"," ",(I=e==null?void 0:e.batch)==null?void 0:I.export_date]}):"Not Exported"}),r(c,{md:"4",children:((T=e==null?void 0:e.batch)==null?void 0:T.csv_found)!=0&&"CSV File Found"})]}),t(g,{className:"p-1 pt-0",children:[r(c,{md:"1",children:r("b",{children:"Summary:"})}),(M=e==null?void 0:e.batch)!=null&&M.summary_date?r(c,{md:"6",children:t(g,{children:[t(c,{md:"6",children:["Printed ",(O=e==null?void 0:e.batch)==null?void 0:O.summary_date]}),t(c,{md:"6",children:[(Y=e==null?void 0:e.batch)==null?void 0:Y.summary_count," printed - last by"," ",(H=(V=e==null?void 0:e.batch)==null?void 0:V.summary_user)==null?void 0:H.username]})]})}):r(c,{md:"6",children:"Not Printed"})]}),t(g,{className:"p-1 pt-0",children:[r(c,{md:"1",children:r("b",{children:"Graphic:"})}),r(c,{md:"3",children:(q=e==null?void 0:e.batch)==null?void 0:q.graphic_found}),((z=e==null?void 0:e.batch)==null?void 0:z.to_printer)!="0"&&r(c,{md:"4",children:t(g,{children:[r(c,{md:"3",children:r("b",{children:"Printed:"})}),t(c,{md:"9",children:[(Q=e==null?void 0:e.batch)==null?void 0:Q.to_printer," -"," ",(W=e==null?void 0:e.batch)==null?void 0:W.to_printer_date]})]})})]}),((X=e==null?void 0:e.related)==null?void 0:X.length)>0&&t(g,{className:"p-1 pt-0",children:[r(c,{md:"1",children:r("b",{children:"Related:"})}),r(c,{md:"3",children:(J=e==null?void 0:e.related)==null?void 0:J.map(B=>t("span",{children:[B," "]}))})]})]})},fe=({batchNote:e,setBatchNote:y,onClick:v})=>{var o,x;const{showData:a}=A(l=>l.batchList);return t(j,{children:[t(g,{children:[r(c,{md:"2",className:"p-1 border",children:r("b",{children:"Note"})}),r(c,{md:"1",className:"p-1 border",children:r("b",{children:"Date"})}),r(c,{md:"2",className:"p-1 border",children:r("b",{children:"User"})}),r(c,{md:"1",className:"p-1 border",children:r("b",{children:"Station"})}),r(c,{md:"2",className:"p-1 border",children:r("b",{children:"Station"})}),r(c,{md:"2",className:"p-1 border",children:r("b",{children:"Scan In"})}),r(c,{md:"2",className:"p-1 border",children:r("b",{children:"Scan Out"})})]}),t(g,{children:[r(c,{md:"6",children:(o=a==null?void 0:a.notes)==null?void 0:o.map(l=>{var i,u;return r("span",{children:t(g,{className:"p-1",children:[r(c,{md:"4",children:l==null?void 0:l.note}),r(c,{md:"2",children:he(l==null?void 0:l.created_at).format("DD MM YYYY")}),r(c,{md:"4",children:(i=l==null?void 0:l.user)==null?void 0:i.username}),r(c,{md:"2",children:(u=l==null?void 0:l.station)==null?void 0:u.station_name})]})})})}),r(c,{md:"6",children:(x=a==null?void 0:a.scans)==null?void 0:x.map(l=>{var i,u;return r("span",{children:t(g,{className:"p-1",children:[r(c,{md:"4",children:(i=l==null?void 0:l.station)==null?void 0:i.station_name}),t(c,{md:"4",children:[(u=l==null?void 0:l.in_user)==null?void 0:u.username," ",l==null?void 0:l.in_date]}),r(c,{md:"4",children:(l==null?void 0:l.out_user)&&l.out_user.username+" "+l.out_date})]})})})})]}),t(g,{children:[r(c,{md:"4",children:r(L,{type:"textarea",name:"note",id:"note",placeholder:"Enter Note",value:e,onChange:l=>{y(l.target.value)}})}),r(c,{md:"2",children:r(k,{color:"primary",onClick:v,children:"Add Note"})})]})]})},me=({handleClose:e,setRejectData:y,handleRejectClose:v,setUploadData:a})=>{var u,N;U();const{showData:o}=A(n=>n.batchList),x=(n,p)=>{n.preventDefault(),a({item_id:p==null?void 0:p.id,batch_number:p==null?void 0:p.batch_number}),e()},l=n=>{y(n),v()},i=(n,p=`
`,d=0)=>{let s="",h="";d===1&&(s='<strong style="font-size: 110%;">',h="</strong>");let f="";const b=JSON.parse(n);if(b)for(const _ in b){let m=b[_];_!=="Confirmation_of_Order_Details"&&_!=="couponcode"&&(typeof m===String&&(m==null?void 0:m.includes("$"))&&d===1&&(m=`<span style="font-size: 120%;">${m}</span>`),f+=`${_.replaceAll("_"," ")} = ${s}${m}${h}${p}`)}return f};return t(j,{children:[t(g,{children:[r(c,{md:"1",className:"p-1 border"}),r(c,{md:"3",className:"p-1 border",children:r("b",{children:"Order"})}),r(c,{md:"2",className:"p-1 border"}),r(c,{md:"3",className:"p-1 border",children:r("b",{children:"Product"})}),r(c,{md:"3",className:"p-1 border",children:r("b",{children:"Options"})})]}),(N=(u=o==null?void 0:o.batch)==null?void 0:u.items)==null?void 0:N.map(n=>{var p,d,s,h,f,b,_,m,S;return t("span",{children:[t(g,{className:"p-1 border",children:[r(c,{md:"1",children:(n==null?void 0:n.item_status)==="production"||(n==null?void 0:n.item_status)==="wap"||(n==null?void 0:n.item_status)==="back order"?t(k,{color:"primary",onClick:()=>l({id:o==null?void 0:o.batch_number,item_id:n==null?void 0:n.id,origin:"BD"}),children:["Reject ",(n==null?void 0:n.item_status)=="wap"?" from Wap":""]}):r("span",{children:n.item_status.charAt(0).toUpperCase()+n.item_status.slice(1)})}),t(c,{md:"3",children:["Order:"," ",r(le,{to:`/customer-order-edit/${(p=n==null?void 0:n.order)==null?void 0:p.id}`,children:(d=n==null?void 0:n.order)==null?void 0:d.short_order}),r("br",{}),"Date : ",(s=n==null?void 0:n.order)==null?void 0:s.order_date,r("br",{}),"Store: ",(f=(h=n==null?void 0:n.order)==null?void 0:h.store)==null?void 0:f.store_name,r("br",{}),"Re Download Graphic: ",n==null?void 0:n.id,r("br",{}),((_=(b=o==null?void 0:o.batch)==null?void 0:b.station)==null?void 0:_.type)=="G"&&t(k,{color:"primary",onClick:C=>x(C,n),children:["Upload ",n==null?void 0:n.id," Graphic"]})]}),t(c,{md:"2",children:[(n==null?void 0:n.sure3d_thumb)&&r("img",{src:n==null?void 0:n.sure3d_thumb[0],width:"150",height:"150"}),r("a",{href:n==null?void 0:n.item_url,target:"_blank",children:r("img",{src:n==null?void 0:n.item_thumb,width:"150",height:"150"})})]}),t(c,{md:"3",children:[n==null?void 0:n.child_sku,r("br",{}),n==null?void 0:n.item_description,r("br",{}),"Item# ",n==null?void 0:n.id,r("br",{}),(n==null?void 0:n.item_quantity)===1?t("span",{children:["QTY: ",n==null?void 0:n.item_quantity]}):t("strong",{children:["QTY: ",n==null?void 0:n.item_quantity]}),r("br",{}),n.spec_sheet&&t("div",{children:[r("a",{href:`/products_specifications/${n.spec_sheet.id}`,target:"_blank",children:"Production Instruction"}),r("br",{})]}),n.supervisor_message&&t("div",{children:[n.supervisor_message,r("br",{})]}),n.tracking_number&&t("div",{style:{color:"red"},children:["TRK# ",n.tracking_number]})]}),r(c,{md:"3",children:r(L,{type:"textarea",Rows:"5",value:i(n==null?void 0:n.item_option),disabled:!0})})]}),((m=n==null?void 0:n.rejections)==null?void 0:m.length)&&((S=n==null?void 0:n.rejections)==null?void 0:S.map(C=>t(g,{className:"p-1 border",children:[r(c,{md:2}),t(c,{md:8,children:["Item ",n.id," Rejected ",C.created_at," by"," ",C.user.username,C.rejection_reason_info&&` - ${C.rejection_reason_info.rejection_message}`,"- ",C.rejection_message]})]})))]})})]})},Ce=()=>{const{id:e}=ae(),[y,v]=R.exports.useState(null),a=U();A(S=>S.batchList);const[o,x]=R.exports.useState(!1),l=async()=>{x(!0),e&&await a(se({id:e,batchNote:y})),v(""),x(!1)};R.exports.useEffect(()=>{l()},[]);const[i,u]=R.exports.useState(!1),N=()=>u(!i),n=async S=>{await a(oe(S)),l(),u(!i)},[p,d]=R.exports.useState(!1),s=()=>d(!p),[h,f]=R.exports.useState({origin:"BD",title:"Batch view"}),[b,_]=R.exports.useState(null),m=S=>{f({...h,...S})};return t(R.exports.Fragment,{children:[t(K,{children:[r(ue,{getBatchData:l}),r(_e,{}),r(me,{handleClose:N,setUploadData:_,setRejectData:m,handleRejectClose:s}),r(fe,{batchNote:y,setBatchNote:v,onClick:l})]}),r(be,{show:i,handleClose:N,uploadData:b,handleUpload:_,FileUpload:n}),r(pe,{isOpen:p,toggle:s,data:h})]})};export{Ce as default};
