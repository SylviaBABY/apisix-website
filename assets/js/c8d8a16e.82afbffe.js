"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75616:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"uri-blocker",keywords:["APISIX","API Gateway","URI Blocker"],description:"This document contains information about the Apache APISIX uri-blocker Plugin."},i=void 0,o={unversionedId:"plugins/uri-blocker",id:"version-3.0.0-beta/plugins/uri-blocker",isDocsHomePage:!1,title:"uri-blocker",description:"This document contains information about the Apache APISIX uri-blocker Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.0.0-beta/plugins/uri-blocker.md",sourceDirName:"plugins",slug:"/plugins/uri-blocker",permalink:"/docs/apisix/plugins/uri-blocker",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"uri-blocker",keywords:["APISIX","API Gateway","URI Blocker"],description:"This document contains information about the Apache APISIX uri-blocker Plugin."},sidebar:"version-3.0.0-beta/docs",previous:{title:"cors",permalink:"/docs/apisix/plugins/cors"},next:{title:"ip-restriction",permalink:"/docs/apisix/plugins/ip-restriction"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," Plugin intercepts user requests with a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"block_rules"),"."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"block_rules"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"List of regex filter rules. If the request URI hits any one of the rules, the response code is set to the ",(0,a.kt)("inlineCode",{parentName:"td"},"rejected_code")," and the user request is terminated. For example, ",(0,a.kt)("inlineCode",{parentName:"td"},'["root.exe", "root.m+"]'),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP status code returned when the request URI hits any of the ",(0,a.kt)("inlineCode",{parentName:"td"},"block_rules"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP response body returned when the request URI hits any of the ",(0,a.kt)("inlineCode",{parentName:"td"},"block_rules"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"case_insensitive"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ignores the case when matching request URI.")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"The example below enables the ",(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," Plugin on a specific Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "plugins": {\n        "uri-blocker": {\n            "block_rules": ["root.exe", "root.m+"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Once you have configured the Plugin as shown above, you can try accessing the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/root.exe?a=a\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\nDate: Wed, 17 Jun 2020 13:55:41 GMT\nContent-Type: text/html; charset=utf-8\nContent-Length: 150\nConnection: keep-alive\nServer: APISIX web server\n\n... ...\n")),(0,a.kt)("p",null,"You can also set a ",(0,a.kt)("inlineCode",{parentName:"p"},"rejected_msg")," and it will be added to the response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\nDate: Wed, 17 Jun 2020 13:55:41 GMT\nContent-Type: text/html; charset=utf-8\nContent-Length: 150\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"access is not allowed"}\n')),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"uri-blocker")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);