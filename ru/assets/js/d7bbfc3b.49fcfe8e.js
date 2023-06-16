"use strict";(self.webpackChunkdev_notes=self.webpackChunkdev_notes||[]).push([[588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"introduction",sidebar_position:1,description:"\u041f\u0430\u0440\u0441\u0438\u043c \u0431\u043b\u043e\u043a\u0438 \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432 Bitcoin \u0441\u0435\u0442\u0438"},a="\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0431\u0438\u0442\u043a\u043e\u0438\u043d",l={unversionedId:"tutorials/bitcoin-observer/introduction",id:"tutorials/bitcoin-observer/introduction",title:"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0431\u0438\u0442\u043a\u043e\u0438\u043d",description:"\u041f\u0430\u0440\u0441\u0438\u043c \u0431\u043b\u043e\u043a\u0438 \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432 Bitcoin \u0441\u0435\u0442\u0438",source:"@site/docs/tutorials/bitcoin-observer/bitcoin-parser-intro.mdx",sourceDirName:"tutorials/bitcoin-observer",slug:"/tutorials/bitcoin-observer/introduction",permalink:"/dev-notes/ru/tutorials/bitcoin-observer/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",sidebar_position:1,description:"\u041f\u0430\u0440\u0441\u0438\u043c \u0431\u043b\u043e\u043a\u0438 \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432 Bitcoin \u0441\u0435\u0442\u0438"},sidebar:"docs",previous:{title:"Tutorials",permalink:"/dev-notes/ru/tutorials"},next:{title:"Observer",permalink:"/dev-notes/ru/tutorials/bitcoin-observer/observer"}},c={},p=[{value:"\u0412 \u0447\u0435\u043c \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c?",id:"\u0432-\u0447\u0435\u043c-\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c-\u0431\u0438\u0442\u043a\u043e\u0438\u043d"},"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0431\u0438\u0442\u043a\u043e\u0438\u043d"),(0,i.kt)("p",null,"\u042d\u0442\u0430 \u0441\u0435\u0440\u0438\u044f \u0443\u0440\u043e\u043a\u043e\u0432 \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u0441\u0435\u0440\u0443 \u0431\u0438\u0442\u043a\u043e\u0438\u043d\u043e\u0432. \u0412 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c, \u0443 \u043c\u0435\u043d\u044f \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0437\u0430\u0434\u0430\u0447\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0441\u0435\u0440 \u0431\u043b\u043e\u043a\u043e\u0432 \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439\n\u0434\u043b\u044f \u0431\u0438\u0442\u043a\u043e\u0438\u043d \u0441\u0435\u0442\u0435\u0439, \u043d\u043e \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u043b\u0438\u0431\u043e \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoinjs/bitcoinjs-lib"},"bitcoinjs")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitpay/bitcore/tree/master/packages/bitcore-node"},"bitcore-node")),(0,i.kt)("p",null,"\u041c\u043e\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0430\u0441\u044c \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u0438 \u0440\u0435\u0448\u0438\u043b \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441 \u043a\u0430\u043a\u0438\u043c \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u044f \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u043b\u0441\u044f \u0438 \u043a\u0430\u043a \u0440\u0435\u0448\u0430\u043b. \u0417\u0430\u043e\u0434\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0431\u0443\u0434\u0435\u0442\n\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a\u043e\u0433\u0434\u0430-\u043d\u0438\u0431\u0443\u0434\u044c \u0438 \u043f\u0435\u0440\u0435\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435. \u0417\u0434\u0435\u0441\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c"),(0,i.kt)("h2",{id:"\u0432-\u0447\u0435\u043c-\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c"},"\u0412 \u0447\u0435\u043c \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c?"),(0,i.kt)("p",null,"Bitcoin \u0441\u0435\u0442\u044c \u043d\u0435 \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 Ethereum, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438 \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0431\u043b\u043e\u043a\u043e\u0432 \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 Bitcoin \u0441\u0435\u0442\u0438 \u043d\u0435\u0442 \u044f\u0432\u043d\u044b\u0445 from \u0438 to\n\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043f\u0440\u0438\u0432\u044b\u043a\u043b\u0438 \u0432\u0438\u0434\u0435\u0442\u044c \u0432 Ethereum. \u0417\u0434\u0435\u0441\u044c \u0432\u043e\u043e\u0431\u0449\u0435 \u043d\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u0431\u0430\u043b\u0430\u043d\u0441, \u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.\n\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0432 Bitcoin \u044d\u0442\u043e \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0438\u043d\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438. \u041e\u0434\u043d\u0438 \u043a\u043e\u0438\u043d\u044b \u0442\u0440\u0430\u0442\u044f\u0442\u0441\u044f, \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f."),(0,i.kt)("p",null,"\u0423 \u043a\u043e\u0438\u043d\u043e\u0432 \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: \u043f\u043e\u0442\u0440\u0430\u0447\u0435\u043d \u0438 \u043d\u0435 \u043f\u043e\u0442\u0440\u0430\u0447\u0435\u043d. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u0438\u043d\u0430 \u0435\u0441\u0442\u044c \u043f\u043e\u043b\u044f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mintTxid")," - \u0425\u0435\u0448 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u0438\u043d \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mintIndex")," - \u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u043e\u0438\u043d\u0430 \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," - \u041a\u043e\u043c\u0443 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043a\u043e\u0438\u043d (\u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u044b\u043c)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spentTxid")," - \u0425\u0435\u0448 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u0438\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spentIndex")," - \u0418\u043d\u0434\u0435\u043a\u0441 \u043a\u043e\u0438\u043d\u0430 \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438")),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432 vin (inputs) \u043a\u043e\u0438\u043d\u044b \u0442\u0440\u0430\u0442\u044f\u0442\u0441\u044f, \u0430 \u0432 vout (outputs) \u043a\u043e\u0438\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u0413\u043e\u0432\u043e\u0440\u044f\u0442 \u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0430\u0441\u0442\u044c \u043e\u0442 \u0432\u0441\u0435\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u043d\u0435\u0442\u044b, \u043d\u043e \u044d\u0442\u043e \u043d\u0435 \u0441\u043e\u0432\u0441\u0435\u043c \u0442\u0430\u043a. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043a\u043e\u0433\u0434\u0430\n\u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043c\u043e\u043d\u0435\u0442\u0443 \u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0430\u0441\u0442\u044c, \u0432\u044b \u043e\u0442\u0434\u0430\u0435\u0442\u0435 \u0432\u0441\u044e \u043c\u043e\u043d\u0435\u0442\u0443, \u0438 \u044d\u0442\u0443 \u0435\u0435 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0435 \u043c\u0435\u0436\u0434\u0443 N \u0430\u0434\u0440\u0435\u0441\u0430\u043c\u0438.\n\u0412\u0430\u0448\u0430 \u043c\u043e\u043d\u0435\u0442\u044b \u0442\u0440\u0430\u0442\u0438\u0442\u0441\u044f, \u0430 \u0432\u0437\u0430\u043c\u0435\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f N \u043d\u043e\u0432\u044b\u0445 \u043c\u043e\u043d\u0435\u0442")))}d.isMDXComponent=!0}}]);