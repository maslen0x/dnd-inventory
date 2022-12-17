<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  widths?: string[]
}>(), {
  size: 'sm'
})

const size = computed(() => `skeleton--${props.size}`)
</script>

<template>
  <div
    class="skeleton"
    :class="{ [size]: true }"
  >
    <div
      v-for="(width, index) in widths ?? ['100%']"
      :key="index"
      class="skeleton__item"
      :style="{ width }"
    />
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.skeleton
  display: flex
  flex-direction: column
  align-items: center

  &__item
    background: var(--gradient)

    &:not(:last-child)
      margin-bottom: 16px

  &--sm
    .skeleton__item
      border-radius: 4px
      height: 10px

  &--md
    .skeleton__item
      border-radius: 8px
      height: 26px

  &--lg
    .skeleton__item
      border-radius: 12px
      height: 36px
</style>