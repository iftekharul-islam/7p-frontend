import{k as M,r as u,a as Q,ei as R,ej as j,ek as z,el as U,j as s,Z as V,f as n,Q as T,G as w,S as Z,T as $,V as G,X as t,Y as c,$ as i,a0 as o,I as E}from"./index.6f9bc425.js";import{a as H,s as p}from"./App.b6ede6fe.js";import{S as m}from"./react-select.esm.0bde0cc4.js";import"./emotion-memoize.esm.06f0e458.js";const W=()=>{var b,N,x,g,C,y,S,O,P,k,I,A,B,L,q;const f=H(),F=M(),[e,_]=u.exports.useState(null),a=Q(l=>l.stores);u.exports.useEffect(()=>{f(R()),f(j()),f(z()),f(U())},[]);const r=l=>{var d,D;_({...e,[(d=l.target)==null?void 0:d.name]:(D=l.target)==null?void 0:D.value})},h=(l,d)=>{_({...e,[l]:d})},v=async()=>{var d;const l=await f(AddStore(e));(d=l==null?void 0:l.payload)!=null&&d.status&&F("/stores")};return s(u.exports.Fragment,{children:s(V,{children:n(T,{children:[n("div",{children:[s("input",{type:"file",id:"fileInput"}),s("div",{className:"d-flex",children:s(w,{className:"me-1",color:"primary",type:"submit",onClick:l=>{l.preventDefault(),v()},children:"Submit"})})]}),s(Z,{children:s($,{tag:"h4",children:"New Store"})}),n(G,{children:[n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"store_name",children:"Name"}),s(o,{type:"text",name:"store_name",id:"store_name",placeholder:"Name",value:e==null?void 0:e.store_name,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"store_id",children:"ID"}),s(o,{type:"text",name:"store_id",id:"store_id",placeholder:"ID",value:e==null?void 0:e.store_id,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"nameVertical",children:"Company"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Company",options:a==null?void 0:a.companyOptions,value:(b=a==null?void 0:a.companyOptions)==null?void 0:b.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.company)),onChange:l=>h("company",l.value),isClearable:!1})]})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"email",children:"E-mail"}),s(o,{type:"text",name:"email",id:"email",placeholder:"E-mail",value:e==null?void 0:e.email,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"class_name",children:"Class Name"}),s(o,{type:"text",name:"class_name",id:"class_name",placeholder:"Class Name",value:e==null?void 0:e.class_name,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"input",children:"Data Input"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Data Input",options:a==null?void 0:a.inputOptions,value:(N=a==null?void 0:a.inputOptions)==null?void 0:N.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.input)),onChange:l=>h("input",l.value),isClearable:!1})]})]}),s("hr",{}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"change_items",children:"Order Items Changeable"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select...",options:a==null?void 0:a.changeItemsOptions,value:(x=a==null?void 0:a.changeItemsOptions)==null?void 0:x.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.change_items)),onChange:l=>h("change_items",l.value),isClearable:!1})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"batch",children:"Batch Items"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Batch Items",options:a==null?void 0:a.batchOptions,value:(g=a==null?void 0:a.batchOptions)==null?void 0:g.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.batch)),onChange:l=>h("batch",l.value),isClearable:!1})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"qc",children:"Quality Control"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Quality Control",options:a==null?void 0:a.qcOptions,value:(C=a==null?void 0:a.qcOptions)==null?void 0:C.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.qc)),onChange:l=>h("qc",l.value),isClearable:!1,isDisabled:!0})]})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"confirm",children:"Order Confirmation"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Order Confirmation",options:a==null?void 0:a.confirmOptions,value:(y=a==null?void 0:a.confirmOptions)==null?void 0:y.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.confirm)),onChange:l=>h("confirm",l.value),isClearable:!1})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"ship",children:"Shipping Notification"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Shipping Notification",options:a==null?void 0:a.confirmOptions,value:(S=a==null?void 0:a.confirmOptions)==null?void 0:S.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.ship)),onChange:l=>h("ship",l.value),isClearable:!1})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"qb_export",children:"QuickBooks Export"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select QuickBooks Export",options:a==null?void 0:a.qbOptions,value:(O=a==null?void 0:a.qbOptions)==null?void 0:O.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.qb_export)),onChange:l=>h("qb_export",l.value),isClearable:!1})]})]}),s("hr",{}),(e==null?void 0:e.confirm)>1&&n(E,{children:[s(t,{children:n(c,{sm:"12",children:[s(i,{className:"form-label",for:"ship_method",children:"Notification Banner Image URL"}),s(o,{type:"text",name:"ship_banner_image",id:"ship_banner_image",placeholder:"Notification Banner Image URL",value:e==null?void 0:e.ship_banner_image,onChange:r})]})}),s(t,{children:n(c,{sm:"12",children:[s(i,{className:"form-label",for:"ship_banner_url",children:"Banner Image Link"}),s(o,{type:"text",name:"ship_banner_url",id:"ship_banner_url",placeholder:"Banner Image Link",value:e==null?void 0:e.ship_banner_url,onChange:r})]})}),s("hr",{})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"ship_name",children:"Return Address"}),s(o,{type:"text",name:"ship_name",id:"ship_name",placeholder:"Return Address",value:e==null?void 0:e.ship_name,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"validate_addresses",children:"Validate Addresses"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Validate Addresses",options:a==null?void 0:a.multiOptions,value:(P=a==null?void 0:a.multiOptions)==null?void 0:P.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.validate_addresses)),onChange:l=>h("validate_addresses",l.value),isClearable:!1})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"multi_carton",children:"Multiple Package Shipping"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Multiple Package Shipping",options:a==null?void 0:a.multiOptions,value:(k=a==null?void 0:a.multiOptions)==null?void 0:k.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.multi_carton)),onChange:l=>h("multi_carton",l.value),isClearable:!1})]})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"address1",children:"Address 1"}),s(o,{type:"text",name:"address1",id:"address1",placeholder:"Address 1",value:e==null?void 0:e.address1,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"change_method",children:"Change Shipping Method"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Change Shipping Method",options:a==null?void 0:a.multiOptions,value:(I=a==null?void 0:a.multiOptions)==null?void 0:I.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.change_method)),onChange:l=>h("change_method",l.value),isClearable:!1})]}),n(c,{sm:"4",className:"",children:[s(i,{className:"form-label",for:"ups_type",children:"UPS"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select UPS",options:a==null?void 0:a.upsOptions,value:(A=a==null?void 0:a.upsOptions)==null?void 0:A.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.ups_type)),onChange:l=>h("ups_type",l.value),isClearable:!1})]})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"address2",children:"Address 2"}),s(o,{type:"text",name:"address2",id:"address2",placeholder:"Address 2",value:e==null?void 0:e.address2,onChange:r})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"ship_label",children:"Additional Shipping Label"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Additional Shipping Label",options:a==null?void 0:a.multiOptions,value:(B=a==null?void 0:a.multiOptions)==null?void 0:B.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.ship_label)),onChange:l=>h("ship_label",l.value),isClearable:!1})]}),s(c,{sm:"4",children:s(o,{type:"text",name:"ups_account",id:"ups_account",placeholder:"Leave blank to use house account",value:e==null?void 0:e.ups_account,onChange:r})})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"city_state_zip",children:"City/State/Zip"}),n(t,{children:[s(c,{sm:"6",children:s(o,{type:"text",name:"city",id:"city",placeholder:"City",value:e==null?void 0:e.city,onChange:r})}),s(c,{sm:"3",children:s(o,{type:"text",name:"state",id:"state",placeholder:"State",value:e==null?void 0:e.state,onChange:r})}),s(c,{sm:"3",children:s(o,{type:"text",name:"zip",id:"zip",placeholder:"Zip",value:e==null?void 0:e.zip,onChange:r})})]})]}),n(c,{sm:"4",children:[s(i,{className:"form-label",for:"packing_list",children:"Packing List"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select Packing List",options:a==null?void 0:a.listOptions,value:(L=a==null?void 0:a.listOptions)==null?void 0:L.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.packing_list)),onChange:l=>h("packing_list",l.value),isClearable:!1})]}),n(c,{sm:"4",className:"",children:[s(i,{className:"form-label",for:"fedex_type",children:"FedEx"}),s(m,{className:"react-select",classNamePrefix:"select",theme:p,placeholder:"Select FedEx",options:a==null?void 0:a.upsOptions,value:(q=a==null?void 0:a.upsOptions)==null?void 0:q.find(l=>(l==null?void 0:l.value)===(e==null?void 0:e.fedex_type)),onChange:l=>h("fedex_type",l.value),isClearable:!1})]})]}),n(t,{children:[n(c,{sm:"4",children:[s(i,{className:"form-label",for:"phone",children:"Phone Number"}),s(o,{type:"text",name:"phone",id:"phone",placeholder:"Phone Number",value:e==null?void 0:e.phone,onChange:r})]}),s(c,{sm:"4",children:" "}),s(c,{sm:"4",children:n(t,{children:[s(c,{sm:"12",children:s(o,{type:"text",name:"fedex_account",id:"fedex_account",placeholder:(e==null?void 0:e.fedex_type)=="P"?"Account":"Leave blank to use house account",value:e==null?void 0:e.fedex_account,onChange:r})}),(e==null?void 0:e.fedex_type)=="P"&&n(E,{children:[s(c,{sm:"12",children:s(o,{type:"text",name:"fedex_key",id:"fedex_pfedex_keyassword",placeholder:"Key",value:e==null?void 0:e.fedex_key,onChange:r})}),s(c,{sm:"12",children:s(o,{type:"text",name:"fedex_password",id:"fedex_password",placeholder:"Password",value:e==null?void 0:e.fedex_password,onChange:r})}),s(c,{sm:"12",children:s(o,{type:"text",name:"fedex_meter",id:"fedex_meter",placeholder:"Meter",value:e==null?void 0:e.fedex_meter,onChange:r})})]})]})})]}),s(t,{children:s(c,{sm:"12",className:"mt-1",children:s("div",{className:"d-flex",children:s(w,{className:"me-1",color:"primary",type:"submit",onClick:l=>{l.preventDefault(),v()},children:"Submit"})})})})]})]})})})};export{W as default};
