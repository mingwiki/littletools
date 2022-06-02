import{o as l,s as n,r as o,c as d,j as p,a as t,L as x,b as f,d as g}from"./index.f35a7376.js";import{g as m}from"./index.2d9ac2c0.js";import{M as b}from"./index.c8c0bbd8.js";import"./index.9a54a8ef.js";import"./index.1a1ef237.js";import"./Overflow.a4518e96.js";import"./KeyCode.bb3c3291.js";var y="./assets/keqing.c491e4d0.png",v="./assets/favicon.17e50649.svg";const{Sider:S}=g,k=n(S)`
  background-color: #343a40;
`,C=n(b)`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
`;var N=l(()=>{const[r,i]=o.exports.useState(!1),c=()=>i(!r),e=o.exports.useRef(null),s=o.exports.useRef(null),{UserStore:u}=o.exports.useContext(d),{currentUser:a}=u;return o.exports.useEffect(()=>{m.timeline().set(s.current,{x:"-100%",opacity:0}).to("#root",{padding:"0 5vw",duration:1}).to(s.current,{x:"0",opacity:1,ease:"ease-in-out",duration:1}).to(e.current,{x:"50",ease:"ease-in-out",duration:1,opacity:.5}).to(e.current,{x:"-50",ease:"ease-in-out",duration:1,opacity:0}).to(e.current,{x:"0",ease:"ease-in-out",duration:1,opacity:1}).to(e.current,{rotationY:"-360",ease:"ease-in-out",duration:1}).to("#root",{backgroundColor:"black",ease:"ease-in-out",duration:1}).to(e.current,{rotationY:"360",ease:"ease-in-out",duration:1})},[a]),p(k,{collapsible:!0,collapsed:r,onCollapse:c,ref:s,children:[t("div",{className:"logo",style:{textAlign:"center"},children:t(x,{to:"/",children:t("img",{src:a?y:v,className:"App-logo",alt:"logo",ref:e})})}),t(C,{mode:"inline",items:f})]})});export{N as default};
