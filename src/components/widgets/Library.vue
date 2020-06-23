<template>
  <div class="overflow-y-scroll my-5">
    <h2 class="text-xs text-gray-600 font-semibold tracking-wide">Library</h2>
    <ul class="space-y-2 p-2">
      <li
        class="text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      >
        <router-link class="flex items-center" to="/">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="w-40 truncate text-xs pl-1">
            Font Awesome
          </p>
        </router-link>
      </li>
      <li
        class="text-gray-800 hover:text-indigo-600 transition duration-150 ease-in-out"
      >
        <router-link class="flex items-center" to="/font-awesome">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="w-40 truncate text-xs pl-1">
            Hero Icons UI
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Library',
}
</script>

<style scoped>
.router-link-active {
  @apply text-indigo-700;
  @apply font-semibold;
}
</style>
