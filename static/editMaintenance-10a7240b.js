var e=Object.defineProperty,l=(l,t,a)=>(((l,t,a)=>{t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a})(l,"symbol"!=typeof t?t+"":t,a),a);import{P as t}from"./PageBase-3b9fbe0c.js";import{ag as a,i,f as s,X as o,ah as r,A as d,ai as u,aj as n,q as m,ak as p,u as c,af as h}from"./index-76e412f7.js";const f={body:"_body_1m7yl_1",content:"_content_1m7yl_8",pdfList:"_pdfList_1m7yl_14",pdfName:"_pdfName_1m7yl_20",otherBox:"_otherBox_1m7yl_24",action:"_action_1m7yl_28"},g={upload:"_upload_6cupy_1",icon:"_icon_6cupy_16",img:"_img_6cupy_24",mediaItem:"_mediaItem_6cupy_25",close:"_close_6cupy_30",videoIcon:"_videoIcon_6cupy_38",disabled:"_disabled_6cupy_49",videoBox:"_videoBox_6cupy_53"},y=new class extends t{constructor(){super(),l(this,"props",{modelValue:{required:!0,type:String},accept:{type:String,default:"image/*, video/*, application/pdf"},mime:{type:String,default:"image"},disabled:{type:Boolean,default:!1},uploadLimit:{type:Number,default:1},previewList:{type:Array,default:()=>[]},postHandler:Function}),l(this,"upload",null),l(this,"curFile",null),l(this,"localMime","image"),l(this,"showPreview",!1)}created(){this.mimeWatch=a((()=>{this.localMime=this.mime||"image"}))}unmounted(){var e;null==(e=this.mimeWatch)||e.call(this)}render(){return i("div",null,[this.body(),i(s("el-dialog"),{class:g.videoBox,title:"预览",visible:this.showPreview,width:"50%","before-close":this.close,"append-to-body":!0,"modal-append-to-body":!1,onClosed:this.close},{default:()=>[i("video",{ref:"videoPlayer",controls:!0,autoplay:!0,src:this.modelValue},null),o(i("span",{class:"dialog-footer"},[i(s("el-button"),{onClick:this.close,size:"default"},{default:()=>[d("关 闭")]})]),[[r("slot"),"footer"]])]})])}body(){return this.disabled&&this.content(),i(s("el-upload"),u({ref:"upload",class:[g.upload,this.disabled&&g.disabled],accept:this.accept,disabled:this.disabled,"before-upload":this.beforeUpload,headers:{"X-Access-Token":n()},"show-file-list":!1,multiple:this.uploadLimit>1,limit:this.uploadLimit},{props:{onSuccess:this.handleSuccess}}),{default:()=>[this.modelValue?this.content():i(s("el-icon"),{class:g.icon},{default:()=>[i(p,null,null)]})]})}content(){let e;return e=this.localMime.includes("pdf")?i("img",{class:g.mediaItem,src:"/static/images/pdf.jpg",alt:"",onClick:()=>window.open(this.modelValue)},null):this.accept.includes("vnd.android.package-archive")?i("img",{class:g.mediaItem,src:"/static/images/apk.png",alt:""},null):this.localMime.includes("video")?i("div",{onClick:this.preview},[i("i",{class:["el-icon-video-play",g.videoIcon]},null),i("video",{class:[g.mediaItem,g.video],src:this.modelValue},null)]):i(s("el-image"),{class:g.mediaItem,src:this.modelValue,"preview-src-list":this.previewList},{default:()=>[o(i("i",{class:"el-image__error el-icon-picture-outline"},null),[[r("slot"),"error"]])]}),i("div",{onClick:m((()=>{}),["stop"])},[!this.disabled&&i("i",{class:["el-icon-error",g.close],onClick:m(this.onClear,["stop"])},null),e])}close(){this.showPreview=!1}preview(){this.showPreview=!0}beforeUpload(e){const l=this.getMime(e);if(!["image","video","pdf","vnd.android.package-archive"].find((e=>l.includes(e))))return this.$message.error("请上传图片 视频或PDF"),!1;this.curFile=e}handleSuccess(e,l,t){if(!t.some((e=>"success"!=e.status&&"fail"!=e.status))&&(null==e?void 0:e.success)){const a=this.getMime(l.raw);1==t.length&&(this.localMime=a,this.$emit("update:modelValue",e.message),this.postHandler&&this.postHandler(a));const i=[];t.forEach((e=>{"success"==e.status&&(i.push({path:e.response.message,mime:a}),a.includes("image")&&this.previewList.push(e.response.message))})),this.$emit("change",i),this.$emit("success",this.curFile),this.upload.clearFiles()}}getMime(e){return e.type}onClear(){this.localMime="",this.$emit("clear"),this.$emit("update:modelValue",""),this.$emit("scan",null),this.curFile=null}},b=new class extends t{constructor(){super(...arguments),l(this,"formRef",null),l(this,"pageType","order"),l(this,"actType","add"),l(this,"ruleForm",{name:"name",type:"",saleName:"大师傅大师傅",saleNo:"dsfsdfsfsd",money:"12",downPay:"213",partyA:"23",partyB:"23",signDate:"2023-05-18",startDate:"2023-05-19",endDate:"2023-05-28",other:"山东鲁能弗兰克那个是快乐",pdfList:[],collectionAmount:"123",deliverDate:"2023-05-28"})}created(){const e=c();this.pageType=e.params.pageType||"order",this.actType=e.params.type||"add"}get formRules(){return this.editable?{name:{required:!0,message:"请选择",trigger:"blur"},type:{required:!0,message:"请选择",trigger:"blur"},saleName:{required:!0,message:"请选择",trigger:"blur"},money:{required:!0,message:"请选择",trigger:"blur"},downPay:{required:!0,message:"请选择",trigger:"blur"},partyA:{required:!0,message:"请选择",trigger:"blur"},partyB:{required:!0,message:"请选择",trigger:"blur"},signDate:{required:!0,message:"请选择",trigger:"blur"},startDate:{required:!0,message:"请选择",trigger:"blur"},endDate:{required:!0,message:"请选择",trigger:"blur"}}:"material"==this.pageType?{collectionAmount:{required:!0,message:"请选择",trigger:"blur"},deliverDate:{required:!0,message:"请选择",trigger:"blur"}}:void 0}get isOrder(){return"order"==this.pageType}get isLook(){return"look"==this.actType}get editable(){return"contract"!=this.pageType&&!this.isLook}get title(){return this.isOrder?"合同信息":"销售订单信息"}render(){return i("div",{class:["app-container",f.body]},[i("div",{class:f.content},[i("h2",null,[this.title]),i(s("el-form"),{ref:"formRef",model:this.ruleForm,rules:this.formRules,size:"default","label-position":"top",inline:!0},{default:()=>[i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同名称",prop:"name"},{default:()=>[this.editable?i(s("el-input"),{modelValue:this.ruleForm.name,"onUpdate:modelValue":e=>this.ruleForm.name=e,placeholder:"请输入"},null):this.ruleForm.name]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同类型",prop:"type"},{default:()=>[this.editable?i(s("el-input"),{modelValue:this.ruleForm.type,"onUpdate:modelValue":e=>this.ruleForm.type=e,placeholder:"请输入"},null):this.ruleForm.type]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"销售订单名称",prop:"saleName"},{default:()=>[this.editable?i(s("el-input"),{modelValue:this.ruleForm.saleName,"onUpdate:modelValue":e=>this.ruleForm.saleName=e,placeholder:"请输入"},null):this.ruleForm.saleName]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"销售订单编号",prop:"saleNo"},{default:()=>[this.ruleForm.saleNo]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同金额（元）",prop:"money"},{default:()=>[this.editable?i(s("el-input"),{type:"number",modelValue:this.ruleForm.money,"onUpdate:modelValue":e=>this.ruleForm.money=e,placeholder:"请输入"},null):this.ruleForm.money]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同首付款（元）",prop:"downPay"},{default:()=>[this.editable?i(s("el-input"),{type:"number",modelValue:this.ruleForm.downPay,"onUpdate:modelValue":e=>this.ruleForm.downPay=e,placeholder:"请输入"},null):this.ruleForm.downPay]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"甲方",prop:"partyA"},{default:()=>[this.editable?i(s("el-input"),{modelValue:this.ruleForm.partyA,"onUpdate:modelValue":e=>this.ruleForm.partyA=e,placeholder:"请输入"},null):this.ruleForm.partyA]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"乙方",prop:"partyB"},{default:()=>[this.editable?i(s("el-input"),{modelValue:this.ruleForm.partyB,"onUpdate:modelValue":e=>this.ruleForm.partyB=e,placeholder:"请输入"},null):this.ruleForm.partyB]})]}),this.orderNode(),this.otherNode(),this.pdfNode()]})]),"look"!=this.actType&&i("div",{class:f.action},[i(s("el-button"),{type:"default",onClick:()=>this.cancel()},{default:()=>[d("取消")]}),i(s("el-button"),{type:"primary",onClick:()=>this.save()},{default:()=>[d("保存")]})])])}orderNode(){if(this.isOrder)return[i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同签订日期",prop:"signDate"},{default:()=>[this.editable?i(s("el-date-picker"),{modelValue:this.ruleForm.signDate,"onUpdate:modelValue":e=>this.ruleForm.signDate=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null):this.ruleForm.signDate]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同生效日期",prop:"signDate"},{default:()=>[this.editable?i(s("el-date-picker"),{modelValue:this.ruleForm.signDate,"onUpdate:modelValue":e=>this.ruleForm.signDate=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null):this.ruleForm.signDate]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"合同结束日期",prop:"endDate"},{default:()=>[this.editable?i(s("el-date-picker"),{modelValue:this.ruleForm.endDate,"onUpdate:modelValue":e=>this.ruleForm.endDate=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null):this.ruleForm.endDate]})]}),i(s("el-col"),{span:12},null)]}pdfNode(){if("contract"!=this.pageType)return i("div",{class:f.pdfList},[this.ruleForm.pdfList.map((e=>i("div",{class:f.pdfItem},[i(y,{modelValue:e.imagePath,"onUpdate:modelValue":l=>e.imagePath=l,disabled:"look"==this.actType},null),i("div",{class:f.pdfName},[e.name])]))),i("div",{class:f.pdfItem},[i(y,{disabled:"look"==this.actType},null),i("div",{class:f.pdfName},["order"==this.pageType?"上传合同文件":"上传验收材料"])])])}otherNode(){return this.isOrder?i("div",{class:f.otherBox},[i("h2",null,[d("其他信息")]),this.editable?i(s("el-input"),{type:"textarea",resize:"none",modelValue:this.ruleForm.other,"onUpdate:modelValue":e=>this.ruleForm.other=e,placeholder:"请输入"},null):this.ruleForm.other]):"contract"==this.pageType?i("div",null,[d("合同列表")]):"material"==this.pageType?[i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"回款金额（元）",prop:"collectionAmount"},{default:()=>[this.editable?i(s("el-input"),{type:"number",modelValue:this.ruleForm.collectionAmount,"onUpdate:modelValue":e=>this.ruleForm.collectionAmount=e,placeholder:"请输入"},null):this.ruleForm.collectionAmount]})]}),i(s("el-col"),{span:12},{default:()=>[i(s("el-form-item"),{label:"交付日期",prop:"deliverDate"},{default:()=>[this.editable?i(s("el-date-picker"),{modelValue:this.ruleForm.deliverDate,"onUpdate:modelValue":e=>this.ruleForm.deliverDate=e,type:"date",placeholder:"Pick a date",style:"width: 100%"},null):this.ruleForm.deliverDate]})]})]:void 0}cancel(){h.push({name:"Maintenance"})}save(){this.formRef.validate((async e=>{}))}};export{b as default};