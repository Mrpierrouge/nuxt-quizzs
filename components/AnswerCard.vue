<script setup>
  const quizz = inject('quizz');
  const isAnim = ref(false);

  const props = defineProps({
    answer: {
      type: {},
      required: true
      },
  });
  const click = (correct) => {
    isAnim.value = true
    setTimeout(() => {
      quizz.answer(correct)
      isAnim.value = false
    }, 1000);
    
  }
</script>

<template>
  <div class="w-1/3 h-24 border flex rounded justify-center animation-tada-1s items-center cursor-pointer" :class="{
    'bg-green-300': isAnim && answer.correct,
    'bg-red-300': isAnim && !answer.correct,
    'animate-ping': isAnim,
    'hover:bg-gray-300': !isAnim
  }" @click="click(answer.correct)">
    <h1>{{answer.answer}}</h1>
  </div>
</template>
