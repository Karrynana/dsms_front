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
            {{ scope.row.activeFlag == 1 ? '考取中' : '已完成' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="onExamine(scope.row)">
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button
        :disabled="
          userLicenceList.length !== 0 &&
          userLicenceList[userLicenceList.length - 1].activeFlag === 1
        "
        @click="onCreatNewLicence()"
        >创建驾照</el-button
      >

      <el-table :data="processList">
        <el-table-column label="科目" prop="prcName"></el-table-column>
        <el-table-column label="时间" prop="createTime"></el-table-column>
        <el-table-column label="状态" prop="stateName"></el-table-column>
        <el-table-column label="是否完成">
          <template slot-scope="scope">
            {{ scope.row.activeFlag ? '进行中' : '已完成' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <div
            slot-scope="scope"
            v-if="scope.row.activeFlag && scope.row.stateName == '审核'"
          >
            <el-link size="mini" @click="operation(true)"> 通过 </el-link>
            <el-link type="danger" size="mini" @click="operation(false)">
              拒绝
            </el-link>
          </div>
        </el-table-column>
      </el-table>
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
      processList: [],
      row: null,
    };
  },
  props: {
    userId: {
      type: Number,
    },
  },
  methods: {
    /**
     * 审批审核
     * 通过/拒绝
     */
    async operation(flag) {
      const isOperation = await this.$dao.nextProcessWithTeacher({
        flag,
        uid: this.userId,
      });
      if (isOperation) {
        this.onExamine(this.row);
      }
    },
    /**
     * 点击 [查看] 获取某驾照的流程详情
     */
    async onExamine(row) {
      this.row = row;
      const { id: ulid } = row;
      const processList = await this.$dao.getProcessListByUidUlidWithTeacher({
        uid: this.userId,
        ulid,
      });
      this.processList = processList;
    },
    async getUserLicenceListById(id) {
      this.isLoading = true;
      const userLicenceList = await this.$dao.getUserLicenceListById({ id });
      this.userLicenceList = userLicenceList;
      this.isLoading = false;
    },
    async onCreatNewLicence() {
      const params = {
        uid: this.userId,
        lid: 1,
      };
      const isCreated = await this.$dao.creatNewLicence(params);
      if (isCreated) {
        this.getUserLicenceListById(this.userId);
      }
    },
  },
};
</script>
