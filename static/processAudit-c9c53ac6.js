var e=Object.defineProperty,t=(t,i,s)=>(((t,i,s)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s})(t,"symbol"!=typeof i?i+"":i,s),s);import{C as i}from"./Loading-ae4e87fc.js";import{L as s}from"./ListView-fbfa758f.js";import{P as l}from"./PageBase-9170dd2b.js";import{i as a,f as r,A as n}from"./index-005d2c4d.js";import"./MyTable-735b5ce7.js";class o extends i{constructor(){super("/api/produce/v1/produceProcessAudit")}}const d=new class extends l{constructor(){super(...arguments),t(this,"api",new o),t(this,"query",{}),t(this,"selected",[])}render(){return a(s,{api:this.api,query:this.query,notAdd:!0,tableConfig:{setColumns:this.setColumns,notEdit:!0,notDel:!0,actionConfig:{width:"240"}},onSelectionChange:this.onSelectionChange},{searchItems:this.searchItems,tableAction:this.tableAction,tableHeadAct:this.tableHeadAct})}searchItems(){return[a(r("el-form-item"),{label:"名称"},{default:()=>[a(r("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableHeadAct(){return[a(r("el-button"),{type:"primary",onClick:()=>this.audit()},{default:()=>[n("审核")]}),a(r("el-button"),{type:"primary",onClick:()=>this.send()},{default:()=>[n("发送")]}),a(r("el-button"),{type:"primary",onClick:()=>this.exportExcel()},{default:()=>[n("导出清单")]})]}tableAction(e){return[a(r("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[n("详情")]}),a(r("el-button"),{type:"primary",link:!0,onClick:()=>this.agree(e.row.id)},{default:()=>[n("审核通过")]}),a(r("el-button"),{type:"primary",link:!0,onClick:()=>this.disagree(e.row.id)},{default:()=>[n("退回修改")]})]}onSelectionChange(e){this.selected=e}audit(){if(0==this.selected.length)return this.$message.error("当前还未选择提交数据")}send(){if(0==this.selected.length)return this.$message.error("当前还未选择提交数据")}exportExcel(){}details(e){}agree(e){}disagree(e){}};export{d as default};
