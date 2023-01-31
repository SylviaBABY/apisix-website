"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3789:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Annotations"},o=void 0,s={unversionedId:"concepts/annotations",id:"version-1.2.0/concepts/annotations",isDocsHomePage:!1,title:"Annotations",description:"This document describes all supported annotations and their functions. You can add these annotations in the Ingress resources so that advanced features in Apache APISIX can be combined into Ingress resources.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.2.0/concepts/annotations.md",sourceDirName:"concepts",slug:"/concepts/annotations",permalink:"/zh/docs/ingress-controller/1.2.0/concepts/annotations",editUrl:null,tags:[],version:"1.2.0",frontMatter:{title:"Annotations"}},p=[{value:"CORS Support",id:"cors-support",children:[]},{value:"Allowlist Source Range",id:"allowlist-source-range",children:[]},{value:"Blocklist Source Range",id:"blocklist-source-range",children:[]},{value:"Rewrite Target",id:"rewrite-target",children:[]},{value:"Redirect",id:"redirect",children:[]}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes all supported annotations and their functions. You can add these annotations in the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," resources so that advanced features in ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," can be combined into ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress"},"Ingress")," resources."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note all keys and values of annotations are strings, so boolean value like ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," should be represented as ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"'),".")),(0,r.kt)("h2",{id:"cors-support"},"CORS Support"),(0,r.kt)("p",null,"In order to enable ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS"),", the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/enable-cors")," should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"true"'),", also, there are some other annotations to customize the cors behavior."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-origin"))),(0,r.kt)("p",null,"This annotation controls which origins will be allowed, multiple origins join together with ",(0,r.kt)("inlineCode",{parentName:"p"},","),", for instance: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://foo.com,http://bar.com:8080")),(0,r.kt)("p",null,"Default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all origins are allowed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-headers"))),(0,r.kt)("p",null,"This annotation controls which headers are accepted, multiple headers join together with ",(0,r.kt)("inlineCode",{parentName:"p"},","),"."),(0,r.kt)("p",null,"Default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all headers are accepted."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/cors-allow-methods"))),(0,r.kt)("p",null,"This annotation controls which methods are accepted, multiple methods join together with ",(0,r.kt)("inlineCode",{parentName:"p"},","),"."),(0,r.kt)("p",null,"Default is ",(0,r.kt)("inlineCode",{parentName:"p"},'"*"'),", which means all HTTP methods are accepted."),(0,r.kt)("h2",{id:"allowlist-source-range"},"Allowlist Source Range"),(0,r.kt)("p",null,"You can specify the allowed client IP addresses or nets by the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range"),", multiple IP addresses or nets join together with ",(0,r.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/allowlist-source-range: 10.0.5.0/16,127.0.0.1,192.168.3.98"),". Default value is ",(0,r.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,r.kt)("h2",{id:"blocklist-source-range"},"Blocklist Source Range"),(0,r.kt)("p",null,"You can specify the denied client IP addresses or nets by the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range"),", multiple IP addresses or nets join together with ",(0,r.kt)("inlineCode",{parentName:"p"},","),",\nfor instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/blocklist-source-range: 127.0.0.1,172.17.0.0/16"),". Default value is ",(0,r.kt)("em",{parentName:"p"},"empty"),", which means the sources are not limited."),(0,r.kt)("h2",{id:"rewrite-target"},"Rewrite Target"),(0,r.kt)("p",null,"You can rewrite requests by specifying the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex"),"."),(0,r.kt)("p",null,"The annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," controls where the request will be forwarded to."),(0,r.kt)("p",null,"If you want to use regex and match groups, use annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template"),". The first annotation contains the matching rule (regex), the second one contains the rewrite rule."),(0,r.kt)("p",null,"Both annotations must be used together, otherwise they will be ignored."),(0,r.kt)("p",null,"For example, we have an Ingress matches prefix path ",(0,r.kt)("inlineCode",{parentName:"p"},"/app"),", and we set ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/(.*)")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/$1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/rewrite-target-regex: "/app/(.*)"\n    k8s.apisix.apache.org/rewrite-target-regex-template: "/$1"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /app\n        pathType: Prefix\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')),(0,r.kt)("p",null,"With this Ingress, any requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"/app")," prefix will be forwarded to backend without the ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/")," part, e.g. request ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/ip")," will be forwarded to ",(0,r.kt)("inlineCode",{parentName:"p"},"/ip"),"."),(0,r.kt)("h2",{id:"redirect"},"Redirect"),(0,r.kt)("p",null,"You can use the following annotations to control the redirect behavior."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.apisix.apache.org/http-to-https"))),(0,r.kt)("p",null,"If this annotation set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the request is HTTP, it will be automatically redirected to HTTPS with 301 response code,\nand the URI will keep the same as client request."),(0,r.kt)("p",null,"For example, the following Ingress, if we set ",(0,r.kt)("inlineCode",{parentName:"p"},'k8s.apisix.apache.org/http-to-https: "true"'),". The client will get a response with 301 status code, and the response header ",(0,r.kt)("inlineCode",{parentName:"p"},"Location"),"  will be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://httpbin.org/sample"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/http-to-https: "true"\n  name: ingress-v1\nspec:\n  rules:\n  - host: httpbin.org\n    http:\n      paths:\n      - path: /sample\n        pathType: Exact\n        backend:\n          service:\n            name: httpbin\n            port:\n              number: 80\n')))}c.isMDXComponent=!0}}]);