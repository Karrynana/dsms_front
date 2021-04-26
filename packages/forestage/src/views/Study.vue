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
              <v-list-item-title class="title my-5"> name </v-list-item-title>
              <v-list-item-subtitle class="my-5">phone:12345678</v-list-item-subtitle>
              <v-list-item-subtitle class="my-5">email:a88@gmail.com</v-list-item-subtitle>
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
  
};
</script>