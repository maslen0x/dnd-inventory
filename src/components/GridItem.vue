<script setup lang="ts">
import { Item } from '@/store/items/items.types'
import Thumb from '@/components/Thumb.vue'

defineProps<{ item: Item }>()
</script>

<template>
  <div class="box">
    <Thumb :color="item.color" />

    <div class="count">
      <p class="count__number">
        {{ item.count }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.box
  position: relative
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

.count
  position: absolute
  bottom: 0
  right: 0
  display: flex
  justify-content: center
  align-items: center
  height: 16px
  font-size: 10px
  padding: 0 4px
  border-top: 1px solid $light
  border-left: 1px solid $light
  border-radius: 6px 0 0 0

  &__number
    opacity: 0.4
</style>