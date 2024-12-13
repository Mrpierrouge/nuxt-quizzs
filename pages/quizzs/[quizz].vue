<script setup>
    const { params } = useRoute();
    const quizzData = await queryContent(`quizzs/${params.quizz}`).findOne();
    const quizz = useQuizz(quizzData);
    quizz.values.date = Date.now();
</script>
<template>
<div>
    <NuxtLayout name="navbar">
        <div class="w-full justify-center items-center gap-10 flex flex-col">
            <h1>{{ quizzData.title }}</h1>
            <div v-if="quizz.values.step <= quizzData.questions.length" class="w-full flex flex-col items-center justify-center gap-5">
                <h2> question {{ quizz.values.step }}/{{ quizzData.questions.length}}</h2>
                <h2>Current score : {{ quizz.values.score }}</h2>
                <h2 class="mt-10 mb-5">{{ quizzData.questions[quizz.values.step - 1].title }}</h2>
                <div class="flex w-3/5 flex-wrap gap-10 justify-between">
                    <AnswerCard v-for="answer in quizzData.questions[quizz.values.step - 1].answers" :key="answer.slug" :answer="answer" @click="quizz.answer(answer.correct)"></AnswerCard>
                </div>
            </div>
            <div v-else class="flex flex-col gap-5 justify-center items-center">
                <h2>End of the quizz, Your score is :  {{ quizz.values.score }}/{{ quizzData.questions.length * quizz.values.MAX_TIME }}</h2>
                <button @click="quizz.restart">Restart</button>
                <NuxtLink to="/quizzs">Other Quizzs</NuxtLink>
                <NuxtLink to="/history">View history</NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</div>
</template>