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
        date: '2021.11 ~ now',
        describe:
          '金采网以建设金融采购绿色生态圈，推动金融采购行业健康发展为己任，以“采购创造价值”为目标，致力于为金融采购工作提供全场景服务。金采网经过十多年的探索与发展，现已成为业内优秀的、具有“专业社区、电子采购、数据资源、集中供应”综合业务体系和服务能力的金融采购行业平台',
        coreTechnologies:
          'Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less、D3',
        DutyList: [
          {
            text: '前端技术选型和架构设计，搭建 Nginx web服务器，发布与部署上线'
          },
          {
            text: '前期准备依据需求，分析代码可复用程度，并开发翻页，统计数等公共组件'
          },
          {
            text: '处理角色权限，依据采购方供应商角色的不同分配不同的权限'
          },
          {
            text: '优化项目结构，对不合理部分进行统筹修改'
          }
        ]
      },
      {
        name: '股权平台',
        date: '2021.8 ~ 2021.11',
        describe:
          '定位服务于一级市场（股权投资、投行业务及公司信贷），围绕产业/企业/机构/财务/政府数据的集成处理加工挖掘，在深度理解金融机构/政府/企业集团用户对于数据要求的基础上，严格贴合机构客户需求进行数据整理，为客户呈现专业加工后数据',
        coreTechnologies:
          'Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less、D3',
        DutyList: [
          {
            text: '分析原项目的需求和功能，阅读项目代码并且和后端沟通前后端接口'
          },
          {
            text: '切换项目框架为 Vue-Cli，重构各功能组件并统一管理接口，最后重构实现方法， 实现用户信息认证、用户状态维护等功能'
          },
          {
            text: '时间进行格式化功能开发，自定义 Vue 的 filter 对时间格式化'
          },
          {
            text: '状态验证功能开发，使用 localStorage 存储后端返回的 token，路由钩子函数验证 token'
          }
        ]
      },
      {
        name: '北京燃气应急管理救援平台',
        date: '2021.1 ~ 2021.8',
        describe:
          '北京燃气应急指挥管理平台是 web 端+安卓 app 组成的综合指挥管理平台，利用地理信息数据、站箱阀门检测信息、外部资源信息、其它业务相关数据及以过往事故资料、历史数据和维抢修情况等基础资料等，可大幅减少应急反应的时间、增加判断事故原因的准确度、提升应急反应的协作效率、提高维抢修人员的业务素质',
        coreTechnologies:
          'Vue、Vuex、Vue-Router、Axios、Echarts、ElementUI、Less',
        DutyList: [
          {
            text: '基于 WebSocket，实现应急救援群组成员之间的即时通讯，处置阶段、监控信息等数据的实时刷新'
          },
          {
            text: '进行前端页面布局，选用 element-ui 等通知、表单、表格、栅格布局等组件'
          },
          {
            text: '使用 vue-cli 配置 Webpack，按需引入，路由懒加载以及路由权限控制'
          },
          {
            text: '数据可视化，使用 Echarts 绘制饼状图、柱状图、折线图，使用 vue-amap 创建中国地图，并在地图上标注应急物资，和人员位置等相关信息'
          },
          {
            text: '请求通过 axios，对不同的请求方式所需要的请求头进行封装，使用 async/await 进行异步流程控制'
          },
          {
            text: '使用 VideoWebCtl 实现 IE 浏览器播放应急抢修现场监控视频'
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
