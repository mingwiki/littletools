import{a2 as m,r as p,w as c,x as d,j as e,F,k as t,a4 as a}from"./index.da4f5464.js";import{F as u,I as o}from"./index.4e16ddd9.js";import{S as h,B as l}from"./index.86149a98.js";import"./TextArea.db81deae.js";import"./responsiveObserve.8fd0843f.js";const C=m.div`
  font-size: 36px;
  margin: 50px 0;
`,x=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,A=()=>{const{AuthStore:n}=p.exports.useContext(c);let i=d();return e(F,{children:t(x,{children:[e(C,{children:"\u6B22\u8FCE\u4F7F\u7528\uFF0C\u8BF7\u5148\u767B\u5F55"}),t(u,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:r=>{n.setPassword(r.password),n.setUsername(r.username),n.login().then(s=>{Array.isArray(s)?(a.success("\u767B\u5F55\u6210\u529F!"),i("/")):a.error(s)}).catch(s=>{a.error(s)})},onFinishFailed:r=>{a.error(r)},autoComplete:"on",children:[e(u.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:e(o,{})}),e(u.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],children:e(o.Password,{})}),e(u.Item,{wrapperCol:{offset:8,span:16},children:t(h,{children:[e(l,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"}),e(l,{type:"primary",onClick:()=>i("/register"),children:"\u524D\u5F80\u6CE8\u518C"})]})})]})]})})};export{A as default};
