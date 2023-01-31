"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9213],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),g=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=g(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95623:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const l={title:"log-rotate",keywords:["APISIX","API Gateway","Plugin","Log rotate"],description:"This document contains information about the Apache APISIX log-rotate Plugin."},o=void 0,i={unversionedId:"plugins/log-rotate",id:"version-2.15/plugins/log-rotate",isDocsHomePage:!1,title:"log-rotate",description:"This document contains information about the Apache APISIX log-rotate Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.15/plugins/log-rotate.md",sourceDirName:"plugins",slug:"/plugins/log-rotate",permalink:"/docs/apisix/2.15/plugins/log-rotate",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"log-rotate",keywords:["APISIX","API Gateway","Plugin","Log rotate"],description:"This document contains information about the Apache APISIX log-rotate Plugin."},sidebar:"version-2.15/docs",previous:{title:"syslog",permalink:"/docs/apisix/2.15/plugins/syslog"},next:{title:"error-log-logger",permalink:"/docs/apisix/2.15/plugins/error-log-logger"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable plugin",id:"disable-plugin",children:[]}],g={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"log-rotate")," Plugin is used to keep rotating access and error log files in the log directory at regular intervals."),(0,a.kt)("p",null,"You can configure how often the logs are rotated and how many logs to keep. When the number of logs exceeds, older logs are automatically deleted."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"60 * 60"),(0,a.kt)("td",{parentName:"tr",align:null},"Time in seconds specifying how often to rotate the logs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_kept"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"24 * 7"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of historical logs to keep. If this number is exceeded, older logs are deleted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_compression"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"When set to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", compresses the log file (gzip). Requires ",(0,a.kt)("inlineCode",{parentName:"td"},"tar")," to be installed.")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"To enable the Plugin, add it in your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n    - log-rotate\n\nplugin_attr:\n    log-rotate:\n        interval: 3600\n        max_kept: 168\n        enable_compression: false\n")),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Once you enable the Plugin as shown above, the logs will be stored and rotated based on your configuration."),(0,a.kt)("p",null,"In the example below the ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_kept")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". This will create logs as shown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ll logs\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"total 44K\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-40_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:32 2020-03-20_20-32-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-32-50_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:32 2020-03-20_20-32-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:32 2020-03-20_20-33-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-20_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-20_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-30_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-30_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-40_access.log\n-rw-r--r--. 1 resty resty 2.8K Mar 20 20:33 2020-03-20_20-33-40_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-33-50_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:33 2020-03-20_20-33-50_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:33 2020-03-20_20-34-00_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-00_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 2020-03-20_20-34-10_access.log\n-rw-r--r--. 1 resty resty 2.4K Mar 20 20:34 2020-03-20_20-34-10_error.log\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,a.kt)("p",null,"If you have enabled compression, the logs will be as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"total 10.5K\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-33-50_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:33 2020-03-20_20-34-00_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-00_error.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_access.log.tar.gz\n-rw-r--r--. 1 resty resty  1.5K Mar 20 20:34 2020-03-20_20-34-10_error.log.tar.gz\n-rw-r--r--. 1 resty resty    0 Mar 20 20:34 access.log\n-rw-r--r--. 1 resty resty 1.5K Mar 20 21:31 error.log\n")),(0,a.kt)("h2",{id:"disable-plugin"},"Disable plugin"),(0,a.kt)("p",null,"To remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"log-rotate")," Plugin, you can remove it from your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n    # - log-rotate\n")))}p.isMDXComponent=!0}}]);