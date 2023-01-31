"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(r),v=o,f=s["".concat(u,".").concat(v)]||s[v]||d[v]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64577:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"Developer Guide"},l=void 0,a={unversionedId:"developer-guide",id:"version-0.5.0/developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"This documentation explains how to develop this project.",source:"@site/docs-apisix-go-plugin-runner_versioned_docs/version-0.5.0/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/zh/docs/go-plugin-runner/developer-guide",editUrl:null,tags:[],version:"0.5.0",frontMatter:{title:"Developer Guide"},sidebar:"version-0.5.0/docs",previous:{title:"Getting started",permalink:"/zh/docs/go-plugin-runner/getting-started"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This documentation explains how to develop this project."),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make build"),". Then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock ./go-runner run"),"\nto start it."),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"make test"),"."))}p.isMDXComponent=!0}}]);