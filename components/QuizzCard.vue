<script setup>
  const props = defineProps({
    quizz: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <div class="w-2/5 h-24 ">
    <NuxtLink :key="quizz._path" :to="`/quizzs/${quizz._path.split('/').pop()}`" class="h-full w-full border flex flex-col gap-2 rounded justify-center items-center cursor-pointer hover:bg-gray-300">
      <h1>{{quizz.title}}</h1>
      <p>{{ quizz.questions.length}} questions</p>
    </NuxtLink>
  </div>
</template>
