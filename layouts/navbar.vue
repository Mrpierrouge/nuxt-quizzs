<template>
  <div>
    <div class="bg-green-300 w-full mb-10">
      <ul class="flex-row flex justify-around w-full">
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/quizzs">Quizzs</NuxtLink>
        </li>
        <li>
          Résultats
        </li>
      </ul>
    </div>
  <slot />
  </div>
</template>
