(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04e8":function(t,n,a){},"627a":function(t,n,a){"use strict";var e=a("04e8"),o=a.n(e);o.a},f820:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],s=a("2877"),r={},i=Object(s["a"])(r,e,o,!1,null,null,null);n["default"]=i.exports},fc19:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"white"},[a("van-button",{attrs:{size:"large"},on:{click:t.startH5}},[t._v("startH5")]),a("van-button",{attrs:{size:"large"},on:{click:t.startH6}},[t._v("startH6")]),a("van-button",{attrs:{size:"large"},on:{click:t.startH7}},[t._v("startH7")]),a("span",[t._v("111")])],1)},o=[],s={data:function(){return{show:!0,idNo:""}},methods:{startH5:function(){this.$router.go(0)},startH6:function(){location.reload()},startH7:function(){window.location.reload()}},mounted:function(){this.idNo=this.$route.params.idNo,alert(this.idNo),setTimeout((function(){AlipayJSBridge.call("pushWindow",{url:"https://m.taobao.com/",param:{closeCurrentWindow:!0}})}),2500)}},r=s,i=(a("627a"),a("2877")),u=Object(i["a"])(r,e,o,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=about.7394f9de.js.map