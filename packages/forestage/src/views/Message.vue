<template>
  <div class="message">
    <PageTitle>我的信箱</PageTitle>
    <v-data-table
      :headers="headers"
      :items="messageList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    {{ messageList }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '', value: '' },
        { text: '消息内容', value: 'msg' },
        { text: '', value: '' },
        { text: '', value: '' },
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
