var e=Object.defineProperty,s=(s,t,i)=>(((s,t,i)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i})(s,"symbol"!=typeof t?t+"":t,i),i);import{T as t}from"./ListTestApi-caf14d3d.js";import{L as i}from"./ListView-b9e6732c.js";import{P as a}from"./PageBase-7e242868.js";import{T as l}from"./TestDialog-95b81b3e.js";import{i as o,f as r}from"./index-039e109b.js";import"./DialogBase-c490b747.js";const n=new class extends a{constructor(){super(...arguments),s(this,"api",new t),s(this,"query",{})}render(){return o(i,{api:this.api,query:this.query,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,notEdit:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems})}searchItems(){return[o(r("el-form-item"),{label:"名称"},{default:()=>[o(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}};export{n as default};
