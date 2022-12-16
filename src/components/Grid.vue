<script setup lang="ts">
import { useItemsStore } from '@/store/items/items.store'
import { useDrawersStore } from '@/store/drawers/drawers.store'
import { useDragging } from '@/composables/dragging'
import GridItem from '@/components/GridItem.vue'
import Drawers from '@/components/Drawers.vue'
import Drag from '@/components/Drag.vue'
import { Item } from '@/store/items/items.types'

const itemsStore = useItemsStore()
const drawersStore = useDrawersStore()
const { current, coords, onDragStart, onDrag, onDrop } = useDragging()

const openAddDrawer = (number: number) => {
  drawersStore.openDrawer({ name: 'AddItem', data: { number } })
}

const openRemoveDrawer = (number: number, item: Item) => {
  drawersStore.openDrawer({ name: 'RemoveItem', data: { number, item } })
}
</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <div
        v-for="number in 25"
        :key="number"
        class="grid__item"
        @click="openAddDrawer(number)"
        @drop="onDrop(number)"
        @dragenter.prevent
        @dragover.prevent
      >
        <GridItem
          v-if="itemsStore.getItem(number)"
          :item="itemsStore.getItem(number)"
          :draggable="true"
          :style="number === current ? { opacity: 0, cursor: 'grabbing' } : {}"
          @dragstart="onDragStart($event, number)"
          @drag="onDrag($event)"
          @click.stop="openRemoveDrawer(number, itemsStore.getItem(number))"
        />
      </div>
    </div>

    <Drawers />

    <Drag
      v-if="current"
      :color="itemsStore.getItem(current).color"
      :coords="coords"
    />
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.wrapper
  position: relative
  border: 1px solid $light
  border-radius: $border-radius
  overflow: hidden

.grid
  display: grid
  grid-template-columns: repeat(5, 100px)
  grid-template-rows: repeat(5, 100px)
  background-color: $dark

  &__item
    &:not(:nth-child(5n))
      border-right: 1px solid $light

    &:not(:nth-last-child(-n + 5))
      border-bottom: 1px solid $light
</style>