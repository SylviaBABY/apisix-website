"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42094],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75379:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={title:"consumer-restriction",keywords:["APISIX","Plugin","Consumer restriction","consumer-restriction"],description:"This document contains information about the Apache APISIX consumer-restriction Plugin."},l=void 0,s={unversionedId:"plugins/consumer-restriction",id:"version-2.14/plugins/consumer-restriction",isDocsHomePage:!1,title:"consumer-restriction",description:"This document contains information about the Apache APISIX consumer-restriction Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.14/plugins/consumer-restriction.md",sourceDirName:"plugins",slug:"/plugins/consumer-restriction",permalink:"/docs/apisix/2.14/plugins/consumer-restriction",editUrl:null,tags:[],version:"2.14",frontMatter:{title:"consumer-restriction",keywords:["APISIX","Plugin","Consumer restriction","consumer-restriction"],description:"This document contains information about the Apache APISIX consumer-restriction Plugin."},sidebar:"version-2.14/docs",previous:{title:"referer-restriction",permalink:"/docs/apisix/2.14/plugins/referer-restriction"},next:{title:"csrf",permalink:"/docs/apisix/2.14/plugins/csrf"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Restricting by <code>consumer_name</code>",id:"restricting-by-consumer_name",children:[]},{value:"Restricting by <code>allowed_by_methods</code>",id:"restricting-by-allowed_by_methods",children:[]},{value:"Restricting by <code>service_id</code>",id:"restricting-by-service_id",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:o};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin allows users to set access restrictions based on Consumer, Route, or Service."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,r.kt)("td",{parentName:"tr",align:null},'["consumer_name", "service_id", "route_id"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Type of object to base the restriction on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of objects to whitelist. Has a higher priority than ",(0,r.kt)("inlineCode",{parentName:"td"},"allowed_by_methods"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blacklist"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of objects to blacklist. Has a higher priority than ",(0,r.kt)("inlineCode",{parentName:"td"},"whitelist"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code returned when the request is rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Message returned when the request is rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowed_by_methods"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE", "PURGE"]'),(0,r.kt)("td",{parentName:"tr",align:null},"List of allowed HTTP methods for a Consumer.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The different values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute have these meanings:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"consumer_name"),": Username of the Consumer to restrict access to a Route or a Service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service_id"),": ID of the Service to restrict access from a Consumer. Need to be used with an Authentication Plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"route_id"),": ID of the Route to restrict access from a Consumer.")))),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("h3",{id:"restricting-by-consumer_name"},"Restricting by ",(0,r.kt)("inlineCode",{parentName:"h3"},"consumer_name")),(0,r.kt)("p",null,"The example below shows how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin on a Route to restrict specific consumers."),(0,r.kt)("p",null,"You can first create two consumers ",(0,r.kt)("inlineCode",{parentName:"p"},"jack1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jack2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack1",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2019",\n            "password": "123456"\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "username": "jack2",\n    "plugins": {\n        "basic-auth": {\n            "username":"jack2020",\n            "password": "123456"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Next, you can configure the Plugin to the Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "whitelist": [\n                "jack1"\n            ]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, this configuration will only allow ",(0,r.kt)("inlineCode",{parentName:"p"},"jack1")," to access your Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"And requests from ",(0,r.kt)("inlineCode",{parentName:"p"},"jack2")," are blocked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2020:123456 http://127.0.0.1:9080/index.html -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,r.kt)("h3",{id:"restricting-by-allowed_by_methods"},"Restricting by ",(0,r.kt)("inlineCode",{parentName:"h3"},"allowed_by_methods")),(0,r.kt)("p",null,"The example below configures the Plugin to a Route to restrict ",(0,r.kt)("inlineCode",{parentName:"p"},"jack1")," to only make ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST"]\n            }]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now if ",(0,r.kt)("inlineCode",{parentName:"p"},"jack1")," makes a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request, the access is restricted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,r.kt)("p",null,"To also allow ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests, you can update the Plugin configuration and it would be reloaded automatically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {},\n        "consumer-restriction": {\n            "allowed_by_methods":[{\n                "user": "jack1",\n                "methods": ["POST","GET"]\n            }]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, if a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request is made:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -u jack2019:123456 http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("h3",{id:"restricting-by-service_id"},"Restricting by ",(0,r.kt)("inlineCode",{parentName:"h3"},"service_id")),(0,r.kt)("p",null,"To restrict a Consumer from accessing a Service, you also need to use an Authentication Plugin. The example below uses the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.14/plugins/key-auth"},"key-auth")," Plugin."),(0,r.kt)("p",null,"First, you can create two services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 001"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "desc": "new service 002"\n}\'\n')),(0,r.kt)("p",null,"Then configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin on the Consumer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin and the ",(0,r.kt)("inlineCode",{parentName:"p"},"service_id")," to whitelist."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "new_consumer",\n    "plugins": {\n    "key-auth": {\n        "key": "auth-jack"\n    },\n    "consumer-restriction": {\n           "type": "service_id",\n            "whitelist": [\n                "1"\n            ],\n            "rejected_code": 403\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Finally, you can configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin and bind the service to the Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 1,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, if you test the Route, you should be able to access the Service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'apikey: auth-jack' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"Now, if the Route is configured to the Service with ",(0,r.kt)("inlineCode",{parentName:"p"},"service_id")," ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "service_id": 2,\n    "plugins": {\n         "key-auth": {\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Since the Service is not in the whitelist, it cannot be accessed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'apikey: auth-jack' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"The service_id is forbidden."}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "plugins": {\n        "basic-auth": {}\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);