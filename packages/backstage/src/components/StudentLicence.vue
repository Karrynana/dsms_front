<template>
  <div class="student-licence">
    <el-link :underline="false" @click="isShowDialog = !isShowDialog">
      驾照列表
    </el-link>
    <el-dialog title="驾照" :visible.sync="isShowDialog" :modal="false">
      <el-table
        v-loading="isLoading"
        :data="userLicenceList"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="licenceEnName" label="驾照类型">
        </el-table-column>
        <el-table-column prop="licenceName" label="驾照名称"> </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ $utils.formatDate(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            {{ scope.row.activeFlag ? '学习中' : '已完成' }}
          </template>
        </el-table-column>
      </el-table>

      <el-button
        :disabled="
          userLicenceList.length &&
          userLicenceList[userLicenceList.length - 1].activeFlag === 1
        "
        @click="onCreatNewLicence()"
        >创建驾照</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
export default {
  watch: {
    isShowDialog(newValue) {
      if (newValue) {
        this.getUserLicenceListById(this.userId);
      }
    },
  },
  data() {
    return {
      isShowDialog: false,
      isLoading: false,
      userLicenceList: [],
    };
  },
  props: {
    userId: {
      type: Number,
    },
  },
  methods: {
    async getUserLicenceListById(id) {
      this.isLoading = true;
      const userLicenceList = await this.$dao.getUserLicenceListById({ id });
      this.userLicenceList = userLicenceList;
      this.isLoading = false;
    },
    async onCreatNewLicence() {
      const params = {
        uid: this.userId,
        lid: 0,
      };
      const isCreated = await this.$dao.creatNewLicence(params);
    },
  },
};
</script>
