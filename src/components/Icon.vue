<template>
  <button
    class="relative flex flex-col items-center w-20 h-20 m-2 p-2 bg-gray-100 hover:bg-white hover:shadow-outline text-gray-700 rounded focus:bg-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
  >
    <Star />
    <svg
      class="w-10 h-10 stroke-current stroke-2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="text-xs w-20 px-2 truncate mt-auto">Hello World Hello</span>
    <Tooltip />
  </button>
</template>

<script>
import Tooltip from '@/components/Tooltip'
import Star from '@/components/Star'

export default {
  name: 'Icon',
  components: { Star, Tooltip },
}
</script>
