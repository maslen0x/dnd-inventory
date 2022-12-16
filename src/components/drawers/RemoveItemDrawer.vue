<script setup lang="ts">
import { ref } from 'vue'
import { useItemsStore } from '@/store/items/items.store'
import { useDrawersStore } from '@/store/drawers/drawers.store'
import Drawer from '@/components/Drawer.vue'
import Skeleton from '@/components/Skeleton.vue'
import Thumb from '@/components/Thumb.vue'
import Button from '@/components/Button.vue'
import ItemForm from '@/components/ItemForm.vue'

const itemsStore = useItemsStore()
const drawersStore = useDrawersStore()

const isFormVisible = ref(false)

const onSubmit = (value: string) => {
  const count = Number(value)
  if(!count) return
  const number = drawersStore.drawer?.data?.number as number
  itemsStore.remove(number, count)
  drawersStore.closeDrawer()
}
</script>

<template>
  <Drawer v-if="drawersStore.drawer?.name === 'RemoveItem'">
    <template #default>
      <Skeleton
        size="lg"
        class="title"
      />

      <Skeleton :widths="['100%', '100%', '100%', '80%', '40%']" />
    </template>

    <template #header>
      <div class="header">
        <Thumb
          size="116px"
          :color="drawersStore.drawer.data.item.color"
        />
      </div>
    </template>

    <template #footer>
      <Button
        v-if="!isFormVisible"
        block
        @click="isFormVisible = true"
      >
        Удалить предмет
      </Button>

      <ItemForm
        v-else
        @submit="onSubmit"
      />
    </template>
  </Drawer>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.header
  display: flex
  justify-content: center
  width: 100%
  padding: 55px 0
  border-bottom: 1px solid $light

.title
  margin-bottom: 24px
</style>