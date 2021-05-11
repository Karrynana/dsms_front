<template>
  <div class="student">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="hero3">
          <i class="el-icon-s-custom"></i>
          学员管理
        </span>
        <AddUser class="float-right" role="student" :update="getUserList" />
      </div>
      <el-table :data="userList" style="width: 100%">
        <el-table-column fixed="left" type="expand">
          <template slot-scope="props">
            <el-form label-position="left">
              <el-form-item label="身份证号">
                <span>{{ props.row.idNumber }}</span>
              </el-form-item>
              <el-form-item label="创建者">
                <!-- TODO: 点击展示创建者的信息 -->
                <span>{{ props.row.creator && props.row.creator.name }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ new Date(props.row.createTime) }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" fixed="left">
        </el-table-column>
        <el-table-column prop="avatar" label="头像"> </el-table-column>
        <el-table-column prop="account" label="账号"> </el-table-column>
        <el-table-column prop="email" label="邮件"> </el-table-column>
        <el-table-column prop="phone" label="电话号码"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    /**
     * 教师身份获取学生信息列表
     */
    async getUserList() {
      const userList = await this.$dao.getUserListWithRole();
      if (userList) {
        this.userList = JSON.parse(userList).student;
      }
    },
  },
};
</script>
