<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center" @click="$router.push({name:'Home'})">
        <v-img
          alt="Logo"
          class="shrink mt-1"
          contain
          min-width="100"
          max-width="100"
          :src="require('@/assets/logo_white.png')"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/Karrynana/dsms_front"
        target="_blank"
        text
      >
        <v-icon left>mdi-github</v-icon>Github
      </v-btn>
      <v-btn text @click="onOpenLoginBox">
        <v-icon left>mdi-account</v-icon>登录
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- 遮罩层,弹出登录页面-->
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
      <v-container v-if="$route.name !== 'Home'">
        <router-view></router-view>
      </v-container>
      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
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
    onSubmitLogin() {
      const { account, password } = this.loginInput;
      // 简单的表单验证 规则为不为空
      if (!account || !password) {
        return;
      }
      this.isLoginLoading = true;
      this.$dao
        .login({ account, password })
        .then(() => {
          this.getUserInfo();
        })
        .finally(() => {
          this.onCloseLoginBox();
        });
    },
    getUserInfo(){
      // TODO
    }
  },
};
</script>
