<script setup>
    const { params } = useRoute();
    const quizzData = await queryContent(`quizzs/${params.quizz}`).findOne();
    const quizz = useQuizz(quizzData);
    const restart = () => {
        quizz.values.score = 0;
        quizz.values.step = 1;
    }
</script>
<template>
<div>
    <NuxtLayout name="navbar">
        <div class="w-full justify-center">
            <h1>{{ quizz.values.data.title }}</h1>
            <div v-if="quizz.values.step <= quizz.values.data.questions.length">
                <h2> question {{ quizz.values.step }}/{{ quizz.values.data.questions.length}}</h2>
                <h2>Current score : {{ quizz.values.score }}</h2>
                <h2>{{ quizz.values.data.questions[quizz.values.step - 1].title }}</h2>
                <div class="flex w-1/2 flex-wrap gap-5">
                    <AnswerCard v-for="answer in quizz.values.data.questions[quizz.values.step - 1].answers" :key="answer.slug" :answer="answer" @click="quizz.answer(answer.correct)"></AnswerCard>
                </div>
            </div>
            <div v-else>
                <h2>End of the quizz, Your score is :  {{ quizz.values.score }}/{{ quizz.values.data.questions.length }}</h2>
                <button @click="restart">Restart</button>
                <NuxtLink to="/quizzs">Other Quizzs</NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</div>
</template>