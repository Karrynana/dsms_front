<template>
  <el-row class="header" type="flex" align="middle">
    <el-col :span="14">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        @click="goToHomePage"
      />
    </el-col>
    <el-col :span="6">
      <el-link icon="el-icon-user-solid" type="primary">
        欢迎你，{{ userInfo.role }} {{ userInfo.name }}
      </el-link>
    </el-col>
    <el-col :span="4">
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
    goToHomePage() {
      if (this.$route.name === "Home") {
        return;
      }
      this.$router.push({ name: "Home" });
    },
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