import{r as f,f as c,j as p,p as s}from"./index.22eb8bd8.js";function v(r,n){if(r==null)return{};var i=d(r,n),e,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(t=0;t<o.length;t++)e=o[t],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,e)||(i[e]=r[e]))}return i}function d(r,n){if(r==null)return{};var i={},e=Object.keys(r),t,o;for(o=0;o<e.length;o++)t=e[o],!(n.indexOf(t)>=0)&&(i[t]=r[t]);return i}var a=f.exports.forwardRef(function(r,n){var i=r.color,e=i===void 0?"currentColor":i,t=r.size,o=t===void 0?24:t,l=v(r,["color","size"]);return c("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[p("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),p("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})});a.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};a.displayName="Edit";const u=a;export{u as E};
