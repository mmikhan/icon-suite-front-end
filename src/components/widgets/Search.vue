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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <input
      class="w-full bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-500 border border-gray-300 dark:border-gray-700 rounded appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-6"
      type="text"
      name="search"
      id="search"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>
