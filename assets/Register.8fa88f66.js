import{s as F,r as m,c as h,a2 as D,j as e,a1 as E,a as i,a3 as n}from"./index.6e5afe71.js";import{F as t}from"./index.e690cb09.js";import{I as o}from"./index.3ee4db8f.js";import{S as f,B as d}from"./index.7562167b.js";import"./TextArea.7775da1a.js";import"./index.60287e5f.js";import"./responsiveObserve.e2232d73.js";import"./SearchOutlined.748a6b8b.js";const w=F.div`
  font-size: 36px;
  margin: 50px 0;
`,b=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=()=>{const{AuthStore:a,HeaderStore:c}=m.exports.useContext(h);let l=D();const p=u=>{a.setRealname(u.realname),a.setUsername(u.username),a.setPassword(u.password),a.register().then(()=>{n.success("\u6CE8\u518C\u6210\u529F"),l("/")}).catch(s=>{n.error("\u6CE8\u518C\u5931\u8D25,\u8BF7\u91CD\u8BD5:",s)})},B=u=>{n.error("\u6CE8\u518C\u5931\u8D25,\u8BF7\u91CD\u8BD5:",u)},{setHeaders:C}=c;return m.exports.useEffect(()=>{C({ghost:!1,onBack:()=>window==null?void 0:window.history.back(),title:"",subTitle:"",extra:[]})},[]),e(E,{children:i(b,{children:[e(w,{children:"\u6CE8\u518C\u9875\u9762"}),i(t,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:p,onFinishFailed:B,autoComplete:"on",children:[e(t.Item,{label:"\u59D3\u540D\u6216\u6635\u79F0",name:"realname",hasFeedback:!0,rules:[{required:!0},({getFieldValue:u})=>({validator(s,r){return/^[\u4E00-\u9FA5]{2,5}$/.test(r)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u4E2D\u6587\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u6216\u82F1\u6587\uFF0C2~5\u4F4D"))}})],children:e(o,{})}),e(t.Item,{label:"\u7528\u6237\u540D",name:"username",hasFeedback:!0,rules:[{required:!0},({getFieldValue:u})=>({validator(s,r){return/^[a-zA-Z]+$/.test(r)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u82F1\u6587\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u6216\u4E2D\u6587\uFF0C\u6700\u5C111\u4F4D"))}})],children:e(o,{})}),e(t.Item,{label:"\u5BC6\u7801",name:"password",hasFeedback:!0,rules:[{required:!0},({getFieldValue:u})=>({validator(s,r){return/^[\w\d]{3,}$/.test(r)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C\u6700\u5C113\u4F4D"))}})],children:e(o.Password,{})}),e(t.Item,{label:"\u8F93\u5165\u5BC6\u7801",name:"re-password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0},({getFieldValue:u})=>({validator(s,r){return!r||u("password")===r?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u5339\u914D"))}})],children:e(o.Password,{})}),e(t.Item,{wrapperCol:{offset:8,span:16},children:i(f,{children:[e(d,{type:"primary",onClick:()=>l("/login"),children:"\u524D\u5F80\u767B\u5F55"}),e(d,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})]})})]})]})})};export{k as default};
