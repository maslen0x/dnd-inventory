import { ref } from 'vue'
import { useItemsStore } from '@/store/items/items.store'

export const useDragging = () => {
  const itemsStore = useItemsStore()

  const current = ref<number | null>(null)

  const onDragStart = (number: number) => current.value = number

  const onDragEnd = () => current.value = null

  const onDrop = (number: number) => {
    if(typeof current.value !== 'number') return
    itemsStore.replace(current.value, number)
  }

  return {
    onDragStart,
    onDragEnd,
    onDrop
  }
}