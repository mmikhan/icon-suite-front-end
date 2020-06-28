<template>
  <section
    class="flex flex-col flex-shrink-0 bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-2"
  >
    <div class="overflow-y-scroll">
      <h2 class="text-xs text-gray-600 font-semibold tracking-wide">
        Settings
      </h2>
      <ul class="space-y-2 p-2">
        <li
          class="text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
        >
          <router-link class="flex items-center" to="/settings/general">
            <svg
              class="w-5 h-5 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="w-40 truncate text-xs pl-1">
              General
            </p>
          </router-link>
        </li>
        <li
          class="text-gray-800 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-500 transition duration-150 ease-in-out"
        >
          <router-link class="flex items-center" to="/settings/optimization">
            <svg
              class="w-5 h-5 stroke-current stroke-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 21C4.79086 21 3 19.2091 3 17V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V17C11 19.2091 9.20914 21 7 21ZM7 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H16.6569M11 7.34312L12.6569 5.68629C13.4379 4.90524 14.7042 4.90524 15.4853 5.68629L18.3137 8.51472C19.0948 9.29577 19.0948 10.5621 18.3137 11.3431L9.82843 19.8284M7 17H7.01"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="w-40 truncate text-xs pl-1">
              Optimization
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
