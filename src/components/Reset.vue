<template>
  <button
    class="flex items-center text-xs bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-500 font-semibold py-1 px-2 border border-gray-400 dark:border-gray-700 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
  >
    <svg
      class="w-4 h-4 mr-1 stroke-current stroke-2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span>Reset</span>
  </button>
</template>

<script>
export default {
  name: 'Reset',
}
</script>
