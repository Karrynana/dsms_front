<template>
  <div class="personal-center">
    <el-divider content-position="left">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </el-divider>
    <el-card class="content">
      <el-form label-width="auto">
        <el-form-item>
          <el-avatar shape="square" :size="120" :src="userInfo.avatar" />
          <el-button @click="openAvatarDialog">上传</el-button>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="userInfo.name" :disabled="!isEdit"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email" :disabled="!isEdit"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="userInfo.phone" :disabled="!isEdit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onEdit">编辑</el-button>
          <el-button @click="onSubmit" v-show="isEdit" type="primary">
            提交
          </el-button>
        </el-form-item>
      </el-form>
      <el-divider>以下信息不可修改</el-divider>
      <el-form>
        <el-form-item label="账号">
          <el-input v-model="userInfo.account" disabled></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input v-model="userInfo.role" disabled></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="userInfo.idNumber" disabled></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="userInfo.createTime"
            type="datetime"
            disabled
          />
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="上传头像" :visible.sync="dialogVisible">
      <span slot="footer" class="dialog-footer">
        <el-upload
          class="avatar-uploader"
          :action="`${axios.defaults.baseURL}t-user/avatar`"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      userInfo: {},
      dialogVisible: false,
      imageUrl:""
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.axios.get("/t-user/my/").then((res) => {
        if (res.data?.code === 0) {
          this.userInfo = Object.assign({}, res.data?.data);
          this.$store.commit("changeUserInfo", res.data?.data); // 提交负荷
        }
      });
    },
    onEdit() {
      if (this.isEdit) {
        this.userInfo = Object.assign({}, this.$store.state.userInfo);
      }
      this.isEdit = !this.isEdit;
    },
    onSubmit() {
      this.isEdit = false;
      this.axios.put("/t-user", this.userInfo).then(() => {
        this.getUserInfo();
      });
    },
    openAvatarDialog() {
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="stylus" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>