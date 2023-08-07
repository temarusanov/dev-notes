"use strict";(self.webpackChunkdev_notes=self.webpackChunkdev_notes||[]).push([[342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var r=n(7462),a=n(7294),o=n(3905),s=n(6010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function c(e){let{children:t,minHeight:n,url:r="http://localhost:3000"}=e;return a.createElement("div",{className:i.browserWindow,style:{minHeight:n}},a.createElement("div",{className:i.browserWindowHeader},a.createElement("div",{className:i.buttons},a.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,s.Z)(i.browserWindowAddressBar,"text--truncate")},r),a.createElement("div",{className:i.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar})))),a.createElement("div",{className:i.browserWindowBody},t))}const l={id:"health-checks",sidebar_position:3},p="Health Checks",h={unversionedId:"workspace/techniques/health-checks",id:"workspace/techniques/health-checks",title:"Health Checks",description:"Page describes how to break the link between the application and the connected services (DB, RMQ, Kafka, etc)",source:"@site/docs/workspace/techniques/health-checks.mdx",sourceDirName:"workspace/techniques",slug:"/workspace/techniques/health-checks",permalink:"/dev-notes/workspace/techniques/health-checks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"health-checks",sidebar_position:3},sidebar:"docs",previous:{title:"Module",permalink:"/dev-notes/workspace/techniques/module"},next:{title:"Logging",permalink:"/dev-notes/workspace/techniques/logging"}},d={},m=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Source code",id:"source-code",level:2}],u={toc:m},b="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"health-checks"},"Health Checks"),(0,o.kt)("p",null,"Page describes how to break the link between the application and the connected services (DB, RMQ, Kafka, etc)"),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Imagine a huge application with a bunch of internal services, you are tasked with changing the pipe in one of the controllers. Pipe has nothing to do with the database or Kafka. In order to run the application and test the pipe, you will need to bring up the database and all external services. Not very convenient, huh?"),(0,o.kt)("p",null,"How to run an application that does not depend on a database, kafka or any other internal services? How to get service connection status from an application?"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Do not terminate the application if the connection to internal services failed. The application should work even if it is not connected to the database"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A health check represents a summary of health indicators. A health indicator executes a check of a service, whether it is in a healthy or unhealthy state. A health check is positive if all the assigned health indicators are up and running.")),(0,o.kt)("p",null,"In this example, I'm using Prisma ORM and built indicator above prisma connection. First, install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tematools/health-check")," package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tematools/health-checks\n")),(0,o.kt)("p",null,"Create a health check indicator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="libs/sample/src/lib/sample-indicators/sample-prisma-connection.health-indicator.ts"',title:'"libs/sample/src/lib/sample-indicators/sample-prisma-connection.health-indicator.ts"'},"import { Injectable } from '@nestjs/common'\nimport {\n    HealthIndicator,\n    HealthIndicatorResult,\n} from '@tematools/health-checks'\n\nimport { SamplePrismaService } from '../sample-services/sample-prisma.service'\n\n@Injectable()\nexport class SamplePrismaConnectionHealthIndicator {\n    constructor(private readonly prisma: SamplePrismaService) {}\n\n    @HealthIndicator('sample-database')\n    async isHealthy(): Promise<HealthIndicatorResult> {\n        try {\n            await this.prisma.$queryRaw<{ dt: string }[]>`SELECT now() dt`\n\n            return {\n                status: 'up',\n            }\n        } catch (error) {\n            return {\n                status: 'down',\n                error: error.message,\n            }\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Then catch connection error of your ORM or transport service. As example I use Prisma client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="libs/sample/src/lib/sample-services/sample-prisma.service.ts"',title:'"libs/sample/src/lib/sample-services/sample-prisma.service.ts"'},"async onModuleInit(): Promise<void> {\n    try {\n        // connect to the database\n        await this.$connect()\n    } catch (err) {\n        // do not throw error here\n        this.logger.error(err, err.stack)\n    }\n}\n")),(0,o.kt)("p",null,"As a result we have"),(0,o.kt)(c,{url:"http://localhost:3000/health",minHeight:240,mdxType:"BrowserWindow"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ratio": 1,\n  "uptime": 5,\n  "timestamp": 1675597500626,\n  "services": [\n    {\n      "name": "sample-database",\n      "status": "up",\n    },\n    {\n      "name": "my-service",\n      "status": "up",\n      "details": {\n        "entitiesCreated": 500\n      }\n    }\n  ]\n}\n'))),(0,o.kt)("p",null,"With Prisma connection error application is still working"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(2450).Z,width:"1008",height:"223"})),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/temarusanov/nx/tree/main/libs/external/health-checks"},"Don't trust, verify!"))))}k.isMDXComponent=!0},2450:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hc-log-1704d9b57c24bcef3b2bf0d2a38cd474.png"}}]);