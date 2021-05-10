<template>
  <el-row class="header" type="flex" align="middle">
    <el-col :span="12">
      <img src="@/assets/logo.png" alt="Logo" @click="goToPage('Home')" />
    </el-col>
    <el-col :span="5">
      <el-link icon="el-icon-user-solid" type="primary">
        欢迎你，{{ userInfo.role ? userInfo.role.toUpperCase() : '' }}
        {{ userInfo.name }}
      </el-link>
    </el-col>
    <el-col :span="4">
      <el-link
        icon="el-icon-s-promotion"
        type="primary"
        @click="goToPage('Message')"
      >
        站内信·{{ messageList.length }}封
      </el-link>
    </el-col>
    <el-col :span="3">
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
    messageList() {
      return this.$store.state.messageList;
    },
  },
  created() {
    // 获取用户身份信息
    this.$store.dispatch('getUserInfo');
    // 获取消息条数
    this.$store.dispatch('getMessageList');
  },
  methods: {
    goToPage(name) {
      if (this.$route.name === name) {
        return;
      }
      this.$router.push({ name });
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.commit('changeUserInfo', {});
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="stylus" scoped>
img {
  max-height: 3rem;
}
</style>
