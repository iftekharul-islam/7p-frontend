import{r as l,f as c,j as a,p as s}from"./index.b5767533.js";function y(e,i){if(e==null)return{};var n=u(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function u(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var p=l.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,f=y(e,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...f,children:[a("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),a("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="EyeOff";const x=p;export{x as E};
