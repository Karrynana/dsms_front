<template>
  <div class="personal-center">
    <PageTitle>个人中心</PageTitle>
    <v-card color="primary" dark max-width="600" class="mx-auto">
      <v-card-text>
        <v-row>
          <v-col :cols="12" :sm="4" class="text-right">
            <v-img
              :src="
                userInfoWithShow.avatar ||
                'https://lh3.googleusercontent.com/proxy/w9lFOz0xLvR12uZcjuiyEAd6hf4xoCz3mzC8WReFAEu8wPrng-rwNm6qh2cA39WPDMaH4Vz2QXba8R1xnlSNdm-z8dNcJEZSaL3uO2N48vhjTcdDz4Zzju8'
              "
              :aspect-ratio="1"
              max-width="30vw"
            ></v-img>
          </v-col>
          <v-col :cols="12" :sm="8">
            <div>
              <v-text-field
                label="姓名:"
                v-model="userInfoWithShow.name"
                :readonly="!isEdit"
                :disabled="!isEdit"
              />
              <v-text-field
                label="电子邮箱:"
                v-model="userInfoWithShow.email"
                :readonly="!isEdit"
                :disabled="!isEdit"
              />
              <v-text-field
                label="电话号码:"
                v-model="userInfoWithShow.phone"
                :readonly="!isEdit"
                :disabled="!isEdit"
              />
              <v-text-field
                label="身份证号:"
                v-model="userInfoWithShow.idNumber"
                readonly
                disabled
              />
              <v-text-field
                label="账号:"
                v-model="userInfoWithShow.account"
                readonly
                disabled
              />
              <v-text-field
                label="身份:"
                v-model="userInfoWithShow.role"
                readonly
                disabled
              />
              <v-text-field
                label="创建时间:"
                :value="$utils.formatDate(userInfoWithShow.createTime)"
                readonly
                disabled
              />
            </div>
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
      const isEdited = await this.$dao.putUserInfo(this.userInfoWithEdit);
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
