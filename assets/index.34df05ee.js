import{o as u,s as i,r as e,c as d,j as f,a as o,L as g,b as x,d as m}from"./index.69e313f1.js";import{g as b}from"./index.2d9ac2c0.js";import{M as v}from"./index.973100f5.js";import"./index.a2679e2e.js";import"./index.0eb39b4b.js";import"./Overflow.179aa144.js";import"./KeyCode.bb3c3291.js";var y="./assets/keqing.c491e4d0.png",R="./assets/favicon.17e50649.svg";const{Sider:S}=m,h=i(S)`
  background-color: #343a40;
`,k=i(v)`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
`;var U=u(()=>{const[n,c]=e.exports.useState(!1),l=()=>c(!n),s=e.exports.useRef(null),r=e.exports.useRef(null),t=e.exports.useRef(null),{UserStore:p}=e.exports.useContext(d),{currentUser:a}=p;return e.exports.useEffect(()=>{b.timeline().set(r.current,{x:"-100%",opacity:0}).set(t.current.menu.list,{x:"-100%",opacity:0,paddingRight:"100%"}).to("#root",{padding:"0 5vw",duration:1}).to(r.current,{x:"0",opacity:1}).to(s.current,{rotationY:"360"}).to(t.current.menu.list,{x:"0",opacity:1}).to(t.current.menu.list,{paddingRight:"0",ease:"ease-in-out",duration:1}).to(s.current,{rotationY:"-360"}).to("#root",{backgroundColor:"black"})},[a]),f(h,{collapsible:!0,collapsed:n,onCollapse:l,ref:r,children:[o("div",{className:"logo",style:{textAlign:"center"},children:o(g,{to:"/",children:o("img",{src:a?y:R,className:"App-logo",alt:"logo",ref:s})})}),o(k,{mode:"inline",items:x,ref:t})]})});export{U as default};
