<template>
  <div id="app">
    <!-- Login 页面的布局 -->
    <router-view v-if="$route.name === 'Login'" />
    <!-- 非 Login 页面的布局 -->
    <el-container v-else>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="stylus">
.hero3{
  font-size 1.5rem
}
.flex{
  display:flex
  &.align-center{
    align-content center
  }
}
.float-right{
  float:right
}
.clearfix:before,
 .clearfix:after {
   display: table;
   content: "";
 }
 .clearfix:after {
   clear: both
 }
</style>
