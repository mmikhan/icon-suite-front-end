<template>
  <section class="flex-grow">
    <NotFound v-if="notFound" />
    <div v-else class="flex h-screen">
      <Loading v-if="isLoading" />
      <License v-else-if="license" />
      <div v-else class="flex flex-wrap justify-between overflow-y-scroll">
        <Icon v-for="n in 1000" :key="n" />
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import License from '@/components/License'
import NotFound from '@/components/NotFound'

export default {
  name: 'Main',
  components: { Icon, Loading, License, NotFound },
  data() {
    return {
      notFound: false,
      isLoading: false,
      license: false,
    }
  },
}
</script>
