var e=Object.defineProperty,t=(t,r,l)=>(((t,r,l)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l})(t,"symbol"!=typeof r?r+"":r,l),l);import{P as r}from"./PageBase-d1889d10.js";import{U as l}from"./Upload-b69beee7.js";import{u as a,i,f as o,A as s,ag as m}from"./index-4a918107.js";import{M as d}from"./maintenanceApi-30bfd48d.js";import{M as p}from"./materialArchivingApi-e8684a49.js";import{M as u}from"./Loading-80bc43c3.js";import"./CommonApi-c58d4529.js";const n=new class extends r{constructor(){super(...arguments),t(this,"api",new d),t(this,"materialApi",new p),t(this,"formRef",null),t(this,"pageType","order"),t(this,"actType","add"),t(this,"id",""),t(this,"ruleForm",{})}created(){const e=a();this.pageType=e.params.pageType||"order",this.actType=e.params.type||"add",this.id=e.params.id||"",this.id&&this.init()}async init(){try{this.isOrder?this.ruleForm=await this.api.details(this.id):"material"==this.pageType&&(this.ruleForm=await this.materialApi.details(this.id)),this.ruleForm}catch(e){}}get formRules(){return this.editable?{contractName:{required:!0,message:"请选择",trigger:"blur"},contractType:{required:!0,message:"请选择",trigger:"blur"},saleOrderName:{required:!0,message:"请选择",trigger:"blur"},contractAmount:{required:!0,message:"请选择",trigger:"blur"},orderDownPayment:{required:!0,message:"请选择",trigger:"blur"},partyAName:{required:!0,message:"请选择",trigger:"blur"},partyBName:{required:!0,message:"请选择",trigger:"blur"},contractEndTime:{required:!0,message:"请选择",trigger:"blur"},contractEffectiveTime:{required:!0,message:"请选择",trigger:"blur"},contractCloseTime:{required:!0,message:"请选择",trigger:"blur"}}:"material"==this.pageType?{collectionAmount:{required:!0,message:"请选择",trigger:"blur"},deliverDate:{required:!0,message:"请选择",trigger:"blur"}}:{}}get isOrder(){return"order"==this.pageType}get isLook(){return"look"==this.actType}get editable(){return"contract"!=this.pageType&&!this.isLook}get title(){return this.isOrder?"合同信息":"销售订单信息"}render(){return i("div",{class:"app-container editWrap"},[i("div",{class:"zh-form-page"},[i("div",{class:"zh-page-head"},[i("div",{class:"zh-page-head_left"},[i("span",null,[this.title])]),i("div",{class:"zh-page-head_right"},["look"!=this.actType&&i(o("el-button"),{type:"primary",onClick:()=>this.save()},{default:()=>[s("保存")]}),i(o("el-button"),{onClick:()=>this.cancel()},{default:()=>[s("返回")]})])]),i("h2",null,[this.title]),i(o("el-form"),{ref:"formRef",model:this.ruleForm,rules:this.formRules,size:"default","label-width":"140px",disabled:!this.editable,class:"zh-page_formwrap_base zh-page_formwrap_5"},{default:()=>[i(o("el-form-item"),{label:"合同名称",prop:"contractName",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{modelValue:this.ruleForm.contractName,"onUpdate:modelValue":e=>this.ruleForm.contractName=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"合同类型",prop:"contractType",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-select"),{modelValue:this.ruleForm.contractType,"onUpdate:modelValue":e=>this.ruleForm.contractType=e,placeholder:"请选择"},{default:()=>[i(o("el-option"),{label:"订单合同",value:1},null),i(o("el-option"),{label:"外协合同",value:2},null)]})]}),i(o("el-form-item"),{label:"销售订单名称",prop:"saleOrderName",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{modelValue:this.ruleForm.saleOrderName,"onUpdate:modelValue":e=>this.ruleForm.saleOrderName=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"销售订单编号：",prop:"saleOrderNumber",class:"zh-page-form_formitem_5"},{default:()=>[this.ruleForm.saleOrderNumber]}),i(o("el-form-item"),{label:"合同金额（元）",prop:"contractAmount",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{type:"number",modelValue:this.ruleForm.contractAmount,"onUpdate:modelValue":e=>this.ruleForm.contractAmount=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"合同首付款（元）",prop:"orderDownPayment",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{type:"number",modelValue:this.ruleForm.orderDownPayment,"onUpdate:modelValue":e=>this.ruleForm.orderDownPayment=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"甲方",prop:"partyAName",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{modelValue:this.ruleForm.partyAName,"onUpdate:modelValue":e=>this.ruleForm.partyAName=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"乙方",prop:"partyBName",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{modelValue:this.ruleForm.partyBName,"onUpdate:modelValue":e=>this.ruleForm.partyBName=e,placeholder:"请输入"},null)]}),this.orderNode(),this.otherNode(),this.pdfNode()]})])])}orderNode(){if(this.isOrder)return[i(o("el-form-item"),{label:"合同签订日期",prop:"contractEndTime",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-date-picker"),{modelValue:this.ruleForm.contractEndTime,"onUpdate:modelValue":e=>this.ruleForm.contractEndTime=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null)]}),i(o("el-form-item"),{label:"合同生效日期",prop:"contractEffectiveTime",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-date-picker"),{modelValue:this.ruleForm.contractEffectiveTime,"onUpdate:modelValue":e=>this.ruleForm.contractEffectiveTime=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null)]}),i(o("el-form-item"),{label:"合同结束日期",prop:"contractCloseTime",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-date-picker"),{modelValue:this.ruleForm.contractCloseTime,"onUpdate:modelValue":e=>this.ruleForm.contractCloseTime=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null)]})]}pdfNode(){var e;if("contract"!=this.pageType)return i("div",{class:"pdfList"},[null==(e=this.ruleForm.pdfList)?void 0:e.map((e=>i("div",{class:"pdfItem"},[i(l,{modelValue:e.imagePath,"onUpdate:modelValue":t=>e.imagePath=t,disabled:"look"==this.actType},null),i("div",{class:"pdfName"},[e.name])]))),i("div",{class:"pdfItem"},[i(l,{disabled:"look"==this.actType},null),i("div",{class:"pdfName"},["order"==this.pageType?"上传合同文件":"上传验收材料"])])])}otherNode(){return this.isOrder?i("div",{style:{width:"100%"}},[i("h2",null,[s("其他信息")]),i(o("el-input"),{type:"textarea",resize:"none",modelValue:this.ruleForm.otherInformation,"onUpdate:modelValue":e=>this.ruleForm.otherInformation=e,placeholder:"请输入"},null)]):"contract"==this.pageType?i("div",null,[s("合同列表")]):"material"==this.pageType?[i(o("el-form-item"),{label:"回款金额（元）",prop:"amountCollected",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-input"),{type:"number",modelValue:this.ruleForm.amountCollected,"onUpdate:modelValue":e=>this.ruleForm.amountCollected=e,placeholder:"请输入"},null)]}),i(o("el-form-item"),{label:"交付日期",prop:"deliveryTime",class:"zh-page-form_formitem_5"},{default:()=>[i(o("el-date-picker"),{modelValue:this.ruleForm.deliveryTime,"onUpdate:modelValue":e=>this.ruleForm.deliveryTime=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null)]})]:void 0}cancel(){m.push({name:"Maintenance"})}save(){this.formRef,this.$refs,this.formRef.validate((async e=>{var t,r,l,a;if(!e)return;const i=new u;try{this.isOrder?await(null==(r=(t=this.api)[this.id?"edit":"add"])?void 0:r.call(t,this.ruleForm)):"material"==this.pageType&&await(null==(a=(l=this.materialApi)[this.id?"edit":"add"])?void 0:a.call(l,this.ruleForm)),this.$message.success("操作成功"),this.cancel()}catch(o){this.$alert(`${o}`,{type:"error"})}finally{i.close()}}))}};export{n as default};
