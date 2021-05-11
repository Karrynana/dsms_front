<template>
  <div class="message">
    <PageTitle>我的信箱</PageTitle>
    {{messageList}}
  </div>
</template>

<script>
export default {
  computed: {
    messageList() {
      return this.$store.state.messageList;
    },
  },
  created() {
    this.$store.dispatch('getMessageList');
  },
};
</script>
