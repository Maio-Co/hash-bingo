import{w as b}from"./chunk-RT7AM6B4-aedc0ac4.js";import{x as y}from"./chunk-FEQ55Y6S-53c74a83.js";import{p as w}from"./chunk-J7QRBMDL-6e18041d.js";import{N as _}from"./chunk-5CZ6V5XL-653cab07.js";import{aJ as k,aK as E,aO as N,r as h,aP as T,aQ as $,aR as O,A as s,g as z,W as A,G as F,s as S,J as j,p as C,Y as I,U as J,o as i}from"./index-d9a9a9ca.js";import{L}from"./throttle-3b1b0909.js";import{u as P}from"./useTranslation-97073332.js";function R(a,e){var o;k&&(E(a)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof a)));var r=N(a),u=(o=e==null?void 0:e.wait)!==null&&o!==void 0?o:1e3,t=h.useMemo(function(){return L(function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return r.current.apply(r,T([],$(l),!1))},u,e)},[]);return O(function(){t.cancel()}),{run:t,cancel:t.cancel,flush:t.flush}}var W=`.login-account-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.login-account-box .login-account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-box .login-account-description {
  margin: 32px 18px 40px;
  font-weight: 400;
  font-size: 13px;
  color: var(--secondary-text-color);
}
.login-account-box .account-list {
  width: 100%;
  padding: 0 18px;
}
.login-account-box .account-list .login-account-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
  cursor: pointer;
}
.login-account-box .account-list .login-account-item img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
}
.login-account-box .account-list .login-account-item .login-account-name {
  flex-grow: 1;
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
}
.login-account-box .account-list .login-account-item .login-account-value {
  flex-grow: 2;
  max-width: 180px;
  margin-right: 8px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
}
.login-account-box .account-list .login-account-item .login-account-value[data-no-linked='true'] {
  color: var(--secondary-text-color);
}
.login-account-box .account-list .login-account-item:hover {
  opacity: var(--hover-opacity);
}
.login-account-box .account-list .arrow-right-icon {
  color: var(--text-color);
}
.login-account-box .account-list .arrow-right-icon svg {
  width: 12px;
  height: 12px;
}
.login-account-box .footer-box {
  position: absolute;
  bottom: 0;
}
`,B=a=>{let{userInfo:e,t:o}=a;return[{type:s.phone,icon:z,name:o("account.mobile"),value:e.phone,id:void 0,isOriginal:!1},{type:s.email,icon:A,name:o("account.email"),value:e.email,id:void 0,isOriginal:!1},{type:s.google,icon:F,name:o("login.google"),value:e.google_email,id:e.google_id,isOriginal:!1},{type:s.facebook,icon:S,name:o("login.facebook"),value:e.facebook_email,id:e.facebook_id,isOriginal:!1},{type:s.twitter,icon:j,name:o("login.twitter"),value:e.twitter_email,id:e.twitter_id,isOriginal:!1}]},G=a=>{var e,o,r,u;let t=a==null?void 0:a.replace(" ","");if(t)if((e=t==null?void 0:t.includes)!=null&&e.call(t,"@"))t=`${t.split("@")[0].substr(0,3)}****@${t.split("@")[1]}`;else if((o=t==null?void 0:t.includes)!=null&&o.call(t,"+")){let l=C(t),c=l.nationalNumber.toString();t=`+${l.countryCallingCode} ${(r=c==null?void 0:c.substr)==null?void 0:r.call(c,0,3)}****${(u=c==null?void 0:c.substr)==null?void 0:u.call(c,-4)}`}else t&&(t=`${t.substr(0,3)}****${t.substr(-4)}`);else return t;return t},d,K=()=>{let{t:a}=P(),e=I(),{userInfo:o,showSelectSecurityAccount:r}=J(),u=y(),{run:t}=R(n=>{e("/account/verify",{state:{account:n.account,authType:d,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),l=h.useMemo(()=>B({userInfo:o,t:a}),[o]),c=n=>{var g,m,p,v,f,x;n.value||n.id?e("/login-account/bind",{state:{authType:n.type}}):!((g=o==null?void 0:o.security_account)!=null&&g.email)&&!((m=o==null?void 0:o.security_account)!=null&&m.phone)?u.error("Please bind security account first."):(p=o==null?void 0:o.security_account)!=null&&p.email&&((v=o==null?void 0:o.security_account)!=null&&v.phone)?r(!0,{authType:d,pageType:"verify_security_account_bind_login_account"}):t({account:((f=o==null?void 0:o.security_account)==null?void 0:f.email)||((x=o==null?void 0:o.security_account)==null?void 0:x.phone)})};return i.createElement("div",{className:"login-account-box"},i.createElement("style",null,W),i.createElement(b,{displayBackBtn:!0},a("account.login_account")),i.createElement("div",{className:"scroll-content"},i.createElement("div",{className:"login-account-description"},a("account.login_account_hint")),i.createElement("div",{className:"account-list"},l==null?void 0:l.map((n,g)=>i.createElement("div",{className:"login-account-item",onClick:()=>{d=n.type,c(n)},key:g},i.createElement("img",{src:n.icon}),i.createElement("div",{className:"login-account-name"},n.name),i.createElement("div",{className:"login-account-value","data-no-linked":!(n.value||n.id)},G(n.value||n.id)||a("account.not_linked")),i.createElement(w,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),i.createElement(_,{className:"footer-box-v2"}))},V=K;export{G as j,V as t,R as u,B as z};
