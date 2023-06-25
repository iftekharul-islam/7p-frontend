import{r as p,j as a,p as s,f as y,a0 as B,a3 as I,c as m,a1 as P,a4 as T}from"./index.db14b012.js";import{E as $}from"./eye.a5415a78.js";import{E as N}from"./eye-off.b95f2355.js";function F(e,n){if(e==null)return{};var i=L(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function L(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var u=p.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,l=F(e,["color","size"]);return a("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:a("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})});u.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};u.displayName="Facebook";const H=u;function E(e,n){if(e==null)return{};var i=W(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function W(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var h=p.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,l=E(e,["color","size"]);return a("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:a("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})});h.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};h.displayName="GitHub";const R=h;function C(e,n){if(e==null)return{};var i=S(e,n),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(i[t]=e[t]))}return i}function S(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var d=p.exports.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,o=r===void 0?24:r,l=C(e,["color","size"]);return a("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:a("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})});d.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};d.displayName="Twitter";const V=d,O=p.exports.forwardRef((e,n)=>{const{label:i,hideIcon:t,showIcon:r,visible:o,className:l,htmlFor:c,placeholder:x,iconSize:v,inputClassName:b,invalid:g,...k}=e,[f,j]=p.exports.useState(o),z=()=>{const w=v||14;return f===!1?t||a($,{size:w}):r||a(N,{size:w})};return y(p.exports.Fragment,{children:[i?a(B,{className:"form-label",for:c,children:i}):null,y(I,{className:m({[l]:l,"is-invalid":g}),children:[a(P,{ref:n,invalid:g,type:f===!1?"password":"text",placeholder:x||"\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",className:m({[b]:b}),...i&&c?{id:c}:{},...k}),a(T,{className:"cursor-pointer",onClick:()=>j(!f),children:z()})]})]})});O.propTypes={invalid:s.exports.bool,hideIcon:s.exports.node,showIcon:s.exports.node,visible:s.exports.bool,className:s.exports.string,placeholder:s.exports.string,iconSize:s.exports.number,inputClassName:s.exports.string,label(e,n){if(e[n]&&e.htmlFor==="undefined")throw new Error("htmlFor prop is required when label prop is present")},htmlFor(e,n){if(e[n]&&e.label==="undefined")throw new Error("label prop is required when htmlFor prop is present")}};O.defaultProps={visible:!1};export{H as F,R as G,O as I,V as T};
