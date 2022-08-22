import{r as I,a as Y,a2 as $,j as b}from"./index.4e9619c9.js";var x=Object.defineProperty,y=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,F=(c,s,a)=>s in c?x(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a,B=(c,s)=>{for(var a in s||(s={}))T.call(s,a)&&F(c,a,s[a]);if(y)for(var a of y(s))D.call(s,a)&&F(c,a,s[a]);return c},G=(c,s)=>{var a={};for(var i in c)T.call(c,i)&&s.indexOf(i)<0&&(a[i]=c[i]);if(c!=null&&y)for(var i of y(c))s.indexOf(i)<0&&D.call(c,i)&&(a[i]=c[i]);return a},_;(c=>{const s=class{constructor(t,e,r,o){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let n=[];for(let l=0;l<this.size;l++)n.push(!1);for(let l=0;l<this.size;l++)this.modules.push(n.slice()),this.isFunction.push(n.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(r);if(this.drawCodewords(h),o==-1){let l=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const f=this.getPenaltyScore();f<l&&(o=m,l=f),this.applyMask(m)}}u(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(t,e){const r=c.QrSegment.makeSegments(t);return s.encodeSegments(r,e)}static encodeBinary(t,e){const r=c.QrSegment.makeBytes(t);return s.encodeSegments([r],e)}static encodeSegments(t,e,r=1,o=40,n=-1,h=!0){if(!(s.MIN_VERSION<=r&&r<=o&&o<=s.MAX_VERSION)||n<-1||n>7)throw new RangeError("Invalid value");let l,m;for(l=r;;l++){const d=s.getNumDataCodewords(l,e)*8,M=C.getTotalBits(t,l);if(M<=d){m=M;break}if(l>=o)throw new RangeError("Data too long")}for(const d of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])h&&m<=s.getNumDataCodewords(l,d)*8&&(e=d);let f=[];for(const d of t){i(d.mode.modeBits,4,f),i(d.numChars,d.mode.numCharCountBits(l),f);for(const M of d.getData())f.push(M)}u(f.length==m);const A=s.getNumDataCodewords(l,e)*8;u(f.length<=A),i(0,Math.min(4,A-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let d=236;f.length<A;d^=253)i(d,8,f);let R=[];for(;R.length*8<f.length;)R.push(0);return f.forEach((d,M)=>R[M>>>3]|=d<<7-(M&7)),new s(l,e,R,n)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let o=0;o<e;o++)r==0&&o==0||r==0&&o==e-1||r==e-1&&o==0||this.drawAlignmentPattern(t[r],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let n=0;n<10;n++)r=r<<1^(r>>>9)*1335;const o=(e<<10|r)^21522;u(o>>>15==0);for(let n=0;n<=5;n++)this.setFunctionModule(8,n,g(o,n));this.setFunctionModule(8,7,g(o,6)),this.setFunctionModule(8,8,g(o,7)),this.setFunctionModule(7,8,g(o,8));for(let n=9;n<15;n++)this.setFunctionModule(14-n,8,g(o,n));for(let n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,g(o,n));for(let n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,g(o,n));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let r=0;r<18;r++){const o=g(e,r),n=this.size-11+r%3,h=Math.floor(r/3);this.setFunctionModule(n,h,o),this.setFunctionModule(h,n,o)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){const n=Math.max(Math.abs(o),Math.abs(r)),h=t+o,l=e+r;0<=h&&h<this.size&&0<=l&&l<this.size&&this.setFunctionModule(h,l,n!=2&&n!=4)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,e+r,Math.max(Math.abs(o),Math.abs(r))!=1)}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,r=this.errorCorrectionLevel;if(t.length!=s.getNumDataCodewords(e,r))throw new RangeError("Invalid argument");const o=s.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e],n=s.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e],h=Math.floor(s.getNumRawDataModules(e)/8),l=o-h%o,m=Math.floor(h/o);let f=[];const A=s.reedSolomonComputeDivisor(n);for(let d=0,M=0;d<o;d++){let w=t.slice(M,M+m-n+(d<l?0:1));M+=w.length;const P=s.reedSolomonComputeRemainder(w,A);d<l&&w.push(0),f.push(w.concat(P))}let R=[];for(let d=0;d<f[0].length;d++)f.forEach((M,w)=>{(d!=m-n||w>=l)&&R.push(M[d])});return u(R.length==h),R}drawCodewords(t){if(t.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let o=0;o<this.size;o++)for(let n=0;n<2;n++){const h=r-n,m=(r+1&2)==0?this.size-1-o:o;!this.isFunction[m][h]&&e<t.length*8&&(this.modules[m][h]=g(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let o;switch(t){case 0:o=(r+e)%2==0;break;case 1:o=e%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+e)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:o=r*e%2+r*e%3==0;break;case 6:o=(r*e%2+r*e%3)%2==0;break;case 7:o=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&o&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let n=0;n<this.size;n++){let h=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[n][f]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),h||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),h=this.modules[n][f],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,m)*s.PENALTY_N3}for(let n=0;n<this.size;n++){let h=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][n]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),h||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),h=this.modules[f][n],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,m)*s.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let h=0;h<this.size-1;h++){const l=this.modules[n][h];l==this.modules[n][h+1]&&l==this.modules[n+1][h]&&l==this.modules[n+1][h+1]&&(t+=s.PENALTY_N2)}let e=0;for(const n of this.modules)e=n.reduce((h,l)=>h+(l?1:0),e);const r=this.size*this.size,o=Math.ceil(Math.abs(e*20-r*10)/r)-1;return u(0<=o&&o<=9),t+=o*s.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let o=this.size-7;r.length<t;o-=e)r.splice(1,0,o);return r}}static getNumRawDataModules(t){if(t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;e-=(25*r-10)*r-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(s.getNumRawDataModules(t)/8)-s.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*s.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let o=0;o<t-1;o++)e.push(0);e.push(1);let r=1;for(let o=0;o<t;o++){for(let n=0;n<e.length;n++)e[n]=s.reedSolomonMultiply(e[n],r),n+1<e.length&&(e[n]^=e[n+1]);r=s.reedSolomonMultiply(r,2)}return e}static reedSolomonComputeRemainder(t,e){let r=e.map(o=>0);for(const o of t){const n=o^r.shift();r.push(0),e.forEach((h,l)=>r[l]^=s.reedSolomonMultiply(h,n))}return r}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");let r=0;for(let o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(e>>>o&1)*t;return u(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const r=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(r&&t[0]>=e*4&&t[6]>=e?1:0)+(r&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],c.QrCode=a;function i(t,e,r){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(let o=e-1;o>=0;o--)r.push(t>>>o&1)}function g(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const E=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)i(r,8,e);return new E(E.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!E.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){const o=Math.min(t.length-r,3);i(parseInt(t.substr(r,o),10),o*3+1,e),r+=o}return new E(E.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!E.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],r;for(r=0;r+2<=t.length;r+=2){let o=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;o+=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),i(o,11,e)}return r<t.length&&i(E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,e),new E(E.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:E.isNumeric(t)?[E.makeNumeric(t)]:E.isAlphanumeric(t)?[E.makeAlphanumeric(t)]:[E.makeBytes(E.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<1<<7)i(t,8,e);else if(t<1<<14)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new E(E.Mode.ECI,0,e)}static isNumeric(t){return E.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return E.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const o of t){const n=o.mode.numCharCountBits(e);if(o.numChars>=1<<n)return 1/0;r+=4+n+o.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let C=E;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",c.QrSegment=C})(_||(_={}));(c=>{(s=>{const a=class{constructor(g,u){this.ordinal=g,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(c.QrCode||(c.QrCode={}))})(_||(_={}));(c=>{(s=>{const a=class{constructor(g,u){this.modeBits=g,this.numBitsCharCount=u}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(c.QrSegment||(c.QrSegment={}))})(_||(_={}));var v=_;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var X={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},j=128,K="L",W="#FFFFFF",V="#000000",Z=!1,z=4,J=.1;function q(c,s=0){const a=[];return c.forEach(function(i,g){let u=null;i.forEach(function(E,C){if(!E&&u!==null){a.push(`M${u+s} ${g+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!E)return;u===null?a.push(`M${C+s},${g+s} h1v1H${C+s}z`):a.push(`M${u+s},${g+s} h${C+1-u}v1H${u+s}z`);return}E&&u===null&&(u=C)})}),a.join("")}function tt(c,s){return c.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((g,u)=>u<s.x||u>=s.x+s.w?g:!1))}function et(c,s,a,i){if(i==null)return null;const g=a?z:0,u=c.length+g*2,E=Math.floor(s*J),C=u/s,t=(i.width||E)*C,e=(i.height||E)*C,r=i.x==null?c.length/2-t/2:i.x*C,o=i.y==null?c.length/2-e/2:i.y*C;let n=null;if(i.excavate){let h=Math.floor(r),l=Math.floor(o),m=Math.ceil(t+r-h),f=Math.ceil(e+o-l);n={x:h,y:l,w:m,h:f}}return{x:r,y:o,h:e,w:t,excavation:n}}var rt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function nt(c){const s=c,{value:a,size:i=j,level:g=K,bgColor:u=W,fgColor:E=V,includeMargin:C=Z,style:t,imageSettings:e}=s,r=G(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),o=e==null?void 0:e.src,n=I.exports.useRef(null),h=I.exports.useRef(null),[l,m]=I.exports.useState(!1);I.exports.useEffect(()=>{if(n.current!=null){const R=n.current,d=R.getContext("2d");if(!d)return;let M=v.QrCode.encodeText(a,X[g]).getModules();const w=C?z:0,P=M.length+w*2,p=et(M,i,C,e),N=h.current,S=p!=null&&N!==null&&N.complete&&N.naturalHeight!==0&&N.naturalWidth!==0;S&&p.excavation!=null&&(M=tt(M,p.excavation));const L=window.devicePixelRatio||1;R.height=R.width=i*L;const O=i/P*L;d.scale(O,O),d.fillStyle=u,d.fillRect(0,0,P,P),d.fillStyle=E,rt?d.fill(new Path2D(q(M,w))):M.forEach(function(U,Q){U.forEach(function(H,k){H&&d.fillRect(k+w,Q+w,1,1)})}),S&&d.drawImage(N,p.x+w,p.y+w,p.w,p.h)}}),I.exports.useEffect(()=>{m(!1)},[o]);const f=B({height:i,width:i},t);let A=null;return o!=null&&(A=b("img",{src:o,style:{display:"none"},onLoad:()=>{m(!0)},ref:h},o)),Y($,{children:[b("canvas",{...B({style:f,height:i,width:i,ref:n},r)}),A]})}export{nt as Q};
