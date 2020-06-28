<template>
  <div class="space-y-2">
    <label
      class="flex items-center text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="stroke-linecap"
    >
      <input
        id="stroke-linecap"
        class="rounded focus:outline-none focus:shadow-outline"
        type="checkbox"
      />
      <p class="text-xs pl-1">Stroke Linecap</p>
    </label>

    <label
      class="flex items-center ml-4 text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="butt"
    >
      <input
        id="butt"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linecap"
        value="butt"
      />
      <p class="text-xs pl-1">Butt</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="round"
    >
      <input
        id="round"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linecap"
        value="round"
      />
      <p class="text-xs pl-1">Round</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="square"
    >
      <input
        id="square"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="stroke-linecap"
        value="square"
      />
      <p class="text-xs pl-1">Square</p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'StrokeLinecap',
}
</script>
