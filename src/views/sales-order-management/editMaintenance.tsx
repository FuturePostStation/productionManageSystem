import { PageBase } from '@/components/tsx/PageBase';
import ElForm from 'element-plus/es/components/form';
import style from './editMaintenance.module.scss'
import Upload from '@/components/tsx/Upload';

export default new (class EditMaintenance extends PageBase {

  private formRef: InstanceType<typeof ElForm> = null as any;
  private ruleForm = {
    name: '',
    type: '',
    saleName: '',
    saleNo: 'dsfsdfsfsd',
    money: '',
    downPay: '',
    partyA: '',
    partyB: '',
    signDate: '',
    startDate: '',
    endDate: '',
    other: '',
    pdfList: [] as AnyArray
  }
  private formRules = {
    name: { required: true, message: '请选择', trigger: 'blur' },
    type: { required: true, message: '请选择', trigger: 'blur' },
    saleName: { required: true, message: '请选择', trigger: 'blur' },
    saleNo: { required: true, message: '请选择', trigger: 'blur' },
    money: { required: true, message: '请选择', trigger: 'blur' },
    downPay: { required: true, message: '请选择', trigger: 'blur' },
    partyA: { required: true, message: '请选择', trigger: 'blur' },
    partyB: { required: true, message: '请选择', trigger: 'blur' },
    signDate: { required: true, message: '请选择', trigger: 'blur' },
    startDate: { required: true, message: '请选择', trigger: 'blur' },
    endDate: { required: true, message: '请选择', trigger: 'blur' },
  }

  public render(): JSX.Element {
    return <div class={['app-container', style.body]}>
      <div class={style.content}>
        <h2>合同信息</h2>
        <el-form ref='formRef' model={this.ruleForm} rules={this.formRules} size='default' label-position='top' inline>
          <el-col span={12}>
            <el-form-item label="合同名称" prop="name">
              <el-input v-model={this.ruleForm.name} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同类型" prop="type">
              <el-input v-model={this.ruleForm.type} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="销售订单名称" prop="saleName">
              <el-input v-model={this.ruleForm.saleName} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="销售订单编号" prop="saleNo">
              {this.ruleForm.saleNo}
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同金额（元）" prop="money">
              <el-input type='number' v-model={this.ruleForm.money} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同首付款（元）" prop="downPay">
              <el-input type='number' v-model={this.ruleForm.downPay} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="甲方" prop="partyA">
              <el-input v-model={this.ruleForm.partyA} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="乙方" prop="partyB">
              <el-input v-model={this.ruleForm.partyB} placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同签订日期" prop="signDate">
              <el-date-picker v-model={this.ruleForm.signDate} type="date" placeholder="Pick a date" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同生效日期" prop="signDate">
              <el-date-picker v-model={this.ruleForm.signDate} type="date" placeholder="Pick a date" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col span={12}>
            <el-form-item label="合同结束日期" prop="endDate">
              <el-date-picker v-model={this.ruleForm.endDate} type="date" placeholder="Pick a date" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col span={12}></el-col>
          <h2>其他信息</h2>
          <el-input type='textarea' resize='none' v-model={this.ruleForm.other} placeholder="请输入"></el-input>
          <div class={style.pdfList}>
            {this.ruleForm.pdfList.map(item => <Upload v-model={item.imagePath} />)}
            <Upload />
          </div>
        </el-form>
      </div>
      <div class={style.action}>
        <el-button type="default" onClick={() => this.cancel()}>取消</el-button>
        <el-button type="primary" onClick={() => this.save()}>保存</el-button>
      </div>
    </div>
  }

  private cancel() {
    this.$router.push({ name: 'Maintenance' })
  }

  private save() {
    this.formRef.validate(async valid => {
      if (!valid) return
    })
  }
})();