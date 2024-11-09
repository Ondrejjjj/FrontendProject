

<!-- src/pages/Home.vue -->

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Blogové články</h1>
    <div class="row">
      <div class="col-md-4" v-for="article in articles" :key="article.id">
        <ArticleCard :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import { useBlogStore } from '../store/blog';
import ArticleCard from '../components/ArticleCard.vue';

export default {
  components: { ArticleCard },
  setup() {
    const blogStore = useBlogStore();
    return { articles: blogStore.articles };
  }
};
</script>
