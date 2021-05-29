<template>
  <div class="message">
    <PageTitle>我的信箱</PageTitle>
    <v-data-table
      :headers="headers"
      :items="messageList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'id', value: 'id' },
        { text: '发送者', value: 'id' },
        { text: '接受者', value: 'id' },
        { text: '信件内容', value: 'msg' },
        { text: '创建时间', value: '' },
      ],
    };
  },
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
