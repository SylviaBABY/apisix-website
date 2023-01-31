"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||l[d]||s;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39649:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const s={title:"How to access Apache APISIX Prometheus metrics on Kubernetes"},a=void 0,o={unversionedId:"tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",id:"tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",isDocsHomePage:!1,title:"How to access Apache APISIX Prometheus metrics on Kubernetes",description:"Observability (monitoring functionality) has always played an essential role in system maintenance. A sound monitoring system can help engineers quickly understand the status of services running in production environments and locate problems or give early warning of anomalies when they occur.",source:"@site/docs/apisix-ingress-controller/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",permalink:"/zh/docs/ingress-controller/next/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s.md",tags:[],version:"current",frontMatter:{title:"How to access Apache APISIX Prometheus metrics on Kubernetes"},sidebar:"docs",previous:{title:"Enable authentication and restriction",permalink:"/zh/docs/ingress-controller/next/tutorials/enable-authentication-and-restriction"},next:{title:"How to use go-plugin-runner with APISIX Ingress",permalink:"/zh/docs/ingress-controller/next/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress"}},c=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Begin to access Apache APISIX Prometheus Metrics",id:"begin-to-access-apache-apisix-prometheus-metrics",children:[{value:"Step 1: Enable Prometheus Plugin",id:"step-1-enable-prometheus-plugin",children:[]},{value:"Step 2: Enable <code>public-api</code> Plugin",id:"step-2-enable-public-api-plugin",children:[]},{value:"Step 3: Collect the Metrics",id:"step-3-collect-the-metrics",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Observability (monitoring functionality) has always played an essential role in system maintenance. A sound monitoring system can help engineers quickly understand the status of services running in production environments and locate problems or give early warning of anomalies when they occur."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Prometheus")," is a leading open-source project focused on metrics and alerting that has changed the way the world does monitoring and observability. For more information, see ",(0,r.kt)("em",{parentName:"p"},"Prometheus"),"'s official ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"website"),"."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"In the APISIX Ingress environment, ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," plugins are enabled and the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/#specifying-metrics"},"prometheus pluginAttrs")," are configured. Please refer to the following install example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\nhelm install apisix apisix/apisix -f values.yaml --create-namespace -n ingress-apisix\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"values.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"gateway:\n  type: NodePort\n\ningress-controller:\n  enabled: true\n  config:\n    apisix:\n      serviceNamespace: ingress-apisix\n\npluginAttrs:\n  prometheus:\n    enable_export_server: false\n\nplugins:\n  - api-breaker\n  - authz-keycloak\n  - basic-auth\n  - batch-requests\n  - consumer-restriction\n  - cors\n  - echo\n  - fault-injection\n  - file-logger\n  - grpc-transcode\n  - hmac-auth\n  - http-logger\n  - ip-restriction\n  - ua-restriction\n  - jwt-auth\n  - kafka-logger\n  - key-auth\n  - limit-conn\n  - limit-count\n  - limit-req\n  - node-status\n  - openid-connect\n  - authz-casbin\n  - proxy-cache\n  - proxy-mirror\n  - proxy-rewrite\n  - redirect\n  - referer-restriction\n  - request-id\n  - request-validation\n  - response-rewrite\n  - serverless-post-function\n  - serverless-pre-function\n  - sls-logger\n  - syslog\n  - tcp-logger\n  - udp-logger\n  - uri-blocker\n  - wolf-rbac\n  - zipkin\n  - traffic-split\n  - gzip\n  - real-ip\n  - ext-plugin-pre-req\n  - ext-plugin-post-req\n  - prometheus # enable prometheus\n  - public-api # enable public-api\n\n"))),(0,r.kt)("h2",{id:"begin-to-access-apache-apisix-prometheus-metrics"},"Begin to access Apache APISIX Prometheus Metrics"),(0,r.kt)("p",null,"Before starting, please make sure that Apache APISIX (version >= 2.13)and APISIX Ingress controller are installed and working correctly. APISIX uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin to expose metrics and integrate with prometheus but uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to enhance its security after version 2.13. For more information, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin's official ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api/"},"document"),"."),(0,r.kt)("h3",{id:"step-1-enable-prometheus-plugin"},"Step 1: Enable Prometheus Plugin"),(0,r.kt)("p",null,"If you need to monitor Apache APISIX simultaneously, you can create the following ApisixClusterConfig resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f default.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# default.yaml\napiVersion: apisix.apache.org/v2\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n")),(0,r.kt)("h3",{id:"step-2-enable-public-api-plugin"},"Step 2: Enable ",(0,r.kt)("inlineCode",{parentName:"h3"},"public-api")," Plugin"),(0,r.kt)("p",null,"Let's make a basic routing setup, and please note that further configuration should be done based on your local backend service information. The primary solution concept is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to protect the routes exposed by ",(0,r.kt)("em",{parentName:"p"},"Prometheus"),". For a more detailed configuration, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api/#example"},"example")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f prometheus-route.yaml -n ingress-apisix\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# prometheus-route.yaml\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: prometheus-route\nspec:\n  http:\n  - name: public-api\n    match:\n      hosts:\n      - test.prometheus.org\n      paths:\n      - /apisix/prometheus/metrics\n    backends:\n    ## Please notice that there must be your actual "serviceName" and "servicePort", and must be in the same namespace.\n    - serviceName: apisix-admin\n      servicePort: 9180\n    plugins:\n    - name: public-api\n      enable: true\n')),(0,r.kt)("h3",{id:"step-3-collect-the-metrics"},"Step 3: Collect the Metrics"),(0,r.kt)("p",null,"Use port forwarding to access service ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway")," in a cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Forward to 127.0.0.1:9080\nkubectl port-forward service/apisix-gateway 9080:80 -n ingress-apisix\n")),(0,r.kt)("p",null,"Now you can then get the indicator parameters by requesting command access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://127.0.0.1:9080/apisix/prometheus/metrics -H 'Host: test.prometheus.org'\n")),(0,r.kt)("p",null,"Then you will get the metrics you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Defaulted container "apisix" out of: apisix, wait-etcd (init)\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in APISIX\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 1130\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 517\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 13\napisix_etcd_modify_indexes{key="max_modify_index"} 13\napisix_etcd_modify_indexes{key="prev_index"} 13\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 0\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 13\n# HELP apisix_etcd_reachable Config server etcd reachable from APISIX, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="apisix",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="20"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="50"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="100"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="200"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="500"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="1000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="2000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="5000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="10000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="30000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="60000"} 5\napisix_http_latency_bucket{type="request",route="",service="",consumer="",node="",le="+Inf"} 5\napisix_http_latency_count{type="apisix",route="",service="",consumer="",node=""} 5\napisix_http_latency_count{type="request",route="",service="",consumer="",node=""} 5\napisix_http_latency_sum{type="apisix",route="",service="",consumer="",node=""} 0\napisix_http_latency_sum{type="request",route="",service="",consumer="",node=""} 0\n# HELP apisix_http_requests_total The total number of client requests since APISIX started\n# TYPE apisix_http_requests_total gauge\napisix_http_requests_total 82\n# HELP apisix_http_status HTTP status codes per service in APISIX\n# TYPE apisix_http_status counter\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 5\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 2346\napisix_nginx_http_current_connections{state="active"} 1\napisix_nginx_http_current_connections{state="handled"} 2346\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="waiting"} 0\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="apisix-7d6b8577b6-rqhq9"} 1\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This article describes how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to protect ",(0,r.kt)("em",{parentName:"p"},"Prometheus")," and monitor the Apache APISIX. Currently, only some basic configurations include. We will continue to polish and upgrade, add more metrics and integrate data surface APISIX metrics to improve your monitoring experience."),(0,r.kt)("p",null,"Of course, we welcome all interested parties to contribute to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller"},"Apache APISIX Ingress Controller project")," and look forward to working together to make the APISIX Ingress Controller more comprehensive."))}u.isMDXComponent=!0}}]);