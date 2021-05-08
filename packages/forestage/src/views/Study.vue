<template>
  <div>
    <v-card >
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-2 my-5">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title my-5"> {{userInfo.name}} </v-list-item-title>
              <v-list-item-subtitle class="my-5">{{userInfo.phone}}</v-list-item-subtitle>
              <v-list-item-subtitle class="my-5">{{userInfo.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link class="my-5">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>个人信息</v-list-item-title>
          </v-list-item>
          <v-list-item link class="my-5">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>学习进度</v-list-item-title>
          </v-list-item>
          <v-list-item link class="my-5">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>教练评价</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  // 在 Vue 组件中响应式展示 Vuex 状态,this.$store..
  computed:{
    // name() {
    //   return this.$store.state.userInfo;
    // },email(){
    //   return this.$store.state.userInfo.email;
    // },phone(){
    //   return this.$store.state.userInfo.phone;
    // } 下面是改进写法
    userInfo(){
      return this.$store.state.userInfo;
    }

  }

};
</script>