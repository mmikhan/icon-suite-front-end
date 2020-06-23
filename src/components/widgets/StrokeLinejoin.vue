<template>
  <div class="space-y-2">
    <label
      class="flex items-center text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="stroke-linejoin"
    >
      <input
        id="stroke-linejoin"
        class="rounded focus:outline-none focus:shadow-outline"
        type="checkbox"
      />
      <p class="text-xs pl-1">Stroke Linejoin</p>
    </label>

    <label
      class="flex items-center ml-4 text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="miter"
    >
      <input
        id="miter"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linejoin"
        value="miter"
      />
      <p class="text-xs pl-1">Miter</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="round"
    >
      <input
        id="round"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linejoin"
        value="round"
      />
      <p class="text-xs pl-1">Round</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="bevel"
    >
      <input
        id="bevel"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linejoin"
        value="bevel"
      />
      <p class="text-xs pl-1">Bevel</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="miter-clip"
    >
      <input
        id="miter-clip"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linejoin"
        value="miter-clip"
      />
      <p class="text-xs pl-1">Miter Clip</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      for="arcs"
    >
      <input
        id="arcs"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linejoin"
        value="arcs"
      />
      <p class="text-xs pl-1">Arcs</p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'StrokeLinejoin',
}
</script>
