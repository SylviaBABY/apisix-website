"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[166],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(25773),o=(r(27378),r(35318));const n={title:"GCP, AWS, Azure, and OCI ARM-Based Server Performance Comparison",authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["API gateway","ARM","Azure","AWS","Google","Oracle","Apache APISIX"],description:"This article compares the performance of Google, AWS, Azure, and Oracle ARM-based servers in network IO-intensive scenarios through the API gateway Apache APISIX.",tags:["Ecosystem"]},s=void 0,i={permalink:"/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix",source:"@site/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix.md",title:"GCP, AWS, Azure, and OCI ARM-Based Server Performance Comparison",description:"This article compares the performance of Google, AWS, Azure, and Oracle ARM-based servers in network IO-intensive scenarios through the API gateway Apache APISIX.",date:"2022-08-12T00:00:00.000Z",formattedDate:"August 12, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.415,truncated:!0,authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"Backend-for-Frontend: the demo",permalink:"/blog/2022/08/17/backend-for-frontend-demo"},nextItem:{title:"Biweekly Report (Jul 16 - Jul 31)",permalink:"/blog/2022/08/09/weekly-report-0731"}},l={authorsImageUrls:[void 0,void 0,void 0]},c=[{value:"Background",id:"background",children:[],level:2},{value:"ARM Servers of Major Cloud Vendors",id:"arm-servers-of-major-cloud-vendors",children:[{value:"AWS Graviton",id:"aws-graviton",children:[],level:3},{value:"Google Cloud Platform T2A",id:"google-cloud-platform-t2a",children:[],level:3},{value:"Azure ARM-based Virtual Machines",id:"azure-arm-based-virtual-machines",children:[],level:3},{value:"Oracle Cloud Infrastructure Ampere A1 Compute",id:"oracle-cloud-infrastructure-ampere-a1-compute",children:[],level:3}],level:2},{value:"Cloud Vendors ARM Server Performance Test",id:"cloud-vendors-arm-server-performance-test",children:[{value:"Test Cases",id:"test-cases",children:[],level:3},{value:"Test Results",id:"test-results",children:[{value:"Sort performance from best to worst:",id:"sort-performance-from-best-to-worst",children:[],level:4},{value:"Sort performance from best to worst:",id:"sort-performance-from-best-to-worst-1",children:[],level:4}],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article uses  Apache APISIX to compare the performance of AWS, Google, Azure, and Oracle ARM-based servers in network IO-intensive scenarios.")),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://api7.ai/2022/08/12/arm-performance-google-aws-azure-with-apisix/"})),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The ARM architecture is a member of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reduced_instruction_set_computer"},"RISC (Reduced instruction set computer)")," design family. The RISC microprocessor architecture design enables small processors to efficiently handle complex tasks by using a set of highly optimized instructions. Being widely used in many embedded system designs, the ARM architecture has become the cornerstone of the world\u2019s largest computing ecosystem and mobile devices. Many experts regard it as the future of cloud computing due to its advantages of low power consumption, low cost, high performance, and flexible licensing. Therefore, mainstream cloud vendors led by AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (Microsoft Azure), and OCI (Oracle Cloud Infrastructure) have successively launched ARM-based servers. This article selects servers from these vendors to conduct performance testing. Let\u2019s first examine the four major manufacturers and their products."),(0,o.kt)("h2",{id:"arm-servers-of-major-cloud-vendors"},"ARM Servers of Major Cloud Vendors"),(0,o.kt)("h3",{id:"aws-graviton"},"AWS Graviton"),(0,o.kt)("p",null,"After four years of development since 2018, AWS Graviton has entered its third generation age. The characteristics of these three generations of processors are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS Graviton1")," processors feature custom silicon and 64-bit Neoverse cores."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS Graviton2"),"-based instances support a wide range of general purpose, burstable, compute-optimized, memory-optimized, storage-optimized, and accelerated computing workloads, including application servers, microservices, high-performance computing (HPC), CPU-based machine learning (ML) inference, video encoding, electronic design automation, gaming, open-source databases, and in-memory caches. In order to provide a one-stop service experience, many AWS services also support Graviton2-based instances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AWS Graviton3")," processors are the latest in the AWS Graviton processor family. They provide up to 25% better compute performance, ",(0,o.kt)("strong",{parentName:"li"},"2 times")," higher floating-point performance, and up to ",(0,o.kt)("strong",{parentName:"li"},"2 times")," faster cryptographic workload performance compared to AWS Graviton2 processors. AWS Graviton3 processors deliver ",(0,o.kt)("strong",{parentName:"li"},"3 times")," better performance compared to AWS Graviton2 processors for ML workloads, including support for bfloat16. They also support DDR5 memory, which provides ",(0,o.kt)("strong",{parentName:"li"},"50%")," more memory bandwidth compared to DDR4.")),(0,o.kt)("p",null,"The following figure shows the main models equipped with AWS Graviton3 processors:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/6352412740665.webp",alt:"AWS Graviton3 processors"})),(0,o.kt)("h3",{id:"google-cloud-platform-t2a"},"Google Cloud Platform T2A"),(0,o.kt)("p",null,"The Google Cloud Platform (GCP) Tau T2A VM is a preview of Google\u2019s first ARM-based virtual machine in July 2022, powered by Ampere\xae Altra\xae Arm processors based on the Neoverse N1 design. Tau T2A VMs come in various predefined VM shapes with up to 48 vCPUs per VM and 4GB of memory per vCPU. They offer 32 Gbps of network bandwidth and a wide range of network-attached storage options, making the Tau T2A VM suitable for scale-out workloads including web servers, containerized microservices, data record processing, media transcoding, and Java applications. In addition, it also has the following two characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration with Google Cloud services"),": T2A VMs support the most popular Linux operating systems such as RHEL, SUSE Linux Enterprise Server, CentOS, Ubuntu, and Rocky Linux. In addition, T2A VMs also support Container-optimized OS to bring up Docker containers quickly, efficiently, and securely. Further, developers building applications on Google Cloud can already use several Google Cloud services with T2A VMs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extensive ISV partner ecosystem"),": Ampere lists more than 100 applications, databases, cloud-native software, and programming languages that are already running on Ampere-based T2A VMs, with more being added all the time.")),(0,o.kt)("p",null,"The main models are as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/6352412815275.webp",alt:"Google Cloud Platform T2A Models"})),(0,o.kt)("h3",{id:"azure-arm-based-virtual-machines"},"Azure ARM-based Virtual Machines"),(0,o.kt)("p",null,"In April 2022, Microsoft announced a preview of its family of Azure virtual machines based on Ampere\xae Altra\xae Arm processors. The new VMs are designed to efficiently run scale-out workloads, web servers, application servers, open-source databases, cloud-native and rich .NET applications, Java applications, game servers, media servers, and more. The new VM series includes general-purpose Dpsv5 and memory-optimized Epsv5 VMs. The main models are as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/635241c219ef7.jpeg",alt:"Azure ARM-based Virtual Machines"})),(0,o.kt)("h3",{id:"oracle-cloud-infrastructure-ampere-a1-compute"},"Oracle Cloud Infrastructure Ampere A1 Compute"),(0,o.kt)("p",null,"At the end of May 2021, Oracle released its first Arm-based computing product: the OCI Ampere A1 Compute. The product can run on Oracle Cloud Infrastructure (OCI). The main model is VM.Standard.A1.Flex (OCI A1), whose CPU core and memory can be flexibly configured."),(0,o.kt)("p",null,"To support the new Ampere A1 Compute instances in OCI, Oracle has created an ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.oracle.com/cloud-infrastructure/post/oracle-makes-building-applications-on-ampere-a1-compute-instances-easy"},"Arm developer ecosystem")," that enables developers to seamlessly convert, build and run applications on OCI Arm instances. Additionally, Oracle has partnered with Ampere Computing, Arm, GitLab, Jenkins, and others to accelerate the Arm developer ecosystem. As a result, Arm processors have evolved from mobile devices to cloud servers, providing developers with the tools and platforms to transit, build and run Arm-based workloads."),(0,o.kt)("h2",{id:"cloud-vendors-arm-server-performance-test"},"Cloud Vendors ARM Server Performance Test"),(0,o.kt)("p",null,"After introducing the above four servers, we will reflect the overall performance of each server by testing single-core performance. Here the network IO-intensive API gateway ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is selected to bind a single CPU core for stress testing on the four models: AWS c7g.large, GCP t2a-standard-2, Azure D2ps v5 (Although the name contains D2ps, it is a dual-core CPU belonging to the Dpsv5 series.) and OCI A1 to conduct stress testings and analyze server performance through two metrics: QPS and response latency."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a cloud-native, high-performance, scalable, open-source API gateway. Compared with traditional API gateways, Apache APISIX is developed based on NGINX and LuaJIT, with features such as dynamic routing and plugin hot reloading, which is very suitable for API management under cloud-native architecture. The architecture diagram is shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/635241c9d2c35.jpeg",alt:"Apache APISIX's Architecture Diagram"})),(0,o.kt)("p",null,"We use Apache APISIX to bind a single CPU on AWS c7g.large, GCP t2a-standard-2, Azure D2ps v5 (although the name includes D2ps, but it is a dual-core CPU belonging to the Dpsv5 series), and OCI A1 to conduct stress testing and analyze the performance of the server through QPS and response latency."),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/benchmark/run.sh"},"Apache APISIX\u2019s official open-source performance benchmark")," for testing."),(0,o.kt)("h3",{id:"test-cases"},"Test Cases"),(0,o.kt)("p",null,"In this article, we test the performance of Apache APISIX in the following two typical scenarios, thus obtaining more realistic test data for comparison."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenario 1: A single upstream"),"\nIn this scenario, a single upstream without any plugins is used to test the performance of Apache APISIX in pure proxy back-to-origin mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenario 2: Single upstream + multiple plugins"),"\nThis scenario uses a single upstream with two plugins. It mainly tests the performance of APISIX when the two core consumption performance plugins, ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-count")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus"),", are operating."),(0,o.kt)("h3",{id:"test-results"},"Test Results"),(0,o.kt)("p",null,"The figure below is the QPS (queries per second) test result of AWS c7g.large, GCP t2a-standard-2, Azure D2ps v5, and OCI A1. The higher the QPS value, the better the performance of the server."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/635241290d787.webp",alt:"QPS Value Comparison of AWS c7g, GCP, Azure and OCI A1"})),(0,o.kt)("p",null,"From the perspective of QPS, under the network IO-intensive API gateway like Apache APISIX, the performance of these four servers is as follows:"),(0,o.kt)("h4",{id:"sort-performance-from-best-to-worst"},"Sort performance from best to worst:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenario 1: AWS c7g.large > Azure D2ps v5 > OCI A1 > GCP t2a-standard-2")),(0,o.kt)("p",{parentName:"li"},"With a single upstream without any plugins, AWS c7g.large achieves a QPS of 23,000 times/sec, almost twice the performance of GCP t2a-standard-2 (11,300 times/sec QPS). There is a small gap among Azure D2ps v5, OCI A1, and GCP t2a-standard-2. OCI A1 and GCP t2a-standard-2 have almost the same performance, with a difference of only 200 times/sec.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenario 2: AWS c7g.large > Azure D2ps v5 > GCP t2a-standard-2 > OCI A1")),(0,o.kt)("p",{parentName:"li"},"In the scenario of a single upstream and two plug-ins, the QPS of AWS c7g.large reaches 18,000 times/sec, still leading while narrowing the gap with the other three servers. The performance of Azure D2ps v5 is slightly higher than that of OCI A1, with a difference of only 400 times/sec."))),(0,o.kt)("p",null,"The figure below is the response latency test results in milliseconds. The smaller the value, the better the performance."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/21/635241298c145.webp",alt:"Response Latency of AWS c7g, GCP, Azure and OCI A1"})),(0,o.kt)("p",null,"From the perspective of response latency, under the network IO-intensive API gateway like Apache APISIX, the performance of these four servers is as follows:"),(0,o.kt)("h4",{id:"sort-performance-from-best-to-worst-1"},"Sort performance from best to worst:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenario 1 and Scenario 2: AWS c7g.large > Azure D2ps v5 > GCP t2a-standard-2 > OCI A1")),(0,o.kt)("p",{parentName:"li"},"In these two scenarios, the performance of AWS c7g.large is almost twice that of OCI A1, and there is little difference among the latter three."))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Through the analysis of the performance test results of Apache APISIX, we can see that AWS Graviton3 has higher performance than GCP T2A, Azure Dpsv5, and OCI A1. However, we only used the Apache APISIX binding single-core test during the test. The performance presented by the four may be different if multi-core is used."),(0,o.kt)("p",null,"We will reveal multi-core test results in the future, please stay tuned!"),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/blogs/aws/new-amazon-ec2-c7g-instances-powered-by-aws-graviton3-processors/"},"New \u2013 Amazon EC2 C7g Instances, Powered by AWS Graviton3 Processors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/general-purpose-machines#t2a_machines"},"Tau T2A machine series (Preview)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/blog/now-in-preview-azure-virtual-machines-with-ampere-altra-armbased-processors/"},"Now in preview: Azure Virtual Machines with Ampere Altra Arm-based processors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/hk/cloud/compute/arm/"},"Ampere A1 Compute"))))}u.isMDXComponent=!0}}]);