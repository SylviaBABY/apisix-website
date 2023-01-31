"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92769:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Upgrade Guide"},i=void 0,p={unversionedId:"upgrade",id:"version-1.5.0/upgrade",isDocsHomePage:!1,title:"Upgrade Guide",description:"Apache APISIX Ingress project is a continuously actively developed project.\nIn order to make it better, some broken changes will be added when the new version is released.\nFor users, how to upgrade safely becomes very important.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/docs/ingress-controller/1.5.0/upgrade",editUrl:null,tags:[],version:"1.5.0",frontMatter:{title:"Upgrade Guide"}},c=[{value:"Validate Compatibility",id:"validate-compatibility",children:[]}],l={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"validate-compatibility"},"Validate Compatibility"),(0,a.kt)("p",null,"Apache APISIX Ingress project is a continuously actively developed project.\nIn order to make it better, some broken changes will be added when the new version is released.\nFor users, how to upgrade safely becomes very important."),(0,a.kt)("p",null,"The policy directory of this project contains these compatibility check strategies,\nyou can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},(0,a.kt)("inlineCode",{parentName:"a"},"conftest"))," tool to check the compatibility."),(0,a.kt)("p",null,"Here's a quick example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpbin-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /ip\n     exprs:\n     - subject:\n         scope: Header\n         name: X-Foo\n       op: Equal\n       value: bar\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n")),(0,a.kt)("p",null,"It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.http.backend")," field that has been removed.\nSave as httpbin-route.yaml."),(0,a.kt)("p",null,"Use conftest for compatibility check."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ conftest test httpbin-route.yaml\nFAIL - httpbin-route.yaml - main - ApisixRoute/httpbin-route: rule1 field http.backend has been removed, use http.backends instead.\n\n2 tests, 1 passed, 0 warnings, 1 failure, 0 exceptions\n")),(0,a.kt)("p",null,"Incompatible parts will generate errors."))}s.isMDXComponent=!0}}]);