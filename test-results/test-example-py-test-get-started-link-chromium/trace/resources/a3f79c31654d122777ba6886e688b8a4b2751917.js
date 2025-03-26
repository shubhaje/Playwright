"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([["9290"],{9502:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"api/class-playwright","title":"Playwright Library","description":"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:","source":"@site/versioned_docs/version-stable/api/class-playwright.mdx","sourceDirName":"api","slug":"/api/class-playwright","permalink":"/docs/api/class-playwright","draft":false,"unlisted":false,"tags":[],"version":"stable","frontMatter":{"id":"class-playwright","title":"Playwright Library"},"sidebar":"api","previous":{"title":"Playwright Test","permalink":"/docs/api/class-test"},"next":{"title":"APIRequest","permalink":"/docs/api/class-apirequest"}}'),t=n("5893"),i=n("65");n("8168"),n("7645"),n("2079");let l={id:"class-playwright",title:"Playwright Library"},a=void 0,o={},c=[{value:"Properties",id:"properties",level:2},{value:"chromium",id:"playwright-chromium",level:3},{value:"devices",id:"playwright-devices",level:3},{value:"errors",id:"playwright-errors",level:3},{value:"firefox",id:"playwright-firefox",level:3},{value:"request",id:"playwright-request",level:3},{value:"selectors",id:"playwright-selectors",level:3},{value:"webkit",id:"playwright-webkit",level:3}];function d(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h3,{id:"playwright-chromium",children:"chromium"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.chromium"}),"\n",(0,t.jsxs)(r.p,{children:["This object can be used to launch or connect to Chromium, returning instances of ",(0,t.jsx)(r.a,{href:"/docs/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.chromium\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-devices",children:"devices"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.devices"}),"\n",(0,t.jsxs)(r.p,{children:["Returns a dictionary of devices to be used with ",(0,t.jsx)(r.a,{href:"/docs/api/class-browser#browser-new-context",children:"browser.newContext()"})," or ",(0,t.jsx)(r.a,{href:"/docs/api/class-browser#browser-new-page",children:"browser.newPage()"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.devices\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-errors",children:"errors"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.errors"}),"\n",(0,t.jsxs)(r.p,{children:["Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,t.jsx)(r.a,{href:"/docs/api/class-locator#locator-wait-for",children:"locator.waitFor()"})," might fail if the selector doesn't match any nodes during the given timeframe."]}),"\n",(0,t.jsxs)(r.p,{children:["For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,t.jsx)(r.a,{href:"#playwright-errors",children:(0,t.jsx)(r.code,{children:"playwright.errors"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:"An example of handling a timeout error:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"try {\n  await page.locator('.foo').waitFor();\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.errors\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"TimeoutError"})," ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",children:"function"})]}),"\n",(0,t.jsxs)(r.p,{children:["A class of ",(0,t.jsx)(r.a,{href:"/docs/api/class-timeouterror",title:"TimeoutError",children:"TimeoutError"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-firefox",children:"firefox"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.firefox"}),"\n",(0,t.jsxs)(r.p,{children:["This object can be used to launch or connect to Firefox, returning instances of ",(0,t.jsx)(r.a,{href:"/docs/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.firefox\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-request",children:"request"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.16"}),"\n",(0,t.jsx)("x-search",{children:"playwright.request"}),"\n",(0,t.jsx)(r.p,{children:"Exposes API that can be used for the Web API testing."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.request\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/class-apirequest",title:"APIRequest",children:"APIRequest"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-selectors",children:"selectors"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.selectors"}),"\n",(0,t.jsxs)(r.p,{children:["Selectors can be used to install custom selector engines. See ",(0,t.jsx)(r.a,{href:"/docs/extensibility",children:"extensibility"})," for more information."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.selectors\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/class-selectors",title:"Selectors",children:"Selectors"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"playwright-webkit",children:"webkit"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"playwright.webkit"}),"\n",(0,t.jsxs)(r.p,{children:["This object can be used to launch or connect to WebKit, returning instances of ",(0,t.jsx)(r.a,{href:"/docs/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"playwright.webkit\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Type"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7645:function(e,r,n){n.d(r,{Z:()=>i});var s=n("5893");n("7294");var t=n("7026");function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_Ymn6",i),hidden:n,children:r})}},8168:function(e,r,n){n.d(r,{Z:()=>w});var s=n("5893"),t=n("7294"),i=n("7026"),l=n("4718"),a=n("6550"),o=n("8714"),c=n("9207"),d=n("9413"),h=n("4510");function u(e){var r,n;return null!==(n=null===(r=t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function p(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var x=n("6735");function j(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),h=e=>{let r=e.currentTarget,n=o[c.indexOf(r)].value;n!==t&&(d(r),a(n))},u=e=>{var r,n;let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;s=null!==(r=c[n])&&void 0!==r?r:c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;s=null!==(n=c[r])&&void 0!==n?n:c[c.length-1]}}null==s||s.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},r),children:o.map(e=>{let{value:r,label:n,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:u,onClick:h,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=n?n:r},r)})})}function f(e){let{lazy:r,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=a.find(e=>e.props.value===l);return e?(0,t.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,i=function(e){let{values:r,children:n}=e;return(0,t.useMemo)(()=>{let e=null!=r?r:u(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}});return!function(e){let r=(0,d.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(r.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[r,n])}(e),[l,x]=(0,t.useState)(()=>(function(e){var r;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(n,'" but none of its children has the corresponding value. Available values are: ').concat(s.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return n}let t=null!==(r=s.find(e=>e.default))&&void 0!==r?r:s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:i})),[j,f]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,a.k6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,c._X)(i),(0,t.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})},[i,s])]}({queryString:n,groupId:s}),[g,w]=function(e){let{groupId:r}=e,n=r?"docusaurus.tab.".concat(r):null,[s,i]=(0,h.Nk)(n);return[s,(0,t.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:s}),m=(()=>{let e=null!=j?j:g;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{m&&x(m)},[m]),{selectedValue:l,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error("Can't select invalid tab value=".concat(e));x(e),f(e),w(e)},[f,w,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(j,{...r,...e}),(0,s.jsx)(f,{...r,...e})]})}function w(e){let r=(0,x.Z)();return(0,s.jsx)(g,{...e,children:u(e.children)},String(r))}},2079:function(e,r,n){n.d(r,{Z:()=>l});var s=n("5893");n("7294");let t="dot_iyam",i="menuBar_WzY4",l=e=>{let{children:r}=e;return(0,s.jsxs)("div",{className:"card_GRg2",children:[(0,s.jsxs)("div",{className:"header_XfNy",children:[(0,s.jsxs)("div",{style:{whiteSpace:"nowrap"},children:[(0,s.jsx)("span",{className:t,style:{backgroundColor:"rgb(242, 95, 88)"}}),(0,s.jsx)("span",{className:t,style:{backgroundColor:"rgb(251, 190, 60)"}}),(0,s.jsx)("span",{className:t,style:{backgroundColor:"rgb(88, 203, 66)"}})]}),(0,s.jsx)("div",{className:"addressBar_X0Gc",children:"http://localhost:3000"}),(0,s.jsx)("div",{style:{marginLeft:"auto"},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:i}),(0,s.jsx)("span",{className:i}),(0,s.jsx)("span",{className:i})]})})]}),(0,s.jsxs)("div",{className:"body_ikuQ",children:[(0,s.jsx)("div",{className:"html-card-page ".concat("pageSide_EDh8"," ").concat("webView_lqhL"),children:r[0]}),(0,s.jsx)("div",{className:"html-card-code ".concat("codeSide_OQWj"),children:r[1]})]})]})}},65:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return l}});var s=n(7294);let t={},i=s.createContext(t);function l(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);