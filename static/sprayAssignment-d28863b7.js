var e=Object.defineProperty,t=(t,o,r)=>(((t,o,r)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r})(t,"symbol"!=typeof o?o+"":o,r),r);import{C as o}from"./CommonApi-d58a699d.js";import{L as r}from"./ListView-ea4c6184.js";import{P as s}from"./PageBase-cad0b337.js";import{T as a}from"./TestDialog-e1efe35f.js";import{i,f as l,A as n}from"./index-1707257e.js";import"./Loading-f1511a07.js";import"./tools-8b80f190.js";import"./MyTable-cdd90293.js";import"./DialogBase-d2e12bbf.js";class m extends o{constructor(){super("/api/produce/v1/produceSpraying")}}const u=new class extends s{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return i(r,{api:this.api,query:this.query,dialogConfig:{editDialog:a},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[i(l("el-form-item"),{label:"名称"},{default:()=>[i(l("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{processName:{label:"生产订单名称"},status:{label:"生产任务状态"},produceOrderId:{label:"生产订单编号"},createTime:{label:"生产任务分配日期",formatter:(e,t,o)=>o&&new Date(o).format("yyyy-MM-dd")}})}tableAction(e){return[i(l("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.produceOrderId)},{default:()=>[n("详情")]}),i(l("el-button"),{type:"primary",link:!0,onClick:()=>this.taskAllocation(e.row.produceOrderId)},{default:()=>[n("任务分配")]})]}details(e){}taskAllocation(e){}};export{u as default};