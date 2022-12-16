import { defineStore } from 'pinia'
import colors from '@/data/colors.json'
import { useLocalStorage } from '@/composables/localStorage'
import { getRandom } from '@/utils/misc'
import { ItemsStore } from './items.types'

const storage = useLocalStorage()

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: storage.get('items') ?? {}
  } as ItemsStore),

  getters: {
    getItem: state => (number: number) => state.items[number]
  },

  actions: {
    add(number: number, count: number) {
      this.items[number] = {
        id: Date.now(),
        count,
        color: colors[getRandom(colors.length)],
      }
      storage.set('items', this.items)
    },

    remove(number: number, count: number) {
      const item = this.items[number]
      if(item.count <= count) {
        delete this.items[number]
      } else {
        item.count -= count
      }
      storage.set('items', this.items)
    }
  }
})