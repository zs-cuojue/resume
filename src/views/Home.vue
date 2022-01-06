<template>
  <div class="home">
    <resume-header></resume-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeHeader from './components/resumeHeader.com.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ResumeHeader
  }
})
</script>

<style lang="less" scoped>
.home {
  max-width: 900px;
  margin: 0 auto 30px auto;
}
</style>
