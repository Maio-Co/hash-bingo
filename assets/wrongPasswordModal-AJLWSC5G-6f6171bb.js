import{U as F,Y as _,k as N,r as d,o as t,X as k,Z as B,B as v}from"./index-d0092a53.js";import{B as C}from"./index-7ba28afb.js";import{u as M}from"./useTranslation-ea1dc383.js";import"./index-3747d9a4.js";var P=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  font-size: 22px;
  font-weight: bold;
  position: relative;
  top: 7px;
  margin-bottom: 12px;
}
.wrong-password-content .tip {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  text-align: center;
  color: var(--secondary-text-color);
}
.wrong-password-content .frozen-countdown {
  margin-top: 12px;
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 24px;
  color: var(--text-color);
}
.wrong-password-content .btn {
  width: 100%;
  height: 47px;
  margin-top: 10px;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,S=({info:e})=>{var p;let{t:l}=M(),{setWrongPassword:m,setPaymentVerify:f,userInfo:n,showSelectSecurityAccount:w}=F(),y=_(),b=()=>{m({visible:!1}),f({visible:!1}),h()},{authCoreModal:x}=N(),h=()=>{var o,r,a,c;(o=n==null?void 0:n.security_account)!=null&&o.email&&((r=n==null?void 0:n.security_account)!=null&&r.phone)?w(!0):y("/account/set-password",{state:{account:((a=n==null?void 0:n.security_account)==null?void 0:a.email)||((c=n==null?void 0:n.security_account)==null?void 0:c.phone)}})},i=()=>{m({visible:!1})},[z,s]=d.useState(),[u,g]=d.useState(((p=e.accountFrozen)==null?void 0:p.seconds)||0);C(()=>{let o=u-1;g(o),o<=0&&(s(void 0),i())},z),d.useEffect(()=>(e.accountFrozen&&(g(e.accountFrozen.seconds),s(1e3)),()=>{s(void 0)}),[e.accountFrozen]);let E=o=>{let r=Math.floor(o/60/60);r=r<10?"0"+r:r;let a=Math.floor(o/60%60);a=a<10?"0"+a:a;let c=Math.floor(o%60);return c=c<10?"0"+c:c,r+":"+a+":"+c};return t.createElement(t.Fragment,null,t.createElement("style",null,P),t.createElement(k,{open:e.visible,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},getContainer:()=>x.rootBody},t.createElement("div",{className:"wrong-password-content"},t.createElement(B,{className:"close-icon",onClick:i}),e.accountFrozen?t.createElement(t.Fragment,null,t.createElement("div",{className:"modal-title"},l("account.incorrect_payment_password")),t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip2"))):t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip1")),e.accountFrozen&&t.createElement("div",{className:"frozen-countdown"},E(u)),t.createElement(v,{className:"btn",onClick:b},l("account.forgot_password")),!e.accountFrozen&&t.createElement(v,{className:"btn",onClick:i},l("account.retry")))))},R=S;export{R as default};
