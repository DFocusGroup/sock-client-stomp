(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/1_home.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(n("react"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s={},a="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(a,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"why-sock-client-stomp"},"Why sock-client-stomp"),Object(c.b)("p",null,"Once you are seeking for a websocket solution, ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/sockjs/sockjs-client"}),"sockjs-client")," and ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"http://jmesnil.net/stomp-websocket/doc/"}),"stomp")," might be your choice."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"sock-client-stomp")," is made for few useful features(like: reconnect), project based(close to your business)"),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("h3",{id:"yarn"},"yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add sock-client-stomp\n")),Object(c.b)("h3",{id:"npm"},"npm"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install sock-client-stomp\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import { SockClient } from 'sock-client-stomp'\n\nconst socket = new SockClient({\n  base: 'http://demo.ssp.com/msg-center/websocket',\n  token: 'your token for authentication',\n  projectId: 'project you are going to watch',\n  // set to false to disable reconnect feature\n  reconnect: {\n    timeout: 30 * 1000\n  }\n})\n\n// watch every connection state change\nsocket.onStateChange(state => {\n  console.log('state changed to', state)\n})\n\n// subscribe broadcast info\nsocket.subscribeBroadcast('topic your are going to watch', arg => {\n  console.log(arg)\n})\n\n// connect\nsocket.connect()\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/1_home.mdx"}}),b.isMDXComponent=!0}}]);