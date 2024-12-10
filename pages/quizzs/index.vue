<script setup>
    const quizzs = await queryContent("quizzs").find();
</script>

<template>
<div>
    <Header></Header>
    <div v-for="quizz in quizzs" :key="quizz.slug">
        <NuxtLink :key="quizz._path" :to="`/quizzs/${quizz._path.split('/').pop()}`" class="text-blue-500 hover:text-blue-700 hover:underline">
            {{ quizz.title }}
        </NuxtLink>
    </div>
</div>

</template>
