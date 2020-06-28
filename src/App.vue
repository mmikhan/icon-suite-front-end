<template>
  <div id="app" class="antialiased flex h-screen dark:bg-gray-900">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: { Navigation },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
