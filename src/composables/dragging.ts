import { ref } from 'vue'
import { useItemsStore } from '@/store/items/items.store'

export const useDragging = () => {
  const itemsStore = useItemsStore()

  const current = ref<number | null>(null)
  const coords = ref<{ x: number, y: number }>({ x: 0, y: 0 })

  const onDragStart = (e: DragEvent, number: number) => {
    coords.value = { x: e.x, y: e.y }
    current.value = number
  }

  const onDrag = (e: DragEvent) => coords.value = { x: e.x, y: e.y }

  const onDrop = (number: number) => {
    if(!current.value) return
    itemsStore.replace(current.value, number)
    current.value = null
  }

  return {
    current,
    coords,
    onDragStart,
    onDrag,
    onDrop
  }
}