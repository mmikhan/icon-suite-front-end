<template>
  <main class="flex h-screen flex-grow">
    <Sidebar>
      <Search />
      <Library />
      <footer class="mt-auto">
        <Information />
        <FilterLibrary />
      </footer>
    </Sidebar>
    <Main />
    <Customizer />
  </main>
</template>

<script>
import Customizer from '@/components/Customizer'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import FilterLibrary from '@/components/widgets/FilterLibrary'
import Information from '@/components/widgets/Information'
import Library from '@/components/widgets/Library'
import Search from '@/components/widgets/Search'

export default {
  name: 'Home',
  components: {
    Customizer,
    Main,
    Sidebar,
    FilterLibrary,
    Information,
    Library,
    Search,
  },
}
</script>
