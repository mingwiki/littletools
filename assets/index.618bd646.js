import{s,r as e,a0 as r,j as a}from"./index.c324590b.js";const n=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`,p=({children:o})=>{const t=e.exports.useRef();return e.exports.useEffect(()=>{r.timeline().set(t.current,{y:"100%",opacity:0}).to(t.current,{y:"0",opacity:1})},[]),a(n,{ref:t,children:o})};export{p as C};
