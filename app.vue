<script setup>
  const history = useHistory()
  provide('history', history)
</script>

<template>
  <div>
    <NuxtPage></NuxtPage> 
  </div>
</template>