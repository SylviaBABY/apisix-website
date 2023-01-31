"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69642:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"request-id",keywords:["APISIX","API \u7f51\u5173","Request ID"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002"},i=void 0,d={unversionedId:"plugins/request-id",id:"plugins/request-id",isDocsHomePage:!1,title:"request-id",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/request-id.md",sourceDirName:"plugins",slug:"/plugins/request-id",permalink:"/zh/docs/apisix/next/plugins/request-id",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/request-id.md",tags:[],version:"current",frontMatter:{title:"request-id",keywords:["APISIX","API \u7f51\u5173","Request ID"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX request-id \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u6765\u8ffd\u8e2a API \u8bf7\u6c42\u3002"},sidebar:"docs",previous:{title:"traffic-split",permalink:"/zh/docs/apisix/next/plugins/traffic-split"},next:{title:"proxy-control",permalink:"/zh/docs/apisix/next/plugins/proxy-control"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210 unique ID",id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210-unique-id",children:[]}]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:p};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\u901a\u8fc7 APISIX \u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4ee3\u7406\u6dfb\u52a0 unique ID \u7528\u4e8e\u8ffd\u8e2a API \u8bf7\u6c42\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u8bf7\u6c42\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"header_name")," \u5c5e\u6027\u7684\u8bf7\u6c42\u5934\uff0c\u8be5\u63d2\u4ef6\u5c06\u4e0d\u4f1a\u4e3a\u8bf7\u6c42\u6dfb\u52a0 unique ID\u3002"))),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"X-Request-Id"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"unique ID \u7684\u8bf7\u6c42\u5934\u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_in_response"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06 unique ID \u52a0\u5165\u8fd4\u56de\u5934\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"uuid"'),(0,r.kt)("td",{parentName:"tr",align:null},'["uuid", "snowflake", "nanoid"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684 unique ID \u751f\u6210\u7b97\u6cd5\u3002")))),(0,r.kt)("h3",{id:"\u4f7f\u7528-snowflake-\u7b97\u6cd5\u751f\u6210-unique-id"},"\u4f7f\u7528 snowflake \u7b97\u6cd5\u751f\u6210 unique ID"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8b66\u544a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," \u7b97\u6cd5\u65f6\uff0c\u8bf7\u786e\u4fdd APISIX \u6709\u6743\u9650\u5199\u5165 etcd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u51b3\u5b9a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"snowflake")," \u7b97\u6cd5\u65f6\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u672c\u6587\u6863\u4e86\u89e3\u914d\u7f6e\u7ec6\u8282\u3002\u56e0\u4e3a\u4e00\u65e6\u542f\u7528\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\u540e\uff0c\u5c31\u4e0d\u80fd\u968f\u610f\u8c03\u6574\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u751f\u6210\u91cd\u590d\u7684 ID\u3002")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"snowflake")," \u7b97\u6cd5\u652f\u6301\u7075\u6d3b\u914d\u7f6e\u6765\u6ee1\u8db3\u5404\u79cd\u9700\u6c42\uff0c\u53ef\u914d\u7f6e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c \u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"snowflake")," \u7b97\u6cd5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snowflake_epoc"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1609459200000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u65f6\u95f4\u6233\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"2021-01-01T00:00:00Z"),", \u53ef\u4ee5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"td"},"69 \u5e74"),"\u5230 ",(0,r.kt)("inlineCode",{parentName:"td"},"2090-09-07 15:47:35Z"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_bits"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u652f\u6301\u7684\u673a\u5668\uff08\u8fdb\u7a0b\uff09\u6570\u91cf\u3002 \u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"snowflake")," \u5b9a\u4e49\u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"workerIDs")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"datacenterIDs")," \u7684\u96c6\u5408\u5bf9\u5e94\uff0c\u63d2\u4ef6\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u5206\u914d\u4e00\u4e2a unique ID\u3002\u6700\u5927\u652f\u6301\u8fdb\u7a0b\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"pow(2, data_machine_bits)"),"\u3002\u5373\u5bf9\u4e8e\u9ed8\u8ba4\u503c ",(0,r.kt)("inlineCode",{parentName:"td"},"12 bits"),"\uff0c\u6700\u591a\u652f\u6301\u7684\u8fdb\u7a0b\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"4096"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequence_bits"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u8282\u70b9\u6bcf\u6beb\u79d2\u5185\u6700\u591a\u4ea7\u751f\u7684 ID \u6570\u91cf\u3002 \u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6beb\u79d2\u6700\u591a\u4ea7\u751f ",(0,r.kt)("inlineCode",{parentName:"td"},"1024")," \u4e2a ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd \u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"data_machine")," \u6ce8\u518c\u6709\u6548\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_machine_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd \u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"data_machine")," \u7eed\u7ea6\u95f4\u9694\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"snowflake")," \u7b97\u6cd5\uff0c\u8bf7\u52a1\u5fc5\u5728\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  request-id:\n    snowflake:\n      enable: true\n      snowflake_epoc: 1609459200000\n      data_machine_bits: 12\n      sequence_bits: 10\n      data_machine_ttl: 30\n      data_machine_interval: 10\n")),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"request-id")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "request-id": {\n            "include_in_response": true\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0cAPISIX \u5c06\u4e3a\u4f60\u7684\u6bcf\u4e2a\u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a unique ID\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4e2d\u5982\u679c\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801\uff0c\u4e14\u6bcf\u6b21\u8fd4\u56de\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Request-Id"),"\uff0c\u5219\u8868\u793a\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nX-Request-Id: fe32076a-d0a5-49a6-a361-6c244c1df956\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0}}]);