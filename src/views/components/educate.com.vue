<template>
  <section class="educate">
    <div class="inner-title">
      <com-icon name="jiaoyu"></com-icon>
      <span>教育经历</span>
    </div>
    <hr />
    <div class="educate-content">
      <ul>
        <li>
          武汉商学院 &nbsp;&nbsp;&nbsp; 2018.9 ~ 2020.7 &nbsp;&nbsp;&nbsp;
          (本科)
        </li>
        <li>
          武汉铁路职业技术学院 &nbsp;&nbsp;&nbsp; 2015.9 ~ 2018.7
          &nbsp;&nbsp;&nbsp; (专科)
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComIcon from '../../components/comIcon/comIcon.com.vue'
export default defineComponent({
  name: 'educate',
  components: { ComIcon }
})
</script>

<style lang="less" scoped>
.educate {
  margin-top: 20px;
  .inner-title {
    span {
      margin-left: 10px;
      vertical-align: middle;
    }
    .zs-icon {
      font-size: 18px;
    }
  }
  .educate-content {
    padding: 0 12px;
    ul {
      li::marker {
        content: '●';
        font-size: 13px;
      }
      li {
        color: #24292e;
        line-height: 24px;
        margin-top: 5px;
        text-indent: 10px;
      }
    }
  }
}
</style>
