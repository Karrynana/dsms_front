<template>
  <v-app>
    <!-- 头部 -->
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="140"
          src="@/assets/logo_white.png"
          width="100"
        />
      </div>
      <!-- 间距组件，用于在多个组件之间分配剩余宽度 -->
      <v-spacer></v-spacer>
      <div>
        <!-- 登陆成功后，登录按钮消失，出现退出箭头 -->
        <v-btn icon v-if="!userInfo.account">
          <v-icon large v-on:click="overlay = !overlay"
            >mdi-account-circle</v-icon
          >
        </v-btn>
        <v-btn icon v-else>
          <v-icon large v-on:click="goBack">mdi-exit-to-app</v-icon>
        </v-btn>
        <v-btn
          href="https://github.com/Karrynana/dsms_front"
          target="_blank"
          icon
        >
          <v-icon large>mdi-github</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- app的主要区域，根据router渲染数据 -->
    <v-main>
      <!-- 遮罩层,弹出登录页面-->
      <v-overlay :value="overlay" opacity="0.5">
        <v-card
          height="440"
          width="440"
          align="center"
          loading="success"
          color="white"
          class="green--text rounded-xl"
        >
          <h1 align="center" class="my-10">Sign in to see more</h1>
          输入你的账号:<input v-model="account" class="my-7" /><br />
          输入你的密码:<input v-model="password" class="my-7" /><br />
          <v-btn color="green" v-on:click="login" class="ma-7">登录</v-btn>
          <v-btn color="grey" v-on:click="overlay = !overlay" class="ma-7"
            >取消</v-btn
          >
        </v-card>
      </v-overlay>
      <!-- 需要渲染显示的页面 -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import themes from "@/utils/theme.js";
// export default包含的内容抛出给Vue实例
export default {
  // const i=0
  // 混入
  mixins: [themes],
  // 在 Vue 组件中响应式展示 Vuex 状态,this.$store..
  data: function () {
    return {
      overlay: false,
      // 用户的账号和密码，先设置为空
      account: "",
      password: "",
      // 获取到后端发送的的信息,需要注释，因为在后文computed属性里同步更新，要满足“no-dupe-keys”
      // userInfo: {},
    };
  },
  methods: {
    // 登录成功之后，获取用户信息=>store-index.js中action寫入异步操作
    // getUserInfo() {
    //   this.axios.get("/t-user/my").then((res) => {
    //     console.log(res);
    //     this.userInfo = res.data.data;
    //   });
    // },
    // 判断若是用户，可以使用其他功能
    login() {
      // 发请求,后端端口/t-user，params接收对象参数
      this.axios
        .get("/t-user", {
          params: { account: this.account, password: this.password },
        })
        .then((res) => {
          console.log(res);
          // 三等于，严格要求数据类型
          if (res?.data.code === 0) {
            this.$store.dispatch("getUserInfo");
            // this.getUserInfo();
            alert("登陆成功，可查看更多精彩页面！");
          } else {
            alert("账号/密码错误，无法登录~");
          }
          // console.log(typeof res.data.code);
        });
      this.overlay = false;
      // 每次登录后input置空，注意空字符串时'',但是' '是包含空格的字符。
      this.account = "";
      this.password = "";
    },
    // 退出登陆状态：1.清除token,2.对象userInfo置空清除数据
    goBack() {
      localStorage.removeItem("token");
      this.userInfo = {};
      // 在其他页面时回到首页Home
      this.$router.push({ name: "Home" });
      alert("正在退出");
      // this.$router.go(0);
    },
  },
  // 当页面被创建时，由于created可能会出现在服务器端，更推荐使用mounted
  // 页面创建后，根据本地存储的token，发送获取对应信息的请求=>防止刷新之后页面数据丢失
  mounted() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch("getUserInfo");
    }
  },
  // 要实时监听userInfo
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>