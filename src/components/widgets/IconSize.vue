<template>
  <div>
    <label
      class="flex items-center justify-between text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="icon-size"
    >
      <div class="flex items-center">
        <svg
          class="w-4 h-4 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2 class="text-xs pl-1">Icon Size</h2>
      </div>
      <code class="text-xs">80px</code>
    </label>
    <input
      id="icon-size"
      class="w-full rounded focus:outline-none focus:shadow-outline"
      type="range"
      min="1"
      max="100"
      step="1"
      value="50"
    />
  </div>
</template>

<script>
export default {
  name: 'IconSize',
}
</script>
