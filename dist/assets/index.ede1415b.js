import{a as W,r as Z,eq as X,j as d,f as o,Q as i,S as t,T as m,V as rr,Y as dr,Z as a,G as or,L as nr}from"./index.22eb8bd8.js";/* empty css                  */import{a as ar}from"./App.68a66c55.js";/* empty css                                  */import{h as lr}from"./moment.4d75c86c.js";const pr=()=>{var s,c,h;const z=ar(),n=W(r=>r.unbatchableItems);return Z.exports.useEffect(()=>{z(X())},[]),d("div",{className:"app-user-list",children:d(Z.exports.Fragment,{children:o(i,{children:[d(t,{children:d(m,{tag:"h4",children:"Unbatchable Items"})}),d(rr,{children:((s=n==null?void 0:n.data)==null?void 0:s.length)>0?o("div",{children:[o("h6",{children:[(c=n==null?void 0:n.data)==null?void 0:c.length," Items found"]}),(h=n==null?void 0:n.data)==null?void 0:h.map((r,J)=>{var u,_,p,e,v,f,b,N,g,S,x,I,C,O,Y,k,y,D,T,U,j,q,F,K,R,w,A,B,E,L,M,Q,$,G,H;return console.log("\u{1F680} ~ file: index.js:31 ~ {store?.data?.map ~ item:",r),o(dr,{children:[o(a,{sm:"2",className:"border",children:[d("div",{children:r==null?void 0:r.hold}),(r==null?void 0:r.parameter_option)&&o("span",{children:[d("div",{children:"Child SKU doen not exist in 5P"}),d(or,{color:"primary",children:"Add Child SKU"})]}),(r==null?void 0:r.route)&&d("div",{children:"Needs Route"}),(r==null?void 0:r.stock_no)&&d("div",{children:"Needs Stock Number"}),(r==null?void 0:r.qty_av)&&d("div",{children:"Insufficient Inventory"})]}),o(a,{sm:"2",className:"border",children:[d("div",{children:d("strong",{children:d("u",{children:(p=(_=(u=r==null?void 0:r.item)==null?void 0:u.order)==null?void 0:_.customer)!=null&&p.ship_full_name?(f=(v=(e=r==null?void 0:r.item)==null?void 0:e.order)==null?void 0:v.customer)==null?void 0:f.ship_full_name:(g=(N=(b=r==null?void 0:r.item)==null?void 0:b.order)==null?void 0:N.customer)==null?void 0:g.bill_full_name})})}),o("div",{children:["Item# ",(S=r==null?void 0:r.item)==null?void 0:S.item_table_id]}),o("div",{children:["Order#",d(nr,{to:`/customer-order-edit/${(x=r==null?void 0:r.item)==null?void 0:x.order_5p}`,children:(C=(I=r==null?void 0:r.item)==null?void 0:I.order)==null?void 0:C.short_order})]}),((O=r==null?void 0:r.item)==null?void 0:O.store_id)!="52053152"&&d("div",{children:(Y=r==null?void 0:r.item)!=null&&Y.store_id?(y=(k=r==null?void 0:r.item)==null?void 0:k.store)==null?void 0:y.store_name:`STORE: ${(D=r==null?void 0:r.item)==null?void 0:D.store_id} NOT FOUND`}),d("div",{children:lr((U=(T=r==null?void 0:r.item)==null?void 0:T.order)==null?void 0:U.order_date).format("MM/DD/YYYY")})]}),d(a,{sm:"1",className:"border",children:d("img",{src:(j=r==null?void 0:r.item)==null?void 0:j.item_thumb,width:70,height:70})}),o(a,{sm:"2",className:"border",children:[d("div",{children:(q=r==null?void 0:r.item)==null?void 0:q.item_description}),o("div",{children:["SKU: ",(F=r==null?void 0:r.item)==null?void 0:F.child_sku]}),o("div",{children:["QTY: ",(K=r==null?void 0:r.item)==null?void 0:K.item_quantity]})]}),d(a,{sm:"3",className:"border",children:r==null?void 0:r.item_option}),o(a,{sm:"2",className:"border",children:[o("div",{children:["Order Status:",(w=(R=n==null?void 0:n.statusOptions)==null?void 0:R.find(l=>{var P,V;return(l==null?void 0:l.value)==((V=(P=r==null?void 0:r.item)==null?void 0:P.order)==null?void 0:V.order_status)}))==null?void 0:w.label]}),o("div",{children:["Item Status: ",(A=r==null?void 0:r.item)==null?void 0:A.item_status]}),((E=(B=r==null?void 0:r.item)==null?void 0:B.order)==null?void 0:E.coupon_id)&&d("div",{children:(M=(L=r==null?void 0:r.item)==null?void 0:L.order)==null?void 0:M.coupon_id}),(($=(Q=r==null?void 0:r.item)==null?void 0:Q.order)==null?void 0:$.promotion_id)&&d("div",{children:(H=(G=r==null?void 0:r.item)==null?void 0:G.order)==null?void 0:H.promotion_id})]})]},J)})]}):d("h6",{children:"No Items found"})})]})})})};export{pr as default};