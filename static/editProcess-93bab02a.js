var e=Object.defineProperty,a=(a,t,s)=>(((a,t,s)=>{t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s})(a,"symbol"!=typeof t?t+"":t,s),s);import{P as t}from"./PageBase-9c2b02a1.js";import{u as s,i as l,f as i,af as o,A as d}from"./index-845c7f82.js";const r=new class extends t{constructor(){super(...arguments),a(this,"pageType","report"),a(this,"actType","add"),a(this,"id",""),a(this,"tableData",[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])}created(){const e=s();this.pageType=e.params.pageType||"order",this.actType=e.params.type||"add",this.id=e.params.id||""}get columns(){let e={};return"audit"==this.pageType||"report"==this.pageType?(e={name:{label:"生产订单名称"},date:{label:"累计完成数量"},address:{label:"当日完成数量",formatter:(e,a,t)=>this.isLook?t:l(i("el-input-number"),{modelValue:e[t],"onUpdate:modelValue":a=>e[t]=a,step:1,"step-strictly":!0,min:0},null)}},"report"==this.pageType&&(e.fil23={label:"提交状态"})):(e={name:{label:"生产订单名称"},fieldName2:{label:"订单交付数量"},date:{label:"累计交付数量"},address:{label:"本次交付数量",formatter:(e,a,t)=>this.isLook?t:l(i("el-input-number"),{modelValue:e[t],"onUpdate:modelValue":a=>e[t]=a,step:1,"step-strictly":!0,min:0},null)}},"delivery"==this.pageType&&(e.field2={label:"提交状态"})),e}get isLook(){return"look"==this.actType}get isOperational(){return"audit"==this.pageType||"inspect"==this.pageType}render(){return l("div",{class:"editBox"},[l("div",{class:"editMain"},[l(i("el-table"),{data:this.tableData,border:!0,"row-key":"id"},{default:()=>[Object.keys(this.columns).map((e=>{const a=this.columns[e];return l(i("el-table-column"),{prop:e,label:a.label,width:a.width,formatter:a.formatter},null)})),this.isOperational&&l(i("el-table-column"),{label:"操作",width:"120"},{default:this.actionSlot})]})]),l("div",{class:"editActbox"},[l(i("el-button"),{type:"default",onClick:()=>o.back()},{default:()=>[d("取消")]})])])}actionSlot(e){return[l(i("el-button"),{type:"default",onClick:()=>this.audit(e.row.id)},{default:()=>[d("审核")]})]}audit(e){}};export{r as default};
