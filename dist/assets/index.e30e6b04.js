import{r as y,f as x,j as e,p as g,k as D,aE as O,a as z,ep as I,Q as P,V as U,X as j,Y as s,$ as p,a0 as i,G as L,eq as T,er as $,es as E}from"./index.6f9bc425.js";import{T as B}from"./trash-2.d3286291.js";import{a as K}from"./App.b6ede6fe.js";function R(l,f){if(l==null)return{};var t=W(l,f),u,a;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(a=0;a<d.length;a++)u=d[a],!(f.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,u)||(t[u]=l[u]))}return t}function W(l,f){if(l==null)return{};var t={},u=Object.keys(l),a,d;for(d=0;d<u.length;d++)a=u[d],!(f.indexOf(a)>=0)&&(t[a]=l[a]);return t}var N=y.exports.forwardRef(function(l,f){var t=l.color,u=t===void 0?"currentColor":t,a=l.size,d=a===void 0?24:a,o=R(l,["color","size"]);return x("svg",{ref:f,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:u,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[e("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),e("polyline",{points:"17 21 17 13 7 13 7 21"}),e("polyline",{points:"7 3 7 8 15 8"})]})});N.propTypes={color:g.exports.string,size:g.exports.oneOfType([g.exports.string,g.exports.number])};N.displayName="Save";const A=N,G=()=>{const l=K();D();const{id:f}=O(),[t,u]=y.exports.useState(null),[a,d]=y.exports.useState(null),o=z(n=>n.stores);y.exports.useEffect(()=>{l(I(f))},[]),y.exports.useEffect(()=>{var n,c;(n=o==null?void 0:o.store)!=null&&n.store_items&&d((c=o==null?void 0:o.store)==null?void 0:c.store_items)},[o==null?void 0:o.store]);const h=(n,c)=>{const r=a==null?void 0:a.map((v,w)=>{var C,k;return c===w?{...v,[(C=n.target)==null?void 0:C.name]:(k=n.target)==null?void 0:k.value}:v});d(r)},m=(n,c)=>{var r,v;u({...t,[(r=n.target)==null?void 0:r.name]:(v=n.target)==null?void 0:v.value})},_=async()=>{var c;const n=await l(T({...t,store_id:(c=o==null?void 0:o.store)==null?void 0:c.store_id,reload_id:f}));n!=null&&n.payload&&u({vendor_sku:"",description:"",parent_sku:"",child_sku:"",url:"",upc:"",custom:"",cost:""})},b=n=>{var c;l($({...n,store_id:(c=o==null?void 0:o.store)==null?void 0:c.store_id,reload_id:f}))},S=n=>{l(E({id:n==null?void 0:n.id,reload_id:f}))};return e(y.exports.Fragment,{children:e(P,{children:x(U,{children:[x(j,{className:"justify-content-between align-items-center",children:[e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Store SKU"})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(p,{children:"Description"})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Cost"})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(p,{children:"Parent SKU"})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(p,{children:"Child SKU"})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"URL"})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"UPC"})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Custom"})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(p,{children:"Action"})})]}),x(j,{className:"justify-content-between align-items-center mt-1",children:[e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"vendor_sku",value:t==null?void 0:t.vendor_sku,onChange:m})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"description",value:t==null?void 0:t.description,onChange:m})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"number",name:"cost",value:t==null?void 0:t.cost,onChange:m})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"parent_sku",value:t==null?void 0:t.parent_sku,onChange:m})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"child_sku",value:t==null?void 0:t.child_sku,onChange:m})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"url",value:t==null?void 0:t.url,onChange:m})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"upc",value:t==null?void 0:t.upc,onChange:m})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"custom",value:t==null?void 0:t.custom,onChange:m})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(L,{color:"primary",className:"btn-icon",onClick:n=>{n.preventDefault(),_()},children:"Add new"})})]}),a==null?void 0:a.map((n,c)=>x(j,{className:"justify-content-between align-items-center mt-1",children:[e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"vendor_sku",value:n==null?void 0:n.vendor_sku,onChange:r=>h(r,c)})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"description",value:n==null?void 0:n.description,onChange:r=>h(r,c)})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"number",name:"cost",value:n==null?void 0:n.cost,onChange:r=>h(r,c)})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"parent_sku",value:n==null?void 0:n.parent_sku,onChange:r=>h(r,c)})}),e(s,{sm:"2",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"child_sku",value:n==null?void 0:n.child_sku,onChange:r=>h(r,c)})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"url",value:n==null?void 0:n.url,onChange:r=>h(r,c)})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"upc",value:n==null?void 0:n.upc,onChange:r=>h(r,c)})}),e(s,{sm:"1",className:"d-flex justify-content-center",children:e(i,{type:"text",name:"custom",value:n==null?void 0:n.custom,onChange:r=>h(r,c)})}),x(s,{sm:"1",className:"d-flex justify-content-center",children:[e(A,{size:20,className:"text-primary me-50",onClick:r=>{r.preventDefault(),b(n)}}),e(B,{size:20,className:"text-danger me-50",onClick:r=>{r.preventDefault(),S(n)}})]})]},c))]})})})};export{G as default};
