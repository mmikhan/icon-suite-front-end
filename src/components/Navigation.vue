<template>
  <section
    class="flex flex-col justify-between items-center bg-blue-900 border-r border-blue-300 text-blue-300 p-2"
  >
    <ul class="flex flex-col items-center space-y-6">
      <li class="text-blue-100 bg-blue-800 rounded-lg p-2 mb-4">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            d="M11 23c-1.1 0-2-.9-2-2v-2h6v2c0 1.1-.9 2-2 2h-2m1-20c.28 0 .55 0 .81.05C13.42 4.22 14 6.26 14 9c0 2.1-1 7-1 7h-2s-1-4.9-1-7c0-2.74.58-4.78 1.19-5.95.26-.05.53-.05.81-.05m0-2c-.71 0-1.39.09-2.05.26C8.78 2.83 8 5.71 8 9c0 2.28.38 4.37 1 7 0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2 .62-2.63 1-4.72 1-7 0-3.29-.78-6.17-1.95-7.74C13.39 1.09 12.71 1 12 1M4 8c0 3.18 1.85 7.92 4.54 9.21-.54-1-.93-2.54-1.2-4.21C6.55 11.53 6 9.62 6 8c0-1.34.44-2.33 1.47-3.2.26-1.13.62-2.15 1.07-3.01C5.85 3.08 4 4.82 4 8m11.46-6.21c.45.86.81 1.88 1.07 3.01C17.56 5.67 18 6.66 18 8c0 1.62-.55 3.53-1.34 5-.27 1.67-.66 3.21-1.2 4.21C18.15 15.92 20 11.18 20 8s-1.85-4.92-4.54-6.21z"
          />
        </svg>
      </li>
      <li class="hover:text-blue-100 transition duration-150 ease-in-out">
        <router-link to="/">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </li>
      <li class="hover:text-blue-100 transition duration-150 ease-in-out">
        <router-link to="/bookmark">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </li>
      <li class="hover:text-blue-100 transition duration-150 ease-in-out">
        <router-link to="/download">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </li>
    </ul>
    <ul>
      <li class="hover:text-blue-100 transition duration-150 ease-in-out">
        <router-link to="/settings">
          <svg
            class="w-5 h-5 stroke-current stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.router-link-exact-active {
  @apply text-blue-100;
}
</style>
