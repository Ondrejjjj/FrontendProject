<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Dark mode and login state
const isDarkMode = ref(false);
const isLoggedIn = ref(false);

// Toggle theme function
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add('bg-dark', 'text-light');
    document.body.classList.remove('bg-light', 'text-dark');
  } else {
    document.body.classList.add('bg-light', 'text-dark');
    document.body.classList.remove('bg-dark', 'text-light');
  }
};

// Logout function (extend with actual logic if needed)
const logout = () => {
  isLoggedIn.value = false;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
    <a class="navbar-brand" href="#">My Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
      </ul>

      <!-- Right aligned items -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button
              class="btn"
              :class="[
              isDarkMode ? 'btn-light text-dark custom-dark-btn' : 'btn-outline-dark',
            ]"
              @click="toggleTheme"
          >
            {{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}
          </button>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <button class="nav-link btn btn-link" @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.navbar-nav {
  margin-left: 20px;
}

.custom-dark-btn {
  background-color: #000;
  border-color: #000;
  color: #fff;
}

@media (min-width: 1024px) {
  .navbar {
    padding: 10px 20px;
  }
}
</style>
