<template>
  <el-row class="login" type="flex" justify="center" align="middle">
    <el-col :span="12" :xs="20" :lg="10" :xl="8">
      <el-card>
        <h1>Welcome</h1>
        <el-divider />
        <el-form :model="formData" :rules="rules" label-width="auto">
          <el-form-item label="账号" prop="account">
            <el-input v-model="formData.account" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password:[
          {required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.login {
  min-height: 60vh;
}
</style>