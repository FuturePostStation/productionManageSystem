var e=Object.defineProperty,a=(a,s,t)=>(((a,s,t)=>{s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t})(a,"symbol"!=typeof s?s+"":s,t),t);import{T as s,L as t}from"./ListView-bee62c98.js";import{P as i}from"./PageBase-e865a2fc.js";import{T as l}from"./TestDialog-9e4c2611.js";import{i as r,f as n,af as o}from"./index-85eca7de.js";const d=new class extends i{constructor(){super(...arguments),a(this,"api",new s),a(this,"query",{})}render(){return r(t,{api:this.api,query:this.query,addHandler:this.addHandler,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"120"}}},{searchItems:this.searchItems})}searchItems(){return[r(n("el-form-item"),{label:"名称"},{default:()=>[r(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}addHandler(){o.push({name:"AddMenu"})}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}};export{d as default};