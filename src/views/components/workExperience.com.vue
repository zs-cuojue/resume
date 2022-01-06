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
            title: '前端架构',
            list: [
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              },
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              }
            ]
          },
          {
            title: '团队建设',
            list: [
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              },
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
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
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              },
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              }
            ]
          },
          {
            title: '团队建设',
            list: [
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
              },
              {
                text: '主导基于 k8s 的前端 Gitlab CI/CD 流水线搭建'
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
