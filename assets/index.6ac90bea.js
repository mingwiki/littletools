import{a0 as i,q as v,r as a,s as b,a2 as r,w as l}from"./index.4142054c.js";import{Q as w,T as Q}from"./index.6d2b9fb0.js";import{B as c,S}from"./index.9d64378a.js";import"./transButton.76dc7e72.js";import"./TextArea.2c4781b1.js";const{Title:k,Paragraph:H,Text:u,Link:E}=Q,B=i.div`
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
`,T=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,j=i.div`
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
`,q=i.div`
  border: 2px dashed;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`,D=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,I=i.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
`,J=v(()=>{const{QrcodeStore:x}=a.exports.useContext(b),{links:o,setLinks:s,clear:L,uploadFromQrcode:y,queryQRcode:f}=x,[g,C]=a.exports.useState([]),[F,p]=a.exports.useState(!1),d=async()=>{const e=await f();e&&C(e)};return a.exports.useEffect(()=>{document.title="\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177",d()},[]),r(I,{children:[r(T,{children:[o.map((e,n)=>r(B,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),l(R,{placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u6216\u6587\u5B57",value:e,onChange:t=>{const h=[...o];h[n]=t.target.value,p(!1),s(h)}}),r(j,{children:[l(c,{type:"primary",onClick:()=>{const t=[...o];t.splice(n,1),t.length===0&&t.push(""),s(t)},children:"-"}),n===o.length-1?l(c,{type:"primary",onClick:()=>{const t=[...o];t.push(""),s(t)},children:"+"}):null]})]},n)),l(c,{type:"primary",style:{color:"white",backgroundColor:"#74b816",border:"none"},onClick:()=>{o.filter(e=>e!=="").length>0&&(y(o.filter(e=>e!=="")),p(!0)),d()},children:"\u751F\u6210\u4E8C\u7EF4\u7801"}),l(k,{children:"\u5386\u53F2\u8BB0\u5F55"}),g.map((e,n)=>r(S,{children:[r(u,{children:["by ",e.nickname]}),r(u,{children:["at: ",new Date(e.update_time).toLocaleString()]}),r(E,{onClick:()=>{const t=[...o];t.push(e.url),s(t)},children:["( ",e.url," )"]})]},n))]}),l(W,{children:o.map((e,n)=>r(D,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),l(q,{children:F&&e?l(w,{value:e.trim(),size:200}):"\u5728\u6B64\u9884\u89C8\u4E8C\u7EF4\u7801"})]},n))})]})});export{J as default};
