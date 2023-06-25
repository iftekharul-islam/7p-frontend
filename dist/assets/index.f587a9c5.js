import{aN as U,r as u,k as B,a as V,ds as $,j as l,Y as g,$ as H,Z as r,f as o,Q as R,S as W,T as G,V as Q,a0 as f,a1 as h,L as w,G as T,dt as X}from"./index.b5b6a8d2.js";import{a as Y,s as b,A as Z}from"./App.fda3d641.js";import{S as C}from"./react-select.esm.c34be573.js";import{A as q}from"./arrow-down.3439d9b5.js";import{T as J}from"./trash-2.f68b58f2.js";import"./emotion-memoize.esm.06f0e458.js";const ce=()=>{const{id:v}=U(),[n,y]=u.exports.useState(null),[t,d]=u.exports.useState(null),[K,A]=u.exports.useState(null),S=Y(),F=B(),{template:i,repeatedOption:k,delimitedOption:N,formatOption:x,catOption:_}=V(e=>e.templates);u.exports.useEffect(()=>{v&&S($(v))},[v]),u.exports.useEffect(()=>{i&&(y(i),d(i==null?void 0:i.options))},[i]);const m=e=>{var a,s;y({...n,[(a=e.target)==null?void 0:a.name]:(s=e.target)==null?void 0:s.value})},p=(e,a,s)=>{const c=t==null?void 0:t.map((D,L)=>L==s?{...D,[e]:a}:D);d(c)},z=e=>{const a=t==null?void 0:t.filter((s,c)=>c!=e);d(a)},E=()=>{const e=[...t];e==null||e.push({format:"1",line_item_field:"1",option_category:"FIX",option_name:"",value:"",width:""}),d(e)},I=e=>{const a=[];t==null||t.forEach((s,c)=>{c+1==e?(a==null||a.push(t[c+1]),a==null||a.push(t[c])):c!=e&&(a==null||a.push(t[c]))}),d(a)},P=e=>{const a=[];t==null||t.forEach((s,c)=>{c==e?(a==null||a.push(t[c+1]),a==null||a.push(t[c])):c-1!=e&&(a==null||a.push(t[c]))}),d(a)},j=async()=>{var a,s,c;const e=await S(X({id:v,data:{...n,options:t}}));(a=e==null?void 0:e.payload)!=null&&a.status?F("/template"):A((c=(s=e==null?void 0:e.payload)==null?void 0:s.data)==null?void 0:c.errors)};return l(u.exports.Fragment,{children:l(g,{children:l(H,{children:l(r,{sm:"12",children:o(R,{children:[l(W,{children:l(G,{tag:"h4",children:"Edit Section"})}),o(Q,{children:[o(g,{children:[o(r,{sm:"12",children:[l(f,{className:"form-label",for:"template_name",children:"Template Name"}),l(h,{type:"text",name:"template_name",id:"template_name",placeholder:"Template Name",value:n==null?void 0:n.template_name,onChange:m})]}),o(r,{sm:"6",children:[l(f,{className:"form-label",for:"repeated_fields",children:"Repeated Fields"}),l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Fields",options:k,value:k==null?void 0:k.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.repeated_fields)),onChange:e=>m({target:{name:"repeated_fields",value:e==null?void 0:e.value}})})]}),o(r,{sm:"6",children:[l(f,{className:"form-label",for:"delimited_char",children:"Delimited char"}),l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Delimited char",options:N,value:N==null?void 0:N.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.delimited_char)),onChange:e=>m({target:{name:"delimited_char",value:e==null?void 0:e.value}})})]}),l(r,{sm:"3"}),o(r,{sm:"6",className:"d-flex justify-content-between mt-1",children:[o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"show_header",checked:n==null?void 0:n.show_header,onChange:e=>{var a;return m({target:{name:"show_header",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Show Header"})]}),o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"break_kits",checked:n==null?void 0:n.break_kits,onChange:e=>{var a;return m({target:{name:"break_kits",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Break kits"})]}),o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"is_active",checked:n==null?void 0:n.is_active,onChange:e=>{var a;return m({target:{name:"is_active",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Active"})]})]}),l(r,{sm:"3"})]}),o(g,{className:"rounded bg-secondary p-2 mt-1 text-uppercase",children:[l(r,{sm:"1 text-light fw-bolder ",children:"Line"}),l(r,{sm:"2 text-light fw-bolder",children:"Name"}),l(r,{sm:"2 text-light fw-bolder",children:"Cat"}),l(r,{sm:"2 text-light fw-bolder",children:"Value"}),l(r,{sm:"2 text-light fw-bolder",children:"Width"}),l(r,{sm:"2 text-light fw-bolder",children:"Format"}),l(r,{sm:"1 text-light fw-bolder",children:"Action"})]}),t==null?void 0:t.map((e,a)=>o(g,{className:"pt-1",children:[l(r,{sm:"1",className:"d-flex align-items-center",children:l("div",{className:"form-check form-check-success",children:l(h,{type:"checkbox",name:"is_active",checked:parseInt(e==null?void 0:e.line_item_field),onChange:s=>{var c;return p("line_item_field",(c=s==null?void 0:s.target)!=null&&c.checked?"1":"0",a)}})})}),l(r,{sm:"2",children:l(h,{type:"text",name:"option_name",id:"option_name",placeholder:"Option Name",value:e==null?void 0:e.option_name,onChange:s=>{var c;return p("option_name",(c=s==null?void 0:s.target)==null?void 0:c.value,a)}})}),l(r,{sm:"2",children:l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Category",options:_,value:_==null?void 0:_.find(s=>(s==null?void 0:s.value)===(e==null?void 0:e.option_category)),onChange:s=>p("option_category",s==null?void 0:s.value,a)})}),l(r,{sm:"2",children:l(h,{type:"text",name:"value",id:"value",placeholder:"Value",value:e==null?void 0:e.value,onChange:s=>{var c;return p("value",(c=s==null?void 0:s.target)==null?void 0:c.value,a)}})}),l(r,{sm:"2",children:l(h,{type:"text",name:"width",id:"width",placeholder:"Width",value:e==null?void 0:e.width,onChange:s=>{var c;return p("width",(c=s==null?void 0:s.target)==null?void 0:c.value,a)}})}),l(r,{sm:"2",children:l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Format",options:x,value:x==null?void 0:x.find(s=>(s==null?void 0:s.value)===(e==null?void 0:e.format)),onChange:s=>p("format",s==null?void 0:s.value,a)})}),o(r,{sm:"1",className:"d-flex align-items-center",children:[l(w,{className:"text-truncate text-capitalize align-middle",onClick:s=>{s.preventDefault(),I(a)},children:l(Z,{size:18,className:"text-primary me-50"})}),l(w,{className:"text-truncate text-capitalize align-middle",onClick:s=>{s.preventDefault(),P(a)},children:l(q,{size:18,className:"text-primary me-50"})}),l(w,{className:"text-truncate text-capitalize align-middle",onClick:s=>{s.preventDefault(),z(a)},children:l(J,{size:18,className:"text-danger me-50"})})]})]})),l(g,{children:l(r,{sm:"12",className:"mt-1",children:o("div",{className:"d-flex",children:[l(T,{className:"me-1",color:"success",type:"submit",onClick:e=>{e.preventDefault(),E()},children:"Add Item"}),l(T,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),j()},children:"Update"})]})})})]})]})})})})})};export{ce as default};
