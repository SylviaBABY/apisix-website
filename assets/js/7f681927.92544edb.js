"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3574],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const r={title:"Apache APISIX 3.0: 10 Highlights of Open Source API Gateway",authors:[{name:"Ming Wen",title:"Author",url:"https://github.com/moonming",image_url:"https://avatars.githubusercontent.com/u/26448043"}],keywords:["Ingress controller","Open Source API Gateway","API Management Platform","The Best API Gateway","Apache APISIX"],description:"The open source API Gateway Apache APISIX beta version 3.0 is coming! We have selected ten essential features to give a brief introduction before the official release.",tags:["Products"],image:"https://static-site.apiseven.com/wp-content/uploads/2022/09/APISIX.webp"},i=void 0,s={permalink:"/blog/2022/09/21/apache-apisix-v3-preview",source:"@site/blog/2022/09/21/apache-apisix-v3-preview.md",title:"Apache APISIX 3.0: 10 Highlights of Open Source API Gateway",description:"The open source API Gateway Apache APISIX beta version 3.0 is coming! We have selected ten essential features to give a brief introduction before the official release.",date:"2022-09-21T00:00:00.000Z",formattedDate:"September 21, 2022",tags:[{label:"Products",permalink:"/blog/tags/products"}],readingTime:11.12,truncated:!0,authors:[{name:"Ming Wen",title:"Author",url:"https://github.com/moonming",image_url:"https://avatars.githubusercontent.com/u/26448043",imageURL:"https://avatars.githubusercontent.com/u/26448043"}],prevItem:{title:"Building event-driven API services using CQRS, API Gateway and Serverless",permalink:"/blog/2022/09/23/build-event-driven-api"},nextItem:{title:"Why Is Apache APISIX the Best API Gateway?",permalink:"/blog/2022/09/13/why-is-apache-apisix-the-best-api-gateway"}},l={authorsImageUrls:[void 0]},p=[{value:"API Gateway Apache APISIX",id:"api-gateway-apache-apisix",children:[],level:2},{value:"Support More Programming Languages",id:"support-more-programming-languages",children:[],level:2},{value:"Support WASM",id:"support-wasm",children:[],level:2},{value:"10 New Highlights of APISIX 3.0",id:"10-new-highlights-of-apisix-30",children:[{value:"Full Support of ARM64",id:"full-support-of-arm64",children:[],level:3},{value:"Adding gRPC Client",id:"adding-grpc-client",children:[],level:3},{value:"Redesigning Admin API",id:"redesigning-admin-api",children:[],level:3},{value:"Data Plane(DP) and Control Plane(CP) Separation",id:"data-planedp-and-control-planecp-separation",children:[],level:3},{value:"Improved Service Discovery Support",id:"improved-service-discovery-support",children:[],level:3},{value:"Adding xRPC Framework",id:"adding-xrpc-framework",children:[],level:3},{value:"Supporting More Observability on Transport Layer Protocols",id:"supporting-more-observability-on-transport-layer-protocols",children:[],level:3},{value:"Integrating the OpenAPI Specification",id:"integrating-the-openapi-specification",children:[],level:3},{value:"Full Support for Gateway API and Service Mesh",id:"full-support-for-gateway-api-and-service-mesh",children:[],level:3},{value:"Integrate with More Ecosystems",id:"integrate-with-more-ecosystems",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The open source API Gateway Apache APISIX beta version 3.0 is coming! We have selected ten essential features to give a brief introduction before the official release.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/api-gateway/"},"API Gateway")," has acted as an essential component for a long time. It has been committed to providing various functions such as ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/limit-req/"},"rate limiting"),", authentication (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis/"},"Use Keycloak to secure APIs"),"), and observability at the business level."),(0,o.kt)("p",null,"With the iteration of server-side technologies, more and more services have begun to migrate from bare metal to Kubernetes, and the original monolithic architecture has gradually evolved into a microservice architecture. At the same time, enterprises have started to migrate their on-premise data centers to multi-cloud or hybrid clouds."),(0,o.kt)("p",null,"With these technological advancements in the environment, the requirements for API gateways at the business level have become increasingly complex."),(0,o.kt)("h2",{id:"api-gateway-apache-apisix"},"API Gateway Apache APISIX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://github.com/apache/apisix"},"Apache APISIX")," was born to help enterprises solve new problems in cloud-native environments and microservices. For example, it provides autoscaling of the business traffic through the fully dynamic feature and one-time modification to more conveniently achieve cluster management."),(0,o.kt)("p",null,"Therefore, in the architectural design of APISIX, the data plane and the control plane are separated to achieve fully dynamic and cluster management, which is mainly accomplished by etcd components."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/21/632ab5bd35b73.png",alt:"Apache APISIX  Architecture"})),(0,o.kt)("p",null,"APISIX stores and manages routing-related and plugin-related configurations in etcd. As shown in the figure above, the configurations from ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/"},"Admin API")," (Control Plane) are stored in etcd, while the data plane on the left mainly monitors the changes of etcd. The data plane can quickly observe changes without needing to modify configuration files."),(0,o.kt)("p",null,"But just solving these problems is not enough. As a middleware with requests from both ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/upstream/"},"upstream")," and downstream, the API gateway plays a crucial position in the enterprise architecture as the traffic entrance and the connection between the service layers. API gateway's role differs from databases that only receive requests from the user's business level."),(0,o.kt)("p",null,"In addition to business-level requirements, API gateways also have requirements for customization and integration. So how to make custom development easier for developers when using APISIX is another significant pain point that APISIX solves, lowering the threshold for developers to code."),(0,o.kt)("p",null,"In APISIX, plugins are developed mainly through Lua, and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua/"},"LuaJIT")," (a Just-In-Time Compiler for Lua) is used to ensure that the compiled code performance is good enough. However, as a relatively minor language, the learning cost of Lua is high for most backend engineers. To solve this problem, APISIX provides two solutions."),(0,o.kt)("h2",{id:"support-more-programming-languages"},"Support More Programming Languages"),(0,o.kt)("p",null,"The first solution is to support more widely-used programming languages \u200b\u200b(such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner"},"Java"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-python-plugin-runner"},"Python"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/08/19/go-makes-apache-apisix-better/"},"Go"),", etc.) through ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/external-plugin/"},"Plugin Runner"),". You will know at least one of these languages if you are a backend engineer. Using Plugin Runner, backend engineers can communicate through local RPC to develop APISIX plugins using the programming languages they are familiar with."),(0,o.kt)("p",null,"The advantage of this is to reduce development costs and improve development efficiency. The disadvantage will be performance losses. So, is there a way to achieve the near-native performance of Lua using high-level languages that developers are familiar with?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/21/632ab5bddbb29.png",alt:"Apache APISIX Plugin Runner"})),(0,o.kt)("h2",{id:"support-wasm"},"Support WASM"),(0,o.kt)("p",null,"The second solution is to use Wasm to develop plugins, as shown in the left part of the above figure. Wasm (WebAssembly) was first used as a new type of technology that runs in browsers, but now it is also gradually showing its advantages on the server side."),(0,o.kt)("p",null,"We embedded ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/wasm/"},"Wasm")," into APISIX, and users can use Wasm to compile Wasm bytecode to run in APISIX. Furthermore, to use Wasm, we developed a Wasm plugin where users can establish near-native APISIX plugins using high-level programming languages."),(0,o.kt)("p",null,"As a result, users can use Lua, Go, Python, Wasm, etc., to write custom plugins on APISIX. Furthermore, making development easy opens doors for APISIX plugin development."),(0,o.kt)("p",null,"Thanks to APISIX's architecture and performance upper hand, APISIX's global user growth has far exceeded expectations in the three years since its inception. For example, big Chinese tech companies such as ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/09/28/wps-usercase/"},"WPS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix/"},"Sina Weibo"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/09/07/iqiyi-usercase/"},"iQiyi")," are enterprise-level users carrying tens of billions of API requests daily. In addition, scientific research institutions such as NASA and European Factory Platform are using APISIX."),(0,o.kt)("h2",{id:"10-new-highlights-of-apisix-30"},"10 New Highlights of APISIX 3.0"),(0,o.kt)("p",null,"APISIX proposed a new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6473"},"3.0 Roadmap")," in early 2022. In version 3.0, its iterations and updates will focus on usability and the ecosystem."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/22/632bd6f95717a.png",alt:"Apache APISIX 3.0 Roadmap"})),(0,o.kt)("p",null,"APISIX plans to launch beta version 3.0 by the end of September. Here, we have selected the following ten eye-catching features to give a brief introduction before the official release."),(0,o.kt)("h3",{id:"full-support-of-arm64"},"Full Support of ARM64"),(0,o.kt)("p",null,"ARM64 has become a very mainstream server architecture selection for cloud manufacturers. From ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/06/07/installation-performance-test-of-apigateway-apisix-on-aws-graviton3/"},"AWS Graviton"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/07/22/how-is-google-cloud-tau-t2a-performing/"},"GCP Tau T2A")," to Huawei Kunpeng and other products, we can see that various cloud manufacturers have begun to launch servers based on the Arm architecture. The following graph shows the stress testing performance of APISIX on popular Arm-based servers:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/21/632ab5beacad4.png",alt:"Apache APISIX Benchmark"})),(0,o.kt)("p",null,"According to the current data, the performance of Arm-based servers is slightly better than the performance of the x86. To conform to the technological trend of the times, APISIX also did comprehensive CI regression testing on ARM64 to ensure that users can still run various functions smoothly when running APISIX in the Arm architecture."),(0,o.kt)("h3",{id:"adding-grpc-client"},"Adding gRPC Client"),(0,o.kt)("p",null,"In version 3.0, Apache APISIX will support a new ",(0,o.kt)("inlineCode",{parentName:"p"},"core.grpc")," module. However, if you are familiar with NGINX and OpenResty, you should know that their support for gRPC is pretty limited, only providing basic features like reverse proxy or load balancing."),(0,o.kt)("p",null,"APISIX has already implemented the transcode between gRPC and HTTP protocols in the current 2.x version. In version 3.0, Apache APISIX will add a new gRPC client to allow developers to directly call third-party gRPC services without introducing additional components or requiring service providers to use different HTTP interfaces, making the process much simpler."),(0,o.kt)("h3",{id:"redesigning-admin-api"},"Redesigning Admin API"),(0,o.kt)("p",null,"When using APISIX today, you may find that the response body of APISIX is mixed with a lot of meaningless data, such as some etcd return values that are passed directly to the client without any tailoring. Also, the entire response body\u2019s architectural design is not ideal, with many redundant fields."),(0,o.kt)("p",null,"In APISIX 3.0 version, the response body\u2019s structure has been improved. In addition, the new design makes the overall request format and returns body more RESTful, making it easier for users to use the latest version of Admin API. Of course, this process also allows you to set which version of the Admin API to use through parameters, freeing users from fears of upgrading to incompatible versions."),(0,o.kt)("h3",{id:"data-planedp-and-control-planecp-separation"},"Data Plane(DP) and Control Plane(CP) Separation"),(0,o.kt)("p",null,"APISIX has suffered several security-related vulnerabilities in the last two years. The root cause of most vulnerabilities is that the DP and the CP are deployed together in the default deployment mode. Therefore, once a security vulnerability exists on the data plane, an attacker can directly invade the CP through the DP, affecting all other DPs."),(0,o.kt)("p",null,"Therefore, in version 3.0, the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/deployment-modes/"},"deployment mode")," configuration is supported, and the default deployment mode is ",(0,o.kt)("inlineCode",{parentName:"p"},"traditional"),", where the DP and the CP are deployed together. Of course, the new deployment mode recommends that you set the attribute to data_plane or control_plane to separate them."),(0,o.kt)("p",null,"When they are separated, not only can the security risks mentioned above be solved, but function iterations on the DP and CP are also more manageable without affecting each other."),(0,o.kt)("h3",{id:"improved-service-discovery-support"},"Improved Service Discovery Support"),(0,o.kt)("p",null,"In the current version, APISIX has supported the integration of many service discovery components, such as Apache ZooKeeper, ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/25/consul-api-gateway/"},"Consul"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/21/nacos-api-gateway/"},"Nacos"),", and so on. But at the moment, these integrations are all done on the data plane. Once you have a lot of nodes on the DP, it will put much pressure on the following service discovery components. At the same time, in the actual production environment of users, they want a simple integration like Consul KV or DNS integration and complete integration of functions such as health checks."),(0,o.kt)("p",null,"Therefore, in APISIX 3.0, we added a layer of abstraction by adding a sub-project APISIX-SEED to achieve the service discovery support at the control plane level and reduce the pressure on the service discovery component."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/21/632ab5bf916e4.png",alt:"Apache APISIX with Service Discovery"})),(0,o.kt)("h3",{id:"adding-xrpc-framework"},"Adding xRPC Framework"),(0,o.kt)("p",null,"TCP Proxy is supported in the current version of APISIX, but there are times when a pure TCP protocol proxy is insufficient. Users need a proxy for specific application protocols, such as Redis Proxy, Kafka Proxy, etc., because some functions can only be implemented after the protocol is encoded and decoded."),(0,o.kt)("p",null,"Therefore, in version 3.0, APISIX implements a transport layer protocol extension framework called xRPC that allows developers to customize specific application protocols. Based on xRPC, developers can encode and decode requests and responses through Lua codes and then realize fault injection, log reporting, and dynamic routing based on understanding the content of the protocol."),(0,o.kt)("p",null,"Based on the xRPC framework, APISIX can provide proxy implementations for several mainstream application protocols. At the same time, users can also support their own private TCP-based application protocols based on this framework, enabling them to have precise granularity and higher order application layer control similar to HTTP protocol proxy. Furthermore, on top of different protocols, some common factors can be abstracted to implement related plugin features so that other protocols can share these features."),(0,o.kt)("h3",{id:"supporting-more-observability-on-transport-layer-protocols"},"Supporting More Observability on Transport Layer Protocols"),(0,o.kt)("p",null,"APISIX has always invested heavily in observability support, supporting almost all observability components, such as ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2022/02/28/apisix-integration-opentelemetry-plugin"},"Zipkin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/12/07/apisix-integrate-skywalking-plugin/"},"Apache SkyWalking"),", ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/11/12/apisix-datadog/"},"Datadog"),", and more. Various logging components are also supported, but most are carried out in the application layer."),(0,o.kt)("p",null,"Apache APISIX will add more transport layer observability support in 3.0. For example, the support for ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/"},"Prometheus")," and various logs has been added, enabling users to observe the problems of application layer traffic easily and enabling users to check the operation status of transport layer traffic."),(0,o.kt)("h3",{id:"integrating-the-openapi-specification"},"Integrating the OpenAPI Specification"),(0,o.kt)("p",null,"API is an element that involves the entire lifecycle of development, from designing to coding, testing, and deploying. In APISIX 3.0, Apache APISIX will support the standard OpenAPI 3.0 specification."),(0,o.kt)("p",null,"Therefore, if you manage the APIs on API design and testing software, it is straightforward to manage and maintain the data in APISIX by exporting and importing it. At the same time, various APIs in APISIX can also be shipped through the OpenAPI 3.0 specification and then imported into other systems for use."),(0,o.kt)("p",null,"In addition, APISIX 3.0 also supports Postman-related custom formats (Postman Collection Format v2), enabling data transfer between the two, thus making integration easier."),(0,o.kt)("h3",{id:"full-support-for-gateway-api-and-service-mesh"},"Full Support for Gateway API and Service Mesh"),(0,o.kt)("p",null,"Support for the ",(0,o.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/"},"Gateway API")," has begun in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues?q=gateway+api"},"APISIX Ingress Controller"),", and nearly all Gateway API configurations are supported in the latest 1.5 release."),(0,o.kt)("p",null,"In this case, the APISIX Ingress can be configured using the Gateway API, which means you can switch between different data planes. By the end of this year, APISIX Ingress will have complete support for the Gateway API and additional transport and application layer features."),(0,o.kt)("p",null,"Unlike most service mesh solutions, APISIX's service mesh solution has advantages in the data plane (due to the high performance of APISIX itself). So, in selecting the control plane, we hope it will be compatible with some mainstream solutions in the community. Finally, by using the xDS protocol to integrate with Istio and writing the obtained configuration to the xDS configuration center of APISIX, the specific routing rules are generated by APISIX to complete the corresponding routing requests."),(0,o.kt)("p",null,"This solution not only makes the entire service mesh lighter but also makes custom development and migration more convenient with the high scalability of APISIX."),(0,o.kt)("h3",{id:"integrate-with-more-ecosystems"},"Integrate with More Ecosystems"),(0,o.kt)("p",null,"In addition to the OpenAPI standard mentioned above, many ecosystem plugins will be added in version 3.0, such as OpenFunction, ClickHouse, Elasticsearch, SAML, CAS, etc., to integrate more support for authentication, security, and observability."),(0,o.kt)("p",null,"One of the exciting plugins, ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/workflow/"},"workflow"),", is used for traffic scheduling: we can do some granular processing at the traffic control level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri":"/hello/*",\n  "plugins":{\n    "workflow":{\n      "rules":[\n        {\n          "case": [\n            ["uri", "==", "/hello/rejected"]\n          ],\n          "actions": [\n            [\n              "return",\n              {"code": 403}\n            ]\n          ]\n        },\n        {\n          "case": [\n            ["uri", "==", "/hello/v2/appid"]\n          ],\n          "actions": [\n            [\n              "limit-count",\n              {\n                "count": 2,\n                "time_window": 60,\n                "rejected_code": 429\n              }\n            ]\n          ]\n        }\n      ]\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')),(0,o.kt)("p",null,"For example, perform a specific action when condition A is true, perform another action when condition B is true, etc. In this way, users can schedule various business traffic more conveniently."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"APISIX has grown a lot from the beginning to the upcoming 3.0 version. However, APISIX has not changed much in architecture but more in ecology, compatibility, and product application."),(0,o.kt)("p",null,"An open source project may not be judged solely on performance and functionality but on the perspective of users, developers, and enterprises to consider whether they can use the product to solve their current pain points quickly and effectively."),(0,o.kt)("p",null,"The highlights and new features mentioned in this article are all created through the open source community, receiving feedback from different developers and enterprise users, making open source products more useful and vibrant."),(0,o.kt)("p",null,"Finally, APISIX 3.0 is expected to be released later this year, and we can look forward to a lot of technical excitement with the new version!"))}h.isMDXComponent=!0}}]);