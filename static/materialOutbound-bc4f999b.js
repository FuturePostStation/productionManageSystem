var e=Object.defineProperty,l=(l,t,a)=>(((l,t,a)=>{t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a})(l,"symbol"!=typeof t?t+"":t,a),a);import{C as t,L as a}from"./ListView-e4c5db64.js";import{P as i}from"./PageBase-c459ce80.js";import{S as s}from"./SelectDict-00378f96.js";import{T as o}from"./TestDialog-46ba1a47.js";import{i as r,f as n,A as u}from"./index-dce0ed3b.js";import"./DialogBase-77d27f50.js";class m extends t{constructor(){super("/api/godown/v1/godownMaterialDelivery")}}const d=new class extends i{constructor(){super(...arguments),l(this,"api",new m),l(this,"query",{})}render(){return r(a,{api:this.api,query:this.query,dialogConfig:{editDialog:o},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[r(n("el-form-item"),{label:"物料名称"},{default:()=>[r(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]}),r(n("el-form-item"),{label:"供应商"},{default:()=>[r(s,{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e,dictCode:"123"},null)]}),r(n("el-form-item"),{label:"入库单号"},{default:()=>[r(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]}),r(n("el-form-item"),{label:"状态"},{default:()=>[r(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[r(n("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[u("查看")]})]}details(e){}};export{d as default};
