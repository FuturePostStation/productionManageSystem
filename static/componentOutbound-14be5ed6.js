var e=Object.defineProperty,t=(t,s,i)=>(((t,s,i)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i})(t,"symbol"!=typeof s?s+"":s,i),i);import{C as s,L as i}from"./ListView-e4c5db64.js";import{P as a}from"./PageBase-c459ce80.js";import{T as l}from"./TestDialog-46ba1a47.js";import{i as o,f as r,A as n}from"./index-dce0ed3b.js";import"./DialogBase-77d27f50.js";class m extends s{constructor(){super("/api/godown/v1/godownComponentDelivery")}}const u=new class extends a{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return o(i,{api:this.api,query:this.query,dialogConfig:{editDialog:l},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[o(r("el-form-item"),{label:"名称"},{default:()=>[o(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识",formatter:()=>1},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[o(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("查看")]})]}details(e){}};export{u as default};
