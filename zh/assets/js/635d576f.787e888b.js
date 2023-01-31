"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),s=a,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36436:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"redirect",keywords:["APISIX","Plugin","Redirect"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `redirect` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/redirect",id:"version-2.14/plugins/redirect",isDocsHomePage:!1,title:"redirect",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `redirect` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.14/plugins/redirect.md",sourceDirName:"plugins",slug:"/plugins/redirect",permalink:"/zh/docs/apisix/2.14/plugins/redirect",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"redirect",keywords:["APISIX","Plugin","Redirect"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `redirect` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-2.14/docs",previous:{title:"batch-requests",permalink:"/zh/docs/apisix/2.14/plugins/batch-requests"},next:{title:"echo",permalink:"/zh/docs/apisix/2.14/plugins/echo"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u914d\u7f6e URI \u91cd\u5b9a\u5411\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"http_to_https"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u5e76\u4e14\u8bf7\u6c42\u662f HTTP \u65f6\uff0c\u5b83\u5c06\u88ab\u91cd\u5b9a\u5411\u5177\u6709\u76f8\u540c URI \u548c 301 \u72b6\u6001\u7801\u7684 HTTPS\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8981\u91cd\u5b9a\u5411\u5230\u7684 URI\uff0c\u53ef\u4ee5\u5305\u542b NGINX \u53d8\u91cf\u3002\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"/test/index.htm"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"$uri/index.html"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"${uri}/index.html"),"\u3002\u5982\u679c\u4f60\u5f15\u5165\u4e86\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u53d8\u91cf\uff0c\u5b83\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u662f\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a\u7a7a\u53d8\u91cf\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u6765\u81ea\u5ba2\u6237\u7aef\u7684 URL \u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5e76\u91cd\u5b9a\u5411\u3002\u5f53\u5339\u914d\u6210\u529f\u540e\u4f7f\u7528\u6a21\u677f\u66ff\u6362\u53d1\u9001\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\uff0c\u5982\u679c\u672a\u5339\u914d\u6210\u529f\u4f1a\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 URI \u8f6c\u53d1\u81f3\u4e0a\u6e38\u3002 \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u4e0d\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\u3002\u4f8b\u5982\uff1a",'["^/iresty/(.)/(.)/(.*)","/$1-$2-$3"]'," \u7b2c\u4e00\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 URI \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6210\u529f\u540e\u53d1\u9001\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\u7684 URI \u6a21\u677f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ret_code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"302"),(0,a.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP \u54cd\u5e94\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"encode_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5bf9\u8fd4\u56de\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"Location")," Header \u6309\u7167 ",(0,a.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"RFC3986"),"\u7684\u7f16\u7801\u683c\u5f0f\u8fdb\u884c\u7f16\u7801\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"append_query_string"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u539f\u59cb\u8bf7\u6c42\u4e2d\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"td"},"Location")," Header\u3002\u5982\u679c\u5df2\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u5df2\u7ecf\u5305\u542b\u67e5\u8be2\u5b57\u7b26\u4e32\uff0c\u5219\u8bf7\u6c42\u4e2d\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u5c06\u9644\u52a0\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"td"},"&"),"\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5904\u7406\u8fc7\u67e5\u8be2\u5b57\u7b26\u4e32\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 NGINX \u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"td"},"$request_uri"),"\uff09\uff0c\u8bf7\u4e0d\u8981\u518d\u4f7f\u7528\u8be5\u53c2\u6570\u4ee5\u907f\u514d\u91cd\u590d\u3002")))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"http_to_https"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"regex_uri")," \u53ea\u80fd\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"li"},"http_to_https")," \u65f6\uff0c\u91cd\u5b9a\u5411 URL \u4e2d\u7684\u7aef\u53e3\u5c06\u6309\u5982\u4e0b\u987a\u5e8f\u9009\u53d6\u4e00\u4e2a\u503c\uff08\u6309\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u6392\u5217\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ece\u914d\u7f6e\u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),"\uff09\u4e2d\u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"plugin_attr.redirect.https_port"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix.ssl")," \u5904\u4e8e\u5f00\u542f\u72b6\u6001\uff0c\u5148\u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix.ssl.listen_port"),"\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u518d\u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix.ssl.listen")," \u5e76\u4ece\u4e2d\u968f\u673a\u9009\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"port"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 443 \u4f5c\u4e3a\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"https port"),"\u3002")))))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {\n        "redirect": {\n            "uri": "/test/default.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u65b0\u7684 URI \u4e2d\u4f7f\u7528 NGINX \u5185\u7f6e\u7684\u4efb\u610f\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test",\n    "plugins": {\n        "redirect": {\n            "uri": "$uri/index.html",\n            "ret_code": 301\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/test/index.html -i\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 301 Moved Permanently\nDate: Wed, 23 Oct 2019 13:48:23 GMT\nContent-Type: text/html\nContent-Length: 166\nConnection: keep-alive\nLocation: /test/default.html\n...\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u8fd4\u56de\u7ed3\u679c\uff0c\u53ef\u4ee5\u770b\u5230\u54cd\u5e94\u7801\u548c\u54cd\u5e94\u5934\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," \u53c2\u6570\uff0c\u5b83\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5c06 HTTP \u91cd\u5b9a\u5411\u5230 HTTPS\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "redirect": {\n            "http_to_https": true\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u4f8b\u5b50\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -i\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP/1.1 301 Moved Permanently\n...\nLocation: https://127.0.0.1:9443/hello\n...\n")),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);