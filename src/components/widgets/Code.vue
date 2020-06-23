<template>
  <div class="flex justify-between items-center">
    <h2 class="text-xs text-gray-600 font-semibold tracking-wide">
      Preview
    </h2>
    <button
      class="rounded text-gray-800 hover:text-indigo-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
    >
      <svg
        class="w-4 h-4 stroke-current stroke-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Code',
}
</script>
