import{aN as B,r as b,k as U,a as K,aW as j,aZ as Y,j as l,Y as O,$ as W,Z as m,f as y,Q as G,S as q,T as Q,V,a0 as N,a1 as I,G as X,a_ as Z}from"./index.db14b012.js";import{O as H,D as E,L as $,M as w,R as z,S as J,r as ee,d as te}from"./react-draft-wysiwyg.34c21578.js";import{a as re}from"./App.c9615b80.js";function R(e,t,r){for(var a=e.text,n=e.characterMeta,i=t.length,o=r.length,s=[],u=n.slice(0,0),f=0,p=a.indexOf(t);p!==-1;)s.push(a.slice(f,p)+r),u=u.concat(n.slice(f,p),ae(n.slice(p,p+1),o)),f=p+i,p=a.indexOf(t,f);return s.push(a.slice(f)),u=u.concat(n.slice(f)),{text:s.join(""),characterMeta:u}}function ae(e,t){for(var r=e.slice(0,0);t-- >0;)r=r.concat(e);return r}var h={UNSTYLED:"unstyled",HEADER_ONE:"header-one",HEADER_TWO:"header-two",HEADER_THREE:"header-three",HEADER_FOUR:"header-four",HEADER_FIVE:"header-five",HEADER_SIX:"header-six",UNORDERED_LIST_ITEM:"unordered-list-item",ORDERED_LIST_ITEM:"ordered-list-item",BLOCKQUOTE:"blockquote",PULLQUOTE:"pullquote",CODE:"code-block",ATOMIC:"atomic"},A={LINK:"LINK",IMAGE:"IMAGE",EMBED:"embed"},L={BOLD:"BOLD",CODE:"CODE",ITALIC:"ITALIC",STRIKETHROUGH:"STRIKETHROUGH",UNDERLINE:"UNDERLINE"};new H;var ne=1,ie=3,se={a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,var:1,video:1,wbr:1,acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1},oe={area:1,base:1,br:1,col:1,colgroup:1,command:1,dl:1,embed:1,head:1,hgroup:1,hr:1,iframe:1,img:1,input:1,keygen:1,link:1,meta:1,ol:1,optgroup:1,option:1,param:1,script:1,select:1,source:1,style:1,table:1,tbody:1,textarea:1,tfoot:1,thead:1,title:1,tr:1,track:1,ul:1,wbr:1,basefont:1,dialog:1,dir:1,isindex:1},ce={img:1};function D(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(r){return typeof r}:D=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},D(e)}function C(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r}function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C(r,!0).forEach(function(a){T(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function pe(e,t,r){return t&&M(e.prototype,t),r&&M(e,r),e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var fe=/^data:/i,he=H(),de=null,Ee=new E.ContentBlock({key:E.genKey(),text:"",type:h.UNSTYLED,characterList:$(),depth:0}),me=/(\r\n|\r|\n)/g,v="\r",ye="\u200B",ve=/^data-([a-z0-9-]+)$/,x={a:{href:"url",rel:"rel",target:"target",title:"title"},img:{src:"src",alt:"alt",width:"width",height:"height"}},P=function(t,r){var a={};if(x.hasOwnProperty(t))for(var n=x[t],i=0;i<r.attributes.length;i++){var o=r.attributes[i],s=o.name,u=o.value;if(typeof u=="string"){var f=u;if(n.hasOwnProperty(s)){var p=n[s];a[p]=f}else ve.test(s)&&(a[s]=f)}}return a},F={a:function(t,r,a){var n=P(r,a);if(Ie(n.url))return t.createEntity(A.LINK,n)},img:function(t,r,a){var n=P(r,a);if(n.src!=null)return t.createEntity(A.IMAGE,n)}},ge=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ue(this,e),T(this,"contentStateForEntities",void 0),T(this,"blockStack",void 0),T(this,"blockList",void 0),T(this,"depth",void 0),T(this,"options",void 0),T(this,"inlineCreators",{Style:function(a){function n(i){return a.apply(this,arguments)}return n.toString=function(){return a.toString()},n}(function(a){return{type:"STYLE",style:a}}),Entity:function(n,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"MUTABLE";return{type:"ENTITY",entityKey:t.createEntity(n,Ne(i),o)}}}),this.options=r,this.contentStateForEntities=E.ContentState.createFromBlockArray([]),this.blockStack=[],this.blockList=[],this.depth=0}return pe(e,[{key:"process",value:function(r){this.processBlockElement(r);var a=[];return this.blockList.forEach(function(n){var i=ke(n.textFragments),o=i.text,s=i.characterMeta,u=!1;if(o===v&&(u=!0,o=""),n.tagName==="pre"){var f=Te(o,s);o=f.text,s=f.characterMeta}else{var p=Oe(o,s);o=p.text,s=p.characterMeta}o=o.split(v).join(`
`),(o.length||u)&&a.push(new E.ContentBlock({key:E.genKey(),text:o,type:n.type,characterList:s.toList(),depth:n.depth,data:n.data?w(n.data):w()}))}),a.length||(a=[Ee]),E.ContentState.createFromBlockArray(a,this.contentStateForEntities.getEntityMap())}},{key:"getBlockTypeFromTagName",value:function(r){var a=this.options.blockTypes;if(a&&a[r])return a[r];switch(r){case"li":{var n=this.blockStack.slice(-1)[0];return n.tagName==="ol"?h.ORDERED_LIST_ITEM:h.UNORDERED_LIST_ITEM}case"blockquote":return h.BLOCKQUOTE;case"h1":return h.HEADER_ONE;case"h2":return h.HEADER_TWO;case"h3":return h.HEADER_THREE;case"h4":return h.HEADER_FOUR;case"h5":return h.HEADER_FIVE;case"h6":return h.HEADER_SIX;case"pre":return h.CODE;case"figure":return h.ATOMIC;default:return h.UNSTYLED}}},{key:"processBlockElement",value:function(r){if(!!r){var a=this.options.customBlockFn,n=r.nodeName.toLowerCase(),i,o;if(a){var s=a(r);s!=null&&(i=s.type,o=s.data)}var u=!0;if(i==null&&(u=!1,i=this.getBlockTypeFromTagName(n)),i===h.CODE){var f=r.getAttribute("data-language");f&&(o=le({},o,{language:f}))}var p=Le(i),k=!oe.hasOwnProperty(n);if(!u&&!De(i)){var S=this.blockStack.slice(-1)[0];S&&(i=S.type)}var c={tagName:n,textFragments:[],type:i,styleStack:[he],entityStack:[de],depth:p?this.depth:0,data:o};k&&(this.blockList.push(c),p&&(this.depth+=1)),this.blockStack.push(c),r.childNodes!=null&&Array.from(r.childNodes).forEach(this.processNode,this),this.blockStack.pop(),k&&p&&(this.depth-=1)}}},{key:"processInlineElement",value:function(r){var a=r.nodeName.toLowerCase();if(a==="br"){this.processText(v);return}var n=this.blockStack.slice(-1)[0],i=n.styleStack.slice(-1)[0],o=n.entityStack.slice(-1)[0],s=this.options.customInlineFn,u=s?s(r,this.inlineCreators):null;if(u!=null)switch(u.type){case"STYLE":{i=i.add(u.style);break}case"ENTITY":{o=u.entityKey;break}}else i=_e(i,a,this.options.elementStyles),F.hasOwnProperty(a)&&(o=F[a](this,a,r)||o);n.styleStack.push(i),n.entityStack.push(o),r.childNodes!=null&&Array.from(r.childNodes).forEach(this.processNode,this),ce.hasOwnProperty(a)&&this.processText("\xA0"),n.entityStack.pop(),n.styleStack.pop()}},{key:"processTextNode",value:function(r){var a=r.nodeValue;a=a.replace(me,`
`),a=a.split(ye).join(v),this.processText(a)}},{key:"processText",value:function(r){var a=this.blockStack.slice(-1)[0],n=a.styleStack.slice(-1)[0],i=a.entityStack.slice(-1)[0],o=E.CharacterMetadata.create({style:n,entity:i}),s=z(o,r.length);a.textFragments.push({text:r,characterMeta:s})}},{key:"processNode",value:function(r){if(r.nodeType===ne){var a=r,n=a.nodeName.toLowerCase();se.hasOwnProperty(n)?this.processInlineElement(a):this.processBlockElement(a)}else r.nodeType===ie&&this.processTextNode(r)}},{key:"createEntity",value:function(r,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"MUTABLE";return this.contentStateForEntities=this.contentStateForEntities.createEntity(r,n,a),this.contentStateForEntities.getLastCreatedEntityKey()}}]),e}();function Te(e,t){return e.charAt(0)===`
`&&(e=e.slice(1),t=t.slice(1)),{text:e,characterMeta:t}}function be(e,t){for(;e.charAt(0)===" ";)e=e.slice(1),t=t.slice(1);return{text:e,characterMeta:t}}function Se(e,t){for(;e.slice(-1)===" ";)e=e.slice(0,-1),t=t.slice(0,-1);return{text:e,characterMeta:t}}function Oe(e,t){e=e.replace(/[ \t\n]/g," ");var r=be(e,t);e=r.text,t=r.characterMeta;var a=Se(e,t);e=a.text,t=a.characterMeta;for(var n=e.length;n--;)e.charAt(n)===" "&&e.charAt(n-1)===" "&&(e=e.slice(0,n)+e.slice(n+1),t=t.slice(0,n).concat(t.slice(n+1)));var i=R({text:e,characterMeta:t},v+" ",v);e=i.text,t=i.characterMeta;var o=R({text:e,characterMeta:t}," "+v,v);return e=o.text,t=o.characterMeta,{text:e,characterMeta:t}}function Le(e){switch(e){case h.UNORDERED_LIST_ITEM:case h.ORDERED_LIST_ITEM:return!0;default:return!1}}function ke(e){var t="",r=J();return e.forEach(function(a){t=t+a.text,r=r.concat(a.characterMeta)}),{text:t,characterMeta:r}}function _e(e,t,r){switch(t){case"b":case"strong":return e.add(L.BOLD);case"i":case"em":return e.add(L.ITALIC);case"u":case"ins":return e.add(L.UNDERLINE);case"code":return e.add(L.CODE);case"s":case"del":return e.add(L.STRIKETHROUGH);default:return r&&r[t]?e.add(r[t]):e}}function De(e){return e!==h.UNSTYLED}function Ne(e){var t={};if(e!==null&&D(e)==="object"&&!Array.isArray(e))for(var r=e,a=0,n=Object.keys(r);a<n.length;a++){var i=n[a],o=r[i];typeof o=="string"&&(t[i]=o)}return t}function Ie(e){return!(e==null||e.match(fe))}function we(e,t){return new ge(t).process(e)}function Re(e){var t;if(typeof DOMParser<"u"){var r=new DOMParser;t=r.parseFromString(e,"text/html")}else t=document.implementation.createHTMLDocument(""),t.documentElement&&(t.documentElement.innerHTML=e);return t.body||t.createElement("body")}function Ae(e,t){if(e==null)return{};var r=Ce(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function Ce(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Me={};function xe(e,t){var r=t||Me,a=r.parser,n=Ae(r,["parser"]);a==null&&(a=Re);var i=a(e);return we(i,n)}const Be=()=>{var S;const{id:e}=B(),[t,r]=b.exports.useState(null),[a,n]=b.exports.useState(null),i=re(),o=U(),s=K(c=>c.emailTemplate),[u,f]=b.exports.useState(E.EditorState.createEmpty());b.exports.useEffect(()=>{i(j()),e&&i(Y(e))},[e]),b.exports.useEffect(()=>{var c,d;if(s!=null&&s.template&&(r(s==null?void 0:s.template),(c=s==null?void 0:s.template)!=null&&c.message)){const g=xe((d=s==null?void 0:s.template)==null?void 0:d.message),_=E.EditorState.createWithContent(g);f(_)}},[s==null?void 0:s.template]);const p=c=>{var d,g;r({...t,[(d=c.target)==null?void 0:d.name]:(g=c.target)==null?void 0:g.value})},k=async()=>{var d,g,_;const c=await i(Z({id:e,data:t}));(d=c==null?void 0:c.payload)!=null&&d.status?o("/email-template"):n((_=(g=c==null?void 0:c.payload)==null?void 0:g.data)==null?void 0:_.errors)};return l(b.exports.Fragment,{children:l(O,{children:l(W,{children:l(m,{sm:"12",children:y(G,{children:[l(q,{children:l(Q,{tag:"h4",children:"Edit Email Template"})}),l(V,{children:y(O,{children:[y(m,{sm:"5",children:[y(O,{children:[y(m,{sm:"12",children:[l(N,{className:"form-label",for:"message_type",children:"Message type"}),l(I,{type:"text",name:"message_type",id:"message_type",placeholder:"Enter Message Type",value:t==null?void 0:t.message_type,onChange:p}),l("small",{className:"text-danger",children:a==null?void 0:a.message_type})]}),y(m,{sm:"12",children:[l(N,{className:"form-label",for:"message_title",children:"Message subject"}),l(I,{type:"text",name:"message_title",id:"message_title",placeholder:"Enter Message Subject",value:t==null?void 0:t.message_title,onChange:p})]}),y(m,{sm:"12",children:[l(N,{className:"form-label",for:"message",children:"Message template"}),l(ee.exports.Editor,{editorState:u,onEditorStateChange:c=>{f(c),p({target:{name:"message",value:te(E.convertToRaw(c==null?void 0:c.getCurrentContent()))}})},placeholder:"Enter Message template"})]})]}),l(O,{children:l(m,{sm:"12",className:"mt-1",children:l("div",{className:"d-flex",children:l(X,{className:"me-1",color:"primary",type:"submit",onClick:c=>{c.preventDefault(),k()},children:"Submit"})})})})]}),l(m,{sm:"7",children:y(O,{children:[l(m,{sm:"12",children:l("h4",{children:"email template keywords"})}),(S=s==null?void 0:s.emailTemplateKeywords)==null?void 0:S.map((c,d)=>l(m,{sm:"6",children:l("p",{children:c},d)}))]})})]})})]})})})})})};export{Be as default};
