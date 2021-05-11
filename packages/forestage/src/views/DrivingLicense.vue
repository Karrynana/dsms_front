<template>
  <div class="driving-license">
    <PageTitle>我的驾照</PageTitle>
    <v-row>
      <v-col
        :cols="12"
        :sm="6"
        v-for="(driverLicense, index) in driverLicenseList"
        :key="index"
      >
        <v-card
          ripple
          hover
          @click="goToProgress(driverLicense.id)"
          :color="colorList[Math.floor(Math.random() * colorList.length)]"
          dark
        >
          <v-card-title>{{ driverLicense.licenceEnName }}</v-card-title>
          <v-card-subtitle>{{ driverLicense.licenceName }}</v-card-subtitle>
          <v-card-text>
            {{ driverLicense.activeFlag }}
            {{ driverLicense.createTime }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      driverLicenseList: [],
      colorList: ['red', 'orange', 'green', 'blue', 'teal', 'cyan'],
    };
  },
  created() {
    this.getDriverLicenseList();
  },
  methods: {
    async getDriverLicenseList() {
      const driverLicenseList = await this.$dao.getDriverLicenseList();
      if (driverLicenseList) {
        this.driverLicenseList = driverLicenseList;
      }
    },
    goToProgress(id) {
      this.$router.push({ name: 'Process', params: { id } });
    },
  },
};
</script>
