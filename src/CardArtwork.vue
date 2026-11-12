<script setup lang="ts">
import {computed,ref,watch} from 'vue';
import {nextArtLoadState,artFailureMessage,type ArtLoadState} from './artLoadState';
import {candidateArt} from './art';
defineOptions({inheritAttrs:false});
const props=withDefaults(defineProps<{id:string;alt:string;locale?:'zh'|'en';sizes?:string;loading?:'lazy'|'eager'}>(),{locale:'zh',sizes:'(max-width: 600px) 82vw, 400px',loading:'eager'});
const loadState=ref<ArtLoadState>('responsive');watch(()=>props.id,()=>{loadState.value='responsive'});
function imageError(){loadState.value=nextArtLoadState(loadState.value);}
const srcset=computed(()=>loadState.value==='responsive'&&props.id in candidateArt?[320,640,1024].map(w=>`/art/derived/${props.id}-${w}.webp ${w}w`).join(', '):undefined);
</script>
<template><picture v-if="loadState!=='unavailable'"><source v-if="srcset" type="image/webp" :srcset="srcset" :sizes="sizes"><img v-bind="$attrs" :src="candidateArt[id]" :alt="alt" :loading="loading" decoding="async" width="1024" height="1536" @error="imageError"></picture><span v-else class="art-load-error" role="img" :aria-label="alt"><strong>{{alt}}</strong><span>{{artFailureMessage(locale)}}</span></span></template>
<style scoped>.art-load-error{display:flex;flex-direction:column;justify-content:center;gap:.6rem;aspect-ratio:2/3;width:100%;padding:1rem;box-sizing:border-box;background:#f3eee4;color:#352e27;text-align:center;font-size:.85rem;border:1px solid #d6c9b6;overflow-wrap:anywhere}</style>
