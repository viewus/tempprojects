import{c as o,r as p,j as e,e as b}from"./index-qdqMQHPC.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),r="You have unsaved changes. Leave without saving?";function j({dirty:t,saving:n,onSave:v,onCancel:h,message:x="You have unsaved changes",saveLabel:f="Save changes"}){return p.useEffect(()=>{if(!t)return;const c=a=>(a.preventDefault(),a.returnValue=r,r),i=a=>{var d,u;const s=(u=(d=a.target).closest)==null?void 0:u.call(d,"a[href]");if(!s||s.target==="_blank"||a.defaultPrevented)return;const l=s.getAttribute("href")||"";!l.startsWith("#/")&&!l.startsWith("/")||window.confirm(r)||(a.preventDefault(),a.stopPropagation())};return window.addEventListener("beforeunload",c),document.addEventListener("click",i,!0),()=>{window.removeEventListener("beforeunload",c),document.removeEventListener("click",i,!0)}},[t]),t?e.jsxs("div",{className:"save-bar",role:"region","aria-label":"Unsaved changes",children:[e.jsxs("span",{className:"save-bar-msg",children:[e.jsx(m,{size:16}),x]}),e.jsxs("div",{className:"save-bar-actions",children:[e.jsxs("button",{type:"button",className:"btn",onClick:h,disabled:n,children:[e.jsx(y,{size:15}),"Cancel"]}),e.jsx("button",{type:"button",className:"btn gold",onClick:v,disabled:n,children:n?e.jsx(b,{variant:"inline",label:"Saving",color:"var(--on-primary)"}):e.jsxs(e.Fragment,{children:[e.jsx(k,{size:15}),f]})})]})]}):null}export{y as R,j as S};
