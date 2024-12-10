<script setup>
    const { params } = useRoute();
    const quizz = await queryContent(`quizzs/${params.quizz}`).findOne();
    cont
</script>
<template>
<div>

</div>
</template>