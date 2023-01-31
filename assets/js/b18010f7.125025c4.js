"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63372:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Rebuild Docker image"},i=void 0,l={unversionedId:"deploy-with-docker",id:"version-2.11/deploy-with-docker",isDocsHomePage:!1,title:"Rebuild Docker image",description:"NOTE: We support Docker Image, please visit DockerHub for more information. The following steps are for building Docker Image manually.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.11/deploy-with-docker.md",sourceDirName:".",slug:"/deploy-with-docker",permalink:"/docs/dashboard/2.11/deploy-with-docker",editUrl:null,tags:[],version:"2.11",frontMatter:{title:"Rebuild Docker image"},sidebar:"version-2.11/docs",previous:{title:"Basic Deploy",permalink:"/docs/dashboard/2.11/install"},next:{title:"Development Guide",permalink:"/docs/dashboard/2.11/develop"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Launch",id:"launch",children:[]},{value:"Other",id:"other",children:[]}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," We support Docker Image, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix-dashboard"},"DockerHub")," for more information. The following steps are for building Docker Image manually."),(0,r.kt)("p",null,"To build the Dashboard with Docker, you simply download the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," file from the ",(0,r.kt)("strong",{parentName:"p"},"root directory")," to your device (no need to download all source codes) then follow this guide."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before using Docker to build images and start containers, make sure that the following dependencies are installed and running in your environment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Execute the build command in the directory where the Dockerfile is located (by default, the project root), specifying the tag manually.\n$ docker build -t apisix-dashboard:$tag .\n\n# For users in mainland China, the `ENABLE_PROXY` parameter can be provided to speed up module downloads.\n$ docker build -t apisix-dashboard:$tag . --build-arg ENABLE_PROXY=true\n\n# If you want to use the latest codes to build, you can specify the `APISIX_DASHBOARD_VERSION` parameter to `master`.\n# This parameter can also be specified as branch name of a specific version, such as `v2.1.1`.\n$ docker build -t apisix-dashboard:$tag . --build-arg APISIX_DASHBOARD_VERSION=master\n")),(0,r.kt)("h2",{id:"launch"},"Launch"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Preparing configuration files")),(0,r.kt)("p",null,"Before starting the container, the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.yaml")," needs to be prepared inside the ",(0,r.kt)("strong",{parentName:"p"},"host")," to override the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/blob/master/api/conf/conf.yaml"},"configuration file")," inside the container."),(0,r.kt)("p",null,"Kindly note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only when ",(0,r.kt)("inlineCode",{parentName:"li"},"conf.listen.host")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," can the external network access the services within the container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf.etcd.endpoints")," must be able to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," service within the container. For example: use ",(0,r.kt)("inlineCode",{parentName:"li"},"host.docker.internal:2379")," so that the container can access ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," on the host network.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Launch the Dashboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# /path/to/conf.yaml Requires an absolute path pointing to the configuration file mentioned above.\n$ docker run -d -p 9000:9000 -v /path/to/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml --name apisix-dashboard apisix-dashboard:$tag\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Check if the container started successfully")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps -a\n")),(0,r.kt)("p",null,"If the container ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," is ok, visit ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Stop")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker stop apisix-dashboard\n")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Caching is not recommended when building a image multiple times.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t apisix-dashboard:$tag . --no-cache=true\n")))}c.isMDXComponent=!0}}]);