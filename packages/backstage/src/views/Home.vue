<template>
  <div class="home">
    <AdminHome v-if="role==='admin'"/>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  computed:{
    role(){
      return this.$store.state.userInfo.role;
    }
  }
}
</script>