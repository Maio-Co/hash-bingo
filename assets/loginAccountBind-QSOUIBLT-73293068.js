import{r as ze,t as ft,g as je}from"./unicode-405cc097.js";import{z as vt,u as bt,j as qe}from"./chunk-HNAV5WT6-6534e343.js";import{w as gt}from"./chunk-RT7AM6B4-ca1a198d.js";import{x as ht}from"./chunk-FEQ55Y6S-c072494c.js";import{N as yt}from"./chunk-5CZ6V5XL-fcd5cd2a.js";import{aW as De,aO as xt,aX as wt,aY as Ze,aZ as Je,r,a_ as W,a$ as H,b0 as Ce,b1 as Nt,b2 as Le,b3 as St,b4 as ve,b5 as Et,b6 as Ee,b7 as It,b8 as be,b9 as kt,ba as Ct,bb as _t,bc as Rt,bd as Dt,be as Vt,bf as Ft,bg as C,bh as $t,bi as Ue,bj as He,bk as We,Y as Mt,E as Tt,U as At,k as Bt,A as ge,p as Qe,o as p,d as Pt,B as Ot,bl as zt,X as Ie,m as Ke}from"./index-d0092a53.js";import{u as jt}from"./useRequest-2ec6a1f2.js";import{u as et}from"./useTranslation-ea1dc383.js";import{F as K,v as _e}from"./index-83bf3b22.js";import{c as tt}from"./DownOutlined-fd4c740a.js";import{S as qt}from"./UpOutlined-c6b1f9f1.js";import{i as Lt}from"./colors-e343c60b.js";import{g as ke,a as Ut}from"./TextArea-352e8fea.js";import"./chunk-J7QRBMDL-1ee85f09.js";import"./throttle-927122bb.js";import"./index-3747d9a4.js";var Ht=function(e){return e.every(function(n){var t=De(n);return t?t.getRootNode()instanceof ShadowRoot:!1})},Wt=function(e){return e?e.getRootNode():document},Kt=function(e){if(!e||!document.getRootNode)return document;var n=Array.isArray(e)?e:[e];return Ht(n)?Wt(De(n[0])):document};const Gt=Kt;function Xt(e,n,t){t===void 0&&(t="click");var o=xt(e);wt(function(){var a=function(l){var b=Array.isArray(n)?n:[n];b.some(function(w){var d=De(w);return!d||d.contains(l.target)})||o.current(l)},u=Gt(n),g=Array.isArray(t)?t:[t];return g.forEach(function(l){return u.addEventListener(l,a)}),function(){g.forEach(function(l){return u.removeEventListener(l,a)})}},Array.isArray(t)?t:[t],n)}function Re(){return typeof BigInt=="function"}function G(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),n.startsWith(".")&&(n="0".concat(n));var o=n||"0",a=o.split("."),u=a[0]||"0",g=a[1]||"0";u==="0"&&g==="0"&&(t=!1);var l=t?"-":"";return{negative:t,negativeStr:l,trimStr:o,integerStr:u,decimalStr:g,fullStr:"".concat(l).concat(o)}}function Ve(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function oe(e){var n=String(e);if(Ve(e)){var t=Number(n.slice(n.indexOf("e-")+2)),o=n.match(/\.(\d+)/);return o!=null&&o[1]&&(t+=o[1].length),t}return n.includes(".")&&Fe(n)?n.length-n.indexOf(".")-1:0}function ye(e){var n=String(e);if(Ve(e)){if(e>Number.MAX_SAFE_INTEGER)return String(Re()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(Re()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(oe(n))}return G(n).fullStr}function Fe(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Ge(e){var n=typeof e=="number"?ye(e):G(e).fullStr,t=n.includes(".");return t?G(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var Yt=function(){function e(n){if(Je(this,e),this.origin="",this.number=void 0,this.empty=void 0,!n&&n!==0||!String(n).trim()){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return Ze(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var o=Number(t);if(Number.isNaN(o))return this;var a=this.number+o;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var u=Math.max(oe(this.number),oe(o));return new e(a.toFixed(u))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":ye(this.number):this.origin}}]),e}(),Zt=function(){function e(n){if(Je(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!n&&n!==0||!String(n).trim()){this.empty=!0;return}if(this.origin=String(n),n==="-"){this.nan=!0;return}var t=n;if(Ve(t)&&(t=Number(t)),t=typeof t=="string"?t:ye(t),Fe(t)){var o=G(t);this.negative=o.negative;var a=o.trimStr.split(".");this.integer=BigInt(a[0]);var u=a[1]||"0";this.decimal=BigInt(u),this.decimalLen=u.length}else this.nan=!0}return Ze(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var o="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(o)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var o=new e(t);if(o.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,o.getDecimalStr().length),u=this.alignDecimal(a),g=o.alignDecimal(a),l=(u+g).toString(),b=G(l),w=b.negativeStr,d=b.trimStr,h="".concat(w).concat(d.padStart(a+1,"0"));return new e("".concat(h.slice(0,-a),".").concat(h.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":G("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function M(e){return Re()?new Zt(e):new Yt(e)}function he(e,n,t){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var a=G(e),u=a.negativeStr,g=a.integerStr,l=a.decimalStr,b="".concat(n).concat(l),w="".concat(u).concat(g);if(t>=0){var d=Number(l[t]);if(d>=5&&!o){var h=M(e).add("".concat(u,"0.").concat("0".repeat(t)).concat(10-d));return he(h.toString(),n,t,o)}return t===0?w:"".concat(w).concat(n).concat(l.padEnd(t,"0").slice(0,t))}return b===".0"?w:"".concat(w).concat(b)}var Jt=200,Qt=600;function en(e){var n=e.prefixCls,t=e.upNode,o=e.downNode,a=e.upDisabled,u=e.downDisabled,g=e.onStep,l=r.useRef(),b=r.useRef();b.current=g;var w=function(k,S){k.preventDefault(),b.current(S);function E(){b.current(S),l.current=setTimeout(E,Jt)}l.current=setTimeout(E,Qt)},d=function(){clearTimeout(l.current)};if(r.useEffect(function(){return d},[]),Lt())return null;var h="".concat(n,"-handler"),N=W(h,"".concat(h,"-up"),H({},"".concat(h,"-up-disabled"),a)),I=W(h,"".concat(h,"-down"),H({},"".concat(h,"-down-disabled"),u)),i={unselectable:"on",role:"button",onMouseUp:d,onMouseLeave:d};return r.createElement("div",{className:"".concat(h,"-wrap")},r.createElement("span",Ce({},i,{onMouseDown:function(k){w(k,!0)},"aria-label":"Increase Value","aria-disabled":a,className:N}),t||r.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})),r.createElement("span",Ce({},i,{onMouseDown:function(k){w(k,!1)},"aria-label":"Decrease Value","aria-disabled":u,className:I}),o||r.createElement("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})))}function tn(e,n){var t=r.useRef(null);function o(){try{var u=e.selectionStart,g=e.selectionEnd,l=e.value,b=l.substring(0,u),w=l.substring(g);t.current={start:u,end:g,value:l,beforeTxt:b,afterTxt:w}}catch{}}function a(){if(e&&t.current&&n)try{var u=e.value,g=t.current,l=g.beforeTxt,b=g.afterTxt,w=g.start,d=u.length;if(u.endsWith(b))d=u.length-t.current.afterTxt.length;else if(u.startsWith(l))d=l.length;else{var h=l[w-1],N=u.indexOf(h,w-1);N!==-1&&(d=N+1)}e.setSelectionRange(d,d)}catch(I){Nt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(I.message))}}return[o,a]}const nn=function(){var e=r.useRef(0),n=function(){Le.cancel(e.current)};return r.useEffect(function(){return n},[]),function(t){n(),e.current=Le(function(){t()})}};var rn=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Xe=function(n,t){return n||t.isEmpty()?t.toString():t.toNumber()},Ye=function(n){var t=M(n);return t.isInvalidate()?null:t},nt=r.forwardRef(function(e,n){var t,o=e.prefixCls,a=o===void 0?"rc-input-number":o,u=e.className,g=e.style,l=e.min,b=e.max,w=e.step,d=w===void 0?1:w,h=e.defaultValue,N=e.value,I=e.disabled,i=e.readOnly,f=e.upHandler,k=e.downHandler,S=e.keyboard,E=e.controls,R=E===void 0?!0:E,V=e.stringMode,B=e.parser,_=e.formatter,$=e.precision,s=e.decimalSeparator,D=e.onChange,P=e.onInput,O=e.onPressEnter,L=e.onStep,ee=St(e,rn),ue="".concat(a,"-input"),z=r.useRef(null),X=r.useState(!1),ce=ve(X,2),le=ce[0],se=ce[1],F=r.useRef(!1),q=r.useRef(!1),U=r.useRef(!1),de=r.useState(function(){return M(N??h)}),pe=ve(de,2),y=pe[0],me=pe[1];function te(m){N===void 0&&me(m)}var Y=r.useCallback(function(m,c){if(!c)return $>=0?$:Math.max(oe(m),oe(d))},[$,d]),Z=r.useCallback(function(m){var c=String(m);if(B)return B(c);var x=c;return s&&(x=x.replace(s,".")),x.replace(/[^\w.-]+/g,"")},[B,s]),ne=r.useRef(""),fe=r.useCallback(function(m,c){if(_)return _(m,{userTyping:c,input:String(ne.current)});var x=typeof m=="number"?ye(m):m;if(!c){var v=Y(x,c);if(Fe(x)&&(s||v>=0)){var A=s||".";x=he(x,A,v)}}return x},[_,Y,s]),xe=r.useState(function(){var m=h??N;return y.isInvalidate()&&["string","number"].includes(Et(m))?Number.isNaN(m)?"":m:fe(y.toString(),!1)}),re=ve(xe,2),j=re[0],T=re[1];ne.current=j;function ae(m,c){T(fe(m.isInvalidate()?m.toString(!1):m.toString(!c),c))}var J=r.useMemo(function(){return Ye(b)},[b,$]),Q=r.useMemo(function(){return Ye(l)},[l,$]),$e=r.useMemo(function(){return!J||!y||y.isInvalidate()?!1:J.lessEquals(y)},[J,y]),Me=r.useMemo(function(){return!Q||!y||y.isInvalidate()?!1:y.lessEquals(Q)},[Q,y]),rt=tn(z.current,le),Te=ve(rt,2),at=Te[0],it=Te[1],Ae=function(c){return J&&!c.lessEquals(J)?J:Q&&!Q.lessEquals(c)?Q:null},we=function(c){return!Ae(c)},Ne=function(c,x){var v=c,A=we(v)||v.isEmpty();if(!v.isEmpty()&&!x&&(v=Ae(v)||v,A=!0),!i&&!I&&A){var ie=v.toString(),Se=Y(ie,x);return Se>=0&&(v=M(he(ie,".",Se)),we(v)||(v=M(he(ie,".",Se,!0)))),v.equals(y)||(te(v),D==null||D(v.isEmpty()?null:Xe(V,v)),N===void 0&&ae(v,x)),v}return y},ot=nn(),Be=function m(c){if(at(),T(c),!q.current){var x=Z(c),v=M(x);v.isNaN()||Ne(v,!0)}P==null||P(c),ot(function(){var A=c;B||(A=c.replace(/。/g,".")),A!==c&&m(A)})},ut=function(){q.current=!0},ct=function(){q.current=!1,Be(z.current.value)},lt=function(c){Be(c.target.value)},Pe=function(c){var x;if(!(c&&$e||!c&&Me)){F.current=!1;var v=M(U.current?Ge(d):d);c||(v=v.negate());var A=(y||M(0)).add(v.toString()),ie=Ne(A,!1);L==null||L(Xe(V,ie),{offset:U.current?Ge(d):d,type:c?"up":"down"}),(x=z.current)===null||x===void 0||x.focus()}},Oe=function(c){var x=M(Z(j)),v=x;x.isNaN()?v=y:v=Ne(x,c),N!==void 0?ae(y,!1):v.isNaN()||ae(v,!1)},st=function(){F.current=!0},dt=function(c){var x=c.which,v=c.shiftKey;F.current=!0,v?U.current=!0:U.current=!1,x===be.ENTER&&(q.current||(F.current=!1),Oe(!1),O==null||O(c)),S!==!1&&!q.current&&[be.UP,be.DOWN].includes(x)&&(Pe(be.UP===x),c.preventDefault())},pt=function(){F.current=!1,U.current=!1},mt=function(){Oe(!1),se(!1),F.current=!1};return Ee(function(){y.isInvalidate()||ae(y,!1)},[$]),Ee(function(){var m=M(N);me(m);var c=M(Z(j));(!m.equals(c)||!F.current||_)&&ae(m,F.current)},[N]),Ee(function(){_&&it()},[j]),r.createElement("div",{className:W(a,u,(t={},H(t,"".concat(a,"-focused"),le),H(t,"".concat(a,"-disabled"),I),H(t,"".concat(a,"-readonly"),i),H(t,"".concat(a,"-not-a-number"),y.isNaN()),H(t,"".concat(a,"-out-of-range"),!y.isInvalidate()&&!we(y)),t)),style:g,onFocus:function(){se(!0)},onBlur:mt,onKeyDown:dt,onKeyUp:pt,onCompositionStart:ut,onCompositionEnd:ct,onBeforeInput:st},R&&r.createElement(en,{prefixCls:a,upNode:f,downNode:k,upDisabled:$e,downDisabled:Me,onStep:Pe}),r.createElement("div",{className:"".concat(ue,"-wrap")},r.createElement("input",Ce({autoComplete:"off",role:"spinbutton","aria-valuemin":l,"aria-valuemax":b,"aria-valuenow":y.isInvalidate()?null:y.toString(),step:d},ee,{ref:It(z,n),className:ue,value:j,onChange:lt,disabled:I,readOnly:i}))))});nt.displayName="InputNumber";var an=globalThis&&globalThis.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]]);return t},on=r.forwardRef(function(e,n){var t=r.useContext(kt),o=t.getPrefixCls,a=t.direction,u=r.useContext(Ct),g=r.useState(!1),l=_t(g,2),b=l[0],w=l[1],d=r.useRef(null);r.useImperativeHandle(n,function(){return d.current});var h=e.className,N=e.size,I=e.disabled,i=e.prefixCls,f=e.addonBefore,k=e.addonAfter,S=e.prefix,E=e.bordered,R=E===void 0?!0:E,V=e.readOnly,B=e.status,_=e.controls,$=an(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),s=o("input-number",i),D=Rt(s,a),P=D.compactSize,O=D.compactItemClassnames,L=r.createElement(qt,{className:"".concat(s,"-handler-up-inner")}),ee=r.createElement(tt,{className:"".concat(s,"-handler-down-inner")}),ue=typeof _=="boolean"?_:void 0;Dt(_)==="object"&&(L=typeof _.upIcon>"u"?L:r.createElement("span",{className:"".concat(s,"-handler-up-inner")},_.upIcon),ee=typeof _.downIcon>"u"?ee:r.createElement("span",{className:"".concat(s,"-handler-down-inner")},_.downIcon));var z=r.useContext(Vt),X=z.hasFeedback,ce=z.status,le=z.isFormItemInput,se=z.feedbackIcon,F=Ut(ce,B),q=P||N||u,U=r.useContext(Ft),de=I??U,pe=W(C(C(C(C(C({},"".concat(s,"-lg"),q==="large"),"".concat(s,"-sm"),q==="small"),"".concat(s,"-rtl"),a==="rtl"),"".concat(s,"-borderless"),!R),"".concat(s,"-in-form-item"),le),ke(s,F),O,h),y=r.createElement(nt,$t({ref:d,disabled:de,className:pe,upHandler:L,downHandler:ee,prefixCls:s,readOnly:V,controls:ue},$));if(S!=null||X){var me=W("".concat(s,"-affix-wrapper"),ke("".concat(s,"-affix-wrapper"),F,X),C(C(C(C(C(C(C(C({},"".concat(s,"-affix-wrapper-focused"),b),"".concat(s,"-affix-wrapper-disabled"),e.disabled),"".concat(s,"-affix-wrapper-sm"),u==="small"),"".concat(s,"-affix-wrapper-lg"),u==="large"),"".concat(s,"-affix-wrapper-rtl"),a==="rtl"),"".concat(s,"-affix-wrapper-readonly"),V),"".concat(s,"-affix-wrapper-borderless"),!R),"".concat(h),!(f||k)&&h));y=r.createElement("div",{className:me,style:e.style,onMouseUp:function(){return d.current.focus()}},S&&r.createElement("span",{className:"".concat(s,"-prefix")},S),Ue(y,{style:null,value:e.value,onFocus:function(j){var T;w(!0),(T=e.onFocus)===null||T===void 0||T.call(e,j)},onBlur:function(j){var T;w(!1),(T=e.onBlur)===null||T===void 0||T.call(e,j)}}),X&&r.createElement("span",{className:"".concat(s,"-suffix")},se))}if(f!=null||k!=null){var te="".concat(s,"-group"),Y="".concat(te,"-addon"),Z=f?r.createElement("div",{className:Y},f):null,ne=k?r.createElement("div",{className:Y},k):null,fe=W("".concat(s,"-wrapper"),te,C({},"".concat(te,"-rtl"),a==="rtl")),xe=W("".concat(s,"-group-wrapper"),C(C(C({},"".concat(s,"-group-wrapper-sm"),u==="small"),"".concat(s,"-group-wrapper-lg"),u==="large"),"".concat(s,"-group-wrapper-rtl"),a==="rtl"),ke("".concat(s,"-group-wrapper"),F,X),h);y=r.createElement("div",{className:xe,style:e.style},r.createElement("div",{className:fe},Z&&r.createElement(He,null,r.createElement(We,{status:!0,override:!0},Z)),Ue(y,{style:null,disabled:de}),ne&&r.createElement(He,null,r.createElement(We,{status:!0,override:!0},ne))))}return y});const un=on;var cn=`.phone-input-item-container {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: initial;
}
.phone-input-item-container .ant-input-affix-wrapper,
.phone-input-item-container .ant-input-number-group-wrapper {
  width: 100%;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  background: var(--input-background-color) !important;
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-group-addon,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-group-addon {
  position: initial;
  border: none;
  background-color: var(--input-background-color);
  border-end-start-radius: var(--primary-btn-border-radius);
  border-start-start-radius: var(--primary-btn-border-radius);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-focused,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-focused {
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-disabled,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-disabled {
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input {
  height: 47px;
  border: none !important;
  border-radius: 0;
  line-height: 47px;
  color: var(--text-color);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input:hover {
  border: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper[data-focus='true'],
.phone-input-item-container .ant-input-number-group-wrapper[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.phone-input-item-container .ant-input[disabled] {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box {
  position: initial;
  cursor: pointer;
}
.phone-input-item-container .country-box .prefix-wrap {
  display: flex;
  color: var(--text-color);
  gap: 4px;
}
.phone-input-item-container .country-box .account-select-country-list {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 0%;
  width: 100%;
  height: 350px;
  border-radius: var(--card-border-radius) !important;
  overflow: hidden auto;
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list::-webkit-scrollbar {
  display: none;
  width: 0;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input:focus {
  border: none !important;
  box-shadow: none !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item {
  padding-right: 13px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover {
  background: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover.search-input-wrap {
  background: none;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-clear-icon {
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-affix-wrapper {
  border-color: var(--keyword-border-color) !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-suffix {
  position: relative;
  right: 10px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input {
  width: 100%;
  height: 32px;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input .ant-input {
  width: 100%;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: initial;
}
.phone-input-item-container .country-box .account-select-country-list .no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--keyword-border-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item:hover {
  background-color: var(--keyword-border-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item div {
  display: flex;
  max-width: 80%;
  margin-right: 13px;
}
.phone-input-item-container .country-box input[type='number']::-webkit-inner-spin-button,
.phone-input-item-container .country-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.phone-input-item-container .country-box.phone {
  display: flex;
  align-items: center;
}
.phone-input-item-container .country-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  padding-right: 4px;
  padding-left: 4px;
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.phone-input-item-container .country-box .account-select-opt .down-more {
  margin-left: 6px;
  font-size: 10px;
}
.phone-input-item-container .country-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.phone-input-item-container .country-box .country-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.phone-input-item-container .country-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 45px;
  color: var(--text-color);
  background-color: transparent;
}
`,ln=e=>{let n=e.form,t=K.useWatch(e.name,n),[o,a]=r.useState(["United States","us","1"]),{t:u}=et(),[g,l]=r.useState(!1),b=r.useRef(),w=r.useRef(),[d,h]=r.useState(""),N=r.useRef(),I=r.useMemo(()=>ze.filter(i=>i.join("+").toLowerCase().includes(d.toLowerCase())),[d]);return Xt(()=>{l(!1)},b),r.useEffect(()=>{g&&h("")},[g]),r.useEffect(()=>{if(t!=null&&t.includes("*"))return;let i=`+${o[2]}`,f=(t||"").replace(/^\+\d+/,"").trim();n.setFieldsValue({[e.name]:`${i} ${f}`}),f&&n.validateFields(["_phone"])},[o,t]),r.useEffect(()=>{var i;try{if((i=t==null?void 0:t.includes)!=null&&i.call(t,"*"))n.setFieldsValue({_phone:t});else if(t){if(Ke(t)){let f=Qe(t),k=f.nationalNumber;n.setFieldsValue({_phone:k});let S=f.countryCallingCode.toString(),E=f.country;if(S&&E){let R=ze.filter(V=>V[2].toString()===S&&V[1].toLowerCase()===E.toLowerCase());R&&R.length>0&&a(R[R.length-1])}}}else{let f=ft();f&&a(f)}}catch{}},[t]),p.createElement(p.Fragment,null,p.createElement("style",null,cn),p.createElement("div",{className:"phone-input-item-container"},p.createElement(K.Item,{className:!e.disabled||e.disabled&&e.previewMode!=="input"?"hidden":"",extra:e.extra,name:e.name},p.createElement(_e,{disabled:e.disabled})),p.createElement(K.Item,{name:"_phone",className:e.disabled&&e.previewMode=="input"?"hidden":"",extra:e.extra,rules:[{required:!0,validator:(i,f)=>{try{if(f)try{if(f=`+${o[2]} ${f}`,!Ke(f))return Promise.reject(u("login.phone_format_error"))}catch{return Promise.reject(u("login.phone_format_error"))}else return Promise.reject(u("login.input_phone_holder"))}catch{return Promise.reject(u("login.phone_format_error"))}return Promise.resolve()}}]},p.createElement(un,{placeholder:u("account.mobile"),disabled:e.disabled,controls:!1,onChange:i=>{n.setFieldsValue({[e.name]:`+${o[2]} ${i}`})},onFocus:()=>{var i;(i=document.querySelector(".ant-input-number-group-wrapper"))==null||i.setAttribute("data-focus","true")},onBlur:()=>{var i;(i=document.querySelector(".ant-input-number-group-wrapper"))==null||i.setAttribute("data-focus","false")},addonBefore:p.createElement("div",{className:"country-box phone",ref:w},p.createElement("div",{className:"prefix-wrap",onClick:()=>{e.disabled||(l(!g),setTimeout(()=>{var i;(i=N.current)==null||i.focus()}))},ref:b},p.createElement("div",{className:"account-select-opt"},p.createElement("div",{className:"account-select-icon"},je(`${o[1]}`)),p.createElement(tt,{className:"down-more"})),p.createElement("span",null,"+",o[2])),g&&p.createElement("div",{className:"account-select-country-list "},p.createElement("div",{className:"account-select-country-item search-input-wrap",onClick:i=>{i.stopPropagation()}},p.createElement(_e,{ref:N,className:"search-input",type:"text",placeholder:u("login.search_country_holder"),allowClear:!0,onChange:i=>{var f;let k=((f=i==null?void 0:i.target)==null?void 0:f.value)||"";h(k)}})),I&&I.length?p.createElement("div",{className:"p-country-list"},I.map((i,f)=>p.createElement("div",{key:`${i[0]}-${i[1]}-${i[2]}`,className:"account-select-country-item",onClick:()=>{a(i),l(!1)}},p.createElement("div",{className:"country-box"},p.createElement("div",{className:"country-flag"},je(`${i[1]}`)),p.createElement("span",{className:"country-name"},i[0])),p.createElement("div",{className:"country-code"},"+"+i[2])))):p.createElement("div",{className:"no-data"},"No data")))}))))},sn=ln,dn=`.login-account-bind {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.login-account-bind .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input {
  background-color: var(--input-background-color);
}
.login-account-bind .ant-spin-spinning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 20vh;
}
.login-account-bind .account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-bind .account-bind-form {
  width: 100%;
  padding: 0 18px;
  margin-top: 34px;
}
.login-account-bind .account-bind-form .account-input {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.login-account-bind .account-bind-form .link-account-hint {
  align-self: flex-start;
  padding-top: 6px;
  font-size: 12px;
  color: var(--secondary-text-color);
}
.login-account-bind .account-bind-form .link-btn {
  margin-top: 15px;
  margin-bottom: 30px;
}
.login-account-bind .account-bind-form .unlink-btn {
  margin-top: 15px;
  margin-bottom: 30px;
  color: #fff;
  background: #ea4335;
}
.login-account-bind .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media screen and (max-height: 350px) {
  .login-account-bind .footer-box {
    position: unset;
    bottom: 0;
    margin-bottom: 10px;
  }
}
`,pn=e=>{let n=e,t=(n==null?void 0:n.authType)||"",o=(n==null?void 0:n.verifyToken)||"",{t:a}=et(),[u]=K.useForm(),g=Mt(),l=ht(),{userInfo:b}=Tt();At();let[w,d]=r.useState(!1),{runAsync:h}=jt(zt,{manual:!0}),{authCoreModal:N}=Bt(),I=r.useMemo(()=>vt({userInfo:b,t:a}),[b]),i=r.useMemo(()=>{var S;return((S=I==null?void 0:I.find)==null?void 0:S.call(I,E=>E.type===t))||{}},[I,t]),f=r.useMemo(()=>!i.value&&!i.id,[i]);r.useMemo(()=>!i.isOriginal&&!f,[i]);let k=()=>{u.validateFields().then(S=>{var E,R,V,B,_,$,s;let D=((B=(V=(R=(E=u.getFieldsValue())==null?void 0:E.inputValue)==null?void 0:R.replace(/\s/g,""))==null?void 0:V.trim)==null?void 0:B.call(V))||"";if(d(!0),t==="phone"&&((_=b==null?void 0:b.security_account)==null?void 0:_.phone)===D){Ie.error({title:a("new.duplicate_phonel_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>N.rootBody}),d(!1);return}else if(t==="email"&&((s=($=b==null?void 0:b.security_account)==null?void 0:$.email)==null?void 0:s.toLowerCase())===(D==null?void 0:D.toLowerCase())){Ie.error({title:a("new.duplicate_email_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>N.rootBody}),d(!1);return}let P={};t===ge.phone?P.phone=D:P.email=D,h(P).then(O=>{g("/account/verify",{state:{account:D,authType:t,verifyToken:o,pageType:"bind_login_account"}}),d(!1)}).catch(O=>{d(!1),O.error_code===20109?Ie.error({title:t===ge.phone?a("error.server_phone_20109"):a("error.server_email_20109"),wrapClassName:"auth-core-modal-error",getContainer:()=>N.rootBody}):l.error(O.message)})})};return bt(S=>{g("/account/verify",{state:{account:S.account,authType:t,unbindAccount:u.getFieldValue("inputValue"),pageType:"unbind_login_account"}})},{wait:3e3}),r.useEffect(()=>{if(i!=null&&i.value||i!=null&&i.id)if(t===ge.phone){let S=Qe(i==null?void 0:i.value.replace(/\s/g,"")),E=S.countryCallingCode,R=S.nationalNumber;u.setFieldsValue({inputValue:qe(`+${E} ${R}`)})}else u.setFieldsValue({inputValue:qe((i==null?void 0:i.value)||(i==null?void 0:i.id)||"")})},[i==null?void 0:i.value,i==null?void 0:i.id,t]),p.createElement("div",{className:"login-account-bind "},p.createElement("style",null,dn),p.createElement(gt,{displayBackBtn:!0},i.name),p.createElement(K,{className:"account-bind-form",layout:"vertical",form:u,onFinish:k},t===ge.phone?p.createElement(sn,{name:"inputValue",form:u,disabled:!f,previewMode:"input",extra:p.createElement("div",{className:"link-account-hint"},a("new.link_account_hint").format(i.name))}):p.createElement(K.Item,{name:"inputValue",validateTrigger:"onBlur",extra:p.createElement("div",{className:"link-account-hint"},a("new.link_account_hint").format(i.name)),rules:[{required:!0,validator:async(S,E)=>{if(E){if(!Pt.test(E))return Promise.reject(a("login.email_format_error"))}else return Promise.reject(a("account.input_vaild_email"));return Promise.resolve()}}]},p.createElement(_e,{className:"account-input",placeholder:i.name,disabled:!f,onChange:S=>u.setFields([{name:"email",value:S.target.value,errors:[]}])})),p.createElement(K.Item,null,f?p.createElement(Ot,{className:"primary-antd-btn link-btn",loading:w,htmlType:"submit"},a("account.link")):p.createElement(p.Fragment,null))),p.createElement(yt,null))},Rn=pn;export{Rn as default};
