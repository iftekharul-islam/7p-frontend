import{r as e,ao as v,o as ie,j as pe}from"./index.22eb8bd8.js";import{_ as fe,h as de,u as le,a as ce}from"./react-select.esm.579d0190.js";import{_ as n}from"./App.68a66c55.js";var Se=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ve(s){var f=s.defaultOptions,a=f===void 0?!1:f,d=s.cacheOptions,l=d===void 0?!1:d,O=s.loadOptions;s.options;var C=s.isLoading,z=C===void 0?!1:C,L=s.onInputChange,m=s.filterOption,B=m===void 0?null:m,A=fe(s,Se),P=A.inputValue,o=e.exports.useRef(void 0),c=e.exports.useRef(!1),F=e.exports.useState(Array.isArray(a)?a:void 0),V=n(F,2),G=V[0],j=V[1],H=e.exports.useState(typeof P<"u"?P:""),D=n(H,2),E=D[0],_=D[1],J=e.exports.useState(a===!0),R=n(J,2),K=R[0],u=R[1],N=e.exports.useState(void 0),$=n(N,2),h=$[0],x=$[1],Q=e.exports.useState([]),M=n(Q,2),U=M[0],g=M[1],X=e.exports.useState(!1),b=n(X,2),Y=b[0],S=b[1],Z=e.exports.useState({}),q=n(Z,2),i=q[0],w=q[1],k=e.exports.useState(void 0),T=n(k,2),ee=T[0],te=T[1],se=e.exports.useState(void 0),W=n(se,2),ae=W[0],ne=W[1];l!==ae&&(w({}),ne(l)),a!==ee&&(j(Array.isArray(a)?a:void 0),te(a)),e.exports.useEffect(function(){return c.current=!0,function(){c.current=!1}},[]);var I=e.exports.useCallback(function(p,r){if(!O)return r();var t=O(p,r);t&&typeof t.then=="function"&&t.then(r,function(){return r()})},[O]);e.exports.useEffect(function(){a===!0&&I(E,function(p){!c.current||(j(p||[]),u(!!o.current))})},[]);var re=e.exports.useCallback(function(p,r){var t=de(p,r,L);if(!t){o.current=void 0,_(""),x(""),g([]),u(!1),S(!1);return}if(l&&i[t])_(t),x(t),g(i[t]),u(!1),S(!1);else{var ue=o.current={};_(t),u(!0),S(!h),I(t,function(y){!c||ue===o.current&&(o.current=void 0,u(!1),x(t),g(y||[]),S(!1),w(y?v(v({},i),{},ie({},t,y)):i))})}},[l,I,h,i,L]),oe=Y?[]:E&&h?U:G||[];return v(v({},A),{},{options:oe,isLoading:K||z,onInputChange:re,filterOption:B})}var xe=e.exports.forwardRef(function(s,f){var a=ve(s),d=le(a);return pe(ce,{ref:f,...d})});export{xe as A};
