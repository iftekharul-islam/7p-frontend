<<<<<<< HEAD:dist/assets/index.56383721.js
import{j as e,r as v,f as h,X as p,Y as c,G as x,ai as C,k as A,a as B,aj as S,Q as O,S as $,V as j,a0 as P,ab as T,ac as w,ad as f,ak as I,N as E,n as z,al as F}from"./index.6f9bc425.js";/* empty css                  *//* empty css                  */import{a as q}from"./App.b6ede6fe.js";/* empty css                                  */import{S as H}from"./react-select.esm.0bde0cc4.js";import"./emotion-memoize.esm.06f0e458.js";const k=({data:i,stocks:u})=>{const o=q();return e(v.exports.Fragment,{children:(i==null?void 0:i.length)>0?h("div",{className:"mx-1",children:[h(p,{children:[e(c,{md:"7",className:"border py-1"}),e(c,{md:"5",className:"border py-1 d-flex justify-content-center",children:"Inventory Quantity"})]}),h(p,{children:[e(c,{md:"1",className:"border py-1",children:e("b",{children:"Stock#"})}),e(c,{md:"2",className:"border py-1",children:e("b",{children:"Batches"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Image"})}),e(c,{md:"3",className:"border py-1",children:e("b",{children:"Description"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"On Hand"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Allocated"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Expected"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Available"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Back Order"})})]}),u==null?void 0:u.map((r,N)=>{var b;if(r!="ToBeAssigned"&&r!=null){const n=i==null?void 0:i.find(d=>(d==null?void 0:d.stock_no_unique)==r),l=i==null?void 0:i.filter(d=>(d==null?void 0:d.stock_no)==r);if(n)return h(p,{children:[e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.stock_no_unique}),e(c,{md:"2",className:"border py-1",children:"Demo"}),e(c,{md:"1",className:"border py-1",children:e("img",{src:n==null?void 0:n.warehouse,alt:"warehouse",height:"50"})}),e(c,{md:"3",className:"border py-1",children:n==null?void 0:n.stock_name_discription}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_on_hand}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_alloc}),h(c,{md:"1",className:"border py-1",children:[n==null?void 0:n.qty_exp,l==null?void 0:l.map((d,m)=>h("div",{children:["ETA: ",d!=null&&d.eta?d==null?void 0:d.eta:"N/A"]},m))]}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_av}),h(c,{md:"1",className:"border py-1",children:[i.reduce((d,m)=>m.stock_no_unique==r?d+m.item_quantity:d,0),(n==null?void 0:n.batch_number)!=0&&e(x,{color:"primary",size:"sm",onClick:o(C({stock_no:r})),children:"Arrived"})]})]},N)}else return((b=i==null?void 0:i.filter(l=>l.stock_no_unique===r))==null?void 0:b.reduce((l,d)=>{const m=d.item_code;return l[m]||(l[m]=[]),l[m].push(d),l},{})).map((l,d)=>{var m,y,g;return h(p,{className:"lines",children:[e(c,{children:r}),e(c,{md:"2",xs:"6",lg:"2",children:i.filter(a=>{var s;return(a==null?void 0:a.stock_no_unique)===r&&(a==null?void 0:a.item_code)===((s=a[0])==null?void 0:s.item_code)}).map(a=>a==null?void 0:a.batch_number).filter(a=>a!=="0").filter((a,s,t)=>t.indexOf(a)===s).length}),e(c,{md:"1",xs:"6",lg:"1",height:"40",children:e("img",{src:(m=l[0])==null?void 0:m.item_thumb,alt:"item_thumbnail",height:"40"})}),e(c,{md:"4",xs:"12",lg:"4",className:"pl-3",children:`${itemCode}
${(y=l[0])==null?void 0:y.item_description}`}),h(c,{md:"2",xs:"6",lg:"1",className:"text-right",children:[l==null?void 0:l.reduce((a,s)=>a+s.item_quantity,0),((g=l[0])==null?void 0:g.batch_number)!="0"&&e(x,{color:"primary",size:"sm",onClick:o(C({item_code:r})),children:"Arrived"})]})]},d)})})]}):e("div",{className:"d-flex justify-content-center",children:"No Back Orders"})})},Y=()=>{var y,g,a;const i=q(),u=A(),o=B(s=>s.backOrders),{allData:r,active:N}=o,b=o==null?void 0:o.searchParams;v.exports.useEffect(()=>{o!=null&&o.params&&i(S())},[o==null?void 0:o.params]);const n=async()=>{u("/back-orders/show")},l=s=>{i(I(s))},d=s=>{N!==s&&i(F(s))},m=({text:s,total:t=null,tab:_})=>e(E,{children:h(z,{active:N===_,onClick:()=>{d(_)},children:[s,t!=null?` (${t}) `:null]})});return e(v.exports.Fragment,{children:h(O,{children:[e($,{children:e("h4",{className:"card-title",children:"Back Orders"})}),h(j,{children:[h(p,{className:"mb-1",children:[e(c,{sm:"3",children:e(P,{placeholder:"Scan",value:b==null?void 0:b.search_for,onChange:s=>{var t;return l({search_for:(t=s==null?void 0:s.target)==null?void 0:t.value})}})}),e(c,{sm:"3",children:e(H,{className:"react-select",classNamePrefix:"select",options:o==null?void 0:o.search_inOptions,value:(y=o==null?void 0:o.search_inOptions)==null?void 0:y.find(s=>(s==null?void 0:s.value)==(b==null?void 0:b.search_in)),onChange:s=>l({search_in:s==null?void 0:s.value})})}),e(c,{sm:"2",children:e(x,{color:"primary",className:"btn-primary",onClick:n,children:"Search"})})]}),h(p,{children:[h(T,{pills:!0,className:"mb-2 orange",children:[e(m,{text:"Backordered Items",total:(g=r==null?void 0:r.batched)==null?void 0:g.length,tab:"summary"}),e(m,{text:"Unbatched Backorders",total:(a=r==null?void 0:r.unbatched)==null?void 0:a.length,tab:"toexports"})]}),h(w,{activeTab:N,children:[e(f,{tabId:"summary",children:e(k,{data:r==null?void 0:r.batched,stocks:r==null?void 0:r.stock_nos})}),e(f,{tabId:"toexports",children:e(k,{data:r==null?void 0:r.unbatched,stocks:r==null?void 0:r.stock_nos})})]})]})]})]})})};export{Y as default};
=======
import{j as e,r as v,f as i,Y as p,Z as c,G as x,aj as C,k as A,a as B,ak as S,Q as O,S as $,V as j,a1 as P,ac as T,ad as w,ae as f,al as I,N as E,n as z,am as F}from"./index.9c541b2f.js";/* empty css                  *//* empty css                  */import{a as q}from"./App.797bd1cf.js";/* empty css                                  */import{S as H}from"./react-select.esm.56852925.js";import"./emotion-memoize.esm.06f0e458.js";const k=({data:h,stocks:u})=>{const o=q();return e(v.exports.Fragment,{children:(h==null?void 0:h.length)>0?i("div",{className:"mx-1",children:[i(p,{children:[e(c,{md:"7",className:"border py-1"}),e(c,{md:"5",className:"border py-1 d-flex justify-content-center",children:"Inventory Quantity"})]}),i(p,{children:[e(c,{md:"1",className:"border py-1",children:e("b",{children:"Stock#"})}),e(c,{md:"2",className:"border py-1",children:e("b",{children:"Batches"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Image"})}),e(c,{md:"3",className:"border py-1",children:e("b",{children:"Description"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"On Hand"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Allocated"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Expected"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Available"})}),e(c,{md:"1",className:"border py-1",children:e("b",{children:"Back Order"})})]}),u==null?void 0:u.map((r,N)=>{var b;if(r!="ToBeAssigned"&&r!=null){const n=h==null?void 0:h.find(d=>(d==null?void 0:d.stock_no_unique)==r),l=h==null?void 0:h.filter(d=>(d==null?void 0:d.stock_no)==r);if(n)return i(p,{children:[e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.stock_no_unique}),e(c,{md:"2",className:"border py-1",children:"Demo"}),e(c,{md:"1",className:"border py-1",children:e("img",{src:n==null?void 0:n.warehouse,alt:"warehouse",height:"50"})}),e(c,{md:"3",className:"border py-1",children:n==null?void 0:n.stock_name_discription}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_on_hand}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_alloc}),i(c,{md:"1",className:"border py-1",children:[n==null?void 0:n.qty_exp,l==null?void 0:l.map((d,m)=>i("div",{children:["ETA: ",d!=null&&d.eta?d==null?void 0:d.eta:"N/A"]},m))]}),e(c,{md:"1",className:"border py-1",children:n==null?void 0:n.qty_av}),i(c,{md:"1",className:"border py-1",children:[h.reduce((d,m)=>m.stock_no_unique==r?d+m.item_quantity:d,0),(n==null?void 0:n.batch_number)!=0&&e(x,{color:"primary",size:"sm",onClick:o(C({stock_no:r})),children:"Arrived"})]})]},N)}else return((b=h==null?void 0:h.filter(l=>l.stock_no_unique===r))==null?void 0:b.reduce((l,d)=>{const m=d.item_code;return l[m]||(l[m]=[]),l[m].push(d),l},{})).map((l,d)=>{var m,y,g;return i(p,{className:"lines",children:[e(c,{children:r}),e(c,{md:"2",xs:"6",lg:"2",children:h.filter(a=>{var s;return(a==null?void 0:a.stock_no_unique)===r&&(a==null?void 0:a.item_code)===((s=a[0])==null?void 0:s.item_code)}).map(a=>a==null?void 0:a.batch_number).filter(a=>a!=="0").filter((a,s,t)=>t.indexOf(a)===s).length}),e(c,{md:"1",xs:"6",lg:"1",height:"40",children:e("img",{src:(m=l[0])==null?void 0:m.item_thumb,alt:"item_thumbnail",height:"40"})}),e(c,{md:"4",xs:"12",lg:"4",className:"pl-3",children:`${itemCode}
${(y=l[0])==null?void 0:y.item_description}`}),i(c,{md:"2",xs:"6",lg:"1",className:"text-right",children:[l==null?void 0:l.reduce((a,s)=>a+s.item_quantity,0),((g=l[0])==null?void 0:g.batch_number)!="0"&&e(x,{color:"primary",size:"sm",onClick:o(C({item_code:r})),children:"Arrived"})]})]},d)})})]}):e("div",{className:"d-flex justify-content-center",children:"No Back Orders"})})},Z=()=>{var y,g,a;const h=q(),u=A(),o=B(s=>s.backOrders),{allData:r,active:N}=o,b=o==null?void 0:o.searchParams;v.exports.useEffect(()=>{o!=null&&o.params&&h(S())},[o==null?void 0:o.params]);const n=async()=>{u("/back-orders/show")},l=s=>{h(I(s))},d=s=>{N!==s&&h(F(s))},m=({text:s,total:t=null,tab:_})=>e(E,{children:i(z,{active:N===_,onClick:()=>{d(_)},children:[s,t!=null?` (${t}) `:null]})});return e(v.exports.Fragment,{children:i(O,{children:[e($,{children:e("h4",{className:"card-title",children:"Back Orders"})}),i(j,{children:[i(p,{className:"mb-1",children:[e(c,{sm:"3",children:e(P,{placeholder:"Scan",value:b==null?void 0:b.search_for,onChange:s=>{var t;return l({search_for:(t=s==null?void 0:s.target)==null?void 0:t.value})}})}),e(c,{sm:"3",children:e(H,{className:"react-select",classNamePrefix:"select",options:o==null?void 0:o.search_inOptions,value:(y=o==null?void 0:o.search_inOptions)==null?void 0:y.find(s=>(s==null?void 0:s.value)==(b==null?void 0:b.search_in)),onChange:s=>l({search_in:s==null?void 0:s.value})})}),e(c,{sm:"2",children:e(x,{color:"primary",className:"btn-primary",onClick:n,children:"Search"})})]}),i(p,{children:[i(T,{pills:!0,className:"mb-2 orange",children:[e(m,{text:"Backordered Items",total:(g=r==null?void 0:r.batched)==null?void 0:g.length,tab:"summary"}),e(m,{text:"Unbatched Backorders",total:(a=r==null?void 0:r.unbatched)==null?void 0:a.length,tab:"toexports"})]}),i(w,{activeTab:N,children:[e(f,{tabId:"summary",children:e(k,{data:r==null?void 0:r.batched,stocks:r==null?void 0:r.stock_nos})}),e(f,{tabId:"toexports",children:e(k,{data:r==null?void 0:r.unbatched,stocks:r==null?void 0:r.stock_nos})})]})]})]})]})})};export{Z as default};
>>>>>>> d7ff11093482d87991464f2d74a50cf8e5c9e48c:dist/assets/index.9fc5c2b4.js
