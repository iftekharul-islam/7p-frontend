import{r as f,f as c,j as l,p as s}from"./index.22eb8bd8.js";function w(r,i){if(r==null)return{};var n=y(r,i),o,e;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);for(e=0;e<t.length;e++)o=t[e],!(i.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,o)||(n[o]=r[o]))}return n}function y(r,i){if(r==null)return{};var n={},o=Object.keys(r),e,t;for(t=0;t<o.length;t++)e=o[t],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var p=f.exports.forwardRef(function(r,i){var n=r.color,o=n===void 0?"currentColor":n,e=r.size,t=e===void 0?24:e,a=w(r,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[l("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l("polyline",{points:"19 12 12 19 5 12"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="ArrowDown";const v=p;export{v as A};
