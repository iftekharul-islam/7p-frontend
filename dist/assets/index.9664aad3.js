import{a as L,r as u,d4 as Q,d5 as V,d6 as Y,d7 as W,j as e,f as n,Q as p,S as H,V as m,Y as i,Z as c,a1 as Z,G as I,d8 as $}from"./index.db14b012.js";/* empty css                  */import{a as q}from"./App.c9615b80.js";/* empty css                                  */import{S as f}from"./react-select.esm.1d40a800.js";import"./emotion-memoize.esm.06f0e458.js";const aa=()=>{var x,N,C,S,v,_,y,O,j,P,R,B,F,D,T,k;const d=q(),a=L(s=>s.rejects),[h,g]=u.exports.useState(!1),l=a==null?void 0:a.searchParams;u.exports.useEffect(()=>{d(Q()),d(V()),d(Y())},[]),u.exports.useEffect(()=>{d(W())},[l]);const b=async()=>{g(!0),await d(W()),g(!1)},o=s=>{d($(s))};return e("div",{className:"app-user-list",children:n(u.exports.Fragment,{children:[n(p,{className:"px-1",children:[e(H,{children:e("h4",{className:"card-title",children:"Process Rejects"})}),e(m,{children:n(i,{children:[e(c,{sm:"2",children:e(Z,{placeholder:"Batch Number",value:l==null?void 0:l.batch_number,onChange:s=>{var t;o({batch_number:(t=s==null?void 0:s.target)==null?void 0:t.value})}})}),e(c,{sm:"2",children:e(f,{className:"react-select",classNamePrefix:"select",options:a==null?void 0:a.sectionOptions,placeholder:"Select a Department",value:(x=a==null?void 0:a.sectionOptions)==null?void 0:x.find(s=>(s==null?void 0:s.value)==(l==null?void 0:l.section)),onChange:s=>o({section:s==null?void 0:s.value}),isClearable:!0})}),e(c,{sm:"2",children:e(f,{className:"react-select",classNamePrefix:"select",options:a==null?void 0:a.graphic_statusOptions,placeholder:"Select Status",value:(N=a==null?void 0:a.graphic_statusOptions)==null?void 0:N.find(s=>(s==null?void 0:s.value)==(l==null?void 0:l.graphic_status)),onChange:s=>o({graphic_status:s==null?void 0:s.value}),isClearable:!0})}),e(c,{sm:"3",children:e(f,{className:"react-select",classNamePrefix:"select",options:a==null?void 0:a.reasonOptions,placeholder:"Select a reason",value:(C=a==null?void 0:a.reasonOptions)==null?void 0:C.find(s=>(s==null?void 0:s.value)==(l==null?void 0:l.reason)),onChange:s=>o({reason:s==null?void 0:s.value}),isClearable:!0})}),e(c,{sm:"1",className:"d-flex align-items-start flex-column",children:e(I,{color:"primary",onClick:b,disabled:h,children:h?"Please Wait":"Filter"})}),e(c,{sm:"2",className:"d-flex align-items-start flex-column",children:e(I,{color:"primary",onClick:b,disabled:h,children:h?"Please Wait":"Send All to First Station"})})]})})]}),((v=(S=a==null?void 0:a.data)==null?void 0:S.summary)==null?void 0:v.length)>0?e("span",{children:e(p,{children:n(m,{children:[n(i,{className:"mb-1",children:[e(c,{sm:"6",children:"Type"}),e(c,{sm:"5",children:"Reason"}),e(c,{sm:"1",children:"Count"})]}),(y=(_=a==null?void 0:a.data)==null?void 0:_.summary)==null?void 0:y.map((s,t)=>{var w,A,E,G;return n(i,{className:"mb-1",children:[e(c,{sm:"6",children:(A=(w=a==null?void 0:a.graphic_statusOptions)==null?void 0:w.find(r=>(r==null?void 0:r.value)==(s==null?void 0:s.graphic_status)))==null?void 0:A.label}),e(c,{sm:"5",children:(G=(E=a==null?void 0:a.reasonOptions)==null?void 0:E.find(r=>(r==null?void 0:r.value)==(s==null?void 0:s.rejection_reason)))==null?void 0:G.label}),e(c,{sm:"1",children:s==null?void 0:s.count})]},t)}),n(i,{className:"mb-1",children:[e(c,{sm:"8"}),e(c,{sm:"3",children:"Total"}),e(c,{sm:"1",children:(j=(O=a==null?void 0:a.data)==null?void 0:O.summary)==null?void 0:j.reduce((s,t)=>s+(t.count||0),0)})]})]})})}):((R=(P=a==null?void 0:a.data)==null?void 0:P.batch_array)==null?void 0:R.length)>0?n(p,{children:[e(H,{children:n("h4",{children:[(B=a==null?void 0:a.data)==null?void 0:B.total_items," found in"," ",(D=(F=a==null?void 0:a.data)==null?void 0:F.batch_array)==null?void 0:D.length," Batch/es"]})}),e(m,{children:(k=(T=a==null?void 0:a.data)==null?void 0:T.batch_array)==null?void 0:k.map((s,t)=>e(i,{children:"Test"},t))})]}):e(p,{children:e(m,{children:e("h4",{className:"d-flex align-items-center justify-content-center",children:"No Rejects Found"})})})]})})};export{aa as default};
