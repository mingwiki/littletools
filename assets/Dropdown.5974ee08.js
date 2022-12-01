import{r as o,j as g,A as An,q as _,U as Y,a0 as kn,a1 as $t,p as ge,k as Re,b as le,d as N,g as Dn,h as Ln,i as $n,m as Tn,o as Tt,t as Vn,a as Fn,_ as F,P as Pe,E as zn,F as Un}from"./index.ca596aca.js";import{f as Vt,i as Wn,b as Ze}from"./index.06f22eb7.js";import{F as Ve,K as te}from"./transButton.4d0c84ea.js";var Hn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const qn=Hn;var Ft=function(e,r){return g(An,{..._(_({},e),{},{ref:r,icon:qn})})};Ft.displayName="EllipsisOutlined";const Lr=o.exports.forwardRef(Ft);var zt=function(e,r,i,n){var l=i?i.call(n,e,r):void 0;if(l!==void 0)return!!l;if(e===r)return!0;if(typeof e!="object"||!e||typeof r!="object"||!r)return!1;var a=Object.keys(e),s=Object.keys(r);if(a.length!==s.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(r),u=0;u<a.length;u++){var v=a[u];if(!c(v))return!1;var h=e[v],d=r[v];if(l=i?i.call(n,h,d,v):void 0,l===!1||l===void 0&&h!==d)return!1}return!0},Gn=["children","locked"],ee=o.exports.createContext(null);function jn(t,e){var r=_({},t);return Object.keys(e).forEach(function(i){var n=e[i];n!==void 0&&(r[i]=n)}),r}function Fe(t){var e=t.children,r=t.locked,i=Y(t,Gn),n=o.exports.useContext(ee),l=kn(function(){return jn(n,i)},[n,i],function(a,s){return!r&&(a[0]!==s[0]||!zt(a[1],s[1]))});return g(ee.Provider,{value:l,children:e})}function Ut(t,e,r,i){var n=o.exports.useContext(ee),l=n.activeKey,a=n.onActive,s=n.onInactive,c={active:l===t};return e||(c.onMouseEnter=function(u){r==null||r({key:t,domEvent:u}),a(t)},c.onMouseLeave=function(u){i==null||i({key:t,domEvent:u}),s(t)}),c}var Yn=["item"];function et(t){var e=t.item,r=Y(t,Yn);return Object.defineProperty(r,"item",{get:function(){return $t(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),r}function Wt(t){var e=t.icon,r=t.props,i=t.children,n;return typeof e=="function"?n=o.exports.createElement(e,_({},r)):n=e,n||i||null}function Ht(t){var e=o.exports.useContext(ee),r=e.mode,i=e.rtl,n=e.inlineIndent;if(r!=="inline")return null;var l=t;return i?{paddingRight:l*n}:{paddingLeft:l*n}}var Xn=[],qt=o.exports.createContext(null);function tt(){return o.exports.useContext(qt)}var Gt=o.exports.createContext(Xn);function ze(t){var e=o.exports.useContext(Gt);return o.exports.useMemo(function(){return t!==void 0?[].concat(ge(e),[t]):e},[e,t])}var jt=o.exports.createContext(null),Yt=o.exports.createContext(null);function pt(t,e){return t===void 0?null:"".concat(t,"-").concat(e)}function Xt(t){var e=o.exports.useContext(Yt);return pt(e,t)}var mt=o.exports.createContext({}),Jn=["title","attribute","elementRef"],Zn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Bn=["active"],Qn=function(t){Dn(r,t);var e=Ln(r);function r(){return $n(this,r),e.apply(this,arguments)}return Tn(r,[{key:"render",value:function(){var n=this.props,l=n.title,a=n.attribute,s=n.elementRef,c=Y(n,Jn),u=Tt(c,["eventKey"]);return $t(!a,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),g(Ve.Item,{...a,title:typeof l=="string"?l:void 0,...u,ref:s})}}]),r}(o.exports.Component),er=function(e){var r,i=e.style,n=e.className,l=e.eventKey;e.warnKey;var a=e.disabled,s=e.itemIcon,c=e.children,u=e.role,v=e.onMouseEnter,h=e.onMouseLeave,d=e.onClick,C=e.onKeyDown,f=e.onFocus,y=Y(e,Zn),M=Xt(l),S=o.exports.useContext(ee),E=S.prefixCls,x=S.onItemClick,m=S.disabled,b=S.overflowDisabled,p=S.itemIcon,z=S.selectedKeys,w=S.onActive,U=o.exports.useContext(mt),T=U._internalRenderMenuItem,A="".concat(E,"-item"),L=o.exports.useRef(),X=o.exports.useRef(),W=m||a,$=ze(l),k=function(G){return{key:l,keyPath:ge($).reverse(),item:L.current,domEvent:G}},D=s||p,B=Ut(l,W,v,h),ce=B.active,ne=Y(B,Bn),H=z.includes(l),V=Ht($.length),I=function(G){if(!W){var re=k(G);d==null||d(et(re)),x(re)}},R=function(G){if(C==null||C(G),G.which===te.ENTER){var re=k(G);d==null||d(et(re)),x(re)}},q=function(G){w(l),f==null||f(G)},de={};e.role==="option"&&(de["aria-selected"]=H);var ve=Re(Qn,{ref:L,elementRef:X,role:u===null?"none":u||"menuitem",tabIndex:a?null:-1,"data-menu-id":b&&M?null:M,...y,...ne,...de,component:"li","aria-disabled":a,style:_(_({},V),i),className:le(A,(r={},N(r,"".concat(A,"-active"),ce),N(r,"".concat(A,"-selected"),H),N(r,"".concat(A,"-disabled"),W),r),n),onClick:I,onKeyDown:R,onFocus:q,children:[c,g(Wt,{props:_(_({},e),{},{isSelected:H}),icon:D})]});return T&&(ve=T(ve,e,{selected:H})),ve};function ht(t){var e=t.eventKey,r=tt(),i=ze(e);return o.exports.useEffect(function(){if(r)return r.registerPath(e,i),function(){r.unregisterPath(e,i)}},[i]),r?null:g(er,{...t})}var tr=["label","children","key","type"];function gt(t,e){return Vn(t).map(function(r,i){if(o.exports.isValidElement(r)){var n,l,a=r.key,s=(n=(l=r.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:a,c=s==null;c&&(s="tmp_key-".concat([].concat(ge(e),[i]).join("-")));var u={key:s,eventKey:s};return o.exports.cloneElement(r,u)}return r})}function ut(t){return(t||[]).map(function(e,r){if(e&&Fn(e)==="object"){var i=e,n=i.label,l=i.children,a=i.key,s=i.type,c=Y(i,tr),u=a!=null?a:"tmp-".concat(r);return l||s==="group"?s==="group"?g(en,{...c,title:n,children:ut(l)},u):g(xt,{...c,title:n,children:ut(l)},u):s==="divider"?g(tn,{...c},u):g(ht,{...c,children:n},u)}return null}).filter(function(e){return e})}function nr(t,e,r){var i=t;return e&&(i=ut(e)),gt(i,r)}function Se(t){var e=o.exports.useRef(t);e.current=t;var r=o.exports.useCallback(function(){for(var i,n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(i=e.current)===null||i===void 0?void 0:i.call.apply(i,[e].concat(l))},[]);return t?r:void 0}var rr=["className","children"],ar=function(e,r){var i=e.className,n=e.children,l=Y(e,rr),a=o.exports.useContext(ee),s=a.prefixCls,c=a.mode,u=a.rtl;return g("ul",{className:le(s,u&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(c==="inline"?"inline":"vertical"),i),...l,"data-menu-list":!0,ref:r,children:n})},Ct=o.exports.forwardRef(ar);Ct.displayName="SubMenuList";var ue={adjustX:1,adjustY:1},ir={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}},or={topLeft:{points:["bl","tl"],overflow:ue,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ue,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ue,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ue,offset:[4,0]}};function Jt(t,e,r){if(e)return e;if(r)return r[t]||r.other}var lr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function sr(t){var e=t.prefixCls,r=t.visible,i=t.children,n=t.popup,l=t.popupClassName,a=t.popupOffset,s=t.disabled,c=t.mode,u=t.onVisibleChange,v=o.exports.useContext(ee),h=v.getPopupContainer,d=v.rtl,C=v.subMenuOpenDelay,f=v.subMenuCloseDelay,y=v.builtinPlacements,M=v.triggerSubMenuAction,S=v.forceSubMenuRender,E=v.rootClassName,x=v.motion,m=v.defaultMotions,b=o.exports.useState(!1),p=F(b,2),z=p[0],w=p[1],U=d?_(_({},or),y):_(_({},ir),y),T=lr[c],A=Jt(c,x,m),L=_(_({},A),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=o.exports.useRef();return o.exports.useEffect(function(){return X.current=Pe(function(){w(r)}),function(){Pe.cancel(X.current)}},[r]),g(Vt,{prefixCls:e,popupClassName:le("".concat(e,"-popup"),N({},"".concat(e,"-rtl"),d),l,E),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:h,builtinPlacements:U,popupPlacement:T,popupVisible:z,popup:n,popupAlign:a&&{offset:a},action:s?[]:[M],mouseEnterDelay:C,mouseLeaveDelay:f,onPopupVisibleChange:u,forceRender:S,popupMotion:L,children:i})}function ur(t){var e=t.id,r=t.open,i=t.keyPath,n=t.children,l="inline",a=o.exports.useContext(ee),s=a.prefixCls,c=a.forceSubMenuRender,u=a.motion,v=a.defaultMotions,h=a.mode,d=o.exports.useRef(!1);d.current=h===l;var C=o.exports.useState(!d.current),f=F(C,2),y=f[0],M=f[1],S=d.current?r:!1;o.exports.useEffect(function(){d.current&&M(!1)},[h]);var E=_({},Jt(l,u,v));i.length>1&&(E.motionAppear=!1);var x=E.onVisibleChanged;return E.onVisibleChanged=function(m){return!d.current&&!m&&M(!0),x==null?void 0:x(m)},y?null:g(Fe,{mode:l,locked:!d.current,children:g(zn,{visible:S,...E,forceRender:c,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden"),children:function(m){var b=m.className,p=m.style;return g(Ct,{id:e,className:b,style:p,children:n})}})})}var cr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],dr=["active"],vr=function(e){var r,i=e.style,n=e.className,l=e.title,a=e.eventKey;e.warnKey;var s=e.disabled,c=e.internalPopupClose,u=e.children,v=e.itemIcon,h=e.expandIcon,d=e.popupClassName,C=e.popupOffset,f=e.onClick,y=e.onMouseEnter,M=e.onMouseLeave,S=e.onTitleClick,E=e.onTitleMouseEnter,x=e.onTitleMouseLeave,m=Y(e,cr),b=Xt(a),p=o.exports.useContext(ee),z=p.prefixCls,w=p.mode,U=p.openKeys,T=p.disabled,A=p.overflowDisabled,L=p.activeKey,X=p.selectedKeys,W=p.itemIcon,$=p.expandIcon,k=p.onItemClick,D=p.onOpenChange,B=p.onActive,ce=o.exports.useContext(mt),ne=ce._internalRenderSubMenuItem,H=o.exports.useContext(jt),V=H.isSubPathKey,I=ze(),R="".concat(z,"-submenu"),q=T||s,de=o.exports.useRef(),ve=o.exports.useRef(),fe=v||W,G=h||$,re=U.includes(a),oe=!A&&re,Ue=V(X,a),We=Ut(a,q,E,x),we=We.active,Ne=Y(We,dr),Ke=o.exports.useState(!1),He=F(Ke,2),Oe=He[0],qe=He[1],Ge=function(Z){q||qe(Z)},ae=function(Z){Ge(!0),y==null||y({key:a,domEvent:Z})},rt=function(Z){Ge(!1),M==null||M({key:a,domEvent:Z})},Ee=o.exports.useMemo(function(){return we||(w!=="inline"?Oe||V([L],a):!1)},[w,we,L,Oe,a,V]),je=Ht(I.length),at=function(Z){q||(S==null||S({key:a,domEvent:Z}),w==="inline"&&D(a,!re))},Ce=Se(function(ie){f==null||f(et(ie)),k(ie)}),_e=function(Z){w!=="inline"&&D(a,Z)},Ae=function(){B(a)},ke=b&&"".concat(b,"-popup"),xe=Re("div",{role:"menuitem",style:je,className:"".concat(R,"-title"),tabIndex:q?null:-1,ref:de,title:typeof l=="string"?l:null,"data-menu-id":A&&b?null:b,"aria-expanded":oe,"aria-haspopup":!0,"aria-controls":ke,"aria-disabled":q,onClick:at,onFocus:Ae,...Ne,children:[l,g(Wt,{icon:w!=="horizontal"?G:null,props:_(_({},e),{},{isOpen:oe,isSubMenu:!0}),children:g("i",{className:"".concat(R,"-arrow")})})]}),J=o.exports.useRef(w);if(w!=="inline"&&I.length>1?J.current="vertical":J.current=w,!A){var be=J.current;xe=g(sr,{mode:be,prefixCls:R,visible:!c&&oe&&w!=="inline",popupClassName:d,popupOffset:C,popup:g(Fe,{mode:be==="horizontal"?"vertical":be,children:g(Ct,{id:ke,ref:ve,children:u})}),disabled:q,onVisibleChange:_e,children:xe})}var pe=Re(Ve.Item,{role:"none",...m,component:"li",style:i,className:le(R,"".concat(R,"-").concat(w),n,(r={},N(r,"".concat(R,"-open"),oe),N(r,"".concat(R,"-active"),Ee),N(r,"".concat(R,"-selected"),Ue),N(r,"".concat(R,"-disabled"),q),r)),onMouseEnter:ae,onMouseLeave:rt,children:[xe,!A&&g(ur,{id:ke,open:oe,keyPath:I,children:u})]});return ne&&(pe=ne(pe,e,{selected:Ue,active:Ee,open:oe,disabled:q})),g(Fe,{onItemClick:Ce,mode:w==="horizontal"?"vertical":w,itemIcon:fe,expandIcon:G,children:pe})};function xt(t){var e=t.eventKey,r=t.children,i=ze(e),n=gt(r,i),l=tt();o.exports.useEffect(function(){if(l)return l.registerPath(e,i),function(){l.unregisterPath(e,i)}},[i]);var a;return l?a=n:a=g(vr,{...t,children:n}),g(Gt.Provider,{value:i,children:a})}function _t(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Wn(t)){var r=t.nodeName.toLowerCase(),i=["input","select","textarea","button"].includes(r)||t.isContentEditable||r==="a"&&!!t.getAttribute("href"),n=t.getAttribute("tabindex"),l=Number(n),a=null;return n&&!Number.isNaN(l)?a=l:i&&a===null&&(a=0),i&&t.disabled&&(a=null),a!==null&&(a>=0||e&&a<0)}return!1}function Zt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=ge(t.querySelectorAll("*")).filter(function(i){return _t(i,e)});return _t(t,e)&&r.unshift(t),r}var ct=te.LEFT,dt=te.RIGHT,vt=te.UP,Be=te.DOWN,Qe=te.ENTER,Bt=te.ESC,$e=te.HOME,Te=te.END,At=[vt,Be,ct,dt];function fr(t,e,r,i){var n,l,a,s,c="prev",u="next",v="children",h="parent";if(t==="inline"&&i===Qe)return{inlineTrigger:!0};var d=(n={},N(n,vt,c),N(n,Be,u),n),C=(l={},N(l,ct,r?u:c),N(l,dt,r?c:u),N(l,Be,v),N(l,Qe,v),l),f=(a={},N(a,vt,c),N(a,Be,u),N(a,Qe,v),N(a,Bt,h),N(a,ct,r?v:h),N(a,dt,r?h:v),a),y={inline:d,horizontal:C,vertical:f,inlineSub:d,horizontalSub:f,verticalSub:f},M=(s=y["".concat(t).concat(e?"":"Sub")])===null||s===void 0?void 0:s[i];switch(M){case c:return{offset:-1,sibling:!0};case u:return{offset:1,sibling:!0};case h:return{offset:-1,sibling:!1};case v:return{offset:1,sibling:!1};default:return null}}function pr(t){for(var e=t;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function mr(t,e){for(var r=t||document.activeElement;r;){if(e.has(r))return r;r=r.parentElement}return null}function Qt(t,e){var r=Zt(t,!0);return r.filter(function(i){return e.has(i)})}function kt(t,e,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var n=Qt(t,e),l=n.length,a=n.findIndex(function(s){return r===s});return i<0?a===-1?a=l-1:a-=1:i>0&&(a+=1),a=(a+l)%l,n[a]}function hr(t,e,r,i,n,l,a,s,c,u){var v=o.exports.useRef(),h=o.exports.useRef();h.current=e;var d=function(){Pe.cancel(v.current)};return o.exports.useEffect(function(){return function(){d()}},[]),function(C){var f=C.which;if([].concat(At,[Qe,Bt,$e,Te]).includes(f)){var y,M,S,E=function(){y=new Set,M=new Map,S=new Map;var $=l();return $.forEach(function(k){var D=document.querySelector("[data-menu-id='".concat(pt(i,k),"']"));D&&(y.add(D),S.set(D,k),M.set(k,D))}),y};E();var x=M.get(e),m=mr(x,y),b=S.get(m),p=fr(t,a(b,!0).length===1,r,f);if(!p&&f!==$e&&f!==Te)return;(At.includes(f)||[$e,Te].includes(f))&&C.preventDefault();var z=function($){if($){var k=$,D=$.querySelector("a");D!=null&&D.getAttribute("href")&&(k=D);var B=S.get($);s(B),d(),v.current=Pe(function(){h.current===B&&k.focus()})}};if([$e,Te].includes(f)||p.sibling||!m){var w;!m||t==="inline"?w=n.current:w=pr(m);var U,T=Qt(w,y);f===$e?U=T[0]:f===Te?U=T[T.length-1]:U=kt(w,y,m,p.offset),z(U)}else if(p.inlineTrigger)c(b);else if(p.offset>0)c(b,!0),d(),v.current=Pe(function(){E();var W=m.getAttribute("aria-controls"),$=document.getElementById(W),k=kt($,y);z(k)},5);else if(p.offset<0){var A=a(b,!0),L=A[A.length-2],X=M.get(L);c(L,!1),z(X)}}u==null||u(C)}}var gr=Math.random().toFixed(5).toString().slice(2),Dt=0;function Cr(t){var e=Ze(t,{value:t}),r=F(e,2),i=r[0],n=r[1];return o.exports.useEffect(function(){Dt+=1;var l="".concat(gr,"-").concat(Dt);n("rc-menu-uuid-".concat(l))},[]),i}function xr(t){Promise.resolve().then(t)}var bt="__RC_UTIL_PATH_SPLIT__",Lt=function(e){return e.join(bt)},br=function(e){return e.split(bt)},ft="rc-menu-more";function yr(){var t=o.exports.useState({}),e=F(t,2),r=e[1],i=o.exports.useRef(new Map),n=o.exports.useRef(new Map),l=o.exports.useState([]),a=F(l,2),s=a[0],c=a[1],u=o.exports.useRef(0),v=o.exports.useRef(!1),h=function(){v.current||r({})},d=o.exports.useCallback(function(x,m){var b=Lt(m);n.current.set(b,x),i.current.set(x,b),u.current+=1;var p=u.current;xr(function(){p===u.current&&h()})},[]),C=o.exports.useCallback(function(x,m){var b=Lt(m);n.current.delete(b),i.current.delete(x)},[]),f=o.exports.useCallback(function(x){c(x)},[]),y=o.exports.useCallback(function(x,m){var b=i.current.get(x)||"",p=br(b);return m&&s.includes(p[0])&&p.unshift(ft),p},[s]),M=o.exports.useCallback(function(x,m){return x.some(function(b){var p=y(b,!0);return p.includes(m)})},[y]),S=function(){var m=ge(i.current.keys());return s.length&&m.push(ft),m},E=o.exports.useCallback(function(x){var m="".concat(i.current.get(x)).concat(bt),b=new Set;return ge(n.current.keys()).forEach(function(p){p.startsWith(m)&&b.add(n.current.get(p))}),b},[]);return o.exports.useEffect(function(){return function(){v.current=!0}},[]),{registerPath:d,unregisterPath:C,refreshOverflowKeys:f,isSubPathKey:M,getKeyPath:y,getKeys:S,getSubPathKeys:E}}var Ir=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],ye=[],Mr=o.exports.forwardRef(function(t,e){var r,i,n=t,l=n.prefixCls,a=l===void 0?"rc-menu":l,s=n.rootClassName,c=n.style,u=n.className,v=n.tabIndex,h=v===void 0?0:v,d=n.items,C=n.children,f=n.direction,y=n.id,M=n.mode,S=M===void 0?"vertical":M,E=n.inlineCollapsed,x=n.disabled,m=n.disabledOverflow,b=n.subMenuOpenDelay,p=b===void 0?.1:b,z=n.subMenuCloseDelay,w=z===void 0?.1:z,U=n.forceSubMenuRender,T=n.defaultOpenKeys,A=n.openKeys,L=n.activeKey,X=n.defaultActiveFirst,W=n.selectable,$=W===void 0?!0:W,k=n.multiple,D=k===void 0?!1:k,B=n.defaultSelectedKeys,ce=n.selectedKeys,ne=n.onSelect,H=n.onDeselect,V=n.inlineIndent,I=V===void 0?24:V,R=n.motion,q=n.defaultMotions,de=n.triggerSubMenuAction,ve=de===void 0?"hover":de,fe=n.builtinPlacements,G=n.itemIcon,re=n.expandIcon,oe=n.overflowedIndicator,Ue=oe===void 0?"...":oe,We=n.overflowedIndicatorPopupClassName,we=n.getPopupContainer,Ne=n.onClick,Ke=n.onOpenChange,He=n.onKeyDown;n.openAnimation,n.openTransitionName;var Oe=n._internalRenderMenuItem,qe=n._internalRenderSubMenuItem,Ge=Y(n,Ir),ae=o.exports.useMemo(function(){return nr(C,d,ye)},[C,d]),rt=o.exports.useState(!1),Ee=F(rt,2),je=Ee[0],at=Ee[1],Ce=o.exports.useRef(),_e=Cr(y),Ae=f==="rtl",ke=Ze(T,{value:A,postState:function(P){return P||ye}}),xe=F(ke,2),J=xe[0],be=xe[1],pe=function(P){be(P),Ke==null||Ke(P)},ie=o.exports.useState(J),Z=F(ie,2),nn=Z[0],rn=Z[1],it=o.exports.useRef(!1),an=o.exports.useMemo(function(){return(S==="inline"||S==="vertical")&&E?["vertical",E]:[S,!1]},[S,E]),yt=F(an,2),Ye=yt[0],ot=yt[1],It=Ye==="inline",on=o.exports.useState(Ye),Mt=F(on,2),se=Mt[0],ln=Mt[1],sn=o.exports.useState(ot),St=F(sn,2),un=St[0],cn=St[1];o.exports.useEffect(function(){ln(Ye),cn(ot),it.current&&(It?be(nn):pe(ye))},[Ye,ot]);var dn=o.exports.useState(0),Pt=F(dn,2),Xe=Pt[0],vn=Pt[1],lt=Xe>=ae.length-1||se!=="horizontal"||m;o.exports.useEffect(function(){It&&rn(J)},[J]),o.exports.useEffect(function(){return it.current=!0,function(){it.current=!1}},[]);var me=yr(),Rt=me.registerPath,wt=me.unregisterPath,fn=me.refreshOverflowKeys,Nt=me.isSubPathKey,pn=me.getKeyPath,mn=me.getKeys,hn=me.getSubPathKeys,gn=o.exports.useMemo(function(){return{registerPath:Rt,unregisterPath:wt}},[Rt,wt]),Cn=o.exports.useMemo(function(){return{isSubPathKey:Nt}},[Nt]);o.exports.useEffect(function(){fn(lt?ye:ae.slice(Xe+1).map(function(K){return K.key}))},[Xe,lt]);var xn=Ze(L||X&&((r=ae[0])===null||r===void 0?void 0:r.key),{value:L}),Kt=F(xn,2),De=Kt[0],st=Kt[1],bn=Se(function(K){st(K)}),yn=Se(function(){st(void 0)});o.exports.useImperativeHandle(e,function(){return{list:Ce.current,focus:function(P){var O,Q=De!=null?De:(O=ae.find(function(_n){return!_n.props.disabled}))===null||O===void 0?void 0:O.key;if(Q){var j,he,Le;(j=Ce.current)===null||j===void 0||(he=j.querySelector("li[data-menu-id='".concat(pt(_e,Q),"']")))===null||he===void 0||(Le=he.focus)===null||Le===void 0||Le.call(he,P)}}}});var In=Ze(B||[],{value:ce,postState:function(P){return Array.isArray(P)?P:P==null?ye:[P]}}),Ot=F(In,2),Je=Ot[0],Mn=Ot[1],Sn=function(P){if($){var O=P.key,Q=Je.includes(O),j;D?Q?j=Je.filter(function(Le){return Le!==O}):j=[].concat(ge(Je),[O]):j=[O],Mn(j);var he=_(_({},P),{},{selectedKeys:j});Q?H==null||H(he):ne==null||ne(he)}!D&&J.length&&se!=="inline"&&pe(ye)},Pn=Se(function(K){Ne==null||Ne(et(K)),Sn(K)}),Et=Se(function(K,P){var O=J.filter(function(j){return j!==K});if(P)O.push(K);else if(se!=="inline"){var Q=hn(K);O=O.filter(function(j){return!Q.has(j)})}zt(J,O)||pe(O)}),Rn=Se(we),wn=function(P,O){var Q=O!=null?O:!J.includes(P);Et(P,Q)},Nn=hr(se,De,Ae,_e,Ce,mn,pn,st,wn,He);o.exports.useEffect(function(){at(!0)},[]);var Kn=o.exports.useMemo(function(){return{_internalRenderMenuItem:Oe,_internalRenderSubMenuItem:qe}},[Oe,qe]),On=se!=="horizontal"||m?ae:ae.map(function(K,P){return g(Fe,{overflowDisabled:P>Xe,children:K},K.key)}),En=g(Ve,{id:y,ref:Ce,prefixCls:"".concat(a,"-overflow"),component:"ul",itemComponent:ht,className:le(a,"".concat(a,"-root"),"".concat(a,"-").concat(se),u,(i={},N(i,"".concat(a,"-inline-collapsed"),un),N(i,"".concat(a,"-rtl"),Ae),i),s),dir:f,style:c,role:"menu",tabIndex:h,data:On,renderRawItem:function(P){return P},renderRawRest:function(P){var O=P.length,Q=O?ae.slice(-O):null;return g(xt,{eventKey:ft,title:Ue,disabled:lt,internalPopupClose:O===0,popupClassName:We,children:Q})},maxCount:se!=="horizontal"||m?Ve.INVALIDATE:Ve.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(P){vn(P)},onKeyDown:Nn,...Ge});return g(mt.Provider,{value:Kn,children:g(Yt.Provider,{value:_e,children:Re(Fe,{prefixCls:a,rootClassName:s,mode:se,openKeys:J,rtl:Ae,disabled:x,motion:je?R:null,defaultMotions:je?q:null,activeKey:De,onActive:bn,onInactive:yn,selectedKeys:Je,inlineIndent:I,subMenuOpenDelay:p,subMenuCloseDelay:w,forceSubMenuRender:U,builtinPlacements:fe,triggerSubMenuAction:ve,getPopupContainer:Rn,itemIcon:G,expandIcon:re,onItemClick:Pn,onOpenChange:Et,children:[g(jt.Provider,{value:Cn,children:En}),g("div",{style:{display:"none"},"aria-hidden":!0,children:g(qt.Provider,{value:gn,children:ae})})]})})})}),Sr=["className","title","eventKey","children"],Pr=["children"],Rr=function(e){var r=e.className,i=e.title;e.eventKey;var n=e.children,l=Y(e,Sr),a=o.exports.useContext(ee),s=a.prefixCls,c="".concat(s,"-item-group");return Re("li",{...l,onClick:function(v){return v.stopPropagation()},className:le(c,r),children:[g("div",{className:"".concat(c,"-title"),title:typeof i=="string"?i:void 0,children:i}),g("ul",{className:"".concat(c,"-list"),children:n})]})};function en(t){var e=t.children,r=Y(t,Pr),i=ze(r.eventKey),n=gt(e,i),l=tt();return l?n:g(Rr,{...Tt(r,["warnKey"]),children:n})}function tn(t){var e=t.className,r=t.style,i=o.exports.useContext(ee),n=i.prefixCls,l=tt();return l?null:g("li",{className:le("".concat(n,"-item-divider"),e),style:r})}var nt=Mr;nt.Item=ht;nt.SubMenu=xt;nt.ItemGroup=en;nt.Divider=tn;var Ie={adjustX:1,adjustY:1},Me=[0,0],wr={topLeft:{points:["bl","tl"],overflow:Ie,offset:[0,-4],targetOffset:Me},topCenter:{points:["bc","tc"],overflow:Ie,offset:[0,-4],targetOffset:Me},topRight:{points:["br","tr"],overflow:Ie,offset:[0,-4],targetOffset:Me},bottomLeft:{points:["tl","bl"],overflow:Ie,offset:[0,4],targetOffset:Me},bottomCenter:{points:["tc","bc"],overflow:Ie,offset:[0,4],targetOffset:Me},bottomRight:{points:["tr","br"],overflow:Ie,offset:[0,4],targetOffset:Me}},Nr=te.ESC,Kr=te.TAB;function Or(t){var e=t.visible,r=t.setTriggerVisible,i=t.triggerRef,n=t.onVisibleChange,l=t.autoFocus,a=o.exports.useRef(!1),s=function(){if(e&&i.current){var h,d,C,f;(h=i.current)===null||h===void 0||(d=h.triggerRef)===null||d===void 0||(C=d.current)===null||C===void 0||(f=C.focus)===null||f===void 0||f.call(C),r(!1),typeof n=="function"&&n(!1)}},c=function(){var h,d,C,f,y=Zt((h=i.current)===null||h===void 0||(d=h.popupRef)===null||d===void 0||(C=d.current)===null||C===void 0||(f=C.getElement)===null||f===void 0?void 0:f.call(C)),M=y[0];return M!=null&&M.focus?(M.focus(),a.current=!0,!0):!1},u=function(h){switch(h.keyCode){case Nr:s();break;case Kr:{var d=!1;a.current||(d=c()),d?h.preventDefault():s();break}}};o.exports.useEffect(function(){return e?(window.addEventListener("keydown",u),l&&Pe(c,3),function(){window.removeEventListener("keydown",u),a.current=!1}):function(){a.current=!1}},[e])}var Er=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function _r(t,e){var r=t.arrow,i=r===void 0?!1:r,n=t.prefixCls,l=n===void 0?"rc-dropdown":n,a=t.transitionName,s=t.animation,c=t.align,u=t.placement,v=u===void 0?"bottomLeft":u,h=t.placements,d=h===void 0?wr:h,C=t.getPopupContainer,f=t.showAction,y=t.hideAction,M=t.overlayClassName,S=t.overlayStyle,E=t.visible,x=t.trigger,m=x===void 0?["hover"]:x,b=t.autoFocus,p=Y(t,Er),z=o.exports.useState(),w=F(z,2),U=w[0],T=w[1],A="visible"in t?E:U,L=o.exports.useRef(null);o.exports.useImperativeHandle(e,function(){return L.current}),Or({visible:A,setTriggerVisible:T,triggerRef:L,onVisibleChange:t.onVisibleChange,autoFocus:b});var X=function(){var I=t.overlay,R;return typeof I=="function"?R=I():R=I,R},W=function(I){var R=t.onOverlayClick;T(!1),R&&R(I)},$=function(I){var R=t.onVisibleChange;T(I),typeof R=="function"&&R(I)},k=function(){var I=X();return Re(Un,{children:[i&&g("div",{className:"".concat(l,"-arrow")}),I]})},D=function(){var I=t.overlay;return typeof I=="function"?k:k()},B=function(){var I=t.minOverlayWidthMatchTrigger,R=t.alignPoint;return"minOverlayWidthMatchTrigger"in t?I:!R},ce=function(){var I=t.openClassName;return I!==void 0?I:"".concat(l,"-open")},ne=function(){var I=t.children,R=I.props?I.props:{},q=le(R.className,ce());return A&&I?o.exports.cloneElement(I,{className:q}):I},H=y;return!H&&m.indexOf("contextMenu")!==-1&&(H=["click"]),g(Vt,{..._(_({builtinPlacements:d},p),{},{prefixCls:l,ref:L,popupClassName:le(M,N({},"".concat(l,"-show-arrow"),i)),popupStyle:S,action:m,showAction:f,hideAction:H||[],popupPlacement:v,popupAlign:c,popupTransitionName:a,popupAnimation:s,popupVisible:A,stretch:B()?"minWidth":"",popup:D(),onPopupVisibleChange:$,onPopupClick:W,getPopupContainer:C}),children:ne()})}const $r=o.exports.forwardRef(_r);export{tn as D,nt as E,ht as M,xt as S,en as a,Lr as b,$r as c,ze as u};
