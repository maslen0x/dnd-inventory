export const useLocalStorage = (prefix: string = 'inventory') => {
  const get = <T = string>(key: string): T | null => {
    try {
      return JSON.parse(localStorage.getItem(`${prefix}:${key}`) || 'null')
    } catch {
      return null
    }
  }

  const set = (key: string, value: any) => {
    localStorage.setItem(`${prefix}:${key}`, JSON.stringify(value))
  }

  const remove = (key: string) => {
    localStorage.removeItem(`${prefix}:${key}`)
  }

  return {
    get,
    set,
    remove
  }
}