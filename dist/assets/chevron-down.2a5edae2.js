import{r as f,j as l,p as s}from"./index.545d534b.js";function c(r,i){if(r==null)return{};var n=v(r,i),o,e;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);for(e=0;e<t.length;e++)o=t[e],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,o)||(n[o]=r[o]))}return n}function v(r,i){if(r==null)return{};var n={},o=Object.keys(r),e,t;for(t=0;t<o.length;t++)e=o[t],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var p=f.exports.forwardRef(function(r,i){var n=r.color,o=n===void 0?"currentColor":n,e=r.size,t=e===void 0?24:e,a=c(r,["color","size"]);return l("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:l("polyline",{points:"6 9 12 15 18 9"})})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="ChevronDown";const u=p;export{u as C};
