<template>
  <MainComponent />
</template>

<script setup>
import MainComponent from '~/components/MainComponent.vue';
</script>

<style>
/* @import '@csstools/normalize.css'; */
@import 'reset-css';
@import 'sanitize.css/assets.css';

:root {
  --font-title: Montserrat, sans-serif;
  --font-text: Open-sans, sans-serif;
  font-family: var(--font-text);
}

html,
body,
#__nuxt {
  height: 100%;
}

.nuxt-icon {
  width: 1em;
  height: 1em;
  margin-bottom: 0;
  vertical-align: middle;
}
.nuxt-icon--fill,
.nuxt-icon--fill * {
  fill: currentColor;
}
</style>
