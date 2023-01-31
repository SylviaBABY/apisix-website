"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98665],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9628:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={title:"Control API"},o=void 0,i={unversionedId:"control-api",id:"control-api",isDocsHomePage:!1,title:"Control API",description:"control API \u53ef\u4ee5\u88ab\u7528\u6765\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/zh/docs/apisix/next/control-api",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/control-api.md",tags:[],version:"current",frontMatter:{title:"Control API"},sidebar:"docs",previous:{title:"Admin API",permalink:"/zh/docs/apisix/next/admin-api"},next:{title:"\u6e90\u7801\u5b89\u88c5 APISIX",permalink:"/zh/docs/apisix/next/building-apisix"}},p=[{value:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684 control API",id:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684-control-api",children:[]},{value:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684 control API",id:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]},{value:"GET /v1/plugin_metadatas",id:"get-v1plugin_metadatas",children:[]},{value:"GET /v1/plugin_metadata/{plugin_name}",id:"get-v1plugin_metadataplugin_name",children:[]}]}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"control API \u53ef\u4ee5\u88ab\u7528\u6765\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732 APISIX \u5185\u90e8\u72b6\u6001\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u5355\u4e2a APISIX \u7684\u6570\u636e\u5e73\u9762\u7684\u884c\u4e3a")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ccontrol API \u662f\u542f\u7528\u7684\uff0c\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/conf/config.yaml")," \u4e2d\u7684 control \u90e8\u5206\u6765\u66f4\u6539\u8bbe\u7f6e\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684 control API \u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u652f\u6301\u53c2\u6570\u5339\u914d\uff0c\u5982\u679c\u60f3\u542f\u7528\u53c2\u6570\u5339\u914d\u529f\u80fd\u53ef\u4ee5\u5728 control \u90e8\u5206\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"router: 'radixtree_uri_with_parameter'")),(0,a.kt)("p",null,"\u6ce8\u610f: control API server \u4e0d\u5e94\u8be5\u88ab\u914d\u7f6e\u6210\u76d1\u542c\u516c\u7f51\u5730\u5740\u3002"),(0,a.kt)("h2",{id:"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684-control-api"},"\u901a\u8fc7\u63d2\u4ef6\u6dfb\u52a0\u7684 control API"),(0,a.kt)("p",null,"APISIX \u4e2d\u4e00\u4e9b\u63d2\u4ef6\u6dfb\u52a0\u4e86\u81ea\u5df1\u7684 control API\u3002\u5982\u679c\u4f60\u5bf9\u4ed6\u4eec\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u9605\u5bf9\u5e94\u63d2\u4ef6\u7684\u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684-control-api"},"\u72ec\u7acb\u4e8e\u63d2\u4ef6\u7684 control API"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u652f\u6301\u7684 API:"),(0,a.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.2 \u7248\u672c"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u88ab\u8be5 APISIX \u5b9e\u4f8b\u4f7f\u7528\u7684 json schema\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,a.kt)("p",null,"\u53ea\u6709\u542f\u7528\u4e86\u7684\u63d2\u4ef6\u624d\u4f1a\u88ab\u5305\u542b\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u90e8\u5206\u3002\uff08\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\uff09\u4e00\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4f1a\u7f3a\u5931\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_schema")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\uff0c\u8fd9\u53d6\u51b3\u4e8e\u63d2\u4ef6\u7684\u5b9a\u4e49\u3002"),(0,a.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.3 \u7248\u672c"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u5f53\u524d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/tutorials/health-check"},"health check")," \u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,a.kt)("p",null,"\u6bcf\u4e2a entry \u5305\u542b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src_type\uff1a\u8868\u793a health checker \u7684\u6765\u6e90\u3002\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"[routes,services,upstreams]")," \u5176\u4e2d\u4e4b\u4e00"),(0,a.kt)("li",{parentName:"ul"},"src_id\uff1a\u8868\u793a\u521b\u5efa health checker \u7684\u5bf9\u8c61\u7684 id\u3002\u4f8b\u5982\uff0c\u5047\u8bbe id \u4e3a 1 \u7684 Upstream \u5bf9\u8c61\u521b\u5efa\u4e86\u4e00\u4e2a health checker\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"li"},"src_type")," \u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"upstreams"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"src_id")," \u5c31\u662f 1"),(0,a.kt)("li",{parentName:"ul"},"name\uff1a \u8868\u793a health checker \u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"nodes\uff1a health checker \u7684\u76ee\u6807\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"healthy_nodes\uff1a \u8868\u793a health checker \u68c0\u6d4b\u5230\u7684\u5065\u5eb7\u8282\u70b9")),(0,a.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," \u6765\u83b7\u53d6\u6307\u5b9a health checker \u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," \u8fd4\u56de\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7531\u4e8e APISIX \u91c7\u7528\u591a\u8fdb\u7a0b\u67b6\u6784\uff0c\u5982\u679c\u8be5\u8fdb\u7a0b\u4ece\u6765\u6ca1\u6709\u5904\u7406\u7279\u5b9a\u4e0a\u6e38\u7684\u8bf7\u6c42\uff0c\u5219\u4e0a\u6e38\u7684\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f\u4e0d\u4f1a\u51fa\u73b0\u5728\u8be5\u8fdb\u7a0b\u4e0a\u3002 \u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5065\u5eb7\u68c0\u67e5 API \u5728\u6d4b\u8bd5\u671f\u95f4\u65e0\u6cd5\u83b7\u53d6\u6240\u6709\u6570\u636e\u3002"))),(0,a.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 2.8 \u7248\u672c"),(0,a.kt)("p",null,"\u5728 http \u5b50\u7cfb\u7edf\u4e2d\u89e6\u53d1\u4e00\u6b21\u5168\u91cf GC"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5f53\u4f60\u542f\u7528 stream proxy \u65f6\uff0cAPISIX \u5c06\u4e3a stream \u5b50\u7cfb\u7edf\u8fd0\u884c\u53e6\u4e00\u4e2a Lua \u865a\u62df\u673a\u3002\u5b83\u4e0d\u4f1a\u89e6\u53d1\u8fd9\u4e2a Lua \u865a\u62df\u673a\u4e2d\u7684\u5168\u91cf GC\u3002"),(0,a.kt)("h3",{id:"get-v1plugin_metadatas"},"GET /v1/plugin_metadatas"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 3.0.0 \u7248\u672c"),(0,a.kt)("p",null,"\u6253\u5370\u6240\u6709\u63d2\u4ef6\u7684\u5143\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "log_format": {\n            "upstream_response_time": "$upstream_response_time"\n        },\n        "id": "file-logger"\n    },\n    {\n        "ikey": 1,\n        "skey": "val",\n        "id": "example-plugin"\n    }\n]\n')),(0,a.kt)("h3",{id:"get-v1plugin_metadataplugin_name"},"GET /v1/plugin_metadata/{plugin_name}"),(0,a.kt)("p",null,"\u5f15\u5165\u81ea 3.0.0 \u7248\u672c"),(0,a.kt)("p",null,"\u6253\u5370\u6307\u5b9a\u63d2\u4ef6\u7684\u5143\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "log_format": {\n        "upstream_response_time": "$upstream_response_time"\n    },\n    "id": "file-logger"\n}\n')))}s.isMDXComponent=!0}}]);