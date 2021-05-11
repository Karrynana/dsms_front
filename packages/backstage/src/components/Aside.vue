<template>
  <div class="aside">
    <el-menu router :default-active="$route.path">
      <el-submenu
        v-for="(navGroup, gindex) in navGroupList"
        :key="gindex"
        :index="navGroup.title"
      >
        <template slot="title">
          <i :class="navGroup.icon"></i>
          <span slot="title">{{ navGroup.title }}</span>
        </template>
        <el-menu-item
          v-for="(route, index) in navGroup.children"
          :key="index"
          :index="route.path"
          :disabled="
            route.meta &&
            route.meta.role &&
            !route.meta.role.includes(userInfo.role)
          "
          >{{ route.meta.navMeta.navTitle }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navGroupList: [
        {
          title: '人员管理',
          icon: 'el-icon-user',
          children: [],
        },
      ],
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    getnavGroupList() {
      const routes = this.$router.options.routes.filter((route) => {
        return route.meta && route.meta.navMeta;
      });
      this.navGroupList.forEach((navGroup) => {
        routes.forEach((route) => {
          if (route.meta.navMeta.navGroupTitle === navGroup.title) {
            navGroup.children.push(route);
          }
        });
      });
    },
  },
  created() {
    this.getnavGroupList();
  },
};
</script>

<style scoped>
.el-menu {
  min-height: 95vh;
}
</style>
