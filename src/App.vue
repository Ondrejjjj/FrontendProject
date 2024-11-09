<script setup lang="ts">
import Navbar from './components/Navbar.vue';  // Import navbar komponentu
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <!-- Umiesťujeme Navbar do hlavičky -->
    <header>
      <Navbar /> <!-- Použitie Navbar komponentu -->
    </header>

    <!-- Content Area -->
    <main class="content">
      <RouterView /> <!-- Tu bude zobrazovať obsah jednotlivých stránok -->
    </main>
  </div>
</template>

<style scoped>
/* Content area adjusts margin to avoid overlap with navbar */
.content {
  margin-top: 80px; /* Adjust this value based on navbar height */
}
</style>
