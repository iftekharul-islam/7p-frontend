import{aE as U,r as o,k as V,a as w,ev as j,ew as D,ey as F,j as l,X as g,Y as c,Z as M,f as n,Q as T,S as Z,T as $,V as k,$ as t,a0 as p,G as A,I as B,bm as I,ez as L}from"./index.6f9bc425.js";import{a as G,s as h}from"./App.b6ede6fe.js";import{S as u}from"./react-select.esm.0bde0cc4.js";import"./emotion-memoize.esm.06f0e458.js";const q=()=>{var C,S,_,y;const{id:N}=U(),[s,v]=o.exports.useState(null),[m,P]=o.exports.useState(null),[b,x]=o.exports.useState(!1),f=G(),E=V(),a=w(e=>e.users);o.exports.useEffect(()=>{f(j()),f(D())},[]),o.exports.useEffect(()=>{N&&f(F(N))},[N]),o.exports.useEffect(()=>{var e,r;a!=null&&a.user&&v({...a==null?void 0:a.user,role:(r=(e=a==null?void 0:a.user)==null?void 0:e.roles[0])==null?void 0:r.id})},[a==null?void 0:a.user]);const i=e=>{var r,d;v({...s,[(r=e.target)==null?void 0:r.name]:(d=e.target)==null?void 0:d.value})},z=(e,r)=>{v({...r,[e]:r})},R=async()=>{var r,d,O;x(!0);const e=await f(L(s));(r=e==null?void 0:e.payload)!=null&&r.status?E("/user"):P((O=(d=e==null?void 0:e.payload)==null?void 0:d.data)==null?void 0:O.errors),x(!1)};return l(o.exports.Fragment,{children:l(g,{children:l(c,{md:"6",sm:"12",children:l(M,{children:n(T,{children:[l(Z,{children:l($,{tag:"h4",children:"New User"})}),n(k,{children:[n(g,{children:[n(c,{sm:"12",children:[l(t,{className:"form-label",for:"name",children:"Name"}),l(p,{type:"text",name:"name",id:"name",placeholder:"Name",value:s==null?void 0:s.name,onChange:i}),l("small",{className:"text-danger",children:m==null?void 0:m.name})]}),n(c,{sm:"12",children:[l(t,{className:"form-label",for:"email",children:"Email"}),l(p,{type:"text",name:"email",id:"email",placeholder:"Email",value:s==null?void 0:s.email,onChange:i}),l("small",{className:"text-danger",children:m==null?void 0:m.email})]}),n(c,{sm:"12",className:"mb-1",children:[l(t,{className:"form-label",for:"nameVertical",children:"Role"}),l(u,{className:"react-select",classNamePrefix:"select",theme:h,placeholder:"Select Role",options:a==null?void 0:a.roleOptions,value:(C=a==null?void 0:a.roleOptions)==null?void 0:C.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.role)),onChange:e=>i({target:{name:"role",value:e==null?void 0:e.value}}),isClearable:!1})]}),n(c,{sm:"12",className:"mb-1",children:[l(t,{className:"form-label",for:"vendor_id",children:"Vendor"}),l(u,{className:"react-select",classNamePrefix:"select",theme:h,placeholder:"Select Vendor",options:a==null?void 0:a.vendorOptions,value:(S=a==null?void 0:a.vendorOptions)==null?void 0:S.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.vendor_id)),onChange:e=>i({target:{name:"vendor_id",value:e==null?void 0:e.value}}),isClearable:!1})]}),n(c,{sm:"12",children:[l(t,{className:"form-label",for:"zip_code",children:"Zip Code"}),l(p,{type:"text",name:"zip_code",id:"zip_code",placeholder:"Zip Code",value:s==null?void 0:s.zip_code,onChange:i})]}),n(c,{sm:"12",children:[l(t,{className:"form-label",for:"state",children:"State"}),l(p,{type:"text",name:"state",id:"state",placeholder:"State",value:s==null?void 0:s.state,onChange:i})]}),n(c,{sm:"12",children:[l(t,{className:"form-label",for:"remote",children:"Remote"}),l(p,{type:"text",name:"remote",id:"remote",placeholder:"Remote",value:s==null?void 0:s.remote,onChange:i})]}),n(c,{sm:"12",className:"mb-1",children:[l(t,{className:"form-label",for:"section_id",children:"Section"}),l(u,{className:"react-select",classNamePrefix:"select",theme:h,placeholder:"Select Section",options:a==null?void 0:a.sectionOptions,value:(_=a==null?void 0:a.sectionOptions)==null?void 0:_.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.section_id)),onChange:e=>i({target:{name:"section_id",value:e==null?void 0:e.value}}),isClearable:!1})]}),n(c,{sm:"12",className:"mb-1",children:[l(t,{className:"form-label",for:"station_id",children:"Station"}),l(u,{className:"react-select",classNamePrefix:"select",theme:h,placeholder:"Select Station",options:a==null?void 0:a.stationOptions,value:(y=a==null?void 0:a.stationOptions)==null?void 0:y.find(e=>(e==null?void 0:e.value)===(s==null?void 0:s.station_id)),onChange:e=>i({target:{name:"station_id",value:e==null?void 0:e.value}}),isClearable:!1})]}),n(c,{sm:"12",className:"mb-1",children:[l(t,{className:"form-label",for:"permit_manufactures",children:"Permit Manufactures"}),l(u,{className:"react-select",classNamePrefix:"select",theme:h,isMulti:!0,placeholder:"Select Permit",options:a==null?void 0:a.permitOptions,value:s==null?void 0:s.permit_manufactures,onChange:e=>z("permit_manufactures",e),isClearable:!1})]})]}),l(g,{children:l(c,{sm:"12",className:"mt-1",children:l("div",{className:"d-flex",children:l(A,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),R()},disabled:b,children:b?n(B,{children:[l(I,{className:"me-25",size:"sm"}),"Updating"]}):"Update"})})})})]})]})})})})})};export{q as default};
