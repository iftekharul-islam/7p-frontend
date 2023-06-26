import{a as $,r as u,b0 as q,b1 as L,j as r,f as l,Y as c,Z as s,Q as t,S as i,V as m,G as Y,L as g,b2 as P,b3 as U}from"./index.22eb8bd8.js";/* empty css                  */import{a as w}from"./App.68a66c55.js";import{F as N}from"./index.2b46e6e7.js";import{S as M}from"./react-select.esm.579d0190.js";import"./emotion-memoize.esm.06f0e458.js";const z=()=>{var x,v,f,_,S,k,y,E,F,Q;const p=w(),{exportData:a,orderStoreOptions:o}=$(e=>e.exports),[d,V]=u.exports.useState({}),[h,j]=u.exports.useState({}),b=e=>{var n;V({...d,[(n=e==null?void 0:e.target)==null?void 0:n.name]:e.target.value})},C=e=>{var n;j({...h,[(n=e==null?void 0:e.target)==null?void 0:n.name]:e.target.value})};u.exports.useEffect(()=>{p(q()),p(L())},[]);const B=()=>{p(P(d))},R=()=>{p(U(d))};return r(u.exports.Fragment,{children:l(c,{children:[r(s,{sm:"1"}),l(s,{sm:"10",children:[l(t,{className:"m-2",children:[r(i,{children:r("h4",{children:"Create Quickbooks Export by Date"})}),r(m,{children:l(c,{children:[r(s,{sm:"4",children:r(M,{className:"React",classNamePrefix:"select",name:"color",options:o,value:o==null?void 0:o.find(e=>e.value===d.store),onChange:e=>b({target:{name:"store_ids",value:e==null?void 0:e.map(n=>n==null?void 0:n.value)}}),isMulti:!0})}),r(s,{sm:"3",children:r(N,{className:"form-control",id:"date",placeholder:"End Date",value:(x=d==null?void 0:d.start_date)!=null?x:null,options:{dateFormat:"d-m-Y"},onChange:e=>b({target:{name:"start_date",value:e[0]}})})}),r(s,{sm:"3",children:r(N,{className:"form-control",id:"date",placeholder:"End Date",value:(v=d==null?void 0:d.end_date)!=null?v:null,options:{dateFormat:"d-m-Y"},onChange:e=>b({target:{name:"end_date",value:e[0]}})})}),r(s,{sm:"2",children:r(Y,{className:"btn-icon d-flex",color:"primary",onClick:B,children:"Create"})})]})})]}),l(t,{className:"m-2",children:[r(i,{children:r("h4",{children:"Billing CSV Export by Date (Max select 15 Days)"})}),r(m,{children:l(c,{children:[r(s,{sm:"4",children:r(M,{className:"React",classNamePrefix:"select",name:"color",options:o,value:o==null?void 0:o.find(e=>e.value===h.store),onChange:e=>C({target:{name:"store_ids",value:e==null?void 0:e.map(n=>n==null?void 0:n.value)}}),isMulti:!0})}),r(s,{sm:"3",children:r(N,{className:"form-control",id:"date",placeholder:"End Date",value:(f=h==null?void 0:h.start_date)!=null?f:null,options:{dateFormat:"d-m-Y"},onChange:e=>C({target:{name:"start_date",value:e[0]}})})}),r(s,{sm:"3",children:r(N,{className:"form-control",id:"date",placeholder:"End Date",value:(_=h==null?void 0:h.end_date)!=null?_:null,options:{dateFormat:"d-m-Y"},onChange:e=>C({target:{name:"end_date",value:e[0]}})})}),r(s,{sm:"2",children:r(Y,{className:"btn-icon d-flex",color:"primary",onClick:R,children:"Create CSV"})})]})})]}),((S=a==null?void 0:a.csv_summary)==null?void 0:S.length)>0&&l(t,{className:"m-2",children:[r(i,{children:r("h4",{children:"Shipment Upload Files"})}),l(m,{children:[l(c,{children:[r(s,{sm:"8",className:"border p-1",children:"Store"}),r(s,{sm:"4",className:"border p-1",children:"Shipment Count"})]}),(k=a==null?void 0:a.csv_summary)==null?void 0:k.map((e,n)=>l(c,{children:[r(s,{sm:"8",className:"border px-1",children:e==null?void 0:e.store_name}),r(s,{sm:"4",className:"border px-1",children:r(g,{to:`/transfer/export/details/${e==null?void 0:e.store_id}/csv`,children:e==null?void 0:e.count})})]}))]})]}),((y=a==null?void 0:a.dropship)==null?void 0:y.length)>0&&l(t,{className:"m-2",children:[r(i,{children:r("h4",{children:"Drop Ship Order Files"})}),l(m,{children:[l(c,{children:[r(s,{sm:"8",className:"border p-1",children:"Store"}),r(s,{sm:"4",className:"border p-1",children:"Shipment Count"})]}),(E=a==null?void 0:a.dropship)==null?void 0:E.map((e,n)=>l(c,{children:[r(s,{sm:"8",className:"border px-1",children:e==null?void 0:e.NAME}),r(s,{sm:"4",className:"border px-1",children:r(g,{to:`/transfer/export/details/${e==null?void 0:e.store_id}/csv?dropship=true`,children:e==null?void 0:e.COUNT})})]}))]})]}),((F=a==null?void 0:a.qb_summary)==null?void 0:F.length)>0&&l(t,{className:"m-2",children:[r(i,{children:r("h4",{children:"Quickbooks Exports"})}),l(m,{children:[l(c,{children:[r(s,{sm:"8",className:"border p-1",children:"Store"}),r(s,{sm:"4",className:"border p-1",children:"Shipment Count"})]}),(Q=a==null?void 0:a.qb_summary)==null?void 0:Q.map((e,n)=>l(c,{children:[r(s,{sm:"8",className:"border px-1",children:e==null?void 0:e.store_name}),r(s,{sm:"4",className:"border px-1",children:r(g,{to:`/transfer/export/details/${e==null?void 0:e.store_id}/qb`,children:e==null?void 0:e.count})})]}))]})]})]}),r(s,{sm:"1"})]})})};export{z as default};
