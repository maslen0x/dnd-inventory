import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import colors from '@/data/colors.json'
import { useStorage } from '@/composables/storage'
import { getRandom } from '@/utils/misc'
import { Item } from './items.types'

export const useItemsStore = defineStore('items', () => {
  const storage = useStorage()

  const items = reactive<Record<number, Item>>(storage.get('items') ?? {})

  const getItem = (number: number) => items[number]

  const add = (number: number, count: number) => {
    items[number] = {
      id: Date.now(),
      count,
      color: colors[getRandom(colors.length)]
    }
  }

  const remove = (number: number, count: number) => {
    const item = items[number]
    if(item.count <= count) {
      delete items[number]
    } else {
      item.count -= count
    }
  }

  const replace = (from: number, to: number) => {
    const temp = items[to]
    items[to] = items[from]
    if(temp) {
      items[from] = temp
    } else {
      delete items[from]
    }
  }

  watch(items, value => storage.set('items', value))

  return {
    items,
    getItem,
    add,
    remove,
    replace
  }
})