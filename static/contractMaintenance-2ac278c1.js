var e=Object.defineProperty,t=(t,a,r)=>(((t,a,r)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r})(t,"symbol"!=typeof a?a+"":a,r),r);import{C as a}from"./contractMaintenanceApi-01904e87.js";import{L as r}from"./ListView-dc400d0d.js";import{P as i}from"./PageBase-a3e7a0c4.js";import{i as n,f as s,ag as l,A as o}from"./index-ab1010d4.js";import"./CommonHander-85829c56.js";import"./Loading-c7a91146.js";import"./MyTable-9b9835b0.js";const d=new class extends i{constructor(){super(...arguments),t(this,"api",new a),t(this,"query",{}),t(this,"selected",[])}render(){return n(r,{api:this.api,query:this.query,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"120"}},addHandler:this.addOrEdit,onSelectionChange:e=>this.selected=e},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[n(s("el-form-item"),{label:"名称"},{default:()=>[n(s("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{saleOrderName:{label:"订单名称"},saleOrderNumber:{label:"销售订单编号"},partyA:{label:"甲方单位名称"},signingTime:{label:"签订日期",formatter:(e,t,a)=>a&&new Date(a).format("yyyy-MM-dd")},contractAmount:{label:"合同金额（元）"}})}tableAction(e){return[n(s("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.externalContractId,"look")},{default:()=>[o("详情")]}),n(s("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.externalContractId,"edit")},{default:()=>[o("维护")]})]}addOrEdit(){if(0==this.selected.length)return this.$message.error("当前还未选择销售订单");l.push({name:"EditMaintenance",params:{pageType:"contract",type:"add"}})}details(e,t){l.push({name:"EditMaintenance",params:{pageType:"contract",type:t,id:e}})}};export{d as default};
