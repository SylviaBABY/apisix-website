"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44547:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"zipkin",keywords:["APISIX","Plugin","Zipkin","zipkin"],description:"This document contains information about the Apache zipkin Plugin."},p=void 0,l={unversionedId:"plugins/zipkin",id:"plugins/zipkin",isDocsHomePage:!1,title:"zipkin",description:"This document contains information about the Apache zipkin Plugin.",source:"@site/docs/apisix/plugins/zipkin.md",sourceDirName:"plugins",slug:"/plugins/zipkin",permalink:"/docs/apisix/next/plugins/zipkin",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/zipkin.md",tags:[],version:"current",frontMatter:{title:"zipkin",keywords:["APISIX","Plugin","Zipkin","zipkin"],description:"This document contains information about the Apache zipkin Plugin."},sidebar:"docs",previous:{title:"client-control",permalink:"/docs/apisix/next/plugins/client-control"},next:{title:"skywalking",permalink:"/docs/apisix/next/plugins/skywalking"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Sample code for upstream configuration",id:"sample-code-for-upstream-configuration",children:[]}]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Reporting traces to Jaeger",id:"reporting-traces-to-jaeger",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"Zipkin")," is an open source distributed tracing system. The ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," Plugin supports collecting and reporting traces to Zipkin collector based on the ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/instrumenting.html"},"Zipkin API specification"),"."),(0,r.kt)("p",null,"It also works with ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/docs/main/latest/en/setup/backend/zipkin-trace/#zipkin-receiver"},"Apache SkyWalking")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.31/getting-started/#migrating-from-zipkin"},"Jaeger"),", both of which support Zipkin ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin-api.yaml"},"v1")," and ",(0,r.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin2-api.yaml"},"v2")," APIs. It can also work with other tracing systems adapted to Zipkin v1/v2 API format."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Zipkin HTTP endpoint. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:9411/api/v2/spans"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,r.kt)("td",{parentName:"tr",align:null},"How often to sample the requests. Setting to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," will sample all requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Service name for the Zipkin reporter to be displayed in Zipkin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$server_addr")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 address for the Zipkin reporter. You can specify your external IP address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"span_version"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 2]"),(0,r.kt)("td",{parentName:"tr",align:null},"Version of the span type.")))),(0,r.kt)("p",null,"Each traced request will create the spans shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 proxy: from the beginning of the request to the beginning of header filter\n\u2514\u2500\u2500 response: from the beginning of header filter to the beginning of log\n")),(0,r.kt)("p",null,"For older versions (set ",(0,r.kt)("inlineCode",{parentName:"p"},"span_version")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"), these spans are created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 rewrite\n\u251c\u2500\u2500 access\n\u2514\u2500\u2500 proxy\n    \u2514\u2500\u2500 body_filter\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The span name doesn't represent the corresponding Nginx phase."))),(0,r.kt)("h3",{id:"sample-code-for-upstream-configuration"},"Sample code for upstream configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Go with Gin"',title:'"Go',with:!0,'Gin"':!0},'func GetTracer(serviceName string, port int, enpoitUrl string, rate float64) *zipkin.Tracer {\n    // create a reporter to be used by the tracer\n    reporter := httpreporter.NewReporter(enpoitUrl)\n    // set-up the local endpoint for our service host is ip:host\n\n    thisip, _ := GetLocalIP()\n\n    host := fmt.Sprintf("%s:%d", thisip, port)\n    endpoint, _ := zipkin.NewEndpoint(serviceName, host)\n    // set-up our sampling strategy\n    sampler, _ := zipkin.NewCountingSampler(rate)\n    // initialize the tracer\n    tracer, _ := zipkin.NewTracer(\n        reporter,\n        zipkin.WithLocalEndpoint(endpoint),\n        zipkin.WithSampler(sampler),\n    )\n    return tracer\n}\n\nfunc main(){\n    r := gin.Default()\n\n    tracer := GetTracer(...)\n\n    // use middleware to extract parentID from http header that injected by APISIX\n    r.Use(func(c *gin.Context) {\n        span := this.Tracer.Extract(b3.ExtractHTTP(c.Request))\n        childSpan := this.Tracer.StartSpan(spanName, zipkin.Parent(span))\n        defer childSpan.Finish()\n        c.Next()\n    })\n\n}\n')),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below enables the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"You need to have your Zipkin instance running. You can run Zipkin on Docker by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9411:9411 openzipkin/zipkin\n")),(0,r.kt)("p",null,"Now, when you make requests, it will be updated in Zipkin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"You can then open up the Zipkin UI on your browser at ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9411/zipkin"},"http://127.0.0.1:9411/zipkin"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-1.jpg",alt:"zipkin web-ui"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/zipkin-2.jpg",alt:"zipkin web-ui list view"})),(0,r.kt)("h3",{id:"reporting-traces-to-jaeger"},"Reporting traces to Jaeger"),(0,r.kt)("p",null,"The Plugin also supports reporting traces to Jaeger. First, you have to have Jaeger running."),(0,r.kt)("p",null,"To run it on Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 16686:16686 \\\n  -p 9411:9411 \\\n  jaegertracing/all-in-one:1.31\n")),(0,r.kt)("p",null,"Similar to configuring for Zipkin, create a Route and enable the Plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, when you make requests, it will be updated on Jaeger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"You can access the Jaeger UI to view the traces in endpoint ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:16686"},"http://127.0.0.1:16686"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/jaeger-1.png",alt:"jaeger web-ui"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/jaeger-2.png",alt:"jaeger web-ui trace"})),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"zipkin")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);