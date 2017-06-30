webpackJsonp([0],[,,function(t,e,s){"use strict";var n=s(0),a=s(13),i=s(10),r=s.n(i);n.a.use(a.a),e.a=new a.a({routes:[{path:"/third-and-fifth",name:"Third and Fifth notes",component:r.a}]})},function(t,e,s){function n(t){s(9)}var a=s(1)(s(6),s(12),n,null,null);t.exports=a.exports},function(t,e){t.exports={c:{1:"c",2:"d",3:"e",4:"f",5:"g",6:"a",7:"b"},d:{1:"d",2:"e",3:"f#",4:"g",5:"a",6:"b",7:"c#"},e:{1:"e",2:"f#",3:"g#",4:"a",5:"b",6:"c#",7:"d#"},f:{1:"f",2:"g",3:"a",4:"a#",5:"c",6:"d",7:"e"},g:{1:"g",2:"a",3:"b",4:"c",5:"d",6:"e",7:"f#"},a:{1:"a",2:"b",3:"c#",4:"d",5:"e",6:"f#",7:"g#"},b:{1:"b",2:"c#",3:"d#",4:"e",5:"f#",6:"g#",7:"a"}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0),a=s(3),i=s.n(a),r=s(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=function(){return{scale_chosen:["c","d","e","f","g","a","b"][Math.floor(7*Math.random())],note_chosen:1===Math.floor(2*Math.random())?3:5}};e.default={name:"third-and-fifth",props:["test"],data:function(){return{waiting:!0,timing:!1,playing:!1,result:!1,result_answer:!1,right_answers_count:0,wrong_answers_count:0,time_avg:0,plays:0,time:0,answer_time:0,scale_chosen:"",note_chosen:0,user_answer:"",avgInterval:{},notes:n}},methods:{start:function(){var t=this;this.result=!1,this.user_answer="",this.time=3,this.waiting=!1,this.timing=!0;var e=setInterval(function(){if(t.time>1)t.time=t.time-1;else{clearInterval(e);var s=a();t.timing=!1,t.scale_chosen=s.scale_chosen,t.note_chosen=s.note_chosen,t.playing=!0,t.avgInterval=setInterval(function(){t.answer_time=t.answer_time+1},1e3)}},1e3)},check_answer:function(){var t=this;clearInterval(this.avgInterval),this.user_answer.toLowerCase()===n[this.scale_chosen][this.note_chosen]?(this.result_answer=!0,this.right_answers_count++):(this.result_answer=!1,this.wrong_answers_count++),this.plays++,this.result=!0,this.playing=!1,this.time_avg=(this.time_avg+this.answer_time)/this.plays,setTimeout(function(){t.start()},3e3)}}}},function(t,e){},function(t,e){},function(t,e,s){function n(t){s(8)}var a=s(1)(s(7),s(11),n,"data-v-0aaa2055",null);t.exports=a.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column has-text-centered"},[t.plays>0?s("div",{staticClass:"block"},[s("span",{staticClass:"tag is-success"},[t._v("\n          Right: "+t._s(t.right_answers_count)+"\n        ")]),t._v(" "),s("span",{staticClass:"tag is-danger"},[t._v("\n          Wrong: "+t._s(t.wrong_answers_count)+"\n        ")])]):t._e(),t._v(" "),t.plays>0?s("div",[s("small",[t._v("Time average of each answer: "),s("strong",[t._v(t._s(t.time_avg))]),t._v("s")]),t._v(" "),s("br")]):t._e(),t._v(" "),t.waiting?s("div",[s("a",{staticClass:"button is-warning is-medium",on:{click:t.start}},[t._v("start game")])]):t._e(),t._v(" "),t.timing?s("div",[t._v("\n        "+t._s(t.time)+"\n      ")]):t._e(),t._v(" "),t.playing?s("div",[s("h2",{staticClass:"title is-2"},[t._v(t._s(t.scale_chosen.toUpperCase()))]),t._v(" "),s("p",[t._v("What's the "),s("strong",[t._v(t._s(t.note_chosen)+t._s(5===t.note_chosen?"th":"rd"))]),t._v(" note in the "),s("strong",[t._v(t._s(t.scale_chosen.toUpperCase()))]),t._v(" scale?")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_answer,expression:"user_answer"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Type your answer here"},domProps:{value:t.user_answer},on:{input:function(e){e.target.composing||(t.user_answer=e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"has-text-centered"},[s("a",{staticClass:"button is-success is-medium",on:{click:t.check_answer}},[t._v("confirm")])])])]):t._e(),t._v(" "),t.result?s("div",[s("br"),s("br"),t._v(" "),t.result_answer?t._e():s("div",{staticClass:"notification is-warning"},[s("button",{staticClass:"delete"}),t._v("\n          Whoops! Wrong note, the right one is "),s("strong",[t._v(t._s(t.notes[t.scale_chosen][t.note_chosen].toUpperCase()))])]),t._v(" "),t.result_answer?s("div",{staticClass:"notification is-success"},[s("button",{staticClass:"delete"}),t._v("\n          Yes!! "),s("u",[t._v(t._s(t.notes[t.scale_chosen][t.note_chosen].toUpperCase()))]),t._v(" really is the right note, let's try another one...\n        ")]):t._e()]):t._e(),t._v(" "),s("br"),s("br"),t._v(" "),t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half is-offset-one-quarter has-text-centered"},[s("h1",{staticClass:"title is-1"},[t._v("music theory study")]),t._v(" "),s("router-link",{staticClass:"button is-primary is-outlined",attrs:{to:"/third-and-fifth"}},[t._v("third and fifth notes of a scale")]),t._v(" "),s("br"),s("br"),t._v(" "),s("router-view")],1)])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.cd18d7540369843c9d72.js.map