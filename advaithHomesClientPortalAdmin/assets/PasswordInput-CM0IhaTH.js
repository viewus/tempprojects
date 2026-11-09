import{c as r,j as t,r as u}from"./index-qdqMQHPC.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=r("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);function h({icon:a,suffix:s,invalid:e,wrapClassName:i,className:n="",type:p="text",...c}){const o=a||s||i,d=t.jsx("input",{type:p,className:[o?"input-bare":"input",!o&&e&&"invalid",n].filter(Boolean).join(" "),"aria-invalid":e||void 0,...c});return o?t.jsxs("label",{className:[i||"input-icon",e&&"invalid",c.disabled&&"disabled"].filter(Boolean).join(" "),children:[a&&t.jsx(a,{size:17,"aria-hidden":"true"}),d,s]}):d}function j({icon:a=x,...s}){const[e,i]=u.useState(!1);return t.jsx(h,{...s,icon:a,type:e?"text":"password",suffix:t.jsx("button",{type:"button",className:"input-eye",onClick:()=>i(n=>!n),"aria-label":e?"Hide password":"Show password",children:e?t.jsx(l,{size:17}):t.jsx(y,{size:17})})})}export{y as E,x as L,j as P,h as T};
