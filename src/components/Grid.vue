<script setup lang="ts">
import { useItemsStore } from '@/store/items/items.store'
import { useDrawersStore } from '@/store/drawers/drawers.store'
import GridItem from '@/components/GridItem.vue'
import { Item } from '@/store/items/items.types'

const itemsStore = useItemsStore()
const drawersStore = useDrawersStore()

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
        @click="openAddDrawer(number - 1)"
      >
        <GridItem
          v-if="itemsStore.getItem(number - 1)"
          :item="itemsStore.getItem(number - 1)"
          @click.stop="openRemoveDrawer(number - 1, itemsStore.getItem(number - 1))"
        />
      </div>
    </div>

    <div id="drawers" />
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