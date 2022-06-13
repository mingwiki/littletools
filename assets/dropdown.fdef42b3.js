import{r,x as U,C as H,f as B,e as $,U as Z,d as ee,m as A,p as te,a0 as re}from"./index.d1867649.js";import{R as S}from"./responsiveObserve.eb4adc28.js";import{D as ne}from"./Dropdown.8a665c00.js";import{O as oe}from"./index.a6baeb73.js";import{g as ae}from"./index.34d3fc36.js";import{b as ie}from"./index.ad704265.js";import{B as L}from"./index.c7cbfd37.js";function le(){var i=r.exports.useReducer(function(t){return t+1},0),e=U(i,2),o=e[1];return o}function be(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=r.exports.useRef({}),o=le();return r.exports.useEffect(function(){var t=S.subscribe(function(l){e.current=l,i&&o()});return function(){return S.unsubscribe(t)}},[]),e.current}var se=globalThis&&globalThis.__rest||function(i,e){var o={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&e.indexOf(t)<0&&(o[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(i);l<t.length;l++)e.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(i,t[l])&&(o[t[l]]=i[t[l]]);return o},ue=L.Group,V=function(e){var o=r.exports.useContext(H),t=o.getPopupContainer,l=o.getPrefixCls,c=o.direction,P=e.prefixCls,v=e.type,u=v===void 0?"default":v,d=e.disabled,h=e.loading,O=e.onClick,g=e.htmlType,N=e.children,R=e.className,s=e.overlay,p=e.trigger,w=e.align,_=e.visible,m=e.onVisibleChange,y=e.placement,D=e.getPopupContainer,E=e.href,C=e.icon,f=C===void 0?r.exports.createElement(ie,null):C,n=e.title,a=e.buttonsRender,T=a===void 0?function(Y){return Y}:a,b=e.mouseEnterDelay,z=e.mouseLeaveDelay,G=e.overlayClassName,I=e.overlayStyle,M=e.destroyPopupOnHide,F=se(e,["prefixCls","type","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),q=l("dropdown-button",P),x={align:w,overlay:s,disabled:d,trigger:d?[]:p,onVisibleChange:m,getPopupContainer:D||t,mouseEnterDelay:b,mouseLeaveDelay:z,overlayClassName:G,overlayStyle:I,destroyPopupOnHide:M};"visible"in e&&(x.visible=_),"placement"in e?x.placement=y:x.placement=c==="rtl"?"bottomLeft":"bottomRight";var J=r.exports.createElement(L,{type:u,disabled:d,loading:h,onClick:O,htmlType:g,href:E,title:n},N),K=r.exports.createElement(L,{type:u,icon:f}),Q=T([J,K]),k=U(Q,2),W=k[0],X=k[1];return r.exports.createElement(ue,B({},F,{className:$(q,R)}),W,r.exports.createElement(de,B({},x),X))};V.__ANT_BUTTON=!0;var ce=V;Z("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom");var j=function(e){var o=r.exports.useContext(H),t=o.getPopupContainer,l=o.getPrefixCls,c=o.direction,P=function(){var n=l(),a=e.placement,T=a===void 0?"":a,b=e.transitionName;return b!==void 0?b:T.indexOf("top")>=0?"".concat(n,"-slide-down"):"".concat(n,"-slide-up")},v=function(){var n=e.placement;if(!n)return c==="rtl"?"bottomRight":"bottomLeft";if(n.includes("Center")){var a=n.slice(0,n.indexOf("Center"));return a}return n},u=e.arrow,d=e.prefixCls,h=e.children,O=e.trigger,g=e.disabled,N=e.getPopupContainer,R=e.overlayClassName,s=l("dropdown",d),p=r.exports.Children.only(h),w=ee(p,{className:$("".concat(s,"-trigger"),A({},"".concat(s,"-rtl"),c==="rtl"),p.props.className),disabled:g}),_=$(R,A({},"".concat(s,"-rtl"),c==="rtl")),m=g?[]:O,y;m&&m.indexOf("contextMenu")!==-1&&(y=!0);var D=ae({arrowPointAtCenter:te(u)==="object"&&u.pointAtCenter,autoAdjustOverflow:!0}),E=r.exports.useMemo(function(){return{prefixCls:"".concat(s,"-menu"),expandIcon:r.exports.createElement("span",{className:"".concat(s,"-menu-submenu-arrow")},r.exports.createElement(re,{className:"".concat(s,"-menu-submenu-arrow-icon")})),mode:"vertical",selectable:!1,validator:function(n){n.mode}}},[s]),C=function(){var n=e.overlay,a;return typeof n=="function"?a=n():a=n,a=r.exports.Children.only(typeof a=="string"?r.exports.createElement("span",null,a):a),r.exports.createElement(oe.Provider,{value:E},a)};return r.exports.createElement(ne,B({alignPoint:y},e,{builtinPlacements:D,arrow:!!u,overlayClassName:_,prefixCls:s,getPopupContainer:N||t,transitionName:P(),trigger:m,overlay:C,placement:v()}),w)};j.Button=ce;j.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var de=j;export{de as D,le as a,be as u};
