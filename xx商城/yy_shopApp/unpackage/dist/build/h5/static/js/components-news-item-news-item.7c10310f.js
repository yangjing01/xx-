(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-news-item-news-item"],{1724:function(t,n,e){"use strict";e.r(n);var i=e("43b0"),r=e("7fa0");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("bf1c");var s,o=e("f0c5"),f=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"d5542fe2",null,!1,i["a"],s);n["default"]=f.exports},4122:function(t,n,e){var i=e("94fa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("2626b5d3",i,!0,{sourceMap:!1,shadowMode:!1})},"43b0":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",t._l(t.list,(function(n){return e("v-uni-view",{key:n.id,staticClass:"news_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigator(n.id)}}},[e("v-uni-image",{attrs:{src:n.img_url}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tit"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("发表时间："+t._s(t._f("formatDate")(n.add_time)))]),e("v-uni-text",[t._v("浏览："+t._s(n.click))])],1)],1)],1)})),1)},a=[]},"54c0":function(t,n,e){"use strict";e("d3b7"),e("25f0"),e("4d90"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:["list"],filters:{formatDate:function(t){var n=new Date(t),e=n.getFullYear(),i=n.getMonth().toString().padStart(2,0),r=n.getDay().toString().padStart(2,0);return e+"-"+i+"-"+r}},methods:{navigator:function(t){this.$emit("itemClick",t)}}};n.default=i},"7fa0":function(t,n,e){"use strict";e.r(n);var i=e("54c0"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"94fa":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news_item[data-v-d5542fe2]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;border-bottom:1px solid #00bfff}.news_item uni-image[data-v-d5542fe2]{min-width:%?200?%;max-width:%?200?%;height:%?150?%}.news_item .right[data-v-d5542fe2]{margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.news_item .right .tit[data-v-d5542fe2]{font-size:%?30?%}.news_item .right .info[data-v-d5542fe2]{font-size:%?24?%}.news_item .right .info uni-text[data-v-d5542fe2]:nth-child(2){margin-left:%?30?%}',""]),t.exports=n},bf1c:function(t,n,e){"use strict";var i=e("4122"),r=e.n(i);r.a}}]);