"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[90204],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3477:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={title:"GKE (Google)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Google Cloud Platform"],description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE)."},l=void 0,s={unversionedId:"deployments/gke",id:"version-1.6.0/deployments/gke",isDocsHomePage:!1,title:"GKE (Google)",description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE).",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/deployments/gke.md",sourceDirName:"deployments",slug:"/deployments/gke",permalink:"/zh/docs/ingress-controller/deployments/gke",editUrl:null,tags:[],version:"1.6.0",frontMatter:{title:"GKE (Google)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Google Cloud Platform"],description:"Guide to install APISIX ingress controller on Google Kubernetes Engine (GKE)."},sidebar:"version-1.6.0/docs",previous:{title:"ACK (Alibaba Cloud)",permalink:"/zh/docs/ingress-controller/deployments/ack"},next:{title:"AKS (Azure)",permalink:"/zh/docs/ingress-controller/deployments/azure"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]},{value:"Next steps",id:"next-steps",children:[{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default keys",id:"change-default-keys",children:[]}]}],c={toc:o};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how you can install APISIX ingress on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine (GKE)"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Setting up APISIX ingress on GKE requires the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster#create_cluster"},"Create a GKE cluster")," on Google Cloud."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk"},"Google Cloud SDK")," and update the credentials in your kube config file or use the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/shell"},"shell"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,r.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,r.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, APISIX ingress controller will watch the apiVersion of ",(0,r.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1"),"."),(0,r.kt)("p",{parentName:"div"},"If the target Kubernetes version is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.19"),", add the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1"),"."),(0,r.kt)("p",{parentName:"div"},"Else, if your Kubernetes cluster version is under ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.16"),", set the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1"),"."))),(0,r.kt)("p",null,"This will create the five resources mentioned below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,r.kt)("p",null,"The gateway service type will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". Clients can access Apache APISIX through the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/service#services_of_type_loadbalancer"},"GKE Load Balancer"),"."),(0,r.kt)("p",null,"You can find the load balancer IP address by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,r.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,r.kt)("p",null,"SSL is disabled by default. You can enable it by adding the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true"),"."),(0,r.kt)("h3",{id:"change-default-keys"},"Change default keys"),(0,r.kt)("p",null,"It is recommended to change the default keys for security:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same. It is better if these are not same as ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))))}p.isMDXComponent=!0}}]);