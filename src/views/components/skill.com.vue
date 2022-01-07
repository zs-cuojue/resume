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
        text: '能够基于 WebSocket 实现用户线上即时通讯、页面数据自动实时刷新'
      },
      {
        text: '能够使用 vue-amap 高德地图组件实现地图点标记、线标记和矢量图的绘制'
      },
      {
        text: '熟练使用 HTML/HTML5，CSS/CSS3，能够根据设计稿快速搭建页面'
      },
      {
        text: '了解 Canvas、原型链、继承、作用域、闭包原理，掌握常见跨域技巧'
      },
      {
        text: '熟练使用 JavaScript 进行函数式编程、DOM、BOM 操作、Ajax、面向对象方式编程'
      },
      {
        text: '熟练使用 Vue 框架能够使用 Vue-cli、Vuex、Vue-Router，进行组件化开发、模块化开发，对 v-model 有一定理解'
      },
      {
        text: '熟练使用 Git, Webpack， Typescript, Less, MockJs'
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
