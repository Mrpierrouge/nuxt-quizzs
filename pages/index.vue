<script setup>
definePageMeta({
    layout: false,
})
</script>

<template>
<div>
    <NuxtLayout name="navbar">
        <div class="w-full flex flex-col items-center justify-center">
            <div class="w-4/5 flex flex-col items-center justify-center text-center mb-10 text-xl">
                Ceci est un projet effectuer dans le cadre de mes études, il a pour but de me faire découvrir et manipuler les bases de Nuxt.js.
            </div>
            <p class="flex flex-col items-center w-4/5 justify-center text-center text-l">
                Vous trouverez dans la page /quizzs une liste de quizzs (également accessible via le menu, en cliquant sur "quizz").
                Vous pouvez les lancer et répondre aux questions, un score vous sera attribuer a la fin de chaque quizz en fonction de votre temps de réponse.
                Vous pouvez également consulter vos scores précédents dans la page /history (également accessible via le menu, en cliquant sur "history").
                Chaque quizz possède 5 questions, chacun pouvant rapporter jusqu'a 50 points lorsque vous répondes en moins d'1 seconde, un quizz comportant donc 250 points.
            </p>
            <div class="mt-10">
                You can see the project online on <a href="https://nuxt-quizzs.vercel.app/" class="text-blue-500 underline">Vercel</a> and see the code on <a href="https://github.com/Mrpierrouge/nuxt-quizzs" class="text-blue-500 underline">Github</a>
            </div>
        </div>
        
    </NuxtLayout>
</div>
</template>
