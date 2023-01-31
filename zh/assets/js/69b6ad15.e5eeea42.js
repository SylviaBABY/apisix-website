"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40377:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={title:"Plugin"},i=void 0,o={unversionedId:"terminology/plugin",id:"version-3.0.0-beta/terminology/plugin",isDocsHomePage:!1,title:"Plugin",description:"Plugin \u8868\u793a\u5c06\u5728 HTTP \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u63d2\u4ef6\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0.0-beta/terminology/plugin.md",sourceDirName:"terminology",slug:"/terminology/plugin",permalink:"/zh/docs/apisix/terminology/plugin",editUrl:null,tags:[],version:"3.0.0-beta",frontMatter:{title:"Plugin"},sidebar:"version-3.0.0-beta/docs",previous:{title:"Global rule",permalink:"/zh/docs/apisix/terminology/global-rule"},next:{title:"Plugin Config",permalink:"/zh/docs/apisix/terminology/plugin-config"}},p=[{value:"\u63d2\u4ef6\u901a\u7528\u914d\u7f6e",id:"\u63d2\u4ef6\u901a\u7528\u914d\u7f6e",children:[{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94",id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94",children:[]},{value:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7",id:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7",children:[]},{value:"\u52a8\u6001\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c",id:"\u52a8\u6001\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c",children:[]}]},{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",children:[]},{value:"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d",children:[]}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," \u8868\u793a\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42/\u54cd\u5e94\u751f\u547d\u5468\u671f\u671f\u95f4\u6267\u884c\u7684\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," \u914d\u7f6e\u53ef\u76f4\u63a5\u7ed1\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7ed1\u5b9a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin Config")," \u4e0a\u3002\u800c\u5bf9\u4e8e\u540c\u4e00\u4e2a\u63d2\u4ef6\u7684\u914d\u7f6e\uff0c\u53ea\u80fd\u6709\u4e00\u4efd\u662f\u6709\u6548\u7684\uff0c\u914d\u7f6e\u9009\u62e9\u4f18\u5148\u7ea7\u603b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin Config")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Service"),"\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\uff0c\u53ef\u4ee5\u58f0\u660e\u672c\u5730 APISIX \u8282\u70b9\u90fd\u652f\u6301\u54ea\u4e9b\u63d2\u4ef6\u3002\u8fd9\u662f\u4e2a\u767d\u540d\u5355\u673a\u5236\uff0c\u4e0d\u5728\u8be5\u767d\u540d\u5355\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u90fd\u5c06\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\u3002\u8fd9\u4e2a\u7279\u6027\u53ef\u7528\u4e8e\u4e34\u65f6\u5173\u95ed\u6216\u6253\u5f00\u7279\u5b9a\u63d2\u4ef6\uff0c\u5e94\u5bf9\u7a81\u53d1\u60c5\u51b5\u975e\u5e38\u6709\u6548\u3002\n\u5982\u679c\u4f60\u60f3\u5728\u73b0\u6709\u63d2\u4ef6\u7684\u57fa\u7840\u4e0a\u65b0\u589e\u63d2\u4ef6\uff0c\u6ce8\u610f\u9700\u8981\u62f7\u8d1d ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u7684\u63d2\u4ef6\u8282\u70b9\u5185\u5bb9\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684\u63d2\u4ef6\u8282\u70b9\u4e2d\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u63d2\u4ef6\u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5373\u4f7f\u88ab\u540c\u65f6\u7ed1\u5b9a\u5230\u591a\u4e2a\u4e0d\u540c\u5bf9\u8c61\u4e2d\uff08\u6bd4\u5982 Route \u6216 Service\uff09\u3002\n\u63d2\u4ef6\u8fd0\u884c\u5148\u540e\u987a\u5e8f\u662f\u6839\u636e\u63d2\u4ef6\u81ea\u8eab\u7684\u4f18\u5148\u7ea7\u6765\u51b3\u5b9a\u7684\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- \u8fd9\u4e2a\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u4e3a 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),(0,a.kt)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u53ef\u5b58\u653e\u4e8e Route \u6216 Service \u4e2d\uff0c\u952e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u503c\u662f\u5305\u542b\u591a\u4e2a\u63d2\u4ef6\u914d\u7f6e\u7684\u5bf9\u8c61\u3002\u5bf9\u8c61\u5185\u90e8\u7528\u63d2\u4ef6\u540d\u5b57\u4f5c\u4e3a key \u6765\u4fdd\u5b58\u4e0d\u540c\u63d2\u4ef6\u7684\u914d\u7f6e\u9879\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u6240\u793a\u7684\u914d\u7f6e\u4e2d\uff0c\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4e24\u79cd\u63d2\u4ef6\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),(0,a.kt)("p",null,"\u5e76\u4e0d\u662f\u6240\u6709\u63d2\u4ef6\u90fd\u6709\u5177\u4f53\u914d\u7f6e\u9879\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," \u4e0b\u662f\u6ca1\u6709\u4efb\u4f55\u5177\u4f53\u914d\u7f6e\u9879\uff0c\u8fd9\u65f6\u5019\u7528\u4e00\u4e2a\u7a7a\u7684\u5bf9\u8c61\u6807\u8bc6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u8bf7\u6c42\u56e0\u4e3a\u67d0\u4e2a\u63d2\u4ef6\u800c\u88ab\u62d2\u7edd\uff0c\u4f1a\u6709\u7c7b\u4f3c\u8fd9\u6837\u7684 warn \u65e5\u5fd7\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ip-restriction exits with http status code 403"),"\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u901a\u7528\u914d\u7f6e"},"\u63d2\u4ef6\u901a\u7528\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"_meta")," \u914d\u7f6e\u9879\u53ef\u4ee5\u5c06\u4e00\u4e9b\u901a\u7528\u7684\u914d\u7f6e\u5e94\u7528\u4e8e\u63d2\u4ef6\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disable"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528\u8be5\u63d2\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error_response"),(0,a.kt)("td",{parentName:"tr",align:null},"string/object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u8bf7\u6c42\u7684\u53c2\u6570\uff0c\u5728\u8fd0\u884c\u65f6\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c\u3002\u6b64\u914d\u7f6e\u7531\u4e00\u4e2a\u6216\u591a\u4e2a {var, operator, val} \u5143\u7d20\u7ec4\u6210\u5217\u8868\uff0c\u7c7b\u4f3c\uff1a{{var, operator, val}, {var, operator, val}, ...}}\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"td"},'{"arg_version", "==", "v2"}'),"\uff0c\u8868\u793a\u5f53\u524d\u8bf7\u6c42\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"td"},"version")," \u662f ",(0,a.kt)("inlineCode",{parentName:"td"},"v2"),"\u3002\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"var")," \u4e0e NGINX \u5185\u90e8\u81ea\u8eab\u53d8\u91cf\u547d\u540d\u662f\u4fdd\u6301\u4e00\u81f4\u3002\u64cd\u4f5c\u7b26\u7684\u5177\u4f53\u7528\u6cd5\u8bf7\u770b",(0,a.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr")," \u7684 operator-list \u90e8\u5206\u3002")))),(0,a.kt)("h3",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"disable")," \u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u65b0\u589e\u4e00\u4e2a\u5904\u4e8e\u7981\u7528\u72b6\u6001\u7684\u63d2\u4ef6\uff0c\u8bf7\u6c42\u4e0d\u4f1a\u7ecf\u8fc7\u8be5\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "proxy-rewrite": {\n        "_meta": {\n            "disable": true\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94"},"\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"error_response")," \u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u4efb\u610f\u63d2\u4ef6\u7684\u9519\u8bef\u54cd\u5e94\u914d\u7f6e\u6210\u4e00\u4e2a\u56fa\u5b9a\u7684\u503c\uff0c\u907f\u514d\u56e0\u4e3a\u63d2\u4ef6\u5185\u7f6e\u7684\u9519\u8bef\u54cd\u5e94\u4fe1\u606f\u800c\u5e26\u6765\u56f0\u6270\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u914d\u7f6e\u8868\u793a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-auth"),' \u63d2\u4ef6\u7684\u9519\u8bef\u54cd\u5e94\u81ea\u5b9a\u4e49\u4e3a \'{"message": "Missing credential in request"}\'\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jwt-auth": {\n        "_meta": {\n            "error_response": {\n                "message": "Missing credential in request"\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7"),(0,a.kt)("p",null,"\u6240\u6709\u63d2\u4ef6\u90fd\u6709\u9ed8\u8ba4\u4f18\u5148\u7ea7\uff0c\u4f46\u4f60\u4ecd\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," \u914d\u7f6e\u9879\u6765\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\uff0c\u4ece\u800c\u6539\u53d8\u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' {\n    "serverless-post-function": {\n        "_meta": {\n            "priority": 10000\n        },\n        "phase": "rewrite",\n        "functions" : ["return function(conf, ctx)\n                    ngx.say(\\"serverless-post-function\\");\n                    end"]\n    },\n    "serverless-pre-function": {\n        "_meta": {\n            "priority": -2000\n        },\n        "phase": "rewrite",\n        "functions": ["return function(conf, ctx)\n                    ngx.say(\\"serverless-pre-function\\");\n                    end"]\n    }\n}\n')),(0,a.kt)("p",null,"serverless-pre-function \u7684\u9ed8\u8ba4\u4f18\u5148\u7ea7\u662f 10000\uff0cserverless-post-function \u7684\u9ed8\u8ba4\u4f18\u5148\u7ea7\u662f -2000\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5148\u6267\u884c serverless-pre-function \u63d2\u4ef6\uff0c\u518d\u6267\u884c serverless-post-function \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u914d\u7f6e\u610f\u5473\u7740\u5c06 serverless-pre-function \u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a -2000\uff0cserverless-post-function \u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e3a 10000\u3002serverless-post-function \u63d2\u4ef6\u4f1a\u5148\u6267\u884c\uff0c\u518d\u6267\u884c serverless-pre-function \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u53ea\u4f1a\u5f71\u54cd\u63d2\u4ef6\u5b9e\u4f8b\u7ed1\u5b9a\u7684\u4e3b\u4f53\uff0c\u4e0d\u4f1a\u5f71\u54cd\u8be5\u63d2\u4ef6\u7684\u6240\u6709\u5b9e\u4f8b\u3002\u6bd4\u5982\u4e0a\u9762\u7684\u63d2\u4ef6\u914d\u7f6e\u5c5e\u4e8e\u8def\u7531 A \uff0c\u8def\u7531 B \u4e0a\u7684\u63d2\u4ef6 serverless-post-function \u548c serverless-post-function \u63d2\u4ef6\u6267\u884c\u987a\u5e8f\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd\uff0c\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u4e0d\u9002\u7528\u4e8e consumer \u4e0a\u914d\u7f6e\u7684\u63d2\u4ef6\u7684 rewrite \u9636\u6bb5\u3002\u8def\u7531\u4e0a\u914d\u7f6e\u7684\u63d2\u4ef6\u7684 rewrite \u9636\u6bb5\u5c06\u4f1a\u4f18\u5148\u8fd0\u884c\uff0c\u7136\u540e\u624d\u4f1a\u8fd0\u884c consumer \u4e0a\u9664 auth \u63d2\u4ef6\u4e4b\u5916\u7684\u5176\u4ed6\u63d2\u4ef6\u7684 rewrite \u9636\u6bb5\u3002")),(0,a.kt)("h3",{id:"\u52a8\u6001\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c"},"\u52a8\u6001\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u8def\u7531\u4e2d\u6307\u5b9a\u7684\u63d2\u4ef6\u90fd\u4f1a\u88ab\u6267\u884c\u3002\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," \u914d\u7f6e\u9879\u4e3a\u63d2\u4ef6\u6dfb\u52a0\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u901a\u8fc7\u8fc7\u6ee4\u5668\u7684\u6267\u884c\u7ed3\u679c\u63a7\u5236\u63d2\u4ef6\u662f\u5426\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u914d\u7f6e\u8868\u793a\uff0c\u53ea\u6709\u5f53\u8bf7\u6c42\u67e5\u8be2\u53c2\u6570\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," \u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u624d\u4f1a\u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "proxy-rewrite": {\n        "_meta": {\n            "filter": [\n                ["arg_version", "==", "v2"]\n            ]\n        },\n        "uri": "/anything"\n    }\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u8ff0\u914d\u7f6e\u521b\u5efa\u4e00\u6761\u5b8c\u6574\u7684\u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uri": "/get",\n    "plugins": {\n        "proxy-rewrite": {\n            "_meta": {\n                "filter": [\n                    ["arg_version", "==", "v2"]\n                ]\n            },\n            "uri": "/anything"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u5f53\u8bf7\u6c42\u4e2d\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u4e0d\u4f1a\u6267\u884c\uff0c\u8bf7\u6c42\u5c06\u88ab\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/get"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -v /dev/null http://127.0.0.1:9080/get -H"host:httpbin.org"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'< HTTP/1.1 200 OK\n......\n< Server: APISIX/2.15.0\n<\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.79.1",\n    "X-Amzn-Trace-Id": "Root=1-62eb6eec-46c97e8a5d95141e621e07fe",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1, 117.152.66.200",\n  "url": "http://httpbin.org/get"\n}\n')),(0,a.kt)("p",null,"\u5f53\u8bf7\u6c42\u4e2d\u643a\u5e26\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"version=v2")," \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u6267\u884c\uff0c\u8bf7\u6c42\u5c06\u88ab\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/anything"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -v /dev/null http://127.0.0.1:9080/get?version=v2 -H"host:httpbin.org"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'< HTTP/1.1 200 OK\n......\n< Server: APISIX/2.15.0\n<\n{\n  "args": {\n    "version": "v2"\n  },\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.79.1",\n    "X-Amzn-Trace-Id": "Root=1-62eb6f02-24a613b57b6587a076ef18b4",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "127.0.0.1, 117.152.66.200",\n  "url": "http://httpbin.org/anything?version=v2"\n}\n')),(0,a.kt)("h2",{id:"\u70ed\u52a0\u8f7d"},"\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"APISIX \u7684\u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u4e0d\u7ba1\u4f60\u662f\u65b0\u589e\u3001\u5220\u9664\u8fd8\u662f\u4fee\u6539\u63d2\u4ef6\uff0c\u90fd\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u8981\u901a\u8fc7 admin API \u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u8def\u7531\u89c4\u5219\u91cc\u914d\u7f6e\u4e86\u67d0\u4e2a\u63d2\u4ef6\uff08\u6bd4\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u91cc\u9762\u6dfb\u52a0\u4e86\u5b83\uff09\uff0c\u7136\u540e\u7981\u7528\u4e86\u8be5\u63d2\u4ef6\uff0c\u5728\u6267\u884c\u8def\u7531\u89c4\u5219\u7684\u65f6\u5019\u4f1a\u8df3\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"stand-alone-\u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"},"stand-alone \u6a21\u5f0f\u4e0b\u7684\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/stand-alone"},"stand alone \u6a21\u5f0f")," \u6587\u6863\u91cc\u5173\u4e8e\u914d\u7f6e\u63d2\u4ef6\u7684\u5185\u5bb9\u3002"))}u.isMDXComponent=!0}}]);