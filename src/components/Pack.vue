<template>
  <div
    class="flex items-center w-full max-w-sm bg-gray-100 rounded p-2 mb-5 shadow"
  >
    <div class=" w-1/6">
      <div
        class="w-10 h-10 bg-gray-600 rounded-full text-center text-white font-semibold text-2xl hover:shadow-outline transition duration-150 ease-in-out"
      >
        R
      </div>
    </div>
    <div class="w-3/6">
      <div class="space-x-2">
        <a
          class="text-sm text-gray-800 tracking-wide font-semibold hover:text-indigo-600 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          href="https://github.com/refactoringui/heroicons"
          target="_blank"
          >Heroicons</a
        >
        <a
          class="text-xs text-white tracking-wider rounded px-2 bg-blue-700 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          href="https://github.com/refactoringui/heroicons/blob/master/LICENSE"
          >MIT</a
        >
      </div>
      <p class="text-xs text-gray-700">
        A set of free high-quality SVG icons for UI development.
      </p>
    </div>
    <div class="w-2/6 flex justify-end">
      <button
        class="flex items-center text-xs bg-indigo-700 hover:bg-indigo-500 text-indigo-100 font-semibold py-1 px-2 border border-indigo-400 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        @click="exportIcon = !exportIcon"
      >
        <svg
          class="w-4 h-4 mr-1 stroke-current stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
        <span>Install</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pack',
}
</script>
