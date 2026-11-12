<script setup lang="ts">
import ArcanaIcon from './ArcanaIcon.vue';
import {ref,watch,onUnmounted} from 'vue';
import type {AIContext,AIMessage} from './ai';
import {localMockProvider} from './localMockProvider';
const props=defineProps<{context:AIContext}>();
const enabled=ref(false),draft=ref(''),messages=ref<AIMessage[]>([]),busy=ref(false),error=ref(false);
let controller:AbortController|null=null;
const label=(zh:string,en:string)=>props.context.locale==='zh'?zh:en;
function cancel(){controller?.abort();controller=null;busy.value=false;}
function reset(){cancel();messages.value=[];draft.value='';error.value=false;}
watch(()=>props.context,reset);watch(enabled,reset);onUnmounted(cancel);
async function send(){
 if(!enabled.value||busy.value||!draft.value.trim()||messages.value.length>=12)return;
 const next:AIMessage[]=[...messages.value,{role:'user',text:draft.value.trim()}];
 const active=new AbortController();controller=active;busy.value=true;error.value=false;
 try{const answer=await localMockProvider.reply(props.context,next,active.signal);
 if(controller!==active)return;
 messages.value=[...next,{role:'assistant',text:answer}];draft.value='';
 }catch{if(controller===active&&!active.signal.aborted)error.value=true;}
 finally{if(controller===active){busy.value=false;controller=null;}}
}
</script>
<template><aside class="ai-panel">
<span class="section-no">{{label('本机演示 · 非 AI','LOCAL DEMO · NOT AI')}}</span>
<h2><ArcanaIcon name="chat" :size="24" />{{label('继续聊聊这组牌','Continue the conversation')}}</h2>
<p>{{label('此区只提供离线模拟，不向外部服务商发送问题或牌阵。真实验收在下方独立区域，基础功能无需密钥。','This section is an offline mock and sends nothing to external providers. Live acceptance is a separate section below. Core features need no key.')}}</p>
<label class="reversal"><input type="checkbox" v-model="enabled">{{label('启用本机离线演示（非 AI，默认关闭）','Enable local offline demo (not AI, off by default)')}}</label>
<template v-if="enabled"><p>{{label('仅发送当前牌阵及本轮对话到本机 127.0.0.1:8787，回复为固定模拟文本。不保存对话，不改动牌面；切换记录或语言会清空本轮。','Only this reading and conversation go to 127.0.0.1:8787 on this computer. Replies are fixed mock text. Chat is not saved and cards do not change; changing the reading or language clears this chat.')}}</p>
<div aria-live="polite" class="chat-messages"><article v-for="(message,index) in messages" :key="index"><strong>{{message.role==='user'?label('你','You'):label('离线演示 · 非 AI','Offline demo · not AI')}}</strong><p>{{message.text}}</p></article></div>
<form @submit.prevent="send"><label for="reflection-message">{{label('演示消息','Demo message')}}</label><textarea id="reflection-message" v-model="draft" maxlength="2000" :disabled="busy||messages.length>=12"></textarea><button type="submit" :disabled="busy||!draft.trim()||messages.length>=12"><ArcanaIcon name="send" :size="20" />{{busy?label('等待本机回复…','Waiting for local reply…'):label('发送到本机演示','Send to local demo')}}</button><button v-if="busy" type="button" @click="cancel">{{label('取消','Cancel')}}</button></form>
<p v-if="error" role="alert">{{label('本机演示不可用。请运行 npm run reflection:mock 后重试；不会改用外部服务。','Local demo unavailable. Run npm run reflection:mock and retry; no external fallback is used.')}}</p><p v-if="messages.length>=12">{{label('本轮演示已达 6 次上限。','This demo has reached its 6-turn limit.')}}</p>
</template></aside></template>
<style scoped>.chat-messages article{padding:1rem;border:1px solid #b39b61;margin:1rem 0}.chat-messages p{white-space:pre-wrap;overflow-wrap:anywhere}form button{margin:.5rem .5rem .5rem 0}</style>
