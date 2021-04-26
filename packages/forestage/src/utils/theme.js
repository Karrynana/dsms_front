export default {
  data() {
    return {
      sysDarkTheme: window.matchMedia("(prefers-color-scheme: dark)"),
      isSysDarkTheme:false
    }
  },
  methods: {
    querySysTheme(){
      this.isSysDarkTheme = this.sysDarkTheme.matches;
    }
  },
  watch: {
    isSysDarkTheme(val){
      this.$vuetify.theme.dark = val;
    }
  },
  created() {
    // 先查询一次当前系统主题
    this.querySysTheme();
    // 为媒体查询创建监听器，当系统主题变化时应用主题可能变化
    this.sysDarkTheme.addListener(this.querySysTheme);
  },
}