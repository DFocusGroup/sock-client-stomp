(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/1_home.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var o=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("react"),n("./node_modules/@mdx-js/react/dist/index.es.js")),c={},a="wrapper";function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(a,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"why-sock-client-stomp"},"Why sock-client-stomp"),Object(s.b)("p",null,"Once you are seeking for a websocket solution, ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/sockjs/sockjs-client"}),"sockjs-client")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://jmesnil.net/stomp-websocket/doc/"}),"stomp")," might be your choice."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"sock-client-stomp")," is made for domain specific business scenarios. It consists of following features:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"re-connect"),Object(s.b)("li",{parentName:"ul"},"authentication by token"),Object(s.b)("li",{parentName:"ul"},"project based, let's say you are working on a SaaS platform, several projects may watch for SSP individually"),Object(s.b)("li",{parentName:"ul"},"easy to subscribe messages for current user"),Object(s.b)("li",{parentName:"ul"},"easy to subscribe broadcast messages"),Object(s.b)("li",{parentName:"ul"},"no need to worry about re-subscribe process whenever re-connect triggered")),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("h3",{id:"yarn"},"yarn"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add sock-client-stomp\n")),Object(s.b)("h3",{id:"npm"},"npm"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install sock-client-stomp\n")),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import { SockClient } from 'sock-client-stomp'\n\nconst socket = new SockClient({\n  base: 'http://demo.ssp.com/msg-center/websocket',\n  token: 'your token for authentication',\n  projectId: 'project you are going to watch',\n  // set to false to disable reconnect feature\n  reconnect: {\n    timeout: 30 * 1000\n  }\n})\n\n// watch every connection state change\nsocket.onStateChange(state => {\n  console.log('state changed to', state)\n})\n\n// subscribe broadcast info\nsocket.subscribeBroadcast('topic your are going to watch', arg => {\n  console.log(arg)\n})\n\n// connect\nsocket.connect()\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/1_home.mdx"}}),r.isMDXComponent=!0}}]);