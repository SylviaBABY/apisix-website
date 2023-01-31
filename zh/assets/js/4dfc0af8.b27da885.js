"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81105:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",keywords:["mTLS","API \u7f51\u5173","APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"},i=void 0,s={unversionedId:"tutorials/client-to-apisix-mtls",id:"tutorials/client-to-apisix-mtls",isDocsHomePage:!1,title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/tutorials/client-to-apisix-mtls.md",sourceDirName:"tutorials",slug:"/tutorials/client-to-apisix-mtls",permalink:"/zh/docs/apisix/next/tutorials/client-to-apisix-mtls",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/tutorials/client-to-apisix-mtls.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",keywords:["mTLS","API \u7f51\u5173","APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"},sidebar:"docs",previous:{title:"\u5065\u5eb7\u68c0\u67e5",permalink:"/zh/docs/apisix/next/tutorials/health-check"},next:{title:"API Gateway",permalink:"/zh/docs/apisix/next/terminology/api-gateway"}},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u751f\u6210\u8bc1\u4e66",id:"\u751f\u6210\u8bc1\u4e66",children:[]},{value:"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66",id:"\u5728-apisix-\u4e2d\u914d\u7f6e\u8bc1\u4e66",children:[]},{value:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531",id:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531",children:[]},{value:"\u6d4b\u8bd5\u9a8c\u8bc1",id:"\u6d4b\u8bd5\u9a8c\u8bc1",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"mTLS \u662f\u4e00\u79cd\u53cc\u5411\u8eab\u4efd\u8ba4\u8bc1\u7684\u65b9\u5f0f\u3002\u5982\u679c\u5728\u4f60\u7684\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u8981\u6c42\u53ea\u6709\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef\u624d\u53ef\u4ee5\u8bbf\u95ee\u670d\u52a1\u7aef\uff0c\u90a3\u4e48\u53ef\u4ee5\u542f\u7528 mTLS \u6765\u9a8c\u8bc1\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\uff0c\u4fdd\u8bc1\u670d\u52a1\u7aef API \u7684\u5b89\u5168\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e Apache APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u5305\u542b\u4ee5\u4e0b\u8fc7\u7a0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u8bc1\u4e66\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728 APISIX \u4e2d\u521b\u5efa\u5e76\u914d\u7f6e\u8def\u7531\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9a8c\u8bc1\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u4f7f\u6d4b\u8bd5\u7ed3\u679c\u66f4\u52a0\u6e05\u6670\uff0c\u672c\u6587\u63d0\u5230\u7684\u793a\u4f8b\u4f1a\u5411\u4e0a\u6e38\u4f20\u9012\u4e00\u4e9b\u6709\u5173\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"serial"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"fingerprint")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"common name"),"\u3002"),(0,r.kt)("h3",{id:"\u751f\u6210\u8bc1\u4e66"},"\u751f\u6210\u8bc1\u4e66"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u751f\u6210\u4e09\u4e2a\u6d4b\u8bd5\u8bc1\u4e66\uff0c\u5206\u522b\u662f\u6839\u8bc1\u4e66\u3001\u670d\u52a1\u5668\u8bc1\u4e66\u3001\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002\u53ea\u9700\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSSL")," \u751f\u6210\u6211\u4eec\u9700\u8981\u7684\u6d4b\u8bd5\u8bc1\u4e66\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6839\u8bc1\u4e66\nopenssl genrsa -out ca.key 2048\nopenssl req -new -sha256 -key ca.key -out ca.csr -subj "/CN=ROOTCA"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_ca -signkey ca.key -in ca.csr -out ca.cer\n\n# \u670d\u52a1\u5668\u8bc1\u4e66\nopenssl genrsa -out server.key 2048\n# \u6ce8\u610f\uff1aCN \u503c\u4e2d\u7684 `test.com` \u4e3a\u6211\u4eec\u8981\u6d4b\u8bd5\u7684\u57df\u540d/\u4e3b\u673a\u540d\u3002\nopenssl req -new -sha256 -key server.key -out server.csr -subj "/CN=test.com"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in server.csr -out server.cer\n\n# \u5ba2\u6237\u7aef\u8bc1\u4e66\nopenssl genrsa -out client.key 2048\nopenssl req -new -sha256 -key client.key  -out client.csr -subj "/CN=CLIENT"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in client.csr -out client.cer\n\n# \u5c06\u5ba2\u6237\u7aef\u8bc1\u4e66\u8f6c\u6362\u4e3a pkcs12 \u4f9b Windows \u4f7f\u7528\uff08\u53ef\u9009\uff09\nopenssl pkcs12 -export -clcerts -in client.cer -inkey client.key -out client.p12\n')),(0,r.kt)("h3",{id:"\u5728-apisix-\u4e2d\u914d\u7f6e\u8bc1\u4e66"},"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42 APISIX Admin API \u521b\u5efa\u4e00\u4e2a SSL \u8d44\u6e90\u5e76\u6307\u5b9a SNI\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8bc1\u4e66\u4e2d\u7684\u6362\u884c\u9700\u8981\u66ff\u6362\u4e3a\u5176\u8f6c\u4e49\u5b57\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/ssls/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sni": "test.com",\n    "cert": "<\u670d\u52a1\u5668\u8bc1\u4e66\u516c\u94a5>",\n    "key": "<\u670d\u52a1\u5668\u8bc1\u4e66\u79c1\u94a5>",\n    "client": {\n        "ca": "<\u5ba2\u6237\u7aef\u8bc1\u4e66\u516c\u94a5>"\n    }\n}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sni"),"\uff1a\u6307\u5b9a\u8bc1\u4e66\u7684\u57df\u540d\uff08CN\uff09\uff0c\u5f53\u5ba2\u6237\u7aef\u5c1d\u8bd5\u901a\u8fc7 TLS \u4e0e APISIX \u63e1\u624b\u65f6\uff0cAPISIX \u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientHello")," \u4e2d\u7684 SNI \u6570\u636e\u4e0e\u8be5\u5b57\u6bb5\u8fdb\u884c\u5339\u914d\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u8bc1\u4e66\u8fdb\u884c\u63e1\u624b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cert"),"\uff1a\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u516c\u94a5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),"\uff1a\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u79c1\u94a5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client.ca"),"\uff1a\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u516c\u94a5\u3002\u4e3a\u4e86\u6f14\u793a\u65b9\u4fbf\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u540c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"CA"),"\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531"},"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42 APISIX Admin API \u521b\u5efa\u4e00\u4e2a\u8def\u7531\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/anything",\n    "plugins": {\n        "proxy-rewrite": {\n            "headers": {\n                "X-Ssl-Client-Fingerprint": "$ssl_client_fingerprint",\n                "X-Ssl-Client-Serial": "$ssl_client_serial",\n                "X-Ssl-Client-S-DN": "$ssl_client_s_dn"\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org":1\n        },\n        "type":"roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"APISIX \u4f1a\u6839\u636e SNI \u548c\u4e0a\u4e00\u6b65\u521b\u5efa\u7684 SSL \u8d44\u6e90\u81ea\u52a8\u5904\u7406 TLS \u63e1\u624b\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u9700\u8981\u5728\u8def\u7531\u4e2d\u6307\u5b9a\u4e3b\u673a\u540d\uff08\u4f46\u4e5f\u53ef\u4ee5\u663e\u5f0f\u5730\u6307\u5b9a\u4e3b\u673a\u540d\uff09\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u4e0a\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u542f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\uff0c\u5b83\u5c06\u52a8\u6001\u5730\u66f4\u65b0\u8bf7\u6c42\u5934\u7684\u4fe1\u606f\uff0c\u793a\u4f8b\u4e2d\u53d8\u91cf\u503c\u7684\u6765\u6e90\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"NGINX")," \u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u5b83\u4eec\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_ssl_module.html#variables%E3%80%82"},"http://nginx.org/en/docs/http/ngx_http_ssl_module.html#variables\u3002")),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u9a8c\u8bc1"},"\u6d4b\u8bd5\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u57df\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"test.com")," \u4f5c\u4e3a\u6d4b\u8bd5\u57df\u540d\uff0c\u5728\u5f00\u59cb\u9a8c\u8bc1\u4e4b\u524d\uff0c\u6211\u4eec\u5fc5\u987b\u5148\u5c06\u6d4b\u8bd5\u57df\u540d\u6dfb\u52a0\u5230\u4f60\u7684 DNS \u6216\u8005\u672c\u5730\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6211\u4eec\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"hosts"),"\uff0c\u53ea\u662f\u60f3\u6d4b\u8bd5\u4e00\u4e0b\u7ed3\u679c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u76f4\u63a5\u8fdb\u884c\u6d4b\u8bd5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --resolve "test.com:9443:127.0.0.1" https://test.com:9443/anything -k --cert ./client.cer --key ./client.key\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u9700\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"hosts"),"\uff0c\u8bf7\u9605\u8bfb\u4e0b\u9762\u793a\u4f8b\uff08\u4ee5 Ubuntu \u4e3a\u4f8b\uff09\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 /etc/hosts \u6587\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# 127.0.0.1 localhost\n127.0.0.1 test.com\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u6d4b\u8bd5\u57df\u540d\u662f\u5426\u751f\u6548"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ping test.com\n\nPING test.com (127.0.0.1) 56(84) bytes of data.\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=1 ttl=64 time=0.028 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=2 ttl=64 time=0.037 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=3 ttl=64 time=0.036 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=4 ttl=64 time=0.031 ms\n^C\n--- test.com ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3080ms\nrtt min/avg/max/mdev = 0.028/0.033/0.037/0.003 ms\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://test.com:9443/anything -k --cert ./client.cer --key ./client.key\n")),(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\u4f60\u5c06\u6536\u5230\u4e0b\u9762\u7684\u54cd\u5e94\u4f53\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "test.com",\n    "User-Agent": "curl/7.81.0",\n    "X-Amzn-Trace-Id": "Root=1-63256343-17e870ca1d8f72dc40b2c5a9",\n    "X-Forwarded-Host": "test.com",\n    "X-Ssl-Client-Fingerprint": "c1626ce3bca723f187d04e3757f1d000ca62d651",\n    "X-Ssl-Client-S-Dn": "CN=CLIENT",\n    "X-Ssl-Client-Serial": "5141CC6F5E2B4BA31746D7DBFE9BA81F069CF970"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "127.0.0.1",\n  "url": "http://test.com/anything"\n}\n')))),(0,r.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5728\u793a\u4f8b\u4e2d\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u54cd\u5e94\u4f53\u4e2d\u5305\u542b\u4e0a\u6e38\u6536\u5230\u7684\u8bf7\u6c42\u4f53\uff0c\u5305\u542b\u4e86\u6b63\u786e\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u6709\u5173 Apache APISIX \u7684 mTLS \u529f\u80fd\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u9605\u8bfb\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/mtls"},"TLS \u53cc\u5411\u8ba4\u8bc1"),"\u3002"))}p.isMDXComponent=!0}}]);