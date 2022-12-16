<script setup lang="ts">
import { ref } from 'vue'
import { useItemsStore } from '@/store/items/items.store'
import { useDrawersStore } from '@/store/drawers/drawers.store'
import Drawer from '@/components/Drawer.vue'
import Skeleton from '@/components/Skeleton.vue'
import Button from '@/components/Button.vue'
import ItemForm from '@/components/ItemForm.vue'

const itemsStore = useItemsStore()
const drawersStore = useDrawersStore()

const isFormVisible = ref(false)

const onSubmit = (value: string) => {
  const count = Number(value)
  if(!count) return
  const number = drawersStore.drawer?.data?.number as number
  itemsStore.add(number, count)
  drawersStore.closeDrawer()
}
</script>

<template>
  <Drawer>
    <template #default>
      <Skeleton
        size="lg"
        class="title"
      />

      <Skeleton :widths="['100%', '100%', '100%', '80%', '40%']" />
    </template>

    <template #footer>
      <Button
        v-if="!isFormVisible"
        block
        @click="isFormVisible = true"
      >
        Добавить предмет
      </Button>

      <ItemForm
        v-else
        @submit="onSubmit"
      />
    </template>
  </Drawer>
</template>

<style scoped lang="sass">
.title
  margin-bottom: 24px
</style>