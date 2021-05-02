<template>
  <el-row class="login" type="flex" justify="center" align="middle">
    <el-col :span="12" :xs="20" :lg="10" :xl="8">
      <el-card>
        <h1>Welcome</h1>
        <el-divider />
        <el-form :model="formData" :rules="rules" label-width="auto">
          <el-form-item label="账号" prop="account">
            <el-input
              v-model="formData.account"
              name="account"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              name="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>忘记密码</el-button>
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
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      const params = {
        account: this.formData.account,
        password: this.formData.password,
      };
      this.axios.get("/t-user", { params }).then((res) => {
        if (res.data?.code === 0) {
          // 登录成功后推入原页面，若无原页面推入 Home 页面
          const fromPageName = this.$route.params.from || 'Home';
          this.$router.push({ name: fromPageName });
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.login {
  min-height: 60vh;
}
</style>