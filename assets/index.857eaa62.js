import{r,b as Oe,_ as N,D as te,B as ve,v as se,ai as ce,d as he,x as Me,z as dn,A as je,o as vn,C as fn,S as pn,ap as ze,aq as hn,ar as mn,L as gn,as as Cn}from"./index.68d31444.js";import{u as We,c as xn,a as Sn,b as He,B as bn,g as yn}from"./DoubleRightOutlined.07f7f003.js";import{b as kn,g as wn,d as Pn}from"./styled-components.browser.esm.6b2eb042.js";var Ee=r.exports.createContext(null),Ke="__RC_CASCADER_SPLIT__",Ge="SHOW_PARENT",Je="SHOW_CHILD";function de(e){return e.join(Ke)}function Se(e){return e.map(de)}function _n(e){return e.split(Ke)}function On(e){var t=e||{},n=t.label,a=t.value,o=t.children,i=a||"value";return{label:n||"label",value:i,key:i,children:o||"children"}}function Pe(e,t){var n,a;return(n=e.isLeaf)!==null&&n!==void 0?n:!(!((a=e[t.children])===null||a===void 0)&&a.length)}function In(e){var t=e.parentElement;if(!!t){var n=e.offsetTop-t.offsetTop;n-t.scrollTop<0?t.scrollTo({top:n}):n+e.offsetHeight-t.scrollTop>t.offsetHeight&&t.scrollTo({top:n+e.offsetHeight-t.offsetHeight})}}function Ue(e,t,n){var a=new Set(e),o=t();return e.filter(function(i){var l=o[i],c=l?l.parent:null,v=l?l.children:null;return n===Je?!(v&&v.some(function(s){return s.key&&a.has(s.key)})):!(c&&!c.node.disabled&&a.has(c.key))})}function Ie(e,t,n){for(var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,o=t,i=[],l=function(s){var m,f,y,k=e[s],C=(m=o)===null||m===void 0?void 0:m.findIndex(function(p){var _=p[n.value];return a?String(_)===String(k):_===k}),d=C!==-1?(f=o)===null||f===void 0?void 0:f[C]:null;i.push({value:(y=d==null?void 0:d[n.value])!==null&&y!==void 0?y:k,index:C,option:d}),o=d==null?void 0:d[n.children]},c=0;c<e.length;c+=1)l(c);return i}function En(e){var t,n=e.prefixCls,a=e.checked,o=e.halfChecked,i=e.disabled,l=e.onClick,c=r.exports.useContext(Ee),v=c.checkable,s=typeof v!="boolean"?v:null;return r.exports.createElement("span",{className:Oe("".concat(n),(t={},N(t,"".concat(n,"-checked"),a),N(t,"".concat(n,"-indeterminate"),!a&&o),N(t,"".concat(n,"-disabled"),i),t)),onClick:l},s)}var _e="__rc_cascader_search_mark__",Vn=function(t,n,a){var o=a.label;return n.some(function(i){return String(i[o]).toLowerCase().includes(t.toLowerCase())})},Ln=function(t,n,a,o){return n.map(function(i){return i[o.label]}).join(" / ")},Nn=function(e,t,n,a,o,i){var l=o.filter,c=l===void 0?Vn:l,v=o.render,s=v===void 0?Ln:v,m=o.limit,f=m===void 0?50:m,y=o.sort;return r.exports.useMemo(function(){var k=[];if(!e)return[];function C(d,p){d.forEach(function(_){if(!(!y&&f>0&&k.length>=f)){var K=[].concat(te(p),[_]),x=_[n.children];if((!x||x.length===0||i)&&c(e,K,{label:n.label})){var M;k.push(ve(ve({},_),{},(M={},N(M,n.label,s(e,K,a,n)),N(M,_e,K),M)))}x&&C(_[n.children],K)}})}return C(t,[]),y&&k.sort(function(d,p){return y(d[_e],p[_e],e,n)}),f>0?k.slice(0,f):k},[e,t,n,a,s,i,c,y,f])},Ye="__cascader_fix_label__";function Mn(e){var t=e.prefixCls,n=e.multiple,a=e.options,o=e.activeValue,i=e.prevValuePath,l=e.onToggleOpen,c=e.onSelect,v=e.onActive,s=e.checkedSet,m=e.halfCheckedSet,f=e.loadingKeys,y=e.isSelectable,k="".concat(t,"-menu"),C="".concat(t,"-menu-item"),d=r.exports.useContext(Ee),p=d.fieldNames,_=d.changeOnSelect,K=d.expandTrigger,x=d.expandIcon,M=d.loadingIcon,A=d.dropdownMenuColumnStyle,S=K==="hover",w=r.exports.useMemo(function(){return a.map(function(u){var b,h=u.disabled,V=u[_e],T=(b=u[Ye])!==null&&b!==void 0?b:u[p.label],L=u[p.value],$=Pe(u,p),q=V?V.map(function(R){return R[p.value]}):[].concat(te(i),[L]),H=de(q),W=f.includes(H),G=s.has(H),U=m.has(H);return{disabled:h,label:T,value:L,isLeaf:$,isLoading:W,checked:G,halfChecked:U,option:u,fullPath:q,fullPathKey:H}})},[a,s,p,m,f,i]);return r.exports.createElement("ul",{className:k,role:"menu"},w.map(function(u){var b,h=u.disabled,V=u.label,T=u.value,L=u.isLeaf,$=u.isLoading,q=u.checked,H=u.halfChecked,W=u.option,G=u.fullPath,U=u.fullPathKey,R=function(){!h&&(!S||!L)&&v(G)},ue=function(){y(W)&&c(G,L)},F;return typeof W.title=="string"?F=W.title:typeof V=="string"&&(F=V),r.exports.createElement("li",{key:U,className:Oe(C,(b={},N(b,"".concat(C,"-expand"),!L),N(b,"".concat(C,"-active"),o===T),N(b,"".concat(C,"-disabled"),h),N(b,"".concat(C,"-loading"),$),b)),style:A,role:"menuitemcheckbox",title:F,"aria-checked":q,"data-path-key":U,onClick:function(){R(),(!n||L)&&ue()},onDoubleClick:function(){_&&l(!1)},onMouseEnter:function(){S&&R()},onMouseDown:function(Q){Q.preventDefault()}},n&&r.exports.createElement(En,{prefixCls:"".concat(t,"-checkbox"),checked:q,halfChecked:H,disabled:h,onClick:function(Q){Q.stopPropagation(),ue()}}),r.exports.createElement("div",{className:"".concat(C,"-content")},V),!$&&x&&!L&&r.exports.createElement("div",{className:"".concat(C,"-expand-icon")},x),$&&M&&r.exports.createElement("div",{className:"".concat(C,"-loading-icon")},M))}))}var An=function(){var e=We(),t=e.multiple,n=e.open,a=r.exports.useContext(Ee),o=a.values,i=r.exports.useState([]),l=se(i,2),c=l[0],v=l[1];return r.exports.useEffect(function(){if(n&&!t){var s=o[0];v(s||[])}},[n]),[c,v]},Rn=function(e,t,n,a,o,i){var l=We(),c=l.direction,v=l.searchValue,s=l.toggleOpen,m=l.open,f=c==="rtl",y=r.exports.useMemo(function(){for(var A=-1,S=t,w=[],u=[],b=a.length,h=function(H){var W=S.findIndex(function(G){return G[n.value]===a[H]});if(W===-1)return"break";A=W,w.push(A),u.push(a[H]),S=S[A][n.children]},V=0;V<b&&S;V+=1){var T=h(V);if(T==="break")break}for(var L=t,$=0;$<w.length-1;$+=1)L=L[w[$]][n.children];return[u,A,L]},[a,n,t]),k=se(y,3),C=k[0],d=k[1],p=k[2],_=function(S){o(S)},K=function(S){var w=p.length,u=d;u===-1&&S<0&&(u=w);for(var b=0;b<w;b+=1){u=(u+S+w)%w;var h=p[u];if(h&&!h.disabled){var V=h[n.value],T=C.slice(0,-1).concat(V);_(T);return}}},x=function(){if(C.length>1){var S=C.slice(0,-1);_(S)}else s(!1)},M=function(){var S,w=((S=p[d])===null||S===void 0?void 0:S[n.children])||[],u=w.find(function(h){return!h.disabled});if(u){var b=[].concat(te(C),[u[n.value]]);_(b)}};r.exports.useImperativeHandle(e,function(){return{onKeyDown:function(S){var w=S.which;switch(w){case ce.UP:case ce.DOWN:{var u=0;w===ce.UP?u=-1:w===ce.DOWN&&(u=1),u!==0&&K(u);break}case ce.LEFT:{f?M():x();break}case ce.RIGHT:{f?x():M();break}case ce.BACKSPACE:{v||x();break}case ce.ENTER:{if(C.length){var b=p[d],h=(b==null?void 0:b[_e])||[];h.length?i(h.map(function(V){return V[n.value]}),h[h.length-1]):i(C,p[d])}break}case ce.ESC:s(!1),m&&S.stopPropagation()}},onKeyUp:function(){}}})},Dn=r.exports.forwardRef(function(e,t){var n,a,o,i,l=We(),c=l.prefixCls,v=l.multiple,s=l.searchValue,m=l.toggleOpen,f=l.notFoundContent,y=l.direction,k=r.exports.useRef(),C=y==="rtl",d=r.exports.useContext(Ee),p=d.options,_=d.values,K=d.halfValues,x=d.fieldNames,M=d.changeOnSelect,A=d.onSelect,S=d.searchOptions,w=d.dropdownPrefixCls,u=d.loadData,b=d.expandTrigger,h=w||c,V=r.exports.useState([]),T=se(V,2),L=T[0],$=T[1],q=function(g){if(!(!u||s)){var I=Ie(g,p,x),E=I.map(function(oe){var ee=oe.option;return ee}),B=E[E.length-1];if(B&&!Pe(B,x)){var re=de(g);$(function(oe){return[].concat(te(oe),[re])}),u(E)}}};r.exports.useEffect(function(){L.length&&L.forEach(function(O){var g=_n(O),I=Ie(g,p,x,!0).map(function(B){var re=B.option;return re}),E=I[I.length-1];(!E||E[x.children]||Pe(E,x))&&$(function(B){return B.filter(function(re){return re!==O})})})},[p,L,x]);var H=r.exports.useMemo(function(){return new Set(Se(_))},[_]),W=r.exports.useMemo(function(){return new Set(Se(K))},[K]),G=An(),U=se(G,2),R=U[0],ue=U[1],F=function(g){ue(g),q(g)},J=function(g){var I=g.disabled,E=Pe(g,x);return!I&&(E||M||v)},Q=function(g,I){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;A(g),!v&&(I||M&&(b==="hover"||E))&&m(!1)},D=r.exports.useMemo(function(){return s?S:p},[s,S,p]),ae=r.exports.useMemo(function(){for(var O=[{options:D}],g=D,I=function(oe){var ee=R[oe],Ce=g.find(function(be){return be[x.value]===ee}),fe=Ce==null?void 0:Ce[x.children];if(!(fe!=null&&fe.length))return"break";g=fe,O.push({options:fe})},E=0;E<R.length;E+=1){var B=I(E);if(B==="break")break}return O},[D,R,x]),Y=function(g,I){J(I)&&Q(g,Pe(I,x),!0)};Rn(t,D,x,R,F,Y),r.exports.useEffect(function(){for(var O=0;O<R.length;O+=1){var g,I=R.slice(0,O+1),E=de(I),B=(g=k.current)===null||g===void 0?void 0:g.querySelector('li[data-path-key="'.concat(E.replace(/\\{0,2}"/g,'\\"'),'"]'));B&&In(B)}},[R]);var X=!(!((n=ae[0])===null||n===void 0||(a=n.options)===null||a===void 0)&&a.length),Z=[(o={},N(o,x.value,"__EMPTY__"),N(o,Ye,f),N(o,"disabled",!0),o)],ne=ve(ve({},e),{},{multiple:!X&&v,onSelect:Q,onActive:F,onToggleOpen:m,checkedSet:H,halfCheckedSet:W,loadingKeys:L,isSelectable:J}),me=X?[{options:Z}]:ae,ge=me.map(function(O,g){var I=R.slice(0,g),E=R[g];return r.exports.createElement(Mn,he({key:g},ne,{prefixCls:h,options:O.options,prevValuePath:I,activeValue:E}))});return r.exports.createElement("div",{className:Oe("".concat(h,"-menus"),(i={},N(i,"".concat(h,"-menu-empty"),X),N(i,"".concat(h,"-rtl"),C),i)),ref:k},ge)}),Tn=function(e,t,n,a,o){return r.exports.useMemo(function(){var i=o||function(l){var c=a?l.slice(-1):l,v=" / ";return c.every(function(s){return["string","number"].includes(Me(s))})?c.join(v):c.reduce(function(s,m,f){var y=r.exports.isValidElement(m)?r.exports.cloneElement(m,{key:f}):m;return f===0?[y]:[].concat(te(s),[v,y])},[])};return e.map(function(l){var c=Ie(l,t,n),v=i(c.map(function(m){var f,y=m.option,k=m.value;return(f=y==null?void 0:y[n.label])!==null&&f!==void 0?f:k}),c.map(function(m){var f=m.option;return f})),s=de(l);return{label:v,value:s,key:s,valueCells:l}})},[e,t,n,o,a])};function qe(e){var t=r.exports.useRef();t.current=e;var n=r.exports.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}var $n=function(e,t){var n=r.exports.useRef({options:null,info:null}),a=r.exports.useCallback(function(){return n.current.options!==e&&(n.current.options=e,n.current.info=xn(e,{fieldNames:t,initWrapper:function(i){return ve(ve({},i),{},{pathKeyEntities:{}})},processEntity:function(i,l){var c=i.nodes.map(function(v){return v[t.value]}).join(Ke);l.pathKeyEntities[c]=i,i.key=c}})),n.current.info.pathKeyEntities},[t,e]);return a};function Hn(e){return r.exports.useMemo(function(){if(!e)return[!1,{}];var t={matchInputWidth:!0,limit:50};return e&&Me(e)==="object"&&(t=ve(ve({},t),e)),t.limit<=0&&delete t.limit,[!0,t]},[e])}var Wn=function(e,t){return r.exports.useCallback(function(n){var a=[],o=[];return n.forEach(function(i){var l=Ie(i,e,t);l.every(function(c){return c.option})?o.push(i):a.push(i)}),[o,a]},[e,t])},Kn=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy"];function Fn(e){return Array.isArray(e)&&Array.isArray(e[0])}function Xe(e){return e?Fn(e)?e:(e.length===0?[]:[e]).map(function(t){return Array.isArray(t)?t:[t]}):[]}var Ve=r.exports.forwardRef(function(e,t){var n=e.id,a=e.prefixCls,o=a===void 0?"rc-cascader":a,i=e.fieldNames,l=e.defaultValue,c=e.value,v=e.changeOnSelect,s=e.onChange,m=e.displayRender,f=e.checkable,y=e.searchValue,k=e.onSearch,C=e.showSearch,d=e.expandTrigger,p=e.options,_=e.dropdownPrefixCls,K=e.loadData,x=e.popupVisible,M=e.open,A=e.popupClassName,S=e.dropdownClassName,w=e.dropdownMenuColumnStyle,u=e.popupPlacement,b=e.placement,h=e.onDropdownVisibleChange,V=e.onPopupVisibleChange,T=e.expandIcon,L=T===void 0?">":T,$=e.loadingIcon,q=e.children,H=e.dropdownMatchSelectWidth,W=H===void 0?!1:H,G=e.showCheckedStrategy,U=G===void 0?Ge:G,R=dn(e,Kn),ue=Sn(n),F=!!f,J=je(l,{value:c,postState:Xe}),Q=se(J,2),D=Q[0],ae=Q[1],Y=r.exports.useMemo(function(){return On(i)},[JSON.stringify(i)]),X=r.exports.useMemo(function(){return p||[]},[p]),Z=$n(X,Y),ne=r.exports.useCallback(function(j){var P=Z();return j.map(function(z){var ie=P[z].nodes;return ie.map(function(le){return le[Y.value]})})},[Z,Y]),me=je("",{value:y,postState:function(P){return P||""}}),ge=se(me,2),O=ge[0],g=ge[1],I=function(P,z){g(P),z.source!=="blur"&&k&&k(P)},E=Hn(C),B=se(E,2),re=B[0],oe=B[1],ee=Nn(O,X,Y,_||o,oe,v),Ce=Wn(X,Y),fe=r.exports.useMemo(function(){var j=Ce(D),P=se(j,2),z=P[0],ie=P[1];if(!F||!D.length)return[z,[],ie];var le=Se(z),ke=Z(),pe=He(le,!0,ke),Le=pe.checkedKeys,Ne=pe.halfCheckedKeys;return[ne(Le),ne(Ne),ie]},[F,D,Z,ne,Ce]),be=se(fe,3),xe=be[0],Re=be[1],ye=be[2],Qe=r.exports.useMemo(function(){var j=Se(xe),P=Ue(j,Z,U);return[].concat(te(ye),te(ne(P)))},[xe,Z,ne,ye,U]),Ze=Tn(Qe,X,Y,F,m),De=qe(function(j){if(ae(j),s){var P=Xe(j),z=P.map(function(ke){return Ie(ke,X,Y).map(function(pe){return pe.option})}),ie=F?P:P[0],le=F?z:z[0];s(ie,le)}}),Te=qe(function(j){if(g(""),!F)De(j);else{var P=de(j),z=Se(xe),ie=Se(Re),le=z.includes(P),ke=ye.some(function(we){return de(we)===P}),pe=xe,Le=ye;if(ke&&!le)Le=ye.filter(function(we){return de(we)!==P});else{var Ne=le?z.filter(function(we){return we!==P}):[].concat(te(z),[P]),Be=Z(),$e;if(le){var cn=He(Ne,{checked:!1,halfCheckedKeys:ie},Be);$e=cn.checkedKeys}else{var sn=He(Ne,!0,Be);$e=sn.checkedKeys}var un=Ue($e,Z,U);pe=ne(un)}De([].concat(te(Le),te(pe)))}}),en=function(P,z){if(z.type==="clear"){De([]);return}var ie=z.values[0].valueCells;Te(ie)},nn=M!==void 0?M:x,tn=S||A,an=b||u,rn=function(P){h==null||h(P),V==null||V(P)},on=r.exports.useMemo(function(){return{options:X,fieldNames:Y,values:xe,halfValues:Re,changeOnSelect:v,onSelect:Te,checkable:f,searchOptions:ee,dropdownPrefixCls:_,loadData:K,expandTrigger:d,expandIcon:L,loadingIcon:$,dropdownMenuColumnStyle:w}},[X,Y,xe,Re,v,Te,f,ee,_,K,d,L,$,w]),Fe=!(O?ee:X).length,ln=O&&oe.matchInputWidth||Fe?{}:{minWidth:"auto"};return r.exports.createElement(Ee.Provider,{value:on},r.exports.createElement(bn,he({},R,{ref:t,id:ue,prefixCls:o,dropdownMatchSelectWidth:W,dropdownStyle:ln,displayValues:Ze,onDisplayValuesChange:en,mode:F?"multiple":void 0,searchValue:O,onSearch:I,showSearch:re,OptionList:Dn,emptyOptions:Fe,open:nn,dropdownClassName:tn,placement:an,onDropdownVisibleChange:rn,getRawInputElement:function(){return q}})))});Ve.SHOW_PARENT=Ge;Ve.SHOW_CHILD=Je;var Bn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},jn=Ve.SHOW_CHILD,zn=Ve.SHOW_PARENT;function Un(e,t,n){var a=e.toLowerCase().split(t).reduce(function(l,c,v){return v===0?[c]:[].concat(te(l),[t,c])},[]),o=[],i=0;return a.forEach(function(l,c){var v=i+l.length,s=e.slice(i,v);i=v,c%2===1&&(s=r.exports.createElement("span",{className:"".concat(n,"-menu-item-keyword"),key:"seperator-".concat(c)},s)),o.push(s)}),o}var qn=function(t,n,a,o){var i=[],l=t.toLowerCase();return n.forEach(function(c,v){v!==0&&i.push(" / ");var s=c[o.label],m=Me(s);(m==="string"||m==="number")&&(s=Un(String(s),l,a)),i.push(s)}),i},Ae=r.exports.forwardRef(function(e,t){var n,a=e.prefixCls,o=e.size,i=e.className,l=e.multiple,c=e.bordered,v=c===void 0?!0:c,s=e.transitionName,m=e.choiceTransitionName,f=m===void 0?"":m,y=e.popupClassName,k=e.dropdownClassName,C=e.expandIcon,d=e.placement,p=e.showSearch,_=e.allowClear,K=_===void 0?!0:_,x=e.notFoundContent,M=e.direction,A=e.getPopupContainer,S=e.status,w=e.showArrow,u=Bn(e,["prefixCls","size","className","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","placement","showSearch","allowClear","notFoundContent","direction","getPopupContainer","status","showArrow"]),b=vn(u,["suffixIcon"]),h=r.exports.useContext(fn),V=h.getPopupContainer,T=h.getPrefixCls,L=h.renderEmpty,$=h.direction,q=M||$,H=q==="rtl",W=r.exports.useContext(kn),G=W.status,U=W.hasFeedback,R=W.isFormItemInput,ue=W.feedbackIcon,F=wn(G,S),J=x||L("Cascader"),Q=T(),D=T("select",a),ae=T("cascader",a),Y=Oe(k||y,"".concat(ae,"-dropdown"),N({},"".concat(ae,"-dropdown-rtl"),q==="rtl")),X=r.exports.useMemo(function(){if(!p)return p;var ee={render:qn};return Me(p)==="object"&&(ee=he(he({},ee),p)),ee},[p]),Z=r.exports.useContext(pn),ne=o||Z,me=C;C||(me=H?r.exports.createElement(hn,null):r.exports.createElement(mn,null));var ge=r.exports.createElement("span",{className:"".concat(D,"-menu-item-loading-icon")},r.exports.createElement(gn,{spin:!0})),O=r.exports.useMemo(function(){return l?r.exports.createElement("span",{className:"".concat(ae,"-checkbox-inner")}):!1},[l]),g=w!==void 0?w:e.loading||!l,I=yn(he(he({},e),{hasFeedback:U,feedbackIcon:ue,showArrow:g,multiple:l,prefixCls:D})),E=I.suffixIcon,B=I.removeIcon,re=I.clearIcon,oe=function(){return d!==void 0?d:M==="rtl"?"bottomRight":"bottomLeft"};return r.exports.createElement(Ve,he({prefixCls:D,className:Oe(!a&&ae,(n={},N(n,"".concat(D,"-lg"),ne==="large"),N(n,"".concat(D,"-sm"),ne==="small"),N(n,"".concat(D,"-rtl"),H),N(n,"".concat(D,"-borderless"),!v),N(n,"".concat(D,"-in-form-item"),R),n),Pn(D,F,U),i)},b,{direction:q,placement:oe(),notFoundContent:J,allowClear:K,showSearch:X,expandIcon:me,inputIcon:E,removeIcon:B,clearIcon:re,loadingIcon:ge,checkable:O,dropdownClassName:Y,dropdownPrefixCls:a||ae,choiceTransitionName:ze(Q,"",f),transitionName:ze(Q,Cn(d),s),getPopupContainer:A||V,ref:t,showArrow:U||w}))});Ae.displayName="Cascader";Ae.SHOW_PARENT=zn;Ae.SHOW_CHILD=jn;var Yn=Ae;export{Yn as C};
