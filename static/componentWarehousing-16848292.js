var e=Object.defineProperty,t=(t,s,a)=>(((t,s,a)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a})(t,"symbol"!=typeof s?s+"":s,a),a);import{C as s,L as a}from"./ListView-ff6a0dcf.js";import{P as i}from"./PageBase-6a283273.js";import{T as o}from"./TestDialog-2261635c.js";import{i as l,f as r,A as n}from"./index-f1aaa364.js";import"./MyTable-1b942cb2.js";import"./DialogBase-015b6d76.js";class m extends s{constructor(){super("/api/godown/v1/godownComponentWarehousing")}}const u=new class extends i{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return l(a,{api:this.api,query:this.query,dialogConfig:{editDialog:o},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[l(r("el-form-item"),{label:"名称"},{default:()=>[l(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识",formatter:()=>1},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[l(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("查看")]})]}details(e){}};export{u as default};
