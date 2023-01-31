"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71848:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"ApisixTls"},o=void 0,s={unversionedId:"concepts/apisix_tls",id:"version-1.4.0/concepts/apisix_tls",isDocsHomePage:!1,title:"ApisixTls",description:"ApisixTls associates with a Kubernetes Secret resource and\ngenerates an APISIX SSL object. It asks the\nSecret must have two keys cert and key, which used to store the certificate and private key in\nPEM format respectively.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.4.0/concepts/apisix_tls.md",sourceDirName:"concepts",slug:"/concepts/apisix_tls",permalink:"/zh/docs/ingress-controller/1.4.0/concepts/apisix_tls",editUrl:null,tags:[],version:"1.4.0",frontMatter:{title:"ApisixTls"}},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ApisixTls associates with a Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret")," resource and\ngenerates an ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/admin-api#ssl"},"APISIX SSL")," object. It asks the\nSecret must have two keys ",(0,a.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", which used to store the certificate and private key in\nPEM format respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apiVersion: apisix.apache.org/v1\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  hosts:\n  - httpbin.org\n  secret:\n    name: htpbin-cert\n    namespace: default\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("inlineCode",{parentName:"p"},"hosts")," field should be written carefully, it's used by Apache APISIX to match the\ncorrect certificate, what's more, it also should be matched with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.globalsign.com/en/blog/what-is-server-name-indication#:~:text=Server%20Name%20Indication%20(SNI)%20allows,in%20the%20CLIENT%20HELLO%20message"},"Server Name Indication"),"\nextension in TLS, or the TLS handshaking might fail."),(0,a.kt)("p",null,"The apisix-ingress-controller will watch Secret resources that referred by ApisixTls objects, once a\nSecret changed, apisix-ingress-controller will re translate all referred ApisixTls objects, converting them to APISIX SSL resources ultimately."))}p.isMDXComponent=!0}}]);