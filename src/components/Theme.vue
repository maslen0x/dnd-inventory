<script setup lang="ts">
import Moon from '@/components/icons/Moon.vue'
import { useTheme } from '@/composables/theme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="toggle"
    @click="toggleTheme"
  >
    <Moon />
  </button>

  <div
    id="page"
    class="page"
    :class="{ 'page--light': !isDark }"
  >
    <slot />
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.toggle
  position: absolute
  top: 8px
  right: 8px

.page
  width: 100vw
  min-height: 100vh
  background-color: var(--bg)
  &--light
    --primary: #95afc0
    --secondary: #dff9fb
    --bg: #3498db
    --gradient: linear-gradient(90deg, #bdc3c7 0%, #95a5a6 50%, #7f8c8d 100%)
</style>