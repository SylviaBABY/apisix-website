"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),f=i,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65e3:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"ApisixPluginConfig/v2",keywords:["APISIX ingress","Apache APISIX","ApisixPluginConfig"],description:"Reference for ApisixPluginConfig/v2 custom Kubernetes resource."},l=void 0,o={unversionedId:"references/apisix_pluginconfig_v2",id:"version-1.6.0/references/apisix_pluginconfig_v2",isDocsHomePage:!1,title:"ApisixPluginConfig/v2",description:"Reference for ApisixPluginConfig/v2 custom Kubernetes resource.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/references/apisix_pluginconfig_v2.md",sourceDirName:"references",slug:"/references/apisix_pluginconfig_v2",permalink:"/docs/ingress-controller/references/apisix_pluginconfig_v2",editUrl:null,tags:[],version:"1.6.0",frontMatter:{title:"ApisixPluginConfig/v2",keywords:["APISIX ingress","Apache APISIX","ApisixPluginConfig"],description:"Reference for ApisixPluginConfig/v2 custom Kubernetes resource."},sidebar:"version-1.6.0/docs",previous:{title:"ApisixClusterConfig/v2beta3",permalink:"/docs/ingress-controller/references/apisix_cluster_config_v2beta3"},next:{title:"ApisixPluginConfig/v2beta3",permalink:"/docs/ingress-controller/references/apisix_pluginconfig_v2beta3"}},s=[{value:"Spec",id:"spec",children:[]}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"spec"},"Spec"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/samples/deploy/crd/v1/ApisixPluginConfig.yaml"},"definition")," on GitHub."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Plugins that will be executed on the Route.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins[].name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the Plugin. See ",(0,i.kt)("a",{parentName:"td",href:"https://apisix.apache.org/plugins/"},"Plugin hub")," for a list of available Plugins.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins[].enable"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", enables the Plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"plugins[].config"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration of the Plugin. Must have the same fields as in the ",(0,i.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/plugins/batch-requests/"},"Plugin docs"),".")))))}c.isMDXComponent=!0}}]);