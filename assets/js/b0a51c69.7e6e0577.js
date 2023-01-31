"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1034],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(25773),o=(a(27378),a(35318));const i={title:"Why would you choose Apache APISIX instead of NGINX or Kong?",slug:"2021/06/28/why-we-need-apache-apisix",author:"Yuansheng Wang",authorURL:"https://github.com/membphis",authorImageURL:"https://avatars.githubusercontent.com/u/6814606?v=4",keywords:["APISIX","Kong","NGINX","API Gateway","Open Source","API Management"],description:"Many companies used to use NGINX or Kong as their API gateway but switched to Apache APISIX now. As an Open Source API Gateway, Apache APISIX solves a lot of pain points for businesses.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/10/08/634113b21a4aa.png"},r=void 0,s={permalink:"/blog/2021/06/28/why-we-need-apache-apisix",source:"@site/blog/2021/06/28/why-we-need-Apache-APISIX.md",title:"Why would you choose Apache APISIX instead of NGINX or Kong?",description:"Many companies used to use NGINX or Kong as their API gateway but switched to Apache APISIX now. As an Open Source API Gateway, Apache APISIX solves a lot of pain points for businesses.",date:"2021-06-28T00:00:00.000Z",formattedDate:"June 28, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:6.255,truncated:!0,authors:[{name:"Yuansheng Wang",url:"https://github.com/membphis",imageURL:"https://avatars.githubusercontent.com/u/6814606?v=4"}],prevItem:{title:"Release Apache APISIX 2.7.0",permalink:"/blog/2021/06/29/release-apache-apisix-2.7"},nextItem:{title:"Deploy APISIX and APISIX Ingress Controller on Rancher",permalink:"/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"}},l={authorsImageUrls:[void 0]},c=[{value:"NGINX and Kong&#39;s Limitations",id:"nginx-and-kongs-limitations",children:[],level:2},{value:"Advantages of Apache APISIX",id:"advantages-of-apache-apisix",children:[{value:"Well designed architecture",id:"well-designed-architecture",children:[],level:3},{value:"Rich ecosystem",id:"rich-ecosystem",children:[],level:3},{value:"Active community",id:"active-community",children:[],level:3}],level:2},{value:"Unified proxy infrastructure",id:"unified-proxy-infrastructure",children:[{value:"Load balance and API gateway",id:"load-balance-and-api-gateway",children:[],level:3},{value:"Microservice Gateway",id:"microservice-gateway",children:[],level:3},{value:"Kubernetes Ingress",id:"kubernetes-ingress",children:[],level:3},{value:"Service mesh",id:"service-mesh",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the history of the open source API Gateway Apache APISIX architecture's evolution and compares the advantages of the two frameworks, Apache APISIX and NGINX.")),(0,o.kt)("p",null,"API gateway is an important infrastructure component in the cloud-native era. There are two common criteria to evaluate an API gateway: how dynamic it is, and how mature its observability is. Many companies used to use NGINX or Kong as their API gateway, but then later switched to Apache APISIX. As an API gateway born for the cloud-native era, Apache APISIX indeed solves a lot of pain points for businesses in various dimensions. Now you might wonder, why?"),(0,o.kt)("h2",{id:"nginx-and-kongs-limitations"},"NGINX and Kong's Limitations"),(0,o.kt)("p",null,"In the era of monolithic services, NGINX can handle most scenarios. While in the cloud-native era, NGINX has two shortcomings due to its architecture:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NGINX does not support cluster management. Almost every company has its own NGINX configuration management system. Although the systems are similar, there is no unified solution."),(0,o.kt)("li",{parentName:"ul"},"NGINX does not support hot reloading of configurations. If the user modifies the configuration of NGINX, it will be necessary to reload NGINX. Also, in Kubernetes, the services will change frequently. So if NGINX is used to handle the traffic, you must restart the service often, which is unacceptable for enterprises.")),(0,o.kt)("p",null,"Kong solves the shortcomings of NGINX but brings new limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kong needs to rely on a PostgreSQL or Cassandra database, which makes Kong's entire architecture very bloated and would bring a high availability limitation to the enterprise. If the database fails, the whole API Gateway fails."),(0,o.kt)("li",{parentName:"ul"},"Kong's routing uses traversal search. When there are more than a thousand routes in the gateway, its performance will dramatically drop.")),(0,o.kt)("p",null,"The APISIX resolves all the above limitations and becomes the best API gateway in the cloud-native era."),(0,o.kt)("h2",{id:"advantages-of-apache-apisix"},"Advantages of Apache APISIX"),(0,o.kt)("h3",{id:"well-designed-architecture"},"Well designed architecture"),(0,o.kt)("p",null,"First, Apache APISIX has an excellent architecture. Cloud-native, as the current technology trend, will change the technical architecture of traditional enterprises. Many applications are migrating to microservices and containerization. APISIX has followed the technology trend since its inception:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/07/1.png",alt:"image"})),(0,o.kt)("p",null,"As shown in the figure above, the left and right are the Data Plane and the Control Plane of APISIX:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Plane: Based on NGINX's network library (without using NGINX's route matching, static configuration, and C modules), it uses Lua and NGINX to dynamically control request traffic;"),(0,o.kt)("li",{parentName:"ul"},"Control Plane: Administrators can operate etcd through the built-in RESTful API. With the help of the etcd's Watch mechanism, APISIX can synchronize the configuration to each node within milliseconds.")),(0,o.kt)("p",null,"For updating data, Kong uses the database polling method; it may take 5-10 seconds to get the latest configuration, while APISIX achieves the same by monitoring etcd configuration changes, which can control the time in milliseconds."),(0,o.kt)("p",null,"Since both APISIX and etcd support multi-instance deployment, there is no single point of failure."),(0,o.kt)("h3",{id:"rich-ecosystem"},"Rich ecosystem"),(0,o.kt)("p",null,"The following figure shows the ecosystem map of APISIX. From this figure, we can see that APISIX supports L7 protocols including HTTP(S), HTTP2, Dubbo, IoT protocol MQTT, etc. In addition, APISIX supports L4 protocols such as TCP/UDP."),(0,o.kt)("p",null,"The right part of the figure contains some open-source or SaaS services, such as Apache SkyWalking, Prometheus, HashiCorp Vault, etc. At the bottom of the figure are the more common operating system environments, cloud vendors, and hardware environments. As an open-source software, APISIX can also be run on ARM64 servers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/07/2.png",alt:"image"})),(0,o.kt)("p",null,"APISIX supports not only many protocols and operating systems but also supports ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/"},"multi-language programming plugins"),". When it first came out, APISIX only supported using the Lua language to write plugins. In this case, developers need to master the technology stack related to Lua and NGINX. However, Lua and NGINX are relatively niche technologies familiar to few developers. Therefore, we have then enabled plugin development on APISIX with multiple languages, and have officially supported languages such as ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/java-plugin-runner/development/"},"Java"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/go-plugin-runner/getting-started/"},"Golang"),", Node.js, and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/python-plugin-runner/getting-started/"},"Python"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/07/3.png",alt:"image"})),(0,o.kt)("h3",{id:"active-community"},"Active community"),(0,o.kt)("p",null,"The figure below is the contributor growth curve, where the horizontal axis represents the timeline, and the vertical axis represents the total number of contributors. We can see that the two projects, Apache APISIX and Kong, are relatively more active. Apache APISIX has maintained an excellent growth rate from the first day and is growing rapidly at a rate close to twice that of Kong. As of July 2022, the number of contributors to APISIX has exceeded Kong, which shows the popularity of APISIX. Of course, there are many other ways to evaluate the activity of a project, such as the monthly active issues, the total number of PRs, etc. The good news is that APISIX is also unrivaled in these aspects."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/07/4.png",alt:"image"})),(0,o.kt)("h2",{id:"unified-proxy-infrastructure"},"Unified proxy infrastructure"),(0,o.kt)("p",null,"From the figure below, I believe you have already understood the goal of APISIX: unifying the proxy infrastructure."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/07/5.png",alt:"image"})),(0,o.kt)("p",null,"Because the core of APISIX is a high-performance proxy service, it does not bind any environment properties. Therefore, when it evolves into products such as Ingress and Service Mesh, you don't have to change the internal structure of APISIX. The following will introduce to you step-by-step how APISIX supports these scenarios."),(0,o.kt)("h3",{id:"load-balance-and-api-gateway"},"Load balance and API gateway"),(0,o.kt)("p",null,"The first is for traditional LB and API gateway scenarios. Because APISIX is implemented based on NGINX + LuaJIT, it has high-performance and security features, and supports the dynamically loading of an SSL certificate, SSL handshake optimization, and other functions. In terms of load balancing, APISIX also performs better. Switching from NGINX to APISIX will not degrade performance but rather improve management efficiency brought about by features such as unified management."),(0,o.kt)("h3",{id:"microservice-gateway"},"Microservice Gateway"),(0,o.kt)("p",null,"APISIX allows you to write extension plugins in multiple languages, which can solve the main problem faced by east-west microservice API gateways - how to manage in a unified way in heterogeneous environments. APISIX also supports service discovery like Nacos, etcd and Eureka, and standard DNS methods, which can completely replace microservice API gateways such as Zuul, Spring Cloud Gateway, and Dubbo."),(0,o.kt)("h3",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,o.kt)("p",null,"Currently, the official Kubernetes Ingress Controller project of K8s is mainly developed based on the NGINX configuration file, so it is slightly insufficient in routing capability and loading mode and has some obvious limitations. For example, when adding or modifying any API, you need to restart the service to complete the update of the new NGINX configuration. Restarting the service has a great impact on online traffic."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started/"},"APISIX Ingress Controller")," perfectly resolves all the limitations mentioned above: it supports fully hot reloading. At the same time, it inherits all the advantages of APISIX and also supports native Kubernetes CRD, which is convenient for users to migrate."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/09/6.png",alt:"image"})),(0,o.kt)("h3",{id:"service-mesh"},"Service mesh"),(0,o.kt)("p",null,"In the next five to ten years, the service mesh architecture based on the cloud-native model will begin to emerge. APISIX has also started to lock the track in advance. After abundant research and technical analysis, APISIX has supported the xDS protocol. APISIX Mesh was born, and APISIX also has a place in the field of service mesh."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://api7.ai/wp-content/uploads/2022/09/7.png",alt:"image"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"It has been three years since the first day Apache APISIX was open-sourced. The highly active community and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/tags/case-studies/"},"case studies")," have proved that APISIX is the perfect API gateway in the cloud-native era. By reading this article, I believe you have a more comprehensive understanding of APISIX."),(0,o.kt)("p",null,"If you have any questions, you can leave a message in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"GitHub issue"),"; community contributors will respond quickly; of course, you can also join the APISIX Slack channel and mailing list; please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join/"},"Join Us"),"."))}u.isMDXComponent=!0}}]);