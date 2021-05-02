<template>
  <div class="student">
    <h1>学员管理</h1>
    <AddUser role="student"/>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
export default {
  components:{AddUser}
}
</script>