<template>
  <v-container mb-10>
    <v-row class="text-center">
      <!-- DS大图标 -->
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.gif')"
          class="my-15"
          contain
          height="200"
        />
      </v-col>
      <!-- 文字显示 -->
      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold my-8">
          Welcome to D&B Driving School
        </h1>
        <p class="subheading font-weight-regular">
          For promote the institutionalized and efficient operation of driving
          school
          <br />For centralized management of huge information <br />For
          guarantee the teaching quality of trainees <br />For transparent and
          open service
          <br />
          <a href=" " target="_blank">Contact Us</a>：0431-89111111
        </p>
      </v-col>
      <!-- 学习进度+教练评价，游客不跳转，用户跳转到个人信息页面 -->
      <v-col class="my-15" cols="6">
        <h2 class="headline mb-3">学习进度实时记录</h2>
        <img
          src="@/assets/learn-rate.png"
          height="250"
          weight="250"
          class="rounded-xl"
          v-on:click="goToPage('Study')"
        />
      </v-col>
      <v-col class="my-15" cols="6">
        <h2 class="headline mb-3">教练评价公开反馈</h2>
        <div>
          <img
            src="@/assets/evaluate.png"
            height="250"
            weight="200"
            class="rounded-xl"
            v-on:click="goToPage('Evaluate')"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goToPage(name) {
      this.$router.push({ name:name });
    },
  },
};
</script>
