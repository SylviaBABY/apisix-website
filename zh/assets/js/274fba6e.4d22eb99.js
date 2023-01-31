"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2518],{5318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1584:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(5773),a=(r(7378),r(5318));const i={id:"security",title:"\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u5b89\u5168"],description:"\u5982\u679c\u4f60\u5bf9 APISIX \u7684\u5b89\u5168\u6027\u6709\u987e\u8651\uff0c\u6216\u8005\u53d1\u73b0\u4e86\u6f0f\u6d1e\u6216\u6f5c\u5728\u5a01\u80c1\uff0c\u8bf7\u53ca\u65f6\u53d1\u9001\u90ae\u4ef6\u5230 security@apache.org \u4e0e Apache \u5b89\u5168\u56e2\u961f\u53d6\u5f97\u8054\u7cfb\u3002"},o=void 0,c={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e",description:"\u5982\u679c\u4f60\u5bf9 APISIX \u7684\u5b89\u5168\u6027\u6709\u987e\u8651\uff0c\u6216\u8005\u53d1\u73b0\u4e86\u6f0f\u6d1e\u6216\u6f5c\u5728\u5a01\u80c1\uff0c\u8bf7\u53ca\u65f6\u53d1\u9001\u90ae\u4ef6\u5230 security@apache.org \u4e0e Apache \u5b89\u5168\u56e2\u961f\u53d6\u5f97\u8054\u7cfb\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security-guide.md",sourceDirName:".",slug:"/security",permalink:"/zh/docs/general/security",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/security-guide.md",tags:[],version:"current",lastUpdatedBy:"Sylvia",lastUpdatedAt:1667182058,formattedLastUpdatedAt:"2022/10/31",frontMatter:{id:"security",title:"\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u5b89\u5168"],description:"\u5982\u679c\u4f60\u5bf9 APISIX \u7684\u5b89\u5168\u6027\u6709\u987e\u8651\uff0c\u6216\u8005\u53d1\u73b0\u4e86\u6f0f\u6d1e\u6216\u6f5c\u5728\u5a01\u80c1\uff0c\u8bf7\u53ca\u65f6\u53d1\u9001\u90ae\u4ef6\u5230 security@apache.org \u4e0e Apache \u5b89\u5168\u56e2\u961f\u53d6\u5f97\u8054\u7cfb\u3002"},sidebar:"docs",previous:{title:"\u535a\u5ba2\u8d21\u732e\u6307\u5357",permalink:"/zh/docs/general/blog"},next:{title:"\u9879\u76ee\u7ba1\u7406\u4f53\u7cfb",permalink:"/zh/docs/general/committer-guide"}},p=[],s={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u5728\u6d88\u9664\u5176\u8f6f\u4ef6\u9879\u76ee\u4e2d\u7684\u5b89\u5168\u95ee\u9898\u65b9\u9762\u91c7\u53d6\u4e86\u4e25\u683c\u7684\u7acb\u573a\u3002Apache APISIX \u4e5f\u975e\u5e38\u5173\u6ce8\u4e0e\u5176\u7279\u6027\u548c\u529f\u80fd\u6709\u5173\u7684\u5b89\u5168\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9 APISIX \u7684\u5b89\u5168\u6027\u6709\u987e\u8651\uff0c\u6216\u8005\u53d1\u73b0\u4e86\u6f0f\u6d1e\u6216\u6f5c\u5728\u5a01\u80c1\uff0c\u8bf7\u53ca\u65f6\u53d1\u9001\u90ae\u4ef6\u5230 ",(0,a.kt)("a",{parentName:"p",href:"mailto:security@apache.org"},"security@apache.org")," \u4e0e Apache \u5b89\u5168\u56e2\u961f\u53d6\u5f97\u8054\u7cfb\u3002"),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728\u5411\u516c\u5171\u9891\u9053\u62ab\u9732\u5b89\u5168\u95ee\u9898\u4e4b\u524d\uff0c\u8bf7\u4f18\u5148\u901a\u8fc7\u8be5\u90ae\u4ef6\u5730\u5740\u62a5\u544a\u5b89\u5168\u95ee\u9898\u3002"))),(0,a.kt)("p",null,"\u8bf7\u5728\u90ae\u4ef6\u4e2d\u6ce8\u660e\u9879\u76ee\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX"),"\uff0c\u4ea7\u54c1\u540d\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX-Dashboard"),"\uff0c\u5e76\u63cf\u8ff0\u76f8\u5173\u95ee\u9898\u6216\u6f5c\u5728\u5a01\u80c1\u3002\u4f60\u9700\u8981\u63a8\u8350\u4e00\u79cd\u5982\u4f55\u590d\u73b0\u8be5\u95ee\u9898\u7684\u65b9\u6cd5\u3002Apache \u5b89\u5168\u56e2\u961f\u548c APISIX \u793e\u533a\u5c06\u5728\u8bc4\u4f30\u5e76\u5206\u6790\u7ed3\u679c\u540e\u5411\u4f60\u53cd\u9988\u3002"))}l.isMDXComponent=!0}}]);