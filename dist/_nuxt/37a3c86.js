(window.webpackJsonp=window.webpackJsonp||[]).push([[42,19,22,52],{586:function(t,e,n){"use strict";var o=n(2),r=(n(39),n(58),n(217),n(12),n(5),n(11),n(57),n(116),n(10),n(13),n(15),n(16),n(7)),l=n(96),c=n(139);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},587:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5e62c9d0",content,!0,{sourceMap:!1})},588:function(t,e,n){var o=n(19)(!1);o.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=o},589:function(t,e,n){var content=n(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2e2bc7da",content,!0,{sourceMap:!1})},590:function(t,e,n){var o=n(19)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},591:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("999cb8a8",content,!0,{sourceMap:!1})},592:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=o},608:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5c8fbe94",content,!0,{sourceMap:!1})},609:function(t,e,n){var o=n(19)(!1);o.push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),t.exports=o},613:function(t,e,n){"use strict";n.r(e);var o=n(37),r=(n(13),n(67),n(36),n(5),n(42),n(44),n(581),n(301),n(115),{props:["isOpen","items","isAdd"],watch:{items:function(){this.events=this.items,this.img_holder=this.items.image}},data:function(){return{room_list:["Standard","Deluxe","Suite"],events:[],category:[],buttonLoad:!1,img_holder:"image_placeholder.png"}},methods:{categoryGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/category/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.category=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},addEvents:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("tattoo_name",t.events.tattoo_name),n.append("category",t.events.category),n.append("colored",t.events.colored),n.append("price",t.events.price),n.append("description",t.events.description),n.append("time_estimation",t.events.time_estimation),n.append("user_id",localStorage.getItem("id")),!t.isAdd){e.next=18;break}return n.append("status","Pending"),e.next=15,t.$axios.post("/tattoo/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$refs.form.reset(),t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 15:e.sent,e.next=21;break;case 18:return e.next=20,t.$axios.patch("/tattoo/".concat(t.events.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 20:e.sent;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),t.buttonLoad=!1;case 26:case"end":return e.stop()}}),e,null,[[1,23]])})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$emit("cancel")}},created:function(){this.categoryGetall()}}),l=n(95),c=n(137),d=n.n(c),v=n(224),f=n(209),h=n(175),x=n(440),m=n(441),_=n(586),y=n(208),w=n(671),O=n(620),k=n(445),C=n(712),j=n(616),I=n(674),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form"},[n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("New Design")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Tattoo Name")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.tattoo_name,callback:function(e){t.$set(t.events,"tattoo_name",e)},expression:"events.tattoo_name"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Category")]),t._v(" "),n("div",[n("v-select",{attrs:{outlined:"",items:t.category,"item-text":"category_name","item-value":"category_name"},model:{value:t.events.category,callback:function(e){t.$set(t.events,"category",e)},expression:"events.category"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Estimated Time(Minutes)")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.time_estimation,callback:function(e){t.$set(t.events,"time_estimation",e)},expression:"events.time_estimation"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Description")]),t._v(" "),n("div",[n("v-textarea",{attrs:{outlined:""},model:{value:t.events.description,callback:function(e){t.$set(t.events,"description",e)},expression:"events.description"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Price")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.events.price,callback:function(e){t.$set(t.events,"price",e)},expression:"events.price"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("v-radio-group",{model:{value:t.events.colored,callback:function(e){t.$set(t.events,"colored",e)},expression:"events.colored"}},[n("v-radio",{attrs:{label:"Colored",value:"Colored"}}),t._v(" "),n("v-radio",{attrs:{label:"Black",value:"Black"}})],1)],1),t._v(" "),n("v-col",[n("span",{staticClass:"pt-2 pr-10 pb-10"},[n("b",[t._v("Upload Image"),n("v-icon",{on:{click:function(e){return t.$refs.file.click()}}},[t._v("mdi-plus")])],1)]),t._v(" "),n("div",{staticClass:"hover_pointer pt-10"},[n("img",{staticClass:"mb-0",attrs:{src:t.img_holder,alt:"item_.js",height:"150",width:"150"},on:{click:function(e){return t.$refs.file.click()}}})])]),t._v(" "),n("v-col",{staticClass:"d-none"},[n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"fileInput",accept:"image/png, image/jpeg"},on:{change:t.onFileUpload}})]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:t.cancel}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.addEvents}},[t._v("\n              Save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:h.a,VCol:x.a,VDialog:m.a,VForm:_.a,VIcon:y.a,VRadio:w.a,VRadioGroup:O.a,VRow:k.a,VSelect:C.a,VTextField:j.a,VTextarea:I.a})},620:function(t,e,n){"use strict";n(10),n(13),n(12),n(5),n(15),n(11),n(16);var o=n(2),r=(n(23),n(589),n(591),n(575)),l=n(142),c=n(7);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.a)(l.a,r.a);e.a=f.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},r.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=r.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick},render:function(t){var e=r.a.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}})},671:function(t,e,n){"use strict";n(10),n(13),n(12),n(5),n(15),n(11),n(16);var o=n(117),r=n(2),l=(n(36),n(587),n(614)),c=n(114),d=n(575),v=n(96),f=n(30),h=n(140),x=n(97),m=n(1).a.extend({name:"rippleable",directives:{ripple:x.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),_=n(28),y=(n(80),n(222)),w=n(7);function O(t){t.preventDefault()}var k=Object(w.a)(d.a,m,y.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=d.a.options.methods.genLabel.call(this);return label?(label.data.on={click:O},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:O},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),C=n(0),j=n(63),I=["title"];function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(w.a)(v.a,f.a,m,Object(h.a)("radioGroup"),_.a);e.a=$.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return S(S({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return k.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return k.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return k.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(l.a,{on:{click:O},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(C.t)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,I));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(S({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(j.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})},674:function(t,e,n){"use strict";n(10),n(13),n(12),n(5),n(15),n(11),n(16);var o=n(2),r=(n(23),n(57),n(608),n(616)),l=n(7);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=Object(l.a)(r.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null==(n=e.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){r.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},708:function(t,e,n){"use strict";n.r(e);var o=n(37),r=n(2),l=(n(25),n(62),n(302),n(5),n(80),n(115),{components:{AddDesign:n(613).default},created:function(){this.loadData()},data:function(){var t;return t={buttonLoad:!1,account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(r.a)(t,"selectedItem",{}),Object(r.a)(t,"isLoading",!1),Object(r.a)(t,"users",[]),Object(r.a)(t,"dialogAdd",!1),Object(r.a)(t,"isAdd",!0),Object(r.a)(t,"headers",[{text:"ID",value:"id"},{text:"Tattoo Name",value:"tattoo_name"},{text:"Category",value:"category"},{text:"Image",value:"image"},{text:"Price",value:"price"},{text:"Color",value:"colored"},{text:"Description",value:"description"},{text:"Status",value:"status"},{text:"Actions",value:"opt"},,]),t},methods:{getColorStatus:function(t){return"Pending"==t?"background-color:#FFF5CC;border-radius:15px;padding:7px; width:150px; color: #344557;":"Approved"==t?"background-color:green;border-radius:15px;padding:7px; width:150px; color:white;":"background-color:red;border-radius:15px;padding:7px; width:150px; color: white;"},deleteValue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonLoad=!0,t.$axios.delete("/tattoo/".concat(t.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.deleteConfirmation=!1,t.buttonLoad=!1,alert("Successfully Deleted!"),t.loadData()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){this.selectedItem=t,this.deleteConfirmation=!0},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(t){this.selectedItem=t,this.dialogAdd=!0,this.isAdd=!1},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=t},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.account_type=localStorage.getItem("account_type"),this.eventsGetall()},eventsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/tattoo_id/".concat(localStorage.getItem("id"),"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.events=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(95),d=n(137),v=n.n(d),f=n(224),h=n(209),x=n(175),m=n(695),_=n(440),y=n(762),w=n(441),O=n(208),k=n(172),C=n(211),j=n(132),I=n(94),V=n(713),S=n(445),$=n(760),D=n(446),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"5"}},[n("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.deleteConfirmation,callback:function(e){t.deleteConfirmation=e},expression:"deleteConfirmation"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Confirmation")]),t._v(" "),n("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("\n      Are you sure you want to delete this item?\n  ")]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.deleteConfirmation=!1}}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.deleteValue}},[t._v(" Confirm ")])],1)],1)],1)],1)],1),t._v(" "),n("add-design",{attrs:{isOpen:t.dialogAdd,items:t.selectedItem,isAdd:t.isAdd},on:{cancel:function(e){t.dialogAdd=!1},refresh:t.loadData}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start",cols:"auto"}},[n("b",[t._v("Design Management")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"pr-10",attrs:{"align-self":"center",align:"end"}},[n("v-btn",{staticClass:"rnd-btn",attrs:{rounded:"",large:"",color:"#222f3e",depressed:"",dark:"",width:"190"},on:{click:t.addItem}},[n("span",{staticClass:"text-none"},[t._v("Add New Design")])])],1)],1),t._v(" "),n("v-data-table",{staticClass:"pa-5",attrs:{headers:t.headers,items:t.events,loading:t.isLoading},scopedSlots:t._u([{key:"item.status",fn:function(e){var o=e.item;return[n("div",[n("v-chip",{attrs:{align:"center"}},[n("span",[t._v(t._s(o.status)+" ")])])],1)]}},{key:"item.price",fn:function(e){var o=e.item;return[n("div",[t._v("\n          "+t._s(t.formatPrice(o.price))+"\n        ")])]}},{key:"loading",fn:function(){return t._l(5,(function(t){return n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.image",fn:function(t){var e=t.item;return[n("v-img",{attrs:{src:e.image,height:"150",width:"150"}})]}},{key:"item.opt",fn:function(e){var o=e.item;return[n("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.editItem(o)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Edit")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.deleteItem(o)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardActions:x.a,VChip:m.a,VCol:_.a,VDataTable:y.a,VDialog:w.a,VIcon:O.a,VImg:k.a,VList:C.a,VListItem:j.a,VListItemContent:I.a,VListItemTitle:I.b,VMenu:V.a,VRow:S.a,VSkeletonLoader:$.a,VSpacer:D.a})},775:function(t,e,n){"use strict";n.r(e);var o={components:{DesignContainer:n(708).default}},r=n(95),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("design-container")],1)}),[],!1,null,null,null);e.default=component.exports}}]);