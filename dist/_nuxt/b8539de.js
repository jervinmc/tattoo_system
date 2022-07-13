(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{586:function(t,e,n){"use strict";var r=n(2),o=(n(39),n(58),n(217),n(12),n(5),n(11),n(57),n(116),n(10),n(13),n(15),n(16),n(7)),c=n(96),l=n(139);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},676:function(t,e,n){"use strict";n.r(e);var r=n(37),o=(n(36),n(5),n(42),n(44),n(581),n(301),n(115),{props:["isOpen","items","isAdd"],watch:{items:function(){this.events=this.items,this.img_holder=this.items.image}},data:function(){return{room_list:["Standard","Deluxe","Suite"],events:[],category:[],buttonLoad:!1,img_holder:"image_placeholder.png"}},methods:{categoryGetall:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/category/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.category=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},addEvents:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("email",t.events.email),n.append("firstname",t.events.firstname),n.append("lastname",t.events.lastname),n.append("account_type",t.events.account_type),n.append("gcash","09394337034"),n.append("status","Activated"),n.append("password",t.events.password),!t.isAdd){e.next=17;break}return e.next=14,t.$axios.post("/users/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$refs.form.reset(),t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 14:e.sent,e.next=20;break;case 17:return e.next=19,t.$axios.patch("/users/".concat(t.events.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 19:e.sent;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),t.buttonLoad=!1;case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$emit("cancel")}},created:function(){this.categoryGetall()}}),c=n(95),l=n(137),d=n.n(l),v=n(224),f=n(209),h=n(175),m=n(440),_=n(441),w=n(586),x=n(445),y=n(712),O=n(616),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form"},[n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("New User")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Email")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.email,callback:function(e){t.$set(t.events,"email",e)},expression:"events.email"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Firstname")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.firstname,callback:function(e){t.$set(t.events,"firstname",e)},expression:"events.firstname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Lastname")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.lastname,callback:function(e){t.$set(t.events,"lastname",e)},expression:"events.lastname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Account Type")]),t._v(" "),n("div",[n("v-select",{attrs:{outlined:"",items:["Owner","Artist"]},model:{value:t.events.account_type,callback:function(e){t.$set(t.events,"account_type",e)},expression:"events.account_type"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Password")]),t._v(" "),n("div",[n("v-text-field",{attrs:{type:"password",outlined:""},model:{value:t.events.password,callback:function(e){t.$set(t.events,"password",e)},expression:"events.password"}})],1)]),t._v(" "),n("v-col",{staticClass:"d-none"},[n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"fileInput",accept:"image/png, image/jpeg"},on:{change:t.onFileUpload}})]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:t.cancel}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.addEvents}},[t._v("\n              Save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:h.a,VCol:m.a,VDialog:_.a,VForm:w.a,VRow:x.a,VSelect:y.a,VTextField:O.a})}}]);