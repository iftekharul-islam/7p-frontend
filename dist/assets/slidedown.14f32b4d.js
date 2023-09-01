import{p as $,j as ee,r as te}from"./index.b5767533.js";const x=g=>{const{count:w,tag:m,children:T,...O}=g,p=m,u=[];for(let f=0;f<w;f++)u.push(T(f));return ee(p,{...O,children:u})};x.propTypes={count:$.exports.number.isRequired,tag:$.exports.string.isRequired};x.defaultProps={tag:"div"};var re={},k={exports:{}};(function(g){var w,m,T,O,p,u,f,y,P,F,A,G,B,C,I,q,V,K,E,U,z,H,J,Q,W,X,Y,Z,L;(function(c){var M=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof this=="object"?this:{};c(N(M,N(g.exports)));function N(e,t){return e!==M&&(typeof Object.create=="function"?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(r,n){return e[r]=t?t(r,n):n}}})(function(c){var M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])};w=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");M(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)},m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},O=function(e,t,r,n){var i=arguments.length,a=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},p=function(e,t){return function(r,n){t(r,n,e)}},u=function(e,t,r,n,i,a){function o(D){if(D!==void 0&&typeof D!="function")throw new TypeError("Function expected");return D}for(var l=n.kind,v=l==="getter"?"get":l==="setter"?"set":"value",s=!t&&e?n.static?e:e.prototype:null,d=t||(s?Object.getOwnPropertyDescriptor(s,n.name):{}),_,h=!1,b=r.length-1;b>=0;b--){var R={};for(var j in n)R[j]=j==="access"?{}:n[j];for(var j in n.access)R.access[j]=n.access[j];R.addInitializer=function(D){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(o(D||null))};var S=(0,r[b])(l==="accessor"?{get:d.get,set:d.set}:d[v],R);if(l==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(_=o(S.get))&&(d.get=_),(_=o(S.set))&&(d.set=_),(_=o(S.init))&&i.push(_)}else(_=o(S))&&(l==="field"?i.push(_):d[v]=_)}s&&Object.defineProperty(s,n.name,d),h=!0},f=function(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0},y=function(e){return typeof e=="symbol"?e:"".concat(e)},P=function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})},F=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)},A=function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function l(d){try{s(n.next(d))}catch(_){o(_)}}function v(d){try{s(n.throw(d))}catch(_){o(_)}}function s(d){d.done?a(d.value):i(d.value).then(l,v)}s((n=n.apply(e,t||[])).next())})},G=function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(s){return function(d){return v([s,d])}}function v(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(r=0)),r;)try{if(n=1,i&&(a=s[0]&2?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[s[0]&2,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(d){s=[6,d],i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},B=function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&L(t,e,r)},L=Object.create?function(e,t,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]},C=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},I=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(l){o={error:l}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a},q=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(I(arguments[t]));return e},V=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var a=arguments[t],o=0,l=a.length;o<l;o++,i++)n[i]=a[o];return n},K=function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},E=function(e){return this instanceof E?(this.v=e,this):new E(e)},U=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,a=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(h){n[h]&&(i[h]=function(b){return new Promise(function(R,j){a.push([h,b,R,j])>1||l(h,b)})})}function l(h,b){try{v(n[h](b))}catch(R){_(a[0][3],R)}}function v(h){h.value instanceof E?Promise.resolve(h.value.v).then(s,d):_(a[0][2],h)}function s(h){l("next",h)}function d(h){l("throw",h)}function _(h,b){h(b),a.shift(),a.length&&l(a[0][0],a[0][1])}},z=function(e){var t,r;return t={},n("next"),n("throw",function(i){throw i}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(i,a){t[i]=e[i]?function(o){return(r=!r)?{value:E(e[i](o)),done:!1}:a?a(o):o}:a}},H=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof C=="function"?C(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(a){r[a]=e[a]&&function(o){return new Promise(function(l,v){o=e[a](o),i(l,v,o.done,o.value)})}}function i(a,o,l,v){Promise.resolve(v).then(function(s){a({value:s,done:l})},o)}},J=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var N=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};Q=function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&L(t,e,r);return N(t,e),t},W=function(e){return e&&e.__esModule?e:{default:e}},X=function(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)},Y=function(e,t,r,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(e,r):i?i.value=r:t.set(e,r),r},Z=function(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)},c("__extends",w),c("__assign",m),c("__rest",T),c("__decorate",O),c("__param",p),c("__esDecorate",u),c("__runInitializers",f),c("__propKey",y),c("__setFunctionName",P),c("__metadata",F),c("__awaiter",A),c("__generator",G),c("__exportStar",B),c("__createBinding",L),c("__values",C),c("__read",I),c("__spread",q),c("__spreadArrays",V),c("__spreadArray",K),c("__await",E),c("__asyncGenerator",U),c("__asyncDelegator",z),c("__asyncValues",H),c("__makeTemplateObject",J),c("__importStar",Q),c("__importDefault",W),c("__classPrivateFieldGet",X),c("__classPrivateFieldSet",Y),c("__classPrivateFieldIn",Z)})})(k);(function(g){Object.defineProperty(g,"__esModule",{value:!0}),g.SlideDown=void 0;var w=k.exports,m=(0,w.__importStar)(te.exports),T=function(O){(0,w.__extends)(p,O);function p(u){var f=O.call(this,u)||this;return f.outerRef=null,f.handleRef=function(y){if(f.outerRef=y,f.props.forwardedRef)if(typeof f.props.forwardedRef=="function")f.props.forwardedRef(y);else if(typeof f.props.forwardedRef=="object"){var P=f.props.forwardedRef;P.current=y}else throw new Error("Invalid forwardedRef ".concat(f.props.forwardedRef))},f.handleTransitionEnd=function(y){y.target===f.outerRef&&y.propertyName==="height"&&(f.state.childrenLeaving?f.setState({children:null,childrenLeaving:!1},function(){return f.endTransition()}):f.endTransition())},f.state={children:u.children,childrenLeaving:!1},f}return p.prototype.componentDidMount=function(){this.outerRef&&(this.props.closed||!this.props.children?(this.outerRef.classList.add("closed"),this.outerRef.style.height="0px"):this.props.transitionOnAppear?this.startTransition("0px"):this.outerRef.style.height="auto")},p.prototype.getSnapshotBeforeUpdate=function(){return this.outerRef?this.outerRef.getBoundingClientRect().height+"px":null},p.getDerivedStateFromProps=function(u,f){return u.children?{children:u.children,childrenLeaving:!1}:f.children?{children:f.children,childrenLeaving:!0}:null},p.prototype.componentDidUpdate=function(u,f,y){this.outerRef&&this.startTransition(y)},p.prototype.startTransition=function(u){var f="0px";!this.props.closed&&!this.state.childrenLeaving&&this.state.children&&(this.outerRef.classList.remove("closed"),this.outerRef.style.height="auto",f=getComputedStyle(this.outerRef).height),parseFloat(f).toFixed(2)!==parseFloat(u).toFixed(2)&&(this.outerRef.classList.add("transitioning"),this.outerRef.style.height=u,this.outerRef.offsetHeight,this.outerRef.style.transitionProperty="height",this.outerRef.style.height=f)},p.prototype.endTransition=function(){this.outerRef.classList.remove("transitioning"),this.outerRef.style.transitionProperty="none",this.outerRef.style.height=this.props.closed?"0px":"auto",(this.props.closed||!this.state.children)&&this.outerRef.classList.add("closed")},p.prototype.render=function(){var u=this.props,f=u.as,y=f===void 0?"div":f;u.children;var P=u.className;u.closed,u.transitionOnAppear,u.forwardedRef;var F=(0,w.__rest)(u,["as","children","className","closed","transitionOnAppear","forwardedRef"]),A=P?"react-slidedown "+P:"react-slidedown";return m.default.createElement(y,(0,w.__assign)({ref:this.handleRef,className:A,onTransitionEnd:this.handleTransitionEnd},F),this.state.children)},p.defaultProps={transitionOnAppear:!0,closed:!1},p}(m.Component);g.SlideDown=(0,m.forwardRef)(function(O,p){return m.default.createElement(T,(0,w.__assign)({},O,{forwardedRef:p}))}),g.default=g.SlideDown})(re);export{x as R,re as s};
