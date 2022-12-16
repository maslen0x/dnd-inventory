import { defineStore } from 'pinia'
import { Drawer, DrawersStore } from './drawers.types'

export const useDrawersStore = defineStore('drawers', {
  state: () => ({
    drawer: null
  } as DrawersStore),

  actions: {
    openDrawer(drawer: Drawer) {
      this.drawer = drawer
    },

    closeDrawer() {
      this.drawer = null
    }
  }
})