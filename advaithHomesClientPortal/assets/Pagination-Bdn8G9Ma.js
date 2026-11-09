import{c as r,j as n}from"./index-F3ldjnZI.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function f({page:a,pages:e,total:i,pageSize:c=12,per:l,onChange:h,onPage:d}){if(e<=1)return null;const t=h||d,o=l||c,m=(a-1)*o+1,u=i?Math.min(a*o,i):a*o;return n.jsxs("nav",{className:"pagination","aria-label":"Pagination",children:[typeof i=="number"&&i>0&&n.jsxs("span",{className:"pagination-info muted small",children:["Showing ",n.jsxs("b",{children:[m,"–",u]})," of ",n.jsx("b",{children:i})]}),n.jsxs("div",{className:"pagination-btns",children:[n.jsxs("button",{type:"button",className:"pagination-nav",disabled:a<=1,onClick:()=>t(a-1),"aria-label":"Previous page",children:[n.jsx(x,{size:15})," Prev"]}),Array.from({length:e},(s,b)=>b+1).map(s=>n.jsx("button",{type:"button",className:s===a?"active":"","aria-current":s===a?"page":void 0,onClick:()=>t(s),children:s},s)),n.jsxs("button",{type:"button",className:"pagination-nav",disabled:a>=e,onClick:()=>t(a+1),"aria-label":"Next page",children:["Next ",n.jsx(j,{size:15})]})]})]})}export{x as C,f as P,j as a};
