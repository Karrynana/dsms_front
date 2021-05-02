<template>
  <div class="home">
    <AdminHome v-if="role==='admin'"/>
    <div v-else></div>
  </div>
</template>

<script>
import AdminHome from "@/components/home/AdminHome.vue";
export default {
  components: {
    AdminHome
  },
  computed:{
    role(){
      return this.$store.state.userInfo.role;
    }
  }
}
</script>