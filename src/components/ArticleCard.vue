
<!-- src/components/ArticleCard.vue -->

<template>
  <v-card class="mb-3">
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>{{ article.summary }}</v-card-text>
    <router-link :to="`/blogs/${article.id}`" class="btn btn-primary">Čítať ďalej</router-link>
  </v-card>
</template>

<script>
export default {
  props: {
    article: Object
  }
};
</script>

<style scoped>
.btn {
  margin-top: 10px;
}
</style>

