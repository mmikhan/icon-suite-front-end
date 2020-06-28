<template>
  <div class="space-y-2">
    <label
      class="flex items-center text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="fill-rule"
    >
      <input
        id="fill-rule"
        class="rounded focus:outline-none focus:shadow-outline"
        type="checkbox"
      />
      <p class="text-xs pl-1">Fill Rule</p>
    </label>

    <label
      class="flex items-center ml-4 text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="nonzero"
    >
      <input
        id="nonzero"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="fill-rule"
        value="nonzero"
      />
      <p class="text-xs pl-1">Non Zero</p>
    </label>
    <label
      class="flex items-center ml-4 text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      for="evenodd"
    >
      <input
        id="evenodd"
        class="focus:outline-none focus:shadow-outline"
        type="radio"
        name="fill-rule"
        value="evenodd"
      />
      <p class="text-xs pl-1">Even Odd</p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FillRule',
}
</script>
