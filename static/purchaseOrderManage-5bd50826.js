var e=Object.defineProperty,t=(t,i,a)=>(((t,i,a)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a})(t,"symbol"!=typeof i?i+"":i,a),a);import{T as i,L as a}from"./ListView-2144309b.js";import{P as l}from"./PageBase-a6b38f4c.js";import{T as s}from"./TestDialog-f5103e0e.js";import{i as o,f as r,A as n}from"./index-3f548866.js";const m=new class extends l{constructor(){super(...arguments),t(this,"api",new i),t(this,"query",{})}render(){return o(a,{api:this.api,query:this.query,dialogConfig:{editDialog:s},tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[o(r("el-form-item"),{label:"名称"},{default:()=>[o(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[o(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("详情")]}),o(r("el-button"),{type:"primary",link:!0,onClick:()=>this.make(e.row.id)},{default:()=>[n("制作")]})]}details(e){}make(e){}};export{m as default};
