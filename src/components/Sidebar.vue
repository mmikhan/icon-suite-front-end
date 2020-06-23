<template>
  <section
    class="flex flex-col flex-shrink-0 overflow-y-hidden bg-gray-100 border-r border-gray-300 p-2"
  >
    <Search />
    <Library />
    <footer class="mt-auto">
      <Information />
      <FilterLibrary />
    </footer>
  </section>
</template>

<script>
import FilterLibrary from '@/components/widgets/FilterLibrary'
import Information from '@/components/widgets/Information'
import Library from '@/components/widgets/Library'
import Search from '@/components/widgets/Search'

export default {
  name: 'Sidebar',
  components: { FilterLibrary, Information, Library, Search },
}
</script>
