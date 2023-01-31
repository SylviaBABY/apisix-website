"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63134],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=i.createContext({}),u=function(n){var e=i.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return i.createElement(a.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,a=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=u(t),g=r,f=d["".concat(a,".").concat(g)]||d[g]||s[g]||o;return t?i.createElement(f,c(c({ref:e},p),{},{components:t})):i.createElement(f,c({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l.mdxType="string"==typeof n?n:r,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return i.createElement.apply(null,c)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47864:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=t(87462),r=(t(67294),t(3905));const o={title:"Plugin Config"},c=void 0,l={unversionedId:"architecture-design/plugin-config",id:"version-2.12/architecture-design/plugin-config",isDocsHomePage:!1,title:"Plugin Config",description:"To reuse common plugin configurations, you can extract them into a plugin config and\nbind it with a route directly.",source:"@site/docs-apisix_versioned_docs/version-2.12/architecture-design/plugin-config.md",sourceDirName:"architecture-design",slug:"/architecture-design/plugin-config",permalink:"/docs/apisix/2.12/architecture-design/plugin-config",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"Plugin Config"},sidebar:"version-2.12/docs",previous:{title:"Global rule",permalink:"/docs/apisix/2.12/architecture-design/global-rule"},next:{title:"Router",permalink:"/docs/apisix/2.12/architecture-design/router"}},a=[],u={toc:a};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To reuse common plugin configurations, you can extract them into a plugin config and\nbind it with a route directly."),(0,r.kt)("p",null,"For instance, you can do something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# create a plugin config\n$ curl http://127.0.0.1:9080/apisix/admin/plugin_configs/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "desc": "blah",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\'\n\n# bind it to route\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"When we can't find the corresponding plugin config with the id, the requests hit the route will be terminated with HTTP status code 503."),(0,r.kt)("p",null,"When a route already have ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," field configured, the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," in the plugin config\nwill be merged into it. The same plugin in the plugin config will override one in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),"."),(0,r.kt)("p",null,"For example, when we configure a plugin config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "desc": "I am plugin_config 1",\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "plugin_config_id": 1,\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 20,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"is equal to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "uris": ["/index.html"],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n    "plugins": {\n        "ip-restriction": {\n            "whitelist": [\n                "127.0.0.0/24",\n                "113.74.26.106"\n            ]\n        },\n        "proxy-rewrite": {\n            "uri": "/test/add",\n            "scheme": "https",\n            "host": "apisix.iresty.com"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);