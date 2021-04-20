<template>
  <div class="action-card" :style="`background-color:${color}`" @click="goToPage">
    <div class="action-title">{{ title }}</div>
    <div class="action-description" v-show="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    toPageName: {
      type: String,
      required: true,
    },
    toPageProps: {
      type: String,
    },
    color: {
      type: String,
      default: "#007850",
    },
  },
  methods: {
    goToPage(){
      this.$router.push({ name:this.toPageName})
    }
  },
};
</script>


<style lang="stylus" scoped>
.action-card {
  width: 100%;
  color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  box-sizing: border-box;

  .action-title {
    font-size: 1.5rem;
  }

  .action-description {
    opacity: 0.8;
  }
}
</style>