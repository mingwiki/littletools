import{r as e,a,s as r,d as s}from"./index.2112920b.js";import{g as n}from"./index.2d9ac2c0.js";const{Content:p}=s,i=r(p)`
  margin: 16px;
  padding: 24px;
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;var x=({children:o})=>{const t=e.exports.useRef(null);return e.exports.useEffect(()=>{n.timeline().set(t.current,{x:"100%",opacity:0,ease:"ease-in-out",duration:1}).to(t.current,{x:"0",opacity:1,ease:"ease-in-out",duration:1})},[]),a(i,{ref:t,children:o})};export{x as default};
