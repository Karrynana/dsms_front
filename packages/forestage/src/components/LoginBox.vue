<template>
  <div>
    <!-- 未登录时 显示 登录按钮 -->
    <v-btn text @click="onOpenLoginBox" v-if="!userInfo.account">
      <v-icon left>mdi-account</v-icon>登录
    </v-btn>
    <!-- 登录时 显示 用户按钮 -->
    <v-menu offset-y v-else>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-avatar size="20" class="mr-2">
            <img :src="userInfo.avatar" />
          </v-avatar>
          {{ userInfo.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goToPage('PersonalCenter')">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>个人中心</v-list-item-content>
        </v-list-item>
        <v-list-item @click="goToPage('Message')">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>我的信箱</v-list-item-title>
            <v-list-item-subtitle>{{
              messageList.length
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>退出登录</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- 遮罩层 登录弹窗 -->
    <v-dialog
      v-model="isOpenLoginBox"
      opacity="0.5"
      max-width="500"
      @click:outside="resetLoginInput()"
    >
      <v-card class="primary--text" outlined :loading="isLoginLoading">
        <v-card-title>登录</v-card-title>
        <v-card-subtitle>Sign in to see more</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="loginInput.account"
              label="输入你的账号:"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="loginInput.password"
              label="输入你的密码:"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="onSubmitLogin">确定</v-btn>
          <v-btn text color="primary" @click="onCloseLoginBox">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
    const token = localStorage.getItem('token');
    token && this.$store.dispatch('getUserInfo');
    // 获取消息条数
    this.getMessageList();
  },
  data() {
    return {
      isOpenLoginBox: false,
      isLoginLoading: false,
      loginInput: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    getMessageList() {
      this.$store.dispatch('getMessageList');
      const time = 1000 * 60 * 2; // 每两分钟获取一次消息
      setTimeout(() => {
        this.getMessageList();
      }, time);
    },
    goToPage(name) {
      if (this.$route.name === name) {
        return;
      }
      this.$router.push({ name });
    },
    logout() {
      localStorage.removeItem('token');
      this.$store.commit('changeUserInfo', {});
      this.$router.push({ name: 'Home' });
    },
    // 重置用户输入的账号密码
    resetLoginInput() {
      this.loginInput = {};
    },
    // 关闭登录弹窗
    onCloseLoginBox() {
      this.resetLoginInput();
      this.isOpenLoginBox = false;
      this.isLoginLoading = false;
    },
    // 打开登录弹窗
    onOpenLoginBox() {
      this.isOpenLoginBox = true;
    },
    // 点击确定登录
    async onSubmitLogin() {
      const { account, password } = this.loginInput;
      // 简单的表单验证 规则为不为空
      if (!account || !password) {
        return;
      }
      this.isLoginLoading = true;
      const isLogin = await this.$dao.login({ account, password });
      if (isLogin) {
        this.$store.dispatch('getUserInfo');
        this.onCloseLoginBox();
      } else {
        this.loginInput.password = '';
      }
    },
  },
};
</script>
