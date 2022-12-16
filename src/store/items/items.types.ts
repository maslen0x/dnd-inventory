export interface Item {
  id: number
  count: number
  color: string
}

export interface ItemsStore {
  items: Record<number, Item>
}