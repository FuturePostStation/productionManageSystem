var e=Object.defineProperty,t=(t,o,s)=>(((t,o,s)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s})(t,"symbol"!=typeof o?o+"":o,s),s);import{C as o}from"./CommonApi-d58a699d.js";import{L as s}from"./ListView-ea4c6184.js";import{P as a}from"./PageBase-cad0b337.js";import{T as i}from"./TestDialog-e1efe35f.js";import{i as r,f as l,A as n}from"./index-1707257e.js";import"./Loading-f1511a07.js";import"./tools-8b80f190.js";import"./MyTable-cdd90293.js";import"./DialogBase-d2e12bbf.js";class m extends o{constructor(){super("/api/godown/v1/godownComponentWarehousing")}}const u=new class extends a{constructor(){super(...arguments),t(this,"api",new m),t(this,"query",{})}render(){return r(s,{api:this.api,query:this.query,dialogConfig:{editDialog:i},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[r(l("el-form-item"),{label:"名称"},{default:()=>[r(l("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{componentWarehousingNumber:{label:"入库单号"},estimatedCost:{label:"金额(元)"},warehousingTime:{label:"入库日期",formatter:(e,t,o)=>o&&new Date(o).format("yyyy-MM-dd")},componentName:{label:"入库部件"},depositor:{label:"入库人"},warehousionRemarks:{label:"备注"}})}tableAction(e){return[r(l("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("查看")]})]}details(e){}};export{u as default};
