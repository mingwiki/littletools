import{r as m,c as p,u as c,j as e,a as t,m as a}from"./index.68d31444.js";import{s as d,S as F,B as i}from"./styled-components.browser.esm.6b2eb042.js";import h from"./index.2ff07eef.js";import{F as s}from"./index.1705f744.js";import{I as o}from"./index.6d013f8f.js";import"./col.65853d07.js";import"./responsiveObserve.da17023f.js";import"./SearchOutlined.3db06bf4.js";const f=d.div`
  font-size: 36px;
  margin: 50px 0;
`,v=()=>{const{AuthStore:u}=m.exports.useContext(p);let n=c();return e(h,{children:t("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e(f,{children:"\u6B22\u8FCE\u4F7F\u7528\uFF0C\u8BF7\u5148\u767B\u5F55"}),t(s,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:r=>{u.setPassword(r.password),u.setUsername(r.username),u.login().then(()=>{a.success("\u767B\u5F55\u6210\u529F!"),window.history.back()}).catch(l=>{a.error("\u767B\u5F55\u5931\u8D25:",l)})},onFinishFailed:r=>{a.error("\u767B\u5F55\u5931\u8D25:",r)},autoComplete:"off",children:[e(s.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:e(o,{})}),e(s.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],children:e(o.Password,{})}),e(s.Item,{wrapperCol:{offset:8,span:16},children:t(F,{children:[e(i,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"}),e(i,{type:"primary",onClick:()=>n("/register"),children:"\u524D\u5F80\u6CE8\u518C"})]})})]})]})})};export{v as default};
