<template>
  <header class="header-wrapper">
    <h1>张森</h1>
    <hr />
    <div class="header-content">
      <div class="mail">
        <com-icon name="youxiang"></com-icon>
        <a href="mailto:zsdota2@sina.com"> zsdota2@sina.com </a>
      </div>
      <div class="info">
        <com-icon name="lianjie"></com-icon>
        <a href="https://zs-cuojue.github.io/resume/" target="_blank">
          zs-cuojue.github.io/resume
        </a>
      </div>
      <div class="tel">
        <com-icon name="iconfontphone"></com-icon>
        <a href="tel:15927650450"> 15927650450 </a>
      </div>
      <div class="wechat">
        <com-icon name="weixin"></com-icon>
        <span> sanmu_0118 </span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComIcon from '../../components/comIcon/comIcon.com.vue'

export default defineComponent({
  name: 'resumeHeader',
  components: { ComIcon }
})
</script>

<style scoped lang="less">
.header-wrapper {
  margin-top: 30px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }
  .header-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 94%;
    left: 3%;
    position: relative;

    > div {
      display: flex;
      width: 40%;
      padding: 2.5px 0;

      a,
      span {
        line-height: 20px;
        color: #000;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .zs-icon {
      color: #000;
      font-size: 18px;
    }
  }
}
</style>
