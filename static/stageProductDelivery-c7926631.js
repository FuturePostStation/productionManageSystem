var e=Object.defineProperty,t=(t,a,s)=>(((t,a,s)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s})(t,"symbol"!=typeof a?a+"":a,s),s);import{C as a}from"./CommonApi-d58a699d.js";import{L as s}from"./ListView-ea4c6184.js";import{P as r}from"./PageBase-cad0b337.js";import{i,f as o,ag as l,A as n}from"./index-1707257e.js";import"./Loading-f1511a07.js";import"./tools-8b80f190.js";import"./MyTable-cdd90293.js";class m extends a{constructor(){super("/api/produce/v1/produceStageDelivery")}}const d=new class extends r{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return i(s,{api:this.api,query:this.query,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}},addHandler:this.toDetails},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[i(o("el-form-item"),{label:"名称"},{default:()=>[i(o("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{productName:{label:"生产订单名称"},status:{label:"生产任务状态"},produceOrderId:{label:"生产订单编号"},createTime:{label:"生产任务分配日期",formatter:(e,t,a)=>a&&new Date(a).format("yyyy-MM-dd")}})}tableAction(e){return[i(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.stageDeliveryId,"look")},{default:()=>[n("详情")]}),i(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.stageDeliveryId,"edit")},{default:()=>[n("阶段交付")]})]}toDetails(e,t){l.push({name:"EditProcess",params:{pageType:"delivery",type:t||"add",id:e}})}};export{d as default};