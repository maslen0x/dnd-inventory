<script setup lang="ts">
import Skeleton from '@/components/Skeleton.vue'
import { getImageUrl } from '@/utils/misc'
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__img">
      <img
        :src="getImageUrl('img.jpg')"
        alt="Image"
        width="50"
      />
    </div>

    <div class="sidebar__content">
      <Skeleton
        size="md"
        class="sidebar__title"
      />

      <Skeleton
        :widths="['80%', '100%', '90%', '85%', '75%']"
        class="sidebar__description"
      />

      <Skeleton :widths="['40%']" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.sidebar
  height: 100%
  display: flex
  flex-direction: column
  background-color: var(--primary)
  border: 1px solid var(--secondary)
  border-radius: var(--border-radius)
  padding: 16px

  &__img
    border-radius: 8px
    overflow: hidden
    margin-bottom: 20px

    img
      width: 100%
      filter: blur(6px)

  &__content
    width: 100%
    max-width: 190px
    margin: 0 auto

  &__title,
  &__description
    margin-bottom: 24px
</style>