<template>
  <main class="flex flex-col flex-grow p-2">
    <h1 class="text-lg text-gray-800 font-semibold tracking-wide mb-5">
      Popular SVG Icons Pack We Love Right Now
    </h1>
    <div class="flex flex-wrap justify-around overflow-y-scroll">
      <Pack v-for="n in 15" :key="n" />
    </div>
  </main>
</template>

<script>
import Pack from '@/components/Pack'
export default {
  name: 'Home',
  components: { Pack },
}
</script>
