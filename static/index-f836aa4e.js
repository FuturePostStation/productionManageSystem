var e=Object.defineProperty,a=(a,s,t)=>(((a,s,t)=>{s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t})(a,"symbol"!=typeof s?s+"":s,t),t);import{T as s}from"./ListTestApi-caf14d3d.js";import{L as t}from"./ListView-b9e6732c.js";import{P as i}from"./PageBase-7e242868.js";import{T as l}from"./TestDialog-95b81b3e.js";import{i as r,f as o,ag as n}from"./index-039e109b.js";import"./DialogBase-c490b747.js";const d=new class extends i{constructor(){super(...arguments),a(this,"api",new s),a(this,"query",{})}render(){return r(t,{api:this.api,query:this.query,addHandler:this.addHandler,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"120"}}},{searchItems:this.searchItems})}searchItems(){return[r(o("el-form-item"),{label:"名称"},{default:()=>[r(o("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}addHandler(){n.push({name:"AddMenu"})}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}};export{d as default};