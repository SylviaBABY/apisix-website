"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99915],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=m;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<s;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6705:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(87462),i=(t(67294),t(3905));const s={title:"minikube",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","minikube"],description:"Guide to install APISIX ingress controller on minikube."},l=void 0,a={unversionedId:"deployments/minikube",id:"deployments/minikube",isDocsHomePage:!1,title:"minikube",description:"Guide to install APISIX ingress controller on minikube.",source:"@site/docs/apisix-ingress-controller/deployments/minikube.md",sourceDirName:"deployments",slug:"/deployments/minikube",permalink:"/zh/docs/ingress-controller/next/deployments/minikube",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/deployments/minikube.md",tags:[],version:"current",frontMatter:{title:"minikube",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","minikube"],description:"Guide to install APISIX ingress controller on minikube."},sidebar:"docs",previous:{title:"Getting started",permalink:"/zh/docs/ingress-controller/next/getting-started"},next:{title:"kind",permalink:"/zh/docs/ingress-controller/next/deployments/kind"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide explains how you can install APISIX ingress on ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,i.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,i.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n#  We use Apisix 3.0 in this example. If you're using Apisix v2.x, please set to v2\nADMIN_API_VERSION=v3\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --create-namespace \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix \\\n  --set ingress-controller.config.apisix.adminAPIVersion=$ADMIN_API_VERSION\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,"This will create the five resources mentioned below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,i.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/next/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."))}c.isMDXComponent=!0}}]);