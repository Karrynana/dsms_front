<template>
  <div class="admin-home">
    <div class="data">
      <el-progress type="dashboard" :percentage="10" :color="colors" />
      <el-progress type="dashboard" :percentage="20" :color="colors" />
      <el-progress type="dashboard" :percentage="40" :color="colors" />
      <el-progress type="dashboard" :percentage="30" :color="colors" />
    </div>
    <div class="action">
      <ActionCard
        v-for="(action, index) in actions"
        :key="index"
        :span="6"
        :title="action.title"
        :description="action.description"
        :toPageName="action.toPageName"
        :color="action.color"
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      actions: [
        {
          title: "个人中心",
          description: "管理账号、设置等",
          toPageName: "PersonalCenter",
        },
        {
          title: "学情教师管理",
          description: "查看、管理学情教师信息",
          toPageName: "Teacher",
          color: "#993410",
        },
        {
          title: "教练管理",
          description: "查看、管理教练信息",
          toPageName: "Coach",
          color: "#f56c6c",
        },
        {
          title: "学员管理",
          description: "查看、管理学员信息",
          toPageName: "Student",
          color: "#e6a23c",
        },
      ],
      colors: [
        { color: "#f56c6c", percentage: 10 },
        { color: "#e6a23c", percentage: 20 },
        { color: "#5cb87a", percentage: 40 },
        { color: "#1989fa", percentage: 60 },
        { color: "#6f7ad3", percentage: 80 },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.action {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>