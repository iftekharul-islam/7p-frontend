import{a as X,r as v,ds as Z,dt as ee,du as re,dv as Q,dw as se,j as s,f as a,Q as N,S as U,V as y,X as f,Y as c,a0 as ne,G as S,L as C,I as ae,dx as H}from"./index.2e7f9eb3.js";/* empty css                  */import{a as ce}from"./App.2c8a5abf.js";/* empty css                                  */import{h as J}from"./moment.4d75c86c.js";import{S as x}from"./react-select.esm.14ecfd44.js";import"./emotion-memoize.esm.06f0e458.js";const ue=()=>{var $,k,D,Y,P,R,b,B,w,M,F,A,L,T,z,E;const i=ce(),n=X(e=>e.rejects),[_,O]=v.exports.useState(!1),d=n==null?void 0:n.searchParams;v.exports.useEffect(()=>{i(Z()),i(ee()),i(re())},[]),v.exports.useEffect(()=>{i(Q()),i(se())},[d]);const m=async()=>{O(!0),await i(Q()),O(!1)},j=e=>{i(H(e))},K=async(e,l)=>{e.preventDefault(),await i(H({graphic_status:l==null?void 0:l.graphic_status,reason:l==null?void 0:l.rejection_reason})),m()},V=(e,l=`
`,h=0)=>{let p="",r="";h===1&&(p='<strong style="font-size: 110%;">',r="</strong>");let u="";const o=JSON.parse(e);if(o)for(const g in o){let t=o[g];g!=="Confirmation_of_Order_Details"&&g!=="couponcode"&&((t==null?void 0:t.includes("$"))&&h===1&&(t=`<span style="font-size: 120%;">${t}</span>`),u+=`${g.replaceAll("_"," ")} = ${p}${t}${r}${l}`),console.log(u)}return u};return s("div",{className:"app-user-list",children:a(v.exports.Fragment,{children:[a(N,{className:"px-1",children:[s(U,{children:s("h4",{className:"card-title",children:"Process Rejects"})}),s(y,{children:a(f,{children:[s(c,{sm:"2",children:s(ne,{placeholder:"Batch Number",value:d==null?void 0:d.batch_number,onChange:e=>{var l;j({batch_number:(l=e==null?void 0:e.target)==null?void 0:l.value})}})}),s(c,{sm:"2",children:s(x,{className:"react-select",classNamePrefix:"select",options:n==null?void 0:n.sectionOptions,placeholder:"Select a Department",value:($=n==null?void 0:n.sectionOptions)==null?void 0:$.find(e=>(e==null?void 0:e.value)==(d==null?void 0:d.section)),onChange:e=>j({section:e==null?void 0:e.value}),isClearable:!0})}),s(c,{sm:"2",children:s(x,{className:"react-select",classNamePrefix:"select",options:n==null?void 0:n.graphic_statusOptions,placeholder:"Select Status",value:(k=n==null?void 0:n.graphic_statusOptions)==null?void 0:k.find(e=>(e==null?void 0:e.value)==(d==null?void 0:d.graphic_status)),onChange:e=>j({graphic_status:e==null?void 0:e.value}),isClearable:!0})}),s(c,{sm:"3",children:s(x,{className:"react-select",classNamePrefix:"select",options:n==null?void 0:n.reasonOptions,placeholder:"Select a reason",value:(D=n==null?void 0:n.reasonOptions)==null?void 0:D.find(e=>(e==null?void 0:e.value)==(d==null?void 0:d.reason)),onChange:e=>j({reason:e==null?void 0:e.value}),isClearable:!0})}),s(c,{sm:"1",className:"d-flex align-items-start flex-column",children:s(S,{color:"primary",onClick:m,disabled:_,children:_?"Please Wait":"Filter"})}),s(c,{sm:"2",className:"d-flex align-items-start flex-column",children:s(S,{color:"primary",onClick:m,disabled:_,children:_?"Please Wait":"Send All to First Station"})})]})})]}),((P=(Y=n==null?void 0:n.data)==null?void 0:Y.summary)==null?void 0:P.length)>0?s("span",{children:s(N,{children:a(y,{children:[a(f,{className:"mb-1",children:[s(c,{sm:"6",children:"Type"}),s(c,{sm:"5",children:"Reason"}),s(c,{sm:"1",children:"Count"})]}),(b=(R=n==null?void 0:n.data)==null?void 0:R.summary)==null?void 0:b.map((e,l)=>{var h,p,r,u;return a(f,{className:"mb-1",children:[s(c,{sm:"6",children:(p=(h=n==null?void 0:n.graphic_statusOptions)==null?void 0:h.find(o=>(o==null?void 0:o.value)==(e==null?void 0:e.graphic_status)))==null?void 0:p.label}),s(c,{sm:"5",children:(u=(r=n==null?void 0:n.reasonOptions)==null?void 0:r.find(o=>(o==null?void 0:o.value)==(e==null?void 0:e.rejection_reason)))==null?void 0:u.label}),s(c,{sm:"1",children:s(C,{onClick:o=>K(o,e),children:e==null?void 0:e.count})})]},l)}),a(f,{className:"mb-1",children:[s(c,{sm:"8"}),s(c,{sm:"3",children:"Total"}),s(c,{sm:"1",children:(w=(B=n==null?void 0:n.data)==null?void 0:B.summary)==null?void 0:w.reduce((e,l)=>e+(l.count||0),0)})]})]})})}):((F=(M=n==null?void 0:n.data)==null?void 0:M.batch_array)==null?void 0:F.length)>0?a(N,{children:[s(U,{children:a("h4",{children:[(A=n==null?void 0:n.data)==null?void 0:A.total_items," found in"," ",(T=(L=n==null?void 0:n.data)==null?void 0:L.batch_array)==null?void 0:T.length," Batch/es"]})}),s(y,{children:(E=(z=n==null?void 0:n.data)==null?void 0:z.batch_array)==null?void 0:E.map((e,l)=>{var h,p;return s("span",{children:a(f,{className:"mb-1 border rounded",children:[a(c,{sm:"2",children:[s("strong",{className:"m-1",children:s(C,{to:`/batch-list/${e==null?void 0:e.key}`,children:e==null?void 0:e.key})}),a("div",{children:[s(x,{className:"react-select m-1",classNamePrefix:"select",placeholder:"Send Batch to",options:n==null?void 0:n.destinationOptions}),a(S,{color:"primary",className:"m-1",onClick:r=>{r.preventDefault()},children:["Update Batch ",e==null?void 0:e.key]})]})]}),s(c,{sm:"10",children:((h=e==null?void 0:e.items)==null?void 0:h.length)>0&&((p=e==null?void 0:e.items)==null?void 0:p.map((r,u)=>{var o,g,t,I,W,q,G;return a(f,{className:"border rounded",children:[a(c,{sm:"2",children:[s("div",{children:s(C,{to:`/customer-order-edit/${(o=r==null?void 0:r.order)==null?void 0:o.id}`,children:(g=r==null?void 0:r.order)==null?void 0:g.short_order})}),s("div",{children:J((t=r==null?void 0:r.order)==null?void 0:t.order_date).format("DD MMM YYYY")}),a("div",{children:["Item: ",r==null?void 0:r.id]}),(r==null?void 0:r.item_quantity)>1&&a("strong",{style:{fontSize:"125%"},children:["QTY: ",r.item_quantity]}),s("br",{}),((I=r==null?void 0:r.rejections)==null?void 0:I.length)>1&&a(ae,{children:[s("br",{}),a("strong",{style:{color:"red"},children:["Rejected ",(W=r==null?void 0:r.rejections)==null?void 0:W.length," Times"]}),s("br",{})]}),(r==null?void 0:r.rejection)&&s("a",{href:`/rejections/reprint?id=${(q=r==null?void 0:r.rejection)==null?void 0:q.id}`,className:"btn btn-xs",children:"Reprint Label"}),((G=e==null?void 0:e.items)==null?void 0:G.length)>1&&s("a",{href:`/rejections/split?item_id=${r.id}&batch_number=${r.batch_number}`,className:"btn btn-xs",children:"New Batch"})]}),s(c,{sm:"2",children:s("a",{href:r==null?void 0:r.item_url,target:"_blank",children:s("img",{src:r==null?void 0:r.item_thumb,height:200,width:150})})}),s(c,{sm:"4",children:a("div",{children:[s("div",{children:r.item_description}),a("p",{children:["SKU: ",r.child_sku]}),r.rejection?a("div",{children:[a("strong",{children:[r.rejection.graphic_status,":"]}),r.rejection.rejection_reason_info&&s("span",{children:r.rejection.rejection_reason_info.rejection_message}),r.rejection.rejection_message.length>0&&a("div",{children:[s("strong",{children:"Note:"})," ",r.rejection.rejection_message]}),a("div",{children:[s("strong",{children:"Rejected:"})," ",J(r.rejection.created_at).format("DD MMM YYYY"),r.rejection.from_station&&a("span",{children:[" ","from"," ",r.rejection.from_station.station_name]}),r.rejection.user&&a("span",{children:[" ","by ",r.rejection.user.username]})]}),r.rejection.supervisor_message&&a("div",{children:[s("strong",{children:"Supervisor:"})," ",r.rejection.supervisor_message,s("br",{})]}),s("input",{type:"text",name:`supervisor_message[${r.rejection.id}]`,className:"supervisor_message form-control",style:{minWidth:"200px"},placeholder:"Enter a message"})]}):s("p",{children:"- Reject information not found -"})]})}),s(c,{sm:"4",children:V(r==null?void 0:r.item_option)})]},u)}))})]})})})})]}):s(N,{children:s(y,{children:s("h4",{className:"d-flex align-items-center justify-content-center",children:"No Rejects Found"})})})]})})};export{ue as default};