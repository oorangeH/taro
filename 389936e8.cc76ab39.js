(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1781:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=u(n),O=a,p=d["".concat(l,".").concat(O)]||d[O]||s[O]||c;return n?r.a.createElement(p,b({ref:t},o,{components:n})):r.a.createElement(p,b({ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},539:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),c=(n(0),n(1781)),l={title:"Taro.onBLECharacteristicValueChange(callback)",sidebar_label:"onBLECharacteristicValueChange"},b={id:"version-3.0.0/apis/device/ble/onBLECharacteristicValueChange",title:"Taro.onBLECharacteristicValueChange(callback)",description:"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 `notifyBLECharacteristicValueChange` \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002",source:"@site/versioned_docs/version-3.0.0/apis/device/ble/onBLECharacteristicValueChange.md",permalink:"/taro/docs/apis/device/ble/onBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0/apis/device/ble/onBLECharacteristicValueChange.md",version:"3.0.0",sidebar_label:"onBLECharacteristicValueChange",sidebar:"version-3.0.0/API",previous:{title:"Taro.onBLEConnectionStateChange(callback)",permalink:"/taro/docs/apis/device/ble/onBLEConnectionStateChange"},next:{title:"Taro.notifyBLECharacteristicValueChange(option)",permalink:"/taro/docs/apis/device/ble/notifyBLECharacteristicValueChange"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u3002\u5fc5\u987b\u5148\u542f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"notifyBLECharacteristicValueChange")," \u63a5\u53e3\u624d\u80fd\u63a5\u6536\u5230\u8bbe\u5907\u63a8\u9001\u7684 notification\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"callback"},"Callback"),Object(c.b)("p",null,"\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7684\u7279\u5f81\u503c\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"CallbackResult"))))),Object(c.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"characteristicId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(c.b)("tr",null,Object(c.b)("td",null,"deviceId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(c.b)("tr",null,Object(c.b)("td",null,"serviceId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"ArrayBuffer")),Object(c.b)("td",null,"\u7279\u5f81\u503c\u6700\u65b0\u7684\u503c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// ArrayBuffer\u8f6c16\u8fdb\u5236\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  let hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBLECharacteristicValueChange(function (res) {\n  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)\n  console.log(ab2hex(res.value))\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.onBLECharacteristicValueChange"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);