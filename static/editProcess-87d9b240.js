var e=Object.defineProperty,t=(t,a,i)=>(((t,a,i)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i})(t,"symbol"!=typeof a?a+"":a,i),i);import{I as a}from"./incomingProductInspectionApi-3933de74.js";import{P as i}from"./prodProgressAuditApi-058587d9.js";import{P as s}from"./prodProgressReportingApi-9a9f151c.js";import{S as r}from"./stageProductDeliveryApi-e6b20769.js";import{P as l}from"./PageBase-a3e7a0c4.js";import{u as o,i as d,f as p,A as n,ag as h}from"./index-ab1010d4.js";const u=new class extends l{constructor(){super(...arguments),t(this,"reportApi",new s),t(this,"auditApi",new i),t(this,"deliveryApi",new r),t(this,"inspectApi",new a),t(this,"pageType","report"),t(this,"actType","add"),t(this,"id",""),t(this,"ruleForm",{}),t(this,"tableData",[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])}created(){const e=o();this.pageType=e.params.pageType||"order",this.actType=e.params.type||"add",this.id=e.params.id||"",this.id&&this.init()}async init(){try{"report"==this.pageType?this.ruleForm=await this.reportApi.details(this.id):"audit"==this.pageType?this.ruleForm=await this.auditApi.details(this.id):"delivery"==this.pageType?this.ruleForm=await this.deliveryApi.details(this.id):"inspect"==this.pageType&&(this.ruleForm=await this.inspectApi.details(this.id))}catch(e){}}get columns(){let e={};return"audit"==this.pageType||"report"==this.pageType?(e={name:{label:"生产订单名称"},date:{label:"累计完成数量"},address:{label:"当日完成数量",formatter:(e,t,a)=>this.isLook?a:d(p("el-input-number"),{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t,step:1,"step-strictly":!0,min:0},null)}},"report"==this.pageType&&(e.fil23={label:"提交状态"})):(e={name:{label:"生产订单名称"},fieldName2:{label:"订单交付数量"},date:{label:"累计交付数量"},address:{label:"本次交付数量",formatter:(e,t,a)=>this.isLook?a:d(p("el-input-number"),{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t,step:1,"step-strictly":!0,min:0},null)}},"delivery"==this.pageType&&(e.field2={label:"提交状态"})),e}get isLook(){return"look"==this.actType}get isOperational(){return"audit"==this.pageType||"inspect"==this.pageType}render(){return d("div",{class:"app-container"},[d("div",{class:"zh-form-page"},[d("div",{class:"zh-page-head"},[d("div",{class:"zh-page-head_left"},[d("span",null,[n("生产进度")])]),d("div",{class:"zh-page-head_right"},[d(p("el-button"),{type:"default",onClick:()=>h.back()},{default:()=>[n("取消")]})])]),d(p("el-table"),{data:this.tableData,border:!0,"row-key":"id"},{default:()=>[Object.keys(this.columns).map((e=>{const t=this.columns[e];return d(p("el-table-column"),{prop:e,label:t.label,width:t.width,formatter:t.formatter},null)})),this.isOperational&&d(p("el-table-column"),{label:"操作",width:"120"},{default:this.actionSlot})]})])])}actionSlot(e){return[d(p("el-button"),{type:"default",onClick:()=>this.audit(e.row.id)},{default:()=>[n("审核")]})]}audit(e){}};export{u as default};