"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21838:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={title:"Deployment Guide"},a=void 0,l={unversionedId:"deployment-guide",id:"version-0.4.0/deployment-guide",isDocsHomePage:!1,title:"Deployment Guide",description:"This document explains how to support multiple ways to deploy custom plugins.",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.4.0/deployment-guide.md",sourceDirName:".",slug:"/deployment-guide",permalink:"/docs/java-plugin-runner/deployment-guide",editUrl:null,tags:[],version:"0.4.0",frontMatter:{title:"Deployment Guide"},sidebar:"version-0.4.0/docs",previous:{title:"Installation",permalink:"/docs/java-plugin-runner/installation-guide"},next:{title:"Hot-Reload",permalink:"/docs/java-plugin-runner/hot-reloading"}},p=[{value:"Ship plugin",id:"ship-plugin",children:[]},{value:"Using a deployed plugin",id:"using-a-deployed-plugin",children:[]}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document explains how to support multiple ways to deploy custom plugins."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is WIP."))),(0,i.kt)("h3",{id:"ship-plugin"},"Ship plugin"),(0,i.kt)("p",null,"In your plugin's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),", add the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n            <configuration>\n                <classifier>exec</classifier>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")),(0,i.kt)("p",null,"The standard Spring Boot executable JAR places all of your application classes inside ",(0,i.kt)("em",{parentName:"p"},"BOOT-INF/classes"),",\nmaking it impossible to inject into another project. This config builds an additional non-executable JAR\nthat can be used for dependency injection."),(0,i.kt)("p",null,"Deploy the JARs to Maven Central."),(0,i.kt)("h3",{id:"using-a-deployed-plugin"},"Using a deployed plugin"),(0,i.kt)("p",null,"To use someone else's plugin, add their plugin's non-executable JAR as a dependency in your project.\nAdd the package name of their filters (usually the same as the Group ID) in ",(0,i.kt)("em",{parentName:"p"},"scanBasePackages")," in your main\nSpringBootApplication class to allow Spring to find the plugin ",(0,i.kt)("em",{parentName:"p"},"@Component"),"."))}u.isMDXComponent=!0}}]);