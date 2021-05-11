<template>
  <div class="personal-center">
    <PageTitle>个人中心</PageTitle>
    <v-card color="primary" dark max-width="600" class="mx-auto">
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <div>
              <p>ID:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.id }}</span></p>
              <p>姓名:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.name }}</span></p>
              <p>电子邮箱:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.email }}</span></p>
              <p>电话号码:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.phone }}</span></p>
              <p>账号:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.account }}</span></p>
              <p>身份:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.role }}</span></p>
              <p>身份证号:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.idNumber }}</span></p>
              <p>创建时间:<span class="ml-2 white--text text-subtitle-1">{{ userInfoWithShow.createTime }}</span></p>
            </div>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-avatar size="200" tile>
              <v-img :src="userInfoWithShow.avatar"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions v-if="!isEdit">
        <v-btn text @click="onEdit">编辑</v-btn>
      </v-card-actions>

      <v-card-actions v-else>
        <v-btn outlined @click="onSubmitEdit">完成</v-btn>
        <v-btn text @click="onCancelEdit">取消</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    userInfoWithShow() {
      if (this.isEdit) {
        return this.userInfoWithEdit;
      } else {
        return this.userInfo;
      }
    },
  },
  data() {
    return {
      isEdit: false,
      userInfoWithEdit: {},
    };
  },
  methods: {
    onEdit() {
      this.isEdit = true;
      this.userInfoWithEdit = Object.assign({}, this.userInfo);
    },
    onCancelEdit() {
      this.isEdit = false;
      this.userInfoWithEdit = {};
    },
    async onSubmitEdit() {
      // TODO
      const isEdited = await this.$dao.editUserInfo(this.userInfoWithEdit);
      if (isEdited) {
        this.$store.commit('changeUserInfo', this.userInfoWithEdit); // 本地增量修改数据
      }
      this.onCancelEdit(); // 关闭编辑
    },
  },
  created() {
    // 获取用户身份信息
    this.$store.dispatch('getUserInfo');
  },
};
</script>
