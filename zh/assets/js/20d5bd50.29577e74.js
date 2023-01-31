"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92640:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var n=r(87462),i=(r(67294),r(3905));const o={title:"Script",keywords:["API \u7f51\u5173","Apache APISIX","Router"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Script \u7684\u4f7f\u7528\u65b9\u6cd5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002"},c=void 0,p={unversionedId:"terminology/script",id:"terminology/script",isDocsHomePage:!1,title:"Script",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Script \u7684\u4f7f\u7528\u65b9\u6cd5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/terminology/script.md",sourceDirName:"terminology",slug:"/terminology/script",permalink:"/zh/docs/apisix/next/terminology/script",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/terminology/script.md",tags:[],version:"current",frontMatter:{title:"Script",keywords:["API \u7f51\u5173","Apache APISIX","Router"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Script \u7684\u4f7f\u7528\u65b9\u6cd5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002"},sidebar:"docs",previous:{title:"Router",permalink:"/zh/docs/apisix/next/terminology/router"},next:{title:"Service",permalink:"/zh/docs/apisix/next/terminology/service"}},a=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]}],l={toc:a};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Script \u8868\u793a\u5c06\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u811a\u672c\u3002"),(0,i.kt)("p",null,"Script \u914d\u7f6e\u9700\u8981\u7ed1\u5b9a\u5728\u8def\u7531\u4e0a\u3002"),(0,i.kt)("p",null,"Script \u4e0e Plugin \u4e0d\u517c\u5bb9\uff0c\u5e76\u4e14 Script \u4f18\u5148\u6267\u884c Script\uff0c\u8fd9\u610f\u5473\u7740\u914d\u7f6e Script \u540e\uff0cRoute \u4e0a\u914d\u7f6e\u7684 Plugin \u5c06",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u88ab\u6267\u884c"),"\u3002"),(0,i.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u5728 Script \u4e2d\u53ef\u4ee5\u7f16\u5199\u4efb\u610f Lua \u4ee3\u7801\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5df2\u6709\u7684\u63d2\u4ef6\u4ee5\u590d\u7528\u5df2\u6709\u7684\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"Script \u4e5f\u6709\u6267\u884c\u9636\u6bb5\u6982\u5ff5\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"access"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"header_filter"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"body_filter")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," \u9636\u6bb5\u3002\u7cfb\u7edf\u4f1a\u5728\u76f8\u5e94\u9636\u6bb5\u4e2d\u81ea\u52a8\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Script")," \u811a\u672c\u4e2d\u5bf9\u5e94\u9636\u6bb5\u7684\u4ee3\u7801\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}s.isMDXComponent=!0}}]);