<template>
  <el-row class="header" type="flex" align="middle">
    <el-col :span="18" @click="$router.push({ name: 'Home' })">
      <img src="@/assets/logo.png" alt="Logo" />
    </el-col>
    <el-col :span="4">
      <el-link icon="el-icon-user-solid" type="primary">
        欢迎你，{{ userInfo.role }} {{ userInfo.name }}
      </el-link>
    </el-col>
    <el-col :span="2">
      <el-link icon="el-icon-close" type="info" @click="logout">退出</el-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  created() {
    this.$store.dispatch("getUserInfo");
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="stylus" scoped>
img {
  max-height: 3rem;
}
</style>