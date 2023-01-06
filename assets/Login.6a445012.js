import{Y as m,r as p,w as c,x as d,j as e,F,k as n,$ as a}from"./index.73087af5.js";import{F as t}from"./index.e3012205.js";import{I as o}from"./index.abc0f3e9.js";import{S as h,B as l}from"./index.57675261.js";import"./TextArea.6eb415cd.js";import"./responsiveObserve.481b7421.js";const C=m.div`
  font-size: 36px;
  margin: 50px 0;
`,f=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,D=()=>{const{AuthStore:u}=p.exports.useContext(c);let i=d();return e(F,{children:n(f,{children:[e(C,{children:"\u6B22\u8FCE\u4F7F\u7528\uFF0C\u8BF7\u5148\u767B\u5F55"}),n(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:r=>{u.setPassword(r.password),u.setUsername(r.username),u.login().then(s=>{Array.isArray(s)?(a.success("\u767B\u5F55\u6210\u529F!"),i("/")):a.error(s)}).catch(s=>{a.error(s)})},onFinishFailed:r=>{a.error(r)},autoComplete:"on",children:[e(t.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:e(o,{})}),e(t.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],children:e(o.Password,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:n(h,{children:[e(l,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"}),e(l,{type:"primary",onClick:()=>i("/register"),children:"\u524D\u5F80\u6CE8\u518C"})]})})]})]})})};export{D as default};
