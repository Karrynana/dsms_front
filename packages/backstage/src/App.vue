<template>
  <div id="app">
    <!-- 非 Login 页面的布局 -->
    <el-container v-if="$route.name !== 'Login'">
      <el-header>
        <Header/>
      </el-header>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <!-- Login 页面的布局 -->
    <router-view v-else />
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Aside,Header },
};
</script>