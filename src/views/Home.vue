<template>
  <div class="home" id="printTest">
    <resume-header></resume-header>
    <skill></skill>
    <work-experience></work-experience>
    <project></project>
    <educate></educate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeHeader from './components/resumeHeader.com.vue'
import WorkExperience from './components/workExperience.com.vue'
import Skill from './components/skill.com.vue'
import Project from './components/project.com.vue'
import Educate from './components/educate.com.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ResumeHeader,
    WorkExperience,
    Skill,
    Educate,
    Project
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
