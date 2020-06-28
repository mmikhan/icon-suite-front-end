<template>
  <section
    class="flex flex-col flex-shrink-0 overflow-y-hidden bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-2"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
