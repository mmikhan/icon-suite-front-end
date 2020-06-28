<template>
  <div class="overflow-y-scroll">
    <h2 class="text-xs text-gray-600 font-semibold tracking-wide">
      Icon Pack
    </h2>
    <ul class="space-y-2 p-2">
      <li
        class="text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      >
        <router-link class="flex items-center" to="/download/free">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="w-40 truncate text-xs pl-1">
            Free
          </p>
        </router-link>
      </li>
      <li
        class="text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
      >
        <router-link class="flex items-center" to="/download/premium">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="w-40 truncate text-xs pl-1">
            Premium
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IconPack',
}
</script>
