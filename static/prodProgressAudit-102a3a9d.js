var e=Object.defineProperty,t=(t,r,s)=>(((t,r,s)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s})(t,"symbol"!=typeof r?r+"":r,s),s);import{C as r}from"./CommonApi-d58a699d.js";import{L as s}from"./ListView-ea4c6184.js";import{P as a}from"./PageBase-cad0b337.js";import{i as o,f as i,ag as l,A as n}from"./index-1707257e.js";import"./Loading-f1511a07.js";import"./tools-8b80f190.js";import"./MyTable-cdd90293.js";class d extends r{constructor(){super("/api/produce/v1/produceProgressAudit")}}const u=new class extends a{constructor(){super(...arguments),t(this,"api",new d),t(this,"query",{})}render(){return o(s,{api:this.api,query:this.query,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}},addHandler:this.toDetails},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[o(i("el-form-item"),{label:"名称"},{default:()=>[o(i("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{productName:{label:"生产订单名称"},status:{label:"生产任务状态"},produceOrderId:{label:"生产订单编号"},createTime:{label:"生产任务分配日期",formatter:(e,t,r)=>r&&new Date(r).format("yyyy-MM-dd")}})}tableAction(e){return[o(i("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.produceOrderId,"look")},{default:()=>[n("详情")]}),o(i("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.produceOrderId,"edit")},{default:()=>[n("进度审核")]})]}toDetails(e,t){l.push({name:"EditProcess",params:{pageType:"audit",type:t||"add",id:e}})}};export{u as default};
