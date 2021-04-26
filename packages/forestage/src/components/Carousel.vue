// 轮播图组件
<template>
  <div class="pa-8 pb-20">
        <v-carousel
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
          class="rounded-xl"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src + '?imageMogr2/thumbnail/!50p'"
          >
            <!-- <img :src="`https://dmsm-dev0-1258854598.cos.ap-beijing.myqcloud.com/carousel/ds-carousel-${i + 1}.png`" /> -->
          </v-carousel-item>
        </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src:
            "https://dmsm-dev0-1258854598.cos.ap-beijing.myqcloud.com/carousel/ds-carousel-1.png",
        },
        {
          src:
            "https://dmsm-dev0-1258854598.cos.ap-beijing.myqcloud.com/carousel/ds-carousel-2.png",
        },
        {
          src:
            "https://dmsm-dev0-1258854598.cos.ap-beijing.myqcloud.com/carousel/ds-carousel-3.png",
        },{
           src:
            "https://dmsm-dev0-1258854598.cos.ap-beijing.myqcloud.com/carousel/ds-carousel-4.png",
        }
      ],
    };
  },
};
</script>