<template>
  <div class="flex w-full">
    <div class="w-1/3">
      <h2
        class="text-xs text-gray-800 dark:text-gray-600 font-semibold tracking-wide"
      >
        General
      </h2>
      <h3 class="text-xs text-gray-600 dark:text-gray-500">
        Changes will be applicable directly into the application itself.
      </h3>
    </div>
    <div class="w-2/3 space-y-5">
      <label class="flex flex-col space-y-1">
        <span
          class="text-xs text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 font-semibold transition duration-150 ease-in-out"
          >Default storage location</span
        >
        <div class="flex">
          <span
            tabindex="0"
            class="flex items-center text-xs bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-500 font-semibold px-2 border border-r-0 border-gray-400 dark:border-gray-700 rounded rounded-r-none focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <svg
              class="w-4 h-4 mr-1 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Select</span>
          </span>
          <input
            class="w-0 h-0 invisible"
            type="file"
            name="storage-location"
          />
          <input
            class="w-full max-w-md bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-500 border border-gray-400 dark:border-gray-700 rounded rounded-l-none appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-2"
            type="text"
            placeholder="/Users/mazik/Desktop/untitled"
          />
        </div>
      </label>
      <label class="flex flex-col space-y-1">
        <span
          class="text-xs text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 font-semibold transition duration-150 ease-in-out"
          >Default bookmark location</span
        >
        <div class="flex">
          <span
            tabindex="0"
            class="flex items-center text-xs bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-800 dark:text-gray-500 font-semibold px-2 border border-r-0 border-gray-400 dark:border-gray-700 rounded rounded-r-none focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <svg
              class="w-4 h-4 mr-1 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Select</span>
          </span>
          <input
            class="w-0 h-0 invisible"
            type="file"
            name="storage-location"
          />
          <input
            class="w-full max-w-md bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-500 border border-gray-400 dark:border-gray-700 rounded rounded-l-none appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-2"
            type="text"
            placeholder="/Users/mazik/Desktop/untitled"
          />
        </div>
      </label>
      <label class="flex flex-col">
        <span
          class="text-xs text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 font-semibold transition duration-150 ease-in-out"
          >Boot</span
        >
        <div>
          <input type="checkbox" name="startup" />
          <span class="text-xs text-gray-800 dark:text-gray-500 ml-2"
            >Login at startup</span
          >
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'General',
}
</script>
