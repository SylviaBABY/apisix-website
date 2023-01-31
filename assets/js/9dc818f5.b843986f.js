"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52907],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var h=a.createContext({}),p=function(t){var e=a.useContext(h),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(h.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,h=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),o=p(n),k=r,m=o["".concat(h,".").concat(k)]||o[k]||u[k]||l;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var c={};for(var h in e)hasOwnProperty.call(e,h)&&(c[h]=e[h]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},60444:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const l={title:"Health Check"},i=void 0,c={unversionedId:"health-check",id:"version-2.15/health-check",isDocsHomePage:!1,title:"Health Check",description:"Health Check of Apache APISIX is based on lua-resty-healthcheck.",source:"@site/docs-apisix_versioned_docs/version-2.15/health-check.md",sourceDirName:".",slug:"/health-check",permalink:"/docs/apisix/2.15/health-check",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"Health Check"},sidebar:"version-2.15/docs",previous:{title:"xRPC",permalink:"/docs/apisix/2.15/xrpc"},next:{title:"Router radixtree",permalink:"/docs/apisix/2.15/router-radixtree"}},h=[{value:"Health Checks for Upstream",id:"health-checks-for-upstream",children:[{value:"Configuration instructions",id:"configuration-instructions",children:[]},{value:"Configuration example",id:"configuration-example",children:[]}]}],p={toc:h};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"health-checks-for-upstream"},"Health Checks for Upstream"),(0,r.kt)("p",null,"Health Check of Apache APISIX is based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-healthcheck"},"lua-resty-healthcheck"),"."),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We only start the health check when the upstream is hit by a request.\nThere won't be any health check if an upstream is configured but isn't in used."),(0,r.kt)("li",{parentName:"ul"},"If there is no healthy node can be chosen, we will continue to access the upstream."),(0,r.kt)("li",{parentName:"ul"},"We won't start the health check when the upstream only has one node, as we will access\nit whether this unique node is healthy or not."),(0,r.kt)("li",{parentName:"ul"},"Active health check is required so that the unhealthy node can recover.")),(0,r.kt)("h3",{id:"configuration-instructions"},"Configuration instructions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration item"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value option"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http")," ",(0,r.kt)("inlineCode",{parentName:"td"},"https")," ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp")),(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of active check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeout period of the active check (unit: second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of targets to be checked at the same time during the active check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.http_path"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP request path that is actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.host"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"${upstream.node.host}"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname of the HTTP request actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"65535")),(0,r.kt)("td",{parentName:"tr",align:null},"${upstream.node.port}"),(0,r.kt)("td",{parentName:"tr",align:null},"The host port of the HTTP request that is actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.https_verify_certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check whether to check the SSL certificate of the remote host when HTTPS type checking is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.req_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check When using HTTP or HTTPS type checking, set additional request header information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 1")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) check interval (unit: second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 302]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) HTTP or HTTPS type check, the HTTP status code of the healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) determine the number of times a node is healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 1")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) check interval (unit: second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[429, 404, 500, 501, 502, 503, 504, 505]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) HTTP or HTTPS type check, the HTTP status code of the non-healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) HTTP or HTTPS type check, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.tcp_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) TCP type check, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.timeouts"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) to determine the number of timeouts for unhealthy nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node) HTTP or HTTPS type check, the HTTP status code of the healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive checks (healthy node) determine the number of times a node is healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[429, 500, 503]"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) HTTP or HTTPS type check, the HTTP status code of the non-healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.tcp_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) When TCP type is checked, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.timeouts"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive checks (unhealthy node) determine the number of timeouts for unhealthy nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) The number of times that the node is not healthy during HTTP or HTTPS type checking.")))),(0,r.kt)("h3",{id:"configuration-example"},"Configuration example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The health check status can be fetched via ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/control-api"},"Control API"),"."))}d.isMDXComponent=!0}}]);