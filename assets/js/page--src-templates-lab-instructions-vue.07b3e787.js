(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{226:function(t,n,s){},227:function(t,n,s){},228:function(t,n){},234:function(t,n,s){"use strict";s(235);var e=s(5),a=s(97),r=s(6),o=/./.toString,i=function(t){s(15)(RegExp.prototype,"toString",t,!0)};s(7)((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?i((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?a.call(t):void 0)})):"toString"!=o.name&&i((function(){return o.call(this)}))},235:function(t,n,s){s(6)&&"g"!=/./g.flags&&s(9).f(RegExp.prototype,"flags",{configurable:!0,get:s(97)})},236:function(t,n,s){var e=Date.prototype,a=e.toString,r=e.getTime;new Date(NaN)+""!="Invalid Date"&&s(15)(e,"toString",(function(){var t=r.call(this);return t==t?a.call(this):"Invalid Date"}))},237:function(t,n,s){"use strict";var e=s(226);s.n(e).a},238:function(t,n,s){"use strict";var e=s(227);s.n(e).a},239:function(t,n,s){"use strict";var e=s(228),a=s.n(e);n.default=a.a},243:function(t,n,s){"use strict";s.r(n);s(234),s(236);var e={metaInfo:function(){return{title:this.$page.labInstructions.title}},computed:{nextstep:function(){return this.$page.labInstructions.step+1},prevstep:function(){return this.$page.labInstructions.step-1},nextUrl:function(){return"/lab/"+this.$page.labInstructions.lab.toString()+"/"+this.nextstep.toString()},prevUrl:function(){return"/lab/"+this.$page.labInstructions.lab.toString()+"/"+this.prevstep.toString()}}},a=(s(237),s(238),s(44)),r=s(239),o=Object(a.a)(e,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("Layout",[s("div",{staticClass:"lab-intructions"},[s("h2",{staticClass:"accent--text"},[t._v("Lab "+t._s(t.$page.labInstructions.lab)+" step "+t._s(t.$page.labInstructions.step))]),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"lab-instructions-content",domProps:{innerHTML:t._s(t.$page.labInstructions.content)}}),t.$page.labInstructions.start?s("div",{staticClass:"actions next"},[s("v-btn",{attrs:{rounded:"",color:"secondary",to:t.nextUrl,dark:""}},[t._v("Go to step "+t._s(t.nextstep)+" ")])],1):t._e(),t.$page.labInstructions.last?s("div",{staticClass:"actions prev"},[s("v-btn",{attrs:{rounded:"",color:"secondary",to:t.prevUrl,dark:""}},[t._v("Go to step "+t._s(t.prevstep)+" ")])],1):t._e()]),t.$page.labInstructions.start||t.$page.labInstructions.last?t._e():s("div",{staticClass:"actions"},[s("v-btn",{attrs:{rounded:"",color:"secondary",to:t.prevUrl,dark:""}},[t._v("Go to step "+t._s(t.prevstep)+" ")]),s("v-btn",{attrs:{rounded:"",color:"secondary",to:t.nextUrl,dark:""}},[t._v("Go to step "+t._s(t.nextstep)+" ")])],1)])}),[],!1,null,"417dbc17",null);"function"==typeof r.default&&Object(r.default)(o);n.default=o.exports}}]);