<template>
  <i
    :class="[
      'zs-icon',
      name ? 'zs-icon-' + iconName : '',
      position ? 'zs-icon--' + position : '',
      size ? 'zs-icon--' + size : ''
    ]"
  >
  </i>
</template>

<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'ComIcon',
  props: {
    name: String,
    position: String,
    size: String
  },
  setup(props) {
    const iconName = computed(() => {
      let result = props.name || ''
      result = result.replace(/\s+/g, '-')
      return result
    })
    return {
      iconName
    }
  }
})
</script>
