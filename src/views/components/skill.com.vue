<template>
  <section class="skill">
    <div class="inner-title">
      <com-icon name="highlight"></com-icon>
      <span>技能</span>
    </div>
    <hr />
    <div class="skill-content">
      <ul>
        <li
          class="skill-item"
          v-for="skillItem in skillData"
          :key="skillItem.text"
        >
          <span>{{ skillItem.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ComIcon from '../../components/comIcon/comIcon.com.vue'

export default defineComponent({
  name: 'skill',
  components: { ComIcon },
  setup() {
    const skillData = reactive([
      {
        text: '入理解并熟练开发基于 Vue + Vuex + TypeScript 的应用'
      },
      {
        text: '熟悉开发基于 React + Hooks + Dva + Umi 的应用'
      },
      {
        text: '能够基于声网 Agora SDK 搭建具有 RTM 实时消息通讯、RTC 视频通话功能的web平台'
      },
      {
        text: '了解 Canvas、原型链、继承、作用域、闭包原理，掌握常见跨域技巧'
      },
      {
        text: '熟悉 ES2015+ 特性，了解前端性能优化与调试技巧，并在项目中大量应用'
      },
      {
        text: '熟悉 ElementUI、iView、Antd 等组件库'
      },
      {
        text: '熟悉 Echarts、G2、G6、Graphin、vis 等可视化库'
      },
      {
        text: '熟练使用 Git, Webpack, Typescript, Less, js-xlsx, MockJs'
      }
    ])

    return {
      skillData
    }
  }
})
</script>

<style lang="less" scoped>
.skill {
  margin-top: 20px;

  .inner-title {
    span {
      margin-left: 10px;
      vertical-align: middle;
    }
    .zs-icon {
      font-size: 20px;
    }
  }
  .skill-content {
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
