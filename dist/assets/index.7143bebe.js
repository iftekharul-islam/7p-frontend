import{r as B,f as F,j as h,p as be,ag as T,aE as Ue,aK as Be,aL as Ie,Y as me,Z as X,a0 as Te,a1 as Pe,dF as Bt,H as le,dG as It,dH as jt,a as yt,dI as Wt,aa as qt,dJ as Ht,dK as $t,S as rt,W as st,L as it,dL as zt,dM as Kt}from"./index.b5767533.js";import{a as ht}from"./App.bf73fcbb.js";import{T as Gt}from"./trash-2.73e48549.js";function Jt(e,i){if(e==null)return{};var r=Yt(e,i),t,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(r[t]=e[t]))}return r}function Yt(e,i){if(e==null)return{};var r={},t=Object.keys(e),n,l;for(l=0;l<t.length;l++)n=t[l],!(i.indexOf(n)>=0)&&(r[n]=e[n]);return r}var je=B.exports.forwardRef(function(e,i){var r=e.color,t=r===void 0?"currentColor":r,n=e.size,l=n===void 0?24:n,c=Jt(e,["color","size"]);return F("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[h("circle",{cx:"12",cy:"12",r:"10"}),h("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),h("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})});je.propTypes={color:be.exports.string,size:be.exports.oneOfType([be.exports.string,be.exports.number])};je.displayName="Info";const Zt=je;var ve=e=>e.type==="checkbox",de=e=>e instanceof Date,I=e=>e==null;const gt=e=>typeof e=="object";var P=e=>!I(e)&&!Array.isArray(e)&&gt(e)&&!de(e),mt=e=>P(e)&&e.target?ve(e.target)?e.target.checked:e.target.value:e,Qt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,i)=>e.has(Qt(i)),Xt=e=>{const i=e.constructor&&e.constructor.prototype;return P(i)&&i.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(r||P(e)))if(i=r?[]:{},!Array.isArray(e)&&!Xt(e))i=e;else for(const t in e)i[t]=Q(e[t]);else return e;return i}var pe=e=>Array.isArray(e)?e.filter(Boolean):[],L=e=>e===void 0,d=(e,i,r)=>{if(!i||!P(e))return r;const t=pe(i.split(/[,[\].]+?/)).reduce((n,l)=>I(n)?n:n[l],e);return L(t)||t===e?L(e[i])?r:e[i]:t};const Ve={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},er=T.createContext(null),qe=()=>T.useContext(er);var pt=(e,i,r,t=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const c=l;return i._proxyFormState[c]!==K.all&&(i._proxyFormState[c]=!t||K.all),r&&(r[c]=!0),e[c]}});return n},z=e=>P(e)&&!Object.keys(e).length,bt=(e,i,r,t)=>{r(e);const{name:n,...l}=e;return z(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(c=>i[c]===(!t||K.all))},xe=e=>Array.isArray(e)?e:[e],xt=(e,i,r)=>r&&i?e===i:!e||!i||e===i||xe(e).some(t=>t&&(t.startsWith(i)||i.startsWith(t)));function He(e){const i=T.useRef(e);i.current=e,T.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function tr(e){const i=qe(),{control:r=i.control,disabled:t,name:n,exact:l}=e||{},[c,m]=T.useState(r._formState),v=T.useRef(!0),_=T.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),C=T.useRef(n);return C.current=n,He({disabled:t,next:V=>v.current&&xt(C.current,V.name,l)&&bt(V,_.current,r._updateFormState)&&m({...r._formState,...V}),subject:r._subjects.state}),T.useEffect(()=>{v.current=!0;const V=r._proxyFormState.isDirty&&r._getDirty();return V!==r._formState.isDirty&&r._subjects.state.next({isDirty:V}),_.current.isValid&&r._updateValid(!0),()=>{v.current=!1}},[r]),pt(c,r,_.current,!1)}var J=e=>typeof e=="string",_t=(e,i,r,t,n)=>J(e)?(t&&i.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),d(r,l))):(t&&(i.watchAll=!0),r);function rr(e){const i=qe(),{control:r=i.control,name:t,defaultValue:n,disabled:l,exact:c}=e||{},m=T.useRef(t);m.current=t,He({disabled:l,subject:r._subjects.values,next:C=>{xt(m.current,C.name,c)&&_(Q(_t(m.current,r._names,C.values||r._formValues,!1,n)))}});const[v,_]=T.useState(r._getWatch(t,n));return T.useEffect(()=>r._removeUnmounted()),v}var $e=e=>/^\w*$/.test(e),Vt=e=>pe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function S(e,i,r){let t=-1;const n=$e(i)?[i]:Vt(i),l=n.length,c=l-1;for(;++t<l;){const m=n[t];let v=r;if(t!==c){const _=e[m];v=P(_)||Array.isArray(_)?_:isNaN(+n[t+1])?{}:[]}e[m]=v,e=e[m]}return e}function sr(e){const i=qe(),{name:r,control:t=i.control,shouldUnregister:n}=e,l=vt(t._names.array,r),c=rr({control:t,name:r,defaultValue:d(t._formValues,r,d(t._defaultValues,r,e.defaultValue)),exact:!0}),m=tr({control:t,name:r}),v=T.useRef(t.register(r,{...e.rules,value:c}));return T.useEffect(()=>{const _=t._options.shouldUnregister||n,C=(V,x)=>{const p=d(t._fields,V);p&&(p._f.mount=x)};if(C(r,!0),_){const V=Q(d(t._options.defaultValues,r));S(t._defaultValues,r,V),L(d(t._formValues,r))&&S(t._formValues,r,V)}return()=>{(l?_&&!t._state.action:_)?t.unregister(r):C(r,!1)}},[r,t,l,n]),{field:{name:r,value:c,onChange:T.useCallback(_=>v.current.onChange({target:{value:mt(_),name:r},type:Ve.CHANGE}),[r]),onBlur:T.useCallback(()=>v.current.onBlur({target:{value:d(t._formValues,r),name:r},type:Ve.BLUR}),[r,t]),ref:_=>{const C=d(t._fields,r);C&&_&&(C._f.ref={focus:()=>_.focus(),select:()=>_.select(),setCustomValidity:V=>_.setCustomValidity(V),reportValidity:()=>_.reportValidity()})}},formState:m,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(m.errors,r)},isDirty:{enumerable:!0,get:()=>!!d(m.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!d(m.touchedFields,r)},error:{enumerable:!0,get:()=>d(m.errors,r)}})}}const ir=e=>e.render(sr(e));var nr=(e,i,r,t,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:n||!0}}:{};const Me=(e,i,r)=>{for(const t of r||Object.keys(e)){const n=d(e,t);if(n){const{_f:l,...c}=n;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else P(c)&&Me(c,i)}}};var nt=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),at=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),ar=(e,i,r)=>{const t=pe(d(e,r));return S(t,"root",i[r]),S(e,r,t),e},fe=e=>typeof e=="boolean",ze=e=>e.type==="file",se=e=>typeof e=="function",Ae=e=>{if(!We)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},_e=e=>J(e),Ke=e=>e.type==="radio",we=e=>e instanceof RegExp;const lt={value:!1,isValid:!1},ot={value:!0,isValid:!0};var At=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!L(e[0].attributes.value)?L(e[0].value)||e[0].value===""?ot:{value:e[0].value,isValid:!0}:ot:lt}return lt};const ut={isValid:!1,value:null};var wt=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,ut):ut;function ct(e,i,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||fe(e)&&!e)return{type:r,message:_e(e)?e:"",ref:i}}var ce=e=>P(e)&&!we(e)?e:{value:e,message:""},dt=async(e,i,r,t,n)=>{const{ref:l,refs:c,required:m,maxLength:v,minLength:_,min:C,max:V,pattern:x,validate:p,name:D,valueAsNumber:j,mount:W,disabled:ee}=e._f,b=d(i,D);if(!W||ee)return{};const q=c?c[0]:l,N=w=>{t&&q.reportValidity&&(q.setCustomValidity(fe(w)?"":w||""),q.reportValidity())},k={},te=Ke(l),re=ve(l),oe=te||re,M=(j||ze(l))&&L(l.value)&&L(b)||Ae(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,ie=nr.bind(null,D,r,k),Y=(w,A,O,H=Z.maxLength,$=Z.minLength)=>{const G=w?A:O;k[D]={type:w?H:$,message:G,ref:l,...ie(w?H:$,G)}};if(n?!Array.isArray(b)||!b.length:m&&(!oe&&(M||I(b))||fe(b)&&!b||re&&!At(c).isValid||te&&!wt(c).isValid)){const{value:w,message:A}=_e(m)?{value:!!m,message:m}:ce(m);if(w&&(k[D]={type:Z.required,message:A,ref:q,...ie(Z.required,A)},!r))return N(A),k}if(!M&&(!I(C)||!I(V))){let w,A;const O=ce(V),H=ce(C);if(!I(b)&&!isNaN(b)){const $=l.valueAsNumber||b&&+b;I(O.value)||(w=$>O.value),I(H.value)||(A=$<H.value)}else{const $=l.valueAsDate||new Date(b),G=he=>new Date(new Date().toDateString()+" "+he),ne=l.type=="time",ye=l.type=="week";J(O.value)&&b&&(w=ne?G(b)>G(O.value):ye?b>O.value:$>new Date(O.value)),J(H.value)&&b&&(A=ne?G(b)<G(H.value):ye?b<H.value:$<new Date(H.value))}if((w||A)&&(Y(!!w,O.message,H.message,Z.max,Z.min),!r))return N(k[D].message),k}if((v||_)&&!M&&(J(b)||n&&Array.isArray(b))){const w=ce(v),A=ce(_),O=!I(w.value)&&b.length>+w.value,H=!I(A.value)&&b.length<+A.value;if((O||H)&&(Y(O,w.message,A.message),!r))return N(k[D].message),k}if(x&&!M&&J(b)){const{value:w,message:A}=ce(x);if(we(w)&&!b.match(w)&&(k[D]={type:Z.pattern,message:A,ref:l,...ie(Z.pattern,A)},!r))return N(A),k}if(p){if(se(p)){const w=await p(b,i),A=ct(w,q);if(A&&(k[D]={...A,...ie(Z.validate,A.message)},!r))return N(A.message),k}else if(P(p)){let w={};for(const A in p){if(!z(w)&&!r)break;const O=ct(await p[A](b,i),q,A);O&&(w={...O,...ie(A,O.message)},N(O.message),r&&(k[D]=w))}if(!z(w)&&(k[D]={ref:q,...w},!r))return k}}return N(!0),k};function lr(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=L(e)?t++:e[i[t++]];return e}function or(e){for(const i in e)if(!L(e[i]))return!1;return!0}function U(e,i){const r=Array.isArray(i)?i:$e(i)?[i]:Vt(i),t=r.length===1?e:lr(e,r),n=r.length-1,l=r[n];return t&&delete t[l],n!==0&&(P(t)&&z(t)||Array.isArray(t)&&or(t))&&U(e,r.slice(0,-1)),e}function Ee(){let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}}var Fe=e=>I(e)||!gt(e);function ae(e,i){if(Fe(e)||Fe(i))return e===i;if(de(e)&&de(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const n of r){const l=e[n];if(!t.includes(n))return!1;if(n!=="ref"){const c=i[n];if(de(l)&&de(c)||P(l)&&P(c)||Array.isArray(l)&&Array.isArray(c)?!ae(l,c):l!==c)return!1}}return!0}var Ft=e=>e.type==="select-multiple",ur=e=>Ke(e)||ve(e),Oe=e=>Ae(e)&&e.isConnected,St=e=>{for(const i in e)if(se(e[i]))return!0;return!1};function Se(e,i={}){const r=Array.isArray(e);if(P(e)||r)for(const t in e)Array.isArray(e[t])||P(e[t])&&!St(e[t])?(i[t]=Array.isArray(e[t])?[]:{},Se(e[t],i[t])):I(e[t])||(i[t]=!0);return i}function Nt(e,i,r){const t=Array.isArray(e);if(P(e)||t)for(const n in e)Array.isArray(e[n])||P(e[n])&&!St(e[n])?L(i)||Fe(r[n])?r[n]=Array.isArray(e[n])?Se(e[n],[]):{...Se(e[n])}:Nt(e[n],I(i)?{}:i[n],r[n]):r[n]=!ae(e[n],i[n]);return r}var Re=(e,i)=>Nt(e,i,Se(i)),kt=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>L(e)?e:i?e===""?NaN:e&&+e:r&&J(e)?new Date(e):t?t(e):e;function Le(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return ze(i)?i.files:Ke(i)?wt(e.refs).value:Ft(i)?[...i.selectedOptions].map(({value:r})=>r):ve(i)?At(e.refs).value:kt(L(i.value)?e.ref.value:i.value,e)}var cr=(e,i,r,t)=>{const n={};for(const l of e){const c=d(i,l);c&&S(n,l,c._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:t}},ge=e=>L(e)?e:we(e)?e.source:P(e)?we(e.value)?e.value.source:e.value:e,dr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ft(e,i,r){const t=d(e,r);if(t||$e(r))return{error:t,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),c=d(i,l),m=d(e,l);if(c&&!Array.isArray(c)&&r!==l)return{name:r};if(m&&m.type)return{name:l,error:m};n.pop()}return{name:r}}var fr=(e,i,r,t,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?t.isOnBlur:n.isOnBlur)?!e:(r?t.isOnChange:n.isOnChange)?e:!0,yr=(e,i)=>!pe(d(e,i)).length&&U(e,i);const hr={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function gr(e={},i){let r={...hr,...e},t={submitCount:0,isDirty:!1,isLoading:se(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},l=P(r.defaultValues)||P(r.values)?Q(r.defaultValues||r.values)||{}:{},c=r.shouldUnregister?{}:Q(l),m={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},_,C=0;const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ee(),array:Ee(),state:Ee()},p=e.resetOptions&&e.resetOptions.keepDirtyValues,D=nt(r.mode),j=nt(r.reValidateMode),W=r.criteriaMode===K.all,ee=s=>a=>{clearTimeout(C),C=setTimeout(s,a)},b=async s=>{if(V.isValid||s){const a=r.resolver?z((await M()).errors):await Y(n,!0);a!==t.isValid&&x.state.next({isValid:a})}},q=s=>V.isValidating&&x.state.next({isValidating:s}),N=(s,a=[],o,y,f=!0,u=!0)=>{if(y&&o){if(m.action=!0,u&&Array.isArray(d(n,s))){const g=o(d(n,s),y.argA,y.argB);f&&S(n,s,g)}if(u&&Array.isArray(d(t.errors,s))){const g=o(d(t.errors,s),y.argA,y.argB);f&&S(t.errors,s,g),yr(t.errors,s)}if(V.touchedFields&&u&&Array.isArray(d(t.touchedFields,s))){const g=o(d(t.touchedFields,s),y.argA,y.argB);f&&S(t.touchedFields,s,g)}V.dirtyFields&&(t.dirtyFields=Re(l,c)),x.state.next({name:s,isDirty:A(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else S(c,s,a)},k=(s,a)=>{S(t.errors,s,a),x.state.next({errors:t.errors})},te=(s,a,o,y)=>{const f=d(n,s);if(f){const u=d(c,s,L(o)?d(l,s):o);L(u)||y&&y.defaultChecked||a?S(c,s,a?u:Le(f._f)):$(s,u),m.mount&&b()}},re=(s,a,o,y,f)=>{let u=!1,g=!1;const E={name:s};if(!o||y){V.isDirty&&(g=t.isDirty,t.isDirty=E.isDirty=A(),u=g!==E.isDirty);const R=ae(d(l,s),a);g=d(t.dirtyFields,s),R?U(t.dirtyFields,s):S(t.dirtyFields,s,!0),E.dirtyFields=t.dirtyFields,u=u||V.dirtyFields&&g!==!R}if(o){const R=d(t.touchedFields,s);R||(S(t.touchedFields,s,o),E.touchedFields=t.touchedFields,u=u||V.touchedFields&&R!==o)}return u&&f&&x.state.next(E),u?E:{}},oe=(s,a,o,y)=>{const f=d(t.errors,s),u=V.isValid&&fe(a)&&t.isValid!==a;if(e.delayError&&o?(_=ee(()=>k(s,o)),_(e.delayError)):(clearTimeout(C),_=null,o?S(t.errors,s,o):U(t.errors,s)),(o?!ae(f,o):f)||!z(y)||u){const g={...y,...u&&fe(a)?{isValid:a}:{},errors:t.errors,name:s};t={...t,...g},x.state.next(g)}q(!1)},M=async s=>r.resolver(c,r.context,cr(s||v.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),ie=async s=>{const{errors:a}=await M();if(s)for(const o of s){const y=d(a,o);y?S(t.errors,o,y):U(t.errors,o)}else t.errors=a;return a},Y=async(s,a,o={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:u,...g}=f;if(u){const E=v.array.has(u.name),R=await dt(f,c,W,r.shouldUseNativeValidation&&!a,E);if(R[u.name]&&(o.valid=!1,a))break;!a&&(d(R,u.name)?E?ar(t.errors,R,u.name):S(t.errors,u.name,R[u.name]):U(t.errors,u.name))}g&&await Y(g,a,o)}}return o.valid},w=()=>{for(const s of v.unMount){const a=d(n,s);a&&(a._f.refs?a._f.refs.every(o=>!Oe(o)):!Oe(a._f.ref))&&Ne(s)}v.unMount=new Set},A=(s,a)=>(s&&a&&S(c,s,a),!ae(Je(),l)),O=(s,a,o)=>_t(s,v,{...m.mount?c:L(a)?l:J(s)?{[s]:a}:a},o,a),H=s=>pe(d(m.mount?c:l,s,e.shouldUnregister?d(l,s,[]):[])),$=(s,a,o={})=>{const y=d(n,s);let f=a;if(y){const u=y._f;u&&(!u.disabled&&S(c,s,kt(a,u)),f=Ae(u.ref)&&I(a)?"":a,Ft(u.ref)?[...u.ref.options].forEach(g=>g.selected=f.includes(g.value)):u.refs?ve(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(E=>E===g.value):f===g.value)):u.refs[0]&&(u.refs[0].checked=!!f):u.refs.forEach(g=>g.checked=g.value===f):ze(u.ref)?u.ref.value="":(u.ref.value=f,u.ref.type||x.values.next({name:s,values:{...c}})))}(o.shouldDirty||o.shouldTouch)&&re(s,f,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&he(s)},G=(s,a,o)=>{for(const y in a){const f=a[y],u=`${s}.${y}`,g=d(n,u);(v.array.has(s)||!Fe(f)||g&&!g._f)&&!de(f)?G(u,f,o):$(u,f,o)}},ne=(s,a,o={})=>{const y=d(n,s),f=v.array.has(s),u=Q(a);S(c,s,u),f?(x.array.next({name:s,values:{...c}}),(V.isDirty||V.dirtyFields)&&o.shouldDirty&&x.state.next({name:s,dirtyFields:Re(l,c),isDirty:A(s,u)})):y&&!y._f&&!I(u)?G(s,u,o):$(s,u,o),at(s,v)&&x.state.next({...t}),x.values.next({name:s,values:{...c}}),!m.mount&&i()},ye=async s=>{const a=s.target;let o=a.name,y=!0;const f=d(n,o),u=()=>a.type?Le(f._f):mt(s);if(f){let g,E;const R=u(),ue=s.type===Ve.BLUR||s.type===Ve.FOCUS_OUT,Pt=!dr(f._f)&&!r.resolver&&!d(t.errors,o)&&!f._f.deps||fr(ue,d(t.touchedFields,o),t.isSubmitted,j,D),De=at(o,v,ue);S(c,o,R),ue?(f._f.onBlur&&f._f.onBlur(s),_&&_(0)):f._f.onChange&&f._f.onChange(s);const Ce=re(o,R,ue,!1),Mt=!z(Ce)||De;if(!ue&&x.values.next({name:o,type:s.type,values:{...c}}),Pt)return V.isValid&&b(),Mt&&x.state.next({name:o,...De?{}:Ce});if(!ue&&De&&x.state.next({...t}),q(!0),r.resolver){const{errors:et}=await M([o]),Ut=ft(t.errors,n,o),tt=ft(et,n,Ut.name||o);g=tt.error,o=tt.name,E=z(et)}else g=(await dt(f,c,W,r.shouldUseNativeValidation))[o],y=isNaN(R)||R===d(c,o,R),y&&(g?E=!1:V.isValid&&(E=await Y(n,!0)));y&&(f._f.deps&&he(f._f.deps),oe(o,E,g,Ce))}},he=async(s,a={})=>{let o,y;const f=xe(s);if(q(!0),r.resolver){const u=await ie(L(s)?s:f);o=z(u),y=s?!f.some(g=>d(u,g)):o}else s?(y=(await Promise.all(f.map(async u=>{const g=d(n,u);return await Y(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!y&&!t.isValid)&&b()):y=o=await Y(n);return x.state.next({...!J(s)||V.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!y&&Me(n,u=>u&&d(t.errors,u),s?f:v.mount),y},Je=s=>{const a={...l,...m.mount?c:{}};return L(s)?a:J(s)?d(a,s):s.map(o=>d(a,o))},Ye=(s,a)=>({invalid:!!d((a||t).errors,s),isDirty:!!d((a||t).dirtyFields,s),isTouched:!!d((a||t).touchedFields,s),error:d((a||t).errors,s)}),Dt=s=>{s&&xe(s).forEach(a=>U(t.errors,a)),x.state.next({errors:s?t.errors:{}})},Ct=(s,a,o)=>{const y=(d(n,s,{_f:{}})._f||{}).ref;S(t.errors,s,{...a,ref:y}),x.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&y&&y.focus&&y.focus()},Et=(s,a)=>se(s)?x.values.subscribe({next:o=>s(O(void 0,a),o)}):O(s,a,!0),Ne=(s,a={})=>{for(const o of s?xe(s):v.mount)v.mount.delete(o),v.array.delete(o),a.keepValue||(U(n,o),U(c,o)),!a.keepError&&U(t.errors,o),!a.keepDirty&&U(t.dirtyFields,o),!a.keepTouched&&U(t.touchedFields,o),!r.shouldUnregister&&!a.keepDefaultValue&&U(l,o);x.values.next({values:{...c}}),x.state.next({...t,...a.keepDirty?{isDirty:A()}:{}}),!a.keepIsValid&&b()},ke=(s,a={})=>{let o=d(n,s);const y=fe(a.disabled);return S(n,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...a}}),v.mount.add(s),o?y&&S(c,s,a.disabled?void 0:d(c,s,Le(o._f))):te(s,!0,a.value),{...y?{disabled:a.disabled}:{},...r.shouldUseNativeValidation?{required:!!a.required,min:ge(a.min),max:ge(a.max),minLength:ge(a.minLength),maxLength:ge(a.maxLength),pattern:ge(a.pattern)}:{},name:s,onChange:ye,onBlur:ye,ref:f=>{if(f){ke(s,a),o=d(n,s);const u=L(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=ur(u),E=o._f.refs||[];if(g?E.find(R=>R===u):u===o._f.ref)return;S(n,s,{_f:{...o._f,...g?{refs:[...E.filter(Oe),u,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),te(s,!1,void 0,u)}else o=d(n,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(vt(v.array,s)&&m.action)&&v.unMount.add(s)}}},Ze=()=>r.shouldFocusError&&Me(n,s=>s&&d(t.errors,s),v.mount),Ot=(s,a)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let y=Q(c);if(x.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:u}=await M();t.errors=f,y=u}else await Y(n);U(t.errors,"root"),z(t.errors)?(x.state.next({errors:{}}),await s(y,o)):(a&&await a({...t.errors},o),Ze(),setTimeout(Ze)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:z(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Rt=(s,a={})=>{d(n,s)&&(L(a.defaultValue)?ne(s,d(l,s)):(ne(s,a.defaultValue),S(l,s,a.defaultValue)),a.keepTouched||U(t.touchedFields,s),a.keepDirty||(U(t.dirtyFields,s),t.isDirty=a.defaultValue?A(s,d(l,s)):A()),a.keepError||(U(t.errors,s),V.isValid&&b()),x.state.next({...t}))},Qe=(s,a={})=>{const o=s||l,y=Q(o),f=s&&!z(s)?y:l;if(a.keepDefaultValues||(l=o),!a.keepValues){if(a.keepDirtyValues||p)for(const u of v.mount)d(t.dirtyFields,u)?S(f,u,d(c,u)):ne(u,d(f,u));else{if(We&&L(s))for(const u of v.mount){const g=d(n,u);if(g&&g._f){const E=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(Ae(E)){const R=E.closest("form");if(R){R.reset();break}}}}n={}}c=e.shouldUnregister?a.keepDefaultValues?Q(l):{}:y,x.array.next({values:{...f}}),x.values.next({values:{...f}})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&i(),m.mount=!V.isValid||!!a.keepIsValid,m.watch=!!e.shouldUnregister,x.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!ae(s,l)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Re(l,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Xe=(s,a)=>Qe(se(s)?s(c):s,a),Lt=(s,a={})=>{const o=d(n,s),y=o&&o._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},Tt=s=>{t={...t,...s}};return se(r.defaultValues)&&r.defaultValues().then(s=>{Xe(s,r.resetOptions),x.state.next({isLoading:!1})}),{control:{register:ke,unregister:Ne,getFieldState:Ye,_executeSchema:M,_getWatch:O,_getDirty:A,_updateValid:b,_removeUnmounted:w,_updateFieldArray:N,_getFieldArray:H,_reset:Qe,_updateFormState:Tt,_subjects:x,_proxyFormState:V,get _fields(){return n},get _formValues(){return c},get _state(){return m},set _state(s){m=s},get _defaultValues(){return l},get _names(){return v},set _names(s){v=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:he,register:ke,handleSubmit:Ot,watch:Et,setValue:ne,getValues:Je,reset:Xe,resetField:Rt,clearErrors:Dt,unregister:Ne,setError:Ct,setFocus:Lt,getFieldState:Ye}}function Ge(e={}){const i=T.useRef(),[r,t]=T.useState({isDirty:!1,isValidating:!1,isLoading:se(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:se(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...gr(e,()=>t(l=>({...l}))),formState:r});const n=i.current.control;return n._options=e,He({subject:n._subjects.state,next:l=>{bt(l,n._proxyFormState,n._updateFormState,!0)&&t({...n._formState})}}),T.useEffect(()=>{e.values&&!ae(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)},[e.values,n]),T.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=pt(r,n),i.current}const mr=({show:e,setShow:i,handleModalClosed:r,onSubmit:t,onReset:n,errors:l})=>{const{control:c,handleSubmit:m}=Ge({defaultValues:{roleName:""}});return h(B.exports.Fragment,{children:F(Ue,{isOpen:e,onClosed:r,toggle:()=>i(!e),className:"modal-dialog-centered modal-lg",children:[h(Be,{className:"bg-transparent",toggle:()=>i(!e)}),F(Ie,{className:"px-5 pb-5",children:[h("div",{className:"text-center mb-4",children:h("h1",{children:"Add Role"})}),F(me,{tag:"form",onSubmit:m(t),children:[F(X,{xs:12,children:[h(Te,{className:"form-label",for:"roleName",children:"Role Name"}),h(ir,{name:"roleName",control:c,render:({field:v})=>h(Pe,{...v,id:"roleName",placeholder:"Enter role name",invalid:l.roleName&&!0})}),l.roleName&&h(Bt,{children:l.roleName.value})]}),F(X,{className:"text-center mt-2",xs:12,children:[h(le,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),h(le,{type:"reset",outline:!0,onClick:n,children:"Discard"})]})]})]})]})})},vr=({show:e,setShow:i,item:r})=>{const t=ht();B.exports.useEffect(()=>{r!=null&&r.id&&(t(It(r.id)),t(jt()))},[r]);const n=yt(p=>p.roles),{reset:l,setValue:c}=Ge({defaultValues:{roleName:""}}),[m,v]=B.exports.useState([]),_=p=>{p.preventDefault();const D={permission:m,id:r.id};t(Ht(D)),i(!1)},C=()=>{i(!1),l({roleName:""})},V=()=>{c("roleName")};B.exports.useEffect(()=>{const p=[];n.allPermission.forEach(D=>{var j;p.push({attach:(j=n==null?void 0:n.role)==null?void 0:j.some(W=>W.id==D.id),permission_id:D.id,data:D})}),v(p)},[n.role]);const x=(p,D)=>{const j=m.map(W=>W.permission_id===(p==null?void 0:p.permission_id)?{permission_id:p==null?void 0:p.permission_id,attach:D,data:p==null?void 0:p.data}:W);v(j)};return h(B.exports.Fragment,{children:F(Ue,{isOpen:e,onClosed:V,toggle:()=>i(!e),className:"modal-dialog-centered modal-lg",children:[h(Be,{className:"bg-transparent",toggle:()=>i(!e)}),F(Ie,{className:"px-5 pb-5",children:[F("div",{className:"text-center",children:[h("h1",{children:r==null?void 0:r.title}),h("p",{children:"Set role permissions"})]}),F(me,{tag:"form",onSubmit:_,children:[F(X,{xs:12,children:[h("h4",{className:"mt-2",children:"Role Permissions"}),h(Wt,{className:"table-flush-spacing",responsive:!0,children:F("tbody",{children:[F("tr",{children:[F("td",{className:"text-nowrap fw-bolder",children:[h("span",{className:"me-50",children:" Administrator Access"}),h(Zt,{size:14,id:"info-tooltip"}),h(qt,{placement:"top",target:"info-tooltip",children:"Allows a full access to the system"})]}),h("td",{children:F("div",{className:"form-check",children:[h(Pe,{type:"checkbox",id:"select-all"}),h(Te,{className:"form-check-label",for:"select-all",children:"Select All"})]})})]}),F("tr",{children:[h("td",{className:"text-nowrap fw-bolder"}),h("td",{children:h("div",{className:"d-flex",children:m==null?void 0:m.map((p,D)=>{var j,W,ee;return F("div",{className:"form-check me-3 me-lg-5 w-100",children:[h(Pe,{type:"checkbox",id:(j=p==null?void 0:p.data)==null?void 0:j.name,onChange:b=>x(p,b.target.checked),checked:p==null?void 0:p.attach}),h(Te,{className:"form-check-label w-100",for:(W=p==null?void 0:p.data)==null?void 0:W.name,children:h("nobr",{children:(ee=p==null?void 0:p.data)==null?void 0:ee.name})})]},D)})})})]})]})})]}),F(X,{className:"text-center mt-2",xs:12,children:[h(le,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),h(le,{type:"reset",outline:!0,onClick:C,children:"Discard"})]})]})]})]})})},pr=()=>{const e=ht(),[i,r]=B.exports.useState(!1),[t,n]=B.exports.useState(!1),[l,c]=B.exports.useState({}),[m,v]=B.exports.useState(!1),[_,C]=B.exports.useState({});B.exports.useEffect(()=>{e($t())},[]);const V=yt(N=>N.roles),{reset:x,setValue:p}=Ge(),[D,j]=B.exports.useState({}),W=async N=>{var k,te,re,oe;if((k=N.roleName)!=null&&k.length){const M=await e(zt({name:N==null?void 0:N.roleName}));(te=M==null?void 0:M.payload)!=null&&te.status?r(!1):j({roleName:{type:"manual",value:(oe=(re=M==null?void 0:M.payload)==null?void 0:re.data)==null?void 0:oe.message}})}else j({roleName:{type:"manual",value:"Please enter a valid role name"}})},ee=N=>{N.preventDefault(),e(Kt(_.id)),v(!m)},b=()=>{r(!1),x({roleName:""})},q=()=>{p("roleName")};return F(B.exports.Fragment,{children:[F(me,{children:[V.data.map(N=>h(X,{xl:4,md:6,children:h(rt,{children:F(st,{children:[h("div",{className:"d-flex justify-content-between"}),F("div",{className:"d-flex justify-content-between align-items-end mt-1 pt-25",children:[F("div",{className:"role-heading",children:[h("h4",{className:"fw-bolder",children:N==null?void 0:N.name}),h(it,{to:"/",className:"role-edit-modal",onClick:k=>{k.preventDefault(),n(!0),c(N)},children:h("small",{className:"fw-bolder",children:"Edit Permission"})})]}),h(it,{to:"",className:"text-body",onClick:k=>{v(!0),C(N),k.preventDefault()},children:h(Gt,{className:"font-medium-5",color:"red"})})]})]})})},N.id)),h(X,{xl:4,md:6,children:h(rt,{children:F(me,{children:[h(X,{sm:3}),h(X,{sm:9,children:F(st,{className:"text-sm-end text-center ps-sm-0",children:[h(le,{color:"primary",className:"text-nowrap mb-1",onClick:()=>{r(!0)},children:"Add New Role"}),h("p",{className:"mb-0",children:"Add a new role, if it does not exist"})]})})]})})})]}),F(Ue,{isOpen:m,onClosed:q,toggle:()=>v(!i),className:"modal-dialog-centered modal-lg",children:[h(Be,{className:"bg-transparent",toggle:()=>v(!m)}),F(Ie,{className:"px-2 pb-2",children:[h("div",{className:"text-center mb-4",children:F("h1",{children:["Are you sure to delete '",_==null?void 0:_.title,"' Role?"]})}),h(me,{tag:"form",onSubmit:ee,children:F(X,{className:"text-center mt-2",xs:12,children:[h(le,{type:"submit",color:"danger",className:"me-1",children:"Confirm"}),h(le,{type:"reset",outline:!0,onClick:()=>v(!m),children:"Cancel"})]})})]})]}),h(mr,{show:i,setShow:r,handleModalClosed:q,onSubmit:W,onReset:b,errors:D}),h(vr,{show:t,setShow:n,item:l})]})},Vr=()=>h("div",{className:"app-user-list",children:F(B.exports.Fragment,{children:[h("h3",{children:"Roles List"}),h("p",{className:"mb-2",children:"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs."}),h(pr,{})]})});export{Vr as default};
