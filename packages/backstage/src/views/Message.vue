<template>
  <div class="message">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="hero3">
          <i class="el-icon-s-promotion" />
          站内信</span
        >
        <span class="float-right">
          <el-button type="text" @click="isShowSendDialog = !isShowSendDialog"
            >发送信件</el-button
          >
          <el-button type="text" @click="onSubmitReadAll"> 一键已读 </el-button>
        </span>
      </div>
      <!-- 表格 -->
      <el-radio-group v-model="showMessageFilt.isReceive" size="small">
        <el-radio-button :label="true">我接收的</el-radio-button>
        <el-radio-button :label="false">我发送的</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="showMessageFilt.isReaded" size="small">
        <el-radio-button :label="0">未读</el-radio-button>
        <el-radio-button :label="1">已读</el-radio-button>
      </el-radio-group>
      <el-table :data="showMessageList" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="sender" label="发送者" />
        <el-table-column prop="receiver" label="接受者" />
        <el-table-column prop="msg" label="信件内容" />
        <el-table-column prop="createTime" label="创建时间" />
      </el-table>
    </el-card>
    <!-- 发送消息的弹窗 -->
    <el-dialog title="发送信件" :visible.sync="isShowSendDialog" width="30%">
      <el-form
        :model="sendMessageForm"
        :rules="rules"
        ref="sendMessageForm"
        label-width="auto"
      >
        <el-form-item label="收信人" prop="receiver">
          <el-input v-model="sendMessageForm.receiver"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="msg">
          <el-input v-model="sendMessageForm.msg"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmitSendMessage"
            >确定</el-button
          >
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    messageList() {
      return this.$store.state.messageList;
    },
    showMessageList() {
      if (this.showMessageFilt.isReceive) {
        return this.messageList.filter((message) => {
          return message.readFlag == this.showMessageFilt.isReaded;
        });
      }else{
        return this.sendMessageList.filter((message) => {
          return message.readFlag == this.showMessageFilt.isReaded;
        });
      }
    },
  },
  watch: {
    /**
     * 点击查看 我发送的 消息
     * 获取 我发送的 消息列表
     */
    'showMessageFilt.isReceive': function (newValue) {
      if (!newValue) {
        this.getSendMessageList();
      }
    },
  },
  data() {
    return {
      isShowSendDialog: false,
      showMessageFilt: {
        isReaded: 0, // 显示 未读0 还是 已读1
        isReceive: true, // 显示 我接收的true 还是 我发送的false
      },
      sendMessageForm: {},
      sendMessageList: [],
      rules: {
        receiver: [
          { required: true, message: '请输入收信人ID', trigger: 'blur' },
        ],
        msg: [{ required: true, message: '请输入信件内容', trigger: 'blur' }],
      },
    };
  },
  methods: {
    /**
     * 点击发送消息
     * 表单验证通过后将发送消息
     */
    onSubmitSendMessage() {
      this.$refs['sendMessageForm'].validate((valid) => {
        if (valid) {
          this.sendMessage();
        }
      });
    },
    /**
     * 发送消息
     */
    async sendMessage() {
      const { receiver, msg } = this.sendMessageForm;
      const isSended = await this.$dao.sendMessage({ receiver, msg });
      if (isSended) {
        this.sendMessageForm = {};
        this.isShowSendDialog = false;
      }
    },
    onSubmitReadAll() {},
    async getSendMessageList() {
      const sendMessageList = await this.$dao.getSendMessageList();
      this.sendMessageList = sendMessageList;
    },
  },
  created() {
    this.$store.dispatch('getMessageList');
  },
};
</script>
