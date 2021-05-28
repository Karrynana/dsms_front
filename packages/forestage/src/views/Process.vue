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
            <p v-if="processList[parseInt(process.last) - 1]">
              上一科目：{{
                process.last == '-1'
                  ? '无'
                  : processList[parseInt(process.last) - 1].processName
              }}
            </p>
            <p v-if="processList[parseInt(process.next) - 1]">
              下一科目：{{
                process.next == '-1'
                  ? '无'
                  : processList[parseInt(process.next) - 1].processName
              }}
            </p>
            <p>目标学时：{{ process.targetTime }} 分钟</p>
            <p>当前学时：{{ process.curTime }} 分钟</p>

            <div v-if="isShowAddTime">
              <v-text-field
                label="记录学时"
                type="number"
                v-model="addTime"
              ></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions v-if="activeIndex === pindex">
            <v-btn
              color="primary"
              @click="onAddTime(process.id, addTime, pindex)"
              v-if="isShowAddTime"
              >确定记录</v-btn
            >

            <v-btn color="primary" @click="isShowAddTime = true" v-else>
              记录学时
            </v-btn>
            <v-btn
              color="warning"
              @click="isShowAddTime = false"
              v-if="isShowAddTime"
              >取消记录</v-btn
            >
            <v-btn
              :disabled="process.targetTime >= process.curTime"
              @click="onApplyNext()"
              v-else
            >
              申请考试
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mt-2">
          <v-card-title>学习记录</v-card-title>
          <v-card-text v-if="process.detailList && process.detailList.length">
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
            </v-data-table>
          </v-card-text>
          <v-card-subtitle v-else>该科目学习暂未开始</v-card-subtitle>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    {{ processList }}
  </div>
</template>

<script>
export default {
  watch: {
    activeIndex(newValue) {
      this.tabIndex = newValue;
    },
    isShowAddTime(newValue) {
      if (!newValue) {
        this.addTime = 0;
      }
    },
  },
  data() {
    return {
      tabIndex: 0,
      activeIndex: 0,
      isShowAddTime: false,
      addTime: 0,
      lincenseId: 0,
      processList: [{}],
      headers: [
        { text: '序号', value: 'order' },
        {
          text: '创建时间',
          value: 'createTime',
        },
        {
          text: '状态',
          value: 'stateName',
        },
      ],
    };
  },
  created() {
    const lincenseId = this.$route.params.id || 13;
    if (lincenseId) {
      this.lincenseId = lincenseId;
      this.getProcessListById(lincenseId);
    }
  },
  methods: {
    /**
     * 申请下一步
     * 例如申请考试
     */
    onApplyNext() {
      console.log('申请成功');
    },
    async queryNextProcessInfo() {
      const name = await this.$dao.queryNextProcessInfo();
      console.log(name);
    },
    /**
     * 增加学时
     */
    async onAddTime(upid, time, index) {
      time = parseInt(time);
      const isAddTime = this.$dao.addTime({ upid, time });
      if (isAddTime) {
        this.processList[index].curTime += time;
        this.isShowAddTime = false;
      }
    },
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
          process.detailList = [];
          this.getProcessDetailListById(index, process.id);
        }
        this.queryNextProcessInfo();
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
        if (processDetailList.length && index > this.activeIndex) {
          this.activeIndex = index;
        }
        this.processList[index].detailList = processDetailList;
      }
    },
  },
};
</script>
