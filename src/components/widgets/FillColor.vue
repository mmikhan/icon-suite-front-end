<template>
  <div>
    <label
      class="flex items-center justify-between text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="fill-color"
    >
      <div class="flex items-center">
        <input
          id="fill-color"
          class="rounded focus:outline-none focus:shadow-outline"
          type="checkbox"
        />
        <p class="text-xs pl-1">Fill Color</p>
      </div>
      <code class="text-xs">#f3f4f5</code>
    </label>
    <input
      class="w-full rounded focus:outline-none focus:shadow-outline dark:bg-gray-800"
      type="color"
      name="fill-color"
    />
  </div>
</template>

<script>
export default {
  name: 'FillColor',
}
</script>
