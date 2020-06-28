<template>
  <div class="text-xs mb-5">
    <h2 class="text-gray-600 font-semibold tracking-wide">
      Information
    </h2>
    <div class="flex text-gray-800 dark:text-gray-500 p-2">
      <ul class="pr-2 space-y-1">
        <li>Name</li>
        <li>File Size</li>
        <li>File Type</li>
        <li>Library</li>
        <li>License</li>
        <li>Created</li>
        <li>Dimensions</li>
      </ul>
      <ul class="w-24 space-y-1">
        <li class="truncate">Home</li>
        <li class="truncate">231 B</li>
        <li class="truncate">SVG</li>
        <li class="truncate">Font Awesome</li>
        <li class="truncate">MIT</li>
        <li class="truncate">14/06/2020</li>
        <li class="truncate">Scalable</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
}
</script>
