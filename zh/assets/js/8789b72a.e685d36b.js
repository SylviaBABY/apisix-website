"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Development Guide"},l=void 0,i={unversionedId:"develop",id:"version-2.15/develop",isDocsHomePage:!1,title:"Development Guide",description:"The Dashboard contains both manager-api and web parts, so you need to start the development environment separately.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.15/develop.md",sourceDirName:".",slug:"/develop",permalink:"/zh/docs/dashboard/2.15/develop",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"Development Guide"},sidebar:"version-2.15/docs",previous:{title:"Rebuild Docker image",permalink:"/zh/docs/dashboard/2.15/deploy-with-docker"},next:{title:"i18n User Guide",permalink:"/zh/docs/dashboard/2.15/I18N_USER_GUIDE"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Clone the project",id:"clone-the-project",children:[]},{value:"Start developing",id:"start-developing",children:[{value:"manager-api",id:"manager-api",children:[]},{value:"web",id:"web",children:[]}]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Dashboard contains both ",(0,a.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," parts, so you need to start the development environment separately."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before development, refer to this ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/2.15/install"},"guide")," to install dependencies."),(0,a.kt)("h2",{id:"clone-the-project"},"Clone the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone -b release/2.15 https://github.com/apache/apisix-dashboard.git\n")),(0,a.kt)("h2",{id:"start-developing"},"Start developing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd apisix-dashboard\n")),(0,a.kt)("h3",{id:"manager-api"},"manager-api"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please change the configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"api/conf/conf.yaml"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the root directory, launch development mode."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ make api-run\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"In the root directory, stop development mode.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ make api-stop\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/2.15/FAQ"},"FAQ")," about the problem of displaying exception in the dashboard after adding custom plugins or modifying plugin's schema.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If writing an back end E2E test, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/2.15/back-end-tests"},"Back End E2E Writing Guide")))),(0,a.kt)("h3",{id:"web"},"web"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"web")," directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./web\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Please change the ",(0,a.kt)("inlineCode",{parentName:"li"},"manager-api")," address in the ",(0,a.kt)("inlineCode",{parentName:"li"},"web/.env")," file. If you follow this guidelines, the address may need to be set as below.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All commands here are for Linux environment, other systems please use the corresponding commands for your platform. You are also welcome to contribute your own methods.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "SERVE_URL_DEV=http://localhost:9000" > web/.env\n')),(0,a.kt)("p",null,"If you don't want to create the file, you can also export the variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export SERVE_URL_DEV=http://localhost:9000\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Launch development mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn install\n\n$ yarn start\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If there is an error about gyp during yarn install, please ignore it and go ahead!")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"If writing an front end E2E test, please refer to the ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/dashboard/2.15/front-end-e2e"},"Front End E2E Writing Guide"))))}d.isMDXComponent=!0}}]);