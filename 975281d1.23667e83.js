(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1),c=r(9),l=(r(0),r(1781)),a={title:"Taro.writeBLECharacteristicValue(option)",sidebar_label:"writeBLECharacteristicValue"},b={id:"version-3.0.0/apis/device/ble/writeBLECharacteristicValue",title:"Taro.writeBLECharacteristicValue(option)",description:"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/versioned_docs/version-3.0.0/apis/device/ble/writeBLECharacteristicValue.md",permalink:"/taro/docs/apis/device/ble/writeBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0/apis/device/ble/writeBLECharacteristicValue.md",version:"3.0.0",sidebar_label:"writeBLECharacteristicValue",sidebar:"version-3.0.0/API",previous:{title:"Taro.addPhoneContact(option)",permalink:"/taro/docs/apis/device/contact/addPhoneContact"},next:{title:"Taro.readBLECharacteristicValue(option)",permalink:"/taro/docs/apis/device/ble/readBLECharacteristicValue"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5411\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u4e2d\u5199\u5165\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 write \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5e76\u884c\u8c03\u7528\u591a\u6b21\u4f1a\u5b58\u5728\u5199\u5931\u8d25\u7684\u53ef\u80fd\u6027\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u4e0d\u4f1a\u5bf9\u5199\u5165\u6570\u636e\u5305\u5927\u5c0f\u505a\u9650\u5236\uff0c\u4f46\u7cfb\u7edf\u4e0e\u84dd\u7259\u8bbe\u5907\u4f1a\u9650\u5236\u84dd\u72594.0\u5355\u6b21\u4f20\u8f93\u7684\u6570\u636e\u5927\u5c0f\uff0c\u8d85\u8fc7\u6700\u5927\u5b57\u8282\u6570\u540e\u4f1a\u53d1\u751f\u5199\u5165\u9519\u8bef\uff0c\u5efa\u8bae\u6bcf\u6b21\u5199\u5165\u4e0d\u8d85\u8fc720\u5b57\u8282\u3002"),Object(l.b)("li",{parentName:"ul"},"\u82e5\u5355\u6b21\u5199\u5165\u6570\u636e\u8fc7\u957f\uff0ciOS \u4e0a\u5b58\u5728\u7cfb\u7edf\u4e0d\u4f1a\u6709\u4efb\u4f55\u56de\u8c03\u7684\u60c5\u51b5\uff08\u5305\u62ec\u9519\u8bef\u56de\u8c03\uff09\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5353\u5e73\u53f0\u4e0a\uff0c\u5728\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"notifyBLECharacteristicValueChange")," \u6210\u529f\u540e\u7acb\u5373\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"writeBLECharacteristicValue")," \u63a5\u53e3\uff0c\u5728\u90e8\u5206\u673a\u578b\u4e0a\u4f1a\u53d1\u751f 10008 \u7cfb\u7edf\u9519\u8bef")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"promised"},"Promised"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"characteristicId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),Object(l.b)("tr",null,Object(l.b)("td",null,"deviceId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(l.b)("tr",null,Object(l.b)("td",null,"serviceId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),Object(l.b)("tr",null,Object(l.b)("td",null,"value"),Object(l.b)("td",null,Object(l.b)("code",null,"ArrayBuffer")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// \u5411\u84dd\u7259\u8bbe\u5907\u53d1\u9001\u4e00\u4e2a0x00\u768416\u8fdb\u5236\u6570\u636e\nlet buffer = new ArrayBuffer(1)\nlet dataView = new DataView(buffer)\ndataView.setUint8(0, 0)\nTaro.writeBLECharacteristicValue({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5728 getBluetoothDevices \u6216 onBluetoothDeviceFound \u63a5\u53e3\u4e2d\u83b7\u53d6\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  // \u8fd9\u91cc\u7684value\u662fArrayBuffer\u7c7b\u578b\n  value: buffer,\n  success: function (res) {\n    console.log('writeBLECharacteristicValue success', res.errMsg)\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.writeBLECharacteristicValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1781:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return j}));var n=r(0),c=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},d=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=n,j=d["".concat(a,".").concat(s)]||d[s]||O[s]||l;return r?c.a.createElement(j,b({ref:t},o,{components:r})):c.a.createElement(j,b({ref:t},o))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,a[1]=b;for(var o=2;o<l;o++)a[o]=r[o];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);