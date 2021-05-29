// 轮播图组件
<template>
  <div class="">
    <v-carousel
      cycle
      height="350"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="num in [1, 2, 3, 4]"
        :key="num"
        :src="
          $globalData.cosUrl +
            '/carousel/ds-carousel-' +
            num +
            '.png' +
            '?imageMogr2/thumbnail/!50p'
        "
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
