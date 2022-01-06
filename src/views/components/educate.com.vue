<template>
  <section class="educate">
    <div class="inner-title">
      <com-icon name="jiaoyu"></com-icon>
      <span>教育经历</span>
    </div>
    <hr />
    <div class="educate-content">
      <ul>
        <li>华中科技大学文华学院 &nbsp;&nbsp;&nbsp; 2014.9 ~ 2018.7</li>
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
