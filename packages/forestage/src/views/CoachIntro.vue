<template>
  <div class="coach-intro">
    <PageTitle>教练介绍</PageTitle>
    <v-row>
      <!-- 学习进度+教练评价，游客不跳转，用户跳转到个人信息页面 -->
      <v-col
        cols="12"
        sm="4"
        md="3"
        v-for="(coach, index) in coachList"
        :key="index"
      >
        <v-card hover @click="onClickCoach(coach)">
          <v-img
            :src="
              `${$globalData.cosUrl + '/' + coach.photo}` ||
                `${$globalData.cosUrl + '/coach.png'}`
            "
          ></v-img>
          <v-card-title>{{ coach.name + ' ' }}教练</v-card-title>
          <v-card-text>
            <v-text-field
              v-for="(info, index) in infoList"
              :key="index"
              :label="info.title"
              :value="coach[info.key] || info.default"
              readonly
              dense
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="isShowDetail">
      <CoachIntroDetail :coach="checkCoach"/>
    </v-dialog>
  </div>
</template>

<script>
import CoachIntroDetail from '@/components/CoachIntroDetail';
export default {
  components: { CoachIntroDetail },
  data() {
    return {
      isShowDetail: false,
      checkCoach: {},
      coachList: [],
      infoList: [
        {
          title: 'Email',
          key: 'email',
          default: '暂无',
        },
        {
          title: '电话',
          key: 'phone',
          default: '暂无',
        },
        {
          title: '历史教授人次',
          key: 'stuCount',
          default: '暂无数据',
        },
        {
          title: '历史考试人次',
          key: 'stuExamCount',
          default: '暂无数据',
        },
        {
          title: '历史通过人次',
          key: 'passCount',
          default: '暂无数据',
        },
        {
          title: '目前教授人次',
          key: 'curStuCount',
          default: '暂无数据',
        },
      ],
    };
  },
  created() {
    this.getCoachList();
  },
  methods: {
    onClickCoach(coach) {
      this.checkCoach = coach;
      this.isShowDetail = true;
    },
    async getCoachList() {
      const coachList = await this.$dao.getCoachList();
      this.coachList = coachList;
    },
  },
};
</script>
