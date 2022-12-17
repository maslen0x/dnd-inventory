<script setup lang="ts">
import Close from '@/components/icons/Close.vue'
import { useDrawersStore } from '@/store/drawers/drawers.store'

const drawersStore = useDrawersStore()
</script>

<template>
  <div class="drawer">
    <header class="drawer__header">
      <button
        class="drawer__close"
        @click="drawersStore.closeDrawer"
      >
        <Close />
      </button>

      <slot name="header" />
    </header>

    <div class="drawer__content">
      <slot />
    </div>

    <footer class="drawer__footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.drawer
  display: flex
  flex-direction: column

  &__header
    position: relative
    display: flex
    justify-content: center
    margin: 0 15px

  &__close
    position: absolute
    top: 8px
    right: -7px
    width: 24px
    height: 24px
    display: flex
    justify-content: center
    align-items: center

  &__content
    flex-grow: 0
    padding: 16px 20px
    overflow-y: auto

  &__footer
    padding: 16px
    border-top: 1px solid var(--secondary)
</style>