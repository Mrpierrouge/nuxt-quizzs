<script setup>
    const { params } = useRoute();
    const quizzData = await queryContent(`quizzs/${params.quizz}`).findOne();
    const quizz = useQuizz(quizzData);
</script>
<template>
<div>
    <Header></Header>
    <div class="w-full justify-center">
        <h1>{{ quizz.values.data.title }}</h1>
            <h2>{{ quizz.values.data.questions[quizz.values.step - 1].title }}</h2>
            <div class="flex w-1/2 flex-wrap gap-5">
                <AnswerCard v-for="answer in quizz.values.data.questions[quizz.values.step - 1].answers" :key="answer.slug" :answer="answer" @click="quizz.answer(answer)"></AnswerCard>
            </div>
    </div>
</div>
</template>