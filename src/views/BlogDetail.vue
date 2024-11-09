<!-- src/pages/BlogDetail.vue -->

<template>
  <div class="container mt-5">
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.content }}</p>
    <router-link to="/" class="btn btn-secondary mt-3">Naspäť</router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useBlogStore } from '../store/blog';

export default {
  setup() {
    const route = useRoute();
    const blogStore = useBlogStore();
    const article = blogStore.getArticleById(Number(route.params.id));
    return { article };
  }
};
</script>
