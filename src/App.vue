<script setup lang="ts">
import { ref } from 'vue'
import Theme from '@/components/Theme.vue'
import Container from '@/components/Container.vue'
import Layout from '@/components/Layout.vue'
import Grid from '@/components/Grid.vue'
import Sidebar from '@/components/Sidebar.vue'
import Skeleton from '@/components/Skeleton.vue'
import Alert from '@/components/Alert.vue'

const alertVisible = ref(true)
</script>

<template>
  <Theme>
    <Container>
      <Layout>
        <Grid />

        <template #sidebar>
          <Sidebar />
        </template>

        <template #footer>
          <Alert v-model="alertVisible">
            <Skeleton size="lg" />
          </Alert>
        </template>
      </Layout>
    </Container>
  </Theme>
</template>