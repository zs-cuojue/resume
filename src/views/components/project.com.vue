<template>
  <section class="project">
    <div class="inner-title">
      <com-icon name="zhaojingyan"></com-icon>
      <span>项目经验</span>
    </div>
    <hr />
    <div class="project-content">
      <div
        class="project-item"
        v-for="project in projectData"
        :key="project.name"
      >
        <div class="content-wrapper">
          <div class="project-name">{{ project.name }}</div>
          <span class="italic">Creator & Owne </span>
          <span class="time">{{ project.date }}</span>
        </div>
        <div class="project-body">
          <p>
            <span class="project-sub-title">项目描述</span>
          </p>
          <p class="project-desc">
            {{ project.describe }}
          </p>
          <p>
            <span class="project-sub-title">核心技术</span>
          </p>
          <p class="project-desc">
            {{ project.coreTechnologies }}
          </p>
          <p>
            <span class="project-sub-title">项目职责</span>
          </p>
          <ul>
            <li v-for="duty in project.DutyList" :key="duty.text">
              {{ duty.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import ComIcon from '../../components/comIcon/comIcon.com.vue'
export default defineComponent({
  name: 'project',
  components: { ComIcon },
  setup() {
    const projectData = reactive([
      {
        name: '智能招采平台',
        date: '2021.5 ~ now',
        describe: '服务器资产统计和管理',
        coreTechnologies:
          'Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less',
        DutyList: [
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          },
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          },
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          }
        ]
      },
      {
        name: '股权平台',
        date: '2021.5 ~ now',
        describe: '服务器资产统计和管理',
        coreTechnologies:
          'Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less',
        DutyList: [
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          },
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          },
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '基于 Vue 搭建项目结构，Vue-Router 开发前端路由，控制角色权限'
          }
        ]
      }
    ])

    return {
      projectData
    }
  }
})
</script>

<style lang="less" scoped>
.project {
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
  .project-content {
    .project-item {
      .content-wrapper {
        padding: 5px 0;
        .project-name {
          font-size: 20px;
          font-weight: 600;
          padding-right: 5px;
          margin-bottom: 10px;
          line-height: 1;
        }
        .italic {
          font-size: 14px;
          font-style: italic;
        }
        .time {
          float: right;
          font-size: 14px;
          margin-right: 10px;
        }
      }
      .project-body {
        p {
          padding: 5px 0;
        }
        padding: 5px 20px;
        .project-sub-title {
          font-weight: 700;
        }
        .project-desc {
          margin-left: -20px;
          color: #24292e;
          line-height: 24px;
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
            margin-left: -10px;
            text-indent: 10px;
          }
        }
      }
    }
  }
}
</style>
