import{o as u,s as n,r as o,c as d,j as p,a as t,L as x,b as f,d as g}from"./index.e7328609.js";import{g as m}from"./index.2d9ac2c0.js";import{M as b}from"./index.6effb5ee.js";import"./index.f62e4fc8.js";import"./index.6013734c.js";import"./Overflow.d21903be.js";import"./KeyCode.bb3c3291.js";var v="./assets/keqing.c491e4d0.png",y="./assets/favicon.17e50649.svg";const{Sider:S}=g,h=n(S)`
  background-color: #343a40;
`,k=n(b)`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
`;var N=u(()=>{const[r,i]=o.exports.useState(!1),c=()=>i(!r),e=o.exports.useRef(null),s=o.exports.useRef(null),{UserStore:l}=o.exports.useContext(d),{currentUser:a}=l;return o.exports.useEffect(()=>{m.timeline().set(s.current,{x:"-100%",ease:"ease-in-out",duration:1}).to(s.current,{x:"0",opacity:1,ease:"ease-in-out",duration:1}).to(e.current,{x:"50",ease:"ease-in-out",duration:1,opacity:.5}).to(e.current,{x:"-50",ease:"ease-in-out",duration:1,opacity:0}).to(e.current,{x:"0",ease:"ease-in-out",duration:1,opacity:1}).to(e.current,{rotationY:"-360",duration:1}).to("#root",{padding:"0 5vw",duration:1})},[a]),p(h,{collapsible:!0,collapsed:r,onCollapse:c,ref:s,children:[t("div",{className:"logo",style:{textAlign:"center"},children:t(x,{to:"/",children:t("img",{src:a?v:y,className:"App-logo",alt:"logo",ref:e})})}),t(k,{mode:"inline",items:f})]})});export{N as default};
