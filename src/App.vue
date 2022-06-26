<template>
  <div>
    <Header/>
    <main>
      <div class="container py-5">
        <router-view />
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

