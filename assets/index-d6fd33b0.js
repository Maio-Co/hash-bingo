import{r,aM as me,aN as Y,bK as jt,bh as g,bg as F,bL as Kt,b9 as Ce,bb as w,bM as xe,a_ as re,b8 as pe,bi as Dt,bd as ae,b7 as Qe,bw as ve,bN as Ht,bm as Xe,bO as At}from"./index-d9a9a9ca.js";import{u as Bt,T as Ft,b as he}from"./TextArea-59efc096.js";import{c as Wt}from"./index-ac4de01e.js";import{u as Ut,R as Vt}from"./colors-f2aae909.js";var Gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const Jt=Gt;var qt=function(n,a){return r.createElement(me,Y(Y({},n),{},{ref:a,icon:Jt}))},Qt=r.forwardRef(qt);const Xt=Qt;var Ye=function(n){if(jt()&&window.document.documentElement){var a=Array.isArray(n)?n:[n],t=window.document.documentElement;return a.some(function(i){return i in t.style})}return!1},Yt=function(n,a){if(!Ye(n))return!1;var t=document.createElement("div"),i=t.style[n];return t.style[n]=a,t.style[n]!==i};function We(e,n){return!Array.isArray(e)&&n!==void 0?Yt(e,n):Ye(e)}function Zt(e){var n=e.className,a=e.direction,t=e.index,i=e.marginDirection,l=e.children,m=e.split,y=e.wrap,f=r.useContext(Ze),x=f.horizontalSize,s=f.verticalSize,b=f.latestIndex,E=f.supportFlexGap,S={};return E||(a==="vertical"?t<b&&(S={marginBottom:x/(m?2:1)}):S=g(g({},t<b&&F({},i,x/(m?2:1))),y&&{paddingBottom:s})),l==null?null:r.createElement(r.Fragment,null,r.createElement("div",{className:n,style:S},l),t<b&&m&&r.createElement("span",{className:"".concat(n,"-split"),style:S},m))}var en=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},Ze=r.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),tn={small:8,middle:16,large:24};function nn(e){return typeof e=="string"?tn[e]:e||0}var rn=function(n){var a=r.useContext(Ce),t=a.getPrefixCls,i=a.space,l=a.direction,m=n.size,y=m===void 0?(i==null?void 0:i.size)||"small":m,f=n.align,x=n.className,s=n.children,b=n.direction,E=b===void 0?"horizontal":b,S=n.prefixCls,T=n.split,k=n.style,D=n.wrap,M=D===void 0?!1:D,O=en(n,["size","align","className","children","direction","prefixCls","split","style","wrap"]),P=Bt(),L=r.useMemo(function(){return(Array.isArray(y)?y:[y,y]).map(function(d){return nn(d)})},[y]),j=w(L,2),N=j[0],h=j[1],U=xe(s,{keepEmpty:!0}),H=f===void 0&&E==="horizontal"?"center":f,R=t("space",S),I=re(R,"".concat(R,"-").concat(E),F(F({},"".concat(R,"-rtl"),l==="rtl"),"".concat(R,"-align-").concat(H),H),x),v="".concat(R,"-item"),G=l==="rtl"?"marginLeft":"marginRight",K=0,V=U.map(function(d,C){d!=null&&(K=C);var J=d&&d.key||"".concat(v,"-").concat(C);return r.createElement(Zt,{className:v,key:J,direction:E,index:C,marginDirection:G,split:T,wrap:M},d)}),z=r.useMemo(function(){return{horizontalSize:N,verticalSize:h,latestIndex:K,supportFlexGap:P}},[N,h,K,P]);if(U.length===0)return null;var p={};return M&&(p.flexWrap="wrap",P||(p.marginBottom=-h)),P&&(p.columnGap=N,p.rowGap=h),r.createElement("div",g({className:I,style:g(g({},p),k)},O),r.createElement(Ze.Provider,{value:z},V))},et=rn;et.Compact=Kt;const tr=et;var an=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},on={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},ln=r.forwardRef(function(e,n){var a=function(s){var b=s.keyCode;b===pe.ENTER&&s.preventDefault()},t=function(s){var b=s.keyCode,E=e.onClick;b===pe.ENTER&&E&&E()},i=e.style,l=e.noStyle,m=e.disabled,y=an(e,["style","noStyle","disabled"]),f={};return l||(f=g({},on)),m&&(f.pointerEvents="none"),f=g(g({},f),i),r.createElement("div",g({role:"button",tabIndex:0,ref:n},y,{onKeyDown:a,onKeyUp:t,style:f}))});const Ue=ln;var sn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const cn=sn;var un=function(n,a){return r.createElement(me,Y(Y({},n),{},{ref:a,icon:cn}))},fn=r.forwardRef(un);const dn=fn;var vn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const pn=vn;var mn=function(n,a){return r.createElement(me,Y(Y({},n),{},{ref:a,icon:pn}))},yn=r.forwardRef(mn);const gn=yn;var bn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const En=bn;var Sn=function(n,a){return r.createElement(me,Y(Y({},n),{},{ref:a,icon:En}))},hn=r.forwardRef(Sn);const Cn=hn;var xn=function(n){var a=n.prefixCls,t=n["aria-label"],i=n.className,l=n.style,m=n.direction,y=n.maxLength,f=n.autoSize,x=f===void 0?!0:f,s=n.value,b=n.onSave,E=n.onCancel,S=n.onEnd,T=n.component,k=n.enterIcon,D=k===void 0?r.createElement(Cn,null):k,M=r.useRef(null),O=r.useRef(!1),P=r.useRef(),L=r.useState(s),j=w(L,2),N=j[0],h=j[1];r.useEffect(function(){h(s)},[s]),r.useEffect(function(){if(M.current&&M.current.resizableTextArea){var p=M.current.resizableTextArea.textArea;p.focus();var d=p.value.length;p.setSelectionRange(d,d)}},[]);var U=function(d){var C=d.target;h(C.value.replace(/[\n\r]/g,""))},H=function(){O.current=!0},R=function(){O.current=!1},I=function(d){var C=d.keyCode;O.current||(P.current=C)},v=function(){b(N.trim())},G=function(d){var C=d.keyCode,J=d.ctrlKey,ne=d.altKey,Z=d.metaKey,q=d.shiftKey;P.current===C&&!O.current&&!J&&!ne&&!Z&&!q&&(C===pe.ENTER?(v(),S==null||S()):C===pe.ESC&&E())},K=function(){v()},V=T?"".concat(a,"-").concat(T):"",z=re(a,"".concat(a,"-edit-content"),F({},"".concat(a,"-rtl"),m==="rtl"),i,V);return r.createElement("div",{className:z,style:l},r.createElement(Ft,{ref:M,maxLength:y,value:N,onChange:U,onKeyDown:I,onKeyUp:G,onCompositionStart:H,onCompositionEnd:R,onBlur:K,"aria-label":t,rows:1,autoSize:x}),D!==null?Dt(D,{className:"".concat(a,"-edit-content-confirm")}):null)};const On=xn;function Ee(e,n){return r.useMemo(function(){var a=!!e;return[a,g(g({},n),a&&ae(e)==="object"?e:null)]},[e])}var wn=function(n,a){var t=r.useRef(!1);r.useEffect(function(){t.current?n():t.current=!0},a)};const Rn=wn;var $n=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},_n=r.forwardRef(function(e,n){var a=e.prefixCls,t=e.component,i=t===void 0?"article":t,l=e.className,m=e.setContentRef,y=e.children,f=e.direction,x=$n(e,["prefixCls","component","className","setContentRef","children","direction"]),s=r.useContext(Ce),b=s.getPrefixCls,E=s.direction,S=f??E,T=n;m&&(T=Qe(n,m));var k=b("typography",a),D=re(k,F({},"".concat(k,"-rtl"),S==="rtl"),l);return r.createElement(i,g({className:D,ref:T},x),y)});const tt=_n;function nt(e){var n=ae(e);return n==="string"||n==="number"}function Tn(e){var n=0;return e.forEach(function(a){nt(a)?n+=String(a).length:n+=1}),n}function Ve(e,n){for(var a=0,t=[],i=0;i<e.length;i+=1){if(a===n)return t;var l=e[i],m=nt(l),y=m?String(l).length:1,f=a+y;if(f>n){var x=n-a;return t.push(String(l).slice(0,x)),t}t.push(l),a=f}return e}var kn=0,fe=1,Ge=2,Se=3,Je=4,Pn=function(n){var a=n.enabledMeasure,t=n.children,i=n.text,l=n.width,m=n.fontSize,y=n.rows,f=n.onEllipsis,x=r.useState([0,0,0]),s=w(x,2),b=w(s[0],3),E=b[0],S=b[1],T=b[2],k=s[1],D=r.useState(kn),M=w(D,2),O=M[0],P=M[1],L=r.useState(0),j=w(L,2),N=j[0],h=j[1],U=r.useRef(null),H=r.useRef(null),R=r.useMemo(function(){return xe(i)},[i]),I=r.useMemo(function(){return Tn(R)},[R]),v=r.useMemo(function(){return!a||O!==Se?t(R,!1):t(Ve(R,S),S<I)},[a,O,t,R,S,I]);ve(function(){a&&l&&m&&I&&(P(fe),k([0,Math.ceil(I/2),I]))},[a,l,m,i,I,y]),ve(function(){var z;O===fe&&h(((z=U.current)===null||z===void 0?void 0:z.offsetHeight)||0)},[O]),ve(function(){var z,p;if(N){if(O===fe){var d=((z=H.current)===null||z===void 0?void 0:z.offsetHeight)||0,C=y*N;d<=C?(P(Je),f(!1)):P(Ge)}else if(O===Ge)if(E!==T){var J=((p=H.current)===null||p===void 0?void 0:p.offsetHeight)||0,ne=y*N,Z=E,q=T;E===T-1?q=E:J<=ne?Z=S:q=S;var oe=Math.ceil((Z+q)/2);k([Z,oe,q])}else P(Se),f(!0)}},[O,E,T,y,N]);var G={width:l,whiteSpace:"normal",margin:0,padding:0},K=function(p,d,C){return r.createElement("span",{"aria-hidden":!0,ref:d,style:g({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(m/2)*2},C)},p)},V=function(p,d){var C=Ve(R,p);return K(t(C,!0),d,G)};return r.createElement(r.Fragment,null,v,a&&O!==Se&&O!==Je&&r.createElement(r.Fragment,null,K("lg",U,{wordBreak:"keep-all",whiteSpace:"nowrap"}),O===fe?K(t(R,!1),H,G):V(S,H)))};const zn=Pn;var Nn=function(n){var a=n.enabledEllipsis,t=n.isEllipsis,i=n.children,l=n.tooltipProps;return!(l!=null&&l.title)||!a?i:r.createElement(he,g({open:t?void 0:!1},l),i)};const In=Nn;var Mn=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};function Ln(e,n){var a=e.mark,t=e.code,i=e.underline,l=e.delete,m=e.strong,y=e.keyboard,f=e.italic,x=n;function s(b,E){b&&(x=r.createElement(E,{},x))}return s(m,"strong"),s(i,"u"),s(l,"del"),s(t,"code"),s(a,"mark"),s(y,"kbd"),s(f,"i"),x}function de(e,n,a){return e===!0||e===void 0?n:e||a&&n}function qe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var jn="...",Kn=r.forwardRef(function(e,n){var a,t,i,l=e.prefixCls,m=e.className,y=e.style,f=e.type,x=e.disabled,s=e.children,b=e.ellipsis,E=e.editable,S=e.copyable,T=e.component,k=e.title,D=Mn(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),M=r.useContext(Ce),O=M.getPrefixCls,P=M.direction,L=Ht("Text")[0],j=r.useRef(null),N=r.useRef(null),h=O("typography",l),U=Xe(D,["mark","code","delete","underline","strong","keyboard","italic"]),H=Ee(E),R=w(H,2),I=R[0],v=R[1],G=Ut(!1,{value:v.editing}),K=w(G,2),V=K[0],z=K[1],p=v.triggerType,d=p===void 0?["icon"]:p,C=function(o){var u;o&&((u=v.onStart)===null||u===void 0||u.call(v)),z(o)};Rn(function(){var c;V||(c=N.current)===null||c===void 0||c.focus()},[V]);var J=function(o){o==null||o.preventDefault(),C(!0)},ne=function(o){var u;(u=v.onChange)===null||u===void 0||u.call(v,o),C(!1)},Z=function(){var o;(o=v.onCancel)===null||o===void 0||o.call(v),C(!1)},q=Ee(S),oe=w(q,2),ge=oe[0],ee=oe[1],rt=r.useState(!1),Oe=w(rt,2),le=Oe[0],we=Oe[1],Re=r.useRef(),$e={};ee.format&&($e.format=ee.format);var _e=function(){window.clearTimeout(Re.current)},at=function(o){var u;o==null||o.preventDefault(),o==null||o.stopPropagation(),Wt(ee.text||String(s)||"",$e),we(!0),_e(),Re.current=window.setTimeout(function(){we(!1)},3e3),(u=ee.onCopy)===null||u===void 0||u.call(ee,o)};r.useEffect(function(){return _e},[]);var it=r.useState(!1),Te=w(it,2),ke=Te[0],ot=Te[1],lt=r.useState(!1),Pe=w(lt,2),ze=Pe[0],st=Pe[1],ct=r.useState(!1),Ne=w(ct,2),ut=Ne[0],ft=Ne[1],dt=r.useState(!1),Ie=w(dt,2),Me=Ie[0],vt=Ie[1],pt=r.useState(!1),Le=w(pt,2),je=Le[0],mt=Le[1],yt=r.useState(!0),Ke=w(yt,2),gt=Ke[0],bt=Ke[1],Et=Ee(b,{expandable:!1}),De=w(Et,2),Q=De[0],$=De[1],A=Q&&!ut,He=$.rows,te=He===void 0?1:He,se=r.useMemo(function(){return!A||$.suffix!==void 0||$.onEllipsis||$.expandable||I||ge},[A,$,I,ge]);ve(function(){Q&&!se&&(ot(We("webkitLineClamp")),st(We("textOverflow")))},[se,Q]);var B=r.useMemo(function(){return se?!1:te===1?ze:ke},[se,ze,ke]),Ae=A&&(B?je:Me),St=A&&te===1&&B,ce=A&&te>1&&B,ht=function(o){var u;ft(!0),(u=$.onExpand)===null||u===void 0||u.call($,o)},Ct=r.useState(0),Be=w(Ct,2),xt=Be[0],Ot=Be[1],wt=r.useState(0),Fe=w(wt,2),Rt=Fe[0],$t=Fe[1],_t=function(o,u){var _=o.offsetWidth,W;Ot(_),$t(parseInt((W=window.getComputedStyle)===null||W===void 0?void 0:W.call(window,u).fontSize,10)||0)},Tt=function(o){var u;vt(o),Me!==o&&((u=$.onEllipsis)===null||u===void 0||u.call($,o))};r.useEffect(function(){var c=j.current;if(Q&&B&&c){var o=ce?c.offsetHeight<c.scrollHeight:c.offsetWidth<c.scrollWidth;je!==o&&mt(o)}},[Q,B,s,ce,gt]),r.useEffect(function(){var c=j.current;if(!(typeof IntersectionObserver>"u"||!c||!B||!A)){var o=new IntersectionObserver(function(){bt(!!c.offsetParent)});return o.observe(c),function(){o.disconnect()}}},[B,A]);var X={};$.tooltip===!0?X={title:(a=v.text)!==null&&a!==void 0?a:s}:r.isValidElement($.tooltip)?X={title:$.tooltip}:ae($.tooltip)==="object"?X=g({title:(t=v.text)!==null&&t!==void 0?t:s},$.tooltip):X={title:$.tooltip};var ue=r.useMemo(function(){var c=function(u){return["string","number"].includes(ae(u))};if(!(!Q||B)){if(c(v.text))return v.text;if(c(s))return s;if(c(k))return k;if(c(X.title))return X.title}},[Q,B,k,X.title,Ae]);if(V)return r.createElement(On,{value:(i=v.text)!==null&&i!==void 0?i:typeof s=="string"?s:"",onSave:ne,onCancel:Z,onEnd:v.onEnd,prefixCls:h,className:m,style:y,direction:P,component:T,maxLength:v.maxLength,autoSize:v.autoSize,enterIcon:v.enterIcon});var kt=function(){var o=$.expandable,u=$.symbol;if(!o)return null;var _;return u?_=u:_=L.expand,r.createElement("a",{key:"expand",className:"".concat(h,"-expand"),onClick:ht,"aria-label":L.expand},_)},Pt=function(){if(I){var o=v.icon,u=v.tooltip,_=xe(u)[0]||L.edit,W=typeof _=="string"?_:"";return d.includes("icon")?r.createElement(he,{key:"edit",title:u===!1?"":_},r.createElement(Ue,{ref:N,className:"".concat(h,"-edit"),onClick:J,"aria-label":W},o||r.createElement(gn,{role:"button"}))):null}},zt=function(){if(ge){var o=ee.tooltips,u=ee.icon,_=qe(o),W=qe(u),be=le?de(_[1],L.copied):de(_[0],L.copy),Mt=le?L.copied:L.copy,Lt=typeof be=="string"?be:Mt;return r.createElement(he,{key:"copy",title:be},r.createElement(Ue,{className:re("".concat(h,"-copy"),le&&"".concat(h,"-copy-success")),onClick:at,"aria-label":Lt},le?de(W[1],r.createElement(Xt,null),!0):de(W[0],r.createElement(dn,null),!0)))}},Nt=function(o){return[o&&kt(),Pt(),zt()]},It=function(o){return[o&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},jn),$.suffix,Nt(o)]};return r.createElement(Vt,{onResize:_t,disabled:!A||B},function(c){return r.createElement(In,{tooltipProps:X,enabledEllipsis:A,isEllipsis:Ae},r.createElement(tt,g({className:re(F(F(F(F(F(F({},"".concat(h,"-").concat(f),f),"".concat(h,"-disabled"),x),"".concat(h,"-ellipsis"),Q),"".concat(h,"-single-line"),A&&te===1),"".concat(h,"-ellipsis-single-line"),St),"".concat(h,"-ellipsis-multiple-line"),ce),m),prefixCls:l,style:g(g({},y),{WebkitLineClamp:ce?te:void 0}),component:T,ref:Qe(c,j,n),direction:P,onClick:d.includes("text")?J:void 0,"aria-label":ue==null?void 0:ue.toString(),title:k},U),r.createElement(zn,{enabledMeasure:A&&!B,text:s,rows:te,width:xt,fontSize:Rt,onEllipsis:Tt},function(o,u){var _=o;o.length&&u&&ue&&(_=r.createElement("span",{key:"show-content","aria-hidden":!0},_));var W=Ln(e,r.createElement(r.Fragment,null,_,It(u)));return W})))})});const ye=Kn;var Dn=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},Hn=r.forwardRef(function(e,n){var a=e.ellipsis,t=e.rel,i=Dn(e,["ellipsis","rel"]),l=g(g({},i),{rel:t===void 0&&i.target==="_blank"?"noopener noreferrer":t});return delete l.navigate,r.createElement(ye,g({},l,{ref:n,ellipsis:!!a,component:"a"}))});const An=Hn;var Bn=r.forwardRef(function(e,n){return r.createElement(ye,g({ref:n},e,{component:"div"}))});const Fn=Bn;var Wn=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},Un=function(n,a){var t=n.ellipsis,i=Wn(n,["ellipsis"]),l=r.useMemo(function(){return t&&ae(t)==="object"?Xe(t,["expandable","rows"]):t},[t]);return r.createElement(ye,g({ref:a},i,{ellipsis:l,component:"span"}))};const Vn=r.forwardRef(Un);var Gn=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a},Jn=At(1,2,3,4,5),qn=r.forwardRef(function(e,n){var a=e.level,t=a===void 0?1:a,i=Gn(e,["level"]),l;return Jn.includes(t)?l="h".concat(t):l="h1",r.createElement(ye,g({ref:n},i,{component:l}))});const Qn=qn;var ie=tt;ie.Text=Vn;ie.Link=An;ie.Title=Qn;ie.Paragraph=Fn;const nr=ie;export{nr as S,tr as T};