var e=Object.defineProperty,t=(t,r,a)=>(((t,r,a)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a})(t,"symbol"!=typeof r?r+"":r,a),a);import{P as r}from"./prodOrderMaintenanceApi-5af0aafc.js";import{L as a}from"./ListView-dc400d0d.js";import{P as i}from"./PageBase-a3e7a0c4.js";import{i as s,f as d,ag as o,A as l}from"./index-ab1010d4.js";import"./CommonHander-85829c56.js";import"./Loading-c7a91146.js";import"./MyTable-9b9835b0.js";const n=new class extends i{constructor(){super(...arguments),t(this,"api",new r),t(this,"query",{})}render(){return s(a,{api:this.api,query:this.query,addHandler:this.addOrEdit,editHandler:this.addOrEdit,tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[s(d("el-form-item"),{label:"名称"},{default:()=>[s(d("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{productName:{label:"生产订单名称"},status:{label:"生产订单状态"},produceOrderNumber:{label:"生产订单编号"},deliveryTime:{label:"交付日期",formatter:(e,t,r)=>r&&new Date(r).format("yyyy-MM-dd")},produceCreateTime:{label:"生产订单创建日期",formatter:(e,t,r)=>r&&new Date(r).format("yyyy-MM-dd")}})}tableAction(e){return[s(d("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.produceOrderId)},{default:()=>[l("详情")]})]}details(e){o.push({name:"ProdOrderEdit",params:{type:"look",id:e}})}addOrEdit(e){const t={type:e?"edit":"add"};e&&(t.id=e.produceOrderId),o.push({name:"ProdOrderEdit",params:t})}};export{n as default};
