var e=Object.defineProperty,t=(t,i,l)=>(((t,i,l)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l})(t,"symbol"!=typeof i?i+"":i,l),l);import{T as i,L as l}from"./ListView-a270dc26.js";import{P as a}from"./PageBase-d2127b08.js";import{at as s,i as o,f as n,ag as d,A as u}from"./index-07a8fef4.js";import{T as r}from"./TestDialog-04079e5b.js";class h{getDict(e){return s({url:`dict/dict/${e}`,method:"get",params:{code:e}})}dynamicDict(e){return s({url:`/common/api/${e}`,method:"get"})}}function m(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}const c=new class extends a{constructor(){super(),t(this,"props",{dictCode:String,modelValue:[String,Number,Array],disabled:{type:Boolean,default:!1},desc:String,initLoad:Boolean,isInterface:Boolean}),t(this,"emits",["change","update:modelValue"]),t(this,"api",new h),t(this,"isGet",!1),t(this,"loading",!0),t(this,"list",[]),t(this,"label",""),t(this,"value","")}created(){var e;this.value=null==(e=this.modelValue)?void 0:e.toString(),this.modelValue&&this.list.push({value:this.desc||"",text:this.value})}mounted(){this.initLoad&&this.getList()}render(){let e,t=o(n("el-select"),{modelValue:this.value,"onUpdate:modelValue":e=>this.value=e,placeholder:"请选择",size:"default",clearable:!0,loading:this.loading,"onVisible-change":this.visibleChange,disabled:this.disabled,onChange:this.change},m(e=this.list.map((e=>o(n("el-option"),{label:e.text,value:e.value,key:e.value},null))))?e:{default:()=>[e]});if(this.desc){const e=t;t=o(n("el-tooltip"),{class:"item",effect:"dark",content:this.desc,placement:"top-start"},m(t)?t:{default:()=>[e]})}return t}visibleChange(e){e&&this.getList()}async getList(){if(!this.isGet){this.loading=!0,this.isGet=!0;try{if(this.isInterface){const e=await this.api.dynamicDict(this.dictCode);this.list=e.map((e=>({text:e.text,value:e.text.toString()})))}else{const e=await this.api.getDict(this.dictCode);this.list=e.map((e=>({text:e.text,value:e.value})))}this.list}catch(e){this.isGet=!1}finally{this.loading=!1}}}change(e){this.$emit("change",e),this.$emit("update:modelValue",e)}},p=new class extends a{constructor(){super(...arguments),t(this,"api",new i),t(this,"query",{})}render(){return o(l,{api:this.api,query:this.query,dialogConfig:{editDialog:r},tableConfig:{setColumns:this.setColumns,actionConfig:{width:"160"}}},{searchItems:this.searchItems,tableAction:this.tableAction})}searchItems(){return[o(n("el-form-item"),{label:"物料名称"},{default:()=>[o(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]}),o(n("el-form-item"),{label:"供应商"},{default:()=>[o(c,{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e,dictCode:"123"},null)]}),o(n("el-form-item"),{label:"入库单号"},{default:()=>[o(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]}),o(n("el-form-item"),{label:"状态"},{default:()=>[o(n("el-input"),{modelValue:this.query.name,"onUpdate:modelValue":e=>this.query.name=e},null)]})]}setColumns(e){Object.assign(e,{fieldName:{label:"字段名称"},fieldCode:{label:"字段标识"},field1:{label:"字段标识"},field2:{label:"字段标识"}})}tableAction(e){return[o(n("el-button"),{type:"primary",link:!0,onClick:()=>this.details(e.row.id)},{default:()=>[u("查看")]})]}details(e){}};export{p as default};
