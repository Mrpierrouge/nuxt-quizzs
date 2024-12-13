<template>
  <div>
    <div class="bg-green-300 w-full mb-10 py-5">
      <ul class="flex-row flex justify-around w-full font-bold">
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/quizzs">Quizzs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/history">Historique</NuxtLink>
        </li>
      </ul>
    </div>
  <slot />
  </div>
</template>
