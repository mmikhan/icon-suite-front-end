<template>
  <section
    class="flex flex-col flex-shrink-0 overflow-y-hidden bg-gray-100 dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700 w-56 p-2"
  >
    <div class="flex justify-center items-center h-screen" v-if="isSelected">
      <p class="text-xs text-gray-800 dark:text-gray-500">No selection</p>
    </div>
    <div v-else class="flex flex-col overflow-y-hidden flex-grow">
      <Preview />
      <Code />
      <PrismEditor
        :line-numbers="true"
        :code="code"
        language="html"
      ></PrismEditor>
      <div class="overflow-y-scroll my-5">
        <h2 class="text-xs text-gray-600 font-semibold tracking-wide mb-3">
          Customization
        </h2>
        <div class="space-y-2 pl-4">
          <IconSize />
          <FillColor />
          <StrokeWidth />
          <StrokeColor />
          <FillRule />
          <StrokeLinecap />
          <StrokeLinejoin />
        </div>
      </div>
      <div class="flex justify-between mt-auto">
        <Reset />
        <ExportAs />
      </div>
    </div>
  </section>
</template>

<script>
import Code from '@/components/widgets/Code'
import IconSize from '@/components/widgets/IconSize'
import FillColor from '@/components/widgets/FillColor'
import StrokeWidth from '@/components/widgets/StrokeWidth'
import StrokeColor from '@/components/widgets/StrokeColor'
import FillRule from '@/components/widgets/FillRule'
import StrokeLinecap from '@/components/widgets/StrokeLinecap'
import StrokeLinejoin from '@/components/widgets/StrokeLinejoin'
import Reset from '@/components/Reset'
import ExportAs from '@/components/ExportAs'
import Preview from '@/components/widgets/Preview'
import PrismEditor from 'vue-prism-editor'

export default {
  name: 'Customizer',
  components: {
    Code,
    IconSize,
    FillColor,
    StrokeWidth,
    StrokeColor,
    FillRule,
    StrokeLinecap,
    StrokeLinejoin,
    ExportAs,
    Reset,
    Preview,
    PrismEditor,
  },
  data() {
    return {
      isSelected: false,
      code: `<svg width="88" height="88" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    }
  },
}
</script>

<style>
.prism-editor-wrapper {
  @apply h-auto !important;
  @apply text-xs;
  @apply rounded;
}

@media (prefers-color-scheme: dark) {
  .prism-editor__line-numbers,
  .prism-editor-wrapper .language-markup {
    @apply bg-gray-900 !important;
  }
}
</style>
