(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail-news-detail"],{"0295":function(t,e,n){"use strict";n.r(e);var o=n("d339"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"0ec3":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniGoodsNav:n("e89e").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"news_detail"},[n("v-uni-image",{attrs:{src:t.detail.goods_small_logo,mode:""}}),n("v-uni-view",{staticClass:"title"},[t._v("商品名称:"+t._s(t.detail.goods_name))]),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",[n("v-uni-text",[t._v("商品价格:￥"+t._s(t.detail.goods_price))]),n("v-uni-text",[t._v("商品重量:"+t._s(t.detail.goods_weight))]),n("v-uni-text",[t._v("商品数量:"+t._s(t.detail.goods_number))])],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-text",[t._v("发表时间: "+t._s(t.detail.add_time))]),n("v-uni-text",[t._v("浏览量: "+t._s(t.detail.upd_time-t.detail.add_time+10))])],1),n("v-uni-view",{staticClass:"goods_introduce"},[n("v-uni-rich-text",{attrs:{nodes:t.detail.goods_introduce}})],1)],1),n("v-uni-view",{staticClass:"goods-nav"},[n("uni-goods-nav",{attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},r=[]},"14f4":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-fc0b7b4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-fc0b7b4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-fc0b7b4e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-fc0b7b4e]{padding:0 5px}.uni-tab__cart-sub-right[data-v-fc0b7b4e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-fc0b7b4e]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-fc0b7b4e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-fc0b7b4e]{width:18px;height:18px}.image[data-v-fc0b7b4e]{width:18px;height:18px}.uni-tab__text[data-v-fc0b7b4e]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-fc0b7b4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-fc0b7b4e]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-fc0b7b4e]:active{opacity:.7}.uni-tab__dot-box[data-v-fc0b7b4e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__dot[data-v-fc0b7b4e]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-fc0b7b4e]{padding:0 4px;border-radius:15px}.uni-tab__color-y[data-v-fc0b7b4e]{background-color:#ffa200}.uni-tab__color-r[data-v-fc0b7b4e]{background-color:red}',""]),t.exports=e},"1da1":function(t,e,n){"use strict";function o(t,e,n,o,i,r,a){try{var c=t[r](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(o,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function c(t){o(a,i,r,c,l,"next",t)}function l(t){o(a,i,r,c,l,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"29fd":function(t,e,n){"use strict";var o=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("7de4")),r={name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},fontFamily:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=r},"2a96":function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=o(n("1da1")),r=o(n("e89e")),a={components:{uniGoodsNav:r.default},data:function(){return{id:1,detail:{},options:[{icon:"headphones",text:"客服"},{icon:"shop",text:"店铺",info:2,infoBackgroundColor:"#007aff",infoColor:"red"},{icon:"cart",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},onLoad:function(t){this.id=t.goods_id,this.getNewsDetail()},methods:{getNewsDetail:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/goods/detail?goods_id="+t.id});case 2:n=e.sent,t.detail=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(e){t.log(e),this.options[2].info++}}};e.default=a}).call(this,n("5a52")["default"])},"2d7f":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("74d7")),r=o(n("8eea")),a=o(n("6ee5")),c={en:i.default,"zh-Hans":r.default,"zh-Hant":a.default};e.default=c},"2de0":function(t,e,n){"use strict";n.r(e);var o=n("29fd"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"6ced":function(t,e,n){"use strict";var o=n("a6b5"),i=n.n(o);i.a},"6ee5":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},"74d7":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},"77ed":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},"7de4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=o},8493:function(t,e,n){"use strict";var o=n("988a"),i=n.n(o);i.a},8791:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news_detail[data-v-37f2eb6a]{font-size:%?30?%}.news_detail uni-image[data-v-37f2eb6a]{width:100%}.news_detail .title[data-v-37f2eb6a]{text-align:center;padding:0 %?20?%;font-weight:700}.news_detail .info > uni-view[data-v-37f2eb6a]:nth-child(1){font-weight:700;padding:0 %?20?%}.news_detail .info > uni-view:nth-child(1) > uni-text[data-v-37f2eb6a]:nth-of-type(1){color:#e1251b}.news_detail .info1[data-v-37f2eb6a]{padding:0 %?20?%}.news_detail .info uni-view[data-v-37f2eb6a]{padding-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.news_detail .goods_introduce[data-v-37f2eb6a]{padding-bottom:50px}.news_detail .goods-nav[data-v-37f2eb6a]{position:fixed;bottom:0;width:100%}',""]),t.exports=e},"8eea":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"910d":function(t,e,n){var o=n("24fb"),i=n("1de5"),r=n("77ed");e=o(!1);var a=i(r);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+a+') format("truetype")}.uni-icons[data-v-70d7f375]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},"94d3":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.fontFamily,t.fontFamily?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.fontFamily?"":t.icons[t.type]))])},r=[]},"96cf":function(t,e){!function(e){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag",u="object"===typeof t,s=e.regeneratorRuntime;if(s)u&&(t.exports=s);else{s=e.regeneratorRuntime=u?t.exports:{},s.wrap=y;var f="suspendedStart",d="suspendedYield",p="executing",b="completed",h={},v={};v[a]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(z([])));w&&w!==o&&i.call(w,a)&&(v=w);var g=C.prototype=_.prototype=Object.create(v);k.prototype=g.constructor=C,C.constructor=k,C[l]=k.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},s.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[c]=function(){return this},s.AsyncIterator=E,s.async=function(t,e,n,o){var i=new E(y(t,e,n,o));return s.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(g),g[l]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},s.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,i){return c.type="throw",c.arg=t,e.next=o,i&&(e.method="next",e.arg=n),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var i=o.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:z(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=n),h}}}function y(t,e,n,o){var i=e&&e.prototype instanceof _?e:_,r=Object.create(i.prototype),a=new P(o||[]);return r._invoke=L(t,n,a),r}function m(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(o){return{type:"throw",arg:o}}}function _(){}function k(){}function C(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,o,r,a){var c=m(t[n],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,r,a)}),(function(t){e("throw",t,r,a)})):Promise.resolve(u).then((function(t){l.value=t,r(l)}),(function(t){return e("throw",t,r,a)}))}a(c.arg)}var n;function o(t,o){function i(){return new Promise((function(n,i){e(t,o,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=o}function L(t,e,n){var o=f;return function(i,r){if(o===p)throw new Error("Generator is already running");if(o===b){if("throw"===i)throw r;return F()}n.method=i,n.arg=r;while(1){var a=n.delegate;if(a){var c=G(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=m(t,e,n);if("normal"===l.type){if(o=n.done?b:d,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=b,n.method="throw",n.arg=l.arg)}}}function G(t,e){var o=t.iterator[e.method];if(o===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,G(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=m(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){while(++o<t.length)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"988a":function(t,e,n){var o=n("910d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("8503c770",o,!0,{sourceMap:!1,shadowMode:!1})},"9d98":function(t,e,n){"use strict";var o=n("b079"),i=n.n(o);i.a},"9df3":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-goods-nav"},[n("v-uni-view",{staticClass:"uni-tab__seat"}),n("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,o){return n("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick(o,e)}}},[n("v-uni-view",{staticClass:"uni-tab__icon"},[n("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),n("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),n("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?n("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,o){return n("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick(o,e)}}},[n("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},r=[]},a6b5:function(t,e,n){var o=n("8791");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("1dd520e3",o,!0,{sourceMap:!1,shadowMode:!1})},b079:function(t,e,n){var o=n("14f4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("6459876e",o,!0,{sourceMap:!1,shadowMode:!1})},d339:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("f72d")),r=n("78b5"),a=o(n("2d7f")),c=(0,r.initVueI18n)(a.default),l=c.t,u={name:"UniGoodsNav",components:{uniIcons:i.default},emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:l("uni-goods-nav.options.shop")},{icon:"cart",text:l("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:l("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"#ffa200",color:"#fff"},{text:l("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=u},e58d:function(t,e,n){"use strict";n.r(e);var o=n("0ec3"),i=n("f389");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("6ced");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"37f2eb6a",null,!1,o["a"],a);e["default"]=l.exports},e89e:function(t,e,n){"use strict";n.r(e);var o=n("9df3"),i=n("0295");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("9d98");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"fc0b7b4e",null,!1,o["a"],a);e["default"]=l.exports},f389:function(t,e,n){"use strict";n.r(e);var o=n("2a96"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},f72d:function(t,e,n){"use strict";n.r(e);var o=n("94d3"),i=n("2de0");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8493");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"70d7f375",null,!1,o["a"],a);e["default"]=l.exports}}]);