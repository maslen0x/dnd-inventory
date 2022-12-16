<script setup lang="ts">
defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
}>()

defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    class="input"
    :value="modelValue"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.input
  height: 40px
  border: 1px solid $light
  border-radius: 4px
  padding: 0 12px
  background-color: transparent
  color: #fff

  &::placeholder
    color: #fff
    opacity: 0.4
</style>