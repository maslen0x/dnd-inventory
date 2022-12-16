<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: 'red' | 'white'
  type?: 'button' | 'submit'
  block?: boolean
}>(), {
  color: 'red',
  type: 'button',
  block: false
})

const color = computed(() => `button--${props.color}`)
</script>

<template>
  <button
    class="button"
    :type="type"
    :class="{ [color]: true, 'button--block': block }"
  >
    <slot />
  </button>
</template>

<style scoped lang="sass">
.button
  line-height: 32px
  border-radius: 8px
  padding: 0 15px
  &--red
    color: #fff
    background-color: #fa7272
  &--white
    background-color: #fff
    color: #000
  &--block
    display: block
    width: 100%
</style>