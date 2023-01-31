"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4307],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||g[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const i={title:"APISIX Integrates ClickHouse to Improve Log Efficiency",authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API Gateway","ClickHouse","Logging","Ecosystem"],description:"This article describes how Zhendong Qi contributed `clickhouse-logger` to API gateway Apache APISIX, and how to use this plugin to simplify business architecture.",tags:["Plugins","Ecosystem"]},a=void 0,c={permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier",source:"@site/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier.md",title:"APISIX Integrates ClickHouse to Improve Log Efficiency",description:"This article describes how Zhendong Qi contributed `clickhouse-logger` to API gateway Apache APISIX, and how to use this plugin to simplify business architecture.",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:6.615,truncated:!0,authors:[{name:"Zhendong Qi",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png",imageURL:"https://github.com/zhendongcmss.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"Integrate API Gateway with Eureka",permalink:"/blog/2022/03/05/apisix-integration-eureka-service-discovery"},nextItem:{title:"Apache APISIX with CoreDNS enrich service discovery",permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery"}},s={authorsImageUrls:[void 0,void 0]},l=[],u={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The author of this article, Zhendong Qi, is from China Mobile Cloud Competence Center. He has extensive experience in distributed object storage software development and has participated in the construction of several resource pools in the mobile cloud. This article describes how community contributor Zhendong Qi contributed ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," to Apache APISIX and how he used the plugin to simplify the business architecture and improve the efficiency of logging.")))}g.isMDXComponent=!0}}]);