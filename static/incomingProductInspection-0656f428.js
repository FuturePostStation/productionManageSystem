var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{T as i}from"./ListTestApi-caf14d3d.js";import{L as s}from"./ListView-b9e6732c.js";import{P as a}from"./PageBase-7e242868.js";import{i as l,f as o,ag as r,A as n}from"./index-039e109b.js";const d=new class extends a{constructor(){super(...arguments),t(this,"api",new i),t(this,"query",{})}render(){return l(s,{api:this.api,query:this.query,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}},addHandler:this.toDetails},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[l(o("el-form-item"),{label:"名称"},{default:()=>[l(o("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[l(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"look")},{default:()=>[n("详情")]}),l(o("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"edit")},{default:()=>[n("入场检验")]})]}toDetails(e,t){r.push({name:"EditProcess",params:{pageType:"inspect",type:t||"add",id:e}})}};export{d as default};
