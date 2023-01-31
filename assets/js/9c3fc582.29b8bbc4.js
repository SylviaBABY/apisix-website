"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83902],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74753:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={title:"Developer Guide"},o=void 0,l={unversionedId:"developer-guide",id:"developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"This documentation explains how to develop this project.",source:"@site/docs/apisix-python-plugin-runner/developer-guide.md",sourceDirName:".",slug:"/developer-guide",permalink:"/docs/python-plugin-runner/next/developer-guide",editUrl:"https://github.com/apache/apisix-python-plugin-runner/edit/master/docs/en/latest/developer-guide.md",tags:[],version:"current",frontMatter:{title:"Developer Guide"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/python-plugin-runner/next/getting-started"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Test",id:"test",children:[]},{value:"Data Format",id:"data-format",children:[]},{value:"Data Protocol",id:"data-protocol",children:[]}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This documentation explains how to develop this project."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,i.kt)("li",{parentName:"ul"},"APISIX 2.7.0+")),(0,i.kt)("h2",{id:"debug"},"Debug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"make setup")," installation dependencies"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"make install")," installation runner to system"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"make dev")," to start it")),(0,i.kt)("h2",{id:"plugin"},"Plugin"),(0,i.kt)("h4",{id:"plugin-directory"},"Plugin directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin\n")),(0,i.kt)("p",null,"the ",(0,i.kt)("inlineCode",{parentName:"p"},".py")," files in this directory autoload"),(0,i.kt)("h4",{id:"plugin-example"},"Plugin example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/path/to/apisix-python-plugin-runner/apisix/plugin/stop.py\n/path/to/apisix-python-plugin-runner/apisix/plugin/rewrite.py\n")),(0,i.kt)("h4",{id:"plugin-format"},"Plugin Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Any\nfrom apisix.runner.http.request import Request\nfrom apisix.runner.http.response import Response\nfrom apisix.runner.plugin.core import PluginBase\n\n\nclass Test(PluginBase):\n\n    def name(self) -> str:\n        """\n        The name of the plugin registered in the runner\n        :return:\n        """\n        return "test"\n\n    def config(self, conf: Any) -> Any:\n        """\n        Parse plugin configuration\n        :param conf:\n        :return:\n        """\n        return conf\n\n    def filter(self, conf: Any, request: Request, response: Response):\n        """\n        The plugin executes the main function\n        :param conf:\n            plugin configuration after parsing\n        :param request:\n            request parameters and information\n        :param response:\n            response parameters and information\n        :return:\n        """\n\n        # print plugin configuration\n        print(conf)\n\n        # Fetch request nginx variable `host`\n        host = request.get_var("host")\n        print(host)\n\n        # Fetch request body\n        body = request.get_body()\n        print(body)\n\n        # Set response headers\n        response.set_header("X-Resp-A6-Runner", "Python")\n\n        # Set response body\n        response.set_body("Hello, Python Runner of APISIX")\n\n        # Set response status code\n        response.set_status_code(201)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins must inherit the ",(0,i.kt)("inlineCode",{parentName:"li"},"PluginBase")," class and implement all functions.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," function: used to set the registered plugin name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," function: used to parse plugin configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filter")," function: used to filter requests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conf")," parameter: plugin configuration after parsing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request")," parameter: Request object, which can be used to get and set request information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"response")," parameter: Response object, which can be used to set response information.")))))),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"make test"),"."),(0,i.kt)("h2",{id:"data-format"},"Data Format"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"FlatBuffers")),(0,i.kt)("h2",{id:"data-protocol"},"Data Protocol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")))}s.isMDXComponent=!0}}]);