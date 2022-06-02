import{r as a,Q as de,B as F,y as $t,d as h,ai as ue,C as We,k as Ve,b as pe,_ as J,v as C,l as _t,x as fe,J as Je,al as ce,V as xe,T as Pt,o as Fe,A as Lt,H as Nt,at as Mt}from"./index.68d31444.js";import{T as It}from"./styled-components.browser.esm.6b2eb042.js";var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},jt=Dt,Ge=function(t,n){return a.exports.createElement(de,F(F({},t),{},{ref:n,icon:jt}))};Ge.displayName="CheckOutlined";var zt=a.exports.forwardRef(Ge),Qe=function(t){if($t()&&window.document.documentElement){var n=Array.isArray(t)?t:[t],r=window.document.documentElement;return n.some(function(o){return o in r.style})}return!1},Kt=function(t,n){if(!Qe(t))return!1;var r=document.createElement("div"),o=r.style[t];return r.style[t]=n,r.style[t]!==o};function je(e,t){return!Array.isArray(e)&&t!==void 0?Kt(e,t):Qe(e)}var At=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},Ht={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Ut=a.exports.forwardRef(function(e,t){var n=function(u){var m=u.keyCode;m===ue.ENTER&&u.preventDefault()},r=function(u){var m=u.keyCode,S=e.onClick;m===ue.ENTER&&S&&S()},o=e.style,s=e.noStyle,p=e.disabled,l=At(e,["style","noStyle","disabled"]),f={};return s||(f=h({},Ht)),p&&(f.pointerEvents="none"),f=h(h({},f),o),a.exports.createElement("div",h({role:"button",tabIndex:0,ref:t},l,{onKeyDown:n,onKeyUp:r,style:f}))}),ze=Ut,Bt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},Wt=function(t,n){var r=t.prefixCls,o=t.component,s=o===void 0?"article":o,p=t.className,l=t["aria-label"],f=t.setContentRef,E=t.children,u=Bt(t,["prefixCls","component","className","aria-label","setContentRef","children"]),m=a.exports.useContext(We),S=m.getPrefixCls,I=m.direction,b=n;f&&(b=Ve(n,f));var L=s,_=S("typography",r),g=pe(_,J({},"".concat(_,"-rtl"),I==="rtl"),p);return a.exports.createElement(L,h({className:g,"aria-label":l,ref:b},u),E)},Xe=a.exports.forwardRef(Wt);Xe.displayName="Typography";var Vt=Xe,qe=Vt,Jt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},Ft=Jt,Ke={"text/plain":"Text","text/html":"Url",default:"Text"},Gt="Copy to clipboard: #{key}, Enter";function Qt(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Xt(e,t){var n,r,o,s,p,l,f=!1;t||(t={}),n=t.debug||!1;try{o=Ft(),s=document.createRange(),p=document.getSelection(),l=document.createElement("span"),l.textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(u){if(u.stopPropagation(),t.format)if(u.preventDefault(),typeof u.clipboardData=="undefined"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=Ke[t.format]||Ke.default;window.clipboardData.setData(m,e)}else u.clipboardData.clearData(),u.clipboardData.setData(t.format,e);t.onCopy&&(u.preventDefault(),t.onCopy(u.clipboardData))}),document.body.appendChild(l),s.selectNodeContents(l),p.addRange(s);var E=document.execCommand("copy");if(!E)throw new Error("copy command was unsuccessful");f=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),r=Qt("message"in t?t.message:Gt),window.prompt(r,e)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(s):p.removeAllRanges()),l&&document.body.removeChild(l),o()}return f}var qt=Xt,Yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Zt=Yt,Ye=function(t,n){return a.exports.createElement(de,F(F({},t),{},{ref:n,icon:Zt}))};Ye.displayName="EditOutlined";var er=a.exports.forwardRef(Ye),tr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},rr=tr,Ze=function(t,n){return a.exports.createElement(de,F(F({},t),{},{ref:n,icon:rr}))};Ze.displayName="CopyOutlined";var nr=a.exports.forwardRef(Ze),ar={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},or=ar,et=function(t,n){return a.exports.createElement(de,F(F({},t),{},{ref:n,icon:or}))};et.displayName="EnterOutlined";var ir=a.exports.forwardRef(et),lr=function(t){var n=t.prefixCls,r=t["aria-label"],o=t.className,s=t.style,p=t.direction,l=t.maxLength,f=t.autoSize,E=f===void 0?!0:f,u=t.value,m=t.onSave,S=t.onCancel,I=t.onEnd,b=t.component,L=t.enterIcon,_=L===void 0?a.exports.createElement(ir,null):L,g=a.exports.useRef(),T=a.exports.useRef(!1),D=a.exports.useRef(),w=a.exports.useState(u),G=C(w,2),j=G[0],Q=G[1];a.exports.useEffect(function(){Q(u)},[u]),a.exports.useEffect(function(){if(g.current&&g.current.resizableTextArea){var y=g.current.resizableTextArea.textArea;y.focus();var x=y.value.length;y.setSelectionRange(x,x)}},[]);var H=function(x){var R=x.target;Q(R.value.replace(/[\n\r]/g,""))},v=function(){T.current=!0},N=function(){T.current=!1},M=function(x){var R=x.keyCode;T.current||(D.current=R)},U=function(){m(j.trim())},X=function(x){var R=x.keyCode,ee=x.ctrlKey,Y=x.altKey,z=x.metaKey,P=x.shiftKey;D.current===R&&!T.current&&!ee&&!Y&&!z&&!P&&(R===ue.ENTER?(U(),I==null||I()):R===ue.ESC&&S())},B=function(){U()},q=b?"".concat(n,"-").concat(b):"",O=pe(n,"".concat(n,"-edit-content"),J({},"".concat(n,"-rtl"),p==="rtl"),o,q);return a.exports.createElement("div",{className:O,style:s},a.exports.createElement(It,{ref:g,maxLength:l,value:j,onChange:H,onKeyDown:M,onKeyUp:X,onCompositionStart:v,onCompositionEnd:N,onBlur:B,"aria-label":r,rows:1,autoSize:E}),_!==null?_t(_,{className:"".concat(n,"-edit-content-confirm")}):null)},sr=lr;function me(e,t){return a.exports.useMemo(function(){var n=!!e;return[n,h(h({},t),n&&fe(e)==="object"?e:null)]},[e])}var cr=function(e,t){var n=a.exports.useRef(!1);a.exports.useEffect(function(){n.current?e():n.current=!0},t)};function tt(e){var t=fe(e);return t==="string"||t==="number"}function ur(e){var t=0;return e.forEach(function(n){tt(n)?t+=String(n).length:t+=1}),t}function Ae(e,t){for(var n=0,r=[],o=0;o<e.length;o+=1){if(n===t)return r;var s=e[o],p=tt(s),l=p?String(s).length:1,f=n+l;if(f>t){var E=t-n;return r.push(String(s).slice(0,E)),r}r.push(s),n=f}return e}var pr=0,le=1,He=2,ge=3,Ue=4,dr=function(t){var n=t.enabledMeasure,r=t.children,o=t.text,s=t.width,p=t.rows,l=t.onEllipsis,f=a.exports.useState([0,0,0]),E=C(f,2),u=E[0],m=E[1],S=a.exports.useState(pr),I=C(S,2),b=I[0],L=I[1],_=C(u,3),g=_[0],T=_[1],D=_[2],w=a.exports.useState(0),G=C(w,2),j=G[0],Q=G[1],H=a.exports.useRef(null),v=a.exports.useRef(null),N=a.exports.useMemo(function(){return Je(o)},[o]),M=a.exports.useMemo(function(){return ur(N)},[N]),U=a.exports.useMemo(function(){return!n||b!==ge?r(N,!1):r(Ae(N,T),T<M)},[n,b,r,N,T,M]);ce(function(){n&&s&&M&&(L(le),m([0,Math.ceil(M/2),M]))},[n,s,o,M,p]),ce(function(){var O;b===le&&Q(((O=H.current)===null||O===void 0?void 0:O.offsetHeight)||0)},[b]),ce(function(){var O,y;if(j){if(b===le){var x=((O=v.current)===null||O===void 0?void 0:O.offsetHeight)||0,R=p*j;x<=R?(L(Ue),l(!1)):L(He)}else if(b===He)if(g!==D){var ee=((y=v.current)===null||y===void 0?void 0:y.offsetHeight)||0,Y=p*j,z=g,P=D;g===D-1?P=g:ee<=Y?z=T:P=T;var ye=Math.ceil((z+P)/2);m([z,ye,P])}else L(ge),l(!0)}},[b,g,D,p,j]);var X={width:s,whiteSpace:"normal",margin:0,padding:0},B=function(y,x,R){return a.exports.createElement("span",{"aria-hidden":!0,ref:x,style:h({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},R)},y)},q=function(y,x){var R=Ae(N,y);return B(r(R,!0),x,X)};return a.exports.createElement(a.exports.Fragment,null,U,n&&b!==ge&&b!==Ue&&a.exports.createElement(a.exports.Fragment,null,B("lg",H,{wordBreak:"keep-all",whiteSpace:"nowrap"}),b===le?B(r(N,!1),v,X):q(T,v)))},fr=dr,vr=function(t){var n=t.title,r=t.enabledEllipsis,o=t.isEllipsis,s=t.children;return!n||!r?s:a.exports.createElement(xe,{title:n,visible:o?void 0:!1},s)},yr=vr,mr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function gr(e,t){var n=e.mark,r=e.code,o=e.underline,s=e.delete,p=e.strong,l=e.keyboard,f=e.italic,E=t;function u(m,S){!m||(E=a.exports.createElement(S,{},E))}return u(p,"strong"),u(o,"u"),u(s,"del"),u(r,"code"),u(n,"mark"),u(l,"kbd"),u(f,"i"),E}function se(e,t,n){return e===!0||e===void 0?t:e||n&&t}function Be(e){return Array.isArray(e)?e:[e]}var xr="...",br=a.exports.forwardRef(function(e,t){var n=e.prefixCls,r=e.className,o=e.style,s=e.type,p=e.disabled,l=e.children,f=e.ellipsis,E=e.editable,u=e.copyable,m=e.component,S=e.title,I=mr(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),b=a.exports.useContext(We),L=b.getPrefixCls,_=b.direction,g=Pt("Text")[0],T=a.exports.useRef(null),D=a.exports.useRef(null),w=L("typography",n),G=Fe(I,["mark","code","delete","underline","strong","keyboard","italic"]),j=me(E),Q=C(j,2),H=Q[0],v=Q[1],N=Lt(!1,{value:v.editing}),M=C(N,2),U=M[0],X=M[1],B=v.triggerType,q=B===void 0?["icon"]:B,O=function(i){var c;i&&((c=v.onStart)===null||c===void 0||c.call(v)),X(i)};cr(function(){var d;U||(d=D.current)===null||d===void 0||d.focus()},[U]);var y=function(i){i==null||i.preventDefault(),O(!0)},x=function(i){var c;(c=v.onChange)===null||c===void 0||c.call(v,i),O(!1)},R=function(){var i;(i=v.onCancel)===null||i===void 0||i.call(v),O(!1)},ee=me(u),Y=C(ee,2),z=Y[0],P=Y[1],ye=a.exports.useState(!1),be=C(ye,2),ne=be[0],Ee=be[1],he=a.exports.useRef(),Ce=function(){clearTimeout(he.current)},rt=function(i){var c;i==null||i.preventDefault(),i==null||i.stopPropagation(),qt(P.text||String(l)||""),Ee(!0),Ce(),he.current=setTimeout(function(){Ee(!1)},3e3),(c=P.onCopy)===null||c===void 0||c.call(P,i)};a.exports.useEffect(function(){return Ce},[]);var nt=a.exports.useState(!1),Se=C(nt,2),we=Se[0],at=Se[1],ot=a.exports.useState(!1),Oe=C(ot,2),Re=Oe[0],it=Oe[1],lt=a.exports.useState(!1),Te=C(lt,2),st=Te[0],ct=Te[1],ut=a.exports.useState(!1),ke=C(ut,2),$e=ke[0],pt=ke[1],dt=a.exports.useState(!1),_e=C(dt,2),Pe=_e[0],ft=_e[1],vt=me(f,{expandable:!1}),Le=C(vt,2),W=Le[0],k=Le[1],K=W&&!st,Ne=k.rows,Z=Ne===void 0?1:Ne,ae=a.exports.useMemo(function(){return!K||k.suffix!==void 0||k.onEllipsis||k.expandable||H||z},[K,k,H,z]);ce(function(){W&&!ae&&(at(je("webkitLineClamp")),it(je("textOverflow")))},[ae,W]);var A=a.exports.useMemo(function(){return ae?!1:Z===1?Re:we},[ae,Re,we]),Me=K&&(A?Pe:$e),yt=K&&Z===1&&A,oe=K&&Z>1&&A,mt=function(i){var c;ct(!0),(c=k.onExpand)===null||c===void 0||c.call(k,i)},gt=a.exports.useState(0),Ie=C(gt,2),xt=Ie[0],bt=Ie[1],Et=function(i){var c=i.offsetWidth;bt(c)},ht=function(i){var c;pt(i),$e!==i&&((c=k.onEllipsis)===null||c===void 0||c.call(k,i))};a.exports.useEffect(function(){var d=T.current;if(W&&A&&d){var i=oe?d.offsetHeight<d.scrollHeight:d.offsetWidth<d.scrollWidth;Pe!==i&&ft(i)}},[W,A,l,oe]);var ie=k.tooltip===!0?l:k.tooltip,De=a.exports.useMemo(function(){var d=function(c){return["string","number"].includes(fe(c))};if(!(!W||A)){if(d(l))return l;if(d(S))return S;if(d(ie))return ie}},[W,A,S,ie,Me]);if(U)return a.exports.createElement(sr,{value:typeof l=="string"?l:"",onSave:x,onCancel:R,onEnd:v.onEnd,prefixCls:w,className:r,style:o,direction:_,component:m,maxLength:v.maxLength,autoSize:v.autoSize,enterIcon:v.enterIcon});var Ct=function(){var i=k.expandable,c=k.symbol;if(!i)return null;var $;return c?$=c:$=g.expand,a.exports.createElement("a",{key:"expand",className:"".concat(w,"-expand"),onClick:mt,"aria-label":g.expand},$)},St=function(){if(!!H){var i=v.icon,c=v.tooltip,$=Je(c)[0]||g.edit,V=typeof $=="string"?$:"";return q.includes("icon")?a.exports.createElement(xe,{key:"edit",title:c===!1?"":$},a.exports.createElement(ze,{ref:D,className:"".concat(w,"-edit"),onClick:y,"aria-label":V},i||a.exports.createElement(er,{role:"button"}))):null}},wt=function(){if(!!z){var i=P.tooltips,c=P.icon,$=Be(i),V=Be(c),te=ne?se($[1],g.copied):se($[0],g.copy),Tt=ne?g.copied:g.copy,kt=typeof te=="string"?te:Tt;return a.exports.createElement(xe,{key:"copy",title:te},a.exports.createElement(ze,{className:pe("".concat(w,"-copy"),ne&&"".concat(w,"-copy-success")),onClick:rt,"aria-label":kt},ne?se(V[1],a.exports.createElement(zt,null),!0):se(V[0],a.exports.createElement(nr,null),!0)))}},Ot=function(i){return[i&&Ct(),St(),wt()]},Rt=function(i){return[i&&a.exports.createElement("span",{"aria-hidden":!0,key:"ellipsis"},xr),k.suffix,Ot(i)]};return a.exports.createElement(Nt,{onResize:Et,disabled:!K||A},function(d){var i;return a.exports.createElement(yr,{title:ie,enabledEllipsis:K,isEllipsis:Me},a.exports.createElement(qe,h({className:pe((i={},J(i,"".concat(w,"-").concat(s),s),J(i,"".concat(w,"-disabled"),p),J(i,"".concat(w,"-ellipsis"),W),J(i,"".concat(w,"-single-line"),K&&Z===1),J(i,"".concat(w,"-ellipsis-single-line"),yt),J(i,"".concat(w,"-ellipsis-multiple-line"),oe),i),r),style:h(h({},o),{WebkitLineClamp:oe?Z:void 0}),component:m,ref:Ve(d,T,t),direction:_,onClick:q.includes("text")?y:null,"aria-label":De,title:S},G),a.exports.createElement(fr,{enabledMeasure:K&&!A,text:l,rows:Z,width:xt,onEllipsis:ht},function(c,$){var V=c;c.length&&$&&De&&(V=a.exports.createElement("span",{key:"show-content","aria-hidden":!0},V));var te=gr(e,a.exports.createElement(a.exports.Fragment,null,V,Rt($)));return te})))})}),ve=br,Er=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},hr=function(t,n){var r=t.ellipsis,o=Er(t,["ellipsis"]),s=a.exports.useMemo(function(){return r&&fe(r)==="object"?Fe(r,["expandable","rows"]):r},[r]);return a.exports.createElement(ve,h({ref:n},o,{ellipsis:s,component:"span"}))},Cr=a.exports.forwardRef(hr),Sr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},wr=function(t,n){var r=t.ellipsis,o=t.rel,s=Sr(t,["ellipsis","rel"]),p=a.exports.useRef(null);a.exports.useImperativeHandle(n,function(){return p.current});var l=h(h({},s),{rel:o===void 0&&s.target==="_blank"?"noopener noreferrer":o});return delete l.navigate,a.exports.createElement(ve,h({},l,{ref:p,ellipsis:!!r,component:"a"}))},Or=a.exports.forwardRef(wr),Rr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},Tr=Mt(1,2,3,4,5),kr=function(t,n){var r=t.level,o=r===void 0?1:r,s=Rr(t,["level"]),p;return Tr.indexOf(o)!==-1?p="h".concat(o):p="h1",a.exports.createElement(ve,h({ref:n},s,{component:p}))},$r=a.exports.forwardRef(kr),_r=function(t,n){return a.exports.createElement(ve,h({ref:n},t,{component:"div"}))},Pr=a.exports.forwardRef(_r),re=qe;re.Text=Cr;re.Link=Or;re.Title=$r;re.Paragraph=Pr;var Mr=re;export{zt as C,er as E,Mr as T,ze as a,je as i};
