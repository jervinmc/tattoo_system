(window.webpackJsonp=window.webpackJsonp||[]).push([[39,17,18],{586:function(t,e,n){"use strict";var r=n(2),o=(n(39),n(58),n(217),n(12),n(5),n(11),n(57),n(116),n(10),n(13),n(15),n(16),n(7)),c=n(96),l=n(139);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},676:function(t,e,n){"use strict";n.r(e);var r=n(37),o=(n(36),n(5),n(42),n(44),n(581),n(301),n(115),{props:["isOpen","items","isAdd"],watch:{items:function(){this.events=this.items,this.img_holder=this.items.image}},data:function(){return{room_list:["Standard","Deluxe","Suite"],events:[],category:[],buttonLoad:!1,img_holder:"image_placeholder.png"}},methods:{categoryGetall:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/category/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.category=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},addEvents:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("email",t.events.email),n.append("firstname",t.events.firstname),n.append("lastname",t.events.lastname),n.append("account_type",t.events.account_type),n.append("gcash","09394337034"),n.append("status","Activated"),n.append("password",t.events.password),!t.isAdd){e.next=17;break}return e.next=14,t.$axios.post("/users/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$refs.form.reset(),t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 14:e.sent,e.next=20;break;case 17:return e.next=19,t.$axios.patch("/users/".concat(t.events.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 19:e.sent;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),t.buttonLoad=!1;case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$emit("cancel")}},created:function(){this.categoryGetall()}}),c=n(95),l=n(137),d=n.n(l),v=n(224),f=n(209),m=n(175),h=n(440),_=n(441),y=n(586),x=n(445),w=n(712),C=n(616),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form"},[n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("New User")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Email")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.email,callback:function(e){t.$set(t.events,"email",e)},expression:"events.email"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Firstname")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.firstname,callback:function(e){t.$set(t.events,"firstname",e)},expression:"events.firstname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Lastname")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.lastname,callback:function(e){t.$set(t.events,"lastname",e)},expression:"events.lastname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Account Type")]),t._v(" "),n("div",[n("v-select",{attrs:{outlined:"",items:["Owner","Artist"]},model:{value:t.events.account_type,callback:function(e){t.$set(t.events,"account_type",e)},expression:"events.account_type"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Password")]),t._v(" "),n("div",[n("v-text-field",{attrs:{type:"password",outlined:""},model:{value:t.events.password,callback:function(e){t.$set(t.events,"password",e)},expression:"events.password"}})],1)]),t._v(" "),n("v-col",{staticClass:"d-none"},[n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"fileInput",accept:"image/png, image/jpeg"},on:{change:t.onFileUpload}})]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:t.cancel}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.addEvents}},[t._v("\n              Save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCol:h.a,VDialog:_.a,VForm:y.a,VRow:x.a,VSelect:w.a,VTextField:C.a})},706:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(2),c=(n(25),n(62),n(302),n(5),n(80),n(12),n(115),{components:{UserAdd:n(676).default},created:function(){this.loadData()},data:function(){var t;return t={search:"",category:"",buttonLoad:!1,account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(o.a)(t,"selectedItem",{}),Object(o.a)(t,"isLoading",!1),Object(o.a)(t,"users",[]),Object(o.a)(t,"dialogAdd",!1),Object(o.a)(t,"isCategory",!1),Object(o.a)(t,"isAdd",!0),Object(o.a)(t,"headers",[{text:"ID",value:"id"},{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Email",value:"email"},{text:"Status",value:"status"},{text:"Action",value:"opt"},,]),t},methods:{status:function(t,e){var n=this;this.buttonLoad=!0,this.$axios.patch("/users/".concat(t.id,"/"),{status:e},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){n.isCategory=!1,n.buttonLoad=!1,n.loadData()}))},approve:function(t){var e=this;this.buttonLoad=!0,this.$axios.patch("/cases/".concat(this.selectedItem.id,"/"),{category:this.category},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.isCategory=!1,e.buttonLoad=!1,e.loadData()}))},submitCategory:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonLoad=!0,t.$axios.patch("/cases/".concat(t.selectedItem.id,"/"),{category:t.category},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.isCategory=!1,t.buttonLoad=!1,t.loadData()}));case 2:case"end":return e.stop()}}),e)})))()},setCategory:function(t){this.isCategory=!0,this.selectedItem=t},getColorStatus:function(t){return t?"background-color:green;border-radius:15px;padding:7px; width:150px; color:white;":"background-color:red;border-radius:15px;padding:7px; width:150px; color: white;"},deleteValue:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonLoad=!0,t.$axios.delete("/beneficiaries/".concat(t.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.deleteConfirmation=!1,t.buttonLoad=!1,alert("Successfully Deleted!"),t.loadData()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){this.selectedItem=t,this.deleteConfirmation=!0},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(t){this.selectedItem=t,this.dialogAdd=!0,this.isAdd=!1},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},loadData:function(){this.account_type=localStorage.getItem("account_type"),this.eventsGetall()},eventsGetall:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/users/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.events=e.data.filter((function(data){return"Owner"!=data.account_type})),t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(95),d=n(137),v=n.n(d),f=n(224),m=n(209),h=n(175),_=n(440),y=n(762),x=n(441),w=n(208),C=n(211),k=n(132),O=n(94),V=n(713),j=n(445),A=n(712),L=n(760),$=n(616),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"5"}},[n("user-add",{attrs:{isOpen:t.dialogAdd,items:t.selectedItem,isAdd:t.isAdd},on:{cancel:function(e){t.dialogAdd=!1},refresh:t.loadData}}),t._v(" "),n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.deleteConfirmation,callback:function(e){t.deleteConfirmation=e},expression:"deleteConfirmation"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Confirmation")]),t._v(" "),n("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("\n      Are you sure you want to delete this item?\n  ")]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.isCategory=!1}}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.submitCategory}},[t._v(" Confirm ")])],1)],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.isCategory,callback:function(e){t.isCategory=e},expression:"isCategory"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Category")]),t._v(" "),n("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("\n      Please select category.\n  ")]),t._v(" "),n("div",[n("v-select",{attrs:{outlined:"",items:["Category1","Category2","Category3"]},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.isCategory=!1}}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.submitCategory}},[t._v(" Confirm ")])],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start"}},[n("b",[t._v("Users Management")])]),t._v(" "),"Staff"!=t.account_type?n("v-col",{staticClass:"pr-10",attrs:{"align-self":"center",align:"end"}},[n("v-btn",{staticClass:"rnd-btn",attrs:{rounded:"",large:"",color:"black",depressed:"",dark:"",width:"190"},on:{click:t.addItem}},[n("span",{staticClass:"text-none"},[t._v("Add User")])])],1):t._e()],1),t._v(" "),n("v-col",{staticClass:"pa-10 ",attrs:{"align-self":"center"}},[n("v-text-field",{attrs:{placeholder:"search",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{staticClass:"pa-5",attrs:{search:t.search,headers:t.headers,items:t.events,loading:t.isLoading},scopedSlots:t._u([{key:"item.price",fn:function(e){var r=e.item;return[n("div",[t._v("\n          "+t._s(t.formatPrice(r.price))+"\n        ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.opt",fn:function(e){var r=e.item;return[n("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.editItem(r)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Edit")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.status(r,"Activated")}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Activate")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.status(r,"Deactivated")}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Deactivate")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VCardActions:h.a,VCol:_.a,VDataTable:y.a,VDialog:x.a,VIcon:w.a,VList:C.a,VListItem:k.a,VListItemContent:O.a,VListItemTitle:O.b,VMenu:V.a,VRow:j.a,VSelect:A.a,VSkeletonLoader:L.a,VTextField:$.a})},772:function(t,e,n){"use strict";n.r(e);var r={components:{UsermanagementContainer:n(706).default}},o=n(95),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("usermanagement-container")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);