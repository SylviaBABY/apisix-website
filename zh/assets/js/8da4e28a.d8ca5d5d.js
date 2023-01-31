"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11767:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"OpenAPI 3",keywords:["APISIX","APISIX Dashboard","Data Loader","OpenAPI"],description:"This document contains information about the OpenAPI 3 data loader."},l=void 0,i={unversionedId:"modules/data_loader/openapi3",id:"version-2.15/modules/data_loader/openapi3",isDocsHomePage:!1,title:"OpenAPI 3",description:"This document contains information about the OpenAPI 3 data loader.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.15/modules/data_loader/openapi3.md",sourceDirName:"modules/data_loader",slug:"/modules/data_loader/openapi3",permalink:"/zh/docs/dashboard/2.15/modules/data_loader/openapi3",editUrl:null,tags:[],version:"2.15",frontMatter:{title:"OpenAPI 3",keywords:["APISIX","APISIX Dashboard","Data Loader","OpenAPI"],description:"This document contains information about the OpenAPI 3 data loader."},sidebar:"version-2.15/docs",previous:{title:"Data Loader",permalink:"/zh/docs/dashboard/2.15/modules/data_loader"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[{value:"Import",id:"import",children:[]},{value:"Export",id:"export",children:[]}]}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"OpenAPI 3 data loader currently supports importing standard OpenAPI 3 documentation to generate individual paths as routes and upstreams in Apache APISIX."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merge_method"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP method merge. When an OpenAPI 3 Path has multiple HTTP methods, this parameter controls whether they are merged or not. When multiple HTTP methods have different detailed configurations, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"securitySchema")," etc., this parameter can be turned off to prevent the APISIX Dashboard importer from merging them into a single APISIX route, which will generate a route for each HTTP method for each Path.")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"import"},"Import"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the import drawer menu")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/intro.png",alt:"Open menu"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure import parameters")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenAPI 3")," in the data loader type and set a task name for this import, which will determine the name of the route and upstream generated by this import."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The current ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenAPI 3")," generates routes and upstream names according to this rule."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"When the task name is ",(0,r.kt)("inlineCode",{parentName:"li"},"demo")," and the HTTP method merge is enabled.")),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI 3 Path & Method"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route name"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route uri"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /hello1"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello1"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello1"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET & POST /hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"GET, POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT /hello3/{name}"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello3/{name}"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello3"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT")))),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"When the task name is ",(0,r.kt)("inlineCode",{parentName:"li"},"demo")," and HTTP method merging is disabled.")),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OpenAPI 3 Path & Method"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route name"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route uri"),(0,r.kt)("th",{parentName:"tr",align:null},"APISIX route methods"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /hello1"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello1_GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello1"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT & DELETE /hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello2_PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello2_DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello2"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PATCH /hello3/{name}"),(0,r.kt)("td",{parentName:"tr",align:null},"demo_hello3/{name}_PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"/hello3"),(0,r.kt)("td",{parentName:"tr",align:null},"PATCH")))),(0,r.kt)("p",{parentName:"div"},"Generate an empty upstream named ",(0,r.kt)("inlineCode",{parentName:"p"},"demo"),", which has no node data configured for fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes"),", so users can modify it manually to meet their needs."))),(0,r.kt)("p",null,"The following shows the parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenAPI 3")," data loader, which currently has the Merge HTTP Methods configuration."),(0,r.kt)("p",null,"Finally, select an OpenAPI 3 documentation file in Upload section and submit the form."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-1.png",alt:"Set import parameters"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only one OpenAPI 3 documentation file can be selected at this time."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After submitting and viewing the import results")),(0,r.kt)("p",null,"When the import successful, the generated routes and the number of upstreams will be displayed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-2.png",alt:"Imported successfully"})),(0,r.kt)("p",null,"When the import fails, the number of errors and the reason for the error are displayed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-3.png",alt:"Import failure"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"View the generated routes")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-4.png",alt:"Route List"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Modify upstream configuration")),(0,r.kt)("p",null,"The import process generates an upstream named ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," with the same name as the import task."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-5.png",alt:"Upstream List"})),(0,r.kt)("p",null,"It does not have an upstream node configured and cannot be requested properly yet, so you need to modify its node or service discovery configuration. Remove this default node and add node information according to your own service."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-dashboard/release/2.15/docs/assets/images/modules/data_loader/openapi3-6.png",alt:"Upstream configuration"})),(0,r.kt)("p",null,"Save the upstream configuration."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Test API")),(0,r.kt)("p",null,"Use the test tool to call the API to determine if it is configured correctly."),(0,r.kt)("h3",{id:"export"},"Export"),(0,r.kt)("p",null,"Not supported yet."))}s.isMDXComponent=!0}}]);