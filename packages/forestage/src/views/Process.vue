<template>
  <div class="process">
    <PageTitle>我的进度</PageTitle>
    <v-tabs v-model="tabIndex" grow center-active>
      <v-tab v-for="(process, pindex) in processList" :key="pindex">{{
        process.processName
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabIndex">
      <v-tab-item v-for="(process, pindex) in processList" :key="pindex">
        <v-card v-for="detail,index in process"  :key="index">
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      processList: [{}],
    };
  },
  created() {
    const lincenseId = this.$route.params.id || 13;
    if (lincenseId) {
      this.getProcessListById(lincenseId);
    } // TODO 若是本页刷新？
  },
  methods: {
    /**
     * 根据驾照id
     * 获取大状态
     */
    async getProcessListById(id) {
      const processList = await this.$dao.getProcessListById({ id });
      if (processList) {
        this.processList = processList;
        for (let index = 0; index < processList.length; index++) {
          const process = processList[index];
          this.getProcessDetailListById(index, process.id);
        }
      }
    },
    /**
     * 根据大状态id获取小状态
     */
    async getProcessDetailListById(index, id) {
      const processDetailList = await this.$dao.getProcessDetailListById({
        id,
      });
      if (processDetailList) {
        console.log(this.processList);
        this.processList[index].detailList = processDetailList;
      }
    },
  },
};
</script>
