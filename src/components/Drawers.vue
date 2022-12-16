<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useDrawersStore } from '@/store/drawers/drawers.store'

const drawersStore = useDrawersStore()

const drawerComponent = computed(() => (
  drawersStore.drawer && defineAsyncComponent(() => import(`@/components/drawers/${drawersStore.drawer?.name}Drawer.vue`))
))
</script>

<template>
  <Teleport to="#drawers">
    <Transition name="slide">
      <div
        v-if="drawersStore.drawer"
        class="drawer"
      >
        <Suspense>
          <component :is="drawerComponent" />

          <template #fallback>
            Загрузка...
          </template>
        </Suspense>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.drawer
  position: absolute
  top: 0
  right: 0
  width: 250px
  height: 100%
  background-color: $dark
  border-left: 1px solid $light
</style>