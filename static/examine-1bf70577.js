var e=Object.defineProperty,s=(s,t,a)=>(((s,t,a)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a})(s,"symbol"!=typeof t?t+"":t,a),a);import{T as t,L as a}from"./ListView-2144309b.js";import{P as i}from"./PageBase-a6b38f4c.js";import{T as l}from"./TestDialog-f5103e0e.js";import{i as r,f as o}from"./index-3f548866.js";const n=new class extends i{constructor(){super(...arguments),s(this,"api",new t),s(this,"query",{})}render(){return r(a,{api:this.api,query:this.query,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"120"}}},{searchItems:this.searchItems})}searchItems(){return[r(o("el-form-item"),{label:"名称"},{default:()=>[r(o("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}};export{n as default};
