"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64140:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u53d1\u5e03 API",keywords:["API \u7f51\u5173","Apache APISIX","\u53d1\u5e03\u8def\u7531","\u521b\u5efa\u670d\u52a1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002"},o=void 0,p={unversionedId:"tutorials/expose-api",id:"tutorials/expose-api",isDocsHomePage:!1,title:"\u53d1\u5e03 API",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/tutorials/expose-api.md",sourceDirName:"tutorials",slug:"/tutorials/expose-api",permalink:"/zh/docs/apisix/next/tutorials/expose-api",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/tutorials/expose-api.md",tags:[],version:"current",frontMatter:{title:"\u53d1\u5e03 API",keywords:["API \u7f51\u5173","Apache APISIX","\u53d1\u5e03\u8def\u7531","\u521b\u5efa\u670d\u52a1"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Apache APISIX \u53d1\u5e03\u670d\u52a1\u548c\u8def\u7531\u3002"},sidebar:"docs",previous:{title:"APISIX",permalink:"/zh/docs/apisix/next/architecture-design/apisix"},next:{title:"\u4fdd\u62a4 API",permalink:"/zh/docs/apisix/next/tutorials/protect-api"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",children:[{value:"\u4e0a\u6e38",id:"\u4e0a\u6e38",children:[]},{value:"\u8def\u7531",id:"\u8def\u7531",children:[]},{value:"\u670d\u52a1",id:"\u670d\u52a1",children:[]}]},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u516c\u5f00\u4f60\u7684\u670d\u52a1",id:"\u516c\u5f00\u4f60\u7684\u670d\u52a1",children:[]},{value:"\u66f4\u591a\u6559\u7a0b",id:"\u66f4\u591a\u6559\u7a0b",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u5f15\u5bfc\u4f60\u4e86\u89e3 APISIX \u7684\u4e0a\u6e38\u3001\u8def\u7531\u4ee5\u53ca\u670d\u52a1\u7684\u6982\u5ff5\uff0c\u5e76\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 APISIX \u53d1\u5e03\u4f60\u7684 API\u3002"),(0,a.kt)("h2",{id:"\u6982\u5ff5\u4ecb\u7ecd"},"\u6982\u5ff5\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"\u4e0a\u6e38"},"\u4e0a\u6e38"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/upstream"},"Upstream")," \u4e5f\u79f0\u4e3a\u4e0a\u6e38\uff0c\u4e0a\u6e38\u662f\u5bf9\u865a\u62df\u4e3b\u673a\u7684\u62bd\u8c61\uff0c\u5373\u5e94\u7528\u5c42\u670d\u52a1\u6216\u8282\u70b9\u7684\u62bd\u8c61\u3002"),(0,a.kt)("p",null,"\u4e0a\u6e38\u7684\u4f5c\u7528\u662f\u6309\u7167\u914d\u7f6e\u89c4\u5219\u5bf9\u670d\u52a1\u8282\u70b9\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u5b83\u7684\u5730\u5740\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u5230\u8def\u7531\u6216\u670d\u52a1\u4e0a\u3002\u5f53\u591a\u4e2a\u8def\u7531\u6216\u670d\u52a1\u5f15\u7528\u540c\u4e00\u4e2a\u4e0a\u6e38\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e0a\u6e38\u5bf9\u8c61\uff0c\u5728\u8def\u7531\u6216\u670d\u52a1\u4e2d\u4f7f\u7528\u4e0a\u6e38\u7684 ID \u65b9\u5f0f\u5f15\u7528\u4e0a\u6e38\uff0c\u51cf\u8f7b\u7ef4\u62a4\u538b\u529b\u3002"),(0,a.kt)("h3",{id:"\u8def\u7531"},"\u8def\u7531"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/route"},"Route")," \u4e5f\u79f0\u4e3a\u8def\u7531\uff0c\u662f APISIX \u4e2d\u6700\u57fa\u7840\u548c\u6700\u6838\u5fc3\u7684\u8d44\u6e90\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"APISIX \u53ef\u4ee5\u901a\u8fc7\u8def\u7531\u5b9a\u4e49\u89c4\u5219\u6765\u5339\u914d\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u6839\u636e\u5339\u914d\u7ed3\u679c\u52a0\u8f7d\u5e76\u6267\u884c\u76f8\u5e94\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/plugin"},"\u63d2\u4ef6"),"\uff0c\u6700\u540e\u628a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5230\u6307\u5b9a\u7684\u4e0a\u6e38\u670d\u52a1\u3002\u8def\u7531\u4e2d\u4e3b\u8981\u5305\u542b\u4e09\u90e8\u5206\u5185\u5bb9\uff1a\u5339\u914d\u89c4\u5219\u3001\u63d2\u4ef6\u914d\u7f6e\u548c\u4e0a\u6e38\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u670d\u52a1"},"\u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/service"},"Service")," \u4e5f\u79f0\u4e3a\u670d\u52a1\uff0c\u662f\u67d0\u7c7b API \u7684\u62bd\u8c61\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u7ec4 Route \u7684\u62bd\u8c61\uff09\u3002\u5b83\u901a\u5e38\u4e0e\u4e0a\u6e38\u670d\u52a1\u62bd\u8c61\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0cRoute \u4e0e Service \u4e4b\u95f4\uff0c\u901a\u5e38\u662f N:1 \u7684\u5173\u7cfb\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u901a\u8fc7 Docker ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/installation-guide"},"\u542f\u52a8 APISIX"),"\u3002"),(0,a.kt)("h2",{id:"\u516c\u5f00\u4f60\u7684\u670d\u52a1"},"\u516c\u5f00\u4f60\u7684\u670d\u52a1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e0a\u6e38\u3002")),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.org")," \u7684\u4e0a\u6e38\u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u8fdb\u884c\u6d4b\u8bd5\u3002\u8fd9\u662f\u4e00\u4e2a\u8fd4\u56de\u670d\u52a1\uff0c\u5b83\u5c06\u8fd4\u56de\u6211\u4eec\u5728\u8bf7\u6c42\u4e2d\u4f20\u9012\u7684\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/upstreams/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,a.kt)("p",null,"\u5728\u8be5\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u6307\u5b9a\u4e86 Apache APISIX \u7684 Admin API Key \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"edd1c9f034335f136f87ad84b625c8f1"),"\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"roundrobin")," \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u673a\u5236\uff0c\u5e76\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.org:80")," \u4e3a\u4e0a\u6e38\u670d\u52a1\u3002\u4e3a\u4e86\u5c06\u8be5\u4e0a\u6e38\u7ed1\u5b9a\u5230\u8def\u7531\uff0c\u6b64\u5904\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream_id")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u6b64\u5904\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," \u4e0b\u6307\u5b9a\u591a\u4e2a\u4e0a\u6e38\uff0c\u4ee5\u8fbe\u5230\u8d1f\u8f7d\u5747\u8861\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/terminology/upstream"},"\u4e0a\u6e38"),"\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8def\u7531\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream_id": "1"\n}\'\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u521b\u5efa\u4e0a\u6e38\u975e\u5fc5\u987b\u6b65\u9aa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u8def\u7531\u4e2d\uff0c\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," \u5bf9\u8c61\uff0c\u8fbe\u5230\u4e0a\u8ff0\u7684\u6548\u679c\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u8def\u7531\u3002")),(0,a.kt)("p",null,"\u5728\u521b\u5efa\u5b8c\u6210\u8def\u7531\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u8def\u7531\u662f\u5426\u6b63\u5e38\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -i -X GET "http://127.0.0.1:9080/get?foo1=bar1&foo2=bar2" -H "Host: example.com"\n')),(0,a.kt)("p",null,"\u8be5\u8bf7\u6c42\u5c06\u88ab APISIX \u8f6c\u53d1\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10"),"\u3002"),(0,a.kt)("h2",{id:"\u66f4\u591a\u6559\u7a0b"},"\u66f4\u591a\u6559\u7a0b"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/tutorials/protect-api"},"\u4fdd\u62a4 API")," \u6765\u4fdd\u62a4\u4f60\u7684 API\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 APISIX \u7684\u4e00\u4e9b",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/batch-requests"},"\u63d2\u4ef6"),"\uff0c\u5b9e\u73b0\u66f4\u591a\u529f\u80fd\u3002"))}s.isMDXComponent=!0}}]);