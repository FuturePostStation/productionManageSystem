var e=Object.defineProperty,t=(t,a,r)=>(((t,a,r)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r})(t,"symbol"!=typeof a?a+"":a,r),r);import{C as a,P as r}from"./PageBase-a3e7a0c4.js";import{L as s}from"./ListView-dc400d0d.js";import{T as o}from"./TestDialog-59c9d980.js";import{i,f as l,A as n}from"./index-ab1010d4.js";import"./CommonHander-85829c56.js";import"./Loading-c7a91146.js";import"./MyTable-9b9835b0.js";import"./DialogBase-b00ba37f.js";class m extends a{constructor(){super("/api/produce/v1/produceSpraying")}}const u=new class extends r{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return i(s,{api:this.api,query:this.query,dialogConfig:{editDialog:o},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[i(l("el-form-item"),{label:"名称"},{default:()=>[i(l("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{processName:{label:"生产订单名称"},status:{label:"生产任务状态"},produceOrderId:{label:"生产订单编号"},createTime:{label:"生产任务分配日期",formatter:(e,t,a)=>a&&new Date(a).format("yyyy-MM-dd")}})}tableAction(e){return[i(l("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.produceOrderId)},{default:()=>[n("详情")]}),i(l("el-button"),{type:"primary",link:!0,onClick:()=>this.taskAllocation(e.row.produceOrderId)},{default:()=>[n("任务分配")]})]}details(e){}taskAllocation(e){}};export{u as default};
