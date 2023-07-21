import{k as O,a as Q,r as y,dU as z,j as r,f as d,Q as J,S as K,V as Z,X as t,Y as s,L as x,G as D,dV as a,dW as h,dX as b,dY as ee}from"./index.a20de6aa.js";import{a as re}from"./App.ca33e514.js";import{h as G}from"./moment.4d75c86c.js";import{S as ne}from"./react-select.esm.3bdafbcf.js";import"./emotion-memoize.esm.06f0e458.js";const ce=()=>{var j,v,Y,P,B,A,w,L,R,E,F;const m=re(),I=O(),{data:n,printerOptions:N,loading:se}=Q(e=>e==null?void 0:e.sentToPrinter),[l,f]=y.exports.useState({printer:null,date:null,batch_number:[]}),[c,S]=y.exports.useState([]),g=()=>{m(a(l!=null&&l.printer?{printer:l==null?void 0:l.printer,date:l==null?void 0:l.date}:null))};y.exports.useEffect(()=>{g()},[l]),y.exports.useEffect(()=>{m(z())},[]);const V=async e=>{var i,u;S([...c,e]);const o=await m(h({name:e}));((i=o==null?void 0:o.payload)==null?void 0:i.status)==206?I(`/print-sublimation?select_batch=${(u=o==null?void 0:o.payload)==null?void 0:u.select_batch}`):g(),S(c.filter(p=>p!==e))},W=async e=>{e.preventDefault(),await m(b({...l,directory:"sublimation",force:"0"})),g()},X=async e=>{e.preventDefault(),await m(ee({...l,directory:"sublimation",force:"0"})),g()},_=(e,o,i)=>{e.preventDefault(),f({printer:o,date:i})},q=e=>{var o,i;e.preventDefault(),(o=e==null?void 0:e.target)!=null&&o.checked?f({...l,batch_number:(i=n==null?void 0:n.to_printer)==null?void 0:i.map(u=>u==null?void 0:u.batch_number)}):f({...l,batch_number:[]})},H=(e,o)=>{var u,p;e.preventDefault();let i=(u=l==null?void 0:l.batch_number)!=null?u:[];(p=e==null?void 0:e.target)!=null&&p.checked?i=[...i,o]:i=i.filter(k=>k!==o),f({...l,batch_number:i})};return r(y.exports.Fragment,{children:d(J,{className:"p-1",children:[r(K,{children:r("h4",{children:"Sent to Printer"})}),d(Z,{children:[r(t,{children:r(s,{sm:"4",children:r(ne,{className:"react-select",classNamePrefix:"react-select",options:N,isClearable:!0,value:N==null?void 0:N.find(e=>(e==null?void 0:e.value)===(l==null?void 0:l.printer)),onChange:e=>{f({printer:e==null?void 0:e.value,date:null})}})})}),((j=n==null?void 0:n.summary)==null?void 0:j.length)>0?d("span",{children:[d(t,{className:"mt-1",children:[r(s,{sm:"2",className:"border py-1",children:"Sent To:"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"0-3 days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"4-7 days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"7+ days"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:"Total"})]}),(v=n==null?void 0:n.summary)==null?void 0:v.map((e,o)=>d(t,{children:[r(s,{sm:"2",className:"border py-1",children:r(x,{onClick:i=>_(i,e==null?void 0:e.to_printer,null),children:e==null?void 0:e.to_printer})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(x,{onClick:i=>_(i,e==null?void 0:e.to_printer,1),children:e==null?void 0:e.group_1})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(x,{onClick:i=>_(i,e==null?void 0:e.to_printer,2),children:e==null?void 0:e.group_2})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(x,{onClick:i=>_(i,e==null?void 0:e.to_printer,3),children:e==null?void 0:e.group_3})}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:r(x,{onClick:i=>_(i,e==null?void 0:e.to_printer,null),children:e==null?void 0:e.batch_count})})]},o)),d(t,{children:[r(s,{sm:"2",className:"border py-1",children:"Total"}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(Y=n==null?void 0:n.summary)==null?void 0:Y.reduce(function(e,o){return e+o.group_1},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(P=n==null?void 0:n.summary)==null?void 0:P.reduce(function(e,o){return e+o.group_2},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(B=n==null?void 0:n.summary)==null?void 0:B.reduce(function(e,o){return e+o.group_3},0)}),r(s,{sm:"1",className:"border py-1 d-flex justify-content-center",children:(A=n==null?void 0:n.summary)==null?void 0:A.reduce(function(e,o){return e+o.batch_count},0)})]})]}):((w=n==null?void 0:n.to_printer)==null?void 0:w.length)>0?d("span",{children:[r("hr",{}),d(t,{className:"mt-1",children:[r(s,{sm:"3",children:r(D,{color:"primary",onClick:W,children:"Reprint Selected Batches"})}),r(s,{sm:"3",children:r(D,{color:"primary",onClick:X,children:"Export Selected Batches Again"})}),r(s,{sm:"1"}),r(s,{sm:"5",children:d("h4",{children:[(L=n==null?void 0:n.to_printer)==null?void 0:L.length," Batches Found /"," ",n==null?void 0:n.total_items," Item Lines"]})})]}),r("hr",{}),d(t,{className:"mt-1",children:[d(s,{sm:"2",children:[r("input",{type:"checkbox",checked:((R=l==null?void 0:l.batch_number)==null?void 0:R.length)===((E=n==null?void 0:n.to_printer)==null?void 0:E.length),onClick:q}),r("b",{className:"mx-1",children:"Select All"})]}),r(s,{sm:"1",children:r("b",{children:"Printed"})}),r(s,{sm:"1",children:r("b",{children:"First Order"})}),r(s,{sm:"1",children:r("b",{children:"Lines"})}),r(s,{sm:"2",children:r("b",{children:"Current Station"})}),r(s,{sm:"2",children:r("b",{children:"Date Sent/User"})}),r(s,{sm:"1"}),r(s,{sm:"1"}),r(s,{sm:"1"})]}),(F=n==null?void 0:n.to_printer)==null?void 0:F.map((e,o)=>{var i,u,p,k,M,T,$,U;return d("span",{children:[r("hr",{}),d(t,{className:"mt-1",children:[d(s,{sm:"2",children:[r("input",{type:"checkbox",checked:(i=l==null?void 0:l.batch_number)==null?void 0:i.includes(e==null?void 0:e.batch_number),onClick:C=>H(C,e==null?void 0:e.batch_number)}),d("span",{className:"mx-1",children:[r("a",{href:`/batch-list/${e==null?void 0:e.batch_number}`,target:"_blank",children:e==null?void 0:e.batch_number}),(e==null?void 0:e.status)!=="active"&&d("span",{children:["(",((p=(u=e==null?void 0:e.status)==null?void 0:u.charAt(0))==null?void 0:p.toUpperCase())+((k=e==null?void 0:e.status)==null?void 0:k.slice(1)),")"]}),r("br",{}),(e==null?void 0:e.store)&&r("span",{children:(M=e==null?void 0:e.store)==null?void 0:M.store_name}),r("br",{}),e!=null&&e.summary_date?"Summary Printed":""]})]}),r(s,{sm:"1",children:d("div",{children:[(e==null?void 0:e.to_printer)!=="1"&&d("span",{children:[e==null?void 0:e.to_printer,r("br",{})]}),G(e==null?void 0:e.to_printer_date).format("YYYY-MM-DD"),r("br",{}),n==null?void 0:n.batch_queue[e==null?void 0:e.batch_number]]})}),r(s,{sm:"1",children:G(e==null?void 0:e.min_order_date).format("YYYY-MM-DD")}),r(s,{sm:"1",children:((T=e==null?void 0:e.items_counts)==null?void 0:T.length)>0&&(($=e==null?void 0:e.items_counts[0])==null?void 0:$.count)}),r(s,{sm:"2",children:d("span",{children:[e==null?void 0:e.station_name,r("br",{}),e==null?void 0:e.station_description]})}),r(s,{sm:"2",children:d("span",{children:[e==null?void 0:e.to_printer_date,r("br",{}),n==null?void 0:n.scans[e==null?void 0:e.batch_number]]})}),r(s,{sm:"1",children:e!=null&&e.first_item?r("img",{src:(U=e==null?void 0:e.first_item)==null?void 0:U.item_thumb,height:70,width:70}):"No Items"}),r(s,{sm:"1",children:(e==null?void 0:e.days)>1&&`Printed ${e==null?void 0:e.days} Days Ago`}),r(s,{sm:"1",children:r(D,{color:"primary",onClick:C=>{C.preventDefault(),V(e==null?void 0:e.batch_number)},disabled:c==null?void 0:c.includes(e==null?void 0:e.batch_number),children:c!=null&&c.includes(e==null?void 0:e.batch_number)?"Please Wait":`Reprint ${e==null?void 0:e.batch_number}`})})]},o)]})})]}):r("div",{className:"text-center mt-5",children:"No Data Found"})]})]})})};export{ce as default};