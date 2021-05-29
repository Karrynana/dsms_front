<template>
  <div>
    <v-card>
      <v-card-title>{{ coach.name + ' ' }}教练</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-img :src="$globalData.cosUrl + '/' + coach.photo"></v-img>
          </v-col>
          <v-col cols="9">
            <div class="text-h6">综合星级</div>
            <p>
              <v-icon v-for="index in grade" :key="index">mdi-star</v-icon>
              {{ grade }} 星
            </p>
            <div class="text-h6">历史评价</div>
            <p v-for="(appraise, index) in appraiseList" :key="index">
              “{{ appraise.msg }}”
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    grade() {
      let grade = 0;
      this.appraiseList.map((appraise) => {
        grade += appraise.grade;
      });
      return this.appraiseList.length ? grade / this.appraiseList.length : 5;
    },
  },
  props: {
    coach: {
      type: Object,
    },
  },
  data() {
    return {
      appraiseList: [],
    };
  },
  created() {
    this.getCoachAppraiseById();
  },
  methods: {
    async getCoachAppraiseById() {
      const appraiseList = await this.$dao.getCoachAppraiseById({
        coachId: this.coach.id,
      });
      this.appraiseList = appraiseList;
    },
  },
};
</script>
