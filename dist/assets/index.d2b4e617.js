import{aG as L,r as u,k as U,a as V,dB as $,j as l,X as g,Z as G,Y as r,f as o,Q as H,S as R,T as W,V as X,$ as f,a0 as h,L as w,G as T,dC as Q}from"./index.73b35bb3.js";import{a as Y,s as b,A as Z}from"./App.e1420fea.js";import{S as C}from"./react-select.esm.6f9f2c43.js";import{A as q}from"./arrow-down.9bffa7f9.js";import{T as J}from"./trash-2.eb190569.js";import"./emotion-memoize.esm.06f0e458.js";const se=()=>{const{id:v}=L(),[n,y]=u.exports.useState(null),[t,d]=u.exports.useState(null),[K,A]=u.exports.useState(null),S=Y(),F=U(),{template:i,repeatedOption:k,delimitedOption:N,formatOption:x,catOption:_}=V(e=>e.templates);u.exports.useEffect(()=>{v&&S($(v))},[v]),u.exports.useEffect(()=>{i&&(y(i),d(i==null?void 0:i.options))},[i]);const m=e=>{var a,c;y({...n,[(a=e.target)==null?void 0:a.name]:(c=e.target)==null?void 0:c.value})},p=(e,a,c)=>{const s=t==null?void 0:t.map((D,B)=>B==c?{...D,[e]:a}:D);d(s)},z=e=>{const a=t==null?void 0:t.filter((c,s)=>s!=e);d(a)},E=()=>{const e=[...t];e==null||e.push({format:"1",line_item_field:"1",option_category:"FIX",option_name:"",value:"",width:""}),d(e)},I=e=>{const a=[];t==null||t.forEach((c,s)=>{s+1==e?(a==null||a.push(t[s+1]),a==null||a.push(t[s])):s!=e&&(a==null||a.push(t[s]))}),d(a)},P=e=>{const a=[];t==null||t.forEach((c,s)=>{s==e?(a==null||a.push(t[s+1]),a==null||a.push(t[s])):s-1!=e&&(a==null||a.push(t[s]))}),d(a)},j=async()=>{var a,c,s;const e=await S(Q({id:v,data:{...n,options:t}}));(a=e==null?void 0:e.payload)!=null&&a.status?F("/template"):A((s=(c=e==null?void 0:e.payload)==null?void 0:c.data)==null?void 0:s.errors)};return l(u.exports.Fragment,{children:l(g,{children:l(G,{children:l(r,{sm:"12",children:o(H,{children:[l(R,{children:l(W,{tag:"h4",children:"Edit Section"})}),o(X,{children:[o(g,{children:[o(r,{sm:"12",children:[l(f,{className:"form-label",for:"template_name",children:"Template Name"}),l(h,{type:"text",name:"template_name",id:"template_name",placeholder:"Template Name",value:n==null?void 0:n.template_name,onChange:m})]}),o(r,{sm:"6",children:[l(f,{className:"form-label",for:"repeated_fields",children:"Repeated Fields"}),l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Fields",options:k,value:k==null?void 0:k.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.repeated_fields)),onChange:e=>m({target:{name:"repeated_fields",value:e==null?void 0:e.value}})})]}),o(r,{sm:"6",children:[l(f,{className:"form-label",for:"delimited_char",children:"Delimited char"}),l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Delimited char",options:N,value:N==null?void 0:N.find(e=>(e==null?void 0:e.value)===(n==null?void 0:n.delimited_char)),onChange:e=>m({target:{name:"delimited_char",value:e==null?void 0:e.value}})})]}),l(r,{sm:"3"}),o(r,{sm:"6",className:"d-flex justify-content-between mt-1",children:[o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"show_header",checked:n==null?void 0:n.show_header,onChange:e=>{var a;return m({target:{name:"show_header",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Show Header"})]}),o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"break_kits",checked:n==null?void 0:n.break_kits,onChange:e=>{var a;return m({target:{name:"break_kits",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Break kits"})]}),o("div",{className:"form-check form-check-success",children:[l(h,{type:"checkbox",name:"is_active",checked:n==null?void 0:n.is_active,onChange:e=>{var a;return m({target:{name:"is_active",value:(a=e==null?void 0:e.target)==null?void 0:a.checked}})}}),l(f,{className:"form-check-label",for:"success-checkbox",children:"Active"})]})]}),l(r,{sm:"3"})]}),o(g,{className:"rounded bg-secondary p-2 mt-1 text-uppercase",children:[l(r,{sm:"1 text-light fw-bolder ",children:"Line"}),l(r,{sm:"2 text-light fw-bolder",children:"Name"}),l(r,{sm:"2 text-light fw-bolder",children:"Cat"}),l(r,{sm:"2 text-light fw-bolder",children:"Value"}),l(r,{sm:"2 text-light fw-bolder",children:"Width"}),l(r,{sm:"2 text-light fw-bolder",children:"Format"}),l(r,{sm:"1 text-light fw-bolder",children:"Action"})]}),t==null?void 0:t.map((e,a)=>o(g,{className:"pt-1",children:[l(r,{sm:"1",className:"d-flex align-items-center",children:l("div",{className:"form-check form-check-success",children:l(h,{type:"checkbox",name:"is_active",checked:parseInt(e==null?void 0:e.line_item_field),onChange:c=>{var s;return p("line_item_field",(s=c==null?void 0:c.target)!=null&&s.checked?"1":"0",a)}})})}),l(r,{sm:"2",children:l(h,{type:"text",name:"option_name",id:"option_name",placeholder:"Option Name",value:e==null?void 0:e.option_name,onChange:c=>{var s;return p("option_name",(s=c==null?void 0:c.target)==null?void 0:s.value,a)}})}),l(r,{sm:"2",children:l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Category",options:_,value:_==null?void 0:_.find(c=>(c==null?void 0:c.value)===(e==null?void 0:e.option_category)),onChange:c=>p("option_category",c==null?void 0:c.value,a)})}),l(r,{sm:"2",children:l(h,{type:"text",name:"value",id:"value",placeholder:"Value",value:e==null?void 0:e.value,onChange:c=>{var s;return p("value",(s=c==null?void 0:c.target)==null?void 0:s.value,a)}})}),l(r,{sm:"2",children:l(h,{type:"text",name:"width",id:"width",placeholder:"Width",value:e==null?void 0:e.width,onChange:c=>{var s;return p("width",(s=c==null?void 0:c.target)==null?void 0:s.value,a)}})}),l(r,{sm:"2",children:l(C,{className:"react-select",classNamePrefix:"select",theme:b,placeholder:"Select Format",options:x,value:x==null?void 0:x.find(c=>(c==null?void 0:c.value)===(e==null?void 0:e.format)),onChange:c=>p("format",c==null?void 0:c.value,a)})}),o(r,{sm:"1",className:"d-flex align-items-center",children:[l(w,{className:"text-truncate text-capitalize align-middle",onClick:c=>{c.preventDefault(),I(a)},children:l(Z,{size:18,className:"text-primary me-50"})}),l(w,{className:"text-truncate text-capitalize align-middle",onClick:c=>{c.preventDefault(),P(a)},children:l(q,{size:18,className:"text-primary me-50"})}),l(w,{className:"text-truncate text-capitalize align-middle",onClick:c=>{c.preventDefault(),z(a)},children:l(J,{size:18,className:"text-danger me-50"})})]})]})),l(g,{children:l(r,{sm:"12",className:"mt-1",children:o("div",{className:"d-flex",children:[l(T,{className:"me-1",color:"success",type:"submit",onClick:e=>{e.preventDefault(),E()},children:"Add Item"}),l(T,{className:"me-1",color:"primary",type:"submit",onClick:e=>{e.preventDefault(),j()},children:"Update"})]})})})]})]})})})})})};export{se as default};