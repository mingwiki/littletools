import{r as e,a as r,s as a,d as s}from"./index.69e313f1.js";import{g as n}from"./index.2d9ac2c0.js";const{Content:p}=s,c=a(p)`
  margin: 16px;
  padding: 24px;
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;var f=({children:o})=>{const t=e.exports.useRef(null);return e.exports.useEffect(()=>{n.timeline().set(t.current,{x:"-100%",opacity:0}).to(t.current,{x:"0",opacity:1})},[]),r(c,{ref:t,children:o})};export{f as default};
