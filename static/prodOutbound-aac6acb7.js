var e=Object.defineProperty,t=(t,o,r)=>(((t,o,r)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r})(t,"symbol"!=typeof o?o+"":o,r),r);import{C as o}from"./CommonApi-d58a699d.js";import{L as r}from"./ListView-ea4c6184.js";import{P as s}from"./PageBase-cad0b337.js";import{T as i}from"./TestDialog-e1efe35f.js";import{i as a,f as l,A as n}from"./index-1707257e.js";import"./Loading-f1511a07.js";import"./tools-8b80f190.js";import"./MyTable-cdd90293.js";import"./DialogBase-d2e12bbf.js";class u extends o{constructor(){super("/api/godown/v1/godownProductDelivery")}}const m=new class extends s{constructor(){super(...arguments),t(this,"api",new u),t(this,"query",{})}render(){return a(r,{api:this.api,query:this.query,dialogConfig:{editDialog:i},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[a(l("el-form-item"),{label:"名称"},{default:()=>[a(l("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{deliveryNumber:{label:"出库单号"},recipient:{label:"领用人"},productDeliveryTime:{label:"出库日期",formatter:(e,t,o)=>o&&new Date(o).format("yyyy-MM-dd")},outboundProduct:{label:"出库产品"},outboundPerson:{label:"出库人"},outboundRemarks:{label:"备注"}})}tableAction(e){return[a(l("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.productDeliveryId)},{default:()=>[n("查看")]})]}details(e){}};export{m as default};
