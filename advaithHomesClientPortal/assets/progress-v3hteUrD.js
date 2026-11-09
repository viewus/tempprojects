import{c as s,j as y,_ as p,T as o,Q as l,$ as g,C as d,p as f}from"./index-F3ldjnZI.js";import{F as I}from"./file-text-ZMFu4cV1.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=s("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=s("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),i={approved:"success",accepted:"success",booked:"success",completed:"success",paid:"success",pending:"warning","awaiting upload":"warning","on hold":"warning","in progress":"info",shortlisted:"info",rejected:"danger",normal:"success",important:"warning",critical:"danger"},a=["Critical","Important","Normal"],k=(e,n)=>a.indexOf(e.priority)-a.indexOf(n.priority),C=(e,n)=>{const c=String(n||"").toLowerCase();return e!=null&&e[n]?e[n]:i[c]?i[c]:c.includes("accept")||c.includes("book")||c.includes("approv")||c.includes("complet")?"success":c.includes("hold")||c.includes("wait")||c.includes("pend")?"warning":c.includes("reject")||c.includes("cancel")||c.includes("decline")?"danger":"info"};function m({status:e,tone:n,map:c}){return y.jsx("span",{className:`badge tone-${n||C(c,e)}`,children:e})}const _={file:I,check:d,message:g,info:l,alert:o,x:p},x={success:d,info:r,neutral:u,warning:t,danger:t},h={Critical:o,Important:S,Normal:l},E=(e,n,c=u)=>e[n]||c,N=4,O={...x,neutral:r},w=[{key:"icon",type:"toneIcon",className:"hist-icon",size:18,icon:e=>O[e.tone]||r,tone:e=>e.tone},{key:"text",type:"stack",title:e=>e.title,subtitle:e=>f(e.date)}],D="Couldn't load progress";export{_ as D,N as H,D as P,m as S,x as T,w as a,k as b,a as c,h as d,E as i,C as t};
