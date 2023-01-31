"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(r),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},48464:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"FAQ",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","FAQ"],description:"Answers to frequently asked questions about APISIX Ingress."},o=void 0,s={unversionedId:"FAQ",id:"version-1.6.0/FAQ",isDocsHomePage:!1,title:"FAQ",description:"Answers to frequently asked questions about APISIX Ingress.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/zh/docs/ingress-controller/FAQ",editUrl:null,tags:[],version:"1.6.0",frontMatter:{title:"FAQ",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","FAQ"],description:"Answers to frequently asked questions about APISIX Ingress."},sidebar:"version-1.6.0/docs",previous:{title:"Development",permalink:"/zh/docs/ingress-controller/contribute"}},l=[{value:"How do I bind a Service with an Upstream?",id:"how-do-i-bind-a-service-with-an-upstream",children:[]},{value:"While modifying a CRD, how does the binded resources perceive it?",id:"while-modifying-a-crd-how-does-the-binded-resources-perceive-it",children:[]},{value:"Can I use both CRDs and the Admin API together to configure Routes?",id:"can-i-use-both-crds-and-the-admin-api-together-to-configure-routes",children:[]},{value:"Why is there an error like &quot;list upstreams failed, err: http get failed, url: httpbin.org, err: status: 401&quot;?",id:"why-is-there-an-error-like-list-upstreams-failed-err-http-get-failed-url-httpbinorg-err-status-401",children:[]},{value:"How does APISIX Ingress controller retry?",id:"how-does-apisix-ingress-controller-retry",children:[]},{value:"How do I update the CRDs when updating APISIX Ingress controller?",id:"how-do-i-update-the-crds-when-updating-apisix-ingress-controller",children:[]},{value:"Why is there an error like &quot;no matches for kind &quot;ApisixRoute&quot; in version &quot;apisix.apache.org/v2beta3&quot;&quot; when I try to create a Route?",id:"why-is-there-an-error-like-no-matches-for-kind-apisixroute-in-version-apisixapacheorgv2beta3-when-i-try-to-create-a-route",children:[]},{value:"How do I modify the Admin API key in APISIX Ingress?",id:"how-do-i-modify-the-admin-api-key-in-apisix-ingress",children:[]}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-do-i-bind-a-service-with-an-upstream"},"How do I bind a Service with an Upstream?"),(0,i.kt)("p",null,"All resources are uniquely identified by the namespace/name/port combination. If this combination is the same, the Service and the Upstream will be binded."),(0,i.kt)("h2",{id:"while-modifying-a-crd-how-does-the-binded-resources-perceive-it"},"While modifying a CRD, how does the binded resources perceive it?"),(0,i.kt)("p",null,"This is a cascading update problem. See ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/design"},"Design")," for more details."),(0,i.kt)("h2",{id:"can-i-use-both-crds-and-the-admin-api-together-to-configure-routes"},"Can I use both CRDs and the Admin API together to configure Routes?"),(0,i.kt)("p",null,"No. CRDs are declarative and when applied they are translated to APISIX configuration. Configuring APISIX through Admin API would not change the CRDs."),(0,i.kt)("h2",{id:"why-is-there-an-error-like-list-upstreams-failed-err-http-get-failed-url-httpbinorg-err-status-401"},'Why is there an error like "list upstreams failed, err: http get failed, url: httpbin.org, err: status: 401"?'),(0,i.kt)("p",null,"APISIX Ingress controller does not support configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_key")," for APISIX. Removing ",(0,i.kt)("inlineCode",{parentName:"p"},"admin_key")," from both your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config-default.yaml"),") when deploying APISIX will fix this issue."),(0,i.kt)("h2",{id:"how-does-apisix-ingress-controller-retry"},"How does APISIX Ingress controller retry?"),(0,i.kt)("p",null,"If an error occurs while parsing the CRD and translating the configuration to APISIX, a retry will be triggered."),(0,i.kt)("p",null,"Delays are used while retrying. It retries once per second at first and after five retries, it will be decreased to one retry per minute until it succeeds."),(0,i.kt)("h2",{id:"how-do-i-update-the-crds-when-updating-apisix-ingress-controller"},"How do I update the CRDs when updating APISIX Ingress controller?"),(0,i.kt)("p",null,"The Helm chart will skip applying these CRDs if they already exist."),(0,i.kt)("p",null,"In such cases, you can apply the CRDs manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -k samples/deploy/crd/\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"With Helm 3, old CRD-install hooks were replaced by a simpler system. You can now create a special directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"crds")," in your charts for holding CRDs."),(0,i.kt)("p",{parentName:"div"},"These CRDs are not templated but will be installed by default when running ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install"),". If the CRD already exists, it will be skipped with a warning. You can skip the CRD installation step by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-crds")," flag."))),(0,i.kt)("h2",{id:"why-is-there-an-error-like-no-matches-for-kind-apisixroute-in-version-apisixapacheorgv2beta3-when-i-try-to-create-a-route"},'Why is there an error like "no matches for kind "ApisixRoute" in version "apisix.apache.org/v2beta3"" when I try to create a Route?'),(0,i.kt)("p",null,"Make sure that you have the correct version of the CRDs installed in your cluster (see ",(0,i.kt)("a",{parentName:"p",href:"#how-do-i-update-the-crds-when-updating-apisix-ingress-controller"},"updating CRDs"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," has two versions: ",(0,i.kt)("inlineCode",{parentName:"p"},"v2beta3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),"."),(0,i.kt)("p",null,"Also check your ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," definition for the correct version by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get crd apisixroutes.apisix.apache.org -o jsonpath='{ .spec.versions[*].name }' -A\n")),(0,i.kt)("h2",{id:"how-do-i-modify-the-admin-api-key-in-apisix-ingress"},"How do I modify the Admin API key in APISIX Ingress?"),(0,i.kt)("p",null,"You can change the Admin API key in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify the key in both ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart/blob/57cdbe461765cd49af2195cc6a1976cc55262e9b/charts/apisix/values.yaml#L181"},"apisix/values.yaml")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart/blob/57cdbe461765cd49af2195cc6a1976cc55262e9b/charts/apisix-ingress-controller/values.yaml#L128"},"apisix/apisix-ingress-controller/values.yaml")," files."),(0,i.kt)("li",{parentName:"ol"},"You can also set this imperatively by passing the flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--set ingress-controller.config.apisix.adminKey=<new key> --set admin.credentials.admin=<new key>")," to the ",(0,i.kt)("inlineCode",{parentName:"li"},"helm install")," command.")))}c.isMDXComponent=!0}}]);