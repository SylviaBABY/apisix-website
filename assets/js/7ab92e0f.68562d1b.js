"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[24744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57359:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"proxy-rewrite",keywords:["APISIX","Plugin","Proxy Rewrite","proxy-rewrite"],description:"This document contains information about the Apache APISIX proxy-rewrite Plugin."},i=void 0,o={unversionedId:"plugins/proxy-rewrite",id:"version-2.15/plugins/proxy-rewrite",isDocsHomePage:!1,title:"proxy-rewrite",description:"This document contains information about the Apache APISIX proxy-rewrite Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.15/plugins/proxy-rewrite.md",sourceDirName:"plugins",slug:"/plugins/proxy-rewrite",permalink:"/docs/apisix/2.15/plugins/proxy-rewrite",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"proxy-rewrite",keywords:["APISIX","Plugin","Proxy Rewrite","proxy-rewrite"],description:"This document contains information about the Apache APISIX proxy-rewrite Plugin."},sidebar:"version-2.15/docs",previous:{title:"response-rewrite",permalink:"/docs/apisix/2.15/plugins/response-rewrite"},next:{title:"grpc-transcode",permalink:"/docs/apisix/2.15/plugins/grpc-transcode"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," Plugin rewrites Upstream proxy information such as ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scheme"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},'"http"'),(0,a.kt)("td",{parentName:"tr",align:null},'["http", "https"]'),(0,a.kt)("td",{parentName:"tr",align:null},"New upstream protocol scheme. This option is deprecated. Instead, it is recommended to set the ",(0,a.kt)("inlineCode",{parentName:"td"},"scheme")," field in the Upstream.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"New Upstream forwarding address. Value supports ",(0,a.kt)("a",{parentName:"td",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html"},"Nginx variables"),". For example, ",(0,a.kt)("inlineCode",{parentName:"td"},"$arg_name"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS","MKCOL", "COPY", "MOVE", "PROPFIND", "PROPFIND","LOCK", "UNLOCK", "PATCH", "TRACE"]'),(0,a.kt)("td",{parentName:"tr",align:null},"Rewrites the HTTP method.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"New upstream forwarding address. Regular expressions can be used to match the URL from client. If it matches, the URL template is forwarded to the Upstream otherwise, the URL from the client is forwarded. When both ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," are configured, ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," is used first. For example, ",(0,a.kt)("inlineCode",{parentName:"td"},'[" ^/iresty/(.*)/(.*)/(.*)", "/$1-$2-$3"]'),". Here, the first element is the regular expression to match and the second element is the URL template forwarded to the Upstream.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"New Upstream host address.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"headers"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"New Upstream headers. Headers are overwritten if they are already present otherwise, they are added to the present headers. To remove a header, set the header value to an empty string. The values in the header can contain Nginx variables like ",(0,a.kt)("inlineCode",{parentName:"td"},"$remote_addr")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"$client_addr"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"use_real_request_uri_unsafe"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Use real_request_uri (original $request_uri in nginx) to bypass URI normalization. ",(0,a.kt)("strong",{parentName:"td"},"Enabling this is considered unsafe as it bypasses all URI normalization steps"),".")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"The example below enables the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," Plugin on a specific Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/home.html",\n            "scheme": "http",\n            "host": "iresty.com",\n            "headers": {\n                "X-Api-Version": "v1",\n                "X-Api-Engine": "apisix",\n                "X-Api-useless": ""\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Once you have enabled the Plugin as mentioned below, you can test the Route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:9080/test/index.html\n")),(0,a.kt)("p",null,"Once you send the request, you can check the Upstream ",(0,a.kt)("inlineCode",{parentName:"p"},"access.log")," for its output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"127.0.0.1 - [26/Sep/2019:10:52:20 +0800] iresty.com GET /test/home.html HTTP/1.1 200 38 - curl/7.29.0 - 0.000 199 107\n")),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);