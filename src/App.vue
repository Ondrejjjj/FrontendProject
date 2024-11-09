<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const isDarkMode = ref(false);

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
}
</script>

<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <header>
      <Navbar :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" /> <!-- Pass isDarkMode and toggle -->
    </header>
    <main class="content">
      <RouterView :isDarkMode="isDarkMode" /> <!-- Pass isDarkMode to RouterView for articles -->
    </main>
  </div>
</template>

<style scoped>
.content {
  margin-top: 80px;
}

/* Apply dark-mode styles globally */
.dark-mode {
  background-color: #333;
  color: #eee;
}
</style>
