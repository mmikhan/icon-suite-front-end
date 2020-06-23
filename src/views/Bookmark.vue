<template>
  <main class="flex h-screen flex-grow">
    <Sidebar />
    <Main />
    <Customizer />
  </main>
</template>

<script>
import Customizer from '@/components/Customizer'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: { Customizer, Main, Sidebar },
}
</script>
