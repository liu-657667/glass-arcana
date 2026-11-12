<script setup lang="ts">
import shapes from './icons.json'
withDefaults(defineProps<{ name: keyof typeof shapes; size?: number | string; title?: string }>(), { size: 24 })
</script>

<template>
  <!-- shapes is trusted, bundled project data, never user-provided HTML. -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
    fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
    :role="title ? 'img' : undefined" :aria-label="title || undefined" :aria-hidden="title ? undefined : true"
    focusable="false">
    <g v-html="shapes[name]" />
  </svg>
</template>
