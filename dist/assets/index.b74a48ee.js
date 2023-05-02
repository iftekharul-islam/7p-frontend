import{aB as L,r as u,k as U,a as V,cn as $,j as c,Y as g,$ as H,Z as r,f as o,Q as R,S as W,T as G,V as Q,a0 as f,a1 as h,L as w,G as T,co as X}from"./index.545d534b.js";import{a as Y,s as b,A as Z}from"./App.979e7298.js";import{S as C}from"./react-select.esm.5b8ca9c8.js";import{A as q}from"./arrow-down.5e91f99a.js";import{T as J}from"./trash-2.2b499fc6.js";import"./emotion-memoize.esm.06f0e458.js";const se=()=>{const{id:v}=L(),[n,y]=u.exports.useState(null),[t,i]=u.exports.useState(null),[K,A]=u.exports.useState(null),S=Y(),F=U(),{template:m,repeatedOption:k,delimitedOption:N,formatOption:x,catOption:_}=V(e=>e.templates);u.exports.useEffect(()=>{v&&S($(v))},[v]),u.exports.useEffect(()=>{m&&(y(m),i(m==null?void 0:m.options))},[m]);const d=e=>{var a,l;y({...n,[(a=e.target)==null?void 0:a.name]:(l=e.target)==null?void 0:l.value})},p=(e,a,l)=>{const s=t==null?void 0:t.map((D,B)=>B==l?{...D,[e]:a}:D);i(s)},z=e=>{const a=t==null?void 0:t.filter((l,s)=>s!=e);i(a)},E=()=>{const e=[...t];e==null||e.push({format:"1",line_item_field:"1",option_category:"FIX",option_name:"",value:"",width:""}),i(e)},I=e=>{const a=[];t==null||t.forEach((l,s)=>{s+1==e?(a==null||a.push(t[s+1]),a==null||a.push(t[s])):s!=e&&(a==null||a.push(t[s]))}),i(a)},P=e=>{const a=[];t==null||t.forEach((l,s)=>{s==e?(a==null||a.push(t[s+1]),a==null||a.push(t[s])):s-1!=e&&(a==null||a.push(t[s]))}),i(a)},j=async()=>{var a,l,s;const e=await S(X({id:v,data:{...n,options:t}}));(a=e==null?void 0:e.payload)!=null&&a.status?F("/template"):A((s=(l=e==null?void 0:e.payload)==null?void 0:l.data)==null?void 0:s.errors)};return c(u.exports.Fragment,{children:c(g,{children:c(H,{children:c(r,{sm:"12",children:o(R,{children:[c(W,{children:c(G,{tag:"h4",children:"Edit Section"})}),o(Q,{children:[o(g,{children:[o(r,{sm:"12",children:[c(f,{className:"form-label",for:"template_name",children:"Template Name"}),c(h,{type:"text",name:"template_name",id:"template_name",placeholder:"Template Name",value:n==null?void 0:n.template_name,onChange:d})]}),o(r,{sm:"6",children:[c(f,{className:"form-label",for:"repeated_fields",children:"Repeated Fields"}),c(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Fields",options:k,value:k==null?void 0:k.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.repeated_fields)),onChange:e=>d({target:{name:"repeated_fields",value:e==null?void 0:e.value}})})]}),o(r,{sm:"6",children:[c(f,{className:"form-label",for:"delimited_char",children:"Delimited char"}),c(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Delimited char",options:N,value:N==null?void 0:N.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.delimited_char)),onChange:e=>d({target:{name:"delimited_char",value:e==null?void 0:e.value}})})]}),c(r,{sm:"3"}),o(r,{sm:"6",className:"d-flex justify-content-between mt-1",children:[o("div",{className:"form-check form-check-success",children:[c(h,{type:"checkbox",name:"show_header",checked:n==null?void 0:n.show_header,onChange:e=>{var a;return d({target:{name:"show_header",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),c(f,{className:"form-check-label",for:"success-checkbox",children:"Show Header"})]}),o("div",{className:"form-check form-check-success",children:[c(h,{type:"checkbox",name:"break_kits",checked:n==null?void 0:n.break_kits,onChange:e=>{var a;return d({target:{name:"break_kits",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),c(f,{className:"form-check-label",for:"success-checkbox",children:"Break kits"})]}),o("div",{className:"form-check form-check-success",children:[c(h,{type:"checkbox",name:"is_active",checked:n==null?void 0:n.is_active,onChange:e=>{var a;return d({target:{name:"is_active",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),c(f,{className:"form-check-label",for:"success-checkbox",children:"Active"})]})]}),c(r,{sm:"3"})]}),o(g,{className:"rounded bg-secondary p-2 mt-1 text-uppercase",children:[c(r,{sm:"1 text-light fw-bolder ",children:"Line"}),c(r,{sm:"2 text-light fw-bolder",children:"Name"}),c(r,{sm:"2 text-light fw-bolder",children:"Cat"}),c(r,{sm:"2 text-light fw-bolder",children:"Value"}),c(r,{sm:"2 text-light fw-bolder",children:"Width"}),c(r,{sm:"2 text-light fw-bolder",children:"Format"}),c(r,{sm:"1 text-light fw-bolder",children:"Action"})]}),t==null?void 0:t.map((e,a)=>o(g,{className:"pt-1",children:[c(r,{sm:"1",className:"d-flex align-items-center",children:c("div",{className:"form-check form-check-success",children:c(h,{type:"checkbox",name:"is_active",checked:parseInt(e==null?void 0:e.line_item_field),onChange:l=>{var s;return p("line_item_field",(s=l==null?void 0:l.target)!=null&&s.checked?"1":"0",a)}})})}),c(r,{sm:"2",children:c(h,{type:"text",name:"option_name",id:"option_name",placeholder:"Option Name",value:e==null?void 0:e.option_name,onChange:l=>{var s;return p("option_name",(s=l==null?void 0:l.target)==null?void 0:s.value,a)}})}),c(r,{sm:"2",children:c(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Category",options:_,value:_==null?void 0:_.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.option_category)),onChange:l=>p("option_category",l==null?void 0:l.value,a)})}),c(r,{sm:"2",children:c(h,{type:"text",name:"value",id:"value",placeholder:"Value",value:e==null?void 0:e.value,onChange:l=>{var s;return p("value",(s=l==null?void 0:l.target)==null?void 0:s.value,a)}})}),c(r,{sm:"2",children:c(h,{type:"text",name:"width",id:"width",placeholder:"Width",value:e==null?void 0:e.width,onChange:l=>{var s;return p("width",(s=l==null?void 0:l.target)==null?void 0:s.value,a)}})}),c(r,{sm:"2",children:c(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Format",options:x,value:x==null?void 0:x.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.format)),onChange:l=>p("format",l==null?void 0:l.value,a)})}),o(r,{sm:"1",className:"d-flex align-items-center",children:[c(w,{className:"text-truncate text-capitalize align-middle",onClick:l=>{l.preventDefault(),I(a)},children:c(Z,{size:18,className:"text-primary me-50"})}),c(w,{className:"text-truncate text-capitalize align-middle",onClick:l=>{l.preventDefault(),P(a)},children:c(q,{size:18,className:"text-primary me-50"})}),c(w,{className:"text-truncate text-capitalize align-middle",onClick:l=>{l.preventDefault(),z(a)},children:c(J,{size:18,className:"text-danger me-50"})})]})]})),c(g,{children:c(r,{sm:"12",className:"mt-1",children:o("div",{className:"d-flex",children:[c(T,{className:"me-1",color:"success",type:"submit",onClick:e=>{e.preventDefault(),E()},children:"Add Item"}),c(T,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),j()},children:"Update"})]})})})]})]})})})})})};export{se as default};
