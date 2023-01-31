"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43091:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Architecture",keywords:["API gateway","Apache APISIX","APISIX architecture"],description:"Architecture of Apache APISIX\u2014the Cloud Native API Gateway."},o=void 0,c={unversionedId:"architecture-design/apisix",id:"architecture-design/apisix",isDocsHomePage:!1,title:"Architecture",description:"Architecture of Apache APISIX\u2014the Cloud Native API Gateway.",source:"@site/docs/apisix/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/docs/apisix/next/architecture-design/apisix",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/apisix.md",tags:[],version:"current",frontMatter:{title:"Architecture",keywords:["API gateway","Apache APISIX","APISIX architecture"],description:"Architecture of Apache APISIX\u2014the Cloud Native API Gateway."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/apisix/next/installation-guide"},next:{title:"Expose API",permalink:"/docs/apisix/next/tutorials/expose-api"}},s=[{value:"Request handling process",id:"request-handling-process",children:[]},{value:"Plugin hierarchy",id:"plugin-hierarchy",children:[]}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APISIX is built on top of Nginx and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openresty/lua-nginx-module"},"ngx_lua")," leveraging the power offered by LuaJIT. See ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua/"},"Why Apache APISIX chose Nginx and Lua to build API Gateway?"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flow-software-architecture.png",alt:"flow-software-architecture"})),(0,a.kt)("p",null,"APISIX has two main parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"APISIX core, Lua plugin, multi-language Plugin runtime, and the WASM plugin runtime."),(0,a.kt)("li",{parentName:"ol"},"Built-in Plugins that adds features for observability, security, traffic control, etc.")),(0,a.kt)("p",null,"The APISIX core handles the important functions like matching Routes, load balancing, service discovery, configuration management, and provides a management API. It also includes APISIX Plugin runtime supporting Lua and multilingual Plugins (Go, Java , Python, JavaScript, etc) including the experimental WASM Plugin runtime."),(0,a.kt)("p",null,"APISIX also has a set of ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/batch-requests"},"built-in Plugins")," that adds features like authentication, security, observability, etc. They are written in Lua."),(0,a.kt)("h2",{id:"request-handling-process"},"Request handling process"),(0,a.kt)("p",null,"The diagram below shows how APISIX handles an incoming request and applies corresponding Plugins:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flow-load-plugin.png",alt:"flow-load-plugin"})),(0,a.kt)("h2",{id:"plugin-hierarchy"},"Plugin hierarchy"),(0,a.kt)("p",null,"The chart below shows the order in which different types of Plugin are applied to a request:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flow-plugin-internal.png",alt:"flow-plugin-internal"})))}p.isMDXComponent=!0}}]);