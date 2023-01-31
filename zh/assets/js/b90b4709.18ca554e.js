"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[57156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=i,h=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},99231:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"How to use go-plugin-runner with APISIX Ingress",keywords:["Apache APISIX Ingress","Plugin","Ingress Controller","Go Plugin Runner","multi language"],description:"This document walks through how you can use the go plugin runner in the APISIX ingress controller"},o=void 0,l={unversionedId:"tutorials/how-to-use-go-plugin-runner-in-apisix-ingress",id:"version-1.5.0/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress",isDocsHomePage:!1,title:"How to use go-plugin-runner with APISIX Ingress",description:"This document walks through how you can use the go plugin runner in the APISIX ingress controller",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress",permalink:"/zh/docs/ingress-controller/1.5.0/tutorials/how-to-use-go-plugin-runner-in-apisix-ingress",editUrl:null,tags:[],version:"1.5.0",frontMatter:{title:"How to use go-plugin-runner with APISIX Ingress",keywords:["Apache APISIX Ingress","Plugin","Ingress Controller","Go Plugin Runner","multi language"],description:"This document walks through how you can use the go plugin runner in the APISIX ingress controller"},sidebar:"version-1.5.0/docs",previous:{title:"How to access Apache APISIX Prometheus metrics on Kubernetes",permalink:"/zh/docs/ingress-controller/1.5.0/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s"},next:{title:"Install Ingress APISIX on ACK",permalink:"/zh/docs/ingress-controller/1.5.0/deployments/ack"}},s=[{value:"Description",id:"description",children:[]},{value:"Build a cluster environment",id:"build-a-cluster-environment",children:[]},{value:"Build the go-plugin-runner executable",id:"build-the-go-plugin-runner-executable",children:[]},{value:"Build Docker Image",id:"build-docker-image",children:[{value:"Write Dockerfile",id:"write-dockerfile",children:[]},{value:"Begin to build Docker Image",id:"begin-to-build-docker-image",children:[]},{value:"Load the image to the cluster environment",id:"load-the-image-to-the-cluster-environment",children:[]}]},{value:"Install APISIX Ingress",id:"install-apisix-ingress",children:[]},{value:"Create httpbin service and ApisixRoute resources",id:"create-httpbin-service-and-apisixroute-resources",children:[{value:"Create httpbin service",id:"create-httpbin-service",children:[]},{value:"Create ApisixRoute Resource",id:"create-apisixroute-resource",children:[]}]},{value:"Test",id:"test",children:[]}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Based on version 0.3 of the go-plugin-runner plugin and version 1.4.0 of APISIX Ingress, this document walks through how you can use the go plugin runner in the APISIX ingress controller. This article goes through steps as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare the environment."),(0,i.kt)("li",{parentName:"ol"},"Create the cluster."),(0,i.kt)("li",{parentName:"ol"},"Build a container image that includes the go-plugin-runner."),(0,i.kt)("li",{parentName:"ol"},"Customize the Helm chart package."),(0,i.kt)("li",{parentName:"ol"},"Install and deploy."),(0,i.kt)("li",{parentName:"ol"},"Verify the function.")),(0,i.kt)("p",null,"It is guaranteed that the final result can be derived in full based on this environment example as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go-plugin-runner: 0.3\nAPISIX Ingress: 1.4.0\nkind: v0.12.0\nkubectl version(Client/Server): v1.23.5/v1.23.4\ngolang: 1.18\n")),(0,i.kt)("h2",{id:"build-a-cluster-environment"},"Build a cluster environment"),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," to build a local cluster environment. The command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n")),(0,i.kt)("h2",{id:"build-the-go-plugin-runner-executable"},"Build the go-plugin-runner executable"),(0,i.kt)("p",null,"Choose a folder address ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/chever/api7/cloud_native/tasks/plugin-runner")," and place our ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-go-plugin-runner")," project in this folder. Then you need to go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-go-plugin-runner/cmd/go-runner/plugins")," directory and write the plugins you need in that directory."),(0,i.kt)("p",null,"After writing the plugins, start compiling the executable formally, and note here that you should build ",(0,i.kt)("strong",{parentName:"p"},"static executables"),", not dynamic ones."),(0,i.kt)("p",null,"The package compile command is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLED=0 go build -a -ldflags '-extldflags \"-static\"' .\n")),(0,i.kt)("p",null,"This successfully packages a statically compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"go-runner")," executable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-go-plugin-runner/cmd/go-runner/")," directory."),(0,i.kt)("h2",{id:"build-docker-image"},"Build Docker Image"),(0,i.kt)("p",null,"The image is built here in preparation for installing APISIX later using ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,i.kt)("h3",{id:"write-dockerfile"},"Write Dockerfile"),(0,i.kt)("p",null,"Return to the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/chever/api7/cloud_native/tasks/plugin-runner")," and create a Dockerfile in that directory, a demonstration of which is given here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# DockerfileForRunner\nFROM apache/apisix:2.13.1-alpine\n\nCOPY ./apisix-go-plugin-runner /usr/local/apisix-go-plugin-runner\n")),(0,i.kt)("p",null,"Here I will again emphasize the path address as follows where the executable file is located."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/apisix-go-plugin-runner/cmd/go-runner/go-runner\n")),(0,i.kt)("p",null,"Please make a note of this address. We will use it in the rest of the configuration."),(0,i.kt)("h3",{id:"begin-to-build-docker-image"},"Begin to build Docker Image"),(0,i.kt)("p",null,"Start building a Docker image based on the Dockerfile. The command is executed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/chever/api7/cloud_native/tasks/plugin-runner")," directory. The command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t apisix/forrunner:0.1 .\n")),(0,i.kt)("p",null,"Command Explanation: Build an image with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix/forrunner")," and mark it as version 0.1."),(0,i.kt)("h3",{id:"load-the-image-to-the-cluster-environment"},"Load the image to the cluster environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kind load docker-image apisix/forrunner:0.1\n")),(0,i.kt)("p",null,"Load the image into the kind cluster environment to pull the custom local image for installation during the helm installation."),(0,i.kt)("h2",{id:"install-apisix-ingress"},"Install APISIX Ingress"),(0,i.kt)("p",null,"Then install APISIX using helm with the following command in the directory of Apache APISIX Helm Chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install apisix apisix/apisix --set gateway.type=NodePort --set apisix.image.repository=custom/apisix --set apisix.image.tag=v0.1 --set extPlugin.enabled=true --set extPlugin.cmd=\'{"/usr/local/apisix-go-plugin-runner/go-runner", "run"}\' --set ingress-controller.enabled=true --set ingress-controller.config.apisix.serviceNamespace=apisix --namespace apisix --create-namespace --set ingress-controller.config.apisix.serviceName=apisix-admin\n')),(0,i.kt)("h2",{id:"create-httpbin-service-and-apisixroute-resources"},"Create httpbin service and ApisixRoute resources"),(0,i.kt)("p",null,"Create an httpbin backend resource to run with the deployed ApisixRoute resource to test that the functionality is working correctly."),(0,i.kt)("h3",{id:"create-httpbin-service"},"Create httpbin service"),(0,i.kt)("p",null,"Create an httpbin service with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run httpbin --image kennethreitz/httpbin --port 80\n")),(0,i.kt)("p",null,"Expose the port with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose pod httpbin --port 80\n")),(0,i.kt)("h3",{id:"create-apisixroute-resource"},"Create ApisixRoute Resource"),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"go-plugin-runner-route.yaml")," file to enable the ApisixRoute resource, with the following configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: plugin-runner-demo\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - local.httpbin.org\n      paths:\n      - /get\n    backends:\n    - serviceName: httpbin\n      servicePort: 80\n    plugins:\n    - name: ext-plugin-pre-req\n      enable: true\n      config:\n        conf:\n        - name: "say"\n          value: "{\\"body\\": \\"hello\\"}"\n')),(0,i.kt)("p",null,"The create resource command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f go-plugin-runner-route.yaml\n")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"The command is as follows to test if the plugin written in Golang is working correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n ${namespace of Apache APISIX} ${Pod name of Apache APISIX} -- curl http://127.0.0.1:9080/get -H 'Host: local.httpbin.org'\n")),(0,i.kt)("p",null,"And you will see the result as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Defaulted container "apisix" out of: apisix, wait-etcd (init)\nhello\n')))}c.isMDXComponent=!0}}]);