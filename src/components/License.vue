<template>
  <div
    class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div
      class="bg-white rounded overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            <svg
              class="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              class="text-md leading-6 font-medium text-gray-800"
              id="modal-headline"
            >
              License activation
            </h3>
            <div class="mt-2 space-y-5">
              <p class="text-xs leading-5 text-gray-600">
                Unfortunately, your trial period has been expired. Please,
                purchase a license to continue enjoying the Icon Suite and
                support us to continue improving it.
              </p>
              <div class="relative">
                <span
                  class="flex items-center absolute text-gray-700 inset-y-0 left-0 pl-1"
                >
                  <svg
                    class="w-4 h-4 stroke-current stroke-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </span>
                <input
                  class="w-full bg-white text-sm text-gray-900 border border-gray-300 rounded appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-6"
                  type="text"
                  placeholder="Enter your license key"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            class="flex items-center text-xs bg-indigo-700 hover:bg-indigo-500 text-indigo-100 font-semibold py-1 px-2 border border-indigo-400 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <svg
              class="w-4 h-4 mr-1 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Activate</span>
          </button>
        </span>
        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            class="flex items-center text-xs bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            <svg
              class="w-4 h-4 mr-1 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Exit</span>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'License',
}
</script>

<style>
.prism-editor-wrapper .language-markup {
  position: initial;
}

#exportAs {
  position: initial;
}
</style>
