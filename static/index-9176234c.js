import{d as e,r as t,g as a,a as l,s as n,b as r,u as s,c as o,e as i,f as c,o as u,h as d,i as p,w as f,T as h,j as m,k as v,l as g,K as b,_ as w,m as y,n as _,p as k,F as x,t as C,q as E,v as S,x as V,y as A,E as T,z as I,A as R,B as F,C as P,D as M,G as D,H as z,I as L,J as O,L as q,M as N,N as W,O as j,P as U,Q as $,R as B,S as H,U as X,V as G,W as Y,X as J,Y as Z,Z as K,$ as Q,a0 as ee,a1 as te,a2 as ae,a3 as le,a4 as ne}from"./index-3f548866.js";import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-f0171d5b.js";var se=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(se||{});const oe=e("app",(()=>{const e=t({opened:"closed"!==a(),withoutAnimation:!1}),r=l(1);return{device:r,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t,e.opened?n("opened"):n("closed")},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t,n("closed")},toggleDevice:e=>{r.value=e}}})),ie=!0,ce=!0,ue=!0,de=!0,pe=!0,fe=!0,he=!0,me=!1,ve=!1,ge=e("settings",(()=>({fixedHeader:l(ue),showSettings:l(ie),showTagsView:l(ce),showSidebarLogo:l(de),showNotify:l(pe),showThemeSwitch:l(fe),showScreenfull:l(he),showGreyMode:l(me),showColorWeakness:l(ve)}))),be={class:"app-main"},we=w(r({__name:"AppMain",setup(e){const t=s(),a=o(),l=i((()=>t.path));return(e,t)=>{const n=c("router-view");return u(),d("section",be,[p(n,null,{default:f((({Component:e})=>[p(h,{name:"fade-transform",mode:"out-in"},{default:f((()=>[(u(),m(b,{include:g(a).cachedViews},[(u(),m(v(e),{key:l.value}))],1032,["include"]))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-457797f4"]]);function ye(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var l=e[a];if("*"!==l&&"+"!==l&&"?"!==l)if("\\"!==l)if("{"!==l)if("}"!==l)if(":"!==l)if("("!==l)t.push({type:"CHAR",index:a,value:e[a++]});else{var n=1,r="";if("?"===e[o=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<e.length;)if("\\"!==e[o]){if(")"===e[o]){if(0==--n){o++;break}}else if("("===e[o]&&(n++,"?"!==e[o+1]))throw new TypeError("Capturing groups are not allowed at ".concat(o));r+=e[o++]}else r+=e[o++]+e[o++];if(n)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=o}else{for(var s="",o=a+1;o<e.length;){var i=e.charCodeAt(o);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i))break;s+=e[o++]}if(!s)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:s}),a=o}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),l=t.prefixes,n=void 0===l?"./":l,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),s=[],o=0,i=0,c="",u=function(e){if(i<a.length&&a[i].type===e)return a[i++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var l=a[i],n=l.type,r=l.index;throw new TypeError("Unexpected ".concat(n," at ").concat(r,", expected ").concat(e))},p=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};i<a.length;){var f=u("CHAR"),h=u("NAME"),m=u("PATTERN");if(h||m){var v=f||"";-1===n.indexOf(v)&&(c+=v,v=""),c&&(s.push(c),c=""),s.push({name:h||o++,prefix:v,suffix:"",pattern:m||r,modifier:u("MODIFIER")||""})}else{var g=f||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(s.push(c),c=""),u("OPEN")){v=p();var b=u("NAME")||"",w=u("PATTERN")||"",y=p();d("CLOSE"),s.push({name:b||(w?o++:""),pattern:b&&!w?r:w,prefix:v,suffix:y,modifier:u("MODIFIER")||""})}else d("END")}}return s}function _e(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),l=t.encode,n=void 0===l?function(e){return e}:l,r=t.validate,s=void 0===r||r,o=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",l=0;l<e.length;l++){var r=e[l];if("string"!=typeof r){var i=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===i.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<i.length;d++){var p=n(i[d],r);if(s&&!o[l].test(p))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!c){var f=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(f))}}else{p=n(String(i),r);if(s&&!o[l].test(p))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(p,'"'));a+=r.prefix+p+r.suffix}}else a+=r}return a}}(ye(e,t),t)}const ke={key:0,class:"no-redirect"},xe=["onClick"],Ce=w(r({__name:"index",setup(e){const t=s(),a=y(),n=l([]),r=()=>{n.value=t.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},o=e=>{const{redirect:l,path:n}=e;l?a.push(l):a.push((e=>{const{params:a}=t;return _e(e)(a)})(n))};return _((()=>t.path),(e=>{e.startsWith("/redirect/")||r()})),r(),(e,t)=>{const a=c("el-breadcrumb-item"),l=c("el-breadcrumb");return u(),m(l,{class:"app-breadcrumb"},{default:f((()=>[(u(!0),d(x,null,k(n.value,((e,t)=>(u(),m(a,{key:e.path},{default:f((()=>["noRedirect"===e.redirect||t===n.value.length-1?(u(),d("span",ke,C(e.meta.title),1)):(u(),d("a",{key:1,onClick:E((t=>o(e)),["prevent"])},C(e.meta.title),9,xe))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-cb8d4b92"]]),Ee=w(r({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const a=e,l=()=>{t("toggleClick")};return(e,t)=>{const n=c("el-icon");return u(),d("div",{onClick:l},[p(n,{size:20,class:"icon"},{default:f((()=>[a.isActive?(u(),m(g(S),{key:0})):(u(),m(g(V),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-aa1de3de"]]),Se=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ve=(()=>{if("undefined"==typeof document)return!1;const e=Se[0],t={};for(const a of Se){if((null==a?void 0:a[1])in document){for(const[l,n]of a.entries())t[e[l]]=n;return t}}return!1})(),Ae={change:Ve.fullscreenchange,error:Ve.fullscreenerror};let Te={request:(e=document.documentElement,t)=>new Promise(((a,l)=>{const n=()=>{Te.off("change",n),a()};Te.on("change",n);const r=e[Ve.requestFullscreen](t);r instanceof Promise&&r.then(n).catch(l)})),exit:()=>new Promise(((e,t)=>{if(!Te.isFullscreen)return void e();const a=()=>{Te.off("change",a),e()};Te.on("change",a);const l=document[Ve.exitFullscreen]();l instanceof Promise&&l.then(a).catch(t)})),toggle:(e,t)=>Te.isFullscreen?Te.exit():Te.request(e,t),onchange(e){Te.on("change",e)},onerror(e){Te.on("error",e)},on(e,t){const a=Ae[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=Ae[e];a&&document.removeEventListener(a,t,!1)},raw:Ve};Object.defineProperties(Te,{isFullscreen:{get:()=>Boolean(document[Ve.fullscreenElement])},element:{enumerable:!0,get:()=>document[Ve.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[Ve.fullscreenEnabled])}}),Ve||(Te={isEnabled:!1});const Ie=Te,Re=w(r({__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(e){const t=e,a=l(t.openTips),n=l(!1),r=()=>{const e=document.querySelector(t.element)||void 0;Ie.isEnabled?Ie.toggle(e):T.warning("您的浏览器无法工作")},s=()=>{n.value=Ie.isFullscreen,a.value=Ie.isFullscreen?t.exitTips:t.openTips};return Ie.on("change",s),A((()=>{Ie.isEnabled&&Ie.off("change",s)})),(e,t)=>{const l=c("svg-icon"),s=c("el-tooltip");return u(),d("div",{onClick:r},[p(s,{effect:"dark",content:a.value,placement:"bottom"},{default:f((()=>[p(l,{name:n.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-a4827417"]]),Fe={class:"card-header"},Pe={class:"card-title"},Me={class:"card-time"},De={key:0,class:"card-avatar"},ze=["src"],Le={class:"card-body"},Oe=w(r({__name:"NotifyList",props:{list:{type:Object,required:!0}},setup(e){const t=e;return(e,a)=>{const l=c("el-empty"),n=c("el-tag"),r=c("el-card");return 0===t.list.length?(u(),m(l,{key:0})):(u(!0),d(x,{key:1},k(t.list,((e,t)=>(u(),m(r,{key:t,shadow:"never",class:"card-container"},{header:f((()=>[I("div",Fe,[I("div",null,[I("span",null,[I("span",Pe,C(e.title),1),e.extra?(u(),m(n,{key:0,type:e.status,effect:"plain",size:"small"},{default:f((()=>[R(C(e.extra),1)])),_:2},1032,["type"])):F("",!0)]),I("div",Me,C(e.datetime),1)]),e.avatar?(u(),d("div",De,[I("img",{src:e.avatar,width:"34"},null,8,ze)])):F("",!0)])])),default:f((()=>[I("div",Le,C(e.description??"No Data"),1)])),_:2},1024)))),128))}}}),[["__scopeId","data-v-0091d87c"]]),qe=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"生产管理系统 上线啦",datetime:"半年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"一年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],Ne=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],We=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],je={class:"notify"},Ue={class:"notify-history"},$e=w(r({__name:"index",setup(e){const t=i((()=>{let e=0;for(let t=0;t<n.value.length;t++)e+=n.value[t].list.length;return e})),a=l("通知"),n=l([{name:"通知",type:"primary",list:qe},{name:"消息",type:"danger",list:Ne},{name:"待办",type:"warning",list:We}]),r=()=>{T.success(`跳转到${a.value}历史页面`)};return(e,l)=>{const s=c("el-icon"),o=c("el-tooltip"),i=c("el-badge"),h=c("el-scrollbar"),v=c("el-tab-pane"),b=c("el-tabs"),w=c("el-button"),y=c("el-popover");return u(),d("div",je,[p(y,{placement:"bottom",width:350,trigger:"click"},{reference:f((()=>[p(i,{value:t.value,max:99,hidden:0===t.value},{default:f((()=>[p(o,{effect:"dark",content:"消息通知",placement:"bottom"},{default:f((()=>[p(s,{size:20},{default:f((()=>[p(g(P))])),_:1})])),_:1})])),_:1},8,["value","hidden"])])),default:f((()=>[p(b,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),class:"demo-tabs",stretch:""},{default:f((()=>[(u(!0),d(x,null,k(n.value,((e,t)=>(u(),m(v,{name:e.name,key:t},{label:f((()=>[R(C(e.name)+" ",1),p(i,{value:e.list.length,max:99,type:e.type},null,8,["value","type"])])),default:f((()=>[p(h,{height:"400px"},{default:f((()=>[p(Oe,{list:e.list},null,8,["list"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),I("div",Ue,[p(w,{link:"",onClick:r},{default:f((()=>[R("查看"+C(a.value)+"历史",1)])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-a48e3ea9"]]),Be={class:"navigation-bar"},He={class:"right-menu"},Xe={class:"right-menu-avatar"},Ge=(e=>(z("data-v-1c6417b9"),e=e(),L(),e))((()=>I("span",{style:{display:"block"}},"退出登录",-1))),Ye=w(r({__name:"index",setup(e){const t=y(),a=oe(),l=ge(),n=M(),r=i((()=>a.sidebar)),s=i((()=>l.showNotify)),o=i((()=>l.showThemeSwitch)),h=i((()=>l.showScreenfull)),v=()=>{a.toggleSidebar(!1)},b=()=>{n.logout(),t.push("/login")};return(e,t)=>{const a=c("el-avatar"),l=c("el-dropdown-item"),i=c("el-dropdown-menu"),w=c("el-dropdown");return u(),d("div",Be,[p(Ee,{"is-active":r.value.opened,class:"hamburger",onToggleClick:v},null,8,["is-active"]),p(Ce,{class:"breadcrumb"}),I("div",He,[h.value?(u(),m(Re,{key:0,class:"right-menu-item"})):F("",!0),o.value?(u(),m(re,{key:1,class:"right-menu-item"})):F("",!0),s.value?(u(),m($e,{key:2,class:"right-menu-item"})):F("",!0),p(w,{class:"right-menu-item"},{dropdown:f((()=>[p(i,null,{default:f((()=>[p(l,{divided:"",onClick:b},{default:f((()=>[Ge])),_:1})])),_:1})])),default:f((()=>[I("div",Xe,[p(a,{icon:g(D),size:30},null,8,["icon"]),I("span",null,C(g(n).username),1)])])),_:1})])])}}}),[["__scopeId","data-v-1c6417b9"]]),Je=e=>(z("data-v-db948ced"),e=e(),L(),e),Ze={class:"drawer-container"},Ke=Je((()=>I("h3",{class:"drawer-title"},"系统布局配置",-1))),Qe={class:"drawer-item"},et=Je((()=>I("span",null,"显示标签栏",-1))),tt={class:"drawer-item"},at=Je((()=>I("span",null,"显示侧边栏 Logo",-1))),lt={class:"drawer-item"},nt=Je((()=>I("span",null,"固定 Header",-1))),rt={class:"drawer-item"},st=Je((()=>I("span",null,"显示消息通知",-1))),ot={class:"drawer-item"},it=Je((()=>I("span",null,"显示切换主题按钮",-1))),ct={class:"drawer-item"},ut=Je((()=>I("span",null,"显示全屏按钮",-1))),dt={class:"drawer-item"},pt=Je((()=>I("span",null,"显示灰色模式",-1))),ft={class:"drawer-item"},ht=Je((()=>I("span",null,"显示色弱模式",-1))),mt=w(r({__name:"index",setup(e){const t=ge();return(e,a)=>{const l=c("el-switch");return u(),d("div",Ze,[I("div",null,[Ke,I("div",Qe,[et,p(l,{modelValue:g(t).showTagsView,"onUpdate:modelValue":a[0]||(a[0]=e=>g(t).showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",tt,[at,p(l,{modelValue:g(t).showSidebarLogo,"onUpdate:modelValue":a[1]||(a[1]=e=>g(t).showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",lt,[nt,p(l,{modelValue:g(t).fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=e=>g(t).fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",rt,[st,p(l,{modelValue:g(t).showNotify,"onUpdate:modelValue":a[3]||(a[3]=e=>g(t).showNotify=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",ot,[it,p(l,{modelValue:g(t).showThemeSwitch,"onUpdate:modelValue":a[4]||(a[4]=e=>g(t).showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",ct,[ut,p(l,{modelValue:g(t).showScreenfull,"onUpdate:modelValue":a[5]||(a[5]=e=>g(t).showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",dt,[pt,p(l,{modelValue:g(t).showGreyMode,"onUpdate:modelValue":a[6]||(a[6]=e=>g(t).showGreyMode=e),class:"drawer-switch"},null,8,["modelValue"])]),I("div",ft,[ht,p(l,{modelValue:g(t).showColorWeakness,"onUpdate:modelValue":a[7]||(a[7]=e=>g(t).showColorWeakness=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-db948ced"]]),vt=e=>/^(https?:|mailto:|tel:)/.test(e),gt=["href"],bt=r({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e;return(e,a)=>{const l=c("router-link");return g(vt)(t.to)?(u(),d("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[O(e.$slots,"default")],8,gt)):(u(),m(l,{key:1,to:t.to},{default:f((()=>[O(e.$slots,"default")])),_:3},8,["to"]))}}});function wt(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function yt(e,t){for(var a,l="",n=0,r=-1,s=0,o=0;o<=e.length;++o){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(r===o-1||1===s);else if(r!==o-1&&2===s){if(l.length<2||2!==n||46!==l.charCodeAt(l.length-1)||46!==l.charCodeAt(l.length-2))if(l.length>2){var i=l.lastIndexOf("/");if(i!==l.length-1){-1===i?(l="",n=0):n=(l=l.slice(0,i)).length-1-l.lastIndexOf("/"),r=o,s=0;continue}}else if(2===l.length||1===l.length){l="",n=0,r=o,s=0;continue}t&&(l.length>0?l+="/..":l="..",n=2)}else l.length>0?l+="/"+e.slice(r+1,o):l=e.slice(r+1,o),n=o-r-1;r=o,s=0}else 46===a&&-1!==s?++s:s=-1}return l}var _t={resolve:function(){for(var e,t="",a=!1,l=arguments.length-1;l>=-1&&!a;l--){var n;l>=0?n=arguments[l]:(void 0===e&&(e=process.cwd()),n=e),wt(n),0!==n.length&&(t=n+"/"+t,a=47===n.charCodeAt(0))}return t=yt(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(wt(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=yt(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return wt(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];wt(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":_t.normalize(e)},relative:function(e,t){if(wt(e),wt(t),e===t)return"";if((e=_t.resolve(e))===(t=_t.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var l=e.length,n=l-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var s=t.length-r,o=n<s?n:s,i=-1,c=0;c<=o;++c){if(c===o){if(s>o){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else n>o&&(47===e.charCodeAt(a+c)?i=c:0===c&&(i=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(i=c)}var d="";for(c=a+i+1;c<=l;++c)c!==l&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+i):(r+=i,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(wt(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,l=-1,n=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!n){l=r;break}}else n=!1;return-1===l?a?"/":".":a&&1===l?"//":e.slice(0,l)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');wt(e);var a,l=0,n=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var s=t.length-1,o=-1;for(a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47===i){if(!r){l=a+1;break}}else-1===o&&(r=!1,o=a+1),s>=0&&(i===t.charCodeAt(s)?-1==--s&&(n=a):(s=-1,n=o))}return l===n?n=o:-1===n&&(n=e.length),e.slice(l,n)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){l=a+1;break}}else-1===n&&(r=!1,n=a+1);return-1===n?"":e.slice(l,n)},extname:function(e){wt(e);for(var t=-1,a=0,l=-1,n=!0,r=0,s=e.length-1;s>=0;--s){var o=e.charCodeAt(s);if(47!==o)-1===l&&(n=!1,l=s+1),46===o?-1===t?t=s:1!==r&&(r=1):-1!==t&&(r=-1);else if(!n){a=s+1;break}}return-1===t||-1===l||0===r||1===r&&t===l-1&&t===a+1?"":e.slice(t,l)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,l=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+l:a+e+l:l}("/",e)},parse:function(e){wt(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,l=e.charCodeAt(0),n=47===l;n?(t.root="/",a=1):a=0;for(var r=-1,s=0,o=-1,i=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(l=e.charCodeAt(c)))-1===o&&(i=!1,o=c+1),46===l?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!i){s=c+1;break}return-1===r||-1===o||0===u||1===u&&r===o-1&&r===s+1?-1!==o&&(t.base=t.name=0===s&&n?e.slice(1,o):e.slice(s,o)):(0===s&&n?(t.name=e.slice(1,r),t.base=e.slice(1,o)):(t.name=e.slice(s,r),t.base=e.slice(s,o)),t.ext=e.slice(r,o)),s>0?t.dir=e.slice(0,s-1):n&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};_t.posix=_t;const kt=q(_t),xt={key:2},Ct=w(r({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=i((()=>t.item.meta&&t.item.meta.alwaysShow)),l=i((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),n=i((()=>{if(l.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),r=e=>vt(e)?e:vt(t.basePath)?t.basePath:kt.resolve(t.basePath,e);return(e,l)=>{var s;const o=c("svg-icon"),i=c("el-menu-item"),h=c("sidebar-item",!0),g=c("el-sub-menu");return(null==(s=t.item.meta)?void 0:s.hidden)?F("",!0):(u(),d("div",{key:0,class:W({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[a.value||!n.value||n.value.children?(u(),m(g,{key:1,index:r(t.item.path),teleported:""},{title:f((()=>[t.item.meta&&t.item.meta.svgIcon?(u(),m(o,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):t.item.meta&&t.item.meta.elIcon?(u(),m(v(t.item.meta.elIcon),{key:1,class:"el-icon"})):F("",!0),t.item.meta&&t.item.meta.title?(u(),d("span",xt,C(t.item.meta.title),1)):F("",!0)])),default:f((()=>[t.item.children?(u(!0),d(x,{key:0},k(t.item.children,(e=>(u(),m(h,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":r(e.path)},null,8,["item","is-collapse","base-path"])))),128)):F("",!0)])),_:1},8,["index"])):(u(),d(x,{key:0},[n.value.meta?(u(),m(bt,{key:0,to:r(n.value.path)},{default:f((()=>[p(i,{index:r(n.value.path)},N({default:f((()=>[n.value.meta.svgIcon?(u(),m(o,{key:0,name:n.value.meta.svgIcon},null,8,["name"])):n.value.meta.elIcon?(u(),m(v(n.value.meta.elIcon),{key:1,class:"el-icon"})):F("",!0)])),_:2},[n.value.meta.title?{name:"title",fn:f((()=>[R(C(n.value.meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):F("",!0)],64))],2))}}}),[["__scopeId","data-v-6109014b"]]),Et="/v3-admin-vite/static/logo-cc70e06e.png",St=e=>(z("data-v-937b785b"),e=e(),L(),e),Vt=St((()=>I("img",{src:Et,class:"sidebar-logo"},null,-1))),At=St((()=>I("img",{src:Et,class:"sidebar-logo-text"},null,-1))),Tt=w(r({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const l=c("router-link");return u(),d("div",{class:W(["sidebar-logo-container",{collapse:t.collapse}])},[p(h,{name:"sidebar-logo-fade"},{default:f((()=>[t.collapse?(u(),m(l,{key:"collapse",to:"/"},{default:f((()=>[Vt])),_:1})):(u(),m(l,{key:"expand",to:"/"},{default:f((()=>[At])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-937b785b"]]),It=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},Rt=w(r({__name:"index",setup(e){const t=It("--v3-sidebar-menu-bg-color"),a=It("--v3-sidebar-menu-text-color"),l=It("--v3-sidebar-menu-active-text-color"),n=s(),r=oe(),o=j(),h=ge(),{showSidebarLogo:v}=U(h),b=i((()=>{const{meta:e,path:t}=n;return(null==e?void 0:e.activeMenu)?e.activeMenu:t})),w=i((()=>!r.sidebar.opened));return(e,n)=>{const r=c("el-menu"),s=c("el-scrollbar");return u(),d("div",{class:W({"has-logo":g(v)})},[g(v)?(u(),m(Tt,{key:0,collapse:w.value},null,8,["collapse"])):F("",!0),p(s,{"wrap-class":"scrollbar-wrapper"},{default:f((()=>[p(r,{"default-active":b.value,collapse:w.value,"background-color":g(t),"text-color":g(a),"active-text-color":g(l),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:f((()=>[(u(!0),d(x,null,k(g(o).routes,(e=>(u(),m(Ct,{key:e.path,item:e,"base-path":e.path,"is-collapse":w.value},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-30025b32"]]),Ft={class:"scroll-container"},Pt=w(r({__name:"ScrollPane",props:{tagRefs:{type:Object,required:!0}},setup(e){const t=e,a=s(),n=ge(),r=l(),o=l();let h=0;const v=({scrollLeft:e})=>{h=e},b=({deltaY:e})=>{/^-/.test(e.toString())?y("left"):y("right")},w=()=>{const e=o.value.clientWidth,t=r.value.wrapRef.clientWidth;return{scrollbarContentRefWidth:e,scrollbarRefWidth:t,lastDistance:e-t-h}},y=(e,t=200)=>{let a=0;const{scrollbarContentRefWidth:l,scrollbarRefWidth:n,lastDistance:s}=w();n>l||(a="left"===e?Math.max(0,h-t):Math.min(h+t,h+s),r.value.setScrollLeft(a))},k=()=>{const e=t.tagRefs;for(let t=0;t<e.length;t++)if(a.path===e[t].$props.to.path){const a=e[t].$el,l=a.offsetWidth,n=a.offsetLeft,{scrollbarRefWidth:r}=w();if(n<h){return void y("left",h-n)}const s=r+h-l;if(n>s){return void y("right",n-s)}}};_(a,(()=>{$(k)}),{deep:!0});const x=i((()=>n.showScreenfull));return(e,t)=>{const a=c("el-icon");return u(),d("div",Ft,[p(a,{class:"arrow left",onClick:t[0]||(t[0]=e=>y("left"))},{default:f((()=>[p(g(B))])),_:1}),p(g(H),{ref_key:"scrollbarRef",ref:r,onWheel:E(b,["prevent"]),onScroll:v},{default:f((()=>[I("div",{ref_key:"scrollbarContentRef",ref:o,class:"scrollbar-content"},[O(e.$slots,"default",{},void 0,!0)],512)])),_:3},8,["onWheel"]),p(a,{class:"arrow right",onClick:t[1]||(t[1]=e=>y("right"))},{default:f((()=>[p(g(X))])),_:1}),x.value?(u(),m(Re,{key:0,element:".app-main","open-tips":"内容区全屏",class:"screenfull"})):F("",!0)])}}}),[["__scopeId","data-v-d9543c1e"]]),Mt={class:"tags-view-container"},Dt=w(r({__name:"index",setup(e){const t=G(),a=y(),n=s(),r=o(),i=j(),h=l([]),v=l(!1),b=l(0),w=l(0),S=l({});let V=[];const A=e=>e.path===n.path,T=e=>{var t;return null==(t=e.meta)?void 0:t.affix},P=(e,t="/")=>{let a=[];return e.forEach((e=>{var l;if(null==(l=e.meta)?void 0:l.affix){const l=kt.resolve(t,e.path);a.push({fullPath:l,path:l,name:e.name,meta:{...e.meta}})}if(e.children){const t=P(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},M=()=>{n.name&&(r.addVisitedView(n),r.addCachedView(n))},D=e=>{r.delVisitedView(e),r.delCachedView(e),A(e)&&L(r.visitedViews,e)},z=()=>{S.value.fullPath!==n.path&&void 0!==S.value.fullPath&&a.push(S.value.fullPath),r.delOthersVisitedViews(S.value),r.delOthersCachedViews(S.value)},L=(e,t)=>{const l=e.slice(-1)[0];void 0!==l&&void 0!==l.fullPath?a.push(l.fullPath):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},O=()=>{v.value=!1};return _(n,(()=>{M()}),{deep:!0}),_(v,(e=>{e?document.body.addEventListener("click",O):document.body.removeEventListener("click",O)})),Y((()=>{(()=>{V=P(i.routes);for(const e of V)e.name&&r.addVisitedView(e)})(),M()})),(e,l)=>{const s=c("el-icon");return u(),d("div",Mt,[p(Pt,{class:"tags-view-wrapper","tag-refs":h.value},{default:f((()=>[(u(!0),d(x,null,k(g(r).visitedViews,(e=>(u(),m(g(Q),{ref_for:!0,ref_key:"tagRefs",ref:h,key:e.path,class:W([A(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:E((t=>T(e)?"":D(e)),["middle"]),onContextmenu:E((a=>((e,a)=>{const l=t.proxy.$el.getBoundingClientRect().left,n=t.proxy.$el.offsetWidth-105,r=a.clientX-l+15;w.value=r>n?n:r,b.value=a.clientY,v.value=!0,S.value=e})(e,a)),["prevent"])},{default:f((()=>{var t;return[R(C(null==(t=e.meta)?void 0:t.title)+" ",1),T(e)?F("",!0):(u(),m(s,{key:0,size:12,onClick:E((t=>D(e)),["prevent","stop"])},{default:f((()=>[p(g(ee))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1},8,["tag-refs"]),J(I("ul",{style:K({left:w.value+"px",top:b.value+"px"}),class:"contextmenu"},[I("li",{onClick:l[0]||(l[0]=e=>{return t=S.value,r.delCachedView(t),void a.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),T(S.value)?F("",!0):(u(),d("li",{key:0,onClick:l[1]||(l[1]=e=>D(S.value))},"关闭")),I("li",{onClick:z},"关闭其它"),I("li",{onClick:l[2]||(l[2]=e=>{return t=S.value,r.delAllVisitedViews(),r.delAllCachedViews(),void(V.some((e=>e.path===n.path))||L(r.visitedViews,t));var t})},"关闭所有")],4),[[Z,v.value]])])}}}),[["__scopeId","data-v-d9d4ea1a"]]),zt=w(r({__name:"index",props:{buttonTop:{type:Number,default:350}},setup(e){const t=e;te((e=>({"2cb491c7":a})));const a=t.buttonTop+"px",n=l(!1);return(e,t)=>{const a=c("el-icon"),l=c("el-drawer");return u(),d(x,null,[I("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>n.value=!0)},[p(a,{size:24},{default:f((()=>[p(g(ae))])),_:1})]),p(l,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),size:"300px","with-header":!1},{default:f((()=>[O(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-b2bb74ae"]]),Lt=w(r({__name:"index",setup(e){const t=oe(),a=ge();(()=>{const e=s(),t=oe(),a=()=>document.body.getBoundingClientRect().width-1<992,l=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?se.Mobile:se.Desktop),e&&t.closeSidebar(!0)}};_((()=>e.name),(()=>{t.device===se.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),le((()=>{window.addEventListener("resize",l)})),Y((()=>{a()&&(t.toggleDevice(se.Mobile),t.closeSidebar(!0))})),ne((()=>{window.removeEventListener("resize",l)}))})();const l=i((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===se.Mobile,showGreyMode:c.value,showColorWeakness:h.value}))),n=i((()=>a.showSettings)),r=i((()=>a.showTagsView)),o=i((()=>a.fixedHeader)),c=i((()=>a.showGreyMode)),h=i((()=>a.showColorWeakness)),v=()=>{t.closeSidebar(!1)};return(e,t)=>(u(),d("div",{class:W([l.value,"app-wrapper"])},[l.value.mobile&&l.value.openSidebar?(u(),d("div",{key:0,class:"drawer-bg",onClick:v})):F("",!0),p(g(Rt),{class:"sidebar-container"}),I("div",{class:W([{hasTagsView:r.value},"main-container"])},[I("div",{class:W({"fixed-header":o.value})},[p(g(Ye)),J(p(g(Dt),null,null,512),[[Z,r.value]])],2),p(g(we)),n.value?(u(),m(g(zt),{key:0},{default:f((()=>[p(g(mt))])),_:1})):F("",!0)],2)],2))}}),[["__scopeId","data-v-a6c081f9"]]);export{Lt as default};
