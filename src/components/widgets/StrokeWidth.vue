<template>
  <div>
    <label
      class="flex items-center justify-between text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="stroke-width"
    >
      <div class="flex items-center">
        <input
          id="stroke-width"
          class="rounded focus:outline-none focus:shadow-outline"
          type="checkbox"
        />
        <p class="text-xs pl-1">Stroke Width</p>
      </div>
      <code class="text-xs">2px</code>
    </label>
    <input
      class="w-full rounded focus:outline-none focus:shadow-outline"
      type="range"
      min="0.1"
      max="10"
      step="0.1"
      value="1"
    />
  </div>
</template>

<script>
export default {
  name: 'StrokeWidth',
}
</script>
