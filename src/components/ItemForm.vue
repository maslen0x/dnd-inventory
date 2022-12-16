<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { useDrawersStore } from '@/store/drawers/drawers.store'

defineEmits<{
  (event: 'submit', value: string): void
}>()

const drawersStore = useDrawersStore()

const count = ref('')
</script>

<template>
  <form @submit.prevent="$emit('submit', count)">
    <Input
      v-model="count"
      type="number"
      placeholder="Введите количество"
      class="input"
    />

    <div class="bottom">
      <Button
        color="white"
        class="cancel"
        @click="drawersStore.closeDrawer"
      >
        Отмена
      </Button>

      <Button type="submit">Подтвердить</Button>
    </div>
  </form>
</template>

<style scoped lang="sass">
.input
  max-width: 100%
  margin-bottom: 20px

.bottom
  display: flex
  gap: 10px

.cancel
  flex-grow: 1
</style>