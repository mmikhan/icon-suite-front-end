<template>
  <div class="flex w-full">
    <div class="w-1/3">
      <h2 class="text-xs text-gray-800 font-semibold tracking-wide">
        Optimization
      </h2>
      <h3 class="text-xs text-gray-600">
        Changes will be applicable directly into the SVG icon source code
        itself.
      </h3>
    </div>
    <div class="w-2/3">
      <h3
        class="text-xs text-gray-800 hover:text-indigo-600 font-semibold transition duration-150 ease-in-out"
      >
        Icon optimization
      </h3>
      <div class="flex flex-col space-y-1">
        <label>
          <input type="checkbox" name="startup" value="cleanupAttrs" checked />
          <span class="text-xs text-gray-800 ml-2">Cleanup attributes</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeDoctype" checked />
          <span class="text-xs text-gray-800 ml-2">Remove doctype</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeXMLProcInst"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove XML processing instruction</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeComments"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove comments</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeMetadata"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove metadata</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeTitle" checked />
          <span class="text-xs text-gray-800 ml-2">Remove title</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeDesc" checked />
          <span class="text-xs text-gray-800 ml-2">Remove description</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeUselessDefs"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove useless defs</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeEditorsNSData"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove editor NS data</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeEmptyAttrs"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove empty attributes</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeHiddenElems"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove hidden elements</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeEmptyText"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove empty text</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeEmptyContainers"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove empty containers</span
          >
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeViewBox" />
          <span class="text-xs text-gray-800 ml-2">Remove viewBox</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="cleanupEnableBackground"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove/tidy enable-background</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="convertStyleToAttrs"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Convert style to attributes</span
          >
        </label>
        <label>
          <input type="checkbox" name="startup" value="convertColors" checked />
          <span class="text-xs text-gray-800 ml-2">Convert colors</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="convertPathData"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Convert path data</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="convertTransform"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Convert transform</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeUnknownsAndDefaults"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove unknowns and defaults</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeNonInheritableGroupAttrs"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove non-inheritable group attributes</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeUselessStrokeAndFill"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Remove useless stroke and fill</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeUnusedNS"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove unused NS</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="cleanupIDs" checked />
          <span class="text-xs text-gray-800 ml-2">Cleanup ID's</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="cleanupNumericValues"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Cleanup numeric values</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="moveElemsAttrsToGroup"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Move element attributes to group</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="moveGroupAttrsToElems"
            checked
          />
          <span class="text-xs text-gray-800 ml-2"
            >Move group attributes to elements</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="collapseGroups"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Collapse groups</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeRasterImages" />
          <span class="text-xs text-gray-800 ml-2">Remove raster images</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="mergePaths" checked />
          <span class="text-xs text-gray-800 ml-2">Merge paths</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="convertShapeToPath"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Convert shape to path</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="sortAttrs" checked />
          <span class="text-xs text-gray-800 ml-2">Sort attributes</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="startup"
            value="removeDimensions"
            checked
          />
          <span class="text-xs text-gray-800 ml-2">Remove dimensions</span>
        </label>
        <label>
          <input type="checkbox" name="startup" value="removeAttrs" checked />
          <span class="text-xs text-gray-800 mx-2">Remove attributes</span>
          <input
            class="bg-white text-xs text-gray-900 border border-gray-400 rounded appearance-none leading-normal placeholder-gray-700 focus:outline-none focus:shadow-outline pl-2"
            type="text"
            value="stroke|fill"
          />
        </label>
      </div>
      <div class="flex justify-end space-x-5 mb-5">
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
          <span>Reset</span>
        </button>
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Update</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Optimization',
}
</script>
