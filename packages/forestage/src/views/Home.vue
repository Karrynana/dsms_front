<template>
  <div class="home">
    <carousel />
    <v-container>
      <v-row>
        <!-- 学习进度+教练评价，游客不跳转，用户跳转到个人信息页面 -->
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(card, index) in cards"
          :key="index"
        >
          <v-card ripple hover @click="onCardClick(card.action)">
            <v-card-text class="text-center text-h5">
              <v-icon x-large>{{ card.icon }}</v-icon>
              <div>{{ card.title }}</div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- DS大图标 -->
        <v-col cols="12">
          <v-img
            :src="require('@/assets/logo.gif')"
            class="my-15"
            contain
            height="200"
          />
        </v-col>
        <!-- 文字显示 -->
        <v-col class="text-center" cols="12">
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
      </v-row>
    </v-container>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      height="300"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        {
          title: '我的进度',
          icon: 'mdi-progress-clock',
        },
        {
          title: '我的驾照',
          icon: 'mdi-id-card',
          action: {
            routeName: 'DrivingLicense',
          },
        },
        {
          title: '教练介绍',
          icon: 'mdi-account-group',
        },
        {
          title: '联系我们',
          icon: 'mdi-phone',
        },
      ],
    };
  },
  methods: {
    onCardClick(action) {
      const { routeName } = action;
      if (routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
};
</script>
