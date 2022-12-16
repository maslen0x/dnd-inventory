<template>
  <div class="grid">
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
    <div class="grid__item"></div>
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