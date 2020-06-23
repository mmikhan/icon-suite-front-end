<template>
  <div>
    <label
      class="flex items-center justify-between text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="stroke-color"
    >
      <div class="flex items-center">
        <input
          id="stroke-color"
          class="rounded focus:outline-none focus:shadow-outline"
          type="checkbox"
        />
        <p class="text-xs pl-1">Stroke Color</p>
      </div>
      <code class="text-xs">#f3f4f5</code>
    </label>
    <input
      class="w-full rounded focus:outline-none focus:shadow-outline"
      type="color"
      name="stroke-color"
    />
  </div>
</template>

<script>
export default {
  name: 'StrokeColor',
}
</script>
