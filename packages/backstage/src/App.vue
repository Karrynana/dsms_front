<template>
  <div id="app">
    <!-- Login 页面的布局 -->
    <router-view v-if="$route.name === 'Login'" />
    <!-- Home 页面的布局 -->
    <el-container v-else-if="$route.name === 'Home'">
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <!-- 非 Login/Home 页面的布局 -->
    <el-container v-else>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Aside, Header },
};
</script>