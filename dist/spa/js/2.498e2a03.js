(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"439d":function(a,t,e){"use strict";e("4a24")},"4a24":function(a,t,e){},e009:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("form",{on:{submit:function(t){return t.preventDefault(),a.submitForm(t)}}},[e("div",{staticClass:"row q-mb-md"},[e("q-banner",{staticClass:"bg-grey-3 col",scopedSlots:a._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},[a._v("\n            "+a._s(a._f("titleCase")(a.tab))+" to access your forms anywhere!\n        ")])],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"email",staticClass:"col",attrs:{rules:[function(t){return a.isValidEmailAddress(t)||"Please enter a valid email address"}],"lazy-rules":"",outlined:"",label:"Email","stack-label":""},model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1),e("div",{staticClass:"row q-mb-md"},[e("q-input",{ref:"password",staticClass:"col",attrs:{rules:[function(a){return a.length>=6||"Please enter at leaset 6 characters"}],"lazy-rules":"",type:"password",outlined:"",label:"Password","stack-label":""},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),e("div",{staticClass:"row q-nb-md"},[e("q-space"),e("q-btn",{attrs:{color:"primary",label:a.tab,type:"submit"}})],1)])},r=[],l=(e("fb6a"),e("ded3")),n=e.n(l),i=e("2f62"),o={props:["tab"],data(){return{formData:{email:"",password:""}}},methods:n()(n()({},Object(i["b"])("auth",["registerUser","loginUser"])),{},{submitForm(){console.log(this.formData),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("login"===this.tab?this.loginUser(this.formData):this.registerUser(this.formData))},isValidEmailAddress(a){const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())}}),filters:{titleCase(a){return a.charAt(0).toUpperCase()+a.slice(1)}}},c=o,u=e("2877"),b=e("54e1"),d=e("0016"),m=e("27f9"),f=e("2c91"),p=e("9c40"),g=e("eebe"),h=e.n(g),w=Object(u["a"])(c,s,r,!1,null,null,null);t["default"]=w.exports;h()(w,"components",{QBanner:b["a"],QIcon:d["a"],QInput:m["a"],QSpace:f["a"],QBtn:p["a"]})},f724:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("q-card",{staticClass:"auth-tabs"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab",{attrs:{name:"login",label:"Login"}}),e("q-tab",{attrs:{name:"register",label:"Register"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"login"}},[e("login-register",{attrs:{tab:a.tab}})],1),e("q-tab-panel",{attrs:{name:"register"}},[e("login-register",{attrs:{tab:a.tab}})],1)],1)],1)],1)},r=[],l={data(){return{tab:"login"}},components:{"login-register":e("e009").default}},n=l,i=(e("439d"),e("2877")),o=e("9989"),c=e("f09f"),u=e("429b"),b=e("7460"),d=e("eb85"),m=e("adad"),f=e("823b"),p=e("eebe"),g=e.n(p),h=Object(i["a"])(n,s,r,!1,null,null,null);t["default"]=h.exports;g()(h,"components",{QPage:o["a"],QCard:c["a"],QTabs:u["a"],QTab:b["a"],QSeparator:d["a"],QTabPanels:m["a"],QTabPanel:f["a"]})}}]);