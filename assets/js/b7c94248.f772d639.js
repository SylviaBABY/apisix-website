"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42546:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Hot-Reload"},o=void 0,l={unversionedId:"hot-reloading",id:"version-0.3.0/hot-reloading",isDocsHomePage:!1,title:"Hot-Reload",description:"This document explains the new hot reload feature provided by apisix-java-plugin-runner.",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.3.0/hot-reloading.md",sourceDirName:".",slug:"/hot-reloading",permalink:"/docs/java-plugin-runner/0.3.0/hot-reloading",editUrl:null,tags:[],version:"0.3.0",frontMatter:{title:"Hot-Reload"},sidebar:"version-0.3.0/docs",previous:{title:"Deployment Guide",permalink:"/docs/java-plugin-runner/0.3.0/deployment-guide"}},s=[{value:"Overview",id:"overview",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"How it works",id:"how-it-works",children:[]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hot-reloading"},"Hot Reloading"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document explains the new hot reload feature provided by apisix-java-plugin-runner."),(0,a.kt)("p",null,"APISIX offers many fully-featured plugins and also allows users to develop their own plugins in Lua, Java, and other languages. Currently, APISIX offers hot reloading of plugins developed internally (Lua), however, hot reloading of external Java plugins is currently not supported."),(0,a.kt)("p",null,"This feature provides hot reloading of Java plugins through the implementation of a custom classloader that can reload both Java classes and SpringBoot beans during runtime. When apisix-java-plugin-runner is launched, a scheduled side process watches for file modifications (create, delete, or change) in the folder that holds the user-implemented filters. When a user changes their filter while the plugin runner is running, the file watcher immediately picks up on it, and the file is recompiled and reloaded. The changes can immediately be seen by sending a request to APISIX to trigger the filter\u2019s route."),(0,a.kt)("p",null,"This saves time during development and enables users to change parts of their code without restarting the entire plugin-runner."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Using and understanding the hot reload feature is simple."),(0,a.kt)("p",null,"To begin, make sure your filters are located in the ",(0,a.kt)("em",{parentName:"p"},"runner/filter")," module (along with ",(0,a.kt)("em",{parentName:"p"},"package-info.java"),"). If you are implementing filters from a different location, be sure to specify the load-path and the package name in the ",(0,a.kt)("em",{parentName:"p"},"application.yaml")," file located in ",(0,a.kt)("em",{parentName:"p"},"runner-starter/src/main/resources/"),"."),(0,a.kt)("p",null,"Path names should be enclosed in forward slashes ",(0,a.kt)("em",{parentName:"p"},"~/runner-plugin/src/main/java/org/apache/apisix/plugin/runner/filter/")),(0,a.kt)("p",null,"Package name should look like ",(0,a.kt)("em",{parentName:"p"},"org.apache.apisix.plugin.runner.filter")),(0,a.kt)("p",null,"Run APISIX and apisix-java-plugin-runner."),(0,a.kt)("p",null,"Create a route for your filter (follow ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/06/21/use-java-to-write-apache-apisix-plugins/"},"https://apisix.apache.org/blog/2021/06/21/use-java-to-write-apache-apisix-plugins/")," for more information)."),(0,a.kt)("p",null,"Send a request to your route to ensure everything is functioning."),(0,a.kt)("p",null,"Modify your files in ",(0,a.kt)("em",{parentName:"p"},"runner/filter")," (or other location)."),(0,a.kt)("p",null,"Send another request to your route, changes should be noticeable immediately."),(0,a.kt)("p",null,"Keep in mind, for the file watcher to detect a change, it may be necessary to save the file.  "),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Hot reload in apisix-java-plugin-runner is implemented using a custom classloader that dynamically recompiles and reloads filters. The Java WatchService is used to track file updates. Each file update is registered either as a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"File Modification"),(0,a.kt)("li",{parentName:"ol"},"File Creation"),(0,a.kt)("li",{parentName:"ol"},"File Deletion")),(0,a.kt)("p",null,"where each type of file update is handled slightly differently."),(0,a.kt)("p",null,"After File Modification, the following process occurs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Spring Bean (associated with the modified filter) is removed from the Spring Boot Application Context"),(0,a.kt)("li",{parentName:"ol"},"The Filter source code is recompiled"),(0,a.kt)("li",{parentName:"ol"},"The Filter class is reloaded"),(0,a.kt)("li",{parentName:"ol"},"The new Spring Bean is generated from the modified Filter class"),(0,a.kt)("li",{parentName:"ol"},"The new Spring Bean is loaded into Application Context")),(0,a.kt)("p",null,"File Creation and Deletion follow a similar process."))}u.isMDXComponent=!0}}]);