(window.webpackJsonp=window.webpackJsonp||[]).push([[1362],{1499:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),b=(a(0),a(1781)),c={title:"Taro.getStorageInfo(OBJECT)",sidebar_label:"getStorageInfo"},o={id:"version-1.3.42/apis/storage/getStorageInfo",title:"Taro.getStorageInfo(OBJECT)",description:"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.3.42/apis/storage/getStorageInfo.md",permalink:"/taro/docs/1.3.42/apis/storage/getStorageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/storage/getStorageInfo.md",version:"1.3.42",sidebar_label:"getStorageInfo",sidebar:"version-1.3.42/API",previous:{title:"Taro.getStorageSync(KEY)",permalink:"/taro/docs/1.3.42/apis/storage/getStorageSync"},next:{title:"Taro.getStorageInfoSync()",permalink:"/taro/docs/1.3.42/apis/storage/getStorageInfoSync"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"success"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8be6\u89c1\u8fd4\u56de\u53c2\u6570\u8bf4\u660e")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"fail"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"complete"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Function"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"keys"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String Array"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d storage \u4e2d\u6240\u6709\u7684 key")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getStorageInfo()\n  .then(res => console.log(res.keys))\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getStorageInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.getStorageInfoSync"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},1781:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=p(a),g=r,m=O["".concat(c,".").concat(g)]||O[g]||j[g]||b;return a?n.a.createElement(m,o({ref:t},i,{components:a})):n.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);