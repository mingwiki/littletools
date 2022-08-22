import{O as r,ak as i,s as c,o as l,r as e,c as d,al as E,a as F,a2 as p,j as u}from"./index.237fefb6.js";const m=r.lazy(()=>i(()=>import("./index.02354563.js"),["assets/index.02354563.js","assets/index.237fefb6.js","assets/index.b345d86a.css"])),x=c.input`
  min-width: 30%;
  max-width: 100%;
  &:invalid {
    background-color: red;
  }
`,f=l(()=>{const{HeaderStore:o}=e.exports.useContext(d),{setHeaders:a}=o,[t,s]=e.exports.useState("");return E.config({placement:"bottomRight",duration:3}),e.exports.useEffect(()=>{document.title="\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177",a({ghost:!1,onBack:()=>window==null?void 0:window.history.back(),title:"No. 2",subTitle:"\u4E8C\u7EF4\u7801\u5FEB\u901F\u751F\u6210\u67E5\u8BE2\u5DE5\u5177",extra:[]})},[]),F(p,{children:[u(x,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u4E00\u4E2A\u94FE\u63A5\u6216\u4EFB\u610F\u6587\u5B57",value:t,autoFocus:!0,onChange:n=>{s(n.target.value.trim())}}),t&&u(m,{value:t,size:200})]})});export{f as default};
