<template>
  <section class="workExperience">
    <div class="inner-title">
      <com-icon name="gongzuojingli"></com-icon>
      <span>工作经历</span>
    </div>
    <hr />
    <div class="inner-content">
      <div class="inner-item" v-for="job in experienceData" :key="job.cname">
        <div class="top">
          <span class="cname">{{ job.cname }}</span>
          <i>
            <small>{{ job.post }}</small>
          </i>
          <span class="time">{{ job.time }}</span>
        </div>
        <div class="part" v-for="part in job.content" :key="part.title">
          <div class="part-title">{{ part.title }}</div>
          <ul>
            <li v-for="item in part.list" :key="item.text">{{ item.text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ComIcon from '../../components/comIcon/comIcon.com.vue'
export default defineComponent({
  name: 'workExperience',
  components: { ComIcon },
  setup() {
    const experienceData = reactive([
      {
        cname: '视野数科',
        post: '前端开发工程师',
        time: '2021.8 ~ now',
        content: [
          {
            title: '工作职责',
            list: [
              {
                text: '根据设计，利用 HTML5/CSS3/JavaScript/Vue 等 Web 技术进行产品页面及功能开发'
              },
              {
                text: '参与软件功能设计，开发进度计划的讨论，配合后端工程师按时完成项目'
              },
              {
                text: '就项目开发所遇到的问题，与相关负责人紧密交流并解决'
              },
              {
                text: '不断优化产品的用户体验，提升兼容性、友好性'
              },
              {
                text: '项目自测，梳理流程，配合测试人员修改 Bug'
              }
            ]
          }
        ]
      },
      {
        cname: '格瑞德科技',
        post: '前端开发工程师',
        time: '2021.1 ~ 2021.8',
        content: [
          {
            title: '前端架构',
            list: [
              {
                text: '项目初期讨论，评估开发周期并指定合理计划'
              },
              {
                text: '配合产品经理，设计和改进用户体验，增强产品兼容性，易用性'
              },
              {
                text: '配合后端工程师梳理业务逻辑，接口联调'
              },
              {
                text: '开发核心功能，review 整体代码，规范代码书写习惯'
              },
              {
                text: '配合测试人员完善项目细节、提交产品审核、使产品顺利上线运行'
              }
            ]
          }
        ]
      }
    ])

    return {
      experienceData
    }
  }
})
</script>

<style lang="less" scoped>
.workExperience {
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
  .inner-content {
    .inner-item {
      margin-bottom: 10px;
      .top {
        .cname {
          font-size: 20px;
          font-weight: 600;
          color: #118aed;
          margin-right: 25px;
        }
        .time {
          float: right;
          font-size: 14px;
        }
      }
      .part {
        margin-top: 5px;
        padding: 0 12px;
        .part-title {
          padding: 5px 10px;
          font-weight: 600;
        }
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
  }
}
</style>
