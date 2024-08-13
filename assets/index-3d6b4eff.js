import{r as i,b3 as ge,b0 as Q,a_ as H,aN as z,b2 as Qe,b4 as M,cH as Yr,cL as Xr,o as $n,bw as di,b9 as lt,bg as _e,bh as fe,bb as rr,bi as Zr,bd as Jr,bF as Dt,aM as Qr,dV as mi,cK as eo,bu as sn,dW as vi,b8 as ue,a$ as B,b1 as no,cE as to,bx as bi,by as hi,aZ as xi,aY as _i,bm as ro,bM as oo,b5 as ct,b6 as yi,bs as wi,ba as Ci,bI as Si,dX as ut,aE as Fn,dY as nn,dZ as zt,d_ as Vn,d$ as $i,e0 as Pi,aC as io,e1 as Ei,U as ao,f as Ii,e2 as Ti,e3 as Oi,aG as Ni,e4 as or,Y as Ri,e5 as ki}from"./index-d0092a53.js";import{R as tt,P as Mi,b as Ai,u as Pn,T as so,i as ji}from"./colors-e343c60b.js";import{D as Di,p as zi}from"./chunk-J7QRBMDL-1ee85f09.js";import{a as Ki}from"./index-d1111c00.js";function Li(e,n){return function(t){return e(n(t))}}var fo=Li,Bi=fo,Fi=Bi(Object.getPrototypeOf,Object),lo=Fi,Vi=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],xn=void 0;function Ui(e,n){var t=e.prefixCls,r=e.invalidate,o=e.item,a=e.renderItem,s=e.responsive,f=e.responsiveDisabled,l=e.registerSize,c=e.itemKey,g=e.className,u=e.style,p=e.children,m=e.display,d=e.order,x=e.component,b=x===void 0?"div":x,h=ge(e,Vi),C=s&&!m;function _(P){l(c,P)}i.useEffect(function(){return function(){_(null)}},[]);var w=a&&o!==xn?a(o):p,S;r||(S={opacity:C?0:1,height:C?0:xn,overflowY:C?"hidden":xn,order:s?d:xn,pointerEvents:C?"none":xn,position:C?"absolute":xn});var v={};C&&(v["aria-hidden"]=!0);var O=i.createElement(b,Q({className:H(!r&&t,g),style:z(z({},S),u)},v,h,{ref:n}),w);return s&&(O=i.createElement(tt,{onResize:function(T){var $=T.offsetWidth;_($)},disabled:f},O)),O}var Kn=i.forwardRef(Ui);Kn.displayName="Item";function Wi(e){if(typeof MessageChannel>"u")Qe(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function Gi(){var e=i.useRef(null),n=function(r){e.current||(e.current=[],Wi(function(){Xr.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(r)};return n}function An(e,n){var t=i.useState(n),r=M(t,2),o=r[0],a=r[1],s=Yr(function(f){e(function(){a(f)})});return[o,s]}var rt=$n.createContext(null),Hi=["component"],qi=["className"],Yi=["className"],Xi=function(n,t){var r=i.useContext(rt);if(!r){var o=n.component,a=o===void 0?"div":o,s=ge(n,Hi);return i.createElement(a,Q({},s,{ref:t}))}var f=r.className,l=ge(r,qi),c=n.className,g=ge(n,Yi);return i.createElement(rt.Provider,{value:null},i.createElement(Kn,Q({ref:t,className:H(f,c)},l,g)))},co=i.forwardRef(Xi);co.displayName="RawItem";var Zi=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],uo="responsive",go="invalidate";function Ji(e){return"+ ".concat(e.length," ...")}function Qi(e,n){var t=e.prefixCls,r=t===void 0?"rc-overflow":t,o=e.data,a=o===void 0?[]:o,s=e.renderItem,f=e.renderRawItem,l=e.itemKey,c=e.itemWidth,g=c===void 0?10:c,u=e.ssr,p=e.style,m=e.className,d=e.maxCount,x=e.renderRest,b=e.renderRawRest,h=e.suffix,C=e.component,_=C===void 0?"div":C,w=e.itemComponent,S=e.onVisibleChange,v=ge(e,Zi),O=u==="full",P=Gi(),T=An(P,null),$=M(T,2),y=$[0],R=$[1],N=y||0,k=An(P,new Map),L=M(k,2),F=L[0],K=L[1],Y=An(P,0),X=M(Y,2),le=X[0],ne=X[1],E=An(P,0),I=M(E,2),A=I[0],U=I[1],me=An(P,0),be=M(me,2),ie=be[0],ve=be[1],ae=i.useState(null),W=M(ae,2),Oe=W[0],Pe=W[1],Ee=i.useState(null),Ne=M(Ee,2),D=Ne[0],Ie=Ne[1],he=i.useMemo(function(){return D===null&&O?Number.MAX_SAFE_INTEGER:D||0},[D,y]),tn=i.useState(!1),Ke=M(tn,2),Ce=Ke[0],Be=Ke[1],Ae="".concat(r,"-item"),Ue=Math.max(le,A),We=d===uo,J=a.length&&We,Ge=d===go,Se=J||typeof d=="number"&&a.length>d,ce=i.useMemo(function(){var j=a;return J?y===null&&O?j=a:j=a.slice(0,Math.min(a.length,N/g)):typeof d=="number"&&(j=a.slice(0,d)),j},[a,g,y,d,J]),Re=i.useMemo(function(){return J?a.slice(he+1):a.slice(ce.length)},[a,ce,J,he]),pe=i.useCallback(function(j,G){var re;return typeof l=="function"?l(j):(re=l&&(j==null?void 0:j[l]))!==null&&re!==void 0?re:G},[l]),He=i.useCallback(s||function(j){return j},[s]);function Te(j,G,re){D===j&&(G===void 0||G===Oe)||(Ie(j),re||(Be(j<a.length-1),S==null||S(j)),G!==void 0&&Pe(G))}function ye(j,G){R(G.clientWidth)}function xe(j,G){K(function(re){var ke=new Map(re);return G===null?ke.delete(j):ke.set(j,G),ke})}function fn(j,G){U(G),ne(A)}function ln(j,G){ve(G)}function Ze(j){return F.get(pe(ce[j],j))}di(function(){if(N&&typeof Ue=="number"&&ce){var j=ie,G=ce.length,re=G-1;if(!G){Te(0,null);return}for(var ke=0;ke<G;ke+=1){var qe=Ze(ke);if(O&&(qe=qe||0),qe===void 0){Te(ke-1,void 0,!0);break}if(j+=qe,re===0&&j<=N||ke===re-1&&j+Ze(re)<=N){Te(re,null);break}else if(j+Ue>N){Te(ke-1,j-qe-ie+A);break}}h&&Ze(0)+ie>N&&Pe(null)}},[N,F,A,ie,pe,ce]);var cn=Ce&&!!Re.length,un={};Oe!==null&&J&&(un={position:"absolute",left:Oe,top:0});var Le={prefixCls:Ae,responsive:J,component:w,invalidate:Ge},rn=f?function(j,G){var re=pe(j,G);return i.createElement(rt.Provider,{key:re,value:z(z({},Le),{},{order:G,item:j,itemKey:re,registerSize:xe,display:G<=he})},f(j,G))}:function(j,G){var re=pe(j,G);return i.createElement(Kn,Q({},Le,{order:G,key:re,item:j,renderItem:He,itemKey:re,registerSize:xe,display:G<=he}))},Fe,gn={order:cn?he:Number.MAX_SAFE_INTEGER,className:"".concat(Ae,"-rest"),registerSize:fn,display:cn};if(b)b&&(Fe=i.createElement(rt.Provider,{value:z(z({},Le),gn)},b(Re)));else{var Je=x||Ji;Fe=i.createElement(Kn,Q({},Le,gn),typeof Je=="function"?Je(Re):Je)}var $e=i.createElement(_,Q({className:H(!Ge&&r,m),style:p,ref:n},v),ce.map(rn),Se?Fe:null,h&&i.createElement(Kn,Q({},Le,{responsive:We,responsiveDisabled:!J,order:he,className:"".concat(Ae,"-suffix"),registerSize:ln,display:!0,style:un}),h));return We&&($e=i.createElement(tt,{onResize:ye,disabled:!J},$e)),$e}var en=i.forwardRef(Qi);en.displayName="Overflow";en.Item=co;en.RESPONSIVE=uo;en.INVALIDATE=go;function zn(e){return Mi.includes(e)}var ea=function(n){var t=n.className,r=n.prefixCls,o=n.style,a=n.color,s=n.children,f=n.text,l=n.placement,c=l===void 0?"end":l,g=i.useContext(lt),u=g.getPrefixCls,p=g.direction,m=u("ribbon",r),d=zn(a),x=H(m,"".concat(m,"-placement-").concat(c),_e(_e({},"".concat(m,"-rtl"),p==="rtl"),"".concat(m,"-color-").concat(a),d),t),b={},h={};return a&&!d&&(b.background=a,h.color=a),i.createElement("div",{className:"".concat(m,"-wrapper")},s,i.createElement("div",{className:x,style:fe(fe({},b),o)},i.createElement("span",{className:"".concat(m,"-text")},f),i.createElement("div",{className:"".concat(m,"-corner"),style:h})))};const na=ea;function ir(e){var n=e.prefixCls,t=e.value,r=e.current,o=e.offset,a=o===void 0?0:o,s;return a&&(s={position:"absolute",top:"".concat(a,"00%"),left:0}),i.createElement("span",{style:s,className:H("".concat(n,"-only-unit"),{current:r})},t)}function ta(e,n,t){for(var r=e,o=0;(r+10)%10!==n;)r+=t,o+=t;return o}function ra(e){var n=e.prefixCls,t=e.count,r=e.value,o=Number(r),a=Math.abs(t),s=i.useState(o),f=rr(s,2),l=f[0],c=f[1],g=i.useState(a),u=rr(g,2),p=u[0],m=u[1],d=function(){c(o),m(a)};i.useEffect(function(){var v=setTimeout(function(){d()},1e3);return function(){clearTimeout(v)}},[o]);var x,b;if(l===o||Number.isNaN(o)||Number.isNaN(l))x=[i.createElement(ir,fe({},e,{key:o,current:!0}))],b={transition:"none"};else{x=[];for(var h=o+10,C=[],_=o;_<=h;_+=1)C.push(_);var w=C.findIndex(function(v){return v%10===l});x=C.map(function(v,O){var P=v%10;return i.createElement(ir,fe({},e,{key:v,value:P,offset:O-w,current:O===w}))});var S=p<a?1:-1;b={transform:"translateY(".concat(-ta(l,o,S),"00%)")}}return i.createElement("span",{className:"".concat(n,"-only"),style:b,onTransitionEnd:d},x)}var oa=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},ia=function(n){var t=n.prefixCls,r=n.count,o=n.className,a=n.motionClassName,s=n.style,f=n.title,l=n.show,c=n.component,g=c===void 0?"sup":c,u=n.children,p=oa(n,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),m=i.useContext(lt),d=m.getPrefixCls,x=d("scroll-number",t),b=fe(fe({},p),{"data-show":l,style:s,className:H(x,o,a),title:f}),h=r;if(r&&Number(r)%1===0){var C=String(r).split("");h=C.map(function(_,w){return i.createElement(ra,{prefixCls:x,count:Number(r),value:_,key:C.length-w})})}return s&&s.borderColor&&(b.style=fe(fe({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),u?Zr(u,function(_){return{className:H("".concat(x,"-custom-component"),_==null?void 0:_.className,a)}}):i.createElement(g,b,h)};const aa=ia;var sa=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},po=function(n){var t=n.prefixCls,r=n.scrollNumberPrefixCls,o=n.children,a=n.status,s=n.text,f=n.color,l=n.count,c=l===void 0?null:l,g=n.overflowCount,u=g===void 0?99:g,p=n.dot,m=p===void 0?!1:p,d=n.size,x=d===void 0?"default":d,b=n.title,h=n.offset,C=n.style,_=n.className,w=n.showZero,S=w===void 0?!1:w,v=sa(n,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),O=i.useContext(lt),P=O.getPrefixCls,T=O.direction,$=P("badge",t),y=c>u?"".concat(u,"+"):c,R=y==="0"||y===0,N=c===null||R&&!S,k=(a!=null||f!=null)&&N,L=m&&!R,F=L?"":y,K=i.useMemo(function(){var W=F==null||F==="";return(W||R&&!S)&&!L},[F,R,S,L]),Y=i.useRef(c);K||(Y.current=c);var X=Y.current,le=i.useRef(F);K||(le.current=F);var ne=le.current,E=i.useRef(L);K||(E.current=L);var I=i.useMemo(function(){if(!h)return fe({},C);var W={marginTop:h[1]};return T==="rtl"?W.left=parseInt(h[0],10):W.right=-parseInt(h[0],10),fe(fe({},W),C)},[T,h,C]),A=b??(typeof X=="string"||typeof X=="number"?X:void 0),U=K||!s?null:i.createElement("span",{className:"".concat($,"-status-text")},s),me=!X||Jr(X)!=="object"?void 0:Zr(X,function(W){return{style:fe(fe({},I),W.style)}}),be=H(_e(_e(_e({},"".concat($,"-status-dot"),k),"".concat($,"-status-").concat(a),!!a),"".concat($,"-status-").concat(f),zn(f))),ie={};f&&!zn(f)&&(ie.background=f);var ve=H($,_e(_e(_e({},"".concat($,"-status"),k),"".concat($,"-not-a-wrapper"),!o),"".concat($,"-rtl"),T==="rtl"),_);if(!o&&k){var ae=I.color;return i.createElement("span",fe({},v,{className:ve,style:I}),i.createElement("span",{className:be,style:ie}),s&&i.createElement("span",{style:{color:ae},className:"".concat($,"-status-text")},s))}return i.createElement("span",fe({},v,{className:ve}),o,i.createElement(Dt,{visible:!K,motionName:"".concat($,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(W){var Oe=W.className,Pe=P("scroll-number",r),Ee=E.current,Ne=H(_e(_e(_e(_e(_e(_e({},"".concat($,"-dot"),Ee),"".concat($,"-count"),!Ee),"".concat($,"-count-sm"),x==="small"),"".concat($,"-multiple-words"),!Ee&&ne&&ne.toString().length>1),"".concat($,"-status-").concat(a),!!a),"".concat($,"-status-").concat(f),zn(f))),D=fe({},I);return f&&!zn(f)&&(D=D||{},D.background=f),i.createElement(aa,{prefixCls:Pe,show:!K,motionClassName:Oe,className:Ne,count:ne,title:A,style:D,key:"scrollNumber"},me)}),U)};po.Ribbon=na;const fa=po;var la={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const ca=la;var ua=function(n,t){return i.createElement(Qr,z(z({},n),{},{ref:t,icon:ca}))},ga=i.forwardRef(ua);const pa=ga;var mo=i.createContext(null);function Kt(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function vo(e){var n=i.useContext(mo);return Kt(n,e)}var da=["children","locked"],Ve=i.createContext(null);function ma(e,n){var t=z({},e);return Object.keys(n).forEach(function(r){var o=n[r];o!==void 0&&(t[r]=o)}),t}function Ln(e){var n=e.children,t=e.locked,r=ge(e,da),o=i.useContext(Ve),a=mi(function(){return ma(o,r)},[o,r],function(s,f){return!t&&(s[0]!==f[0]||!eo(s[1],f[1],!0))});return i.createElement(Ve.Provider,{value:a},n)}var va=[],bo=i.createContext(null);function gt(){return i.useContext(bo)}var ho=i.createContext(va);function Un(e){var n=i.useContext(ho);return i.useMemo(function(){return e!==void 0?[].concat(sn(n),[e]):n},[n,e])}var xo=i.createContext(null),Lt=i.createContext({});function ar(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ai(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),s=null;return o&&!Number.isNaN(a)?s=a:r&&s===null&&(s=0),r&&e.disabled&&(s=null),s!==null&&(s>=0||n&&s<0)}return!1}function _o(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=vi(e.querySelectorAll("*")).filter(function(r){return ar(r,n)});return ar(e,n)&&t.unshift(e),t}var St=ue.LEFT,$t=ue.RIGHT,Pt=ue.UP,Jn=ue.DOWN,Qn=ue.ENTER,yo=ue.ESC,jn=ue.HOME,Dn=ue.END,sr=[Pt,Jn,St,$t];function ba(e,n,t,r){var o,a,s,f,l="prev",c="next",g="children",u="parent";if(e==="inline"&&r===Qn)return{inlineTrigger:!0};var p=(o={},B(o,Pt,l),B(o,Jn,c),o),m=(a={},B(a,St,t?c:l),B(a,$t,t?l:c),B(a,Jn,g),B(a,Qn,g),a),d=(s={},B(s,Pt,l),B(s,Jn,c),B(s,Qn,g),B(s,yo,u),B(s,St,t?g:u),B(s,$t,t?u:g),s),x={inline:p,horizontal:m,vertical:d,inlineSub:p,horizontalSub:d,verticalSub:d},b=(f=x["".concat(e).concat(n?"":"Sub")])===null||f===void 0?void 0:f[r];switch(b){case l:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case u:return{offset:-1,sibling:!1};case g:return{offset:1,sibling:!1};default:return null}}function ha(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function xa(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}function wo(e,n){var t=_o(e,!0);return t.filter(function(r){return n.has(r)})}function fr(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=wo(e,n),a=o.length,s=o.findIndex(function(f){return t===f});return r<0?s===-1?s=a-1:s-=1:r>0&&(s+=1),s=(s+a)%a,o[s]}function _a(e,n,t,r,o,a,s,f,l,c){var g=i.useRef(),u=i.useRef();u.current=n;var p=function(){Qe.cancel(g.current)};return i.useEffect(function(){return function(){p()}},[]),function(m){var d=m.which;if([].concat(sr,[Qn,yo,jn,Dn]).includes(d)){var x,b,h,C=function(){x=new Set,b=new Map,h=new Map;var L=a();return L.forEach(function(F){var K=document.querySelector("[data-menu-id='".concat(Kt(r,F),"']"));K&&(x.add(K),h.set(K,F),b.set(F,K))}),x};C();var _=b.get(n),w=xa(_,x),S=h.get(w),v=ba(e,s(S,!0).length===1,t,d);if(!v&&d!==jn&&d!==Dn)return;(sr.includes(d)||[jn,Dn].includes(d))&&m.preventDefault();var O=function(L){if(L){var F=L,K=L.querySelector("a");K!=null&&K.getAttribute("href")&&(F=K);var Y=h.get(L);f(Y),p(),g.current=Qe(function(){u.current===Y&&F.focus()})}};if([jn,Dn].includes(d)||v.sibling||!w){var P;!w||e==="inline"?P=o.current:P=ha(w);var T,$=wo(P,x);d===jn?T=$[0]:d===Dn?T=$[$.length-1]:T=fr(P,x,w,v.offset),O(T)}else if(v.inlineTrigger)l(S);else if(v.offset>0)l(S,!0),p(),g.current=Qe(function(){C();var k=w.getAttribute("aria-controls"),L=document.getElementById(k),F=fr(L,x);O(F)},5);else if(v.offset<0){var y=s(S,!0),R=y[y.length-2],N=b.get(R);l(R,!1),O(N)}}c==null||c(m)}}function ya(e){Promise.resolve().then(e)}var Bt="__RC_UTIL_PATH_SPLIT__",lr=function(n){return n.join(Bt)},wa=function(n){return n.split(Bt)},Et="rc-menu-more";function Ca(){var e=i.useState({}),n=M(e,2),t=n[1],r=i.useRef(new Map),o=i.useRef(new Map),a=i.useState([]),s=M(a,2),f=s[0],l=s[1],c=i.useRef(0),g=i.useRef(!1),u=function(){g.current||t({})},p=i.useCallback(function(_,w){var S=lr(w);o.current.set(S,_),r.current.set(_,S),c.current+=1;var v=c.current;ya(function(){v===c.current&&u()})},[]),m=i.useCallback(function(_,w){var S=lr(w);o.current.delete(S),r.current.delete(_)},[]),d=i.useCallback(function(_){l(_)},[]),x=i.useCallback(function(_,w){var S=r.current.get(_)||"",v=wa(S);return w&&f.includes(v[0])&&v.unshift(Et),v},[f]),b=i.useCallback(function(_,w){return _.some(function(S){var v=x(S,!0);return v.includes(w)})},[x]),h=function(){var w=sn(r.current.keys());return f.length&&w.push(Et),w},C=i.useCallback(function(_){var w="".concat(r.current.get(_)).concat(Bt),S=new Set;return sn(o.current.keys()).forEach(function(v){v.startsWith(w)&&S.add(o.current.get(v))}),S},[]);return i.useEffect(function(){return function(){g.current=!0}},[]),{registerPath:p,unregisterPath:m,refreshOverflowKeys:d,isSubPathKey:b,getKeyPath:x,getKeys:h,getSubPathKeys:C}}function Sn(e){var n=i.useRef(e);n.current=e;var t=i.useCallback(function(){for(var r,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(a))},[]);return e?t:void 0}var Sa=Math.random().toFixed(5).toString().slice(2),cr=0;function $a(e){var n=Pn(e,{value:e}),t=M(n,2),r=t[0],o=t[1];return i.useEffect(function(){cr+=1;var a="".concat(Sa,"-").concat(cr);o("rc-menu-uuid-".concat(a))},[]),r}function Co(e,n,t,r){var o=i.useContext(Ve),a=o.activeKey,s=o.onActive,f=o.onInactive,l={active:a===e};return n||(l.onMouseEnter=function(c){t==null||t({key:e,domEvent:c}),s(e)},l.onMouseLeave=function(c){r==null||r({key:e,domEvent:c}),f(e)}),l}function So(e){var n=i.useContext(Ve),t=n.mode,r=n.rtl,o=n.inlineIndent;if(t!=="inline")return null;var a=e;return r?{paddingRight:a*o}:{paddingLeft:a*o}}function $o(e){var n=e.icon,t=e.props,r=e.children,o;return typeof n=="function"?o=i.createElement(n,z({},t)):o=n,o||r||null}var Pa=["item"];function ot(e){var n=e.item,t=ge(e,Pa);return Object.defineProperty(t,"item",{get:function(){return no(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var Ea=["title","attribute","elementRef"],Ia=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Ta=["active"],Oa=function(e){bi(t,e);var n=hi(t);function t(){return xi(this,t),n.apply(this,arguments)}return _i(t,[{key:"render",value:function(){var o=this.props,a=o.title,s=o.attribute,f=o.elementRef,l=ge(o,Ea),c=ro(l,["eventKey","popupClassName","popupOffset","onTitleClick"]);return no(!s,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),i.createElement(en.Item,Q({},s,{title:typeof a=="string"?a:void 0},c,{ref:f}))}}]),t}(i.Component),Na=i.forwardRef(function(e,n){var t,r=e.style,o=e.className,a=e.eventKey;e.warnKey;var s=e.disabled,f=e.itemIcon,l=e.children,c=e.role,g=e.onMouseEnter,u=e.onMouseLeave,p=e.onClick,m=e.onKeyDown,d=e.onFocus,x=ge(e,Ia),b=vo(a),h=i.useContext(Ve),C=h.prefixCls,_=h.onItemClick,w=h.disabled,S=h.overflowDisabled,v=h.itemIcon,O=h.selectedKeys,P=h.onActive,T=i.useContext(Lt),$=T._internalRenderMenuItem,y="".concat(C,"-item"),R=i.useRef(),N=i.useRef(),k=w||s,L=to(n,N),F=Un(a),K=function(ae){return{key:a,keyPath:sn(F).reverse(),item:R.current,domEvent:ae}},Y=f||v,X=Co(a,k,g,u),le=X.active,ne=ge(X,Ta),E=O.includes(a),I=So(F.length),A=function(ae){if(!k){var W=K(ae);p==null||p(ot(W)),_(W)}},U=function(ae){if(m==null||m(ae),ae.which===ue.ENTER){var W=K(ae);p==null||p(ot(W)),_(W)}},me=function(ae){P(a),d==null||d(ae)},be={};e.role==="option"&&(be["aria-selected"]=E);var ie=i.createElement(Oa,Q({ref:R,elementRef:L,role:c===null?"none":c||"menuitem",tabIndex:s?null:-1,"data-menu-id":S&&b?null:b},x,ne,be,{component:"li","aria-disabled":s,style:z(z({},I),r),className:H(y,(t={},B(t,"".concat(y,"-active"),le),B(t,"".concat(y,"-selected"),E),B(t,"".concat(y,"-disabled"),k),t),o),onClick:A,onKeyDown:U,onFocus:me}),l,i.createElement($o,{props:z(z({},e),{},{isSelected:E}),icon:Y}));return $&&(ie=$(ie,e,{selected:E})),ie});function Ra(e,n){var t=e.eventKey,r=gt(),o=Un(t);return i.useEffect(function(){if(r)return r.registerPath(t,o),function(){r.unregisterPath(t,o)}},[o]),r?null:i.createElement(Na,Q({},e,{ref:n}))}const pt=i.forwardRef(Ra);var ka=["className","children"],Ma=function(n,t){var r=n.className,o=n.children,a=ge(n,ka),s=i.useContext(Ve),f=s.prefixCls,l=s.mode,c=s.rtl;return i.createElement("ul",Q({className:H(f,c&&"".concat(f,"-rtl"),"".concat(f,"-sub"),"".concat(f,"-").concat(l==="inline"?"inline":"vertical"),r),role:"menu"},a,{"data-menu-list":!0,ref:t}),o)},Ft=i.forwardRef(Ma);Ft.displayName="SubMenuList";var Aa=["label","children","key","type"];function Vt(e,n){return oo(e).map(function(t,r){if(i.isValidElement(t)){var o,a,s=t.key,f=(o=(a=t.props)===null||a===void 0?void 0:a.eventKey)!==null&&o!==void 0?o:s,l=f==null;l&&(f="tmp_key-".concat([].concat(sn(n),[r]).join("-")));var c={key:f,eventKey:f};return i.cloneElement(t,c)}return t})}function It(e){return(e||[]).map(function(n,t){if(n&&ct(n)==="object"){var r=n,o=r.label,a=r.children,s=r.key,f=r.type,l=ge(r,Aa),c=s??"tmp-".concat(t);return a||f==="group"?f==="group"?i.createElement(Eo,Q({key:c},l,{title:o}),It(a)):i.createElement(Ut,Q({key:c},l,{title:o}),It(a)):f==="divider"?i.createElement(Io,Q({key:c},l)):i.createElement(pt,Q({key:c},l),o)}return null}).filter(function(n){return n})}function ja(e,n,t){var r=e;return n&&(r=It(n)),Vt(r,t)}var an={adjustX:1,adjustY:1},Da={topLeft:{points:["bl","tl"],overflow:an,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:an,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:an,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:an,offset:[4,0]}},za={topLeft:{points:["bl","tl"],overflow:an,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:an,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:an,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:an,offset:[4,0]}};function Po(e,n,t){if(n)return n;if(t)return t[e]||t.other}var Ka={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function La(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,a=e.popupClassName,s=e.popupOffset,f=e.disabled,l=e.mode,c=e.onVisibleChange,g=i.useContext(Ve),u=g.getPopupContainer,p=g.rtl,m=g.subMenuOpenDelay,d=g.subMenuCloseDelay,x=g.builtinPlacements,b=g.triggerSubMenuAction,h=g.forceSubMenuRender,C=g.rootClassName,_=g.motion,w=g.defaultMotions,S=i.useState(!1),v=M(S,2),O=v[0],P=v[1],T=p?z(z({},za),x):z(z({},Da),x),$=Ka[l],y=Po(l,_,w),R=i.useRef(y);l!=="inline"&&(R.current=y);var N=z(z({},R.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),k=i.useRef();return i.useEffect(function(){return k.current=Qe(function(){P(t)}),function(){Qe.cancel(k.current)}},[t]),i.createElement(so,{prefixCls:n,popupClassName:H("".concat(n,"-popup"),B({},"".concat(n,"-rtl"),p),a,C),stretch:l==="horizontal"?"minWidth":null,getPopupContainer:u,builtinPlacements:T,popupPlacement:$,popupVisible:O,popup:o,popupAlign:s&&{offset:s},action:f?[]:[b],mouseEnterDelay:m,mouseLeaveDelay:d,onPopupVisibleChange:c,forceRender:h,popupMotion:N},r)}function Ba(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,a="inline",s=i.useContext(Ve),f=s.prefixCls,l=s.forceSubMenuRender,c=s.motion,g=s.defaultMotions,u=s.mode,p=i.useRef(!1);p.current=u===a;var m=i.useState(!p.current),d=M(m,2),x=d[0],b=d[1],h=p.current?t:!1;i.useEffect(function(){p.current&&b(!1)},[u]);var C=z({},Po(a,c,g));r.length>1&&(C.motionAppear=!1);var _=C.onVisibleChanged;return C.onVisibleChanged=function(w){return!p.current&&!w&&b(!0),_==null?void 0:_(w)},x?null:i.createElement(Ln,{mode:a,locked:!p.current},i.createElement(Dt,Q({visible:h},C,{forceRender:l,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden")}),function(w){var S=w.className,v=w.style;return i.createElement(Ft,{id:n,className:S,style:v},o)}))}var Fa=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Va=["active"],Ua=function(n){var t,r=n.style,o=n.className,a=n.title,s=n.eventKey;n.warnKey;var f=n.disabled,l=n.internalPopupClose,c=n.children,g=n.itemIcon,u=n.expandIcon,p=n.popupClassName,m=n.popupOffset,d=n.onClick,x=n.onMouseEnter,b=n.onMouseLeave,h=n.onTitleClick,C=n.onTitleMouseEnter,_=n.onTitleMouseLeave,w=ge(n,Fa),S=vo(s),v=i.useContext(Ve),O=v.prefixCls,P=v.mode,T=v.openKeys,$=v.disabled,y=v.overflowDisabled,R=v.activeKey,N=v.selectedKeys,k=v.itemIcon,L=v.expandIcon,F=v.onItemClick,K=v.onOpenChange,Y=v.onActive,X=i.useContext(Lt),le=X._internalRenderSubMenuItem,ne=i.useContext(xo),E=ne.isSubPathKey,I=Un(),A="".concat(O,"-submenu"),U=$||f,me=i.useRef(),be=i.useRef(),ie=g||k,ve=u||L,ae=T.includes(s),W=!y&&ae,Oe=E(N,s),Pe=Co(s,U,C,_),Ee=Pe.active,Ne=ge(Pe,Va),D=i.useState(!1),Ie=M(D,2),he=Ie[0],tn=Ie[1],Ke=function(xe){U||tn(xe)},Ce=function(xe){Ke(!0),x==null||x({key:s,domEvent:xe})},Be=function(xe){Ke(!1),b==null||b({key:s,domEvent:xe})},Ae=i.useMemo(function(){return Ee||(P!=="inline"?he||E([R],s):!1)},[P,Ee,R,he,s,E]),Ue=So(I.length),We=function(xe){U||(h==null||h({key:s,domEvent:xe}),P==="inline"&&K(s,!ae))},J=Sn(function(ye){d==null||d(ot(ye)),F(ye)}),Ge=function(xe){P!=="inline"&&K(s,xe)},Se=function(){Y(s)},ce=S&&"".concat(S,"-popup"),Re=i.createElement("div",Q({role:"menuitem",style:Ue,className:"".concat(A,"-title"),tabIndex:U?null:-1,ref:me,title:typeof a=="string"?a:null,"data-menu-id":y&&S?null:S,"aria-expanded":W,"aria-haspopup":!0,"aria-controls":ce,"aria-disabled":U,onClick:We,onFocus:Se},Ne),a,i.createElement($o,{icon:P!=="horizontal"?ve:null,props:z(z({},n),{},{isOpen:W,isSubMenu:!0})},i.createElement("i",{className:"".concat(A,"-arrow")}))),pe=i.useRef(P);if(P!=="inline"&&I.length>1?pe.current="vertical":pe.current=P,!y){var He=pe.current;Re=i.createElement(La,{mode:He,prefixCls:A,visible:!l&&W&&P!=="inline",popupClassName:p,popupOffset:m,popup:i.createElement(Ln,{mode:He==="horizontal"?"vertical":He},i.createElement(Ft,{id:ce,ref:be},c)),disabled:U,onVisibleChange:Ge},Re)}var Te=i.createElement(en.Item,Q({role:"none"},w,{component:"li",style:r,className:H(A,"".concat(A,"-").concat(P),o,(t={},B(t,"".concat(A,"-open"),W),B(t,"".concat(A,"-active"),Ae),B(t,"".concat(A,"-selected"),Oe),B(t,"".concat(A,"-disabled"),U),t)),onMouseEnter:Ce,onMouseLeave:Be}),Re,!y&&i.createElement(Ba,{id:ce,open:W,keyPath:I},c));return le&&(Te=le(Te,n,{selected:Oe,active:Ae,open:W,disabled:U})),i.createElement(Ln,{onItemClick:J,mode:P==="horizontal"?"vertical":P,itemIcon:ie,expandIcon:ve},Te)};function Ut(e){var n=e.eventKey,t=e.children,r=Un(n),o=Vt(t,r),a=gt();i.useEffect(function(){if(a)return a.registerPath(n,r),function(){a.unregisterPath(n,r)}},[r]);var s;return a?s=o:s=i.createElement(Ua,e,o),i.createElement(ho.Provider,{value:r},s)}var Wa=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],_n=[],Ga=i.forwardRef(function(e,n){var t,r,o=e,a=o.prefixCls,s=a===void 0?"rc-menu":a,f=o.rootClassName,l=o.style,c=o.className,g=o.tabIndex,u=g===void 0?0:g,p=o.items,m=o.children,d=o.direction,x=o.id,b=o.mode,h=b===void 0?"vertical":b,C=o.inlineCollapsed,_=o.disabled,w=o.disabledOverflow,S=o.subMenuOpenDelay,v=S===void 0?.1:S,O=o.subMenuCloseDelay,P=O===void 0?.1:O,T=o.forceSubMenuRender,$=o.defaultOpenKeys,y=o.openKeys,R=o.activeKey,N=o.defaultActiveFirst,k=o.selectable,L=k===void 0?!0:k,F=o.multiple,K=F===void 0?!1:F,Y=o.defaultSelectedKeys,X=o.selectedKeys,le=o.onSelect,ne=o.onDeselect,E=o.inlineIndent,I=E===void 0?24:E,A=o.motion,U=o.defaultMotions,me=o.triggerSubMenuAction,be=me===void 0?"hover":me,ie=o.builtinPlacements,ve=o.itemIcon,ae=o.expandIcon,W=o.overflowedIndicator,Oe=W===void 0?"...":W,Pe=o.overflowedIndicatorPopupClassName,Ee=o.getPopupContainer,Ne=o.onClick,D=o.onOpenChange,Ie=o.onKeyDown;o.openAnimation,o.openTransitionName;var he=o._internalRenderMenuItem,tn=o._internalRenderSubMenuItem,Ke=ge(o,Wa),Ce=i.useMemo(function(){return ja(m,p,_n)},[m,p]),Be=i.useState(!1),Ae=M(Be,2),Ue=Ae[0],We=Ae[1],J=i.useRef(),Ge=$a(x),Se=d==="rtl",ce=Pn($,{value:y,postState:function(Z){return Z||_n}}),Re=M(ce,2),pe=Re[0],He=Re[1],Te=function(Z){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Me(){He(Z),D==null||D(Z)}oe?Xr.flushSync(Me):Me()},ye=i.useState(pe),xe=M(ye,2),fn=xe[0],ln=xe[1],Ze=i.useRef(!1),cn=i.useMemo(function(){return(h==="inline"||h==="vertical")&&C?["vertical",C]:[h,!1]},[h,C]),un=M(cn,2),Le=un[0],rn=un[1],Fe=Le==="inline",gn=i.useState(Le),Je=M(gn,2),$e=Je[0],j=Je[1],G=i.useState(rn),re=M(G,2),ke=re[0],qe=re[1];i.useEffect(function(){j(Le),qe(rn),Ze.current&&(Fe?He(fn):Te(_n))},[Le,rn]);var yt=i.useState(0),Gn=M(yt,2),je=Gn[0],Hn=Gn[1],bn=je>=Ce.length-1||$e!=="horizontal"||w;i.useEffect(function(){Fe&&ln(pe)},[pe]),i.useEffect(function(){return Ze.current=!0,function(){Ze.current=!1}},[]);var Ye=Ca(),on=Ye.registerPath,hn=Ye.unregisterPath,Rn=Ye.refreshOverflowKeys,kn=Ye.isSubPathKey,qn=Ye.getKeyPath,q=Ye.getKeys,V=Ye.getSubPathKeys,de=i.useMemo(function(){return{registerPath:on,unregisterPath:hn}},[on,hn]),we=i.useMemo(function(){return{isSubPathKey:kn}},[kn]);i.useEffect(function(){Rn(bn?_n:Ce.slice(je+1).map(function(se){return se.key}))},[je,bn]);var Xe=Pn(R||N&&((t=Ce[0])===null||t===void 0?void 0:t.key),{value:R}),De=M(Xe,2),pn=De[0],wt=De[1],ni=Sn(function(se){wt(se)}),ti=Sn(function(){wt(void 0)});i.useImperativeHandle(n,function(){return{list:J.current,focus:function(Z){var oe,Me=pn??((oe=Ce.find(function(pi){return!pi.props.disabled}))===null||oe===void 0?void 0:oe.key);if(Me){var ze,dn,Mn;(ze=J.current)===null||ze===void 0||(dn=ze.querySelector("li[data-menu-id='".concat(Kt(Ge,Me),"']")))===null||dn===void 0||(Mn=dn.focus)===null||Mn===void 0||Mn.call(dn,Z)}}}});var ri=Pn(Y||[],{value:X,postState:function(Z){return Array.isArray(Z)?Z:Z==null?_n:[Z]}}),nr=M(ri,2),Yn=nr[0],oi=nr[1],ii=function(Z){if(L){var oe=Z.key,Me=Yn.includes(oe),ze;K?Me?ze=Yn.filter(function(Mn){return Mn!==oe}):ze=[].concat(sn(Yn),[oe]):ze=[oe],oi(ze);var dn=z(z({},Z),{},{selectedKeys:ze});Me?ne==null||ne(dn):le==null||le(dn)}!K&&pe.length&&$e!=="inline"&&Te(_n)},ai=Sn(function(se){Ne==null||Ne(ot(se)),ii(se)}),tr=Sn(function(se,Z){var oe=pe.filter(function(ze){return ze!==se});if(Z)oe.push(se);else if($e!=="inline"){var Me=V(se);oe=oe.filter(function(ze){return!Me.has(ze)})}eo(pe,oe,!0)||Te(oe,!0)}),si=Sn(Ee),fi=function(Z,oe){var Me=oe??!pe.includes(Z);tr(Z,Me)},li=_a($e,pn,Se,Ge,J,q,qn,wt,fi,Ie);i.useEffect(function(){We(!0)},[]);var ci=i.useMemo(function(){return{_internalRenderMenuItem:he,_internalRenderSubMenuItem:tn}},[he,tn]),ui=$e!=="horizontal"||w?Ce:Ce.map(function(se,Z){return i.createElement(Ln,{key:se.key,overflowDisabled:Z>je},se)}),gi=i.createElement(en,Q({id:x,ref:J,prefixCls:"".concat(s,"-overflow"),component:"ul",itemComponent:pt,className:H(s,"".concat(s,"-root"),"".concat(s,"-").concat($e),c,(r={},B(r,"".concat(s,"-inline-collapsed"),ke),B(r,"".concat(s,"-rtl"),Se),r),f),dir:d,style:l,role:"menu",tabIndex:u,data:ui,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var oe=Z.length,Me=oe?Ce.slice(-oe):null;return i.createElement(Ut,{eventKey:Et,title:Oe,disabled:bn,internalPopupClose:oe===0,popupClassName:Pe},Me)},maxCount:$e!=="horizontal"||w?en.INVALIDATE:en.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Hn(Z)},onKeyDown:li},Ke));return i.createElement(Lt.Provider,{value:ci},i.createElement(mo.Provider,{value:Ge},i.createElement(Ln,{prefixCls:s,rootClassName:f,mode:$e,openKeys:pe,rtl:Se,disabled:_,motion:Ue?A:null,defaultMotions:Ue?U:null,activeKey:pn,onActive:ni,onInactive:ti,selectedKeys:Yn,inlineIndent:I,subMenuOpenDelay:v,subMenuCloseDelay:P,forceSubMenuRender:T,builtinPlacements:ie,triggerSubMenuAction:be,getPopupContainer:si,itemIcon:ve,expandIcon:ae,onItemClick:ai,onOpenChange:tr},i.createElement(xo.Provider,{value:we},gi),i.createElement("div",{style:{display:"none"},"aria-hidden":!0},i.createElement(bo.Provider,{value:de},Ce)))))}),Ha=["className","title","eventKey","children"],qa=["children"],Ya=function(n){var t=n.className,r=n.title;n.eventKey;var o=n.children,a=ge(n,Ha),s=i.useContext(Ve),f=s.prefixCls,l="".concat(f,"-item-group");return i.createElement("li",Q({role:"presentation"},a,{onClick:function(g){return g.stopPropagation()},className:H(l,t)}),i.createElement("div",{role:"presentation",className:"".concat(l,"-title"),title:typeof r=="string"?r:void 0},r),i.createElement("ul",{role:"group",className:"".concat(l,"-list")},o))};function Eo(e){var n=e.children,t=ge(e,qa),r=Un(t.eventKey),o=Vt(n,r),a=gt();return a?o:i.createElement(Ya,ro(t,["warnKey"]),o)}function Io(e){var n=e.className,t=e.style,r=i.useContext(Ve),o=r.prefixCls,a=gt();return a?null:i.createElement("li",{className:H("".concat(o,"-item-divider"),n),style:t})}var Wn=Ga;Wn.Item=pt;Wn.SubMenu=Ut;Wn.ItemGroup=Eo;Wn.Divider=Io;function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bn(e)}function Xa(e,n){if(Bn(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(Bn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Za(e){var n=Xa(e,"string");return Bn(n)==="symbol"?n:String(n)}function To(e,n,t){return n=Za(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ur(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function gr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ur(Object(t),!0).forEach(function(r){To(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ur(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ja(e){if(Array.isArray(e))return e}function Qa(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,o,a,s,f=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(f.push(r.value),f.length!==n);l=!0);}catch(g){c=!0,o=g}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw o}}return f}}function pr(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function es(e,n){if(e){if(typeof e=="string")return pr(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pr(e,n)}}function ns(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ts(e,n){return Ja(e)||Qa(e,n)||es(e,n)||ns()}function rs(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function os(e,n){if(e==null)return{};var t=rs(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var yn={adjustX:1,adjustY:1},wn=[0,0],is={topLeft:{points:["bl","tl"],overflow:yn,offset:[0,-4],targetOffset:wn},topCenter:{points:["bc","tc"],overflow:yn,offset:[0,-4],targetOffset:wn},topRight:{points:["br","tr"],overflow:yn,offset:[0,-4],targetOffset:wn},bottomLeft:{points:["tl","bl"],overflow:yn,offset:[0,4],targetOffset:wn},bottomCenter:{points:["tc","bc"],overflow:yn,offset:[0,4],targetOffset:wn},bottomRight:{points:["tr","br"],overflow:yn,offset:[0,4],targetOffset:wn}},as=ue.ESC,ss=ue.TAB;function fs(e){var n=e.visible,t=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,a=e.autoFocus,s=i.useRef(!1),f=function(){if(n&&r.current){var u,p,m,d;(u=r.current)===null||u===void 0||(p=u.triggerRef)===null||p===void 0||(m=p.current)===null||m===void 0||(d=m.focus)===null||d===void 0||d.call(m),t(!1),typeof o=="function"&&o(!1)}},l=function(){var u,p,m,d,x=_o((u=r.current)===null||u===void 0||(p=u.popupRef)===null||p===void 0||(m=p.current)===null||m===void 0||(d=m.getElement)===null||d===void 0?void 0:d.call(m)),b=x[0];return b!=null&&b.focus?(b.focus(),s.current=!0,!0):!1},c=function(u){switch(u.keyCode){case as:f();break;case ss:{var p=!1;s.current||(p=l()),p?u.preventDefault():f();break}}};i.useEffect(function(){return n?(window.addEventListener("keydown",c),a&&Qe(l,3),function(){window.removeEventListener("keydown",c),s.current=!1}):function(){s.current=!1}},[n])}var ls=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function cs(e,n){var t=e.arrow,r=t===void 0?!1:t,o=e.prefixCls,a=o===void 0?"rc-dropdown":o,s=e.transitionName,f=e.animation,l=e.align,c=e.placement,g=c===void 0?"bottomLeft":c,u=e.placements,p=u===void 0?is:u,m=e.getPopupContainer,d=e.showAction,x=e.hideAction,b=e.overlayClassName,h=e.overlayStyle,C=e.visible,_=e.trigger,w=_===void 0?["hover"]:_,S=e.autoFocus,v=os(e,ls),O=i.useState(),P=ts(O,2),T=P[0],$=P[1],y="visible"in e?C:T,R=i.useRef(null);i.useImperativeHandle(n,function(){return R.current}),fs({visible:y,setTriggerVisible:$,triggerRef:R,onVisibleChange:e.onVisibleChange,autoFocus:S});var N=function(){var I=e.overlay,A;return typeof I=="function"?A=I():A=I,A},k=function(I){var A=e.onOverlayClick;$(!1),A&&A(I)},L=function(I){var A=e.onVisibleChange;$(I),typeof A=="function"&&A(I)},F=function(){var I=N();return i.createElement(i.Fragment,null,r&&i.createElement("div",{className:"".concat(a,"-arrow")}),I)},K=function(){var I=e.overlay;return typeof I=="function"?F:F()},Y=function(){var I=e.minOverlayWidthMatchTrigger,A=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?I:!A},X=function(){var I=e.openClassName;return I!==void 0?I:"".concat(a,"-open")},le=function(){var I=e.children,A=I.props?I.props:{},U=H(A.className,X());return y&&I?i.cloneElement(I,{className:U}):I},ne=x;return!ne&&w.indexOf("contextMenu")!==-1&&(ne=["click"]),i.createElement(so,gr(gr({builtinPlacements:p},v),{},{prefixCls:a,ref:R,popupClassName:H(b,To({},"".concat(a,"-show-arrow"),r)),popupStyle:h,action:w,showAction:d,hideAction:ne||[],popupPlacement:g,popupAlign:l,popupTransitionName:s,popupAnimation:f,popupVisible:y,stretch:Y()?"minWidth":"",popup:K(),onPopupVisibleChange:L,onPopupClick:k,getPopupContainer:m}),le())}const us=i.forwardRef(cs);var gs={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const ps=gs;var ds=function(n,t){return i.createElement(Qr,z(z({},n),{},{ref:t,icon:ps}))},ms=i.forwardRef(ds);const vs=ms,dt=i.createContext(null);var Oo=i.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,o=e.style,a=e.id,s=e.active,f=e.tabKey,l=e.children;return i.createElement("div",{id:a&&"".concat(a,"-panel-").concat(f),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":a&&"".concat(a,"-tab-").concat(f),"aria-hidden":!s,style:o,className:H(t,s&&"".concat(t,"-active"),r),ref:n},l)}),bs=["key","forceRender","style","className"];function hs(e){var n=e.id,t=e.activeKey,r=e.animated,o=e.tabPosition,a=e.destroyInactiveTabPane,s=i.useContext(dt),f=s.prefixCls,l=s.tabs,c=r.tabPane,g="".concat(f,"-tabpane");return i.createElement("div",{className:H("".concat(f,"-content-holder"))},i.createElement("div",{className:H("".concat(f,"-content"),"".concat(f,"-content-").concat(o),B({},"".concat(f,"-content-animated"),c))},l.map(function(u){var p=u.key,m=u.forceRender,d=u.style,x=u.className,b=ge(u,bs),h=p===t;return i.createElement(Dt,Q({key:p,visible:h,forceRender:m,removeOnLeave:!!a,leavedClassName:"".concat(g,"-hidden")},r.tabPaneMotion),function(C,_){var w=C.style,S=C.className;return i.createElement(Oo,Q({},b,{prefixCls:g,id:n,tabKey:p,animated:c,active:h,style:z(z({},d),w),className:H(x,S),ref:_}))})})))}var dr={width:0,height:0,left:0,top:0};function xs(e,n,t){return i.useMemo(function(){for(var r,o=new Map,a=n.get((r=e[0])===null||r===void 0?void 0:r.key)||dr,s=a.left+a.width,f=0;f<e.length;f+=1){var l=e[f].key,c=n.get(l);if(!c){var g;c=n.get((g=e[f-1])===null||g===void 0?void 0:g.key)||dr}var u=o.get(l)||z({},c);u.right=s-u.left-u.width,o.set(l,u)}return o},[e.map(function(r){return r.key}).join("_"),n,t])}function mr(e,n){var t=i.useRef(e),r=i.useState({}),o=M(r,2),a=o[1];function s(f){var l=typeof f=="function"?f(t.current):f;l!==t.current&&n(l,t.current),t.current=l,a({})}return[t.current,s]}var _s=.1,vr=.01,et=20,br=Math.pow(.995,et);function ys(e,n){var t=i.useState(),r=M(t,2),o=r[0],a=r[1],s=i.useState(0),f=M(s,2),l=f[0],c=f[1],g=i.useState(0),u=M(g,2),p=u[0],m=u[1],d=i.useState(),x=M(d,2),b=x[0],h=x[1],C=i.useRef();function _(T){var $=T.touches[0],y=$.screenX,R=$.screenY;a({x:y,y:R}),window.clearInterval(C.current)}function w(T){if(o){T.preventDefault();var $=T.touches[0],y=$.screenX,R=$.screenY;a({x:y,y:R});var N=y-o.x,k=R-o.y;n(N,k);var L=Date.now();c(L),m(L-l),h({x:N,y:k})}}function S(){if(o&&(a(null),h(null),b)){var T=b.x/p,$=b.y/p,y=Math.abs(T),R=Math.abs($);if(Math.max(y,R)<_s)return;var N=T,k=$;C.current=window.setInterval(function(){if(Math.abs(N)<vr&&Math.abs(k)<vr){window.clearInterval(C.current);return}N*=br,k*=br,n(N*et,k*et)},et)}}var v=i.useRef();function O(T){var $=T.deltaX,y=T.deltaY,R=0,N=Math.abs($),k=Math.abs(y);N===k?R=v.current==="x"?$:y:N>k?(R=$,v.current="x"):(R=y,v.current="y"),n(-R,-R)&&T.preventDefault()}var P=i.useRef(null);P.current={onTouchStart:_,onTouchMove:w,onTouchEnd:S,onWheel:O},i.useEffect(function(){function T(N){P.current.onTouchStart(N)}function $(N){P.current.onTouchMove(N)}function y(N){P.current.onTouchEnd(N)}function R(N){P.current.onWheel(N)}return document.addEventListener("touchmove",$,{passive:!1}),document.addEventListener("touchend",y,{passive:!1}),e.current.addEventListener("touchstart",T,{passive:!1}),e.current.addEventListener("wheel",R),function(){document.removeEventListener("touchmove",$),document.removeEventListener("touchend",y)}},[])}function No(e){var n=i.useState(0),t=M(n,2),r=t[0],o=t[1],a=i.useRef(0),s=i.useRef();return s.current=e,yi(function(){var f;(f=s.current)===null||f===void 0||f.call(s)},[r]),function(){a.current===r&&(a.current+=1,o(a.current))}}function ws(e){var n=i.useRef([]),t=i.useState({}),r=M(t,2),o=r[1],a=i.useRef(typeof e=="function"?e():e),s=No(function(){var l=a.current;n.current.forEach(function(c){l=c(l)}),n.current=[],a.current=l,o({})});function f(l){n.current.push(l),s()}return[a.current,f]}var hr={width:0,height:0,left:0,top:0,right:0};function Cs(e,n,t,r,o,a,s){var f=s.tabs,l=s.tabPosition,c=s.rtl,g,u,p;return["top","bottom"].includes(l)?(g="width",u=c?"right":"left",p=Math.abs(t)):(g="height",u="top",p=-t),i.useMemo(function(){if(!f.length)return[0,0];for(var m=f.length,d=m,x=0;x<m;x+=1){var b=e.get(f[x].key)||hr;if(b[u]+b[g]>p+n){d=x-1;break}}for(var h=0,C=m-1;C>=0;C-=1){var _=e.get(f[C].key)||hr;if(_[u]<p){h=C+1;break}}return[h,d]},[e,n,r,o,a,p,l,f.map(function(m){return m.key}).join("_"),c])}function xr(e){var n;return e instanceof Map?(n={},e.forEach(function(t,r){n[r]=t})):n=e,JSON.stringify(n)}var Ss="TABS_DQ";function Ro(e){return String(e).replace(/"/g,Ss)}function $s(e,n){var t=e.prefixCls,r=e.editable,o=e.locale,a=e.style;return!r||r.showAdd===!1?null:i.createElement("button",{ref:n,type:"button",className:"".concat(t,"-nav-add"),style:a,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(f){r.onEdit("add",{event:f})}},r.addIcon||"+")}const ko=i.forwardRef($s);var _r=i.forwardRef(function(e,n){var t=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var a,s={};return ct(o)==="object"&&!i.isValidElement(o)?s=o:s.right=o,t==="right"&&(a=s.right),t==="left"&&(a=s.left),a?i.createElement("div",{className:"".concat(r,"-extra-content"),ref:n},a):null});function Ps(e,n){var t=e.prefixCls,r=e.id,o=e.tabs,a=e.locale,s=e.mobile,f=e.moreIcon,l=f===void 0?"More":f,c=e.moreTransitionName,g=e.style,u=e.className,p=e.editable,m=e.tabBarGutter,d=e.rtl,x=e.removeAriaLabel,b=e.onTabClick,h=e.getPopupContainer,C=e.popupClassName,_=i.useState(!1),w=M(_,2),S=w[0],v=w[1],O=i.useState(null),P=M(O,2),T=P[0],$=P[1],y="".concat(r,"-more-popup"),R="".concat(t,"-dropdown"),N=T!==null?"".concat(y,"-").concat(T):null,k=a==null?void 0:a.dropdownAriaLabel;function L(E,I){E.preventDefault(),E.stopPropagation(),p.onEdit("remove",{key:I,event:E})}var F=i.createElement(Wn,{onClick:function(I){var A=I.key,U=I.domEvent;b(A,U),v(!1)},prefixCls:"".concat(R,"-menu"),id:y,tabIndex:-1,role:"listbox","aria-activedescendant":N,selectedKeys:[T],"aria-label":k!==void 0?k:"expanded dropdown"},o.map(function(E){var I=p&&E.closable!==!1&&!E.disabled;return i.createElement(pt,{key:E.key,id:"".concat(y,"-").concat(E.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(E.key),disabled:E.disabled},i.createElement("span",null,E.label),I&&i.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(R,"-menu-item-remove"),onClick:function(U){U.stopPropagation(),L(U,E.key)}},E.closeIcon||p.removeIcon||"×"))}));function K(E){for(var I=o.filter(function(ie){return!ie.disabled}),A=I.findIndex(function(ie){return ie.key===T})||0,U=I.length,me=0;me<U;me+=1){A=(A+E+U)%U;var be=I[A];if(!be.disabled){$(be.key);return}}}function Y(E){var I=E.which;if(!S){[ue.DOWN,ue.SPACE,ue.ENTER].includes(I)&&(v(!0),E.preventDefault());return}switch(I){case ue.UP:K(-1),E.preventDefault();break;case ue.DOWN:K(1),E.preventDefault();break;case ue.ESC:v(!1);break;case ue.SPACE:case ue.ENTER:T!==null&&b(T,E);break}}i.useEffect(function(){var E=document.getElementById(N);E&&E.scrollIntoView&&E.scrollIntoView(!1)},[T]),i.useEffect(function(){S||$(null)},[S]);var X=B({},d?"marginRight":"marginLeft",m);o.length||(X.visibility="hidden",X.order=1);var le=H(B({},"".concat(R,"-rtl"),d)),ne=s?null:i.createElement(us,{prefixCls:R,overlay:F,trigger:["hover"],visible:o.length?S:!1,transitionName:c,onVisibleChange:v,overlayClassName:H(le,C),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:h},i.createElement("button",{type:"button",className:"".concat(t,"-nav-more"),style:X,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y,id:"".concat(r,"-more"),"aria-expanded":S,onKeyDown:Y},l));return i.createElement("div",{className:H("".concat(t,"-nav-operations"),u),style:g,ref:n},ne,i.createElement(ko,{prefixCls:t,locale:a,editable:p}))}const Es=i.memo(i.forwardRef(Ps),function(e,n){return n.tabMoving});function Is(e){var n,t=e.prefixCls,r=e.id,o=e.active,a=e.tab,s=a.key,f=a.label,l=a.disabled,c=a.closeIcon,g=e.closable,u=e.renderWrapper,p=e.removeAriaLabel,m=e.editable,d=e.onClick,x=e.onFocus,b=e.style,h="".concat(t,"-tab"),C=m&&g!==!1&&!l;function _(v){l||d(v)}function w(v){v.preventDefault(),v.stopPropagation(),m.onEdit("remove",{key:s,event:v})}var S=i.createElement("div",{key:s,"data-node-key":Ro(s),className:H(h,(n={},B(n,"".concat(h,"-with-remove"),C),B(n,"".concat(h,"-active"),o),B(n,"".concat(h,"-disabled"),l),n)),style:b,onClick:_},i.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(h,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":l,tabIndex:l?null:0,onClick:function(O){O.stopPropagation(),_(O)},onKeyDown:function(O){[ue.SPACE,ue.ENTER].includes(O.which)&&(O.preventDefault(),_(O))},onFocus:x},f),C&&i.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(h,"-remove"),onClick:function(O){O.stopPropagation(),w(O)}},c||m.removeIcon||"×"));return u?u(S):S}var Cn=function(n){var t=n.current||{},r=t.offsetWidth,o=r===void 0?0:r,a=t.offsetHeight,s=a===void 0?0:a;return[o,s]},Xn=function(n,t){return n[t?0:1]};function Ts(e,n){var t,r=i.useContext(dt),o=r.prefixCls,a=r.tabs,s=e.className,f=e.style,l=e.id,c=e.animated,g=e.activeKey,u=e.rtl,p=e.extra,m=e.editable,d=e.locale,x=e.tabPosition,b=e.tabBarGutter,h=e.children,C=e.onTabClick,_=e.onTabScroll,w=i.useRef(),S=i.useRef(),v=i.useRef(),O=i.useRef(),P=i.useRef(),T=i.useRef(),$=i.useRef(),y=x==="top"||x==="bottom",R=mr(0,function(q,V){y&&_&&_({direction:q>V?"left":"right"})}),N=M(R,2),k=N[0],L=N[1],F=mr(0,function(q,V){!y&&_&&_({direction:q>V?"top":"bottom"})}),K=M(F,2),Y=K[0],X=K[1],le=i.useState([0,0]),ne=M(le,2),E=ne[0],I=ne[1],A=i.useState([0,0]),U=M(A,2),me=U[0],be=U[1],ie=i.useState([0,0]),ve=M(ie,2),ae=ve[0],W=ve[1],Oe=i.useState([0,0]),Pe=M(Oe,2),Ee=Pe[0],Ne=Pe[1],D=ws(new Map),Ie=M(D,2),he=Ie[0],tn=Ie[1],Ke=xs(a,he,me[0]),Ce=Xn(E,y),Be=Xn(me,y),Ae=Xn(ae,y),Ue=Xn(Ee,y),We=Ce<Be+Ae,J=We?Ce-Ue:Ce-Ae,Ge="".concat(o,"-nav-operations-hidden"),Se=0,ce=0;y&&u?(Se=0,ce=Math.max(0,Be-J)):(Se=Math.min(0,J-Be),ce=0);function Re(q){return q<Se?Se:q>ce?ce:q}var pe=i.useRef(),He=i.useState(),Te=M(He,2),ye=Te[0],xe=Te[1];function fn(){xe(Date.now())}function ln(){window.clearTimeout(pe.current)}ys(O,function(q,V){function de(we,Xe){we(function(De){var pn=Re(De+Xe);return pn})}return We?(y?de(L,q):de(X,V),ln(),fn(),!0):!1}),i.useEffect(function(){return ln(),ye&&(pe.current=window.setTimeout(function(){xe(0)},100)),ln},[ye]);var Ze=Cs(Ke,J,y?k:Y,Be,Ae,Ue,z(z({},e),{},{tabs:a})),cn=M(Ze,2),un=cn[0],Le=cn[1],rn=Yr(function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,V=Ke.get(q)||{width:0,height:0,left:0,right:0,top:0};if(y){var de=k;u?V.right<k?de=V.right:V.right+V.width>k+J&&(de=V.right+V.width-J):V.left<-k?de=-V.left:V.left+V.width>-k+J&&(de=-(V.left+V.width-J)),X(0),L(Re(de))}else{var we=Y;V.top<-Y?we=-V.top:V.top+V.height>-Y+J&&(we=-(V.top+V.height-J)),L(0),X(Re(we))}}),Fe={};x==="top"||x==="bottom"?Fe[u?"marginRight":"marginLeft"]=b:Fe.marginTop=b;var gn=a.map(function(q,V){var de=q.key;return i.createElement(Is,{id:l,prefixCls:o,key:de,tab:q,style:V===0?void 0:Fe,closable:q.closable,editable:m,active:de===g,renderWrapper:h,removeAriaLabel:d==null?void 0:d.removeAriaLabel,onClick:function(Xe){C(de,Xe)},onFocus:function(){rn(de),fn(),O.current&&(u||(O.current.scrollLeft=0),O.current.scrollTop=0)}})}),Je=function(){return tn(function(){var V=new Map;return a.forEach(function(de){var we,Xe=de.key,De=(we=P.current)===null||we===void 0?void 0:we.querySelector('[data-node-key="'.concat(Ro(Xe),'"]'));De&&V.set(Xe,{width:De.offsetWidth,height:De.offsetHeight,left:De.offsetLeft,top:De.offsetTop})}),V})};i.useEffect(function(){Je()},[a.map(function(q){return q.key}).join("_")]);var $e=No(function(){var q=Cn(w),V=Cn(S),de=Cn(v);I([q[0]-V[0]-de[0],q[1]-V[1]-de[1]]);var we=Cn($);W(we);var Xe=Cn(T);Ne(Xe);var De=Cn(P);be([De[0]-we[0],De[1]-we[1]]),Je()}),j=a.slice(0,un),G=a.slice(Le+1),re=[].concat(sn(j),sn(G)),ke=i.useState(),qe=M(ke,2),yt=qe[0],Gn=qe[1],je=Ke.get(g),Hn=i.useRef();function bn(){Qe.cancel(Hn.current)}i.useEffect(function(){var q={};return je&&(y?(u?q.right=je.right:q.left=je.left,q.width=je.width):(q.top=je.top,q.height=je.height)),bn(),Hn.current=Qe(function(){Gn(q)}),bn},[je,y,u]),i.useEffect(function(){rn()},[g,Se,ce,xr(je),xr(Ke),y]),i.useEffect(function(){$e()},[u]);var Ye=!!re.length,on="".concat(o,"-nav-wrap"),hn,Rn,kn,qn;return y?u?(Rn=k>0,hn=k!==ce):(hn=k<0,Rn=k!==Se):(kn=Y<0,qn=Y!==Se),i.createElement(tt,{onResize:$e},i.createElement("div",{ref:to(n,w),role:"tablist",className:H("".concat(o,"-nav"),s),style:f,onKeyDown:function(){fn()}},i.createElement(_r,{ref:S,position:"left",extra:p,prefixCls:o}),i.createElement("div",{className:H(on,(t={},B(t,"".concat(on,"-ping-left"),hn),B(t,"".concat(on,"-ping-right"),Rn),B(t,"".concat(on,"-ping-top"),kn),B(t,"".concat(on,"-ping-bottom"),qn),t)),ref:O},i.createElement(tt,{onResize:$e},i.createElement("div",{ref:P,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(k,"px, ").concat(Y,"px)"),transition:ye?"none":void 0}},gn,i.createElement(ko,{ref:$,prefixCls:o,locale:d,editable:m,style:z(z({},gn.length===0?void 0:Fe),{},{visibility:Ye?"hidden":null})}),i.createElement("div",{className:H("".concat(o,"-ink-bar"),B({},"".concat(o,"-ink-bar-animated"),c.inkBar)),style:yt})))),i.createElement(Es,Q({},e,{removeAriaLabel:d==null?void 0:d.removeAriaLabel,ref:T,prefixCls:o,tabs:re,className:!Ye&&Ge,tabMoving:!!ye})),i.createElement(_r,{ref:v,position:"right",extra:p,prefixCls:o})))}const yr=i.forwardRef(Ts);var Os=["renderTabBar"],Ns=["label","key"];function Rs(e){var n=e.renderTabBar,t=ge(e,Os),r=i.useContext(dt),o=r.tabs;if(n){var a=z(z({},t),{},{panes:o.map(function(s){var f=s.label,l=s.key,c=ge(s,Ns);return i.createElement(Oo,Q({tab:f,key:l,tabKey:l},c))})});return n(a,yr)}return i.createElement(yr,t)}function ks(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},n;return e===!1?n={inkBar:!1,tabPane:!1}:e===!0?n={inkBar:!0,tabPane:!1}:n=z({inkBar:!0},ct(e)==="object"?e:{}),n.tabPaneMotion&&n.tabPane===void 0&&(n.tabPane=!0),!n.tabPaneMotion&&n.tabPane&&(n.tabPane=!1),n}var Ms=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],wr=0;function As(e,n){var t,r=e.id,o=e.prefixCls,a=o===void 0?"rc-tabs":o,s=e.className,f=e.items,l=e.direction,c=e.activeKey,g=e.defaultActiveKey,u=e.editable,p=e.animated,m=e.tabPosition,d=m===void 0?"top":m,x=e.tabBarGutter,b=e.tabBarStyle,h=e.tabBarExtraContent,C=e.locale,_=e.moreIcon,w=e.moreTransitionName,S=e.destroyInactiveTabPane,v=e.renderTabBar,O=e.onChange,P=e.onTabClick,T=e.onTabScroll,$=e.getPopupContainer,y=e.popupClassName,R=ge(e,Ms),N=i.useMemo(function(){return(f||[]).filter(function(D){return D&&ct(D)==="object"&&"key"in D})},[f]),k=l==="rtl",L=ks(p),F=i.useState(!1),K=M(F,2),Y=K[0],X=K[1];i.useEffect(function(){X(ji())},[]);var le=Pn(function(){var D;return(D=N[0])===null||D===void 0?void 0:D.key},{value:c,defaultValue:g}),ne=M(le,2),E=ne[0],I=ne[1],A=i.useState(function(){return N.findIndex(function(D){return D.key===E})}),U=M(A,2),me=U[0],be=U[1];i.useEffect(function(){var D=N.findIndex(function(he){return he.key===E});if(D===-1){var Ie;D=Math.max(0,Math.min(me,N.length-1)),I((Ie=N[D])===null||Ie===void 0?void 0:Ie.key)}be(D)},[N.map(function(D){return D.key}).join("_"),E,me]);var ie=Pn(null,{value:r}),ve=M(ie,2),ae=ve[0],W=ve[1];i.useEffect(function(){r||(W("rc-tabs-".concat(wr)),wr+=1)},[]);function Oe(D,Ie){P==null||P(D,Ie);var he=D!==E;I(D),he&&(O==null||O(D))}var Pe={id:ae,activeKey:E,animated:L,tabPosition:d,rtl:k,mobile:Y},Ee,Ne=z(z({},Pe),{},{editable:u,locale:C,moreIcon:_,moreTransitionName:w,tabBarGutter:x,onTabClick:Oe,onTabScroll:T,extra:h,style:b,panes:null,getPopupContainer:$,popupClassName:y});return i.createElement(dt.Provider,{value:{tabs:N,prefixCls:a}},i.createElement("div",Q({ref:n,id:r,className:H(a,"".concat(a,"-").concat(d),(t={},B(t,"".concat(a,"-mobile"),Y),B(t,"".concat(a,"-editable"),u),B(t,"".concat(a,"-rtl"),k),t),s)},R),Ee,i.createElement(Rs,Q({},Ne,{renderTabBar:v})),i.createElement(hs,Q({destroyInactiveTabPane:S},Pe,{animated:L}))))}var js=i.forwardRef(As),Ds={motionAppear:!1,motionEnter:!0,motionLeave:!0};function zs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},t;return n===!1?t={inkBar:!1,tabPane:!1}:n===!0?t={inkBar:!0,tabPane:!0}:t=fe({inkBar:!0},Jr(n)==="object"?n:{}),t.tabPane&&(t.tabPaneMotion=fe(fe({},Ds),{motionName:wi(e,"switch")})),t}var Ks=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function Ls(e){return e.filter(function(n){return n})}function Bs(e,n){if(e)return e;var t=oo(n).map(function(r){if(i.isValidElement(r)){var o=r.key,a=r.props,s=a||{},f=s.tab,l=Ks(s,["tab"]),c=fe(fe({key:String(o)},l),{label:f});return c}return null});return Ls(t)}var Fs=function(){return null};const Vs=Fs;var Us=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function Ws(e){var n=e.type,t=e.className,r=e.size,o=e.onEdit,a=e.hideAdd,s=e.centered,f=e.addIcon,l=e.children,c=e.items,g=e.animated,u=Us(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),p=u.prefixCls,m=u.moreIcon,d=m===void 0?i.createElement(pa,null):m,x=i.useContext(lt),b=x.getPrefixCls,h=x.direction,C=x.getPopupContainer,_=b("tabs",p),w;n==="editable-card"&&(w={onEdit:function(T,$){var y=$.key,R=$.event;o==null||o(T==="add"?R:y,T)},removeIcon:i.createElement(Si,null),addIcon:f||i.createElement(vs,null),showAdd:a!==!0});var S=b(),v=Bs(c,l),O=zs(_,g);return i.createElement(Ci.Consumer,null,function(P){var T=r!==void 0?r:P;return i.createElement(js,fe({direction:h,getPopupContainer:C,moreTransitionName:"".concat(S,"-slide-up")},u,{items:v,className:H(_e(_e(_e(_e({},"".concat(_,"-").concat(T),T),"".concat(_,"-card"),["card","editable-card"].includes(n)),"".concat(_,"-editable-card"),n==="editable-card"),"".concat(_,"-centered"),s),t),editable:w,moreIcon:d,prefixCls:_,animated:O}))})}Ws.TabPane=Vs;function Gs(){this.__data__=[],this.size=0}var Hs=Gs;function qs(e,n){return e===n||e!==e&&n!==n}var Mo=qs,Ys=Mo;function Xs(e,n){for(var t=e.length;t--;)if(Ys(e[t][0],n))return t;return-1}var mt=Xs,Zs=mt,Js=Array.prototype,Qs=Js.splice;function ef(e){var n=this.__data__,t=Zs(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Qs.call(n,t,1),--this.size,!0}var nf=ef,tf=mt;function rf(e){var n=this.__data__,t=tf(n,e);return t<0?void 0:n[t][1]}var of=rf,af=mt;function sf(e){return af(this.__data__,e)>-1}var ff=sf,lf=mt;function cf(e,n){var t=this.__data__,r=lf(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}var uf=cf,gf=Hs,pf=nf,df=of,mf=ff,vf=uf;function En(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}En.prototype.clear=gf;En.prototype.delete=pf;En.prototype.get=df;En.prototype.has=mf;En.prototype.set=vf;var vt=En,bf=vt;function hf(){this.__data__=new bf,this.size=0}var xf=hf;function _f(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}var yf=_f;function wf(e){return this.__data__.get(e)}var Cf=wf;function Sf(e){return this.__data__.has(e)}var $f=Sf,Pf=ut,Ef=Fn,If="[object AsyncFunction]",Tf="[object Function]",Of="[object GeneratorFunction]",Nf="[object Proxy]";function Rf(e){if(!Ef(e))return!1;var n=Pf(e);return n==Tf||n==Of||n==If||n==Nf}var Ao=Rf,kf=nn,Mf=kf["__core-js_shared__"],Af=Mf,Ct=Af,Cr=function(){var e=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function jf(e){return!!Cr&&Cr in e}var Df=jf,zf=Function.prototype,Kf=zf.toString;function Lf(e){if(e!=null){try{return Kf.call(e)}catch{}try{return e+""}catch{}}return""}var jo=Lf,Bf=Ao,Ff=Df,Vf=Fn,Uf=jo,Wf=/[\\^$.*+?()[\]{}|]/g,Gf=/^\[object .+?Constructor\]$/,Hf=Function.prototype,qf=Object.prototype,Yf=Hf.toString,Xf=qf.hasOwnProperty,Zf=RegExp("^"+Yf.call(Xf).replace(Wf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jf(e){if(!Vf(e)||Ff(e))return!1;var n=Bf(e)?Zf:Gf;return n.test(Uf(e))}var Qf=Jf;function el(e,n){return e==null?void 0:e[n]}var nl=el,tl=Qf,rl=nl;function ol(e,n){var t=rl(e,n);return tl(t)?t:void 0}var vn=ol,il=vn,al=nn,sl=il(al,"Map"),Wt=sl,fl=vn,ll=fl(Object,"create"),bt=ll,Sr=bt;function cl(){this.__data__=Sr?Sr(null):{},this.size=0}var ul=cl;function gl(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var pl=gl,dl=bt,ml="__lodash_hash_undefined__",vl=Object.prototype,bl=vl.hasOwnProperty;function hl(e){var n=this.__data__;if(dl){var t=n[e];return t===ml?void 0:t}return bl.call(n,e)?n[e]:void 0}var xl=hl,_l=bt,yl=Object.prototype,wl=yl.hasOwnProperty;function Cl(e){var n=this.__data__;return _l?n[e]!==void 0:wl.call(n,e)}var Sl=Cl,$l=bt,Pl="__lodash_hash_undefined__";function El(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=$l&&n===void 0?Pl:n,this}var Il=El,Tl=ul,Ol=pl,Nl=xl,Rl=Sl,kl=Il;function In(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}In.prototype.clear=Tl;In.prototype.delete=Ol;In.prototype.get=Nl;In.prototype.has=Rl;In.prototype.set=kl;var Ml=In,$r=Ml,Al=vt,jl=Wt;function Dl(){this.size=0,this.__data__={hash:new $r,map:new(jl||Al),string:new $r}}var zl=Dl;function Kl(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}var Ll=Kl,Bl=Ll;function Fl(e,n){var t=e.__data__;return Bl(n)?t[typeof n=="string"?"string":"hash"]:t.map}var ht=Fl,Vl=ht;function Ul(e){var n=Vl(this,e).delete(e);return this.size-=n?1:0,n}var Wl=Ul,Gl=ht;function Hl(e){return Gl(this,e).get(e)}var ql=Hl,Yl=ht;function Xl(e){return Yl(this,e).has(e)}var Zl=Xl,Jl=ht;function Ql(e,n){var t=Jl(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}var ec=Ql,nc=zl,tc=Wl,rc=ql,oc=Zl,ic=ec;function Tn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Tn.prototype.clear=nc;Tn.prototype.delete=tc;Tn.prototype.get=rc;Tn.prototype.has=oc;Tn.prototype.set=ic;var ac=Tn,sc=vt,fc=Wt,lc=ac,cc=200;function uc(e,n){var t=this.__data__;if(t instanceof sc){var r=t.__data__;if(!fc||r.length<cc-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new lc(r)}return t.set(e,n),this.size=t.size,this}var gc=uc,pc=vt,dc=xf,mc=yf,vc=Cf,bc=$f,hc=gc;function On(e){var n=this.__data__=new pc(e);this.size=n.size}On.prototype.clear=dc;On.prototype.delete=mc;On.prototype.get=vc;On.prototype.has=bc;On.prototype.set=hc;var xc=On,_c=nn,yc=_c.Uint8Array,wc=yc;function Cc(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var Do=Cc,Sc=Do,$c=zt;function Pc(e,n,t){var r=n(e);return $c(e)?r:Sc(r,t(e))}var zo=Pc;function Ec(e,n){for(var t=-1,r=e==null?0:e.length,o=0,a=[];++t<r;){var s=e[t];n(s,t,e)&&(a[o++]=s)}return a}var Ic=Ec;function Tc(){return[]}var Ko=Tc,Oc=Ic,Nc=Ko,Rc=Object.prototype,kc=Rc.propertyIsEnumerable,Pr=Object.getOwnPropertySymbols,Mc=Pr?function(e){return e==null?[]:(e=Object(e),Oc(Pr(e),function(n){return kc.call(e,n)}))}:Nc,Gt=Mc;function Ac(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var jc=Ac,Dc=ut,zc=Vn,Kc="[object Arguments]";function Lc(e){return zc(e)&&Dc(e)==Kc}var Bc=Lc,Er=Bc,Fc=Vn,Lo=Object.prototype,Vc=Lo.hasOwnProperty,Uc=Lo.propertyIsEnumerable,Wc=Er(function(){return arguments}())?Er:function(e){return Fc(e)&&Vc.call(e,"callee")&&!Uc.call(e,"callee")},Gc=Wc,it={exports:{}};function Hc(){return!1}var qc=Hc;it.exports;(function(e,n){var t=nn,r=qc,o=n&&!n.nodeType&&n,a=o&&!0&&e&&!e.nodeType&&e,s=a&&a.exports===o,f=s?t.Buffer:void 0,l=f?f.isBuffer:void 0,c=l||r;e.exports=c})(it,it.exports);var Bo=it.exports,Yc=9007199254740991,Xc=/^(?:0|[1-9]\d*)$/;function Zc(e,n){var t=typeof e;return n=n??Yc,!!n&&(t=="number"||t!="symbol"&&Xc.test(e))&&e>-1&&e%1==0&&e<n}var Jc=Zc,Qc=9007199254740991;function eu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Qc}var Fo=eu,nu=ut,tu=Fo,ru=Vn,ou="[object Arguments]",iu="[object Array]",au="[object Boolean]",su="[object Date]",fu="[object Error]",lu="[object Function]",cu="[object Map]",uu="[object Number]",gu="[object Object]",pu="[object RegExp]",du="[object Set]",mu="[object String]",vu="[object WeakMap]",bu="[object ArrayBuffer]",hu="[object DataView]",xu="[object Float32Array]",_u="[object Float64Array]",yu="[object Int8Array]",wu="[object Int16Array]",Cu="[object Int32Array]",Su="[object Uint8Array]",$u="[object Uint8ClampedArray]",Pu="[object Uint16Array]",Eu="[object Uint32Array]",te={};te[xu]=te[_u]=te[yu]=te[wu]=te[Cu]=te[Su]=te[$u]=te[Pu]=te[Eu]=!0;te[ou]=te[iu]=te[bu]=te[au]=te[hu]=te[su]=te[fu]=te[lu]=te[cu]=te[uu]=te[gu]=te[pu]=te[du]=te[mu]=te[vu]=!1;function Iu(e){return ru(e)&&tu(e.length)&&!!te[nu(e)]}var Tu=Iu;function Ou(e){return function(n){return e(n)}}var Ht=Ou,at={exports:{}};at.exports;(function(e,n){var t=$i,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===r,s=a&&t.process,f=function(){try{var l=o&&o.require&&o.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=f})(at,at.exports);var qt=at.exports,Nu=Tu,Ru=Ht,Ir=qt,Tr=Ir&&Ir.isTypedArray,ku=Tr?Ru(Tr):Nu,Mu=ku,Au=jc,ju=Gc,Du=zt,zu=Bo,Ku=Jc,Lu=Mu,Bu=Object.prototype,Fu=Bu.hasOwnProperty;function Vu(e,n){var t=Du(e),r=!t&&ju(e),o=!t&&!r&&zu(e),a=!t&&!r&&!o&&Lu(e),s=t||r||o||a,f=s?Au(e.length,String):[],l=f.length;for(var c in e)(n||Fu.call(e,c))&&!(s&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Ku(c,l)))&&f.push(c);return f}var Vo=Vu,Uu=Object.prototype;function Wu(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||Uu;return e===t}var Yt=Wu,Gu=fo,Hu=Gu(Object.keys,Object),qu=Hu,Yu=Yt,Xu=qu,Zu=Object.prototype,Ju=Zu.hasOwnProperty;function Qu(e){if(!Yu(e))return Xu(e);var n=[];for(var t in Object(e))Ju.call(e,t)&&t!="constructor"&&n.push(t);return n}var eg=Qu,ng=Ao,tg=Fo;function rg(e){return e!=null&&tg(e.length)&&!ng(e)}var Uo=rg,og=Vo,ig=eg,ag=Uo;function sg(e){return ag(e)?og(e):ig(e)}var Xt=sg,fg=zo,lg=Gt,cg=Xt;function ug(e){return fg(e,cg,lg)}var gg=ug,pg=vn,dg=nn,mg=pg(dg,"DataView"),vg=mg,bg=vn,hg=nn,xg=bg(hg,"Promise"),_g=xg,yg=vn,wg=nn,Cg=yg(wg,"Set"),Sg=Cg,$g=vn,Pg=nn,Eg=$g(Pg,"WeakMap"),Ig=Eg,Tt=vg,Ot=Wt,Nt=_g,Rt=Sg,kt=Ig,Wo=ut,Nn=jo,Or="[object Map]",Tg="[object Object]",Nr="[object Promise]",Rr="[object Set]",kr="[object WeakMap]",Mr="[object DataView]",Og=Nn(Tt),Ng=Nn(Ot),Rg=Nn(Nt),kg=Nn(Rt),Mg=Nn(kt),mn=Wo;(Tt&&mn(new Tt(new ArrayBuffer(1)))!=Mr||Ot&&mn(new Ot)!=Or||Nt&&mn(Nt.resolve())!=Nr||Rt&&mn(new Rt)!=Rr||kt&&mn(new kt)!=kr)&&(mn=function(e){var n=Wo(e),t=n==Tg?e.constructor:void 0,r=t?Nn(t):"";if(r)switch(r){case Og:return Mr;case Ng:return Or;case Rg:return Nr;case kg:return Rr;case Mg:return kr}return n});var Zt=mn;function Ag(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var jg=Ag,Dg=vn,zg=function(){try{var e=Dg(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Kg=zg,Ar=Kg;function Lg(e,n,t){n=="__proto__"&&Ar?Ar(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}var Go=Lg,Bg=Go,Fg=Mo,Vg=Object.prototype,Ug=Vg.hasOwnProperty;function Wg(e,n,t){var r=e[n];(!(Ug.call(e,n)&&Fg(r,t))||t===void 0&&!(n in e))&&Bg(e,n,t)}var Ho=Wg,Gg=Ho,Hg=Go;function qg(e,n,t,r){var o=!t;t||(t={});for(var a=-1,s=n.length;++a<s;){var f=n[a],l=r?r(t[f],e[f],f,t,e):void 0;l===void 0&&(l=e[f]),o?Hg(t,f,l):Gg(t,f,l)}return t}var xt=qg,Yg=xt,Xg=Xt;function Zg(e,n){return e&&Yg(n,Xg(n),e)}var Jg=Zg;function Qg(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var ep=Qg,np=Fn,tp=Yt,rp=ep,op=Object.prototype,ip=op.hasOwnProperty;function ap(e){if(!np(e))return rp(e);var n=tp(e),t=[];for(var r in e)r=="constructor"&&(n||!ip.call(e,r))||t.push(r);return t}var sp=ap,fp=Vo,lp=sp,cp=Uo;function up(e){return cp(e)?fp(e,!0):lp(e)}var Jt=up,gp=xt,pp=Jt;function dp(e,n){return e&&gp(n,pp(n),e)}var mp=dp,st={exports:{}};st.exports;(function(e,n){var t=nn,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===r,s=a?t.Buffer:void 0,f=s?s.allocUnsafe:void 0;function l(c,g){if(g)return c.slice();var u=c.length,p=f?f(u):new c.constructor(u);return c.copy(p),p}e.exports=l})(st,st.exports);var vp=st.exports;function bp(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var hp=bp,xp=xt,_p=Gt;function yp(e,n){return xp(e,_p(e),n)}var wp=yp,Cp=Do,Sp=lo,$p=Gt,Pp=Ko,Ep=Object.getOwnPropertySymbols,Ip=Ep?function(e){for(var n=[];e;)Cp(n,$p(e)),e=Sp(e);return n}:Pp,qo=Ip,Tp=xt,Op=qo;function Np(e,n){return Tp(e,Op(e),n)}var Rp=Np,kp=zo,Mp=qo,Ap=Jt;function jp(e){return kp(e,Ap,Mp)}var Dp=jp,zp=Object.prototype,Kp=zp.hasOwnProperty;function Lp(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&Kp.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Bp=Lp,jr=wc;function Fp(e){var n=new e.constructor(e.byteLength);return new jr(n).set(new jr(e)),n}var Qt=Fp,Vp=Qt;function Up(e,n){var t=n?Vp(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Wp=Up,Gp=/\w*$/;function Hp(e){var n=new e.constructor(e.source,Gp.exec(e));return n.lastIndex=e.lastIndex,n}var qp=Hp,Dr=Pi,zr=Dr?Dr.prototype:void 0,Kr=zr?zr.valueOf:void 0;function Yp(e){return Kr?Object(Kr.call(e)):{}}var Xp=Yp,Zp=Qt;function Jp(e,n){var t=n?Zp(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Qp=Jp,ed=Qt,nd=Wp,td=qp,rd=Xp,od=Qp,id="[object Boolean]",ad="[object Date]",sd="[object Map]",fd="[object Number]",ld="[object RegExp]",cd="[object Set]",ud="[object String]",gd="[object Symbol]",pd="[object ArrayBuffer]",dd="[object DataView]",md="[object Float32Array]",vd="[object Float64Array]",bd="[object Int8Array]",hd="[object Int16Array]",xd="[object Int32Array]",_d="[object Uint8Array]",yd="[object Uint8ClampedArray]",wd="[object Uint16Array]",Cd="[object Uint32Array]";function Sd(e,n,t){var r=e.constructor;switch(n){case pd:return ed(e);case id:case ad:return new r(+e);case dd:return nd(e,t);case md:case vd:case bd:case hd:case xd:case _d:case yd:case wd:case Cd:return od(e,t);case sd:return new r;case fd:case ud:return new r(e);case ld:return td(e);case cd:return new r;case gd:return rd(e)}}var $d=Sd,Pd=Fn,Lr=Object.create,Ed=function(){function e(){}return function(n){if(!Pd(n))return{};if(Lr)return Lr(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}(),Id=Ed,Td=Id,Od=lo,Nd=Yt;function Rd(e){return typeof e.constructor=="function"&&!Nd(e)?Td(Od(e)):{}}var kd=Rd,Md=Zt,Ad=Vn,jd="[object Map]";function Dd(e){return Ad(e)&&Md(e)==jd}var zd=Dd,Kd=zd,Ld=Ht,Br=qt,Fr=Br&&Br.isMap,Bd=Fr?Ld(Fr):Kd,Fd=Bd,Vd=Zt,Ud=Vn,Wd="[object Set]";function Gd(e){return Ud(e)&&Vd(e)==Wd}var Hd=Gd,qd=Hd,Yd=Ht,Vr=qt,Ur=Vr&&Vr.isSet,Xd=Ur?Yd(Ur):qd,Zd=Xd,Jd=xc,Qd=jg,em=Ho,nm=Jg,tm=mp,rm=vp,om=hp,im=wp,am=Rp,sm=gg,fm=Dp,lm=Zt,cm=Bp,um=$d,gm=kd,pm=zt,dm=Bo,mm=Fd,vm=Fn,bm=Zd,hm=Xt,xm=Jt,_m=1,ym=2,wm=4,Yo="[object Arguments]",Cm="[object Array]",Sm="[object Boolean]",$m="[object Date]",Pm="[object Error]",Xo="[object Function]",Em="[object GeneratorFunction]",Im="[object Map]",Tm="[object Number]",Zo="[object Object]",Om="[object RegExp]",Nm="[object Set]",Rm="[object String]",km="[object Symbol]",Mm="[object WeakMap]",Am="[object ArrayBuffer]",jm="[object DataView]",Dm="[object Float32Array]",zm="[object Float64Array]",Km="[object Int8Array]",Lm="[object Int16Array]",Bm="[object Int32Array]",Fm="[object Uint8Array]",Vm="[object Uint8ClampedArray]",Um="[object Uint16Array]",Wm="[object Uint32Array]",ee={};ee[Yo]=ee[Cm]=ee[Am]=ee[jm]=ee[Sm]=ee[$m]=ee[Dm]=ee[zm]=ee[Km]=ee[Lm]=ee[Bm]=ee[Im]=ee[Tm]=ee[Zo]=ee[Om]=ee[Nm]=ee[Rm]=ee[km]=ee[Fm]=ee[Vm]=ee[Um]=ee[Wm]=!0;ee[Pm]=ee[Xo]=ee[Mm]=!1;function nt(e,n,t,r,o,a){var s,f=n&_m,l=n&ym,c=n&wm;if(t&&(s=o?t(e,r,o,a):t(e)),s!==void 0)return s;if(!vm(e))return e;var g=pm(e);if(g){if(s=cm(e),!f)return om(e,s)}else{var u=lm(e),p=u==Xo||u==Em;if(dm(e))return rm(e,f);if(u==Zo||u==Yo||p&&!o){if(s=l||p?{}:gm(e),!f)return l?am(e,tm(s,e)):im(e,nm(s,e))}else{if(!ee[u])return o?e:{};s=um(e,u,f)}}a||(a=new Jd);var m=a.get(e);if(m)return m;a.set(e,s),bm(e)?e.forEach(function(b){s.add(nt(b,n,t,b,e,a))}):mm(e)&&e.forEach(function(b,h){s.set(h,nt(b,n,t,h,e,a))});var d=c?l?fm:sm:l?xm:hm,x=g?void 0:d(e);return Qd(x||e,function(b,h){x&&(h=b,b=e[h]),em(s,h,nt(b,n,t,h,e,a))}),s}var Gm=nt,Hm=Gm,qm=1,Ym=4;function Xm(e){return Hm(e,qm|Ym)}var Zm=Xm;const Wr=io(Zm);var Jm=({className:e="",...n})=>$n.createElement(Ni,{className:e,component:Di,...n}),vv=Jm,bv=()=>{let[e,n]=i.useState(Ei()),{setPaymentPassword:t,userInfo:r,modalOptions:o,showAccountTipModal:a}=ao();return i.useEffect(()=>{var s;n(!!((s=r==null?void 0:r.security_account)!=null&&s.has_set_payment_password))},[r]),{hasSetPaymentPassword:e,setPaymentPassword:t,showSetPaymentPasswordOrConfirm:s=>{var f,l,c,g;e?s():((f=o.promptSettingConfig)==null?void 0:f.promptPaymentPasswordSettingWhenSign)===2||((l=o.promptSettingConfig)==null?void 0:l.promptPaymentPasswordSettingWhenSign)===3?a({visible:!0,confirm:s}):((c=o.promptSettingConfig)!=null&&c.promptPaymentPasswordSettingWhenSign||Ii((g=o.promptSettingConfig)==null?void 0:g.promptPaymentPasswordSettingWhenSign))&&!Ti(or.PN_OPEN_SET_PAYMENT_PASSWORD)?(Oi(or.PN_OPEN_SET_PAYMENT_PASSWORD,"1"),a({visible:!0,confirm:s})):s()}}},hv=`.info-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  height: 100%;
}
.info-sign .pending-warning-modal {
  top: 100px;
  display: block;
  margin: auto;
}
.info-sign .pending-warning-modal .ant-modal-body {
  padding: 18px;
}
.info-sign .pending-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.info-sign .pending-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .pending-warning-modal .anticon-exclamation-circle {
  display: none;
}
.info-sign .pending-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.info-sign .pending-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.info-sign .pending-warning-modal .footer-btns .ant-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:hover,
.info-sign .pending-warning-modal .footer-btns .ant-btn:focus,
.info-sign .pending-warning-modal .footer-btns .ant-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}
.info-sign .continue-btn:hover {
  color: var(--secondary-btn-color) !important;
  background-color: var(--secondary-btn-background-color) !important;
}
.info-sign .has-payment-password {
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--set-payment-password-bar-height);
  padding: 0 16px;
  padding-right: 52px;
  background-color: var(--tips-background-color);
  opacity: 1;
}
.info-sign .has-payment-password .has-payment-password-icon {
  width: 18px;
  height: 18px;
  border: 1px solid #f7af5d;
  border-radius: 50%;
  overflow: hidden;
  background-image: var(--icon-warning);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
.info-sign .has-payment-password .has-payment-password-tip {
  flex: 1;
  margin: 0 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: var(--text-color);
}
@media screen and (max-width: 350px) {
  .info-sign .has-payment-password .has-payment-password-tip {
    letter-spacing: -1px;
  }
}
.info-sign .has-payment-password .has-payment-password-set {
  min-width: 44px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  cursor: pointer;
}
.info-sign .has-payment-password .has-payment-password-set:hover {
  opacity: var(--hover-opacity);
}
@media (max-width: 600px) {
  .info-sign .has-payment-password {
    padding-right: 16px;
    margin-top: 15px;
  }
  .info-sign .has-payment-password[data-telegram='true'] {
    padding-right: 52px !important;
    margin-top: 0 !important;
  }
}
.info-sign .ant-tabs {
  width: calc(100% - 36px);
  min-width: 230px;
}
.info-sign .ant-tabs-nav .ant-tabs-tab {
  padding-bottom: 4px;
  color: var(--secondary-text-color);
}
.info-sign .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--text-color);
}
.info-sign .ant-tabs-nav::before {
  display: none;
}
.info-sign .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-ink-bar {
  background: var(--text-color);
}
.info-sign .scroll-part {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  margin: 0;
  overflow: auto;
}
.info-sign .scroll-part .top-menu-list {
  position: absolute;
  z-index: 99;
  top: 12px;
  left: 15px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
}
.info-sign .scroll-part .top-menu-list .item {
  cursor: pointer;
}
.info-sign .scroll-part .top-menu-list .item .anticon {
  font-size: 26px;
}
.info-sign .scroll-part .top-menu-list .item .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-entry {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .menu-icon {
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .wallet-entry {
  margin-left: 8px;
  font-size: 28px;
}
.info-sign .scroll-part .menu-entry .ant-popover {
  padding: 0;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-arrow {
  display: none;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-inner {
  border-radius: var(--primary-btn-border-radius);
  background: var(--modal-background-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list {
  display: flex;
  flex-direction: column;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge {
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge .ant-badge-dot {
  top: -1px;
  right: -4px;
}
.info-sign .scroll-part .menu-entry .ant-badge {
  column-gap: 8px;
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .ant-badge .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content {
  padding: 0;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item {
  height: 45px;
  padding: 0 17px;
  border-bottom: 1px solid var(--keyword-border-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #000;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item:last-child {
  border-bottom: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item .anticon {
  font-size: 26px;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title {
  height: 19px;
  padding-top: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-bottom: 3px;
}
.info-sign .scroll-part .info-address {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 23px;
  padding: 0 5px 0 8px;
  margin-top: 5px;
  border-radius: var(--primary-btn-border-radius);
  font-size: 12px;
  line-height: 23px;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .info-address .copy-icon {
  position: relative;
  width: 14px;
  height: 100%;
  margin-left: 5px;
}
.info-sign .scroll-part .info-address .copy-icon .anticon {
  position: absolute;
  top: 5px;
}
.info-sign .scroll-part .info-request {
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  max-height: 20px;
  padding-top: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
  gap: 6px;
}
.info-sign .scroll-part .info-request .aa-icon {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image {
  width: 22px;
  height: 22px;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image img {
  position: absolute;
  left: 0;
  top: 0;
}
.info-sign .scroll-part .info-request .aa-tag {
  padding: 0 4px;
  margin-right: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  color: var(--background-color);
  background-color: var(--text-color);
}
.info-sign .scroll-part .info-des {
  max-width: 300px;
  margin: 9px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .apart-line {
  display: none;
  width: 100%;
  border-top: 1px solid var(--card-unclickable-border-color);
}
.info-sign .scroll-part .balance-change {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  border: 1px solid var(--card-unclickable-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .balance-change .title {
  padding-bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-sign .scroll-part .balance-change .change-body .change-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body .change-title .change-val {
  font-weight: 500;
  font-size: 14px;
  color: var(--green-color);
}
.info-sign .scroll-part .balance-change .change-body .mt20 {
  margin-top: 20px;
}
.info-sign .scroll-part .balance-change .change-body .message-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
}
.info-sign .scroll-part .from-to {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border: none;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .from-to .address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-sign .scroll-part .from-to .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .no-gas-fee {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: rgba(234, 67, 53, 0.09);
}
.info-sign .scroll-part .no-gas-fee img {
  width: 18.5px;
  height: 18.5px;
  margin-top: 3px;
  margin-right: 10px;
}
.info-sign .scroll-part .no-gas-fee .no-title {
  font-weight: 500;
}
.info-sign .scroll-part .no-gas-fee .no-warning {
  display: flex;
  padding-bottom: 9px;
  margin-top: 10px;
  border-bottom: 1px solid var(--card-divider-color);
  line-height: 15px;
}
.info-sign .scroll-part .no-gas-fee .data-title {
  margin-top: 15px;
  font-weight: bold;
}
.info-sign .scroll-part .no-gas-fee .data-item {
  margin-top: 10px;
  line-height: 14px;
}
.info-sign .scroll-part .net-fee {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .net-fee .title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .title .fee-val {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title {
  font-weight: 500;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title span {
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row img {
  width: 9.19px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .approximately {
  font-weight: 400;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-standard {
  width: 70px;
  margin-right: 10px;
  font-weight: normal;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-time {
  width: 70px;
  margin-right: 19.19px;
  font-weight: 500;
  color: var(--green-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right .right-icon {
  width: 9.19px;
  margin-left: 15px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right {
  display: flex;
  text-align: right;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon {
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon svg {
  width: 13px;
  height: 13px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .right-time {
  margin-right: 55px;
  font-weight: bold;
  font-size: 12px;
  color: var(--green-color);
}
.info-sign .scroll-part .total {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .total .total-title {
  font-weight: bold;
}
.info-sign .scroll-part .total .mt8 {
  margin-top: 8px;
}
.info-sign .scroll-part .total .total-content span {
  font-weight: 400;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .show-btn {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
}
.info-sign .scroll-part .program-details {
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction {
  width: 100%;
  min-width: 230px;
  margin-bottom: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item {
  margin-top: 0;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item {
  padding: 13px 11px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--card-unclickable-border-color) !important;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color) !important;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-0 {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  word-break: break-all;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt15 {
  margin-top: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 span {
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 .data {
  max-width: calc(85 * var(--vw));
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message {
  width: calc(100% - 36px);
  min-width: 230px;
  padding: 0;
  margin-top: 18px;
  border: none;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .sign-message .s-row {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row[data-index='0'] ::after {
  display: none;
}
.info-sign .scroll-part .sign-message .s-row [data-type='title'],
.info-sign .scroll-part .sign-message .s-row [data-type='index'],
.info-sign .scroll-part .sign-message .s-row .label[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .title[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .value[data-type='index'] {
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row .label {
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .s-row .value {
  flex: 1;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message {
  position: relative;
  max-height: calc(var(--doc-height) - 300px);
  padding: 8px 12px;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message .personal-message {
  position: relative;
}
.info-sign .scroll-part .sign-message .message pre {
  padding-bottom: 2px;
}
.info-sign .scroll-part .sign-message .message.no-password-tip {
  max-height: calc(var(--doc-height) - 300px - var(--set-payment-password-bar-height) - var(--risk-bar-height)) !important;
}
.info-sign .btn-box {
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 290px;
  height: var(--sign-bottom-menu-height);
  background: var(--theme-background-color);
  box-shadow: 0 -2px 3px 1px rgba(0, 0, 0, 0.08);
}
.info-sign .btn-box > div {
  display: flex;
  width: calc(100% - 36px);
  gap: 18px;
}
.info-sign .btn-box .footer-box {
  margin-top: 10px;
}
.info-sign .btn-box .btn-cancel {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.info-sign .btn-box .btn-cancel:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-cancel span {
  font-weight: 500;
}
.info-sign .btn-box .btn-approve {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.info-sign .btn-box .btn-approve:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-approve img {
  width: 12.75px;
  height: 18.29px;
  margin-right: 12px;
}
.info-sign.info-sign-erc20_transfer .fee-row,
.info-sign.info-sign-erc1155_transfer .fee-row,
.info-sign.info-sign-erc20_approve .fee-row,
.info-sign.info-sign-native_transfer .fee-row,
.info-sign.info-sign-erc721_transfer .fee-row,
.info-sign.info-sign-seaport_cancel_order .fee-row,
.info-sign.info-sign-seaport_nft_listing .fee-row,
.info-sign.info-sign-seaport_fulfill_order .fee-row {
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row {
  flex-wrap: wrap;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .left,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .left {
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .right,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .right {
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning {
  display: flex;
  align-items: center;
  line-height: 1.3;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning span {
  line-height: 1.4;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning img {
  flex: 1;
  align-self: flex-start;
  width: 19px;
  height: 19px;
  margin-top: 4px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .info-request,
.info-sign.info-sign-erc1155_transfer .info-request,
.info-sign.info-sign-erc20_approve .info-request,
.info-sign.info-sign-native_transfer .info-request,
.info-sign.info-sign-erc721_transfer .info-request,
.info-sign.info-sign-seaport_cancel_order .info-request,
.info-sign.info-sign-seaport_nft_listing .info-request,
.info-sign.info-sign-seaport_fulfill_order .info-request {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-title,
.info-sign.info-sign-erc1155_transfer .info-title,
.info-sign.info-sign-erc20_approve .info-title,
.info-sign.info-sign-native_transfer .info-title,
.info-sign.info-sign-erc721_transfer .info-title,
.info-sign.info-sign-seaport_cancel_order .info-title,
.info-sign.info-sign-seaport_nft_listing .info-title,
.info-sign.info-sign-seaport_fulfill_order .info-title {
  height: 20px;
  max-height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
.info-sign.info-sign-erc20_transfer .apart-line,
.info-sign.info-sign-erc1155_transfer .apart-line,
.info-sign.info-sign-erc20_approve .apart-line,
.info-sign.info-sign-native_transfer .apart-line,
.info-sign.info-sign-erc721_transfer .apart-line,
.info-sign.info-sign-seaport_cancel_order .apart-line,
.info-sign.info-sign-seaport_nft_listing .apart-line,
.info-sign.info-sign-seaport_fulfill_order .apart-line {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-address,
.info-sign.info-sign-erc1155_transfer .info-address,
.info-sign.info-sign-erc20_approve .info-address,
.info-sign.info-sign-native_transfer .info-address,
.info-sign.info-sign-erc721_transfer .info-address,
.info-sign.info-sign-seaport_cancel_order .info-address,
.info-sign.info-sign-seaport_nft_listing .info-address,
.info-sign.info-sign-seaport_fulfill_order .info-address {
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-sign.info-sign-erc20_transfer .info-des,
.info-sign.info-sign-erc1155_transfer .info-des,
.info-sign.info-sign-erc20_approve .info-des,
.info-sign.info-sign-native_transfer .info-des,
.info-sign.info-sign-erc721_transfer .info-des,
.info-sign.info-sign-seaport_cancel_order .info-des,
.info-sign.info-sign-seaport_nft_listing .info-des,
.info-sign.info-sign-seaport_fulfill_order .info-des {
  display: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content,
.info-sign.info-sign-erc1155_transfer .transfer-content,
.info-sign.info-sign-erc20_approve .transfer-content,
.info-sign.info-sign-native_transfer .transfer-content,
.info-sign.info-sign-erc721_transfer .transfer-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content {
  width: calc(100% - 36px);
  min-width: 230px;
  margin: auto;
  margin-top: 18px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc1155_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc20_approve .transfer-content .mg-bottom-15,
.info-sign.info-sign-native_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc721_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_cancel_order .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_nft_listing .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .mg-bottom-15 {
  margin-bottom: 15px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .flex-sp-row {
  display: flex;
  justify-content: space-between;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box,
.info-sign.info-sign-erc20_approve .transfer-content .less-box,
.info-sign.info-sign-native_transfer .transfer-content .less-box,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box {
  padding: 13px;
  padding-bottom: 3px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .pn-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .pn-row {
  width: 100%;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--card-divider-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item:last-child {
  border-bottom: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .left {
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .right {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount {
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--accent-color);
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3 {
  margin-top: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 {
  align-items: flex-start;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left {
  display: flex;
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  overflow: hidden;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val {
  margin-right: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol {
  position: relative;
  margin-left: 2px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd {
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 {
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right {
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  color: var(--text-color);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name {
  line-height: 1.2;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row4 {
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row5 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row6 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2-0 {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 {
  padding-top: 24px;
  padding-bottom: 22px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row {
  height: 44px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1 {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right {
  text-align: right;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .pn-row2 {
  margin-top: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle {
  position: relative;
  width: 34px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 13px;
  transform: translate(-50%, -50%);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub::before {
  position: absolute;
  top: 50%;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--accent-color);
  transform: translateY(-50%);
  content: '';
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content,
.info-sign.info-sign-native_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content img,
.info-sign.info-sign-native_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content img {
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .wrap > div {
  display: flex;
  align-items: center;
  gap: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon {
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon svg {
  width: 11px;
  height: 11px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .fold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .fold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold .arrow-icon {
  transform: rotate(180deg);
}
.edit-approve-amount-modal .ant-modal-content {
  overflow: hidden;
  background-color: var(--modal-background-color) !important;
}
.edit-approve-amount-modal .ant-modal-header {
  border: none;
}
.edit-approve-amount-modal .ant-modal-header .ant-modal-title {
  text-align: center;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-body {
  padding-bottom: 16px;
}
.edit-approve-amount-modal .ant-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.edit-approve-amount-modal .ant-form .ant-row {
  flex: 1;
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input {
  height: 40px;
  border: 1px solid var(--input-border-color);
  color: var(--text-color);
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0 8px;
  margin-top: 5px;
}
.edit-approve-amount-modal .ant-form .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.edit-approve-amount-modal .ant-form .symbol {
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-footer {
  display: flex !important;
  justify-content: center;
  padding-bottom: 30px;
  border: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-default {
  display: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-primary {
  width: 100%;
  max-width: 300px;
  height: 47px;
  margin-left: 0;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
`,Qm=e=>{var n;let{userInfo:t}=e,r=Ri(),{modalOptions:o}=ao(),a=i.useMemo(()=>{let c=`${o.appId}_${t==null?void 0:t.uuid}`;return`account_security_${ki(c)}`},[o.appId,t==null?void 0:t.uuid]),[s,f]=i.useState({account:{name:"Account & Security",display:!0,badge:!1}});i.useEffect(()=>{if(t!=null&&t.security_account&&a&&!localStorage.getItem(a)){let{has_set_master_password:c,has_set_payment_password:g}=(t==null?void 0:t.security_account)||{};!c||!g?s.account.badge=!0:s.account.badge=!1}else s.account.badge=!1;f(Wr(s))},[t==null?void 0:t.security_account,a]);let l=$n.createElement("div",{className:"item",onClick:()=>{s.account.badge=!1,f(Wr(s)),r("/account/security"),localStorage.setItem(a,"true")}},$n.createElement(fa,{dot:!!s.account.badge},$n.createElement(zi,{className:"wallet-icon",name:"security_icon"})));return $n.createElement("div",{className:"top-menu-list"},!!((n=s==null?void 0:s.account)!=null&&n.display)&&l)},xv=Qm,_t={};function Mt(e){"@babel/helpers - typeof";return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mt(e)}Object.defineProperty(_t,"__esModule",{value:!0});_t.CopyToClipboard=void 0;var Zn=Jo(i),ev=Jo(Ki),nv=["text","onCopy","options","children"];function Jo(e){return e&&e.__esModule?e:{default:e}}function Gr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Hr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gr(Object(t),!0).forEach(function(r){er(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gr(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function tv(e,n){if(e==null)return{};var t=rv(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function rv(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function ov(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function qr(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function iv(e,n,t){return n&&qr(e.prototype,n),t&&qr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function av(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&At(e,n)}function At(e,n){return At=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},At(e,n)}function sv(e){var n=lv();return function(){var r=ft(e),o;if(n){var a=ft(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return fv(this,o)}}function fv(e,n){if(n&&(Mt(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Qo(e)}function Qo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ft(e){return ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ft(e)}function er(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ei=function(e){av(t,e);var n=sv(t);function t(){var r;ov(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=n.call.apply(n,[this].concat(a)),er(Qo(r),"onClick",function(f){var l=r.props,c=l.text,g=l.onCopy,u=l.children,p=l.options,m=Zn.default.Children.only(u),d=(0,ev.default)(c,p);g&&g(c,d),m&&m.props&&typeof m.props.onClick=="function"&&m.props.onClick(f)}),r}return iv(t,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var a=o.children,s=tv(o,nv),f=Zn.default.Children.only(a);return Zn.default.cloneElement(f,Hr(Hr({},s),{},{onClick:this.onClick}))}}]),t}(Zn.default.PureComponent);_t.CopyToClipboard=ei;er(ei,"defaultProps",{onCopy:void 0,options:void 0});var cv=_t,jt=cv.CopyToClipboard;jt.CopyToClipboard=jt;var uv=jt;const _v=io(uv);export{vv as D,hv as L,Ws as T,bv as V,_v as b,xv as n};
