<script setup lang="ts">
import Thumb from '@/components/Thumb.vue'

defineProps<{
  color: string
  coords: {
    x: number
    y: number
  }
}>()
</script>

<template>
  <Teleport to="#page">
    <div
      class="drag"
      :style="{ transform: `translate(${coords.x}px, ${coords.y}px)` }"
    >
      <Thumb :color="color" />
    </div>
  </Teleport>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.drag
  position: absolute
  top: 0
  width: 100px
  height: 100px
  display: flex
  justify-content: center
  align-items: center
  background-color: var(--primary)
  border: 1px solid var(--secondary)
  border-radius: 24px
</style>