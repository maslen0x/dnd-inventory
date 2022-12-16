import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Drawer } from './drawers.types'

export const useDrawersStore = defineStore('drawers', () => {
  const drawer = ref<Drawer | null>(null)

  const openDrawer = (value: Drawer) => drawer.value = value

  const closeDrawer = () => drawer.value = null

  return {
    drawer,
    openDrawer,
    closeDrawer
  }
})