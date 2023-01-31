"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4242],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,h=g["".concat(c,".").concat(m)]||g[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},40792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"API \u7f51\u5173\u96c6\u6210 SkyWalking \u6253\u9020\u5168\u65b9\u4f4d\u65e5\u5fd7\u5904\u7406",authors:[{name:"\u5e84\u6d69\u6f6e",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","Apache SkyWalking","\u65e5\u5fd7\u5904\u7406","\u63d2\u4ef6\u96c6\u6210"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u96c6\u6210 SkyWalking \u7684\u65e5\u5fd7\u63d2\u4ef6\uff0c\u4e3a\u4e4b\u540e\u7528\u6237\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u65e5\u5fd7\u5904\u7406\u63d0\u4f9b\u66f4\u65b9\u4fbf\u7684\u64cd\u4f5c\u4e0e\u73af\u5883\u3002",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/skywalking.png"},i=void 0,l={permalink:"/zh/blog/2021/12/07/apisix-integrate-skywalking-plugin",source:"@site/blog/2021/12/07/apisix-integrate-skywalking-plugin.md",title:"API \u7f51\u5173\u96c6\u6210 SkyWalking \u6253\u9020\u5168\u65b9\u4f4d\u65e5\u5fd7\u5904\u7406",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u96c6\u6210 SkyWalking \u7684\u65e5\u5fd7\u63d2\u4ef6\uff0c\u4e3a\u4e4b\u540e\u7528\u6237\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u65e5\u5fd7\u5904\u7406\u63d0\u4f9b\u66f4\u65b9\u4fbf\u7684\u64cd\u4f5c\u4e0e\u73af\u5883\u3002",date:"2021-12-07T00:00:00.000Z",formattedDate:"2021\u5e7412\u67087\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.635,truncated:!0,authors:[{name:"\u5e84\u6d69\u6f6e",title:"Author",url:"https://github.com/dmsolr",image_url:"https://avatars.githubusercontent.com/u/29735230?v=4",imageURL:"https://avatars.githubusercontent.com/u/29735230?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"API \u7f51\u5173 APISIX \u96c6\u6210 RocketMQ \u6269\u5c55\u65e5\u5fd7\u76d1\u63a7\u529f\u80fd",permalink:"/zh/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff0811.15-11.30\uff09",permalink:"/zh/blog/2021/12/02/weekly-report-1130"}},c={authorsImageUrls:[void 0,void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e24\u6b3e Apache APISIX \u96c6\u6210 SkyWalking \u7684\u65e5\u5fd7\u63d2\u4ef6\uff0c\u4e3a\u4e4b\u540e\u5927\u5bb6\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u65e5\u5fd7\u5904\u7406\u63d0\u4f9b\u66f4\u65b9\u4fbf\u7684\u64cd\u4f5c\u4e0e\u73af\u5883\u3002")))}s.isMDXComponent=!0}}]);