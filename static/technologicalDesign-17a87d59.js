var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{C as i,L as s}from"./ListView-ff6a0dcf.js";import{P as a}from"./PageBase-6a283273.js";import{i as l,f as n,ag as o,A as r}from"./index-f1aaa364.js";import"./MyTable-1b942cb2.js";class d extends i{constructor(){super("/api/produce/v1/produceDesign")}}const u=new class extends a{constructor(){super(...arguments),t(this,"api",new d),t(this,"query",{}),t(this,"selected",[])}render(){return l(s,{api:this.api,query:this.query,notAdd:!0,tableConfig:{setColumns:this.setColumns,actionConfig:{width:"200"}},onSelectionChange:this.onSelectionChange},{searchItems:this.searchItems,tableAction:this.tableAction,tableHeadAct:this.tableHeadAct})}searchItems(){return[l(n("el-form-item"),{label:"名称"},{default:()=>[l(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableHeadAct(){return[l(n("el-button"),{type:"primary",onClick:()=>this.toDetails()},{default:()=>[r("设计")]}),l(n("el-button"),{type:"primary",onClick:()=>this.send()},{default:()=>[r("发送")]}),l(n("el-button"),{type:"primary",onClick:()=>this.exportExcel()},{default:()=>[r("导出清单")]})]}tableAction(e){return[l(n("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"look")},{default:()=>[r("详情")]}),l(n("el-button"),{type:"primary",link:!0,onClick:()=>this.toDetails(e.row.id,"edit")},{default:()=>[r("设计")]})]}onSelectionChange(e){this.selected=e}send(){if(0==this.selected.length)return this.$message.error("当前还未选择提交数据")}exportExcel(){}toDetails(e,t){o.push({name:"EditDesign",params:{type:t||"add",id:e}})}};export{u as default};