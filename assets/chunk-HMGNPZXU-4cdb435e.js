import{p as r}from"./chunk-J7QRBMDL-1ee85f09.js";import{o as l,ap as u,am as i}from"./index-d0092a53.js";import{v as s}from"./index-83bf3b22.js";var o=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,d=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_open"})),p=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_close"})),c=`.password-input {
  position: relative;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  background: none;
}
.password-input input {
  width: 100%;
  height: 45px;
  padding: 0 8px;
  padding-left: 16px !important;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.password-input .ant-input-suffix {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 14px;
  cursor: pointer;
}
`,m=e=>{let n=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,c),l.createElement(s.Password,{ref:n,className:"password-input"+(e!=null&&e.className?` ${e==null?void 0:e.className}`:""),iconRender:t=>t?l.createElement("div",null,l.createElement(d,null)):l.createElement("div",null,l.createElement(p,null)),onChange:t=>{var a;e!=null&&e.onChange&&((a=e==null?void 0:e.onChange)==null||a.call(e,t.target.value))},defaultValue:e==null?void 0:e.defaultValue,maxLength:(e==null?void 0:e.maxLength)||20,onPressEnter:t=>{var a;return(a=e==null?void 0:e.onPressEnter)==null?void 0:a.call(e,t)},onBlur:t=>{var a;return(a=e==null?void 0:e.onBlur)==null?void 0:a.call(e,t)},autoFocus:u(e==null?void 0:e.autoFocus)&&i()?!0:e==null?void 0:e.autoFocus}))},h=m;export{h as B};
