import { Item } from '@/store/items/items.types'

export type Drawer =
  { name : 'AddItem', data: { number: number } }
  | { name: 'RemoveItem', data: { number: number, item: Item } }

export interface DrawersStore {
  drawer: Drawer | null
}