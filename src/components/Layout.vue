<template>
  <div class="layout">
    <aside>
      <slot name="sidebar" />
    </aside>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped lang="sass">
.layout
  display: grid
  grid-template-columns: auto 500px
  grid-template-rows: 500px auto
  gap: 24px

aside,
main
  // grid-row: 500px

footer
  grid-column: span 2
</style>