"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[32194],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(n),h=r,c=m["".concat(p,".").concat(h)]||m[h]||s[h]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24901:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"forward-auth"},i=void 0,o={unversionedId:"plugins/forward-auth",id:"version-2.12/plugins/forward-auth",isDocsHomePage:!1,title:"forward-auth",description:"Description",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/forward-auth.md",sourceDirName:"plugins",slug:"/plugins/forward-auth",permalink:"/zh/docs/apisix/2.12/plugins/forward-auth",editUrl:null,tags:[],version:"2.12",frontMatter:{title:"forward-auth"},sidebar:"version-2.12/docs",previous:{title:"opa",permalink:"/zh/docs/apisix/2.12/plugins/opa"},next:{title:"cors",permalink:"/zh/docs/apisix/2.12/plugins/cors"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Data Definition",id:"data-definition",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#description"},(0,r.kt)("strong",{parentName:"a"},"Description"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attributes"},(0,r.kt)("strong",{parentName:"a"},"Attributes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#data-definition"},(0,r.kt)("strong",{parentName:"a"},"Data Definition"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example"},(0,r.kt)("strong",{parentName:"a"},"Example")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," plugin implements a classic external authentication model. We can implement a custom error return or user redirection to the authentication page if the authentication fails."),(0,r.kt)("p",null,"Forward Auth cleverly moves the authentication and authorization logic to a dedicated external service, where the gateway forwards the user's request to the authentication service and blocks the original request, and replaces the result when the authentication service responds with a non-2xx status."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization service uri (eg. https://localhost/auth)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to verify the certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client")," request header that will be sent to the ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," service. When it is not set, no ",(0,r.kt)("inlineCode",{parentName:"td"},"client")," request headers are sent to the ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," service, except for those provided by APISIX (X-Forwarded-XXX).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," service response header that will be sent to the ",(0,r.kt)("inlineCode",{parentName:"td"},"upstream"),". When it is not set, will not forward the ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," service response header to the ",(0,r.kt)("inlineCode",{parentName:"td"},"upstream"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," response header that will be sent to the ",(0,r.kt)("inlineCode",{parentName:"td"},"client")," when authorize failure. When it is not set, will not forward the ",(0,r.kt)("inlineCode",{parentName:"td"},"authorization")," service response header to the ",(0,r.kt)("inlineCode",{parentName:"td"},"client"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization service HTTP call timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP keepalive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"keepalive idle timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection pool limit")))),(0,r.kt)("h2",{id:"data-definition"},"Data Definition"),(0,r.kt)("p",null,"The request headers in the following list will have APISIX generated and sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," service."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scheme"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Host"),(0,r.kt)("th",{parentName:"tr",align:null},"URI"),(0,r.kt)("th",{parentName:"tr",align:null},"Source IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Proto"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Method"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Host"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Uri"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-For")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"First, you need to setup an external authorization service. Here is an example of using Apache APISIX's serverless plugin to mock."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/auth\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/auth",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions": [\n                "return function (conf, ctx)\n                    local core = require(\\"apisix.core\\");\n                    local authorization = core.request.header(ctx, \\"Authorization\\");\n                    if authorization == \\"123\\" then\n                        core.response.exit(200);\n                    elseif authorization == \\"321\\" then\n                        core.response.set_header(\\"X-User-ID\\", \\"i-am-user\\");\n                        core.response.exit(200);\n                    else core.response.set_header(\\"Location\\", \\"http://example.com/auth\\");\n                        core.response.exit(403);\n                    end\n                end"\n            ]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Next, we create a route for testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X PUT http://127.0.0.1:9080/apisix/admin/routes/1\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\'\n    -d \'{\n    "uri": "/headers",\n    "plugins": {\n        "forward-auth": {\n            "uri": "http://127.0.0.1:9080/auth",\n            "request_headers": ["Authorization"],\n            "upstream_headers": ["X-User-ID"],\n            "client_headers": ["Location"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"We can perform the following three tests."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"request_headers")," Send Authorization header from ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"authorization")," service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/headers -H \'Authorization: 123\'\n{\n    "headers": {\n        "Authorization": "123",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"upstream_headers")," Send ",(0,r.kt)("inlineCode",{parentName:"li"},"authorization")," service response header to the ",(0,r.kt)("inlineCode",{parentName:"li"},"upstream"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/headers -H \'Authorization: 321\'\n{\n    "headers": {\n        "Authorization": "321",\n        "X-User-ID": "i-am-user",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"client_headers")," Send ",(0,r.kt)("inlineCode",{parentName:"li"},"authorization")," service response header to ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," when authorizing failed")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/headers\nHTTP/1.1 403 Forbidden\nLocation: http://example.com/auth\n")),(0,r.kt)("p",null,"Finally, you can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," plugin by removing it from the route."))}d.isMDXComponent=!0}}]);