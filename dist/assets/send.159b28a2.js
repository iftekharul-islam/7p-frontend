import{r as f,f as c,j as a,p as s}from"./index.545d534b.js";function y(e,i){if(e==null)return{};var n=g(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function g(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var p=f.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,l=y(e,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),a("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="Send";const v=p;export{v as S};
