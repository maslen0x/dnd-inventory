<script setup lang="ts">
import Close from '@/components/icons/Close.vue'

defineProps<{
  modelValue: boolean
}>()

defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div
    v-if="modelValue"
    class="alert"
  >
    <slot />

    <button
      class="close"
      @click="$emit('update:modelValue', false)"
    >
      <Close />
    </button>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.alert
  position: relative
  min-height: 42px
  background-color: $dark
  border: 1px solid $light
  border-radius: $border-radius
  padding: 16px
  padding-right: 42px

.close
  position: absolute
  top: 8px
  right: 8px
  display: flex
  justify-content: center
  align-items: center
  width: 24px
  height: 24px
</style>