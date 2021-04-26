<template>
  <div class="home">
    <!-- 3使用组件 -->
    <Carousel/>
    <Mainword/>
  </div>
</template>

<script>
//1引入组件   @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Mainword from "@/components/Mainword.vue"

export default {
  name: 'Home',
  components: {
    //2注册组件
    Carousel: Carousel,
    Mainword:Mainword

  }
}
</script>
