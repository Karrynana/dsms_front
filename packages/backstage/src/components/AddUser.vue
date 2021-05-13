<template>
  <span class="add-user">
    <el-button type="text" @click="dialogVisible = !dialogVisible"
      >新增{{ roleMap[role] }}</el-button
    >
    <el-dialog :title="`新增${roleMap[role]}`" :visible.sync="dialogVisible">
      <el-form :model="formData" :rules="rules" label-width="auto">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idNumber">
          <el-input v-model="formData.idNumber"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formData.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </span>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'student',
    },
    update:{
      type: Function,
      default: function(){}
    }
  },
  data() {
    return {
      dialogVisible: false,
      roleMap:{
        student:"学生",
        coach:"教练",
        teacher:"学情督察员"
      },
      formData: {
        account: '',
        name: '',
        idNumber: '',
        email: '',
        phone: '',
        remark: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur',
          },
        ],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        idNumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          {
            min: 15,
            max: 18,
            message: '请如实填写18位号码',
            trigger: 'blur',
          },
          {
            required: true,
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: '请输入正确的身份证号码',
            trigger: 'blur',
          },
        ],
        email: [
          {
            pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
            message: '请输入正确的邮箱',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            pattern: /[0-9-()（）]{7,18}/,
            message: '请输入正确的电话号码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      let formData = this.formData;
      formData.role = this.role; // 新增用户角色
      formData.password = formData.idNumber.slice(-6); // 默认密码取身份证后六位
      this.axios.post('/admin/user', this.formData).then((res) => {
        if (res.data?.code === 0) {
          this.dialogVisible = false;
          this.update();
          this.$message.success('添加成功');
        }
      });
    },
  },
};
</script>
