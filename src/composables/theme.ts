import { ref } from 'vue'
import { useStorage } from './storage'

export const useTheme = () => {
  const storage = useStorage()

  const isDark = ref(storage.get('isDark') ?? true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    storage.set('isDark', isDark.value)
  }

  return {
    isDark,
    toggleTheme
  }
}