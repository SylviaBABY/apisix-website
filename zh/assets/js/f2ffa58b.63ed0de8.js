"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94998:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Getting Started"},s=void 0,i={unversionedId:"getting-started",id:"version-0.4.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"apisix-ingress-controller is yet another Ingress controller for Kubernetes using Apache APISIX as the high performance reverse proxy.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.4.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/ingress-controller/0.4.0/getting-started",editUrl:null,tags:[],version:"0.4.0",frontMatter:{title:"Getting Started"},sidebar:"version-0.4.0/docs",next:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/0.4.0/practices/index"}},l=[{value:"What is apisix-ingress-controller",id:"what-is-apisix-ingress-controller",children:[]},{value:"Features",id:"features",children:[]},{value:"How It Works",id:"how-it-works",children:[]},{value:"Installation on Cloud",id:"installation-on-cloud",children:[]},{value:"Installation on Prem",id:"installation-on-prem",children:[]},{value:"Get Involved to Contribute",id:"get-involved-to-contribute",children:[]}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-apisix-ingress-controller"},"What is apisix-ingress-controller"),(0,o.kt)("p",null,"apisix-ingress-controller is yet another Ingress controller for Kubernetes using ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," as the high performance reverse proxy."),(0,o.kt)("p",null,"It's configured by using the declarative configurations like ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/0.4.0/concepts/apisix_route"},"ApisixRoute"),", ",(0,o.kt)("a",{parentName:"p",href:"./concepts/apisix"},"ApisixUpstream"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),".\nAll these resources are watched and converted to corresponding resources in Apache APISIX."),(0,o.kt)("p",null,"Service Discovery are also supported through ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service"),",\nand will be reflected to nodes in APISIX Upstream."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v0.4.0/docs/assets/images/scene.png",alt:"scene"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Declarative configuration"),(0,o.kt)("li",{parentName:"ul"},"Full dynamic capabilities to delivery configurations."),(0,o.kt)("li",{parentName:"ul"},"Native Kubernetes Ingress (both v1 and v1beta1) support."),(0,o.kt)("li",{parentName:"ul"},"Service Discovery based on Kubernetes Service."),(0,o.kt)("li",{parentName:"ul"},"Out of box support for node health check."),(0,o.kt)("li",{parentName:"ul"},"Support load balancing based on Pod (upstream nodes)."),(0,o.kt)("li",{parentName:"ul"},"Rich plugins support."),(0,o.kt)("li",{parentName:"ul"},"Easy to deploy and use.")),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/0.4.0/design"},"Design")," for more details."),(0,o.kt)("h2",{id:"installation-on-cloud"},"Installation on Cloud"),(0,o.kt)("p",null,"apisix-ingress-controller supports to be installed on some clouds such as AWS, GCP."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/azure.md"},"Install Ingress APISIX on Azure AKS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/aws.md"},"Install Ingress APISIX on AWS EKS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/ack.md"},"Install Ingress APISIX on ACK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/gke.md"},"Install Ingress APISIX on Google Cloud GKE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/minikube.md"},"Install Ingress APISIX on Minikube")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/kubesphere.md"},"Install Ingress APISIX on KubeSphere")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./docs/en/latest/deployments/k3s-rke.md"},"Install Ingress APISIX on K3S and RKE"))),(0,o.kt)("h2",{id:"installation-on-prem"},"Installation on Prem"),(0,o.kt)("p",null,"If you want to deploy apisix-ingress-controller on Prem, we recommend you to use ",(0,o.kt)("a",{parentName:"p",href:"https://helm.io"},"Helm"),". Just a few steps"),(0,o.kt)("h2",{id:"get-involved-to-contribute"},"Get Involved to Contribute"),(0,o.kt)("p",null,"First, your supports and cooperations to make this project better are appreciated.\nBut before you start, please read ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/0.4.0/contribute"},"How to Contribute")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/0.4.0/development"},"How to Develop"),"."))}c.isMDXComponent=!0}}]);