<template>
  <div class="relative">
    <span
      class="flex items-center absolute text-gray-700 inset-y-0 left-0 pl-1"
    >
      <svg
        class="w-4 h-4 stroke-current stroke-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <input
      class="w-full bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-500 border border-gray-300 dark:border-gray-700 rounded appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-6"
      type="text"
      name="filter"
      id="filter"
      placeholder="Filter Icon Sets"
    />
  </div>
</template>

<script>
export default {
  name: 'FilterLibrary',
}
</script>
