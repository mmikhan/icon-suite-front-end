<template>
  <main class="flex h-screen flex-grow">
    <Panel />
    <div class="flex flex-col flex-grow overflow-y-scroll space-y-5 p-2">
      <General />
      <hr />
      <Optimization />
    </div>
  </main>
</template>

<script>
import Panel from '@/components/Panel'
import General from '@/components/General'
import Optimization from '@/components/Optimization'

export default {
  name: 'Settings',
  components: { Panel, General, Optimization },
}
</script>
