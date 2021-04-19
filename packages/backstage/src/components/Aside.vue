<template>
  <div class="aside">
    <el-menu unique-opened>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">XXXXX</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">XXXXX</el-menu-item>
          <el-menu-item index="1-2">XXXXX</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">XXXXX</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">XXXXX</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">XXXXX</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">XXXXX</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">人员管理</span>
        </template>
          <el-menu-item index="4-1">学员</el-menu-item>
          <el-menu-item index="4-2">教练</el-menu-item>
          <el-menu-item index="4-3">学情教师</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>