<template>
  <div class="home">
    <Carousel />
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
      :src="$globalData.cosUrl + '/static/parallax.jpg'"
      height="300"
    />
    <div class="grey lighten-3" ref="contact">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card>
              <v-card-title>驾校位置</v-card-title>
              <v-card-subtitle>长春市南关区净月大街2555号</v-card-subtitle>
              <v-img
                :src="
                  `https://restapi.amap.com/v3/staticmap` +
                    `?location=125.428514,43.827654` +
                    `&zoom=14&size=750*300` +
                    `&markers=large,0xFFFFFF,D:125.428514,43.82765` +
                    `&key=af708e0ea5256fdc07dab498b00bbc31`
                "
              ></v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card flat color="transparent">
              <v-card-title>联系电话</v-card-title>
              <v-card-subtitle>0431-89111111</v-card-subtitle>
              <v-card-title>电子邮箱</v-card-title>
              <v-card-subtitle>
                helper@dsms.com
                <br />
                support@dsms.com
              </v-card-subtitle>
              <v-card-text>
                <div class="text-right">
                  —— Copyright©2021-NOW DSMS
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
export default {
  name: 'Home',
  components: {
    Carousel,
  },
  data() {
    return {
      cards: [
        {
          title: '我的进度',
          icon: 'mdi-progress-clock',
          action: {
            method: 'myProcess',
          },
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
          action: {
            routeName: 'CoachIntro',
          },
        },
        {
          title: '联系我们',
          icon: 'mdi-phone',
          action: {
            method: 'goToContact',
          },
        },
      ],
    };
  },
  methods: {
    /**
     * 当卡片被点击使触发的事件
     */
    onCardClick(action) {
      const { routeName, method } = action;
      if (routeName) {
        this.$router.push({ name: routeName });
      }
      if (method) {
        if (method === 'goToContact') {
          this.goToContact();
        } else if (method === 'myProcess') {
          this.myProcess();
        }
      }
    },
    async myProcess() {
      const activeLicence = await this.$dao.getUserActiveLicenceById();
      if (activeLicence) {
        const { id } = activeLicence;
        this.$router.push({ name: 'Process', query: { id } });
      }
    },
    /**
     * 页面滚动到联系我们到位置
     */
    goToContact() {
      this.$vuetify.goTo(this.$refs.contact);
    },
  },
};
</script>
