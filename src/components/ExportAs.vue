<template>
  <div id="exportAs" class="relative">
    <div
      class="absolute flex flex-col items-center w-full text-xs bg-white hover:bg-white-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      style="margin-top: -9.7rem;"
      v-if="exportIcon"
    >
      <button
        class="flex items-center hover:text-indigo-700 font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <svg
          class=" w-4 h-4 mr-1 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Base64
      </button>
      <button
        class="flex items-center hover:text-indigo-700 font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <svg
          class=" w-4 h-4 mr-1 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        JPEG
      </button>
      <button
        class="flex items-center hover:text-indigo-700 font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <svg
          class=" w-4 h-4 mr-1 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        PNG
      </button>
      <button
        class="flex items-center hover:text-indigo-700 font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        <svg
          class=" w-4 h-4 mr-1 stroke-current stroke-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        SVG
      </button>
      <div
        class="absolute w-3 h-3 bg-white border-b border-r border-gray-400 rounded transform rotate-45 top-0"
        style="margin-top: 8.8rem;"
      ></div>
    </div>
    <button
      class="flex items-center text-xs bg-indigo-700 hover:bg-indigo-500 text-indigo-100 font-semibold py-1 px-2 border border-indigo-400 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      @click="exportIcon = !exportIcon"
    >
      <svg
        class="w-4 h-4 mr-1 stroke-current stroke-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Export</span>
      <svg
        class="w-3 h-3 stroke-current stroke-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExportAs',
  data() {
    return {
      exportIcon: false,
    }
  },
}
</script>
