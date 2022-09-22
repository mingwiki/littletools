import{r as h,j as R,A as ye,q,D as Kt,_ as A,b as ve,d as J,k as ae,f as Qt,e as Z,a as se,C as et,c as tt,t as rt,F as ge,aa as Wt,o as nt,aw as Vt}from"./index.6d8c0639.js";import{b as he,T as Re,a as Yt,R as Gt}from"./index.2a25a4ba.js";import{K as Ke,T as Qe}from"./transButton.61883223.js";import{T as Xt}from"./TextArea.b65b0e93.js";var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const Zt=Jt;var ot=function(e,a){return R(ye,{...q(q({},e),{},{ref:a,icon:Zt})})};ot.displayName="CheckOutlined";const qt=h.exports.forwardRef(ot);var it=function(e){if(Kt()&&window.document.documentElement){var a=Array.isArray(e)?e:[e],o=window.document.documentElement;return a.some(function(l){return l in o.style})}return!1},er=function(e,a){if(!it(e))return!1;var o=document.createElement("div"),l=o.style[e];return o.style[e]=a,o.style[e]!==l};function We(i,e){return!Array.isArray(i)&&e!==void 0?er(i,e):it(i)}var tr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const rr=tr;var at=function(e,a){return R(ye,{...q(q({},e),{},{ref:a,icon:rr})})};at.displayName="CopyOutlined";const nr=h.exports.forwardRef(at);var or={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const ir=or;var st=function(e,a){return R(ye,{...q(q({},e),{},{ref:a,icon:ir})})};st.displayName="EditOutlined";const ar=h.exports.forwardRef(st);var sr=function(){var i=document.getSelection();if(!i.rangeCount)return function(){};for(var e=document.activeElement,a=[],o=0;o<i.rangeCount;o++)a.push(i.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return i.removeAllRanges(),function(){i.type==="Caret"&&i.removeAllRanges(),i.rangeCount||a.forEach(function(l){i.addRange(l)}),e&&e.focus()}},lr=sr,Ve={"text/plain":"Text","text/html":"Url",default:"Text"},cr="Copy to clipboard: #{key}, Enter";function ur(i){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return i.replace(/#{\s*key\s*}/g,e)}function fr(i,e){var a,o,l,f,p,d,t=!1;e||(e={}),a=e.debug||!1;try{l=lr(),f=document.createRange(),p=document.getSelection(),d=document.createElement("span"),d.textContent=i,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(r){if(r.stopPropagation(),e.format)if(r.preventDefault(),typeof r.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=Ve[e.format]||Ve.default;window.clipboardData.setData(s,i)}else r.clipboardData.clearData(),r.clipboardData.setData(e.format,i);e.onCopy&&(r.preventDefault(),e.onCopy(r.clipboardData))}),document.body.appendChild(d),f.selectNodeContents(d),p.addRange(f);var n=document.execCommand("copy");if(!n)throw new Error("copy command was unsuccessful");t=!0}catch(r){a&&console.error("unable to copy using execCommand: ",r),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",i),e.onCopy&&e.onCopy(window.clipboardData),t=!0}catch(s){a&&console.error("unable to copy using clipboardData: ",s),a&&console.error("falling back to prompt"),o=ur("message"in e?e.message:cr),window.prompt(o,i)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(f):p.removeAllRanges()),d&&document.body.removeChild(d),l()}return t}var dr=fr,pr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const hr=pr;var lt=function(e,a){return R(ye,{...q(q({},e),{},{ref:a,icon:hr})})};lt.displayName="EnterOutlined";const vr=h.exports.forwardRef(lt);var gr=function(e){var a=e.prefixCls,o=e["aria-label"],l=e.className,f=e.style,p=e.direction,d=e.maxLength,t=e.autoSize,n=t===void 0?!0:t,r=e.value,s=e.onSave,c=e.onCancel,v=e.onEnd,u=e.component,E=e.enterIcon,m=E===void 0?R(vr,{}):E,S=h.exports.useRef(),x=h.exports.useRef(!1),y=h.exports.useRef(),C=h.exports.useState(r),O=A(C,2),I=O[0],T=O[1];h.exports.useEffect(function(){T(r)},[r]),h.exports.useEffect(function(){if(S.current&&S.current.resizableTextArea){var _=S.current.resizableTextArea.textArea;_.focus();var P=_.value.length;_.setSelectionRange(P,P)}},[]);var $=function(P){var k=P.target;T(k.value.replace(/[\n\r]/g,""))},M=function(){x.current=!0},D=function(){x.current=!1},z=function(P){var k=P.keyCode;x.current||(y.current=k)},j=function(){s(I.trim())},W=function(P){var k=P.keyCode,ne=P.ctrlKey,te=P.altKey,Q=P.metaKey,B=P.shiftKey;y.current===k&&!x.current&&!ne&&!te&&!Q&&!B&&(k===Ke.ENTER?(j(),v==null||v()):k===Ke.ESC&&c())},K=function(){j()},V=u?"".concat(a,"-").concat(u):"",L=ve(a,"".concat(a,"-edit-content"),J({},"".concat(a,"-rtl"),p==="rtl"),l,V);return ae("div",{className:L,style:f,children:[R(Xt,{ref:S,maxLength:d,value:I,onChange:$,onKeyDown:z,onKeyUp:W,onCompositionStart:M,onCompositionEnd:D,onBlur:K,"aria-label":o,rows:1,autoSize:n}),m!==null?Qt(m,{className:"".concat(a,"-edit-content-confirm")}):null]})};const mr=gr;function be(i,e){return h.exports.useMemo(function(){var a=!!i;return[a,Z(Z({},e),a&&se(i)==="object"?i:null)]},[i])}const yr=function(i,e){var a=h.exports.useRef(!1);h.exports.useEffect(function(){a.current?i():a.current=!0},e)};var Er=globalThis&&globalThis.__rest||function(i,e){var a={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(i);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(i,o[l])&&(a[o[l]]=i[o[l]]);return a},Cr=function(e,a){var o=e.prefixCls,l=e.component,f=l===void 0?"article":l,p=e.className,d=e["aria-label"],t=e.setContentRef,n=e.children,r=Er(e,["prefixCls","component","className","aria-label","setContentRef","children"]),s=h.exports.useContext(et),c=s.getPrefixCls,v=s.direction,u=a;t&&(u=tt(a,t));var E=f,m=c("typography",o),S=ve(m,J({},"".concat(m,"-rtl"),v==="rtl"),p);return R(E,{className:S,"aria-label":d,ref:u,...r,children:n})},br=h.exports.forwardRef(Cr),wr=br;const ct=wr;function ut(i){var e=se(i);return e==="string"||e==="number"}function Rr(i){var e=0;return i.forEach(function(a){ut(a)?e+=String(a).length:e+=1}),e}function Ye(i,e){for(var a=0,o=[],l=0;l<i.length;l+=1){if(a===e)return o;var f=i[l],p=ut(f),d=p?String(f).length:1,t=a+d;if(t>e){var n=e-a;return o.push(String(f).slice(0,n)),o}o.push(f),a=t}return i}var Sr=0,de=1,Ge=2,we=3,Xe=4,xr=function(e){var a=e.enabledMeasure,o=e.children,l=e.text,f=e.width,p=e.rows,d=e.onEllipsis,t=h.exports.useState([0,0,0]),n=A(t,2),r=n[0],s=n[1],c=h.exports.useState(Sr),v=A(c,2),u=v[0],E=v[1],m=A(r,3),S=m[0],x=m[1],y=m[2],C=h.exports.useState(0),O=A(C,2),I=O[0],T=O[1],$=h.exports.useRef(null),M=h.exports.useRef(null),D=h.exports.useMemo(function(){return rt(l)},[l]),z=h.exports.useMemo(function(){return Rr(D)},[D]),j=h.exports.useMemo(function(){return!a||u!==we?o(D,!1):o(Ye(D,x),x<z)},[a,u,o,D,x,z]);he(function(){a&&f&&z&&(E(de),s([0,Math.ceil(z/2),z]))},[a,f,l,z,p]),he(function(){var L;u===de&&T(((L=$.current)===null||L===void 0?void 0:L.offsetHeight)||0)},[u]),he(function(){var L,_;if(I){if(u===de){var P=((L=M.current)===null||L===void 0?void 0:L.offsetHeight)||0,k=p*I;P<=k?(E(Xe),d(!1)):E(Ge)}else if(u===Ge)if(S!==y){var ne=((_=M.current)===null||_===void 0?void 0:_.offsetHeight)||0,te=p*I,Q=S,B=y;S===y-1?B=S:ne<=te?Q=x:B=x;var Ce=Math.ceil((Q+B)/2);s([Q,Ce,B])}else E(we),d(!0)}},[u,S,y,p,I]);var W={width:f,whiteSpace:"normal",margin:0,padding:0},K=function(_,P,k){return R("span",{"aria-hidden":!0,ref:P,style:Z({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},k),children:_})},V=function(_,P){var k=Ye(D,_);return K(o(k,!0),P,W)};return ae(ge,{children:[j,a&&u!==we&&u!==Xe&&ae(ge,{children:[K("lg",$,{wordBreak:"keep-all",whiteSpace:"nowrap"}),u===de?K(o(D,!1),M,W):V(x,M)]})]})};const Mr=xr;var Or=function(e){var a=e.enabledEllipsis,o=e.isEllipsis,l=e.children,f=e.tooltipProps;return!(f!=null&&f.title)||!a?l:R(Re,{open:o?void 0:!1,...f,children:l})};const _r=Or;var Pr=globalThis&&globalThis.__rest||function(i,e){var a={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(i);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(i,o[l])&&(a[o[l]]=i[o[l]]);return a};function Nr(i,e){var a=i.mark,o=i.code,l=i.underline,f=i.delete,p=i.strong,d=i.keyboard,t=i.italic,n=e;function r(s,c){!s||(n=h.exports.createElement(c,{},n))}return r(p,"strong"),r(l,"u"),r(f,"del"),r(o,"code"),r(a,"mark"),r(d,"kbd"),r(t,"i"),n}function pe(i,e,a){return i===!0||i===void 0?e:i||a&&e}function Je(i){return Array.isArray(i)?i:[i]}var Ar="...",Ir=h.exports.forwardRef(function(i,e){var a=i.prefixCls,o=i.className,l=i.style,f=i.type,p=i.disabled,d=i.children,t=i.ellipsis,n=i.editable,r=i.copyable,s=i.component,c=i.title,v=Pr(i,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),u=h.exports.useContext(et),E=u.getPrefixCls,m=u.direction,S=Wt("Text")[0],x=h.exports.useRef(null),y=h.exports.useRef(null),C=E("typography",a),O=nt(v,["mark","code","delete","underline","strong","keyboard","italic"]),I=be(n),T=A(I,2),$=T[0],M=T[1],D=Yt(!1,{value:M.editing}),z=A(D,2),j=z[0],W=z[1],K=M.triggerType,V=K===void 0?["icon"]:K,L=function(g){var b;g&&((b=M.onStart)===null||b===void 0||b.call(M)),W(g)};yr(function(){var w;j||(w=y.current)===null||w===void 0||w.focus()},[j]);var _=function(g){g==null||g.preventDefault(),L(!0)},P=function(g){var b;(b=M.onChange)===null||b===void 0||b.call(M,g),L(!1)},k=function(){var g;(g=M.onCancel)===null||g===void 0||g.call(M),L(!1)},ne=be(r),te=A(ne,2),Q=te[0],B=te[1],Ce=h.exports.useState(!1),Se=A(Ce,2),ce=Se[0],xe=Se[1],Me=h.exports.useRef(),Oe={};B.format&&(Oe.format=B.format);var _e=function(){clearTimeout(Me.current)},ht=function(g){var b;g==null||g.preventDefault(),g==null||g.stopPropagation(),dr(B.text||String(d)||"",Oe),xe(!0),_e(),Me.current=setTimeout(function(){xe(!1)},3e3),(b=B.onCopy)===null||b===void 0||b.call(B,g)};h.exports.useEffect(function(){return _e},[]);var vt=h.exports.useState(!1),Pe=A(vt,2),Ne=Pe[0],gt=Pe[1],mt=h.exports.useState(!1),Ae=A(mt,2),Ie=Ae[0],yt=Ae[1],Et=h.exports.useState(!1),Te=A(Et,2),Ct=Te[0],bt=Te[1],wt=h.exports.useState(!1),Le=A(wt,2),ke=Le[0],Rt=Le[1],St=h.exports.useState(!1),$e=A(St,2),De=$e[0],xt=$e[1],Mt=h.exports.useState(!0),ze=A(Mt,2),Ot=ze[0],_t=ze[1],Pt=be(t,{expandable:!1}),Be=A(Pt,2),Y=Be[0],N=Be[1],U=Y&&!Ct,Fe=N.rows,re=Fe===void 0?1:Fe,ue=h.exports.useMemo(function(){return!U||N.suffix!==void 0||N.onEllipsis||N.expandable||$||Q},[U,N,$,Q]);he(function(){Y&&!ue&&(gt(We("webkitLineClamp")),yt(We("textOverflow")))},[ue,Y]);var H=h.exports.useMemo(function(){return ue?!1:re===1?Ie:Ne},[ue,Ie,Ne]),Ue=U&&(H?De:ke),Nt=U&&re===1&&H,fe=U&&re>1&&H,At=function(g){var b;bt(!0),(b=N.onExpand)===null||b===void 0||b.call(N,g)},It=h.exports.useState(0),He=A(It,2),Tt=He[0],Lt=He[1],kt=function(g){var b=g.offsetWidth;Lt(b)},$t=function(g){var b;Rt(g),ke!==g&&((b=N.onEllipsis)===null||b===void 0||b.call(N,g))};h.exports.useEffect(function(){var w=x.current;if(Y&&H&&w){var g=fe?w.offsetHeight<w.scrollHeight:w.offsetWidth<w.scrollWidth;De!==g&&xt(g)}},[Y,H,d,fe,Ot]),h.exports.useEffect(function(){var w=x.current;if(!(typeof IntersectionObserver>"u"||!w||!H||!U)){var g=new IntersectionObserver(function(){_t(!!w.offsetParent)});return g.observe(w),function(){g.disconnect()}}},[H,U]);var G={};N.tooltip===!0?G={title:d}:h.exports.isValidElement(N.tooltip)?G={title:N.tooltip}:se(N.tooltip)==="object"?G=Z({title:d},N.tooltip):G={title:N.tooltip};var je=h.exports.useMemo(function(){var w=function(b){return["string","number"].includes(se(b))};if(!(!Y||H)){if(w(d))return d;if(w(c))return c;if(w(G.title))return G.title}},[Y,H,c,G.title,Ue]);if(j)return R(mr,{value:typeof d=="string"?d:"",onSave:P,onCancel:k,onEnd:M.onEnd,prefixCls:C,className:o,style:l,direction:m,component:s,maxLength:M.maxLength,autoSize:M.autoSize,enterIcon:M.enterIcon});var Dt=function(){var g=N.expandable,b=N.symbol;if(!g)return null;var F;return b?F=b:F=S.expand,R("a",{className:"".concat(C,"-expand"),onClick:At,"aria-label":S.expand,children:F},"expand")},zt=function(){if(!!$){var g=M.icon,b=M.tooltip,F=rt(b)[0]||S.edit,X=typeof F=="string"?F:"";return V.includes("icon")?R(Re,{title:b===!1?"":F,children:R(Qe,{ref:y,className:"".concat(C,"-edit"),onClick:_,"aria-label":X,children:g||R(ar,{role:"button"})})},"edit"):null}},Bt=function(){if(!!Q){var g=B.tooltips,b=B.icon,F=Je(g),X=Je(b),oe=ce?pe(F[1],S.copied):pe(F[0],S.copy),Ht=ce?S.copied:S.copy,jt=typeof oe=="string"?oe:Ht;return R(Re,{title:oe,children:R(Qe,{className:ve("".concat(C,"-copy"),ce&&"".concat(C,"-copy-success")),onClick:ht,"aria-label":jt,children:ce?pe(X[1],R(qt,{}),!0):pe(X[0],R(nr,{}),!0)})},"copy")}},Ft=function(g){return[g&&Dt(),zt(),Bt()]},Ut=function(g){return[g&&R("span",{"aria-hidden":!0,children:Ar},"ellipsis"),N.suffix,Ft(g)]};return R(Gt,{onResize:kt,disabled:!U||H,children:function(w){var g;return R(_r,{tooltipProps:G,enabledEllipsis:U,isEllipsis:Ue,children:R(ct,{className:ve((g={},J(g,"".concat(C,"-").concat(f),f),J(g,"".concat(C,"-disabled"),p),J(g,"".concat(C,"-ellipsis"),Y),J(g,"".concat(C,"-single-line"),U&&re===1),J(g,"".concat(C,"-ellipsis-single-line"),Nt),J(g,"".concat(C,"-ellipsis-multiple-line"),fe),g),o),style:Z(Z({},l),{WebkitLineClamp:fe?re:void 0}),component:s,ref:tt(w,x,e),direction:m,onClick:V.includes("text")?_:null,"aria-label":je,title:c,...O,children:R(Mr,{enabledMeasure:U&&!H,text:d,rows:re,width:Tt,onEllipsis:$t,children:function(b,F){var X=b;b.length&&F&&je&&(X=R("span",{"aria-hidden":!0,children:X},"show-content"));var oe=Nr(i,ae(ge,{children:[X,Ut(F)]}));return oe}})})})}})});const Ee=Ir;var Tr=globalThis&&globalThis.__rest||function(i,e){var a={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(i);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(i,o[l])&&(a[o[l]]=i[o[l]]);return a},Lr=function(e,a){var o=e.ellipsis,l=e.rel,f=Tr(e,["ellipsis","rel"]),p=h.exports.useRef(null);h.exports.useImperativeHandle(a,function(){return p.current});var d=Z(Z({},f),{rel:l===void 0&&f.target==="_blank"?"noopener noreferrer":l});return delete d.navigate,R(Ee,{...d,ref:p,ellipsis:!!o,component:"a"})};const kr=h.exports.forwardRef(Lr);var $r=function(e,a){return R(Ee,{ref:a,...e,component:"div"})};const Dr=h.exports.forwardRef($r);var zr=globalThis&&globalThis.__rest||function(i,e){var a={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(i);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(i,o[l])&&(a[o[l]]=i[o[l]]);return a},Br=function(e,a){var o=e.ellipsis,l=zr(e,["ellipsis"]),f=h.exports.useMemo(function(){return o&&se(o)==="object"?nt(o,["expandable","rows"]):o},[o]);return R(Ee,{ref:a,...l,ellipsis:f,component:"span"})};const Fr=h.exports.forwardRef(Br);var Ur=globalThis&&globalThis.__rest||function(i,e){var a={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(i);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(i,o[l])&&(a[o[l]]=i[o[l]]);return a},Hr=Vt(1,2,3,4,5),jr=function(e,a){var o=e.level,l=o===void 0?1:o,f=Ur(e,["level"]),p;return Hr.indexOf(l)!==-1?p="h".concat(l):p="h1",R(Ee,{ref:a,...f,component:p})};const Kr=h.exports.forwardRef(jr);var le=ct;le.Text=Fr;le.Link=kr;le.Title=Kr;le.Paragraph=Dr;const cn=le;var Qr=Object.defineProperty,me=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,Ze=(i,e,a)=>e in i?Qr(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,qe=(i,e)=>{for(var a in e||(e={}))ft.call(e,a)&&Ze(i,a,e[a]);if(me)for(var a of me(e))dt.call(e,a)&&Ze(i,a,e[a]);return i},Wr=(i,e)=>{var a={};for(var o in i)ft.call(i,o)&&e.indexOf(o)<0&&(a[o]=i[o]);if(i!=null&&me)for(var o of me(i))e.indexOf(o)<0&&dt.call(i,o)&&(a[o]=i[o]);return a},ee;(i=>{const e=class{constructor(t,n,r,s){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(s<-1||s>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let c=[];for(let u=0;u<this.size;u++)c.push(!1);for(let u=0;u<this.size;u++)this.modules.push(c.slice()),this.isFunction.push(c.slice());this.drawFunctionPatterns();const v=this.addEccAndInterleave(r);if(this.drawCodewords(v),s==-1){let u=1e9;for(let E=0;E<8;E++){this.applyMask(E),this.drawFormatBits(E);const m=this.getPenaltyScore();m<u&&(s=E,u=m),this.applyMask(E)}}f(0<=s&&s<=7),this.mask=s,this.applyMask(s),this.drawFormatBits(s),this.isFunction=[]}static encodeText(t,n){const r=i.QrSegment.makeSegments(t);return e.encodeSegments(r,n)}static encodeBinary(t,n){const r=i.QrSegment.makeBytes(t);return e.encodeSegments([r],n)}static encodeSegments(t,n,r=1,s=40,c=-1,v=!0){if(!(e.MIN_VERSION<=r&&r<=s&&s<=e.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");let u,E;for(u=r;;u++){const y=e.getNumDataCodewords(u,n)*8,C=d.getTotalBits(t,u);if(C<=y){E=C;break}if(u>=s)throw new RangeError("Data too long")}for(const y of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])v&&E<=e.getNumDataCodewords(u,y)*8&&(n=y);let m=[];for(const y of t){o(y.mode.modeBits,4,m),o(y.numChars,y.mode.numCharCountBits(u),m);for(const C of y.getData())m.push(C)}f(m.length==E);const S=e.getNumDataCodewords(u,n)*8;f(m.length<=S),o(0,Math.min(4,S-m.length),m),o(0,(8-m.length%8)%8,m),f(m.length%8==0);for(let y=236;m.length<S;y^=253)o(y,8,m);let x=[];for(;x.length*8<m.length;)x.push(0);return m.forEach((y,C)=>x[C>>>3]|=y<<7-(C&7)),new e(u,n,x,c)}getModule(t,n){return 0<=t&&t<this.size&&0<=n&&n<this.size&&this.modules[n][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),n=t.length;for(let r=0;r<n;r++)for(let s=0;s<n;s++)r==0&&s==0||r==0&&s==n-1||r==n-1&&s==0||this.drawAlignmentPattern(t[r],t[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const n=this.errorCorrectionLevel.formatBits<<3|t;let r=n;for(let c=0;c<10;c++)r=r<<1^(r>>>9)*1335;const s=(n<<10|r)^21522;f(s>>>15==0);for(let c=0;c<=5;c++)this.setFunctionModule(8,c,l(s,c));this.setFunctionModule(8,7,l(s,6)),this.setFunctionModule(8,8,l(s,7)),this.setFunctionModule(7,8,l(s,8));for(let c=9;c<15;c++)this.setFunctionModule(14-c,8,l(s,c));for(let c=0;c<8;c++)this.setFunctionModule(this.size-1-c,8,l(s,c));for(let c=8;c<15;c++)this.setFunctionModule(8,this.size-15+c,l(s,c));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const n=this.version<<12|t;f(n>>>18==0);for(let r=0;r<18;r++){const s=l(n,r),c=this.size-11+r%3,v=Math.floor(r/3);this.setFunctionModule(c,v,s),this.setFunctionModule(v,c,s)}}drawFinderPattern(t,n){for(let r=-4;r<=4;r++)for(let s=-4;s<=4;s++){const c=Math.max(Math.abs(s),Math.abs(r)),v=t+s,u=n+r;0<=v&&v<this.size&&0<=u&&u<this.size&&this.setFunctionModule(v,u,c!=2&&c!=4)}}drawAlignmentPattern(t,n){for(let r=-2;r<=2;r++)for(let s=-2;s<=2;s++)this.setFunctionModule(t+s,n+r,Math.max(Math.abs(s),Math.abs(r))!=1)}setFunctionModule(t,n,r){this.modules[n][t]=r,this.isFunction[n][t]=!0}addEccAndInterleave(t){const n=this.version,r=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");const s=e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],c=e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],v=Math.floor(e.getNumRawDataModules(n)/8),u=s-v%s,E=Math.floor(v/s);let m=[];const S=e.reedSolomonComputeDivisor(c);for(let y=0,C=0;y<s;y++){let O=t.slice(C,C+E-c+(y<u?0:1));C+=O.length;const I=e.reedSolomonComputeRemainder(O,S);y<u&&O.push(0),m.push(O.concat(I))}let x=[];for(let y=0;y<m[0].length;y++)m.forEach((C,O)=>{(y!=E-c||O>=u)&&x.push(C[y])});return f(x.length==v),x}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let s=0;s<this.size;s++)for(let c=0;c<2;c++){const v=r-c,E=(r+1&2)==0?this.size-1-s:s;!this.isFunction[E][v]&&n<t.length*8&&(this.modules[E][v]=l(t[n>>>3],7-(n&7)),n++)}}f(n==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let n=0;n<this.size;n++)for(let r=0;r<this.size;r++){let s;switch(t){case 0:s=(r+n)%2==0;break;case 1:s=n%2==0;break;case 2:s=r%3==0;break;case 3:s=(r+n)%3==0;break;case 4:s=(Math.floor(r/3)+Math.floor(n/2))%2==0;break;case 5:s=r*n%2+r*n%3==0;break;case 6:s=(r*n%2+r*n%3)%2==0;break;case 7:s=((r+n)%2+r*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][r]&&s&&(this.modules[n][r]=!this.modules[n][r])}}getPenaltyScore(){let t=0;for(let c=0;c<this.size;c++){let v=!1,u=0,E=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[c][m]==v?(u++,u==5?t+=e.PENALTY_N1:u>5&&t++):(this.finderPenaltyAddHistory(u,E),v||(t+=this.finderPenaltyCountPatterns(E)*e.PENALTY_N3),v=this.modules[c][m],u=1);t+=this.finderPenaltyTerminateAndCount(v,u,E)*e.PENALTY_N3}for(let c=0;c<this.size;c++){let v=!1,u=0,E=[0,0,0,0,0,0,0];for(let m=0;m<this.size;m++)this.modules[m][c]==v?(u++,u==5?t+=e.PENALTY_N1:u>5&&t++):(this.finderPenaltyAddHistory(u,E),v||(t+=this.finderPenaltyCountPatterns(E)*e.PENALTY_N3),v=this.modules[m][c],u=1);t+=this.finderPenaltyTerminateAndCount(v,u,E)*e.PENALTY_N3}for(let c=0;c<this.size-1;c++)for(let v=0;v<this.size-1;v++){const u=this.modules[c][v];u==this.modules[c][v+1]&&u==this.modules[c+1][v]&&u==this.modules[c+1][v+1]&&(t+=e.PENALTY_N2)}let n=0;for(const c of this.modules)n=c.reduce((v,u)=>v+(u?1:0),n);const r=this.size*this.size,s=Math.ceil(Math.abs(n*20-r*10)/r)-1;return f(0<=s&&s<=9),t+=s*e.PENALTY_N4,f(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,n=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let s=this.size-7;r.length<t;s-=n)r.splice(1,0,s);return r}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;n-=(25*r-10)*r-55,t>=7&&(n-=36)}return f(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let n=[];for(let s=0;s<t-1;s++)n.push(0);n.push(1);let r=1;for(let s=0;s<t;s++){for(let c=0;c<n.length;c++)n[c]=e.reedSolomonMultiply(n[c],r),c+1<n.length&&(n[c]^=n[c+1]);r=e.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(t,n){let r=n.map(s=>0);for(const s of t){const c=s^r.shift();r.push(0),n.forEach((v,u)=>r[u]^=e.reedSolomonMultiply(v,c))}return r}static reedSolomonMultiply(t,n){if(t>>>8!=0||n>>>8!=0)throw new RangeError("Byte out of range");let r=0;for(let s=7;s>=0;s--)r=r<<1^(r>>>7)*285,r^=(n>>>s&1)*t;return f(r>>>8==0),r}finderPenaltyCountPatterns(t){const n=t[1];f(n<=this.size*3);const r=n>0&&t[2]==n&&t[3]==n*3&&t[4]==n&&t[5]==n;return(r&&t[0]>=n*4&&t[6]>=n?1:0)+(r&&t[6]>=n*4&&t[0]>=n?1:0)}finderPenaltyTerminateAndCount(t,n,r){return t&&(this.finderPenaltyAddHistory(n,r),n=0),n+=this.size,this.finderPenaltyAddHistory(n,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,n){n[0]==0&&(t+=this.size),n.pop(),n.unshift(t)}};let a=e;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],i.QrCode=a;function o(t,n,r){if(n<0||n>31||t>>>n!=0)throw new RangeError("Value out of range");for(let s=n-1;s>=0;s--)r.push(t>>>s&1)}function l(t,n){return(t>>>n&1)!=0}function f(t){if(!t)throw new Error("Assertion error")}const p=class{constructor(t,n,r){if(this.mode=t,this.numChars=n,this.bitData=r,n<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let n=[];for(const r of t)o(r,8,n);return new p(p.Mode.BYTE,t.length,n)}static makeNumeric(t){if(!p.isNumeric(t))throw new RangeError("String contains non-numeric characters");let n=[];for(let r=0;r<t.length;){const s=Math.min(t.length-r,3);o(parseInt(t.substr(r,s),10),s*3+1,n),r+=s}return new p(p.Mode.NUMERIC,t.length,n)}static makeAlphanumeric(t){if(!p.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let n=[],r;for(r=0;r+2<=t.length;r+=2){let s=p.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;s+=p.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),o(s,11,n)}return r<t.length&&o(p.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,n),new p(p.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return t==""?[]:p.isNumeric(t)?[p.makeNumeric(t)]:p.isAlphanumeric(t)?[p.makeAlphanumeric(t)]:[p.makeBytes(p.toUtf8ByteArray(t))]}static makeEci(t){let n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<1<<7)o(t,8,n);else if(t<1<<14)o(2,2,n),o(t,14,n);else if(t<1e6)o(6,3,n),o(t,21,n);else throw new RangeError("ECI assignment value out of range");return new p(p.Mode.ECI,0,n)}static isNumeric(t){return p.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return p.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,n){let r=0;for(const s of t){const c=s.mode.numCharCountBits(n);if(s.numChars>=1<<c)return 1/0;r+=4+c+s.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let n=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?n.push(t.charCodeAt(r)):(n.push(parseInt(t.substr(r+1,2),16)),r+=2);return n}};let d=p;d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",i.QrSegment=d})(ee||(ee={}));(i=>{(e=>{const a=class{constructor(l,f){this.ordinal=l,this.formatBits=f}};let o=a;o.LOW=new a(0,1),o.MEDIUM=new a(1,0),o.QUARTILE=new a(2,3),o.HIGH=new a(3,2),e.Ecc=o})(i.QrCode||(i.QrCode={}))})(ee||(ee={}));(i=>{(e=>{const a=class{constructor(l,f){this.modeBits=l,this.numBitsCharCount=f}numCharCountBits(l){return this.numBitsCharCount[Math.floor((l+7)/17)]}};let o=a;o.NUMERIC=new a(1,[10,12,14]),o.ALPHANUMERIC=new a(2,[9,11,13]),o.BYTE=new a(4,[8,16,16]),o.KANJI=new a(8,[8,10,12]),o.ECI=new a(7,[0,0,0]),e.Mode=o})(i.QrSegment||(i.QrSegment={}))})(ee||(ee={}));var ie=ee;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Vr={L:ie.QrCode.Ecc.LOW,M:ie.QrCode.Ecc.MEDIUM,Q:ie.QrCode.Ecc.QUARTILE,H:ie.QrCode.Ecc.HIGH},Yr=128,Gr="L",Xr="#FFFFFF",Jr="#000000",Zr=!1,pt=4,qr=.1;function en(i,e=0){const a=[];return i.forEach(function(o,l){let f=null;o.forEach(function(p,d){if(!p&&f!==null){a.push(`M${f+e} ${l+e}h${d-f}v1H${f+e}z`),f=null;return}if(d===o.length-1){if(!p)return;f===null?a.push(`M${d+e},${l+e} h1v1H${d+e}z`):a.push(`M${f+e},${l+e} h${d+1-f}v1H${f+e}z`);return}p&&f===null&&(f=d)})}),a.join("")}function tn(i,e){return i.slice().map((a,o)=>o<e.y||o>=e.y+e.h?a:a.map((l,f)=>f<e.x||f>=e.x+e.w?l:!1))}function rn(i,e,a,o){if(o==null)return null;const l=a?pt:0,f=i.length+l*2,p=Math.floor(e*qr),d=f/e,t=(o.width||p)*d,n=(o.height||p)*d,r=o.x==null?i.length/2-t/2:o.x*d,s=o.y==null?i.length/2-n/2:o.y*d;let c=null;if(o.excavate){let v=Math.floor(r),u=Math.floor(s),E=Math.ceil(t+r-v),m=Math.ceil(n+s-u);c={x:v,y:u,w:E,h:m}}return{x:r,y:s,h:n,w:t,excavation:c}}var nn=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function un(i){const e=i,{value:a,size:o=Yr,level:l=Gr,bgColor:f=Xr,fgColor:p=Jr,includeMargin:d=Zr,style:t,imageSettings:n}=e,r=Wr(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),s=n==null?void 0:n.src,c=h.exports.useRef(null),v=h.exports.useRef(null),[u,E]=h.exports.useState(!1);h.exports.useEffect(()=>{if(c.current!=null){const x=c.current,y=x.getContext("2d");if(!y)return;let C=ie.QrCode.encodeText(a,Vr[l]).getModules();const O=d?pt:0,I=C.length+O*2,T=rn(C,o,d,n),$=v.current,M=T!=null&&$!==null&&$.complete&&$.naturalHeight!==0&&$.naturalWidth!==0;M&&T.excavation!=null&&(C=tn(C,T.excavation));const D=window.devicePixelRatio||1;x.height=x.width=o*D;const z=o/I*D;y.scale(z,z),y.fillStyle=f,y.fillRect(0,0,I,I),y.fillStyle=p,nn?y.fill(new Path2D(en(C,O))):C.forEach(function(j,W){j.forEach(function(K,V){K&&y.fillRect(V+O,W+O,1,1)})}),M&&y.drawImage($,T.x+O,T.y+O,T.w,T.h)}}),h.exports.useEffect(()=>{E(!1)},[s]);const m=qe({height:o,width:o},t);let S=null;return s!=null&&(S=R("img",{src:s,style:{display:"none"},onLoad:()=>{E(!0)},ref:v},s)),ae(ge,{children:[R("canvas",{...qe({style:m,height:o,width:o,ref:c},r)}),S]})}export{qt as C,ar as E,un as Q,cn as T};
