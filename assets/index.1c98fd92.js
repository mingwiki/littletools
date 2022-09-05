import{s as u,o as v,r as s,c as k,j as i,al as S,a as r}from"./index.6494fcbd.js";import{Q as B}from"./index.734cae2f.js";import{B as a}from"./button.a910ee79.js";import{S as Q}from"./index.088781d8.js";import{T as R}from"./index.e65eda2d.js";import"./index.7088435e.js";import"./transButton.33d358a4.js";import"./KeyCode.bb3c3291.js";import"./TextArea.3e56c1aa.js";const{Title:T,Paragraph:V,Text:c,Link:j}=R,D=u.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,W=u.input`
  width: 100%;
  &:invalid {
    background-color: red;
  }
`,m=u(c)`
  border-bottom: 1px solid lightblue;
  min-width: 50px;
`,A=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,I=u.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
`,L=u.div`
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
`,q=u.div`
  border: 2px dashed;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`,H=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,z=u.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
`,X=v(()=>{const{HeaderStore:f,QrcodeStore:x}=s.exports.useContext(k),{setHeaders:y}=f,{links:o,setLinks:l,clear:g,uploadFromQrcode:C,queryQRcode:F}=x,[E,b]=s.exports.useState([]),[w,p]=s.exports.useState(!1),d=async()=>{const e=await F();e&&b(e)};return s.exports.useEffect(()=>{document.title="\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177",y({ghost:!1,onBack:()=>window==null?void 0:window.history.back(),title:"No. 2",subTitle:"\u4E8C\u7EF4\u7801\u5FEB\u901F\u751F\u6210\u67E5\u8BE2\u5DE5\u5177",extra:[i(a,{danger:!0,onClick:()=>{g(),S.warning({description:"\u9875\u9762\u6570\u636E\u5DF2\u5168\u90E8\u6E05\u9664"})},children:"\u6E05\u7A7A\u9875\u9762"},1)]}),d()},[]),r(z,{children:[r(A,{children:[o.map((e,n)=>r(D,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),i(W,{placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u6216\u6587\u5B57",value:e,onChange:t=>{const h=[...o];h[n]=t.target.value,p(!1),l(h)}}),r(I,{children:[i(a,{type:"primary",onClick:()=>{const t=[...o];t.splice(n,1),t.length===0&&t.push(""),l(t)},children:"-"}),n===o.length-1?i(a,{type:"primary",onClick:()=>{const t=[...o];t.push(""),l(t)},children:"+"}):null]})]},n)),i(a,{type:"primary",style:{color:"white",backgroundColor:"#74b816",border:"none"},onClick:()=>{o.filter(e=>e!=="").length>0&&(C(o.filter(e=>e!=="")),p(!0)),d()},children:"\u751F\u6210\u4E8C\u7EF4\u7801"}),i(T,{children:"\u5386\u53F2\u8BB0\u5F55"}),E.map((e,n)=>r(Q,{children:[r(c,{children:["by ",e.nickname]}),r(c,{children:["at: ",new Date(e.update_time).toLocaleString()]}),r(j,{onClick:()=>{const t=[...o];t.push(e.url),l(t)},children:["( ",e.url," )"]})]},n))]}),i(L,{children:o.map((e,n)=>r(H,{children:[r(m,{children:["\u7F16\u53F7",n+1]}),i(q,{children:w&&e?i(B,{value:e.trim(),size:200}):"\u5728\u6B64\u9884\u89C8\u4E8C\u7EF4\u7801"})]},n))})]})});export{X as default};
