"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36286:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u8c03\u8bd5\u529f\u80fd"},o=void 0,p={unversionedId:"debug-function",id:"version-3.0.0-beta/debug-function",isDocsHomePage:!1,title:"\u8c03\u8bd5\u529f\u80fd",description:"500\u3001502\u3001503 \u7b49\u7c7b\u4f3c\u7684 5xx \u72b6\u6001\u7801\uff0c\u662f\u7531\u4e8e\u670d\u52a1\u5668\u9519\u8bef\u800c\u54cd\u5e94\u7684\u72b6\u6001\u7801\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42\u51fa\u73b0 5xx \u72b6\u6001\u7801\u65f6\uff1b\u5b83\u53ef\u80fd\u6765\u6e90\u4e8e APISIX \u6216 Upstream \u3002\u5982\u4f55\u8bc6\u522b\u8fd9\u4e9b\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90\uff0c\u662f\u4e00\u4ef6\u5f88\u6709\u610f\u4e49\u7684\u4e8b\uff0c\u5b83\u80fd\u591f\u5feb\u901f\u7684\u5e2e\u52a9\u6211\u4eec\u786e\u5b9a\u95ee\u9898\u7684\u6240\u5728\u3002(\u5f53\u4fee\u6539 conf/config.yaml \u7684\u914d\u7f6e show_upstream_status_in_response_header \u4e3a true \u65f6\uff0c\u4f1a\u8fd4\u56de\u6240\u6709\u4e0a\u6e38\u72b6\u6001\u7801\uff0c\u4e0d\u4ec5\u4ec5\u662f 5xx \u72b6\u6001\u3002)",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0.0-beta/debug-function.md",sourceDirName:".",slug:"/debug-function",permalink:"/zh/docs/apisix/debug-function",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"\u8c03\u8bd5\u529f\u80fd"},sidebar:"version-3.0.0-beta/docs",previous:{title:"TLS \u53cc\u5411\u8ba4\u8bc1",permalink:"/zh/docs/apisix/mtls"},next:{title:"\u57fa\u4e8e\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u6587\u4ef6\u5207\u6362",permalink:"/zh/docs/apisix/profile"}},i=[{value:"<code>5xx</code> \u54cd\u5e94\u72b6\u6001\u7801",id:"5xx-\u54cd\u5e94\u72b6\u6001\u7801",children:[]},{value:"\u5982\u4f55\u8bc6\u522b <code>5xx</code> \u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90",id:"\u5982\u4f55\u8bc6\u522b-5xx-\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],c={toc:i};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"5xx-\u54cd\u5e94\u72b6\u6001\u7801"},(0,a.kt)("inlineCode",{parentName:"h2"},"5xx")," \u54cd\u5e94\u72b6\u6001\u7801"),(0,a.kt)("p",null,"500\u3001502\u3001503 \u7b49\u7c7b\u4f3c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\uff0c\u662f\u7531\u4e8e\u670d\u52a1\u5668\u9519\u8bef\u800c\u54cd\u5e94\u7684\u72b6\u6001\u7801\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u65f6\uff1b\u5b83\u53ef\u80fd\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Upstream")," \u3002\u5982\u4f55\u8bc6\u522b\u8fd9\u4e9b\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90\uff0c\u662f\u4e00\u4ef6\u5f88\u6709\u610f\u4e49\u7684\u4e8b\uff0c\u5b83\u80fd\u591f\u5feb\u901f\u7684\u5e2e\u52a9\u6211\u4eec\u786e\u5b9a\u95ee\u9898\u7684\u6240\u5728\u3002(\u5f53\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"show_upstream_status_in_response_header")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u4f1a\u8fd4\u56de\u6240\u6709\u4e0a\u6e38\u72b6\u6001\u7801\uff0c\u4e0d\u4ec5\u4ec5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u3002)"),(0,a.kt)("h2",{id:"\u5982\u4f55\u8bc6\u522b-5xx-\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90"},"\u5982\u4f55\u8bc6\u522b ",(0,a.kt)("inlineCode",{parentName:"h2"},"5xx")," \u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90"),(0,a.kt)("p",null,"\u5728\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u4e2d\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u8fd9\u4e2a\u54cd\u5e94\u5934\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u7684\u8bc6\u522b ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u7684\u6765\u6e90\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Upstream")," \u65f6\uff0c\u5728\u54cd\u5e94\u5934\u4e2d\u53ef\u4ee5\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u8fd9\u4e2a\u54cd\u5e94\u5934\uff0c\u5e76\u4e14\u8fd9\u4e2a\u54cd\u5e94\u5934\u7684\u503c\u4e3a\u54cd\u5e94\u7684\u72b6\u6001\u7801\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")," \u65f6\uff0c\u54cd\u5e94\u5934\u4e2d\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u7684\u54cd\u5e94\u5934\u4fe1\u606f\u3002\u4e5f\u5c31\u662f\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Upstream")," \u65f6\uff0c\u624d\u4f1a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u54cd\u5e94\u5934\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"502")," \u54cd\u5e94\u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Upstream")," (IP \u5730\u5740\u4e0d\u53ef\u7528)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 14:40:22 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n\n")),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502")," \u7684\u54cd\u5e94\u5934\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"502")," \u54cd\u5e94\u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 500,\n                "body": "Fault Injection!\\n"\n            }\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 500 Internal Server Error\n< Date: Wed, 25 Nov 2020 14:50:20 GMT\n< Content-Type: text/plain; charset=utf-8\n< Transfer-Encoding: chunked\n< Connection: keep-alive\n< Server: APISIX/2.0\n<\nFault Injection!\n")),(0,a.kt)("p",null,"\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u7684\u54cd\u5e94\u5934\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Upstream")," \u5177\u6709\u591a\u8282\u70b9\uff0c\u5e76\u4e14\u6240\u6709\u8282\u70b9\u4e0d\u53ef\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.3:1": 1,\n        "127.0.0.2:1": 1,\n        "127.0.0.1:1": 1\n    },\n    "retries": 2,\n    "type": "roundrobin"\n}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream_id": "1"\n}\'\n')),(0,a.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 15:07:34 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502, 502, 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502, 502, 502")," \u7684\u54cd\u5e94\u5934\u3002"))}s.isMDXComponent=!0}}]);