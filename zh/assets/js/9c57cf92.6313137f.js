"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,f=d["".concat(u,".").concat(g)]||d[g]||s[g]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63050:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={title:"Getting started"},o=void 0,l={unversionedId:"getting-started",id:"version-0.1.0/getting-started",isDocsHomePage:!1,title:"Getting started",description:"This document explains how to use Python Runner",source:"@site/docs-apisix-python-plugin-runner_versioned_docs/version-0.1.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/python-plugin-runner/0.1.0/getting-started",editUrl:null,tags:[],version:"0.1.0",frontMatter:{title:"Getting started"},sidebar:"version-0.1.0/docs",next:{title:"Developer Guide",permalink:"/zh/docs/python-plugin-runner/0.1.0/developer-guide"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Launch",id:"launch",children:[{value:"Configuration Python Runner",id:"configuration-python-runner",children:[]},{value:"Log level and socket configuration (Optional)",id:"log-level-and-socket-configuration-optional",children:[]},{value:"Start or Restart APISIX",id:"start-or-restart-apisix",children:[]},{value:"Configure APISIX Routing Rule",id:"configure-apisix-routing-rule",children:[]}]}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document explains how to use Python Runner"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3.6+"),(0,i.kt)("li",{parentName:"ul"},"APISIX 2.7.0")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/apache/apisix-python-plugin-runner.git\n$ cd apisix-python-plugin-runner\n$ make install\n")),(0,i.kt)("h2",{id:"launch"},"Launch"),(0,i.kt)("h3",{id:"configuration-python-runner"},"Configuration Python Runner"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Development Mode")),(0,i.kt)("h4",{id:"run-apisix-python-runner"},"Run APISIX Python Runner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /path/to/apisix-python-plugin-runner\n$ APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock python3 apisix/main.py start\n")),(0,i.kt)("h4",{id:"modify-apisix-configuration-file"},"Modify APISIX configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ vim /path/to/apisix/conf/config.yaml\napisix:\n  admin_key:\n    - name: "admin"\n      key: edd1c9f034335f136f87ad84b625c8f1\n      role: admin\next-plugin:\n  path_for_test: /tmp/runner.sock\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Production Mode")),(0,i.kt)("h4",{id:"modify-apisix-configuration-file-1"},"Modify APISIX configuration file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ vim /path/to/apisix/conf/config.yaml\napisix:\n  admin_key:\n    - name: "admin"\n      key: edd1c9f034335f136f87ad84b625c8f1\n      role: admin\next-plugin:\n  cmd: [ "python3", "/path/to/apisix-python-plugin-runner/apisix/main.py", "start" ]\n')),(0,i.kt)("h3",{id:"log-level-and-socket-configuration-optional"},"Log level and socket configuration (Optional)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /path/to/apisix-python-plugin-runner/apisix/config.yaml\nsocket:\n  file: $env.APISIX_LISTEN_ADDRESS # Environment variable or absolute path\n\nlogging:\n  level: debug # error warn info debug\n")),(0,i.kt)("h3",{id:"start-or-restart-apisix"},"Start or Restart APISIX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /path/to/apisix\n# Start or Restart\n$ ./bin/apisix [ start | restart ]\n")),(0,i.kt)("h3",{id:"configure-apisix-routing-rule"},"Configure APISIX Routing Rule"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        { "name": "stop", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://127.0.0.1:9080/get -i\nHTTP/1.1 200 OK\nDate: Fri, 13 Aug 2021 13:39:18 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nhost: 127.0.0.1:9080\naccept: */*\nuser-agent: curl/7.64.1\nX-Resp-A6-Runner: Python\nServer: APISIX/2.7\n\nHello, Python Runner of APISIX\n")))}c.isMDXComponent=!0}}]);