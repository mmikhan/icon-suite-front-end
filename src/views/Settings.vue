<template>
  <main class="flex h-screen flex-grow">
    <Sidebar>
      <AppSettings />
    </Sidebar>
    <div class="flex flex-col flex-grow overflow-y-scroll space-y-5 p-2">
      <General />
      <hr class="dark:border-gray-700" />
      <Optimization />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import General from '@/components/General'
import Optimization from '@/components/Optimization'
import AppSettings from '@/components/widgets/AppSettings'

export default {
  name: 'Settings',
  components: { Sidebar, General, Optimization, AppSettings },
}
</script>
