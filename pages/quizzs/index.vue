<script setup>
    const quizzs = await queryContent("quizzs").find();

    definePageMeta({
        layout: false,
    })

</script>

<template>
<div>
    <NuxtLayout name="navbar">
        <div class="w-full flex flex-col items-center justify-center">
            <div  class="flex w-3/5 flex-wrap gap-10 justify-between">
                <QuizzCard v-for="quizz in quizzs" :key="quizz.slug" :quizz="quizz">
                </QuizzCard>
            </div>
        </div>
    </NuxtLayout>

</div>


</template>
