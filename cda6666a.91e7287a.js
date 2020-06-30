(window.webpackJsonp=window.webpackJsonp||[]).push([[1337],{1474:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),c=(n(0),n(1781)),l={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},o={id:"version-3.0.0/apis/device/motion/onDeviceMotionChange",title:"Taro.onDeviceMotionChange(callback)",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startDeviceMotionListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopDeviceMotionListening() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-3.0.0/apis/device/motion/onDeviceMotionChange.md",permalink:"/taro/docs/apis/device/motion/onDeviceMotionChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0/apis/device/motion/onDeviceMotionChange.md",version:"3.0.0",sidebar_label:"onDeviceMotionChange",sidebar:"version-3.0.0/API",previous:{title:"Taro.startDeviceMotionListening(option)",permalink:"/taro/docs/apis/device/motion/startDeviceMotionListening"},next:{title:"Taro.offDeviceMotionChange(callback)",permalink:"/taro/docs/apis/device/motion/offDeviceMotionChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startDeviceMotionListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopDeviceMotionListening() \u505c\u6b62\u76d1\u542c\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"callback"},"Callback"),Object(c.b)("p",null,"\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"CallbackResult"))))),Object(c.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"alpha"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f53 \u624b\u673a\u5750\u6807 X/Y \u548c \u5730\u7403 X/Y \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Z \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a alpha\uff0c\u8303\u56f4\u503c\u4e3a [0, 2*PI)\u3002\u9006\u65f6\u9488\u8f6c\u52a8\u4e3a\u6b63\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"beta"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f53\u624b\u673a\u5750\u6807 Y/Z \u548c\u5730\u7403 Y/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 X \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a beta\u3002\u8303\u56f4\u503c\u4e3a [-1*PI, PI) \u3002\u9876\u90e8\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002\u4e5f\u6709\u53ef\u80fd\u671d\u7740\u7528\u6237\u4e3a\u6b63\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"gamma"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f53\u624b\u673a X/Z \u548c\u5730\u7403 X/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Y \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a gamma\u3002\u8303\u56f4\u503c\u4e3a [-1*PI/2, PI/2)\u3002\u53f3\u8fb9\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onDeviceMotionChange"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0},1781:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,j=p["".concat(l,".").concat(d)]||p[d]||O[d]||c;return n?r.a.createElement(j,o({ref:t},i,{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);