<template>
  <div class="coach">
    <h1>教练管理</h1>
    <AddUser role="coach" />
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
export default {
  components: { AddUser },
};
</script>