"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[85925],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74475:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"rocketmq-logger"},i=void 0,o={unversionedId:"plugins/rocketmq-logger",id:"version-2.13/plugins/rocketmq-logger",isDocsHomePage:!1,title:"rocketmq-logger",description:"rocketmq-logger is a plugin which provides the ability to push requests log data as JSON objects to your external rocketmq clusters.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/rocketmq-logger.md",sourceDirName:"plugins",slug:"/plugins/rocketmq-logger",permalink:"/docs/apisix/2.13/plugins/rocketmq-logger",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"rocketmq-logger"},sidebar:"version-2.13/docs",previous:{title:"kafka-logger",permalink:"/docs/apisix/2.13/plugins/kafka-logger"},next:{title:"udp-logger",permalink:"/docs/apisix/2.13/plugins/udp-logger"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"examples of meta_format",id:"examples-of-meta_format",children:[]}]},{value:"Info",id:"info",children:[{value:"Sample Nameserver list",id:"sample-nameserver-list",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Metadata",id:"metadata",children:[{value:"Example",id:"example",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," is a plugin which provides the ability to push requests log data as JSON objects to your external rocketmq clusters."),(0,r.kt)("p",null," In case if you did not receive the log data don't worry give it some time it will automatically send the logs after the timer function expires in our Batch Processor."),(0,r.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/batch-processor"},"Batch-Processor")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nameserver_list"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"An array of rocketmq nameservers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Target  topic to push data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Keys of messages to send.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Tags of messages to send.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for the upstream to send data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to open TLS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"access key for ACL, empty string means disable ACL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"secret key for ACL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"rocketmq logger"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A  unique identifier to identity the batch processor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta_format"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"default"'),(0,r.kt)("td",{parentName:"tr",align:null},'["default"\uff0c"origin"]'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"),": collect the request information with default JSON way. ",(0,r.kt)("inlineCode",{parentName:"td"},"origin"),": collect the request information with original HTTP request. ",(0,r.kt)("a",{parentName:"td",href:"#examples-of-meta_format"},"example"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include the request body. false: indicates that the requested body is not included; true: indicates that the requested body is included. Note: if the request body is too big to be kept in the memory, it can't be logged due to Nginx's limitation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"include_req_body")," is true, control the behavior based on the result of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," expression. If present, only log the request body when the result is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include the response body. The response body is included if and only if it is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," is true, control the behavior based on the result of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," expression. If present, only log the response body when the result is true.")))),(0,r.kt)("p",null,"The plugin supports the use of batch processors to aggregate and process entries(logs/data) in a batch. This avoids frequent data submissions by the plugin, which by default the batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". For information or custom batch processor parameter settings, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/batch-processor#configuration"},"Batch-Processor")," configuration section."),(0,r.kt)("h3",{id:"examples-of-meta_format"},"examples of meta_format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n     "upstream": "127.0.0.1:1980",\n     "start_time": 1619414294760,\n     "client_ip": "127.0.0.1",\n     "service_id": "",\n     "route_id": "1",\n     "request": {\n       "querystring": {\n         "ab": "cd"\n       },\n       "size": 90,\n       "uri": "/hello?ab=cd",\n       "url": "http://localhost:1984/hello?ab=cd",\n       "headers": {\n         "host": "localhost",\n         "content-length": "6",\n         "connection": "close"\n       },\n       "body": "abcdef",\n       "method": "GET"\n     },\n     "response": {\n       "headers": {\n         "connection": "close",\n         "content-type": "text/plain; charset=utf-8",\n         "date": "Mon, 26 Apr 2021 05:18:14 GMT",\n         "server": "APISIX/2.5",\n         "transfer-encoding": "chunked"\n       },\n       "size": 190,\n       "status": 200\n     },\n     "server": {\n       "hostname": "localhost",\n       "version": "2.5"\n     },\n     "latency": 0\n    }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"origin"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"    GET /hello?ab=cd HTTP/1.1\n    host: localhost\n    content-length: 6\n    connection: close\n\n    abcdef\n")),(0,r.kt)("h2",{id:"info"},"Info"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," will write to the buffer first.\nIt will send to the rocketmq server when the buffer exceed the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch_max_size"),",\nor every ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer_duration")," flush the buffer."),(0,r.kt)("p",null,"In case of success, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nIn case of errors, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," with a string describing the error (",(0,r.kt)("inlineCode",{parentName:"p"},"buffer overflow"),")."),(0,r.kt)("h3",{id:"sample-nameserver-list"},"Sample Nameserver list"),(0,r.kt)("p",null,"Specify the nameservers of the external rocketmq servers as below sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "127.0.0.1:9876",\n    "127.0.0.2:9876"\n]\n')),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("p",null,"The following is an example on how to enable the rocketmq-logger for a specific route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "rocketmq-logger": {\n           "nameserver_list" : [ "127.0.0.1:9876" ],\n           "topic" : "test2",\n           "batch_max_size": 1,\n           "name": "rocketmq logger"\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("p",null,"success:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pair in JSON format. Only string is supported in the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," part. If the value starts with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),", it means to get ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/2.13/apisix-variable"},"APISIX variables")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),".")))),(0,r.kt)("p",null," Note that ",(0,r.kt)("strong",{parentName:"p"},"the metadata configuration is applied in global scope"),", which means it will take effect on all Route or Service which use rocketmq-logger plugin."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/rocketmq-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"It is expected to see some logs like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);