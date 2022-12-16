export const getImageUrl = (name: string) => (
  new URL(`../assets/images/${name}`, import.meta.url).href
)

export const getRandom = (max: number) => Math.floor(Math.random() * max)