import{r as d,k as b,j as l,Y as p,$ as v,Z as n,f as a,Q as x,S as g,T as k,V as C,a0 as r,a1 as s,G as w,ez as P}from"./index.22eb8bd8.js";import{a as A}from"./App.68a66c55.js";const z=()=>{const[e,u]=d.exports.useState(null),[i,f]=d.exports.useState(null),_=A(),y=b(),o=c=>{var m,t;u({...e,[(m=c.target)==null?void 0:m.name]:(t=c.target)==null?void 0:t.value})},N=async()=>{var m,t,h;const c=await _(P(e));(m=c==null?void 0:c.payload)!=null&&m.status?y("/vendor"):f((h=(t=c==null?void 0:c.payload)==null?void 0:t.data)==null?void 0:h.errors)};return l(d.exports.Fragment,{children:l(p,{children:l(v,{children:l(n,{sm:"6",children:a(x,{children:[l(g,{children:l(k,{tag:"h4",children:"New Vendor"})}),a(C,{children:[a(p,{children:[a(n,{sm:"12",className:"mb-1",children:[l(r,{className:"form-label",for:"image",children:"Image"}),l(s,{type:"file",name:"image",id:"image",placeholder:"image",value:e==null?void 0:e.image,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"vendor_name",children:"Name"}),l(s,{type:"text",name:"vendor_name",id:"vendor_name",placeholder:"Name",value:e==null?void 0:e.vendor_name,onChange:o}),l("small",{className:"text-danger",children:i==null?void 0:i.vendor_name})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"zip_code",children:"Zip Code"}),l(s,{type:"text",name:"zip_code",id:"zip_code",placeholder:"Zip Code",value:e==null?void 0:e.zip_code,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"state",children:"State"}),l(s,{type:"text",name:"state",id:"state",placeholder:"State",value:e==null?void 0:e.state,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"country",children:"Country"}),l(s,{type:"text",name:"country",id:"country",placeholder:"Country",value:e==null?void 0:e.country,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"email",children:"Email"}),l(s,{type:"text",name:"email",id:"email",placeholder:"Email",value:e==null?void 0:e.email,onChange:o}),l("small",{className:"text-danger",children:i==null?void 0:i.email})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"phone_number",children:"Phone Number"}),l(s,{type:"text",name:"phone_number",id:"phone_number",placeholder:"Phone Number",value:e==null?void 0:e.phone_number,onChange:o}),l("small",{className:"text-danger",children:i==null?void 0:i.phone_number})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"contact_person_name",children:"Contact Person Name"}),l(s,{type:"text",name:"contact_person_name",id:"contact_person_name",placeholder:"Contact Person Name",value:e==null?void 0:e.contact_person_name,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"link",children:"Account Link"}),l(s,{type:"text",name:"link",id:"link",placeholder:"Account Link",value:e==null?void 0:e.link,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"login_id",children:"Account Login"}),l(s,{type:"text",name:"login_id",id:"login_id",placeholder:"Account Login",value:e==null?void 0:e.login_id,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"password",children:"Account Password"}),l(s,{type:"text",name:"password",id:"password",placeholder:"Account Password",value:e==null?void 0:e.password,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"bank_info",children:"Bank Info"}),l(s,{type:"text",name:"bank_info",id:"bank_info",placeholder:"Bank Info",value:e==null?void 0:e.bank_info,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"paypal_info",children:"Paypal Info"}),l(s,{type:"text",name:"paypal_info",id:"paypal_info",placeholder:"Paypal Info",value:e==null?void 0:e.paypal_info,onChange:o})]}),a(n,{sm:"12",children:[l(r,{className:"form-label",for:"notes",children:"Notes"}),l(s,{type:"textarea",name:"notes",id:"notes",placeholder:"Notes",value:e==null?void 0:e.notes,onChange:o})]})]}),l(p,{children:l(n,{sm:"12",className:"mt-1",children:l("div",{className:"d-flex",children:l(w,{className:"me-1",color:"primary",type:"submit",onClick:c=>{c.preventDefault(),N()},children:"Submit"})})})})]})]})})})})})};export{z as default};
