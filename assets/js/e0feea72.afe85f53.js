"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42050:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"proxy-control",keywords:["APISIX","API Gateway","Proxy Control"],description:"This document contains information about the Apache APISIX proxy-control Plugin, you can use it to control the behavior of the NGINX proxy dynamically."},i=void 0,l={unversionedId:"plugins/proxy-control",id:"version-3.0.0-beta/plugins/proxy-control",isDocsHomePage:!1,title:"proxy-control",description:"This document contains information about the Apache APISIX proxy-control Plugin, you can use it to control the behavior of the NGINX proxy dynamically.",source:"@site/docs-apisix_versioned_docs/version-3.0.0-beta/plugins/proxy-control.md",sourceDirName:"plugins",slug:"/plugins/proxy-control",permalink:"/docs/apisix/plugins/proxy-control",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"proxy-control",keywords:["APISIX","API Gateway","Proxy Control"],description:"This document contains information about the Apache APISIX proxy-control Plugin, you can use it to control the behavior of the NGINX proxy dynamically."},sidebar:"version-3.0.0-beta/docs",previous:{title:"request-id",permalink:"/docs/apisix/plugins/request-id"},next:{title:"client-control",permalink:"/docs/apisix/plugins/client-control"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The proxy-control Plugin dynamically controls the behavior of the NGINX proxy."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This Plugin requires APISIX to run on ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/FAQ#how-do-i-build-the-apisix-base-environment"},"APISIX-Base"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"apisix-build-tools")," for more info."))),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request_buffering"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the Plugin dynamically sets the ",(0,a.kt)("a",{parentName:"td",href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering"},(0,a.kt)("inlineCode",{parentName:"a"},"proxy_request_buffering"))," directive.")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"The example below enables the Plugin on a specific Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/upload",\n    "plugins": {\n        "proxy-control": {\n            "request_buffering": false\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"The example below shows the use case of uploading a big file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/upload -d @very_big_file\n")),(0,a.kt)("p",null,'It\'s expected to not find a message "a client request body is buffered to a temporary file" in the error log.'),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-control")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/upload",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);