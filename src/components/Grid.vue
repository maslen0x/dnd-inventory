<script setup lang="ts">
import { useItemsStore } from '@/store/items/items.store'
import GridItem from '@/components/GridItem.vue'

const itemsStore = useItemsStore()
</script>

<template>
  <div class="grid">
    <div
      v-for="index in 25"
      :key="index"
      class="grid__item"
    >
      <GridItem
        v-if="itemsStore.getItem(index - 1)"
        :item="itemsStore.getItem(index - 1)"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.grid
  height: 100%
  display: grid
  grid-template-columns: repeat(5, 100px)
  grid-template-rows: repeat(5, 100px)
  background-color: $dark
  border: 1px solid $light
  border-radius: $border-radius
  overflow: hidden

  &__item
    &:not(:nth-child(5n))
      border-right: 1px solid $light

    &:not(:nth-last-child(-n + 5))
      border-bottom: 1px solid $light
</style>