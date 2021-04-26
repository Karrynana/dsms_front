<template>
  <div class="teacher">
    <h1>学情教师管理</h1>
    <AddUser role="teacher" />
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
export default {
  components: { AddUser },
};
</script>