<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <carousel />
      </v-col>
      <!-- 学习进度+教练评价，游客不跳转，用户跳转到个人信息页面 -->
      <v-col cols="12" sm="6">
        <v-card ripple hover dark>
          <v-img
            :src="require('@/assets/learn-rate.png')"
            height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title>学习进度实时记录</v-card-title>
            <v-card-actions>
              <v-btn text>Hi</v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card ripple hover dark>
          <v-img
            :src="require('@/assets/evaluate.png')"
            height="auto"
            gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
          >
            <v-card-text>
              <div class="display-1">教练评价公开反馈</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text>了解更多</v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          height="800"
        />
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
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
