<template>
  <div class="teacher">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="hero3">学情教师管理</span>
        <AddUser class="float-right" role="teacher" :update="getUserList"/>
      </div>
      <!-- id 予以隐藏 不展示 -->
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
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-popconfirm
              title="确定删除该用户吗？"
              @confirm="deleteUser(scope.row.id)"
            >
              <el-link slot="reference" type="danger" :underline="false"
                >删除</el-link
              >
            </el-popconfirm>
            ｜
            <el-link :underline="false" @click="editUserInfo(scope.row.id)"
              >编辑</el-link
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue';
export default {
  components: { AddUser },
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
     * 管理员身份获取教师信息列表
     */
    getUserList() {
      this.axios.get('/admin/teacher').then((res) => {
        if (res.data?.code === 0) {
          this.userList = res.data?.data;
        }
      });
    },
    /**
     * 管理员身份删除教师/教练
     */
    deleteUser(id) {
      this.axios
        .delete('/admin/user', {
          params: { id },
        })
        .then((res) => {
          if (res.data?.code === 0) {
            this.userList = this.$utils.deleteObjectItemByAttributes(
              this.userList,
              'id',
              id
            );
            this.$message.success('删除成功');
          }
        });
    },
    /**
     * TODO: 修改信息
     */
    editUserInfo(id) {
      console.log(id);
    },
  },
};
</script>

