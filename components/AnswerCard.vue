<script setup>
  const props = defineProps({
    answer: {
      type: {},
      required: true
      },
  });
</script>

<template>
  <div class="w-1/3 h-24 border flex rounded justify-center items-center cursor-pointer hover:bg-gray-300">
    <h1>{{answer.answer}}</h1>
  </div>
</template>
