<template>
  <main class="flex flex-grow h-screen">
    <Listing />
    <div class="overflow-y-scroll p-2">
      <div class="flex flex-wrap justify-between">
        <Pack v-for="n in 15" :key="n" />
      </div>
    </div>
  </main>
</template>

<script>
import Pack from '@/components/Pack'
import Listing from '@/components/Listing'
export default {
  name: 'Download',
  components: { Pack, Listing },
}
</script>
