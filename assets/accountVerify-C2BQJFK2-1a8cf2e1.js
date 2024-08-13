import{K as re}from"./chunk-BRNWLP7Y-b0ecb920.js";import{z as ne}from"./chunk-HNAV5WT6-6534e343.js";import{x as ae}from"./chunk-FEQ55Y6S-c072494c.js";import{p as L}from"./chunk-J7QRBMDL-1ee85f09.js";import{N as ie}from"./chunk-5CZ6V5XL-fcd5cd2a.js";import{Y as ce,ag as se,j as le,r as s,k as de,U as pe,A as m,q as ue,T as me,ah as ge,o as r,B as R,ae as ve,ai as he,D as g,aj as ye,X as fe,ak as xe,L as I,al as be,M as _e,O as we}from"./index-d0092a53.js";import{B as ke}from"./index-7ba28afb.js";import{u as f}from"./useRequest-2ec6a1f2.js";import{L as Ce}from"./throttle-927122bb.js";import{u as Ee}from"./useTranslation-ea1dc383.js";import"./chunk-RT7AM6B4-ca1a198d.js";import"./index-3747d9a4.js";var Ne=`.set-viery-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.set-viery-container .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media only screen and (max-height: 520px) {
  .set-viery-container .footer-box {
    position: unset;
    bottom: 0;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
.set-viery-container .display-none {
  display: none;
}
.set-viery-container .error-tip {
  width: 90%;
  height: 0;
  padding-left: 10px;
  margin-top: 6px;
  margin-bottom: 0;
  text-align: left;
  color: red;
  opacity: 0;
  transition: all 0.3s;
}
.set-viery-container .error-tip.show {
  height: 30px;
  opacity: 1;
}
.set-viery-container .set-email-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-viery-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-viery-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-viery-container .set-email-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
}
.set-viery-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-viery-container .set-email-desc-1 {
  box-sizing: border-box;
  padding: 0 18px;
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-viery-container .account-submit-btn {
  width: 90%;
  height: 47px;
  padding: 0;
  margin-top: 38px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  line-height: 47px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-viery-container .account-submit-btn:hover {
  border: none;
  color: var(--primary-btn-color) !important;
  background: var(--primary-btn-background-color) !important;
  opacity: var(--hover-opacity);
}
.set-viery-container .account-switch-item {
  margin-top: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
}
.set-viery-container .set-email-desc-2 {
  min-width: 116px;
  height: 23px;
  padding: 0 15px;
  margin: 20px 0 28px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  opacity: 1;
}
.set-viery-container .back {
  display: flex;
  align-items: center;
  margin-top: 90px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  opacity: 1;
  cursor: pointer;
  gap: 8px;
}
.set-viery-container .back svg {
  position: relative;
  top: -1px;
  color: var(--accent-color);
}
.set-viery-container .code-error {
  position: absolute;
  left: calc((100vw - 316px) / 2);
  margin-top: 224px;
  font-weight: 400;
  font-size: 12px;
  color: var(--error-color);
}
@media (min-width: 600px) {
  .set-viery-container .code-error {
    left: calc((var(--vw) * 100 - 316px) / 2);
  }
}
.set-viery-container .send-again {
  margin-top: 20px;
  border: none !important;
  outline: none !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: none;
}
.set-viery-container .send-again:hover {
  color: var(--text-color) !important;
  background-color: transparent !important;
}
.set-viery-container .send-again:disabled {
  opacity: 0.5;
}
`,Te=$=>{let l=ce(),{t}=Ee(),P=$,x=ae(),{customRouter:O}=se(),{themeType:U,language:j}=le(),{account:c,pageType:p,authType:i,verifyToken:X,redirectUrl:q,password:D}=P,[b,Y]=s.useState(""),[N,_]=s.useState(1e3),[v,w]=s.useState(60),[k,d]=s.useState(),{authCoreModal:T}=de(),{userInfo:F}=pe(),S=s.useRef(null);ke(()=>{if(v>0){let e=v-1;w(e),e===0&&_(void 0)}},N);let{run:A}=f(async e=>p==="bind_login_account"?(e={[i]:c,cf_turnstile_response:e.cf_turnstile_response},ve(e).then(n=>n)):he(e.verifyCodeMethod),{manual:!0,onSuccess:(e,n)=>{N||(w(60),_(1e3))},onError:e=>{w(0),_(void 0)}}),{loading:J,runAsync:z}=f(ye,{manual:!0,onError:e=>{(e==null?void 0:e.error_code)===g.InvalidCode?d(t("login.invalid_code")):(e==null?void 0:e.error_code)===g.ResendCode?d(t("login.please_send_again")):e.message&&x.error(e.message)}}),{loading:K,runAsync:Q}=f(async e=>xe(e).then(async()=>{await I()}),{manual:!0,onSuccess:e=>{x.success(t("new.bind_login_account_success"))},onError:e=>{var n;let o=e.message;if((e==null?void 0:e.error_code)===g.InvalidCode){d(t("login.invalid_code"));return}else if((e==null?void 0:e.error_code)===g.ResendCode){d(t("login.please_send_again"));return}else e.error_code===20109?o=i==m.email?t("error.server_email_20109"):t("error.server_phone_20109"):o=((n=e==null?void 0:e.extra)==null?void 0:n[0])||e.message;fe.error({title:o,wrapClassName:"auth-core-modal-error",getContainer:()=>T.rootBody,onOk:()=>{var a;(a=S.current)==null||a.clear(),e.error_code===20109&&l(-1)}})}}),{loading:W,run:Z}=f(be,{manual:!0,onError:e=>{(e==null?void 0:e.error_code)===g.InvalidCode?d(t("login.invalid_code")):(e==null?void 0:e.error_code)===g.ResendCode&&d(t("login.please_send_again"))},onSuccess:(e,n)=>{I();let o=["account/security","solana/sign","evm-chain/sign"],a=o.map(E=>{var u;return(u=O.history)==null?void 0:u.findIndex(y=>y.path===E)}),C=a.indexOf(Math.max(...a));l(o[C],{replace:!0,back:!0})}}),{loading:G,run:Se}=f(()=>new Promise((e,n)=>{}),{manual:!0,onSuccess:e=>{}}),h=s.useMemo(()=>c!=null&&c.includes("@")?m.email:m.phone,[c]);s.useEffect(()=>{M()},[c]);let M=()=>{d(""),p==="bind_login_account"&&i===m.phone?ue({theme:U,language:j,getContainer:()=>T.rootBody}).then(e=>{A({verify_code_method:h,cf_turnstile_response:e})}).catch(()=>{x.error(t("error.server_20112")),l(-1)}):A({verifyCodeMethod:h})},H=e=>{d(""),Y(e),e.length===6&&V(e)},V=s.useCallback(Ce(e=>{B(e)},1e3,{leading:!0,trailing:!1}),[]),ee=e=>{Z({password:D,verifyCodeMethod:h,code:e||b})},B=(e="")=>{if(k)return;let n={code:e};p==="reset_payment_password"?ee(e):p=="verify_security_account_set_security_account"?z({verifyCodeMethod:h,code:e}).then(o=>{l("/account/bind",{replace:!0,state:{accountType:i,verifyToken:o,redirectUrl:q}})}):p==="verify_security_account_bind_login_account"?z({verifyCodeMethod:h,code:e}).then(o=>{let a=ne({userInfo:F,t}),{id:C,value:E}=a.find(u=>u.type===i)||{};if(i===m.phone||i===m.email||E||C)l("/login-account/bind",{state:{authType:i,verifyToken:o},replace:!0});else{let u=me.encode(JSON.stringify({verifyToken:o,purpose:"bindLoginAccount"}));ge({authType:i,appState:u,prompt:"select_account"}).catch(y=>{x.error((y==null?void 0:y.message)||y)})}}):p==="bind_login_account"&&(n={...n,security_account_verify_token:X,[i]:c},Q(n).then(o=>{l(-2)}))},te=()=>c.includes("@")?_e(c):we(c);s.useEffect(()=>{var e;let n=document.getElementsByClassName("react-input-code"),o=a=>a.preventDefault();return(e=n[0])==null||e.addEventListener("contextmenu",o),()=>{var a;(a=n[0])==null||a.removeEventListener("contextmenu",o)}},[]);let oe=()=>{var e;(e=document.getElementsByClassName("input-code-item")[Math.min(b.length,5)])==null||e.focus()};return r.createElement("div",{className:"set-viery-container"},r.createElement("style",null,Ne),r.createElement("div",{className:"account-header"},r.createElement(L,{className:"icon-navigation-back",name:"circle_back",onClick:()=>{l(-1)}})),r.createElement("h2",{className:"set-email-title"},t("account.enter_code")),r.createElement("p",{className:"set-email-desc-2"},te()),r.createElement("div",{onClick:oe},r.createElement(re,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:S,placeholder:" ",onChange:H})),k&&r.createElement("div",{className:"code-error"},k),r.createElement(R,{className:"account-submit-btn",loading:W||J||K||G,onClick:()=>{setTimeout(()=>{B(b)})},disabled:b.length!==6},t("common.confirm")),r.createElement(R,{className:"send-again",onClick:M,disabled:v>0},v>0?`${t("login.send_again")} (${v}s)`:t("login.send_again")),r.createElement("div",{className:"back",onClick:()=>{l(-1)}},r.createElement(L,{className:"arrow1-icon",name:"arrow1_icon"}),r.createElement("span",null,t("login.back"))),r.createElement(ie,null))},Xe=Te;export{Xe as default};
