import{r as t,x as _,_ as K,e as q,C as ke,d as At,l as E,n as Ge,z as fa,Z as Bt,y as Re,p as re,v as bt,q as va,t as pa,A as Dt,a0 as $t,ap as ma,f as ba,O as Ue,ag as qe,o as xa,c as ha,j as ie,a1 as xt,a as j,aj as ya,ai as ae,ax as ga,ay as Ea,ak as Ke,al as We,am as ht}from"./index.2fc4de80.js";import{s as Oe,B as xe,S as Ne}from"./styled-components.browser.esm.fa67e1be.js";import{R as He,D as Ca}from"./DoubleRightOutlined.209af0b9.js";import{C as Sa}from"./index.9b3cccb8.js";import{P as Na,R as yt,d as Pa,u as gt}from"./index.8dc52bf9.js";import{K as pe}from"./KeyCode.bb3c3291.js";import{E as Ta,M as wa,b as Ra}from"./index.5178c024.js";import{D as ka}from"./Dropdown.089351d5.js";import{R as Pe,C as ve}from"./col.ee9a8d78.js";import{P as Oa}from"./index.8039ca92.js";import{T as Ia}from"./index.be943ab5.js";import"./Overflow.11c8520f.js";import"./DownOutlined.ea57a54f.js";import"./SearchOutlined.ed1e47c3.js";import"./responsiveObserve.82db0129.js";function Et(e){var r=e.prefixCls,o=e.value,a=e.current,n=e.offset,s=n===void 0?0:n,l;return s&&(l={position:"absolute",top:"".concat(s,"00%"),left:0}),t.exports.createElement("span",{style:l,className:q("".concat(r,"-only-unit"),{current:a})},o)}function Aa(e,r,o){for(var a=e,n=0;(a+10)%10!==r;)a+=o,n+=o;return n}function Ba(e){var r=e.prefixCls,o=e.count,a=e.value,n=Number(a),s=Math.abs(o),l=t.exports.useState(n),u=_(l,2),c=u[0],d=u[1],b=t.exports.useState(s),v=_(b,2),y=v[0],N=v[1],h=function(){d(n),N(s)};t.exports.useEffect(function(){var A=setTimeout(function(){h()},1e3);return function(){clearTimeout(A)}},[n]);var x,P;if(c===n||Number.isNaN(n)||Number.isNaN(c))x=[t.exports.createElement(Et,K({},e,{key:n,current:!0}))],P={transition:"none"};else{x=[];for(var R=n+10,T=[],m=n;m<=R;m+=1)T.push(m);var C=T.findIndex(function(A){return A%10===c});x=T.map(function(A,B){var w=A%10;return t.exports.createElement(Et,K({},e,{key:A,value:w,offset:B-C,current:B===C}))});var W=y<s?1:-1;P={transform:"translateY(".concat(-Aa(c,n,W),"00%)")}}return t.exports.createElement("span",{className:"".concat(r,"-only"),style:P,onTransitionEnd:h},x)}var Da=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},$a=function(r){var o=r.prefixCls,a=r.count,n=r.className,s=r.motionClassName,l=r.style,u=r.title,c=r.show,d=r.component,b=d===void 0?"sup":d,v=r.children,y=Da(r,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),N=t.exports.useContext(ke),h=N.getPrefixCls,x=h("scroll-number",o),P=K(K({},y),{"data-show":c,style:l,className:q(x,n,s),title:u}),R=a;if(a&&Number(a)%1===0){var T=String(a).split("");R=T.map(function(m,C){return t.exports.createElement(Ba,{prefixCls:x,count:Number(a),value:m,key:T.length-C})})}return l&&l.borderColor&&(P.style=K(K({},l),{boxShadow:"0 0 0 1px ".concat(l.borderColor," inset")})),v?At(v,function(m){return{className:q("".concat(x,"-custom-component"),m==null?void 0:m.className,s)}}):t.exports.createElement(b,P,R)},Ma=$a;function we(e){return Na.indexOf(e)!==-1}var Fa=function(r){var o,a=r.className,n=r.prefixCls,s=r.style,l=r.color,u=r.children,c=r.text,d=r.placement,b=d===void 0?"end":d,v=t.exports.useContext(ke),y=v.getPrefixCls,N=v.direction,h=y("ribbon",n),x=we(l),P=q(h,"".concat(h,"-placement-").concat(b),(o={},E(o,"".concat(h,"-rtl"),N==="rtl"),E(o,"".concat(h,"-color-").concat(l),x),o),a),R={},T={};return l&&!x&&(R.background=l,T.color=l),t.exports.createElement("div",{className:"".concat(h,"-wrapper")},u,t.exports.createElement("div",{className:P,style:K(K({},R),s)},t.exports.createElement("span",{className:"".concat(h,"-text")},c),t.exports.createElement("div",{className:"".concat(h,"-corner"),style:T})))},La=Fa,_a=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},Mt=function(r){var o,a,n=r.prefixCls,s=r.scrollNumberPrefixCls,l=r.children,u=r.status,c=r.text,d=r.color,b=r.count,v=b===void 0?null:b,y=r.overflowCount,N=y===void 0?99:y,h=r.dot,x=h===void 0?!1:h,P=r.size,R=P===void 0?"default":P,T=r.title,m=r.offset,C=r.style,W=r.className,A=r.showZero,B=A===void 0?!1:A,w=_a(r,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),g=t.exports.useContext(ke),I=g.getPrefixCls,$=g.direction,p=I("badge",n),k=v>N?"".concat(N,"+"):v,F=u!=null||d!=null,L=k==="0"||k===0,X=x&&!L,G=X?"":k,i=t.exports.useMemo(function(){var Y=G==null||G==="";return(Y||L&&!B)&&!X},[G,L,B,X]),S=t.exports.useRef(v);i||(S.current=v);var f=S.current,O=t.exports.useRef(G);i||(O.current=G);var V=O.current,z=t.exports.useRef(X);i||(z.current=X);var J=t.exports.useMemo(function(){if(!m)return K({},C);var Y={marginTop:m[1]};return $==="rtl"?Y.left=parseInt(m[0],10):Y.right=-parseInt(m[0],10),K(K({},Y),C)},[$,m,C]),ne=T!=null?T:typeof f=="string"||typeof f=="number"?f:void 0,oe=i||!c?null:t.exports.createElement("span",{className:"".concat(p,"-status-text")},c),se=!f||Ge(f)!=="object"?void 0:At(f,function(Y){return{style:K(K({},J),Y.style)}}),ce=q((o={},E(o,"".concat(p,"-status-dot"),F),E(o,"".concat(p,"-status-").concat(u),!!u),E(o,"".concat(p,"-status-").concat(d),we(d)),o)),ue={};d&&!we(d)&&(ue.background=d);var Z=q(p,(a={},E(a,"".concat(p,"-status"),F),E(a,"".concat(p,"-not-a-wrapper"),!l),E(a,"".concat(p,"-rtl"),$==="rtl"),a),W);if(!l&&F){var U=J.color;return t.exports.createElement("span",K({},w,{className:Z,style:J}),t.exports.createElement("span",{className:ce,style:ue}),t.exports.createElement("span",{style:{color:U},className:"".concat(p,"-status-text")},c))}return t.exports.createElement("span",K({},w,{className:Z}),l,t.exports.createElement(fa,{visible:!i,motionName:"".concat(p,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(Y){var ee,te=Y.className,de=I("scroll-number",s),H=z.current,me=q((ee={},E(ee,"".concat(p,"-dot"),H),E(ee,"".concat(p,"-count"),!H),E(ee,"".concat(p,"-count-sm"),R==="small"),E(ee,"".concat(p,"-multiple-words"),!H&&V&&V.toString().length>1),E(ee,"".concat(p,"-status-").concat(u),!!u),E(ee,"".concat(p,"-status-").concat(d),we(d)),ee)),fe=K({},J);return d&&!we(d)&&(fe=fe||{},fe.background=d),t.exports.createElement(Ma,{prefixCls:de,show:!i,motionClassName:te,className:me,count:V,title:ne,style:fe,key:"scrollNumber"},se)}),oe)};Mt.Ribbon=La;var ja=Mt,za=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},Ka=function(r){var o=r.prefixCls,a=r.className,n=r.hoverable,s=n===void 0?!0:n,l=za(r,["prefixCls","className","hoverable"]);return t.exports.createElement(Bt,null,function(u){var c=u.getPrefixCls,d=c("card",o),b=q("".concat(d,"-grid"),a,E({},"".concat(d,"-grid-hoverable"),s));return t.exports.createElement("div",K({},l,{className:b}))})},Ft=Ka,Wa=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o},Ha=function(r){return t.exports.createElement(Bt,null,function(o){var a=o.getPrefixCls,n=r.prefixCls,s=r.className,l=r.avatar,u=r.title,c=r.description,d=Wa(r,["prefixCls","className","avatar","title","description"]),b=a("card",n),v=q("".concat(b,"-meta"),s),y=l?t.exports.createElement("div",{className:"".concat(b,"-meta-avatar")},l):null,N=u?t.exports.createElement("div",{className:"".concat(b,"-meta-title")},u):null,h=c?t.exports.createElement("div",{className:"".concat(b,"-meta-description")},c):null,x=N||h?t.exports.createElement("div",{className:"".concat(b,"-meta-detail")},N,h):null;return t.exports.createElement("div",K({},d,{className:v}),y,x)})},Va=Ha;function Lt(e){var r=t.exports.useRef(),o=t.exports.useRef(!1);function a(){for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];o.current||(Re.cancel(r.current),r.current=Re(function(){e.apply(void 0,s)}))}return t.exports.useEffect(function(){return function(){o.current=!0,Re.cancel(r.current)}},[]),a}function Ga(e){var r=t.exports.useRef([]),o=t.exports.useState({}),a=_(o,2),n=a[1],s=t.exports.useRef(typeof e=="function"?e():e),l=Lt(function(){var c=s.current;r.current.forEach(function(d){c=d(c)}),r.current=[],s.current=c,n({})});function u(c){r.current.push(c),l()}return[s.current,u]}function Ua(e,r){var o,a=e.prefixCls,n=e.id,s=e.active,l=e.tab,u=l.key,c=l.tab,d=l.disabled,b=l.closeIcon,v=e.closable,y=e.renderWrapper,N=e.removeAriaLabel,h=e.editable,x=e.onClick,P=e.onRemove,R=e.onFocus,T=e.style,m="".concat(a,"-tab");t.exports.useEffect(function(){return P},[]);var C=h&&v!==!1&&!d;function W(w){d||x(w)}function A(w){w.preventDefault(),w.stopPropagation(),h.onEdit("remove",{key:u,event:w})}var B=t.exports.createElement("div",{key:u,ref:r,className:q(m,(o={},E(o,"".concat(m,"-with-remove"),C),E(o,"".concat(m,"-active"),s),E(o,"".concat(m,"-disabled"),d),o)),style:T,onClick:W},t.exports.createElement("div",{role:"tab","aria-selected":s,id:n&&"".concat(n,"-tab-").concat(u),className:"".concat(m,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(g){g.stopPropagation(),W(g)},onKeyDown:function(g){[pe.SPACE,pe.ENTER].includes(g.which)&&(g.preventDefault(),W(g))},onFocus:R},c),C&&t.exports.createElement("button",{type:"button","aria-label":N||"remove",tabIndex:0,className:"".concat(m,"-remove"),onClick:function(g){g.stopPropagation(),A(g)}},b||h.removeIcon||"\xD7"));return y?y(B):B}var qa=t.exports.forwardRef(Ua),Ct={width:0,height:0,left:0,top:0};function Za(e,r,o){return t.exports.useMemo(function(){for(var a,n=new Map,s=r.get((a=e[0])===null||a===void 0?void 0:a.key)||Ct,l=s.left+s.width,u=0;u<e.length;u+=1){var c=e[u].key,d=r.get(c);if(!d){var b;d=r.get((b=e[u-1])===null||b===void 0?void 0:b.key)||Ct}var v=n.get(c)||re({},d);v.right=l-v.left-v.width,n.set(c,v)}return n},[e.map(function(a){return a.key}).join("_"),r,o])}var St={width:0,height:0,left:0,top:0,right:0};function Ya(e,r,o,a,n){var s=n.tabs,l=n.tabPosition,u=n.rtl,c,d,b;["top","bottom"].includes(l)?(c="width",d=u?"right":"left",b=Math.abs(r.left)):(c="height",d="top",b=-r.top);var v=r[c],y=o[c],N=a[c],h=v;return y+N>v&&y<v&&(h=v-N),t.exports.useMemo(function(){if(!s.length)return[0,0];for(var x=s.length,P=x,R=0;R<x;R+=1){var T=e.get(s[R].key)||St;if(T[d]+T[c]>b+h){P=R-1;break}}for(var m=0,C=x-1;C>=0;C-=1){var W=e.get(s[C].key)||St;if(W[d]<b){m=C+1;break}}return[m,P]},[e,b,h,l,s.map(function(x){return x.key}).join("_"),u])}function Qa(e,r){var o=e.prefixCls,a=e.editable,n=e.locale,s=e.style;return!a||a.showAdd===!1?null:t.exports.createElement("button",{ref:r,type:"button",className:"".concat(o,"-nav-add"),style:s,"aria-label":(n==null?void 0:n.addAriaLabel)||"Add tab",onClick:function(u){a.onEdit("add",{event:u})}},a.addIcon||"+")}var _t=t.exports.forwardRef(Qa);function Xa(e,r){var o=e.prefixCls,a=e.id,n=e.tabs,s=e.locale,l=e.mobile,u=e.moreIcon,c=u===void 0?"More":u,d=e.moreTransitionName,b=e.style,v=e.className,y=e.editable,N=e.tabBarGutter,h=e.rtl,x=e.removeAriaLabel,P=e.onTabClick,R=t.exports.useState(!1),T=_(R,2),m=T[0],C=T[1],W=t.exports.useState(null),A=_(W,2),B=A[0],w=A[1],g="".concat(a,"-more-popup"),I="".concat(o,"-dropdown"),$=B!==null?"".concat(g,"-").concat(B):null,p=s==null?void 0:s.dropdownAriaLabel;function k(f,O){f.preventDefault(),f.stopPropagation(),y.onEdit("remove",{key:O,event:f})}var F=t.exports.createElement(Ta,{onClick:function(O){var V=O.key,z=O.domEvent;P(V,z),C(!1)},id:g,tabIndex:-1,role:"listbox","aria-activedescendant":$,selectedKeys:[B],"aria-label":p!==void 0?p:"expanded dropdown"},n.map(function(f){var O=y&&f.closable!==!1&&!f.disabled;return t.exports.createElement(wa,{key:f.key,id:"".concat(g,"-").concat(f.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(f.key),disabled:f.disabled},t.exports.createElement("span",null,f.tab),O&&t.exports.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(I,"-menu-item-remove"),onClick:function(z){z.stopPropagation(),k(z,f.key)}},f.closeIcon||y.removeIcon||"\xD7"))}));function L(f){for(var O=n.filter(function(oe){return!oe.disabled}),V=O.findIndex(function(oe){return oe.key===B})||0,z=O.length,J=0;J<z;J+=1){V=(V+f+z)%z;var ne=O[V];if(!ne.disabled){w(ne.key);return}}}function X(f){var O=f.which;if(!m){[pe.DOWN,pe.SPACE,pe.ENTER].includes(O)&&(C(!0),f.preventDefault());return}switch(O){case pe.UP:L(-1),f.preventDefault();break;case pe.DOWN:L(1),f.preventDefault();break;case pe.ESC:C(!1);break;case pe.SPACE:case pe.ENTER:B!==null&&P(B,f);break}}t.exports.useEffect(function(){var f=document.getElementById($);f&&f.scrollIntoView&&f.scrollIntoView(!1)},[B]),t.exports.useEffect(function(){m||w(null)},[m]);var G=E({},h?"marginRight":"marginLeft",N);n.length||(G.visibility="hidden",G.order=1);var i=q(E({},"".concat(I,"-rtl"),h)),S=l?null:t.exports.createElement(ka,{prefixCls:I,overlay:F,trigger:["hover"],visible:m,transitionName:d,onVisibleChange:C,overlayClassName:i,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.exports.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":g,id:"".concat(a,"-more"),"aria-expanded":m,onKeyDown:X},c));return t.exports.createElement("div",{className:q("".concat(o,"-nav-operations"),v),style:b,ref:r},S,t.exports.createElement(_t,{prefixCls:o,locale:s,editable:y}))}var Ja=t.exports.memo(t.exports.forwardRef(Xa),function(e,r){return r.tabMoving}),Ze=t.exports.createContext(null),er=.1,Nt=.01,De=20,Pt=Math.pow(.995,De);function tr(e,r){var o=t.exports.useState(),a=_(o,2),n=a[0],s=a[1],l=t.exports.useState(0),u=_(l,2),c=u[0],d=u[1],b=t.exports.useState(0),v=_(b,2),y=v[0],N=v[1],h=t.exports.useState(),x=_(h,2),P=x[0],R=x[1],T=t.exports.useRef();function m(g){var I=g.touches[0],$=I.screenX,p=I.screenY;s({x:$,y:p}),window.clearInterval(T.current)}function C(g){if(!!n){g.preventDefault();var I=g.touches[0],$=I.screenX,p=I.screenY;s({x:$,y:p});var k=$-n.x,F=p-n.y;r(k,F);var L=Date.now();d(L),N(L-c),R({x:k,y:F})}}function W(){if(!!n&&(s(null),R(null),P)){var g=P.x/y,I=P.y/y,$=Math.abs(g),p=Math.abs(I);if(Math.max($,p)<er)return;var k=g,F=I;T.current=window.setInterval(function(){if(Math.abs(k)<Nt&&Math.abs(F)<Nt){window.clearInterval(T.current);return}k*=Pt,F*=Pt,r(k*De,F*De)},De)}}var A=t.exports.useRef();function B(g){var I=g.deltaX,$=g.deltaY,p=0,k=Math.abs(I),F=Math.abs($);k===F?p=A.current==="x"?I:$:k>F?(p=I,A.current="x"):(p=$,A.current="y"),r(-p,-p)&&g.preventDefault()}var w=t.exports.useRef(null);w.current={onTouchStart:m,onTouchMove:C,onTouchEnd:W,onWheel:B},t.exports.useEffect(function(){function g(k){w.current.onTouchStart(k)}function I(k){w.current.onTouchMove(k)}function $(k){w.current.onTouchEnd(k)}function p(k){w.current.onWheel(k)}return document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",$,{passive:!1}),e.current.addEventListener("touchstart",g,{passive:!1}),e.current.addEventListener("wheel",p),function(){document.removeEventListener("touchmove",I),document.removeEventListener("touchend",$)}},[])}function ar(){var e=t.exports.useRef(new Map);function r(a){return e.current.has(a)||e.current.set(a,t.exports.createRef()),e.current.get(a)}function o(a){e.current.delete(a)}return[r,o]}function Tt(e,r){var o=t.exports.useRef(e),a=t.exports.useState({}),n=_(a,2),s=n[1];function l(u){var c=typeof u=="function"?u(o.current):u;c!==o.current&&r(c,o.current),o.current=c,s({})}return[o.current,l]}var wt=function(r){var o=r.position,a=r.prefixCls,n=r.extra;if(!n)return null;var s,l={};return n&&Ge(n)==="object"&&!t.exports.isValidElement(n)?l=n:l.right=n,o==="right"&&(s=l.right),o==="left"&&(s=l.left),s?t.exports.createElement("div",{className:"".concat(a,"-extra-content")},s):null};function rr(e,r){var o,a=t.exports.useContext(Ze),n=a.prefixCls,s=a.tabs,l=e.className,u=e.style,c=e.id,d=e.animated,b=e.activeKey,v=e.rtl,y=e.extra,N=e.editable,h=e.locale,x=e.tabPosition,P=e.tabBarGutter,R=e.children,T=e.onTabClick,m=e.onTabScroll,C=t.exports.useRef(),W=t.exports.useRef(),A=t.exports.useRef(),B=t.exports.useRef(),w=ar(),g=_(w,2),I=g[0],$=g[1],p=x==="top"||x==="bottom",k=Tt(0,function(M,D){p&&m&&m({direction:M>D?"left":"right"})}),F=_(k,2),L=F[0],X=F[1],G=Tt(0,function(M,D){!p&&m&&m({direction:M>D?"top":"bottom"})}),i=_(G,2),S=i[0],f=i[1],O=t.exports.useState(0),V=_(O,2),z=V[0],J=V[1],ne=t.exports.useState(0),oe=_(ne,2),se=oe[0],ce=oe[1],ue=t.exports.useState(null),Z=_(ue,2),U=Z[0],Y=Z[1],ee=t.exports.useState(null),te=_(ee,2),de=te[0],H=te[1],me=t.exports.useState(0),fe=_(me,2),Ht=fe[0],Vt=fe[1],Gt=t.exports.useState(0),Qe=_(Gt,2),Ut=Qe[0],qt=Qe[1],Zt=Ga(new Map),Xe=_(Zt,2),Yt=Xe[0],Qt=Xe[1],Ie=Za(s,Yt,z),Xt="".concat(n,"-nav-operations-hidden"),ye=0,ge=0;p?v?(ye=0,ge=Math.max(0,z-U)):(ye=Math.min(0,U-z),ge=0):(ye=Math.min(0,de-se),ge=0);function $e(M){return M<ye?ye:M>ge?ge:M}var Je=t.exports.useRef(),Jt=t.exports.useState(),et=_(Jt,2),Ae=et[0],tt=et[1];function Me(){tt(Date.now())}function Fe(){window.clearTimeout(Je.current)}tr(C,function(M,D){function Q(le,he){le(function(Ce){var ze=$e(Ce+he);return ze})}if(p){if(U>=z)return!1;Q(X,M)}else{if(de>=se)return!1;Q(f,D)}return Fe(),Me(),!0}),t.exports.useEffect(function(){return Fe(),Ae&&(Je.current=window.setTimeout(function(){tt(0)},100)),Fe},[Ae]);function at(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:b,D=Ie.get(M)||{width:0,height:0,left:0,right:0,top:0};if(p){var Q=L;v?D.right<L?Q=D.right:D.right+D.width>L+U&&(Q=D.right+D.width-U):D.left<-L?Q=-D.left:D.left+D.width>-L+U&&(Q=-(D.left+D.width-U)),f(0),X($e(Q))}else{var le=S;D.top<-S?le=-D.top:D.top+D.height>-S+de&&(le=-(D.top+D.height-de)),X(0),f($e(le))}}var ea=Ya(Ie,{width:U,height:de,left:L,top:S},{width:z,height:se},{width:Ht,height:Ut},re(re({},e),{},{tabs:s})),rt=_(ea,2),ta=rt[0],aa=rt[1],Be={};x==="top"||x==="bottom"?Be[v?"marginRight":"marginLeft"]=P:Be.marginTop=P;var nt=s.map(function(M,D){var Q=M.key;return t.exports.createElement(qa,{id:c,prefixCls:n,key:Q,tab:M,style:D===0?void 0:Be,closable:M.closable,editable:N,active:Q===b,renderWrapper:R,removeAriaLabel:h==null?void 0:h.removeAriaLabel,ref:I(Q),onClick:function(he){T(Q,he)},onRemove:function(){$(Q)},onFocus:function(){at(Q),Me(),C.current&&(v||(C.current.scrollLeft=0),C.current.scrollTop=0)}})}),Le=Lt(function(){var M,D,Q,le,he,Ce,ze=((M=C.current)===null||M===void 0?void 0:M.offsetWidth)||0,la=((D=C.current)===null||D===void 0?void 0:D.offsetHeight)||0,ft=((Q=B.current)===null||Q===void 0?void 0:Q.offsetWidth)||0,vt=((le=B.current)===null||le===void 0?void 0:le.offsetHeight)||0;Y(ze),H(la),Vt(ft),qt(vt);var ca=(((he=W.current)===null||he===void 0?void 0:he.offsetWidth)||0)-ft,ua=(((Ce=W.current)===null||Ce===void 0?void 0:Ce.offsetHeight)||0)-vt;J(ca),ce(ua),Qt(function(){var pt=new Map;return s.forEach(function(da){var mt=da.key,Se=I(mt).current;Se&&pt.set(mt,{width:Se.offsetWidth,height:Se.offsetHeight,left:Se.offsetLeft,top:Se.offsetTop})}),pt})}),ra=s.slice(0,ta),na=s.slice(aa+1),ot=[].concat(bt(ra),bt(na)),oa=t.exports.useState(),it=_(oa,2),ia=it[0],sa=it[1],be=Ie.get(b),st=t.exports.useRef();function lt(){Re.cancel(st.current)}t.exports.useEffect(function(){var M={};return be&&(p?(v?M.right=be.right:M.left=be.left,M.width=be.width):(M.top=be.top,M.height=be.height)),lt(),st.current=Re(function(){sa(M)}),lt},[be,p,v]),t.exports.useEffect(function(){at()},[b,be,Ie,p]),t.exports.useEffect(function(){Le()},[v,P,b,s.map(function(M){return M.key}).join("_")]);var ct=!!ot.length,Ee="".concat(n,"-nav-wrap"),_e,je,ut,dt;return p?v?(je=L>0,_e=L+U<z):(_e=L<0,je=-L+U<z):(ut=S<0,dt=-S+de<se),t.exports.createElement("div",{ref:r,role:"tablist",className:q("".concat(n,"-nav"),l),style:u,onKeyDown:function(){Me()}},t.exports.createElement(wt,{position:"left",extra:y,prefixCls:n}),t.exports.createElement(yt,{onResize:Le},t.exports.createElement("div",{className:q(Ee,(o={},E(o,"".concat(Ee,"-ping-left"),_e),E(o,"".concat(Ee,"-ping-right"),je),E(o,"".concat(Ee,"-ping-top"),ut),E(o,"".concat(Ee,"-ping-bottom"),dt),o)),ref:C},t.exports.createElement(yt,{onResize:Le},t.exports.createElement("div",{ref:W,className:"".concat(n,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat(S,"px)"),transition:Ae?"none":void 0}},nt,t.exports.createElement(_t,{ref:B,prefixCls:n,locale:h,editable:N,style:re(re({},nt.length===0?void 0:Be),{},{visibility:ct?"hidden":null})}),t.exports.createElement("div",{className:q("".concat(n,"-ink-bar"),E({},"".concat(n,"-ink-bar-animated"),d.inkBar)),style:ia}))))),t.exports.createElement(Ja,K({},e,{removeAriaLabel:h==null?void 0:h.removeAriaLabel,ref:A,prefixCls:n,tabs:ot,className:!ct&&Xt,tabMoving:!!Ae})),t.exports.createElement(wt,{position:"right",extra:y,prefixCls:n}))}var Rt=t.exports.forwardRef(rr);function nr(e){var r=e.id,o=e.activeKey,a=e.animated,n=e.tabPosition,s=e.rtl,l=e.destroyInactiveTabPane,u=t.exports.useContext(Ze),c=u.prefixCls,d=u.tabs,b=a.tabPane,v=d.findIndex(function(y){return y.key===o});return t.exports.createElement("div",{className:q("".concat(c,"-content-holder"))},t.exports.createElement("div",{className:q("".concat(c,"-content"),"".concat(c,"-content-").concat(n),E({},"".concat(c,"-content-animated"),b)),style:v&&b?E({},s?"marginRight":"marginLeft","-".concat(v,"00%")):null},d.map(function(y){return t.exports.cloneElement(y.node,{key:y.key,prefixCls:c,tabKey:y.key,id:r,animated:b,active:y.key===o,destroyInactiveTabPane:l})})))}function jt(e){var r=e.prefixCls,o=e.forceRender,a=e.className,n=e.style,s=e.id,l=e.active,u=e.animated,c=e.destroyInactiveTabPane,d=e.tabKey,b=e.children,v=t.exports.useState(o),y=_(v,2),N=y[0],h=y[1];t.exports.useEffect(function(){l?h(!0):c&&h(!1)},[l,c]);var x={};return l||(u?(x.visibility="hidden",x.height=0,x.overflowY="hidden"):x.display="none"),t.exports.createElement("div",{id:s&&"".concat(s,"-panel-").concat(d),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(d),"aria-hidden":!l,style:re(re({},x),n),className:q("".concat(r,"-tabpane"),l&&"".concat(r,"-tabpane-active"),a)},(l||N||o)&&b)}var or=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],kt=0;function ir(e){return pa(e).map(function(r){if(t.exports.isValidElement(r)){var o=r.key!==void 0?String(r.key):void 0;return re(re({key:o},r.props),{},{node:r})}return null}).filter(function(r){return r})}function sr(e,r){var o,a=e.id,n=e.prefixCls,s=n===void 0?"rc-tabs":n,l=e.className,u=e.children,c=e.direction,d=e.activeKey,b=e.defaultActiveKey,v=e.editable,y=e.animated,N=y===void 0?{inkBar:!0,tabPane:!1}:y,h=e.tabPosition,x=h===void 0?"top":h,P=e.tabBarGutter,R=e.tabBarStyle,T=e.tabBarExtraContent,m=e.locale,C=e.moreIcon,W=e.moreTransitionName,A=e.destroyInactiveTabPane,B=e.renderTabBar,w=e.onChange,g=e.onTabClick,I=e.onTabScroll,$=va(e,or),p=ir(u),k=c==="rtl",F;N===!1?F={inkBar:!1,tabPane:!1}:N===!0?F={inkBar:!0,tabPane:!0}:F=re({inkBar:!0,tabPane:!1},Ge(N)==="object"?N:{});var L=t.exports.useState(!1),X=_(L,2),G=X[0],i=X[1];t.exports.useEffect(function(){i(Pa())},[]);var S=gt(function(){var H;return(H=p[0])===null||H===void 0?void 0:H.key},{value:d,defaultValue:b}),f=_(S,2),O=f[0],V=f[1],z=t.exports.useState(function(){return p.findIndex(function(H){return H.key===O})}),J=_(z,2),ne=J[0],oe=J[1];t.exports.useEffect(function(){var H=p.findIndex(function(fe){return fe.key===O});if(H===-1){var me;H=Math.max(0,Math.min(ne,p.length-1)),V((me=p[H])===null||me===void 0?void 0:me.key)}oe(H)},[p.map(function(H){return H.key}).join("_"),O,ne]);var se=gt(null,{value:a}),ce=_(se,2),ue=ce[0],Z=ce[1],U=x;G&&!["left","right"].includes(x)&&(U="top"),t.exports.useEffect(function(){a||(Z("rc-tabs-".concat(kt)),kt+=1)},[]);function Y(H,me){g==null||g(H,me);var fe=H!==O;V(H),fe&&(w==null||w(H))}var ee={id:ue,activeKey:O,animated:F,tabPosition:U,rtl:k,mobile:G},te,de=re(re({},ee),{},{editable:v,locale:m,moreIcon:C,moreTransitionName:W,tabBarGutter:P,onTabClick:Y,onTabScroll:I,extra:T,style:R,panes:u});return B?te=B(de,Rt):te=t.exports.createElement(Rt,de),t.exports.createElement(Ze.Provider,{value:{tabs:p,prefixCls:s}},t.exports.createElement("div",K({ref:r,id:a,className:q(s,"".concat(s,"-").concat(U),(o={},E(o,"".concat(s,"-mobile"),G),E(o,"".concat(s,"-editable"),v),E(o,"".concat(s,"-rtl"),k),o),l)},$),te,t.exports.createElement(nr,K({destroyInactiveTabPane:A},ee,{animated:F}))))}var zt=t.exports.forwardRef(sr);zt.TabPane=jt;var lr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},cr=lr,Kt=function(r,o){return t.exports.createElement(Dt,re(re({},r),{},{ref:o,icon:cr}))};Kt.displayName="PlusOutlined";var ur=t.exports.forwardRef(Kt),dr=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o};function Ve(e){var r=e.type,o=e.className,a=e.size,n=e.onEdit,s=e.hideAdd,l=e.centered,u=e.addIcon,c=dr(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),d=c.prefixCls,b=c.moreIcon,v=b===void 0?t.exports.createElement(Ra,null):b,y=t.exports.useContext(ke),N=y.getPrefixCls,h=y.direction,x=N("tabs",d),P;r==="editable-card"&&(P={onEdit:function(m,C){var W=C.key,A=C.event;n==null||n(m==="add"?A:W,m)},removeIcon:t.exports.createElement(ma,null),addIcon:u||t.exports.createElement(ur,null),showAdd:s!==!0});var R=N();return t.exports.createElement($t.Consumer,null,function(T){var m,C=a!==void 0?a:T;return t.exports.createElement(zt,K({direction:h,moreTransitionName:"".concat(R,"-slide-up")},c,{className:q((m={},E(m,"".concat(x,"-").concat(C),C),E(m,"".concat(x,"-card"),["card","editable-card"].includes(r)),E(m,"".concat(x,"-editable-card"),r==="editable-card"),E(m,"".concat(x,"-centered"),l),m),o),editable:P,moreIcon:v,prefixCls:x}))})}Ve.TabPane=jt;var fr=globalThis&&globalThis.__rest||function(e,r){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]]);return o};function vr(e){var r=e.map(function(o,a){return t.exports.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},t.exports.createElement("span",null,o))});return r}var pr=t.exports.forwardRef(function(e,r){var o,a,n=t.exports.useContext(ke),s=n.getPrefixCls,l=n.direction,u=t.exports.useContext($t),c=function(ee){var te;(te=e.onTabChange)===null||te===void 0||te.call(e,ee)},d=function(){var ee;return t.exports.Children.forEach(e.children,function(te){te&&te.type&&te.type===Ft&&(ee=!0)}),ee},b=e.prefixCls,v=e.className,y=e.extra,N=e.headStyle,h=N===void 0?{}:N,x=e.bodyStyle,P=x===void 0?{}:x,R=e.title,T=e.loading,m=e.bordered,C=m===void 0?!0:m,W=e.size,A=e.type,B=e.cover,w=e.actions,g=e.tabList,I=e.children,$=e.activeTabKey,p=e.defaultActiveTabKey,k=e.tabBarExtraContent,F=e.hoverable,L=e.tabProps,X=L===void 0?{}:L,G=fr(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),i=s("card",b),S=P.padding===0||P.padding==="0px"?{padding:24}:void 0,f=t.exports.createElement("div",{className:"".concat(i,"-loading-block")}),O=t.exports.createElement("div",{className:"".concat(i,"-loading-content"),style:S},t.exports.createElement(Pe,{gutter:8},t.exports.createElement(ve,{span:22},f)),t.exports.createElement(Pe,{gutter:8},t.exports.createElement(ve,{span:8},f),t.exports.createElement(ve,{span:15},f)),t.exports.createElement(Pe,{gutter:8},t.exports.createElement(ve,{span:6},f),t.exports.createElement(ve,{span:18},f)),t.exports.createElement(Pe,{gutter:8},t.exports.createElement(ve,{span:13},f),t.exports.createElement(ve,{span:9},f)),t.exports.createElement(Pe,{gutter:8},t.exports.createElement(ve,{span:4},f),t.exports.createElement(ve,{span:3},f),t.exports.createElement(ve,{span:16},f))),V=$!==void 0,z=K(K({},X),(o={},E(o,V?"activeKey":"defaultActiveKey",V?$:p),E(o,"tabBarExtraContent",k),o)),J,ne=g&&g.length?t.exports.createElement(Ve,K({size:"large"},z,{className:"".concat(i,"-head-tabs"),onChange:c}),g.map(function(Y){return t.exports.createElement(Ve.TabPane,{tab:Y.tab,disabled:Y.disabled,key:Y.key})})):null;(R||y||ne)&&(J=t.exports.createElement("div",{className:"".concat(i,"-head"),style:h},t.exports.createElement("div",{className:"".concat(i,"-head-wrapper")},R&&t.exports.createElement("div",{className:"".concat(i,"-head-title")},R),y&&t.exports.createElement("div",{className:"".concat(i,"-extra")},y)),ne));var oe=B?t.exports.createElement("div",{className:"".concat(i,"-cover")},B):null,se=t.exports.createElement("div",{className:"".concat(i,"-body"),style:P},T?O:I),ce=w&&w.length?t.exports.createElement("ul",{className:"".concat(i,"-actions")},vr(w)):null,ue=ba(G,["onTabChange"]),Z=W||u,U=q(i,(a={},E(a,"".concat(i,"-loading"),T),E(a,"".concat(i,"-bordered"),C),E(a,"".concat(i,"-hoverable"),F),E(a,"".concat(i,"-contain-grid"),d()),E(a,"".concat(i,"-contain-tabs"),g&&g.length),E(a,"".concat(i,"-").concat(Z),Z),E(a,"".concat(i,"-type-").concat(A),!!A),E(a,"".concat(i,"-rtl"),l==="rtl"),a),v);return t.exports.createElement("div",K({ref:r},ue,{className:U}),J,oe,se,ce)}),mr=pr,Ye=mr;Ye.Grid=Ft;Ye.Meta=Va;var br=Ye,xr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},hr=xr,Wt=function(r,o){return t.exports.createElement(Dt,re(re({},r),{},{ref:o,icon:hr}))};Wt.displayName="DeleteOutlined";var yr=t.exports.forwardRef(Wt);const gr=Ue.lazy(()=>qe(()=>import("./index.936cd885.js"),["assets/index.936cd885.js","assets/index.2fc4de80.js","assets/index.76d3b482.css"])),Er=Ue.lazy(()=>qe(()=>import("./index.441c35ab.js"),["assets/index.441c35ab.js","assets/index.2fc4de80.js","assets/index.76d3b482.css","assets/index.2d9ac2c0.js"])),Cr=Ue.lazy(()=>qe(()=>import("./index.7580154c.js"),["assets/index.7580154c.js","assets/index.2fc4de80.js","assets/index.76d3b482.css","assets/index.2d9ac2c0.js","assets/index.8dc52bf9.js","assets/DownOutlined.ea57a54f.js","assets/dropdown.19eee904.js","assets/responsiveObserve.82db0129.js","assets/Dropdown.089351d5.js","assets/KeyCode.bb3c3291.js","assets/index.5178c024.js","assets/Overflow.11c8520f.js","assets/styled-components.browser.esm.fa67e1be.js","assets/index.48be8ed4.js","assets/index.8039ca92.js","assets/index.be943ab5.js"])),Sr=Oe.div`
  margin-bottom: 10px;
`,Ot=Oe.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,It=Oe.div`
  border: 1px dashed grey;
  border-radius: 10px;
  padding: 0 5px;
`,Nr=Oe.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
`,Pr=Oe.div`
  border: 1px dashed gray;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,{Text:Te}=Ia,zr=xa(()=>{var G;const{AuthStore:e,UserStore:r,UrlStore:o,UserCenterStore:a}=t.exports.useContext(ha),{logout:n}=e,{currentUser:s}=r,{isSyncing:l,localUrls:u,setIsSyncing:c,setLocalUrls:d}=a,{textInfo:b,appId:v,pagePath:y,isQueryAll:N,setTextInfo:h,setAppId:x,setPagePath:P,setPageCheckData:R,setIsQueryAll:T,queryAll:m,queryAllByCondition:C,deleteUrl:W,uploadAll:A,getPageType:B}=o,[w,g]=t.exports.useState([]),[I,$]=t.exports.useState(!1),p=i=>{c(!0),A(i).then(S=>{S==null||S.forEach(f=>{var O;ae.success({description:`\u5DF2\u4E0A\u4F20${(O=f==null?void 0:f.attributes)==null?void 0:O.name}`})})},S=>{$(!0),ae.error({description:"\u4E0A\u4F20\u5931\u8D25\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458"}),ae.error({description:JSON.stringify(S)})}).finally(()=>{c(!1),I||localStorage.removeItem("encodedUrl_history")})},k=()=>{c(!0),m().then(i=>{g(new Array(Object.entries(i).length).fill(!1)),d(i),Object.entries(i).length===0?ae.info({description:"\u6682\u65E0\u6570\u636E"}):ae.success({description:"\u540C\u6B65\u6210\u529F"})},i=>{ae.error({description:"\u4E0A\u4F20\u5931\u8D25\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458"}),ae.error({description:JSON.stringify(i)})}).finally(()=>{c(!1)})},F=(i,S)=>{c(!0),C(i,S).then(f=>{g(new Array(Object.entries(f).length).fill(!1)),d(f),Object.entries(f).length===0?ae.info({description:"\u6682\u65E0\u6570\u636E"}):ae.success({description:"\u540C\u6B65\u6210\u529F"})},f=>{ae.error({description:"\u4E0A\u4F20\u5931\u8D25\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458"}),ae.error({description:JSON.stringify(f)})}).finally(()=>{c(!1)})},L=i=>{h(ie(xt,{children:[i[0]," ",j(Ca,{})," ",i[1]]})),x(Ke[i[0]]),P(We[i[0]][i[1]]),ht[Ke[i[0]]][We[i[0]][i[1]]]?R(Object.entries(ht[Ke[i[0]]][We[i[0]][i[1]]]).map(S=>(typeof S[1]=="boolean"&&(S[1]=S[1].toString()),Array.isArray(S[1])||(S[1]=[S[1]]),S))):R([])},X=i=>{T(i.target.value)};return t.exports.useEffect(()=>{document.title="\u4E2A\u4EBA\u4E2D\u5FC3"},[]),ie(xt,{children:[j(Cr,{ghost:!1,onBack:()=>window.history.back(),title:"No. 3",subTitle:"\u4E2A\u4EBA\u4E2D\u5FC3\u7BA1\u7406\u9762\u677F",extra:[localStorage.getItem("encodedUrl_history")&&j(xe,{type:"primary",danger:!0,onClick:()=>{p(JSON.parse(localStorage.getItem("encodedUrl_history")))},children:"\u4E0A\u4F20\u672C\u5730\u5B58\u50A8\u6570\u636E"},1),j(xe,{type:"primary",disabled:!0,style:{backgroundColor:"#66a80f",color:"white"},children:(G=s==null?void 0:s.attributes)==null?void 0:G.realname},2),j(xe,{type:"primary",danger:!0,onClick:()=>n(),children:"\u6CE8\u9500"},3)]}),ie(Er,{children:[ie(Ne,{children:[j(Te,{strong:!0,children:"\u9009\u62E9\u67E5\u8BE2"}),ie(He.Group,{onChange:X,value:N,defaultValue:!1,children:[j(He,{value:!0,children:"\u6240\u6709\u7528\u6237"}),j(He,{value:!1,children:"\u5F53\u524D\u7528\u6237"})]})]}),ie(Pr,{children:[ie(Ne,{children:[j(Sa,{options:ya,onChange:L,size:"large",notFoundContent:"\u65E0\u6570\u636E",children:j("a",{href:"/#",children:j(xe,{type:"primary",children:"\u70B9\u51FB\u9009\u62E9\u6216\u5207\u6362"})})}),j(Te,{style:{backgroundColor:"#ffc9c9",color:"black",padding:"5px 10px"},children:b})]}),ie(Ne,{children:[j(xe,{type:"primary",danger:!0,onClick:()=>k(),children:"\u67E5\u8BE2\u6240\u6709\u9875\u9762\u6570\u636E"}),j(xe,{type:"primary",onClick:()=>{v&&y?F(v,y):ae.error({description:"\u8BF7\u9009\u62E9\u9875\u9762"})},children:"\u67E5\u8BE2\u5F53\u524D\u9875\u9762\u6570\u636E"})]})]}),l?j(Ea,{tip:"\u6B63\u5728\u548C\u4E91\u670D\u52A1\u5668\u540C\u6B65\u6570\u636E",size:"large"}):(u==null?void 0:u.length)>0?u.map((i,S)=>{var f,O,V,z,J,ne,oe,se,ce,ue;return j(Sr,{children:j(ja.Ribbon,{text:S+1,children:j(br,{title:ie(Ot,{children:[j(Te,{strong:!0,children:(f=i==null?void 0:i.attributes)==null?void 0:f.name}),ie(Nr,{children:[j(It,{children:(O=i==null?void 0:i.attributes)==null?void 0:O.user}),j(It,{children:B((V=i==null?void 0:i.attributes)==null?void 0:V.url)})]})]}),size:"small",hoverable:!0,type:"inner",children:ie(Ot,{children:[ie(Ne,{children:[((J=(z=i==null?void 0:i.attributes)==null?void 0:z.enterId)==null?void 0:J.length)>0&&ie(Te,{code:!0,children:["\u5165\u53E3ID: ",(ne=i==null?void 0:i.attributes)==null?void 0:ne.enterId.join(", ")]}),((se=(oe=i==null?void 0:i.attributes)==null?void 0:oe.sourceOrigin)==null?void 0:se.length)>0&&ie(Te,{code:!0,children:["\u8BA2\u5355\u6765\u6E90: ",(ce=i==null?void 0:i.attributes)==null?void 0:ce.sourceOrigin.join(", ")]})]}),ie(Ne,{children:[j(xe,{type:"dashed",shape:"round",onClick:()=>{var Z;navigator.clipboard.writeText((Z=i==null?void 0:i.attributes)==null?void 0:Z.url),ae.success({description:"\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F"})},children:"\u70B9\u51FB\u590D\u5236\u94FE\u63A5"}),j(Oa,{content:j(gr,{value:(ue=i==null?void 0:i.attributes)==null?void 0:ue.url,size:200}),title:"\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801",trigger:"click",visible:w[S],onVisibleChange:()=>{const Z=[...w];Z[S]=!Z[S],g(Z)},children:j(xe,{type:"dashed",shape:"round",onClick:()=>{ae.info({description:"\u67E5\u770B\u5386\u53F2\u94FE\u63A5\u4E8C\u7EF4\u7801"})},children:"\u70B9\u51FB\u67E5\u770B\u4E8C\u7EF4\u7801"})}),j(yr,{style:{color:"red"},onClick:()=>{var Z,U;((U=(Z=i==null?void 0:i.attributes)==null?void 0:Z.owner)==null?void 0:U.id)===(s==null?void 0:s.id)?(u.splice(S,1),d(u),W(i.id),ae.success({description:"\u5220\u9664\u6210\u529F"})):ae.error({description:"\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684\u5386\u53F2\u94FE\u63A5"})}})]})]})})})},S)}):j(ga,{})]})]})});export{zr as default};
