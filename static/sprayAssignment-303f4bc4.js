var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{C as i}from"./CommonApi-c58d4529.js";import{L as s}from"./ListView-50a1a7d2.js";import{P as o}from"./PageBase-d1889d10.js";import{T as a}from"./TestDialog-f09d651b.js";import{i as l,f as r,A as n}from"./index-4a918107.js";import"./Loading-80bc43c3.js";import"./tools-8b80f190.js";import"./MyTable-7d66d367.js";import"./DialogBase-d81186be.js";class m extends i{constructor(){super("/api/produce/v1/produceSpraying")}}const u=new class extends o{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return l(s,{api:this.api,query:this.query,dialogConfig:{editDialog:a},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[l(r("el-form-item"),{label:"名称"},{default:()=>[l(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[l(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("详情")]}),l(r("el-button"),{type:"primary",link:!0,onClick:()=>this.taskAllocation(e.row.id)},{default:()=>[n("任务分配")]})]}details(e){}taskAllocation(e){}};export{u as default};
