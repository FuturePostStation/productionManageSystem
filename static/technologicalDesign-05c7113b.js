var e=Object.defineProperty,t=(t,i,l)=>(((t,i,l)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l})(t,"symbol"!=typeof i?i+"":i,l),l);import{T as i,L as l}from"./ListView-bee62c98.js";import{P as a}from"./PageBase-e865a2fc.js";import{i as s,f as n,af as o,A as r}from"./index-85eca7de.js";const d=new class extends a{constructor(){super(...arguments),t(this,"api",new i),t(this,"query",{}),t(this,"selected",[])}render(){return s(l,{api:this.api,query:this.query,notAdd:!0,tableConfig:{setColumns:this.setColumns,actionConfig:{width:"200"}},onSelectionChange:this.onSelectionChange},{searchItems:this.searchItems,tableAction:this.tableAction,tableHeadAct:this.tableHeadAct})}searchItems(){return[s(n("el-form-item"),{label:"名称"},{default:()=>[s(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableHeadAct(){return[s(n("el-button"),{type:"primary",onClick:()=>this.toDetails()},{default:()=>[r("设计")]}),s(n("el-button"),{type:"primary",onClick:()=>this.send()},{default:()=>[r("发送")]}),s(n("el-button"),{type:"primary",onClick:()=>this.exportExcel()},{default:()=>[r("导出清单")]})]}tableAction(e){return[s(n("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"look")},{default:()=>[r("详情")]}),s(n("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"edit")},{default:()=>[r("设计")]})]}onSelectionChange(e){this.selected=e}send(){if(0==this.selected.length)return this.$message.error("当前还未选择提交数据")}exportExcel(){}toDetails(e,t){o.push({name:"EditDesign",params:{type:t||"add",id:e}})}};export{d as default};