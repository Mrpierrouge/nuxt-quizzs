<script setup>
  const quizz = inject('quizz');
  const isAnim = ref(false);
  const isPending = ref(false);
  const props = defineProps({
    answer: {
      type: {},
      required: true
      },
  });
  const click = (isCorrect) => {
    if (isPending.value) {
      return
    } else {
      isAnim.value = true
      isPending.value = true
      setTimeout(() => {
        quizz.answer(isCorrect)
        isAnim.value = false
        isPending.value = false
      }, 1000);
    }

    
  }
</script>

<template>
  <div class="w-1/3 h-24 border flex rounded justify-center animation-tada-1s items-center cursor-pointer" :class="{
    'bg-green-300': isAnim && answer.isCorrect,
    'bg-red-300': isAnim && !answer.isCorrect,
    'animate-ping': isAnim,
    'hover:bg-gray-300': !isAnim
  }" @click="click(answer.isCorrect)">
    <h1>{{answer.answer}}</h1>
  </div>
</template>
