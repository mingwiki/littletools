import{r as a,C as H,x as z,n as Y,d as A,e as p,f as L,v as B,a0 as Z}from"./index.237fefb6.js";import{C as ee}from"./DoubleRightOutlined.84b3eefe.js";import{b as te}from"./TextArea.c70a8758.js";var re=globalThis&&globalThis.__rest||function(o,t){var u={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(u[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(o);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(u[e[n]]=o[e[n]]);return u},K=a.exports.createContext(null),ae=function(t,u){var e=t.defaultValue,n=t.children,P=t.options,d=P===void 0?[]:P,V=t.prefixCls,E=t.className,G=t.style,C=t.onChange,c=re(t,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=a.exports.useContext(H),I=g.getPrefixCls,R=g.direction,l=a.exports.useState(c.value||e||[]),h=z(l,2),x=h[0],$=h[1],r=a.exports.useState([]),w=z(r,2),_=w[0],N=w[1];a.exports.useEffect(function(){"value"in c&&$(c.value||[])},[c.value]);var y=function(){return d.map(function(i){return typeof i=="string"||typeof i=="number"?{label:i,value:i}:i})},O=function(i){N(function(m){return m.filter(function(b){return b!==i})})},f=function(i){N(function(m){return[].concat(B(m),[i])})},v=function(i){var m=x.indexOf(i.value),b=B(x);m===-1?b.push(i.value):b.splice(m,1),"value"in c||$(b);var F=y();C==null||C(b.filter(function(M){return _.indexOf(M)!==-1}).sort(function(M,Q){var U=F.findIndex(function(T){return T.value===M}),W=F.findIndex(function(T){return T.value===Q});return U-W}))},S=I("checkbox",V),k="".concat(S,"-group"),j=Y(c,["value","disabled"]);d&&d.length>0&&(n=y().map(function(s){return a.exports.createElement(X,{prefixCls:S,key:s.value.toString(),disabled:"disabled"in s?s.disabled:c.disabled,value:s.value,checked:x.indexOf(s.value)!==-1,onChange:s.onChange,className:"".concat(k,"-item"),style:s.style},s.label)}));var q={toggleOption:v,value:x,disabled:c.disabled,name:c.name,registerValue:f,cancelValue:O},J=A(k,p({},"".concat(k,"-rtl"),R==="rtl"),E);return a.exports.createElement("div",L({className:J,style:G},j,{ref:u}),a.exports.createElement(K.Provider,{value:q},n))},ne=a.exports.forwardRef(ae),oe=a.exports.memo(ne),le=globalThis&&globalThis.__rest||function(o,t){var u={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(u[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(o);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(u[e[n]]=o[e[n]]);return u},se=function(t,u){var e,n=t.prefixCls,P=t.className,d=t.children,V=t.indeterminate,E=V===void 0?!1:V,G=t.style,C=t.onMouseEnter,c=t.onMouseLeave,g=t.skipGroup,I=g===void 0?!1:g,R=t.disabled,l=le(t,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),h=a.exports.useContext(H),x=h.getPrefixCls,$=h.direction,r=a.exports.useContext(K),w=a.exports.useContext(te),_=w.isFormItemInput,N=a.exports.useContext(Z),y=R||(r==null?void 0:r.disabled)||N,O=a.exports.useRef(l.value);a.exports.useEffect(function(){r==null||r.registerValue(l.value)},[]),a.exports.useEffect(function(){if(!I)return l.value!==O.current&&(r==null||r.cancelValue(O.current),r==null||r.registerValue(l.value),O.current=l.value),function(){return r==null?void 0:r.cancelValue(l.value)}},[l.value]);var f=x("checkbox",n),v=L({},l);r&&!I&&(v.onChange=function(){l.onChange&&l.onChange.apply(l,arguments),r.toggleOption&&r.toggleOption({label:d,value:l.value})},v.name=r.name,v.checked=r.value.indexOf(l.value)!==-1);var S=A((e={},p(e,"".concat(f,"-wrapper"),!0),p(e,"".concat(f,"-rtl"),$==="rtl"),p(e,"".concat(f,"-wrapper-checked"),v.checked),p(e,"".concat(f,"-wrapper-disabled"),y),p(e,"".concat(f,"-wrapper-in-form-item"),_),e),P),k=A(p({},"".concat(f,"-indeterminate"),E)),j=E?"mixed":void 0;return a.exports.createElement("label",{className:S,style:G,onMouseEnter:C,onMouseLeave:c},a.exports.createElement(ee,L({"aria-checked":j},v,{prefixCls:f,className:k,disabled:y,ref:u})),d!==void 0&&a.exports.createElement("span",null,d))},ie=a.exports.forwardRef(se),X=ie,D=X;D.Group=oe;D.__ANT_CHECKBOX=!0;var de=D;export{de as C};
