var e=Object.defineProperty,t=(t,a,s)=>(((t,a,s)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s})(t,"symbol"!=typeof a?a+"":a,s),s);import{S as a}from"./stageProductDeliveryApi-e6b20769.js";import{L as s}from"./ListView-dc400d0d.js";import{P as i}from"./PageBase-a3e7a0c4.js";import{i as r,f as o,ag as l,A as n}from"./index-ab1010d4.js";import"./CommonHander-85829c56.js";import"./Loading-c7a91146.js";import"./MyTable-9b9835b0.js";const m=new class extends i{constructor(){super(...arguments),t(this,"api",new a),t(this,"query",{})}render(){return r(s,{api:this.api,query:this.query,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}},addHandler:this.toDetails},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[r(o("el-form-item"),{label:"名称"},{default:()=>[r(o("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{productName:{label:"生产订单名称"},status:{label:"生产任务状态"},produceOrderId:{label:"生产订单编号"},createTime:{label:"生产任务分配日期",formatter:(e,t,a)=>a&&new Date(a).format("yyyy-MM-dd")}})}tableAction(e){return[r(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.stageDeliveryId,"look")},{default:()=>[n("详情")]}),r(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.stageDeliveryId,"edit")},{default:()=>[n("阶段交付")]})]}toDetails(e,t){l.push({name:"EditProcess",params:{pageType:"delivery",type:t||"add",id:e}})}};export{m as default};
