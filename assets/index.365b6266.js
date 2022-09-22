import{a2 as i,v as F,r as c,w as b,k as r,j as l}from"./index.6d8c0639.js";import{Q as w,T as k}from"./index.715ef84a.js";import{B as a,S as Q}from"./index.2a25a4ba.js";import"./transButton.61883223.js";import"./TextArea.b65b0e93.js";const{Title:S,Paragraph:G,Text:u,Link:E}=k,B=i.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,R=i.input`
  width: 100%;
  &:invalid {
    background-color: red;
  }
`,m=i(u)`
  border-bottom: 1px solid lightblue;
  min-width: 50px;
`,j=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,T=i.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
`,W=i.div`
  height: 100%;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`,D=i.div`
  border: 2px dashed;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`,I=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,L=i.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
`,H=F(()=>{const{QrcodeStore:x}=c.exports.useContext(b),{links:o,setLinks:s,uploadFromQrcode:y,queryQRcode:f}=x,[g,C]=c.exports.useState([]),[v,p]=c.exports.useState(!1),d=async()=>{const e=await f();e&&C(e)};return c.exports.useEffect(()=>{document.title="\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177",d()},[]),r(L,{children:[r(j,{children:[o.map((e,n)=>r(B,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),l(R,{placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u6216\u6587\u5B57",value:e,onChange:t=>{const h=[...o];h[n]=t.target.value,p(!1),s(h)}}),r(T,{children:[l(a,{type:"primary",onClick:()=>{const t=[...o];t.splice(n,1),t.length===0&&t.push(""),s(t)},children:"-"}),n===o.length-1?l(a,{type:"primary",onClick:()=>{const t=[...o];t.push(""),s(t)},children:"+"}):null]})]},n)),l(a,{type:"primary",style:{color:"white",backgroundColor:"#74b816",border:"none"},onClick:()=>{o.filter(e=>e!=="").length>0&&(y(o.filter(e=>e!=="")),p(!0)),d()},children:"\u751F\u6210\u4E8C\u7EF4\u7801"}),l(S,{children:"\u5386\u53F2\u8BB0\u5F55"}),g.map((e,n)=>r(Q,{children:[r(u,{children:["by ",e.nickname]}),r(u,{children:["at: ",new Date(e.update_time).toLocaleString()]}),r(E,{onClick:()=>{const t=[...o];t.push(e.url),s(t)},children:["( ",e.url," )"]})]},n))]}),l(W,{children:o.map((e,n)=>r(I,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),l(D,{children:v&&e?l(w,{value:e.trim(),size:200}):"\u5728\u6B64\u9884\u89C8\u4E8C\u7EF4\u7801"})]},n))})]})});export{H as default};
