"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65903:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={title:"prometheus",keywords:["APISIX","API Gateway","Plugin","Prometheus"],description:"This document contains information about the Apache APISIX prometheus Plugin."},s=void 0,o={unversionedId:"plugins/prometheus",id:"plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"This document contains information about the Apache APISIX prometheus Plugin.",source:"@site/docs/apisix/plugins/prometheus.md",sourceDirName:"plugins",slug:"/plugins/prometheus",permalink:"/docs/apisix/next/plugins/prometheus",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/prometheus.md",tags:[],version:"current",frontMatter:{title:"prometheus",keywords:["APISIX","API Gateway","Plugin","Prometheus"],description:"This document contains information about the Apache APISIX prometheus Plugin."},sidebar:"docs",previous:{title:"opentelemetry",permalink:"/docs/apisix/next/plugins/opentelemetry"},next:{title:"node-status",permalink:"/docs/apisix/next/plugins/node-status"}},l=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Specifying <code>export_uri</code>",id:"specifying-export_uri",children:[]},{value:"Specifying <code>metrics</code>",id:"specifying-metrics",children:[]}]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Fetching metrics",id:"fetching-metrics",children:[]},{value:"Using Grafana to graph the metrics",id:"using-grafana-to-graph-the-metrics",children:[]},{value:"Available HTTP metrics",id:"available-http-metrics",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"How to enable it for TCP/UDP",id:"how-to-enable-it-for-tcpudp",children:[]},{value:"Available TCP/UDP metrics",id:"available-tcpudp-metrics",children:[]}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," Plugin exports metrics in ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exposition_formats/#exposition-formats"},"Prometheus exposition format"),"."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prefer_name"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", prints Route/Service name instead of ID in Prometheus metric.")))),(0,i.kt)("h3",{id:"specifying-export_uri"},"Specifying ",(0,i.kt)("inlineCode",{parentName:"h3"},"export_uri")),(0,i.kt)("p",null,"You can change the default export URI by configuring the ",(0,i.kt)("inlineCode",{parentName:"p"},"export_uri")," attribute under ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_attr")," in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),")."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"export_uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),(0,i.kt)("td",{parentName:"tr",align:null},"URI to export the Prometheus metrics.")))),(0,i.kt)("p",null,"Here is a configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),(0,i.kt)("h3",{id:"specifying-metrics"},"Specifying ",(0,i.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,i.kt)("p",null,"For http request related metrics, you could specify extra labels, which match the APISIX variables."),(0,i.kt)("p",null,'If you specify label for nonexist APISIX variable, the label value would be "".'),(0,i.kt)("p",null,"Currently, only below metrics are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http_status"),(0,i.kt)("li",{parentName:"ul"},"http_latency"),(0,i.kt)("li",{parentName:"ul"},"bandwidth")),(0,i.kt)("p",null,"Here is a configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'plugin_attr:\n  prometheus:\n    metrics:\n        http_status:\n            extra_labels:\n                - upstream_addr: $upstream_addr\n                - upstream_status: $upstream_status\n\n## API\n\nThis Plugin will add the API endpoint `/apisix/prometheus/metrics` or your custom export URI for exposing the metrics.\n\nThese metrics are exposed by a separate Prometheus server address. By default, the address is `127.0.0.1:9091`. You can change it in your configuration file (`conf/config.yaml`):\n\n```yaml title="conf/config.yaml"\nplugin_attr:\n  prometheus:\n    export_addr:\n      ip: ${{INTRANET_IP}}\n      port: 9092\n')),(0,i.kt)("p",null,"Now, if the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"INTRANET_IP")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"172.1.1.1"),", APISIX will export the metrics via ",(0,i.kt)("inlineCode",{parentName:"p"},"172.1.1.1:9092"),"."),(0,i.kt)("p",null,"If you still want to expose the metrics via the data plane port (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"9080"),"), you can configure it as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  prometheus:\n    enable_export_server: false\n")),(0,i.kt)("p",null,"You can then expose it by using the ",(0,i.kt)("a",{parentName:"p",href:"public-api.md"},"public-api")," Plugin."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the Prometheus plugin collects too many metrics, it will take CPU resources to calculate the metric data when getting the metrics via URI, which may affect APISIX to process normal requests. To solve this problem, APISIX exposes the URI and calculates the metrics in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openresty/lua-resty-core/blob/master/lib/ngx/process.md#enable_privileged_agent"},"privileged agent"),".\nIf the URI is exposed using the public-api plugin, then APISIX will calculate the metric data in a normal worker process, which may still affect APISIX processing of normal requests."),(0,i.kt)("p",{parentName:"div"},"This feature requires APISIX to run on ",(0,i.kt)("a",{parentName:"p",href:"../FAQ.md#how-do-i-build-the-apisix-base-environment"},"APISIX-Base"),"."))),(0,i.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," Plugin can be enabled with an empty table."),(0,i.kt)("p",null,"The example below shows how you can configure the Plugin on a specific Route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"prefer_name")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," make sure to not duplicate names for multiple Routes/Services or it could be misleading."))),(0,i.kt)("h2",{id:"fetching-metrics"},"Fetching metrics"),(0,i.kt)("p",null,"You can fetch the metrics from the specified export URI (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,i.kt)("p",null,"You can add this address to Prometheus to fetch the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'scrape_configs:\n  - job_name: "apisix"\n    scrape_interval: 15s # This value will be related to the time range of the rate function in Prometheus QL. The time range in the rate function should be at least twice this value.\n    metrics_path: "/apisix/prometheus/metrics"\n    static_configs:\n      - targets: ["127.0.0.1:9091"]\n')),(0,i.kt)("p",null,"Now, you will be able to check the status in your Prometheus console:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus01.png",alt:"checking status on prometheus dashboard"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus02.png",alt:"prometheus apisix in-depth metric view"})),(0,i.kt)("h2",{id:"using-grafana-to-graph-the-metrics"},"Using Grafana to graph the metrics"),(0,i.kt)("p",null,"Metrics exported by the ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," Plugin can be graphed in Grafana using a drop in dashboard."),(0,i.kt)("p",null,"To set it up, download ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/assets/other/json/apisix-grafana-dashboard.json"},"Grafana dashboard meta")," and import it in Grafana. Or, you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana official")," for Grafana metadata."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-1.png",alt:"Grafana chart-1"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-2.png",alt:"Grafana chart-2"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-3.png",alt:"Grafana chart-3"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-4.png",alt:"Grafana chart-4"})),(0,i.kt)("h2",{id:"available-http-metrics"},"Available HTTP metrics"),(0,i.kt)("p",null,"The following metrics are exported by the ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," Plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Status code: HTTP status code returned from Upstream services. They are available for a single service and across all services."),(0,i.kt)("p",{parentName:"li"},"The available attributes are:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"code"),(0,i.kt)("td",{parentName:"tr",align:null},"HTTP status code returned by the upstream service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"route"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"route_id")," of the matched Route with request. Defaults to an empty string if the Routes don't match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"matched_uri"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uri")," of the Route matching the request. Defaults to an empty string if the Routes don't match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"matched_host"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"host")," of the Route matching the request. Defaults to an empty string if the Routes don't match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the Route matching the request. If the Route does not have a ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," configured, it defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the Consumer matching the request. Defaults to an empty string if it does not match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"IP address of the Upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bandwidth: Total amount of traffic (ingress and egress) flowing through APISIX. Total bandwidth of a service can also be obtained."),(0,i.kt)("p",{parentName:"li"},"The available attributes are:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of traffic (egress/ingress).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"route"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"route_id")," of the matched Route with request. Defaults to an empty string if the Routes don't match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the Route matching the request. If the Route does not have a ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," configured, it defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the Consumer matching the request. Defaults to an empty string if it does not match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"IP address of the Upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"etcd reachability: A gauge type representing whether etcd can be reached by APISIX. A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," represents reachable and ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," represents unreachable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connections: Nginx connection metrics like active, reading, writing, and number of accepted connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Batch process entries: A gauge type useful when Plugins like ",(0,i.kt)("a",{parentName:"p",href:"./syslog.md"},"syslog"),", ",(0,i.kt)("a",{parentName:"p",href:"./http-logger.md"},"http-logger"),", ",(0,i.kt)("a",{parentName:"p",href:"./tcp-logger.md"},"tcp-logger"),", ",(0,i.kt)("a",{parentName:"p",href:"./udp-logger.md"},"udp-logger"),", and ",(0,i.kt)("a",{parentName:"p",href:"./zipkin.md"},"zipkin")," use batch process to send data. Entries that hasn't been sent in batch process will be counted in the metrics.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Latency: Histogram of the request time per service in different dimensions."),(0,i.kt)("p",{parentName:"li"},"The available attributes are:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"Value can be one of ",(0,i.kt)("inlineCode",{parentName:"td"},"apisix"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"upstream"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"request"),". This translates to latency caused by APISIX, Upstream, or both (their sum).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"service"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," of the Route matching the request. If the Route does not have a ",(0,i.kt)("inlineCode",{parentName:"td"},"service_id")," configured, it defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"$host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"consumer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumer_name")," of the Consumer matching the request. Defaults to an empty string if it does not match.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node"),(0,i.kt)("td",{parentName:"tr",align:null},"IP address of the Upstream node."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Info: Information about the APISIX node.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shared dict: The capacity and free space of all nginx.shared.DICT in APISIX."))),(0,i.kt)("p",null,"Here are the original metrics from APISIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 8417\napisix_bandwidth{type="egress",route="1",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="egress",route="2",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 189\napisix_bandwidth{type="ingress",route="1",service="",consumer="",node="127.0.0.1"} 332\napisix_bandwidth{type="ingress",route="2",service="",consumer="",node="127.0.0.1"} 332\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",route="1",matched_uri="/hello",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="200",route="2",matched_uri="/world",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 1\n# HELP apisix_http_requests_total The total number of client requests\n# TYPE apisix_http_requests_total gauge\napisix_http_requests_total 1191780\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n# HELP apisix_shared_dict_capacity_bytes The capacity of each nginx shared DICT since APISIX start\n# TYPE apisix_shared_dict_capacity_bytes gauge\napisix_shared_dict_capacity_bytes{name="access-tokens"} 1048576\napisix_shared_dict_capacity_bytes{name="balancer-ewma"} 10485760\napisix_shared_dict_capacity_bytes{name="balancer-ewma-last-touched-at"} 10485760\napisix_shared_dict_capacity_bytes{name="balancer-ewma-locks"} 10485760\napisix_shared_dict_capacity_bytes{name="discovery"} 1048576\napisix_shared_dict_capacity_bytes{name="etcd-cluster-health-check"} 10485760\n...\n# HELP apisix_shared_dict_free_space_bytes The free space of each nginx shared DICT since APISIX start\n# TYPE apisix_shared_dict_free_space_bytes gauge\napisix_shared_dict_free_space_bytes{name="access-tokens"} 1032192\napisix_shared_dict_free_space_bytes{name="balancer-ewma"} 10412032\napisix_shared_dict_free_space_bytes{name="balancer-ewma-last-touched-at"} 10412032\napisix_shared_dict_free_space_bytes{name="balancer-ewma-locks"} 10412032\napisix_shared_dict_free_space_bytes{name="discovery"} 1032192\napisix_shared_dict_free_space_bytes{name="etcd-cluster-health-check"} 10412032\n...\n')),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"how-to-enable-it-for-tcpudp"},"How to enable it for TCP/UDP"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature requires APISIX to run on ",(0,i.kt)("a",{parentName:"p",href:"../FAQ.md#how-do-i-build-the-apisix-base-environment?"},"APISIX-Base"),"."))),(0,i.kt)("p",null,"We can also enable ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," to collect metrics for TCP/UDP."),(0,i.kt)("p",null,"First of all, ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin is in your configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"stream_plugins:\n  - ...\n  - prometheus\n")),(0,i.kt)("p",null,"Then you need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," plugin on the stream route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"available-tcpudp-metrics"},"Available TCP/UDP metrics"),(0,i.kt)("p",null,"The following metrics are available when using APISIX as an L4 proxy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Stream Connections"),": The number of processed connections at the route level."),(0,i.kt)("p",{parentName:"li"},"  Attributes:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"route"),(0,i.kt)("td",{parentName:"tr",align:null},"matched stream route ID"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Connections"),": Various Nginx connection metrics like active, reading, writing, and number of accepted connections.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Info"),": Information about the current APISIX node."))),(0,i.kt)("p",null,"Here are examples of APISIX metrics:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n# HELP apisix_stream_connection_total Total number of connections handled per stream route in APISIX\n# TYPE apisix_stream_connection_total counter\napisix_stream_connection_total{route="1"} 1\n')))}c.isMDXComponent=!0}}]);