<script setup lang="ts">
withDefaults(defineProps<{
  color: string
  size?: string
}>(), {
  size: '48px'
})
</script>

<template>
  <div
    class="thumb"
    :style="{ width: size, height: size }"
  >
    <div class="blur">
      <div
        class="blur__inner"
        :style="{ backgroundColor: color }"
      />
    </div>

    <div
      class="back"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style scoped lang="sass">
.thumb
  position: relative

.blur
  width: 100%
  height: 100%
  overflow: hidden
  transform: translate(-12.5%, 12.5%)
  &__inner
    width: 100%
    height: 100%
    filter: blur(12px)

.back
  position: absolute
  top: 50%
  left: 50%
  width: 100%
  height: 100%
  transform: translate(-50%, -50%)
</style>