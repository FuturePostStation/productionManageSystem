var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{C as i,L as s}from"./ListView-ff6a0dcf.js";import{P as a}from"./PageBase-6a283273.js";import{T as l}from"./TestDialog-2261635c.js";import{i as o,f as r,A as n}from"./index-f1aaa364.js";import"./MyTable-1b942cb2.js";import"./DialogBase-015b6d76.js";class u extends i{constructor(){super("/api/produce/v1/processFlow")}}const m=new class extends a{constructor(){super(...arguments),t(this,"api",new u),t(this,"query",{})}render(){return o(s,{api:this.api,query:this.query,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[o(r("el-form-item"),{label:"名称"},{default:()=>[o(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[o(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("详情")]}),o(r("el-button"),{type:"primary",link:!0,onClick:()=>this.taskAllocation(e.row.id)},{default:()=>[n("任务分配")]})]}details(e){}taskAllocation(e){}};export{m as default};