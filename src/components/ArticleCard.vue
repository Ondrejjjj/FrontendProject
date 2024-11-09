<!-- src/components/ArticleCard.vue -->
<template>
  <div :class="['article-card', { 'dark-mode': isDarkMode }]">
    <h2>{{ article.title }}</h2>
    <p>{{ article.summary }}</p>
    <button @click="showContent = !showContent">{{ showContent ? 'Hide' : 'Read More' }}</button>
    <p v-if="showContent">{{ article.content }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  article: Object,
  isDarkMode: Boolean,
});
const showContent = ref(false);
</script>

<style scoped>
.article-card {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px; /* Rounded corners */
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text-light);
}

.article-card.dark-mode {
  background-color: var(--color-background-dark); /* Dark background */
  color: var(--color-text-dark); /* Light text for dark mode */
}

/* Define color variables for light and dark modes */
:root {
  --color-background-light: #fff;
  --color-text-light: #000;
  --color-border: #ddd;
}
.dark-mode {
  --color-background-dark: #333;
  --color-text-dark: #eee;
}
</style>
