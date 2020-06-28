<template>
  <main class="flex flex-grow h-screen">
    <Sidebar>
      <IconPack />
    </Sidebar>
    <div class="overflow-y-scroll p-2">
      <div class="flex flex-wrap justify-between">
        <Pack v-for="n in 15" :key="n" />
      </div>
    </div>
  </main>
</template>

<script>
import Pack from '@/components/Pack'
import Sidebar from '@/components/Sidebar'
import IconPack from '@/components/widgets/IconPack'

export default {
  name: 'Download',
  components: { Pack, Sidebar, IconPack },
}
</script>
