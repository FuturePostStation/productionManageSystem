var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{T as i}from"./ListTestApi-caf14d3d.js";import{L as s}from"./ListView-b9e6732c.js";import{P as a}from"./PageBase-7e242868.js";import{T as o}from"./TestDialog-95b81b3e.js";import{i as l,f as r,A as n}from"./index-039e109b.js";import"./DialogBase-c490b747.js";const u=new class extends a{constructor(){super(...arguments),t(this,"api",new i),t(this,"query",{})}render(){return l(s,{api:this.api,query:this.query,dialogConfig:{editDialog:o},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[l(r("el-form-item"),{label:"名称"},{default:()=>[l(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[l(r("el-button"),{type:"primary",link:!0,onClick:()=>this.outbound(e.row.id)},{default:()=>[n("出库")]})]}outbound(e){}};export{u as default};