(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8b78422"],{"066a":function(e,t,n){"use strict";n("460a")},"0cb2":function(e,t,n){var c=n("e330"),r=n("7b0b"),a=Math.floor,i=c("".charAt),o=c("".replace),u=c("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,b,f){var j=n+e.length,O=c.length,d=l;return void 0!==b&&(b=r(b),d=s),o(f,d,(function(r,o){var s;switch(i(o,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,n);case"'":return u(t,j);case"<":s=b[u(o,1,-1)];break;default:var l=+o;if(0===l)return r;if(l>O){var f=a(l/10);return 0===f?r:f<=O?void 0===c[f-1]?i(o,1):c[f-1]+i(o,1):r}s=c[l-1]}return void 0===s?"":s}))}},"107c":function(e,t,n){var c=n("d039"),r=n("da84"),a=r.RegExp;e.exports=c((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"11c3":function(e,t,n){"use strict";n("e8c5")},"14c3":function(e,t,n){var c=n("da84"),r=n("c65b"),a=n("825a"),i=n("1626"),o=n("c6b6"),u=n("9263"),s=c.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var c=r(n,e,t);return null!==c&&a(c),c}if("RegExp"===o(e))return r(u,e,t);throw s("RegExp#exec called on incompatible receiver")}},"2aa9":function(e,t,n){},"32a0":function(e,t,n){},"460a":function(e,t,n){},5319:function(e,t,n){"use strict";var c=n("2ba4"),r=n("c65b"),a=n("e330"),i=n("d784"),o=n("d039"),u=n("825a"),s=n("1626"),l=n("5926"),b=n("50c4"),f=n("577e"),j=n("1d80"),O=n("8aa5"),d=n("dc4a"),p=n("0cb2"),v=n("14c3"),x=n("b622"),m=x("replace"),g=Math.max,h=Math.min,I=a([].concat),k=a([].push),w=a("".indexOf),y=a("".slice),E=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),z=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),R=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,n){var a=z?"$":"$0";return[function(e,n){var c=j(this),a=void 0==e?void 0:d(e,m);return a?r(a,e,c,n):r(t,f(c),e,n)},function(e,r){var i=u(this),o=f(e);if("string"==typeof r&&-1===w(r,a)&&-1===w(r,"$<")){var j=n(t,i,o,r);if(j.done)return j.value}var d=s(r);d||(r=f(r));var x=i.global;if(x){var m=i.unicode;i.lastIndex=0}var S=[];while(1){var z=v(i,o);if(null===z)break;if(k(S,z),!x)break;var R=f(z[0]);""===R&&(i.lastIndex=O(o,b(i.lastIndex),m))}for(var q="",_=0,C=0;C<S.length;C++){z=S[C];for(var V=f(z[0]),D=g(h(l(z.index),o.length),0),T=[],$=1;$<z.length;$++)k(T,E(z[$]));var A=z.groups;if(d){var L=I([V],T,D,o);void 0!==A&&k(L,A);var M=f(c(r,void 0,L))}else M=p(V,o,D,T,A,r);D>=_&&(q+=y(o,_,D)+M,_=D+V.length)}return q+y(o,_)}]}),!R||!S||z)},5532:function(e,t,n){"use strict";n("32a0")},"7f99":function(e,t,n){"use strict";n("d928")},8425:function(e,t,n){},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("c65b"),r=n("e330"),a=n("577e"),i=n("ad6d"),o=n("9f7f"),u=n("5692"),s=n("7c73"),l=n("69f3").get,b=n("fce3"),f=n("107c"),j=u("native-string-replace",String.prototype.replace),O=RegExp.prototype.exec,d=O,p=r("".charAt),v=r("".indexOf),x=r("".replace),m=r("".slice),g=function(){var e=/a/,t=/b*/g;return c(O,e,"a"),c(O,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),h=o.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],k=g||I||h||b||f;k&&(d=function(e){var t,n,r,o,u,b,f,k=this,w=l(k),y=a(e),E=w.raw;if(E)return E.lastIndex=k.lastIndex,t=c(d,E,y),k.lastIndex=E.lastIndex,t;var S=w.groups,z=h&&k.sticky,R=c(i,k),q=k.source,_=0,C=y;if(z&&(R=x(R,"y",""),-1===v(R,"g")&&(R+="g"),C=m(y,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==p(y,k.lastIndex-1))&&(q="(?: "+q+")",C=" "+C,_++),n=new RegExp("^(?:"+q+")",R)),I&&(n=new RegExp("^"+q+"$(?!\\s)",R)),g&&(r=k.lastIndex),o=c(O,z?n:k,C),z?o?(o.input=m(o.input,_),o[0]=m(o[0],_),o.index=k.lastIndex,k.lastIndex+=o[0].length):k.lastIndex=0:g&&o&&(k.lastIndex=k.global?o.index+o[0].length:r),I&&o&&o.length>1&&c(j,o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&S)for(o.groups=b=s(null),u=0;u<S.length;u++)f=S[u],b[f[0]]=o[f[1]];return o}),e.exports=d},"9f7f":function(e,t,n){var c=n("d039"),r=n("da84"),a=r.RegExp,i=c((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=i||c((function(){return!a("a","y").sticky})),u=i||c((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:o,UNSUPPORTED_Y:i}},ac1f:function(e,t,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var c=n("83ab"),r=n("5e77").EXISTS,a=n("e330"),i=n("9bf2").f,o=Function.prototype,u=a(o.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(s.exec),b="name";c&&!r&&i(o,b,{configurable:!0,get:function(){try{return l(s,u(this))[1]}catch(e){return""}}})},bb51:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"home",id:"printTest"};function a(e,t,n,a,i,o){var u=Object(c["x"])("resume-header"),s=Object(c["x"])("skill"),l=Object(c["x"])("work-experience"),b=Object(c["x"])("project"),f=Object(c["x"])("educate");return Object(c["q"])(),Object(c["e"])("div",r,[Object(c["g"])(u),Object(c["g"])(s),Object(c["g"])(l),Object(c["g"])(b),Object(c["g"])(f)])}var i=function(e){return Object(c["t"])("data-v-39a1b0c5"),e=e(),Object(c["r"])(),e},o={class:"header-wrapper"},u=i((function(){return Object(c["f"])("h1",null,"张森",-1)})),s=i((function(){return Object(c["f"])("hr",null,null,-1)})),l={class:"header-content"},b={class:"mail"},f=i((function(){return Object(c["f"])("a",{href:"mailto:zsdota2@sina.com"}," zsdota2@sina.com ",-1)})),j={class:"info"},O=i((function(){return Object(c["f"])("a",{href:"https://zs-cuojue.github.io/resume/",target:"_blank"}," zs-cuojue.github.io/resume ",-1)})),d={class:"tel"},p=i((function(){return Object(c["f"])("a",{href:"tel:15927650450"}," 15927650450 ",-1)})),v={class:"wechat"},x=i((function(){return Object(c["f"])("span",null," sanmu_0118 ",-1)}));function m(e,t,n,r,a,i){var m=Object(c["x"])("com-icon");return Object(c["q"])(),Object(c["e"])("header",o,[u,s,Object(c["f"])("div",l,[Object(c["f"])("div",b,[Object(c["g"])(m,{name:"youxiang"}),f]),Object(c["f"])("div",j,[Object(c["g"])(m,{name:"lianjie"}),O]),Object(c["f"])("div",d,[Object(c["g"])(m,{name:"iconfontphone"}),p]),Object(c["f"])("div",v,[Object(c["g"])(m,{name:"weixin"}),x])])])}n("b0c0");function g(e,t,n,r,a,i){return Object(c["q"])(),Object(c["e"])("i",{class:Object(c["m"])(["zs-icon",e.name?"zs-icon-"+e.iconName:"",e.position?"zs-icon--"+e.position:"",e.size?"zs-icon--"+e.size:""])},null,2)}n("ac1f"),n("5319");var h=Object(c["h"])({name:"ComIcon",props:{name:String,position:String,size:String},setup:function(e){var t=Object(c["b"])((function(){var t=e.name||"";return t=t.replace(/\s+/g,"-"),t}));return{iconName:t}}}),I=n("d959"),k=n.n(I);const w=k()(h,[["render",g]]);var y=w,E=Object(c["h"])({name:"resumeHeader",components:{ComIcon:y}});n("f4de");const S=k()(E,[["render",m],["__scopeId","data-v-39a1b0c5"]]);var z=S,R=function(e){return Object(c["t"])("data-v-b2e65fa0"),e=e(),Object(c["r"])(),e},q={class:"workExperience"},_={class:"inner-title"},C=R((function(){return Object(c["f"])("span",null,"工作经历",-1)})),V=R((function(){return Object(c["f"])("hr",null,null,-1)})),D={class:"inner-content"},T={class:"top"},$={class:"cname"},A={class:"time"},L={class:"part-title"};function M(e,t,n,r,a,i){var o=Object(c["x"])("com-icon");return Object(c["q"])(),Object(c["e"])("section",q,[Object(c["f"])("div",_,[Object(c["g"])(o,{name:"gongzuojingli"}),C]),V,Object(c["f"])("div",D,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.experienceData,(function(e){return Object(c["q"])(),Object(c["e"])("div",{class:"inner-item",key:e.cname},[Object(c["f"])("div",T,[Object(c["f"])("span",$,Object(c["z"])(e.cname),1),Object(c["f"])("i",null,[Object(c["f"])("small",null,Object(c["z"])(e.post),1)]),Object(c["f"])("span",A,Object(c["z"])(e.time),1)]),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.content,(function(e){return Object(c["q"])(),Object(c["e"])("div",{class:"part",key:e.title},[Object(c["f"])("div",L,Object(c["z"])(e.title),1),Object(c["f"])("ul",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.list,(function(e){return Object(c["q"])(),Object(c["e"])("li",{key:e.text},Object(c["z"])(e.text),1)})),128))])])})),128))])})),128))])])}var W=Object(c["h"])({name:"workExperience",components:{ComIcon:y},setup:function(){var e=Object(c["u"])([{cname:"视野数科",post:"前端开发工程师",time:"2021.8 ~ now",content:[{title:"工作职责",list:[{text:"根据设计，利用 HTML5/CSS3/JavaScript/Vue 等 Web 技术进行产品页面及功能开发"},{text:"参与软件功能设计，开发进度计划的讨论，配合后端工程师按时完成项目"},{text:"就项目开发所遇到的问题，与相关负责人紧密交流并解决"},{text:"不断优化产品的用户体验，提升兼容性、友好性"},{text:"项目自测，梳理流程，配合测试人员修改 Bug"}]}]},{cname:"格瑞德科技",post:"前端开发工程师",time:"2021.1 ~ 2021.8",content:[{title:"前端架构",list:[{text:"项目初期讨论，评估开发周期并指定合理计划"},{text:"配合产品经理，设计和改进用户体验，增强产品兼容性，易用性"},{text:"配合后端工程师梳理业务逻辑，接口联调"},{text:"开发核心功能，review 整体代码，规范代码书写习惯"},{text:"配合测试人员完善项目细节、提交产品审核、使产品顺利上线运行"}]}]}]);return{experienceData:e}}});n("11c3");const H=k()(W,[["render",M],["__scopeId","data-v-b2e65fa0"]]);var N=H,J=function(e){return Object(c["t"])("data-v-220d077a"),e=e(),Object(c["r"])(),e},U={class:"skill"},B={class:"inner-title"},K=J((function(){return Object(c["f"])("span",null,"技能",-1)})),P=J((function(){return Object(c["f"])("hr",null,null,-1)})),Y={class:"skill-content"};function F(e,t,n,r,a,i){var o=Object(c["x"])("com-icon");return Object(c["q"])(),Object(c["e"])("section",U,[Object(c["f"])("div",B,[Object(c["g"])(o,{name:"highlight"}),K]),P,Object(c["f"])("div",Y,[Object(c["f"])("ul",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.skillData,(function(e){return Object(c["q"])(),Object(c["e"])("li",{class:"skill-item",key:e.text},[Object(c["f"])("span",null,Object(c["z"])(e.text),1)])})),128))])])])}var G=Object(c["h"])({name:"skill",components:{ComIcon:y},setup:function(){var e=Object(c["u"])([{text:"能够基于 WebSocket 实现用户线上即时通讯、页面数据自动实时刷新"},{text:"能够使用 vue-amap 高德地图组件实现地图点标记、线标记和矢量图的绘制"},{text:"熟练使用 HTML/HTML5，CSS/CSS3，能够根据设计稿快速搭建页面"},{text:"了解 Canvas、原型链、继承、作用域、闭包原理，掌握常见跨域技巧"},{text:"熟练使用 JavaScript 进行函数式编程、DOM、BOM 操作、Ajax、面向对象方式编程"},{text:"熟练使用 Vue 框架能够使用 Vue-cli、Vuex、Vue-Router，进行组件化开发、模块化开发，对 v-model 有一定理解"},{text:"熟练使用 Git, Webpack， Typescript, Less, MockJs"}]);return{skillData:e}}});n("5532");const X=k()(G,[["render",F],["__scopeId","data-v-220d077a"]]);var Q=X,Z=function(e){return Object(c["t"])("data-v-3a409550"),e=e(),Object(c["r"])(),e},ee={class:"project"},te={class:"inner-title"},ne=Z((function(){return Object(c["f"])("span",null,"项目经验",-1)})),ce=Z((function(){return Object(c["f"])("hr",null,null,-1)})),re={class:"project-content"},ae={class:"content-wrapper"},ie={class:"project-name"},oe=Z((function(){return Object(c["f"])("span",{class:"italic"},"Creator & Owne ",-1)})),ue={class:"time"},se={class:"project-body"},le=Z((function(){return Object(c["f"])("p",null,[Object(c["f"])("span",{class:"project-sub-title"},"项目描述")],-1)})),be={class:"project-desc"},fe=Z((function(){return Object(c["f"])("p",null,[Object(c["f"])("span",{class:"project-sub-title"},"核心技术")],-1)})),je={class:"project-desc"},Oe=Z((function(){return Object(c["f"])("p",null,[Object(c["f"])("span",{class:"project-sub-title"},"项目职责")],-1)}));function de(e,t,n,r,a,i){var o=Object(c["x"])("com-icon");return Object(c["q"])(),Object(c["e"])("section",ee,[Object(c["f"])("div",te,[Object(c["g"])(o,{name:"zhaojingyan"}),ne]),ce,Object(c["f"])("div",re,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.projectData,(function(e){return Object(c["q"])(),Object(c["e"])("div",{class:"project-item",key:e.name},[Object(c["f"])("div",ae,[Object(c["f"])("div",ie,Object(c["z"])(e.name),1),oe,Object(c["f"])("span",ue,Object(c["z"])(e.date),1)]),Object(c["f"])("div",se,[le,Object(c["f"])("p",be,Object(c["z"])(e.describe),1),fe,Object(c["f"])("p",je,Object(c["z"])(e.coreTechnologies),1),Oe,Object(c["f"])("ul",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.DutyList,(function(e){return Object(c["q"])(),Object(c["e"])("li",{key:e.text},Object(c["z"])(e.text),1)})),128))])])])})),128))])])}var pe=Object(c["h"])({name:"project",components:{ComIcon:y},setup:function(){var e=Object(c["u"])([{name:"智能招采平台",date:"2021.11 ~ now",describe:"金采网以建设金融采购绿色生态圈，推动金融采购行业健康发展为己任，以“采购创造价值”为目标，致力于为金融采购工作提供全场景服务。金采网经过十多年的探索与发展，现已成为业内优秀的、具有“专业社区、电子采购、数据资源、集中供应”综合业务体系和服务能力的金融采购行业平台",coreTechnologies:"Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less、D3",DutyList:[{text:"前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线"},{text:"前期准备依据需求，分析代码可复用程度，并开发翻页，统计数等公共组件"},{text:"处理角色权限，依据采购方供应商角色的不同分配不同的权限"},{text:"优化项目结构，对不合理部分进行统筹修改"}]},{name:"股权平台",date:"2021.8 ~ 2021.11",describe:"定位服务于一级市场（股权投资、投行业务及公司信贷），围绕产业/企业/机构/财务/政府数据的集成处理加工挖掘，在深度理解金融机构/政府/企业集团用户对于数据要求的基础上，严格贴合机构客户需求进行数据整理，为客户呈现专业加工后数据",coreTechnologies:"Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less、D3",DutyList:[{text:"分析原项目的需求和功能，阅读项目代码并且和后端沟通前后端接口"},{text:"切换项目框架为 Vue-Cli，重构各功能组件并统一管理接口，最后重构实现方法， 实现用户信息认证、用户状态维护等功能"},{text:"时间进行格式化功能开发，自定义 Vue 的 filter 对时间格式化"},{text:"状态验证功能开发，使用 localStorage 存储后端返回的 token，路由钩子函数验证 token"}]},{name:"北京燃气应急管理救援平台",date:"2021.1 ~ 2021.8",describe:"北京燃气应急指挥管理平台是 web 端+安卓 app 组成的综合指挥管理平台，利用地理信息数据、站箱阀门检测信息、外部资源信息、其它业务相关数据及以过往事故资料、历史数据和维抢修情况等基础资料等，可大幅减少应急反应的时间、增加判断事故原因的准确度、提升应急反应的协作效率、提高维抢修人员的业务素质",coreTechnologies:"Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less",DutyList:[{text:"基于 WebSocket，实现应急救援群组成员之间的即时通讯，处置阶段、监控信息等数据的实时刷新"},{text:"进行前端页面布局，选用 element-ui 等通知、表单、表格、栅格布局等组件"},{text:"使用 vue-cli 配置 Webpack，按需引入，路由懒加载以及路由权限控制"},{text:"数据可视化，使用 Echarts 绘制饼状图、柱状图、折线图，使用 vue-amap 创建中国地图，并在地图上标注应急物资，和人员位置等相关信息"},{text:"请求通过 axios，对不同的请求方式所需要的请求头进行封装，使用 async/await 进行异步流程控制"},{text:"使用 VideoWebCtl 实现 IE 浏览器播放应急抢修现场监控视频"}]}]);return{projectData:e}}});n("edd6");const ve=k()(pe,[["render",de],["__scopeId","data-v-3a409550"]]);var xe=ve,me=function(e){return Object(c["t"])("data-v-93795740"),e=e(),Object(c["r"])(),e},ge={class:"educate"},he={class:"inner-title"},Ie=me((function(){return Object(c["f"])("span",null,"教育经历",-1)})),ke=me((function(){return Object(c["f"])("hr",null,null,-1)})),we=me((function(){return Object(c["f"])("div",{class:"educate-content"},[Object(c["f"])("ul",null,[Object(c["f"])("li",null," 武汉商学院     2018.9 ~ 2020.7     (本科) "),Object(c["f"])("li",null," 武汉铁路职业技术学院     2015.9 ~ 2018.7     (专科) ")])],-1)}));function ye(e,t,n,r,a,i){var o=Object(c["x"])("com-icon");return Object(c["q"])(),Object(c["e"])("section",ge,[Object(c["f"])("div",he,[Object(c["g"])(o,{name:"jiaoyu"}),Ie]),ke,we])}var Ee=Object(c["h"])({name:"educate",components:{ComIcon:y}});n("066a");const Se=k()(Ee,[["render",ye],["__scopeId","data-v-93795740"]]);var ze=Se,Re=Object(c["h"])({name:"Home",components:{ResumeHeader:z,WorkExperience:N,Skill:Q,Educate:ze,Project:xe}});n("7f99");const qe=k()(Re,[["render",a],["__scopeId","data-v-65656207"]]);t["default"]=qe},d784:function(e,t,n){"use strict";n("ac1f");var c=n("e330"),r=n("6eeb"),a=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,b){var f=o(e),j=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),O=j&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!j||!O||n){var d=c(/./[f]),p=t(f,""[e],(function(e,t,n,r,i){var o=c(e),u=t.exec;return u===a||u===l.exec?j&&!i?{done:!0,value:d(t,n,r)}:{done:!0,value:o(n,t,r)}:{done:!1}}));r(String.prototype,e,p[0]),r(l,f,p[1])}b&&u(l[f],"sham",!0)}},d928:function(e,t,n){},e8c5:function(e,t,n){},edd6:function(e,t,n){"use strict";n("2aa9")},f4de:function(e,t,n){"use strict";n("8425")},fce3:function(e,t,n){var c=n("d039"),r=n("da84"),a=r.RegExp;e.exports=c((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-d8b78422.d3bd8507.js.map