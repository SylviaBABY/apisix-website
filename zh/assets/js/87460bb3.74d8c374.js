"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49801:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"ApisixTls/v2beta3",keywords:["APISIX ingress","Apache APISIX","ApisixTls"],description:"Reference for ApisixTls/v2beta3 custom Kubernetes resource."},l=void 0,o={unversionedId:"references/apisix_tls_v2beta3",id:"references/apisix_tls_v2beta3",isDocsHomePage:!1,title:"ApisixTls/v2beta3",description:"Reference for ApisixTls/v2beta3 custom Kubernetes resource.",source:"@site/docs/apisix-ingress-controller/references/apisix_tls_v2beta3.md",sourceDirName:"references",slug:"/references/apisix_tls_v2beta3",permalink:"/zh/docs/ingress-controller/next/references/apisix_tls_v2beta3",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/references/apisix_tls_v2beta3.md",tags:[],version:"current",frontMatter:{title:"ApisixTls/v2beta3",keywords:["APISIX ingress","Apache APISIX","ApisixTls"],description:"Reference for ApisixTls/v2beta3 custom Kubernetes resource."},sidebar:"docs",previous:{title:"ApisixTls/v2",permalink:"/zh/docs/ingress-controller/next/references/apisix_tls_v2"},next:{title:"ApisixClusterConfig/v2",permalink:"/zh/docs/ingress-controller/next/references/apisix_cluster_config_v2"}},c=[{value:"Spec",id:"spec",children:[]}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_tls"},"concepts")," to learn more about how to use the ApisixTls resource."),(0,a.kt)("h2",{id:"spec"},"Spec"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/samples/deploy/crd/v1/ApisixTls.yaml"},"definition")," on GitHub."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hosts"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"List of hosts (with matched SNI) that can use the TLS certificate stored in the Secret.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secret"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Definition of the Secret related to the current ",(0,a.kt)("inlineCode",{parentName:"td"},"ApisixTls")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secret.name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the Secret related to the current ",(0,a.kt)("inlineCode",{parentName:"td"},"ApisixTls")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"secret.namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Namespace of the Secret related to the current ",(0,a.kt)("inlineCode",{parentName:"td"},"ApisixTls")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration for the certificate provided by the client.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client.caSecret"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Definition of the Secret related to the certificate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client.caSecret.name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the Secret related to the certificate provided by the client.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client.caSecret.namespace"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Namespace of the Secret related to the certificate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client.depth"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum length of the certificate chain.")))))}p.isMDXComponent=!0}}]);