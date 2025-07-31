<!-- src/components/Clock.vue -->
<template>
  <div class="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-lg dark:bg-slate-800 sm:p-8">
    
    <!-- #title のスタイル -->
    <div class="mb-6 rounded-full bg-green-600 px-5 py-2 text-2xl font-bold text-white dark:bg-green-800" >
      334 Clock
    </div>

    <div class="mb-4 rounded-lg bg-gray-100 p-4 font-sans text-[clamp(2.5rem,8vw,3.25rem)] font-thin tracking-normal text-slate-800 antialiased tabular-nums dark:bg-slate-700 dark:text-slate-100" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      {{ clock }}
    </div>


    <div class="mb-8 mt-4 text-base text-gray-500 dark:text-slate-300" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      現在 <span>{{ adjustment }}</span> ミリ秒の調整がされています。
    </div>

    <!-- ボタン群 -->
    <div class="flex flex-col gap-3">
      <!-- 
        - カラーユニバーサルデザインを考慮し、背景色と文字色のコントラスト比を意識しながら若干変更したが、全然満たせていない…。なお、満たすと目に刺さって見づらい気がしてしまってどうしよう。
      -->
      <div class="flex justify-center gap-3" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <button @pointerdown.prevent="slowDown(100)" class="w-32 rounded-lg bg-[#c0392b] py-3 font-bold text-white transition hover:bg-red-800 active:scale-95">
          -100 ms
        </button>
        <button @pointerdown.prevent="speedUp(100)" class="w-32 rounded-lg bg-[#2980b9] py-3 font-bold text-white transition hover:bg-blue-800 active:scale-95">
          +100 ms
        </button>
      </div>
      <div class="flex justify-center gap-3" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <button @pointerdown.prevent="slowDown(10)" class="w-32 rounded-lg bg-[#e74c3c] py-3 font-bold text-white transition hover:bg-red-600 active:scale-95">
          -10 ms
        </button>
        <button @pointerdown.prevent="speedUp(10)" class="w-32 rounded-lg bg-[#3498db] py-3 font-bold text-white transition hover:bg-blue-600 active:scale-95">
          +10 ms
        </button>
      </div>
      <div class="flex justify-center gap-3" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <button @pointerdown.prevent="slowDown(1)" class="w-32 rounded-lg bg-[#e85a4f] py-3 font-bold text-white transition hover:bg-red-500 active:scale-95">
          -1 ms
        </button>
        <button @pointerdown.prevent="speedUp(1)" class="w-32 rounded-lg bg-[#4aa3df] py-3 font-bold text-white transition hover:bg-blue-500 active:scale-95">
          +1 ms
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const clock = ref('00:00:00.000')
const adjustment = ref(0)
let frameId = 0 as number

// 時刻更新関数
const updateTime = () => {
  const now = new Date(Date.now() + adjustment.value)
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')
  const ms = String(now.getMilliseconds()).padStart(3, '0')
  clock.value = `${hh}:${mm}:${ss}.${ms}`
}

// AnimationFrame ループ
const loop = () => {
  updateTime()
  frameId = requestAnimationFrame(loop)
}

// adjustment 更新
const speedUp   = (ms: number) => { adjustment.value += ms }
const slowDown  = (ms: number) => { adjustment.value -= ms }

onMounted(() => {
  loop()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
})
</script>