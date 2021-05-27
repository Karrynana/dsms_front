<template>
  <div class="process">
    <PageTitle>我的进度</PageTitle>
    <v-tabs v-model="tabIndex" grow center-active>
      <v-tab v-for="(process, pindex) in processList" :key="pindex">{{
        process.processName
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabIndex">
      <v-tab-item
        v-for="(process, pindex) in processList"
        :key="pindex"
        class="pa-2"
      >
        <v-card>
          <v-card-title>科目简介</v-card-title>
          <v-card-text>
            <p>科目类型：{{ process.processType === '1' ? '实操' : '理论' }}</p>
            <p>
              上一科目：{{
                process.last == '-1'
                  ? '无'
                  : processList[parseInt(process.last) - 1].processName
              }}
            </p>
            <p>
              下一科目：{{
                process.next == '-1'
                  ? '无'
                  : processList[parseInt(process.next) - 1].processName
              }}
            </p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>学习记录</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="process.detailList"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:[`item.order`]="{ item }">
                {{ item.order + 1 }}
              </template>
              <template v-slot:[`item.createTime`]="{ item }">
                {{ $utils.formatDate(item.createTime) }}
              </template>
              <template v-slot:[`item.activeFlag`]="{ item }">
                {{ item.activeFlag ? '学习中' : '已完成' }}
              </template>
            </v-data-table>
          </v-card-text>
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
      headers: [
        { text: '序号', value: 'order' },
        {
          text: '创建时间',
          value: 'createTime',
        },
        {
          text: '是否学习中',
          value: 'activeFlag',
        },
      ],
    };
  },
  created() {
    const lincenseId = this.$route.params.id || 13;
    if (lincenseId) {
      this.getProcessListById(lincenseId);
    }
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
        this.processList[index].detailList = processDetailList;
      }
    },
  },
};
</script>
