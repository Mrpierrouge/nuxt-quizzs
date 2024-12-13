<script setup>
    const history = inject('history')
</script>

<template>
<div>
    <NuxtLayout name="navbar">
        <div class="w-full flex flex-col items-center justify-center">
            <div  class="flex w-3/5 flex-wrap gap-10 justify-between">
                <HistoryCard v-for="quizz in history.history" :key="quizz.score" :quizz="quizz">
                </HistoryCard>
            </div>
        </div>
    </NuxtLayout>

</div>


</template>
