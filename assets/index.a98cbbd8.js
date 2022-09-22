import{r as s,_ as Y,j as o,c as Qe,C as G,a as ae,b as M,d as k,e as V,t as pe,f as K,g as Ne,h as _e,i as we,k as q,l as oe,m as Re,S as Se,F as Ye,o as Te,n as Ze,R as Ke,p as er,A as Ie,q as ie,u as rr,s as tr,L as nr,v as ar,w as or,x as ir}from"./index.6d8c0639.js";import{R as $e,T as lr,u as ke,c as cr,B as D,a as sr,g as ur,S as dr}from"./index.2a25a4ba.js";import{R as ye,r as fr}from"./responsiveObserve.5dbe3bc7.js";import{P as vr,D as mr}from"./index.87999587.js";import{D as hr,M as pr,u as gr,S as Cr,a as je,E as br,b as Ee,c as xr}from"./Dropdown.d49c1443.js";import{T as yr}from"./transButton.61883223.js";function Pr(){var n=s.exports.useReducer(function(r){return r+1},0),e=Y(n,2),a=e[1];return a}function Or(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=s.exports.useRef({}),a=Pr();return s.exports.useEffect(function(){var r=ye.subscribe(function(t){e.current=t,n&&a()});return function(){return ye.unsubscribe(r)}},[]),e.current}var ve=s.exports.createContext("default"),Pe=function(e){var a=e.children,r=e.size;return o(ve.Consumer,{children:function(t){return o(ve.Provider,{value:r||t,children:a})}})},Nr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},_r=function(e,a){var r,t,i=s.exports.useContext(ve),u=s.exports.useState(1),l=Y(u,2),c=l[0],f=l[1],d=s.exports.useState(!1),v=Y(d,2),p=v[0],b=v[1],y=s.exports.useState(!0),O=Y(y,2),P=O[0],g=O[1],C=s.exports.useRef(),m=s.exports.useRef(),N=Qe(a,C),h=s.exports.useContext(G),x=h.getPrefixCls,_=function(){if(!(!m.current||!C.current)){var $=m.current.offsetWidth,W=C.current.offsetWidth;if($!==0&&W!==0){var xe=e.gap,fe=xe===void 0?4:xe;fe*2<W&&f(W-fe*2<$?(W-fe*2)/$:1)}}};s.exports.useEffect(function(){b(!0)},[]),s.exports.useEffect(function(){g(!0),f(1)},[e.src]),s.exports.useEffect(function(){_()},[e.gap]);var S=function(){var $=e.onError,W=$?$():void 0;W!==!1&&g(!1)},j=e.prefixCls,B=e.shape,A=e.size,E=e.src,U=e.srcSet,T=e.icon,X=e.className,H=e.alt,z=e.draggable,w=e.children,I=e.crossOrigin,F=Nr(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),R=A==="default"?i:A,J=Object.keys(ae(R)==="object"?R||{}:{}).some(function(Q){return["xs","sm","md","lg","xl","xxl"].includes(Q)}),re=Or(J),ce=s.exports.useMemo(function(){if(ae(R)!=="object")return{};var Q=fr.find(function(W){return re[W]}),$=R[Q];return $?{width:$,height:$,lineHeight:"".concat($,"px"),fontSize:T?$/2:18}:{}},[re,R]),L=x("avatar",j),te=M((r={},k(r,"".concat(L,"-lg"),R==="large"),k(r,"".concat(L,"-sm"),R==="small"),r)),ne=s.exports.isValidElement(E),se=M(L,te,(t={},k(t,"".concat(L,"-").concat(B),!!B),k(t,"".concat(L,"-image"),ne||E&&P),k(t,"".concat(L,"-icon"),!!T),t),X),ue=typeof R=="number"?{width:R,height:R,lineHeight:"".concat(R,"px"),fontSize:T?R/2:18}:{},Z;if(typeof E=="string"&&P)Z=o("img",{src:E,draggable:z,srcSet:U,onError:S,alt:H,crossOrigin:I});else if(ne)Z=E;else if(T)Z=T;else if(p||c!==1){var de="scale(".concat(c,") translateX(-50%)"),Xe={msTransform:de,WebkitTransform:de,transform:de},Je=typeof R=="number"?{lineHeight:"".concat(R,"px")}:{};Z=o($e,{onResize:_,children:o("span",{className:"".concat(L,"-string"),ref:function($){m.current=$},style:V(V({},Je),Xe),children:w})})}else Z=o("span",{className:"".concat(L,"-string"),style:{opacity:0},ref:function($){m.current=$},children:w});return delete F.onError,delete F.gap,o("span",{...F,style:V(V(V({},ue),ce),F.style),className:se,ref:N,children:Z})},Me=s.exports.forwardRef(_r);Me.defaultProps={shape:"circle",size:"default"};const Be=Me;var wr=function(e){var a=s.exports.useContext(G),r=a.getPrefixCls,t=a.direction,i=e.prefixCls,u=e.className,l=u===void 0?"":u,c=e.maxCount,f=e.maxStyle,d=e.size,v=r("avatar-group",i),p=M(v,k({},"".concat(v,"-rtl"),t==="rtl"),l),b=e.children,y=e.maxPopoverPlacement,O=y===void 0?"top":y,P=e.maxPopoverTrigger,g=P===void 0?"hover":P,C=pe(b).map(function(x,_){return K(x,{key:"avatar-key-".concat(_)})}),m=C.length;if(c&&c<m){var N=C.slice(0,c),h=C.slice(c,m);return N.push(o(vr,{content:h,trigger:g,placement:O,overlayClassName:"".concat(v,"-popover"),children:o(Be,{style:f,children:"+".concat(m-c)})},"avatar-popover-key")),o(Pe,{size:d,children:o("div",{className:p,style:e.style,children:N})})}return o(Pe,{size:d,children:o("div",{className:p,style:e.style,children:C})})};const Rr=wr;var ze=Be;ze.Group=Rr;const Sr=ze;var Tr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},Ir=function(e){var a=e.prefixCls,r=e.className,t=e.dashed,i=Tr(e,["prefixCls","className","dashed"]),u=s.exports.useContext(G),l=u.getPrefixCls,c=l("menu",a),f=M(k({},"".concat(c,"-item-divider-dashed"),!!t),r);return o(hr,{className:f,...i})};const Ae=Ir;var $r=s.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});const le=$r;var kr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},ge=function(n){Ne(a,n);var e=_e(a);function a(){var r;return we(this,a),r=e.apply(this,arguments),r.renderItem=function(t){var i,u=t.siderCollapsed,l,c=r.context,f=c.prefixCls,d=c.firstLevel,v=c.inlineCollapsed,p=c.direction,b=c.disableMenuItemTitleTooltip,y=r.props,O=y.className,P=y.children,g=r.props,C=g.title,m=g.icon,N=g.danger,h=kr(g,["title","icon","danger"]),x=C;typeof C>"u"?x=d?P:"":C===!1&&(x="");var _={title:x};!u&&!v&&(_.title=null,_.open=!1);var S=pe(P).length,j=q(pr,{...h,className:M((i={},k(i,"".concat(f,"-item-danger"),N),k(i,"".concat(f,"-item-only-child"),(m?S+1:S)===1),i),O),title:typeof C=="string"?C:void 0,children:[K(m,{className:M(oe(m)?(l=m.props)===null||l===void 0?void 0:l.className:"","".concat(f,"-item-icon"))}),r.renderItemChildren(v)]});return b||(j=o(lr,{..._,placement:p==="rtl"?"left":"right",overlayClassName:"".concat(f,"-inline-collapsed-tooltip"),children:j})),j},r}return Re(a,[{key:"renderItemChildren",value:function(t){var i=this.context,u=i.prefixCls,l=i.firstLevel,c=this.props,f=c.icon,d=c.children,v=o("span",{className:"".concat(u,"-title-content"),children:d});return(!f||oe(d)&&d.type==="span")&&d&&t&&l&&typeof d=="string"?o("div",{className:"".concat(u,"-inline-collapsed-noicon"),children:d.charAt(0)}):v}},{key:"render",value:function(){return o(Se.Consumer,{children:this.renderItem})}}]),a}(s.exports.Component);ge.contextType=le;function De(n){var e,a=n.popupClassName,r=n.icon,t=n.title,i=n.theme,u=s.exports.useContext(le),l=u.prefixCls,c=u.inlineCollapsed,f=u.antdMenuTheme,d=gr(),v;if(!r)v=c&&!d.length&&t&&typeof t=="string"?o("div",{className:"".concat(l,"-inline-collapsed-noicon"),children:t.charAt(0)}):o("span",{className:"".concat(l,"-title-content"),children:t});else{var p=oe(t)&&t.type==="span";v=q(Ye,{children:[K(r,{className:M(oe(r)?(e=r.props)===null||e===void 0?void 0:e.className:"","".concat(l,"-item-icon"))}),p?t:o("span",{className:"".concat(l,"-title-content"),children:t})]})}var b=s.exports.useMemo(function(){return V(V({},u),{firstLevel:!1})},[u]);return o(le.Provider,{value:b,children:o(Cr,{...Te(n,["icon"]),title:v,popupClassName:M(l,"".concat(l,"-").concat(i||f),a)})})}var jr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a};function me(n){return(n||[]).map(function(e,a){if(e&&ae(e)==="object"){var r=e,t=r.label,i=r.children,u=r.key,l=r.type,c=jr(r,["label","children","key","type"]),f=u!=null?u:"tmp-".concat(a);return i||l==="group"?l==="group"?o(je,{...c,title:t,children:me(i)},f):o(De,{...c,title:t,children:me(i)},f):l==="divider"?o(Ae,{...c},f):o(ge,{...c,children:t},f)}return null}).filter(function(e){return e})}function Er(n){return s.exports.useMemo(function(){return n&&me(n)},[n])}var Mr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},he=s.exports.createContext(null),Br=function(e){var a=e.children,r=Mr(e,["children"]),t=s.exports.useContext(he),i=s.exports.useMemo(function(){return V(V({},t),r)},[t,r.prefixCls,r.mode,r.selectable]);return o(he.Provider,{value:i,children:a})};const Oe=he;var zr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},Ar=s.exports.forwardRef(function(n,e){var a,r=s.exports.useContext(Oe)||{},t=s.exports.useContext(G),i=t.getPrefixCls,u=t.getPopupContainer,l=t.direction,c=i(),f=n.prefixCls,d=n.className,v=n.theme,p=v===void 0?"light":v,b=n.expandIcon,y=n._internalDisableMenuItemTitleTooltip,O=n.inlineCollapsed,P=n.siderCollapsed,g=n.items,C=n.children,m=n.mode,N=n.selectable,h=n.onClick,x=zr(n,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable","onClick"]),_=Te(x,["collapsedWidth"]),S=Er(g)||C;(a=r.validator)===null||a===void 0||a.call(r,{mode:m});var j=ke(function(){var w;h==null||h.apply(void 0,arguments),(w=r==null?void 0:r.onClick)===null||w===void 0||w.call(r)}),B=r.mode||m,A=N!=null?N:r.selectable,E=s.exports.useMemo(function(){return P!==void 0?P:O},[O,P]),U={horizontal:{motionName:"".concat(c,"-slide-up")},inline:cr,other:{motionName:"".concat(c,"-zoom-big")}},T=i("menu",f||r.prefixCls),X=M("".concat(T,"-").concat(p),d),H;typeof b=="function"?H=b:H=K(b||r.expandIcon,{className:"".concat(T,"-submenu-expand-icon")});var z=s.exports.useMemo(function(){return{prefixCls:T,inlineCollapsed:E||!1,antdMenuTheme:p,direction:l,firstLevel:!0,disableMenuItemTitleTooltip:y}},[T,E,p,l,y]);return o(Oe.Provider,{value:null,children:o(le.Provider,{value:z,children:o(br,{getPopupContainer:u,overflowedIndicator:o(Ee,{}),overflowedIndicatorPopupClassName:"".concat(T,"-").concat(p),mode:B,selectable:A,onClick:j,..._,inlineCollapsed:E,className:X,prefixCls:T,direction:l,defaultMotions:U,expandIcon:H,ref:e,children:S})})})}),ee=function(n){Ne(a,n);var e=_e(a);function a(){var r;return we(this,a),r=e.apply(this,arguments),r.focus=function(t){var i;(i=r.menu)===null||i===void 0||i.focus(t)},r}return Re(a,[{key:"render",value:function(){var t=this;return o(Se.Consumer,{children:function(i){return o(Ar,{ref:function(l){t.menu=l},...t.props,...i})}})}}]),a}(s.exports.Component);ee.Divider=Ae;ee.Item=ge;ee.SubMenu=De;ee.ItemGroup=je;const Dr=ee;var Lr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},Hr=D.Group,Le=function(e){var a=s.exports.useContext(G),r=a.getPopupContainer,t=a.getPrefixCls,i=a.direction,u=e.prefixCls,l=e.type,c=l===void 0?"default":l,f=e.danger,d=e.disabled,v=e.loading,p=e.onClick,b=e.htmlType,y=e.children,O=e.className,P=e.overlay,g=e.trigger,C=e.align,m=e.visible,N=e.open,h=e.onVisibleChange,x=e.onOpenChange,_=e.placement,S=e.getPopupContainer,j=e.href,B=e.icon,A=B===void 0?o(Ee,{}):B,E=e.title,U=e.buttonsRender,T=U===void 0?function(ue){return ue}:U,X=e.mouseEnterDelay,H=e.mouseLeaveDelay,z=e.overlayClassName,w=e.overlayStyle,I=e.destroyPopupOnHide,F=Lr(e,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","open","onVisibleChange","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),R=t("dropdown-button",u),J={align:C,overlay:P,disabled:d,trigger:d?[]:g,onOpenChange:x||h,getPopupContainer:S||r,mouseEnterDelay:X,mouseLeaveDelay:H,overlayClassName:z,overlayStyle:w,destroyPopupOnHide:I};"open"in e?J.open=N:"visible"in e&&(J.open=m),"placement"in e?J.placement=_:J.placement=i==="rtl"?"bottomLeft":"bottomRight";var re=o(D,{type:c,danger:f,disabled:d,loading:v,onClick:p,htmlType:b,href:j,title:E,children:y}),ce=o(D,{type:c,danger:f,icon:A}),L=T([re,ce]),te=Y(L,2),ne=te[0],se=te[1];return q(Hr,{...F,className:M(R,O),children:[ne,o(He,{...J,children:se})]})};Le.__ANT_BUTTON=!0;const Fr=Le;Ze("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom");var Ce=function(e){var a=s.exports.useContext(G),r=a.getPopupContainer,t=a.getPrefixCls,i=a.direction,u=function(){var w=t(),I=e.placement,F=I===void 0?"":I,R=e.transitionName;return R!==void 0?R:F.indexOf("top")>=0?"".concat(w,"-slide-down"):"".concat(w,"-slide-up")},l=function(){var w=e.placement;if(!w)return i==="rtl"?"bottomRight":"bottomLeft";if(w.includes("Center")){var I=w.slice(0,w.indexOf("Center"));return I}return w},c=e.arrow,f=e.prefixCls,d=e.children,v=e.trigger,p=e.disabled,b=e.getPopupContainer,y=e.overlayClassName,O=e.visible,P=e.open,g=e.onVisibleChange,C=e.onOpenChange,m=t("dropdown",f),N=s.exports.Children.only(d),h=K(N,{className:M("".concat(m,"-trigger"),k({},"".concat(m,"-rtl"),i==="rtl"),N.props.className),disabled:p}),x=p?[]:v,_;x&&x.indexOf("contextMenu")!==-1&&(_=!0);var S=sr(!1,{value:P!==void 0?P:O}),j=Y(S,2),B=j[0],A=j[1],E=ke(function(z){g==null||g(z),C==null||C(z),A(z)}),U=M(y,k({},"".concat(m,"-rtl"),i==="rtl")),T=ur({arrowPointAtCenter:ae(c)==="object"&&c.pointAtCenter,autoAdjustOverflow:!0}),X=s.exports.useCallback(function(){A(!1)},[]),H=function(){var w=e.overlay,I;return typeof w=="function"?I=w():I=w,I=s.exports.Children.only(typeof I=="string"?o("span",{children:I}):I),o(Br,{prefixCls:"".concat(m,"-menu"),expandIcon:o("span",{className:"".concat(m,"-menu-submenu-arrow"),children:o(Ke,{className:"".concat(m,"-menu-submenu-arrow-icon")})}),mode:"vertical",selectable:!1,onClick:X,validator:function(R){R.mode},children:I})};return o(xr,{alignPoint:_,...e,visible:B,builtinPlacements:T,arrow:!!c,overlayClassName:U,prefixCls:m,getPopupContainer:b||r,transitionName:u(),trigger:x,overlay:H,placement:l(),onVisibleChange:E,children:h})};Ce.Button=Fr;Ce.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};const He=Ce;var Vr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a},Fe=function(e){var a=e.prefixCls,r=e.separator,t=r===void 0?"/":r,i=e.children,u=e.overlay,l=e.dropdownProps,c=Vr(e,["prefixCls","separator","children","overlay","dropdownProps"]),f=s.exports.useContext(G),d=f.getPrefixCls,v=d("breadcrumb",a),p=function(O){return u?o(He,{overlay:u,placement:"bottom",...l,children:q("span",{className:"".concat(v,"-overlay-link"),children:[O,o(mr,{})]})}):O},b;return"href"in c?b=o("a",{className:"".concat(v,"-link"),...c,children:i}):b=o("span",{className:"".concat(v,"-link"),...c,children:i}),b=p(b),i?q("li",{children:[b,t&&o("span",{className:"".concat(v,"-separator"),children:t})]}):null};Fe.__ANT_BREADCRUMB_ITEM=!0;const Ve=Fe;var Ge=function(e){var a=e.children,r=s.exports.useContext(G),t=r.getPrefixCls,i=t("breadcrumb");return o("span",{className:"".concat(i,"-separator"),children:a||"/"})};Ge.__ANT_BREADCRUMB_SEPARATOR=!0;const Gr=Ge;var Ur=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(n);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(n,r[t])&&(a[r[t]]=n[r[t]]);return a};function Wr(n,e){if(!n.breadcrumbName)return null;var a=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(t,i){return e[i]||t});return r}function qr(n,e,a,r){var t=a.indexOf(n)===a.length-1,i=Wr(n,e);return t?o("span",{children:i}):o("a",{href:"#/".concat(r.join("/")),children:i})}var Ue=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(r){e=e.replace(":".concat(r),a[r])}),e},Xr=function(e,a,r){var t=er(e),i=Ue(a||"",r);return i&&t.push(i),t},be=function(e){var a=e.prefixCls,r=e.separator,t=r===void 0?"/":r,i=e.style,u=e.className,l=e.routes,c=e.children,f=e.itemRender,d=f===void 0?qr:f,v=e.params,p=v===void 0?{}:v,b=Ur(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),y=s.exports.useContext(G),O=y.getPrefixCls,P=y.direction,g,C=O("breadcrumb",a);if(l&&l.length>0){var m=[];g=l.map(function(h){var x=Ue(h.path,p);x&&m.push(x);var _;return h.children&&h.children.length&&(_=o(Dr,{items:h.children.map(function(S){return{key:S.path||S.breadcrumbName,label:d(S,p,l,Xr(m,S.path,p))}})})),o(Ve,{overlay:_,separator:t,children:d(h,p,l,m)},x||h.breadcrumbName)})}else c&&(g=pe(c).map(function(h,x){return h&&K(h,{separator:t,key:x})}));var N=M(C,k({},"".concat(C,"-rtl"),P==="rtl"),u);return o("nav",{className:N,style:i,...b,children:o("ol",{children:g})})};be.Item=Ve;be.Separator=Gr;const Jr=be;var Qr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const Yr=Qr;var We=function(e,a){return o(Ie,{...ie(ie({},e),{},{ref:a,icon:Yr})})};We.displayName="ArrowLeftOutlined";const Zr=s.exports.forwardRef(We);var Kr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const et=Kr;var qe=function(e,a){return o(Ie,{...ie(ie({},e),{},{ref:a,icon:et})})};qe.displayName="ArrowRightOutlined";const rt=s.exports.forwardRef(qe);var tt=function(e,a,r){return!a||!r?null:o(nr,{componentName:"PageHeader",children:function(t){var i=t.back;return o("div",{className:"".concat(e,"-back"),children:o(yr,{onClick:function(l){r==null||r(l)},className:"".concat(e,"-back-button"),"aria-label":i,children:a})})}})},nt=function(e){return o(Jr,{...e})},at=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?o(rt,{}):o(Zr,{})},ot=function(e,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",t=a.title,i=a.avatar,u=a.subTitle,l=a.tags,c=a.extra,f=a.onBack,d="".concat(e,"-heading"),v=t||u||l||c;if(!v)return null;var p=at(a,r),b=tt(e,p,f),y=b||i||v;return q("div",{className:d,children:[y&&q("div",{className:"".concat(d,"-left"),children:[b,i&&o(Sr,{...i}),t&&o("span",{className:"".concat(d,"-title"),title:typeof t=="string"?t:void 0,children:t}),u&&o("span",{className:"".concat(d,"-sub-title"),title:typeof u=="string"?u:void 0,children:u}),l&&o("span",{className:"".concat(d,"-tags"),children:l})]}),c&&o("span",{className:"".concat(d,"-extra"),children:o(dr,{children:c})})]})},it=function(e,a){return a?o("div",{className:"".concat(e,"-footer"),children:a}):null},lt=function(e,a){return o("div",{className:"".concat(e,"-content"),children:a})},ct=function(e){var a=rr(!1),r=Y(a,2),t=r[0],i=r[1],u=function(c){var f=c.width;i(f<768,!0)};return o(tr,{children:function(l){var c,f=l.getPrefixCls,d=l.pageHeader,v=l.direction,p,b=e.prefixCls,y=e.style,O=e.footer,P=e.children,g=e.breadcrumb,C=e.breadcrumbRender,m=e.className,N=!0;"ghost"in e?N=e.ghost:d&&"ghost"in d&&(N=d.ghost);var h=f("page-header",b),x=function(){return g!=null&&g.routes?nt(g):null},_=x(),S=g&&"props"in g,j=(p=C==null?void 0:C(e,_))!==null&&p!==void 0?p:_,B=S?g:j,A=M(h,m,(c={"has-breadcrumb":!!B,"has-footer":!!O},k(c,"".concat(h,"-ghost"),N),k(c,"".concat(h,"-rtl"),v==="rtl"),k(c,"".concat(h,"-compact"),t),c));return o($e,{onResize:u,children:q("div",{className:A,style:y,children:[B,ot(h,e,v),P&&lt(h,P),it(h,O)]})})}})};const st=ct,pt=ar(s.exports.forwardRef((n,e)=>{const{headerRef:a}=e,{AuthStore:r,UserStore:t}=s.exports.useContext(or),{logout:i}=r,{currentUser:u}=t,l=ir();return o("div",{ref:a,children:o(st,{...n,ghost:!1,onBack:()=>l(-1),title:"",subTitle:"",extra:[o(D,{onClick:()=>{l("/")},children:"\u9996\u9875"},1),o(D,{onClick:()=>{l("01")},children:"\u751F\u6210\u94FE\u63A5"},2),o(D,{onClick:()=>{l("02")},children:"\u751F\u6210\u4E8C\u7EF4\u7801"},3),o(D,{onClick:()=>{l("03")},children:"\u7BA1\u7406\u94FE\u63A5"},4),...u?[o(D,{onClick:()=>l("/changePassword"),children:"\u4FEE\u6539\u5BC6\u7801"},99),o(D,{type:"primary",danger:!0,onClick:()=>i(),children:"\u6CE8\u9500"},100)]:[o(D,{type:"primary",onClick:()=>l("/login"),children:"\u767B\u5F55"},99),o(D,{type:"primary",onClick:()=>l("/register"),children:"\u6CE8\u518C"},100)]]})})}));export{pt as default};
