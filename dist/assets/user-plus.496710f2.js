import{r as c,f,j as s,p}from"./index.3c92940a.js";function y(r,n){if(r==null)return{};var i=u(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function u(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var l=c.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,a=y(r,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[s("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),s("circle",{cx:"8.5",cy:"7",r:"4"}),s("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),s("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]})});l.propTypes={color:p.exports.string,size:p.exports.oneOfType([p.exports.string,p.exports.number])};l.displayName="UserPlus";const v=l;export{v as U};
