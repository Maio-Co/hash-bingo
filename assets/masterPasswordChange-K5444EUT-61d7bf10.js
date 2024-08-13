import{B as v}from"./chunk-HMGNPZXU-e83a5e35.js";import{w as y}from"./chunk-RT7AM6B4-aedc0ac4.js";import{x as b}from"./chunk-FEQ55Y6S-53c74a83.js";import{N}from"./chunk-5CZ6V5XL-653cab07.js";import{Y as _,r as c,o as e,B as k,ao as B}from"./index-d9a9a9ca.js";import{u as M}from"./useRequest-842191fa.js";import{u as S}from"./useTranslation-97073332.js";import{F as o}from"./index-c0f3984d.js";import{T,S as $}from"./index-d6fd33b0.js";import"./chunk-J7QRBMDL-6e18041d.js";import"./throttle-3b1b0909.js";import"./index-449daa56.js";import"./TextArea-59efc096.js";import"./colors-f2aae909.js";import"./index-ac4de01e.js";var z=`.mp-change-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  color: var(--text-color);
}
.mp-change-container .wapper {
  flex: 1;
  width: 100%;
  padding: 0 18px;
}
.mp-change-container .ant-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
}
.mp-change-container .ant-form .ant-form-item {
  margin-bottom: 0;
}
.mp-change-container .ant-form .scroll-content {
  flex: 1;
  width: 100%;
}
.mp-change-container .mp-change-title {
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color);
}
.mp-change-container .mp-input-name {
  align-self: flex-start;
  margin-top: 10px;
  font-weight: 400;
}
.mp-change-container .mp-input {
  margin-top: 6px;
}
.mp-change-container .mp-input-error {
  align-self: flex-start;
  margin-top: 8px;
  color: var(--error-color);
}
.mp-change-container .mp-tip-space {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 110px;
  line-height: 20px;
}
.mp-change-container .mp-tip-space span {
  color: var(--text-color);
}
.mp-change-container .bottom-container .mp-next {
  width: 100%;
}
.mp-change-container .bottom-container .footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  margin: 0;
}
.mp-change-container .bottom-container .footer-box .footer {
  margin: 0;
}
`,C=()=>{let m=_(),{t:a}=S(),{Text:i,Link:p}=$,[s,n]=c.useState(!1),l=b(),[d,g]=c.useState(!0),{run:u,loading:h}=M(t=>B(t).then(r=>{if(!r)throw new Error("Master password decryption error");return r}),{manual:!0,onSuccess:t=>{f()},onError:t=>{(t==null?void 0:t.message)==="Master password decryption error"?n(!0):l.error((t==null?void 0:t.message)||"check master password error")}}),f=()=>{m("/account/master-password",{state:{setNewMasterPassword:!0}})},x=t=>{let{password:r}=t;r&&r.length>=6&&r.length<=20?u(r):n(!0)},w=t=>{n(!1);let{password:r}=t;g(!r)},E=()=>{m("/account/master-password/description")};return e.createElement("div",{className:"mp-change-container"},e.createElement("style",null,z),e.createElement(y,{displayBackBtn:!0},a("account.current_master_password")),e.createElement("div",{className:"wapper"},e.createElement(o,{onFinish:x,layout:"vertical",onValuesChange:w},e.createElement("div",{className:"scroll-content"},e.createElement("div",{className:"mp-input-name padding-top-16"},a("account.input_master_password")),e.createElement(o.Item,{name:"password"},e.createElement(v,{className:"mp-input"})),s&&e.createElement("div",{className:"mp-input-error"},a("account.password_error")),e.createElement(T,{direction:"vertical",className:"mp-tip-space"},e.createElement(i,null,a("account.mpc_tss_intro")),e.createElement(i,null,a("account.input_decrypt_hint")," ",e.createElement(p,{onClick:E,className:"more-text-btn"},a("account.learn_more_period"))))),e.createElement(o.Item,null,e.createElement("div",{className:"bottom-container"},e.createElement(k,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:h,disabled:d},a("common.next")),e.createElement(N,null))))))},K=C;export{K as default};