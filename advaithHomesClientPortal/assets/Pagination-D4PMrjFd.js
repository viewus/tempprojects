import{c as o,j as n}from"./index-CKFre7sL.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=o("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function b({page:s,pages:a,total:t,pageSize:e=12,onChange:r}){if(a<=1)return null;const c=(s-1)*e+1,l=t?Math.min(s*e,t):s*e;return n.jsxs("nav",{className:"pagination","aria-label":"Pagination",children:[typeof t=="number"&&t>0&&n.jsxs("span",{className:"pagination-info muted small",children:["Showing ",n.jsxs("b",{children:[c,"–",l]})," of ",n.jsx("b",{children:t})]}),n.jsxs("div",{className:"pagination-btns",children:[n.jsxs("button",{type:"button",className:"pagination-nav",disabled:s<=1,onClick:()=>r(s-1),"aria-label":"Previous page",children:[n.jsx(h,{size:15})," Prev"]}),Array.from({length:a},(i,d)=>d+1).map(i=>n.jsx("button",{type:"button",className:i===s?"active":"","aria-current":i===s?"page":void 0,onClick:()=>r(i),children:i},i)),n.jsxs("button",{type:"button",className:"pagination-nav",disabled:s>=a,onClick:()=>r(s+1),"aria-label":"Next page",children:["Next ",n.jsx(m,{size:15})]})]})]})}export{h as C,b as P,m as a};
