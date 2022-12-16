<script setup lang="ts">
import { Item } from '@/store/items/items.types'

defineProps<{ item: Item }>()
</script>

<template>
  <div class="box">
    <div class="thumb">
      <div class="blur">
        <div
          class="blur__inner"
          :style="{ backgroundColor: item.color }"
        />
      </div>

      <div
        class="back"
        :style="{ backgroundColor: item.color }"
      />
    </div>

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

.thumb
  position: relative

.blur
  width: 48px
  height: 48px
  overflow: hidden
  transform: translate(-6px, 6px)
  &__inner
    width: 100%
    height: 100%
    filter: blur(6px)

.back
  position: absolute
  top: 50%
  left: 50%
  width: 48px
  height: 48px
  transform: translate(-50%, -50%)

.count
  position: absolute
  bottom: 0
  right: 0
  display: flex
  justify-content: center
  align-items: center
  width: 16px
  height: 16px
  border-top: 1px solid $light
  border-left: 1px solid $light
  border-radius: 6px 0 0 0
  font-size: 10px

  &__number
    opacity: 0.4
</style>