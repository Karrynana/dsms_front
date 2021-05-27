<template>
  <div class="qrcode">
    <canvas id="qrcanvas"></canvas>
    <p>
      更新时间：{{ $utils.formatDate(timestamp) }}
      <br />
      有效期 1 分钟
    </p>
    <p>
      <el-tag :type="isValid ? 'success' : 'danger'">{{
        isValid ? '有效' : '失效'
      }}</el-tag>
    </p>
    <el-button @click="getQRCode()">刷新二维码</el-button>
  </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  watch: {
    userInfo() {
      this.getQRCode();
    },
  },
  data() {
    return {
      isValid: false,
      timestamp: new Date().getTime(),
    };
  },
  mounted() {
    this.getQRCode();
  },
  methods: {
    /**
     * 60 秒后二维码失效
     */
    failureQRCode() {
      this.isValid = true;
      setTimeout(() => {
        this.isValid = false;
        this.getQRCode('isValid=false');
      }, 60000);
    },
    /**
     * 生成二维码
     */
    getQRCode(msg) {
      const timestamp = new Date().getTime();
      msg =
        msg ||
        `isValid=true&timestamp=${timestamp}&coachId=${this.userInfo.id}`;
      const canvas = document.getElementById('qrcanvas');
      QRCode.toCanvas(canvas, msg, (error) => {
        if (error) {
          this.$message.error('生成二维码失败，请稍后重试');
          this.isValid = false;
        } else {
          this.timestamp = timestamp;
          this.failureQRCode();
        }
      });
    },
  },
};
</script>

<style scoped>
.qrcode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
}
#qrcanvas {
  min-width: 200px;
  min-height: 200px;
}
</style>
