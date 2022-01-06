<template>
  <div class="home" id="printTest">
    <resume-header></resume-header>
    <work-experience></work-experience>
    <a href="javascript:window.print();">打印</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeHeader from './components/resumeHeader.com.vue'
import WorkExperience from './components/workExperience.com.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ResumeHeader,
    WorkExperience
  }
})
</script>

<style lang="less" scoped>
.home {
  max-width: 900px;
  min-width: 500px;
  margin: 0 auto 30px auto;
}
</style>
